import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import futuresTotal from "./futuresTotal1.json";

class FuturesPortion extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        id: "0",
        isLoaded: false,
        data: [],
      }
      this.slideChange=this.slideChange.bind(this);
      this.slideSubmit = this.slideSubmit.bind(this);

    }

    componentDidMount() {
        var data=futuresTotal['file'][this.state.id];
        console.log("FUTURES BELOW")
        console.log(data)
        // console.log("below")
        // console.log(newsDataTrimmed['file'][0])
        this.setState({
            isLoaded:true,
            data:data
        })


        // var url = 'http://localhost:3001/file/' + this.state.id;
      // console.log('app mounted');
      // fetch(url)
      //         .then(response => response.json())
      //         .then(data => {
      //           this.setState({
      //             isLoaded: true,
      //             data: data,
      //           });
      //         })
      //         .catch(err => {
      //           console.log(err);
      //         });

        var that=this;
        document.addEventListener("mapChange",function (event){
            that.slideChange(event.detail);
        })
    }

    renderArticles() {

      return (
        <a href={this.url} rel="noopener nonreferrer" target="blank" className="link">
                        <div className="Future-card-container">
                          <div><h1 className="Future-title">{this.state.data.symbol}</h1></div>
                          <span className="textbox">
                            <div className="desc">${this.state.data.open}</div>
                          </span>
                        </div>
                        <div className="Future-card-container">
                          <div><h1 className="Future-title">{this.state.data.symbol__1}</h1>
                          </div>
                          <span className="textbox">
                            <div className="desc">${this.state.data.open__1}</div>
                          </span>
                        </div>
                        <div className="Future-card-container">
                          <div><h1 className="Future-title">{this.state.data.symbol__2}</h1></div>
                          <span className="textbox">
                            <div className="desc">${this.state.data.open__2}</div>

                          </span>
                        </div>
                      </a>
      )
    }

    slideChange() {
        console.log("Inside futures slidechange");
      //this.setState({isLoaded:false});
        var val=document.currentBar;
      // var val = event.target.value;
     // this.setState({id: event.target.value}, this.slideSubmit(val));
        this.setState({id:val}, this.slideSubmitLocal(val));
    }

    


    slideSubmit(idval) {
      var url = 'http://localhost:3001/file/' + idval;
      fetch(url)
              .then(response => response.json())
              .then(data => {
                console.log(data);
                this.setState({
                  isLoaded: true,
                  data: data,
                  string: data.totalResults
                });
              })
              .catch(err => {
                console.log(err);
              });
    }

    slideSubmitLocal(idval) {
        var data=futuresTotal['file'][idval];

        this.setState({
            isLoaded:true,
            data:data,

        })

    }

    render() {
      const { id, isLoaded, data } = this.state;
      if(!this.state.isLoaded) {
        return (
                <div>Loading...</div>
        );
      }  else {
        return (

                <div className="Futurewrapper">


                  <div className="Futurecardcontainer">
                    <h1 className="Futureupdatestitle">Futures Updates</h1>
                    <div className="Futurecontainer">
                      {this.renderArticles()}
                    </div>
                  </div>
                </div>

        );
      }

    }
}


// ReactDOM.render(
//     <TwitterPortion />,
//     document.getElementById('twitterPortion')
// );

// document.addEventListener("mapChange", function(event){
//   var val = event.target.value;
//   setState({id: event.target.value}, this.slideSubmit(val));
// });

export default FuturesPortion;