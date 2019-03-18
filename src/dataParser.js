/*
* get data from node_module openzeppelin-eth
*
* build :
*   all contracts - ContractList
*   get abis - events, functions,
* contracts :
*   get imports - data for mindmaps and Edge Bundling circle
*   get state vars & mappings
* zos.<network>.json
*   get network, contractName, address
*/
// import { contractData } from './zeppelinContractData';
const contractData = require('./contractData');
const readline = require('readline-promise').default
const fs = require('fs');
const path = require('path');

// export - abis
function getContractList() {
  fs.readdir('../node_modules/openzeppelin-eth/build/contracts', function(err, contracts) {
    let contractNames = contracts.map((contract) => {
      let name = contract.substring(0, contract.length - 5);
      return name;
    })
    console.log(contractNames);
    return contractNames;
  });
}
// getContractList(); // test

async function getImportedFileNames(pathToFile) {
  let imports = [];
  let parent;
  // get array of path from 'node_modules'
  let pathArray = pathToFile.split('/').slice(1);
  // let regex = /(?<=\")([\/\w]*)(?=\.sol)/;
  let regexDoubleQuote = /"(.*?)"/;
  let regexSingleQuote = /'(.*?)'/;
  try {
    const rlp = readline.createInterface({
      input: fs.createReadStream(pathToFile),
    });
    let array = await new Promise((resolve) => {
      rlp.forEach((line, index) => {
        if (line.includes('import')) {
          // import path as string
          let importPath = line.match(regexDoubleQuote) ?
            line.match(regexDoubleQuote)[0] : line.match(regexSingleQuote)[0];

          // console.log('IMPORTPATH', importPath);
          // remove " and .sol"
          importPath = importPath
            .substring(1, importPath.length - 5);

          let importPathArray = importPath
              .split('/')
              .filter(piece => piece !== '..' && piece !== '.' );

          if (importPath.includes('../..')) {
            // take 3 off end of pathArray
            parent = pathArray.slice(0, pathArray.length - 3)
              .concat(importPathArray
              ).join('.')
          } else
          if (importPath.includes('..')) {
            // take 2 off end of pathArray
            parent = pathArray.slice(0, pathArray.length - 2)
              .concat(importPathArray
              ).join('.')
          } else
          if (importPath.includes('.')) {
            // take 1 off end of pathArray
            parent = pathArray.slice(0, pathArray.length - 1)
              .concat(importPathArray
              ).join('.')
          } else
          if (importPath.includes('zos-lib')) {
            // add "node_modules" to start
            console.log('IMPORTPATH', importPath);
            // parent = importPath.split('/').unshift('node_modules').join('.')
            parent = ['node_modules'].concat(importPath.split('/')).join('.')
          } else {
            parent = importPath.split('/').join('.');
          }

          console.log('PARENT', parent);

          imports.push(parent);
        }
        if (index === 10) {
          // console.log('IMPORTS', imports);
          resolve(imports);
        }
      });
    })
    return array;
  } catch(error) {
    console.log('getImportedFileNames ERROR', error);
  }
}

// List all files in a directory in Node.js recursively in a synchronous fashion
// returns a flat array
function getArrayOfFilePaths(dir, filelist) {
  let files = fs.readdirSync(dir);
  filelist = filelist || [];
  files.forEach(function(file) {
    if (fs.statSync(path.join(dir, file)).isDirectory()) {
      filelist = getArrayOfFilePaths(path.join(dir, file), filelist);
    }
    else {
      if (file.includes('.sol')) {
        filelist.push({
          name: file.substring(0, file.length - 4),
          path: path.join(dir, file)
        });
      }
    }
  });
  return filelist;
};
// console.log(getArrayOfFilePaths('../node_modules/openzeppelin-eth/contracts'));

async function assignImportsObject(object) {
  let fileNamesArray = await getImportedFileNames(object.path);
  let obj = await Object.assign(object, {
    imports: fileNamesArray
  })
  return obj;
};

async function addImports(arrayOfFilePaths) {
  let fullObjects = await Promise.all(
    arrayOfFilePaths.map(async (object) => {
      let imports = await assignImportsObject(object);
      return imports;
    })
  )
  // console.log('FULLOBJECTS', fullObjects);
  return fullObjects;
}
// console.log(addImports(getArrayOfFilePaths('../node_modules/openzeppelin-eth/contracts')).then(array => console.log(array)));

