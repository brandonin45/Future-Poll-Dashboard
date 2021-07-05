import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import twitterData from "./twitterDataManual.json";

class TwitterPortion extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: "0",
            isLoaded: false,
            data: [],
        }
        this.slideChange = this.slideChange.bind(this);
        this.slideSubmit = this.slideSubmit.bind(this);
    }

    componentDidMount() {
        var data=twitterData['file'][this.state.id];
        this.setState({
            isLoaded:true,
            data:data['articles']
        })
        // var url = 'http://localhost:3002/file/' + this.state.id;
        // console.log('app mounted');
        // fetch(url)
        //     .then(response => response.json())
        //     .then(data => {
        //         this.setState({
        //             isLoaded: true,
        //             data: data.articles,
        //         });
        //     })
        //     .catch(err => {
        //         console.log(err);
        //     });

        var that=this;
        document.addEventListener("mapChange",function (event){
            that.slideChange(event.detail);
        })
    }

    renderArticles() {

        return (
            this.state.data.map(article => (
                <a href={article.url} rel="noopener nonreferrer" target="blank" className="link">
                    <div className="card-container">
                        <div><h1 className="title">{article.includes.users['0'].name}</h1></div>
                        <span className="textbox">
                            <div className="desc">{article.data.text}</div>

                          </span>
                    </div>
                </a>
            ))
        )
    }

    slideChange() {

        //this.setState({isLoaded:false});
        var val = document.currentBar;
        // document.currentBar=val;
        // const mapChangeEvent = new CustomEvent('mapChange',{detail:val});
        // document.dispatchEvent(mapChangeEvent);
        this.setState({id: val}, this.slideSubmitLocal(val));
    }

    slideSubmit(idval) {
        var url = 'http://localhost:3002/file/' + idval;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    isLoaded: true,
                    data: data.articles,
                    string: data.totalResults
                });
            })
            .catch(err => {
                console.log(err);
            });
    }

    slideSubmitLocal(idval){
        var data=twitterData['file'][idval];
        this.setState({
            isLoaded:true,
            data:data['articles']
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

                <div className="Newswrapper">

                    <div className="Newscardcontainer">
                        <h1 className="Newsupdatestitle">Twitter</h1>
                        <div className="Newscontainer">
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

export default TwitterPortion;