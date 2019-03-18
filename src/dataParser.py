import os

def getImportedFileNames(pathToFile):
    
    imports = []
    regex = /(?<=\/)(\w*)(?=\.sol)/
  try {
    const rlp = readline.createInterface({
      input: fs.createReadStream(pathToFile),
    });
    let array = await new Promise((resolve) => {
      rlp.forEach((line, index) => {
        if (line.includes('import')) {
          imports.push(line.match(regex)[0]);
        }
        if (index === 10) {
          resolve(imports);
        }
      });
    })
    return array


def getObjectNameStringChildrenArray(dir):
