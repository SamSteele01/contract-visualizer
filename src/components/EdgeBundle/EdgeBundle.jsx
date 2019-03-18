import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as d3 from 'd3';

// import ToggleButton from '../Buttons/ToggleButton';
import { hierarchyData } from '../../hierarchyData';

export default class EdgeBundle extends Component {

  static propTypes = {
    toggleBool: PropTypes.bool,
    curveBeta: PropTypes.number,
    clusterSize: PropTypes.number
  };

  constructor(props) {
    super(props);

    this.canvasRef = React.createRef();

    this.state = {
      width: 800,
      height: 800,
      // toggleButton: false,
    };
  }

  componentDidMount() {
    this.drawChart();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps !== this.props) {
      this.clearCanvas();
      this.drawChart();
      // this.forceUpdate();
    }
  }

  // setToggleButtonValue = (event) => {
  //   console.log('SETTOGGLEBUTTONVALUE');
  //   this.setState({ toggleButton: !this.state.toggleButton })
  // }

  id(node) {
    return `${node.parent ? this.id(node.parent) + "." : ""}${node.data.name}`;
  }

  drawChart() {
    let width = this.state.width;
    let height = this.state.height;
    let radius = width / 2;

    let line = d3.radialLine()
      .curve(d3.curveBundle.beta(this.props.curveBeta))
      .radius(d => d.y)
      .angle(d => d.x)

    let tree = d3.cluster()
      // .size([2* Math.PI, radius - 100])
      .size([this.props.clusterSize * Math.PI, radius - 100])

    // let chart = {
    // let stratData = d3.stratify()
    //   .id(function(d) { return d.name; })
    //   .parentId(function(d) { return d.imports; })(this.props.contractData);

      const root = tree(d3.hierarchy(hierarchyData)
          .sort((a, b) => (a.height - b.height)
          || a.data.name.localeCompare(b.data.name)));
          // console.log('ROOT', root);
      // console.log(root.leaves());

      const map = new Map(root.leaves().map(d => [this.id(d), d]));

      const canvas = this.canvasRef.current;
      const context = canvas.getContext("2d")
      context.canvas.style.display = "block";
      context.canvas.style.maxWidth = "100%";
      context.canvas.style.margin = "auto";
      context.translate(width / 2, height / 2);
      line.context(context);

      /* draw circle of names */
      for (const leaf of root.leaves()) {
        context.save();
        context.rotate(leaf.x - Math.PI / 2);
        context.translate(leaf.y, 0);
        if (leaf.x >= Math.PI) {
          context.textAlign = "right";
          context.rotate(Math.PI);
          context.translate(-3, 0);
        } else {
          context.textAlign = "left";
          context.translate(3, 0);
        }
        context.fillText(leaf.data.name, 0, 3);
        context.restore();
      }

      /* draw lines */
      context.globalCompositeOperation = "multiply";
      context.strokeStyle = "lightsteelblue";
      for (const leaf of root.leaves()) {
        // console.log('LEAFx', leaf);
        if (leaf.data.imports.length >= 0){

          for (const i of leaf.data.imports) {
            /* remove Initializable paths with button toggle */
            if (this.props.toggleBool) {
              if (!i.includes('Initializable')) {
                context.beginPath();
                line(leaf.path(map.get(i)));
                context.stroke();
              }
            } else {
              context.beginPath();
              line(leaf.path(map.get(i)));
              context.stroke();
            }
          }
        }
      }

      return context.canvas;
  }

  clearCanvas() {
    const canvas = this.canvasRef.current;
    let context = canvas.getContext("2d");
    let width = this.state.width;
    let height = this.state.height;
    // context.clearRect(-width / 2, -height / 2, width / 2, height / 2);
    context.translate(-(width / 2), -(height / 2));
    context.clearRect(0, 0, width, height);
  }

  render() {
    const canvas = (
      <canvas
        ref={this.canvasRef}
        width={this.state.width}
        height={this.state.height}
      />
    )
    return (
      <div>

        {canvas}

      </div>
    );
  }

}
