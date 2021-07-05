import React from 'react';
import USMap from './USMap'
import './App.css';
import TwitterPortion from './TwitterPortion';
import FuturesPortion from './FuturesPortion';
import NewsPortion from "./NewsPortion";
import SlideBar from "./SlideBar";
import VoteCountPortion from "./VoteCountPortion";

function App() {
//Port 3001 for futures, 3002 for twitter, 3003 for news,
  return (


    <div className="App">

    <VoteCountPortion/>
    <br/>
        <div className="leftMap">
            <USMap />
        </div>

        <div className="rightSideBar">
            <div className="NewsBar" id="NewsBar">
                <NewsPortion/>
            </div>
        </div>

        <div className="rightSideBar2">
            <TwitterPortion/>
        </div>

        <br/>
        <div className="centerBar ">
            <SlideBar/>
        </div>



        <div class="middleBar">
            <div class="FuturesBar" id="FuturesBar">
                <FuturesPortion id="FuturesBarObject"/>
            </div>
        </div>





    </div>
  );
}

export default App;
