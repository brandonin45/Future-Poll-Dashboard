import React, { Component } from 'react';
// import DiscreteSlider from './Slider.js'
import electionData from "./electionData.json";





class VoteCountPortion extends React.Component {

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

            <div className="voteCountHolder">
                <h1 className="BidenCount">Biden: </h1>
                <h1 className="BidenCountNumber">0</h1>
                &nbsp;&nbsp;&nbsp;
                <h1 className="TrumpCount">Trump: </h1>
                <h1 className="TrumpCountNumber">0</h1>
                &nbsp;&nbsp;&nbsp;
                <h1 className="ElectoralEvent"></h1>
            </div>




        );
    }

}

function updateMap(step)
{
    var data = electionData['file'][step]['electoralCount'];
    console.log("Biden "+data["Biden"]);
    console.log("Trump "+data["Trump"]);
    document.getElementsByClassName("BidenCountNumber")[0].textContent=data["Biden"];
    document.getElementsByClassName("TrumpCountNumber")[0].textContent=data["Trump"];
    // console.log(states)

    // for (var state in states){
        /*
        if(state=="DC"){
            if (states[state] == "R"){
                document.getElementsByClassName("DC2")[0].style.fill = "red"
            }
            else if (states[state] == "D"){
                document.getElementsByClassName("DC2")[0].style.fill = "blue"
            } else {
                document.getElementsByClassName("DC2")[0].style.fill = "lightgrey"
            }
            continue;
        }

        if (states[state] == "R"){
            document.getElementsByClassName("" + state + " state")[0].style.fill = "red"
        }
        else if (states[state] == "D"){
            document.getElementsByClassName("" + state + " state")[0].style.fill = "blue"
        } else {
            document.getElementsByClassName("" + state + " state")[0].style.fill = "lightgrey"
        }
        */
    // }
    // eslint-disable-next-line default-case
    switch (step){
        case "26":
            document.getElementsByClassName("ElectoralEvent")[0].textContent = (' Trump Claims Victory');
            break;
        case "27":
            document.getElementsByClassName("ElectoralEvent")[0].textContent = (' First Night Ends');
            break;
        case "28":
            document.getElementsByClassName("ElectoralEvent")[0].textContent = (' Next Day Morning');
            break;
        case "29":
            document.getElementsByClassName("ElectoralEvent")[0].textContent = (' Next Day Evening');
            break;
        case "30":
            document.getElementsByClassName("ElectoralEvent")[0].textContent = (' Biden Declared Victor');
            break;
        default:
            document.getElementsByClassName("ElectoralEvent")[0].textContent = '';
            break;
    }
    // if(step==26){
    //     document.getElementsByClassName("ElectoralEvent")[0].textContent = (' Trump Claims Victory');
    // }

}
document.addEventListener("mapChange", function(event) {
    console.log("New value detail " + event.detail);
    updateMap(event.detail);
});
export default VoteCountPortion;