import { DataSet, Network } from 'vis';
import React, { Component, createRef } from "react";
import './../../node_modules/vis/dist/vis-network.min.css';


var data = []; 
var options = []; 
function init()
{
  var optionsFA = {
    groups: {
      org: {
        shape: 'icon',
        icon: {
          face: 'FontAwesome',
          code: '\uf796',
          size: 50,
          color: '#57169a'
        }
      },
      site: {
        shape: 'icon',
        icon: {
          face: 'FontAwesome',
          code: '\uf0ac',
          size: 50,
          color: '#57169a'
        }
      },
      ip: {
        shape: 'icon',
        icon: {
          face: 'FontAwesome',
          code: '\uf041',
          size: 50,
          color: '#57169a'
        }
      },
      user: {
        shape: 'icon',
        icon: {
          face: 'FontAwesome',
          code: '\uf007',
          size: 50,
          color: '#aa00ff'
        }
      },
      ports: {
       shape: 'icon', 
        icon: {
          face: 'FontAwesome',
          code: '\uf796',
          size: 500,
          color: '#57169a'
        }
      }
    }
  };

  const nodesFA = new DataSet([
    { id: 1, label: 'Google', shape: 'circle'  },
    { id: 2, label: 'www.google.com.au', shape: 'circle' },
    { id: 3, label: 'IP', shape: 'circle' },
    { id: 4, label: 'IP', shape: 'circle',  },
    { id: 5, label: 'port',  group: 'ports' }
  ]);

// create an array with edges
const edges = new DataSet([
  { from: 2, to: 1 },
  { from: 3, to: 2 },
  { from: 4, to: 2 },
  { from: 5, to: 4 }
]);

 data = {
  nodes: nodesFA,
  edges: edges
};
 options = {
  layout: {
  hierarchical: true,
},
edges: {
 color: "#000000"
},
nodes: {
 color: "#888f99"
},
physics: {
 enabled: true
},
interaction: { multiselect: true, dragView: true }
};

}; 


// initialize your network!
class Vis extends Component {

  

  constructor() {
    init(); 
    super();
    this.network = {};
    this.appRef = createRef();
  }

  events = {
    dragStart: event => {},
    dragEnd: event => {}
  };

  componentDidMount() {
    this.network = new Network(this.appRef.current, data, options);
  }

  render() {
    return (
      <div id="graph" style={{ height: "100vh" }} ref={this.appRef} />
    );
  }
}
export default Vis;


