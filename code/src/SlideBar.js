import React, {Component} from 'react';
import ReactDOM from 'react-dom';


class SlideBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: "0",
            isLoaded: false,
            data: [],
        }
        this.slideChange = this.slideChange.bind(this);

    }

    slideChange(event) {
        //this.setState({isLoaded:false});
        var val = event.target.value;
        document.currentBar=val;
        const mapChangeEvent = new CustomEvent('mapChange',{detail:val});
        document.dispatchEvent(mapChangeEvent);
        this.setState({id: event.target.value});
    }


    render() {
        const { id, isLoaded, data } = this.state;

        return (


            <div className="slidecontainer" >
                <input type="range" id="slidy" min="0" max="30" className="slider" value={this.state.id} onChange={this.slideChange} />
            </div>


        );


    }
}

// ReactDOM.render(
//     <TwitterPortion />,
//     document.getElementById('twitterPortion')
// );

export default SlideBar;