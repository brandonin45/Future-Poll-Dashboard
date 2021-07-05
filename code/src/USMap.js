import React, { Component } from 'react';
import USAMap from "react-usa-map";
import "./USMap.css"
// import DiscreteSlider from './Slider.js'
import electionData from "./electionData.json";





class USMap extends Component {

  handleMouseClick(params) {
    console.log(params.detail);
  }



/*
  componentDidMount() {
    document.getElementById("slidey").addEventListener("slid", this.handleMouseClick);
  }
  componentWillUnmount() {
    document.getElementById("slidey").removeEventListener("slid", this.handleMouseClick);
  }
*/
  mapHandler = (event) => {
      alert(event.target.dataset.name);
    };
    
    /* optional customization of filling per state and calling custom callbacks per state */
    statesCustomConfig = () => {
      return {
        /*
        "NJ": {
          fill: "navy",
          //clickHandler: (event) => console.log('Custom handler for NJ', event.target.dataset)
        },
        "NY": {
          fill: "#cc0000"
        }
      };
      */
      }
    };
    
    render() {
      
      return (
        <div className="App">
          <USAMap customize={this.statesCustomConfig()} onClick={this.mapHandler} />




          
        </div>
      );
    }

}

function updateMap(step)
{
  var states = electionData['file'][step]['states']
  // console.log(states)

  for (var state in states){
    if(state=="DC"){
      if (states[state] == "R"){
        document.getElementsByClassName("DC2")[0].style.fill = "FireBrick"
      }
      else if (states[state] == "D"){
        document.getElementsByClassName("DC2")[0].style.fill = "MediumBlue"
      } else {
        document.getElementsByClassName("DC2")[0].style.fill = "lightgrey"
      }
      continue;
    }

    if (states[state] == "R"){
      document.getElementsByClassName("" + state + " state")[0].style.fill = "FireBrick"
    }
    else if (states[state] == "D"){
      document.getElementsByClassName("" + state + " state")[0].style.fill = "MediumBlue"
    } else {
      document.getElementsByClassName("" + state + " state")[0].style.fill = "lightgrey"
    }
  }
}



document.addEventListener("mapChange", function(event) {
  console.log("New value detail " + event.detail);
  updateMap(event.detail);
});
export default USMap;