/* create file */
async function createFile(filename, fxn, contractBool) {
  let string = '';
  let data = [];
  if (contractBool) {
    string = 'const contractData = '
    let object = await fxn();
    data = await string + JSON.stringify(object, null, 2) + '\n module.exports = contractData;';
  } else {
    let string = 'export const hierarchyData = '
    // let object = { name: 'node_modules', children: fxn };
    data = await string + JSON.stringify(fxn, null, 2);
  }
  fs.writeFile(filename, data, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
}
createFile(
  "hierarchyData.js",
  combineHierarchies('../node_modules/openzeppelin-eth/contracts', '../node_modules/zos-lib/contracts'),
  false
);
// createFile(
//   "contractData.js",
//   () => combineModules('../node_modules/openzeppelin-eth/contracts', '../node_modules/zos-lib/contracts'),
//   true
// );

/* combine node modules */
async function combineModules(path1, path2) {
  let array1 = await addImports(getArrayOfFilePaths(path1));
  let array2 = await addImports(getArrayOfFilePaths(path2));
  return array1.concat(array2);
}

function combineHierarchies(path1, path2) {
  let array = [];
  array.push({
    name: 'openzeppelin-eth',
    children: [{
      name: 'contracts',
      children: getObjectOfFileHierarchy('../node_modules/openzeppelin-eth/contracts')
    }]
  });
  array.push({
    name: 'zos-lib',
    children: [{
      name: 'contracts',
      children: getObjectOfFileHierarchy('../node_modules/zos-lib/contracts')
    }]
  });
  return { name: 'node_modules', children: array }
}

/* creates JSON from the file structure */
function getObjectOfFileHierarchy(dir, filelist = []) {
  // return new Promise((resolve, reject) => {
    // try{
      let files = fs.readdirSync(dir);
      files.forEach(function(file) {
        if (fs.statSync(path.join(dir, file)).isDirectory()) {
          let children = getObjectOfFileHierarchy(path.join(dir, file));
          // setTimeout(500);
          filelist = filelist.concat([{
            name: file,
            children
          }]);
        }
        else {
          if (file.includes('.sol')) {
            let name = file.substring(0, file.length - 4);
            let object = contractData.filter(object => object.name === name);
            // console.log('OBJECT', object);
            let imports = object[0].imports;
            console.log('IMPORTS', imports);
            filelist = filelist.concat([{
              name,
              path: path.join(dir, file),
              imports
            }]);
          }
        }
      });
      // resolve(filelist)
      return filelist;
    // }catch(error) {
    //   reject(error);
    // }
  // })
};
// console.log(getObjectOfFileHierarchy('../node_modules/openzeppelin-eth/contracts'));

// function getImportsFromContractData(name) {
//   let object = contractData.filter(object => object.name === name);
//   // console.log('OBJECT', object);
//   return object.imports;
// }

// function getObjectOfFileHierarchy(dir, filelist = []) {
//   let files = fs.readdirSync(dir);
//   files.forEach(function(file) {
//     if (fs.statSync(path.join(dir, file)).isDirectory()) {
//       let children = getObjectOfFileHierarchy(path.join(dir, file));
//       // setTimeout(500);
//       filelist = filelist.concat([{
//         name: file,
//         children
//       }]);
//     }
//     else {
//       if (file.includes('.sol')) {
//         filelist = filelist.concat([{
//           name: file.substring(0, file.length - 4),
//           path: path.join(dir, file)
//         }]);
//       }
//     }
//   });
//   return filelist;
// };

/* hack tool */
const wait = ms => new Promise((resolve) => setTimeout(resolve, ms));

/* create { name: <string>, children: [...] } */
// List all files in a directory in Node.js recursively in a synchronous fashion
function getObjectNameStringChildrenArray(dir, filelist) {
  let files = fs.readdirSync(dir);
  filelist = filelist || [];
  files.forEach(function(file) {
    if (fs.statSync(path.join(dir, file)).isDirectory()) {
      filelist = getObjectNameStringChildrenArray(path.join(dir, file), filelist);
    }
    else {
      if (file.includes('.sol')) {
        filelist.push({
          name: file.substring(0, file.length - 4),
          path: path.join(dir, file)
        });
      }
    }
  });
  return filelist;
};
// console.log(getObjectNameStringChildrenArray('../node_modules/openzeppelin-eth/contracts', 'contracts'));
