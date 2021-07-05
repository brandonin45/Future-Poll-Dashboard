import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import newsDataTrimmed from "./newsDataTrimmed.json"

class NewsPortion extends React.Component {

    constructor(props) {
        console.log(newsDataTrimmed['file'])
        super(props);
        this.state = {
            id: "0",
            isLoaded: false,
            data: [],
        }

        this.slideChange = this.slideChange.bind(this);
        this.slideSubmit = this.slideSubmit.bind(this);
        document.currentBar=0;
    }

    componentDidMount() {
        var data=newsDataTrimmed['file'][this.state.id];
        // console.log("below")
        // console.log(newsDataTrimmed['file'][0])
        this.setState({
            isLoaded:true,
            data:data["articles"]
        })



        // var url = 'http://localhost:3003/file/' + this.state.id;
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
        //
        var that=this;
        document.addEventListener("mapChange",function (event){
            that.slideChange();
        })
    }

    renderArticles() {

        try{
            return (
                this.state.data.map(article => (
                    <a href={article.url} rel="noopener nonreferrer" target="blank" className="link">
                        <div className="card-container">
                            <div><h1 className="title">{article.title}</h1></div>
                            <span className="textbox">
            <div className="desc">{article.description}</div>
            <div className="datebox">{this.parseDate(article.publishedAt)}</div>
           </span>
                            <span className="picbox"><img src={this.loadpic(article.urlToImage)} alt={article.alttext} width="120" height="100" onError={this.loaderror} />
                            <span className="picboxtip">{article.alttext}</span>
                            </span>
                        </div>
                    </a>
                ))
            )
        }catch(e){
            return (
                this.state.data.map(article => (
                    <a href={article.url} rel="noopener nonreferrer" target="blank" className="link">
                        <div className="card-container">
                            <div><h1 className="title">{article.title}</h1></div>
                            <span className="textbox">
        <div className="desc">{article.description}</div>

       </span>

                        </div>
                    </a>
                ))
            )
        }

    }

    parseDate(str) {
        str = str.replace("Z", "");
        str = str.replace("T", '\n' + "Time: ");
        str = "Date: "  + str;
        return(str)
    }

    loadpic(txt) {
        let pic = txt;
        if (pic != null) {
          return(pic)
        }
        else {
          return("na.png")
        }
    }
  
    loaderror(e) {
      e.target.src = "na.png";
    }

    slideChange() {
        var val=document.currentBar;
        this.setState({id: val}, this.slideSubmitLocal(val));
    }

    slideSubmit(idval) {
        var url = 'http://localhost:3003/file/' + idval;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data);
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

    slideSubmitLocal(idval) {
        var data=newsDataTrimmed['file'][idval];
        this.setState({
            isLoaded:true,
            data:data["articles"],
            string:data["totalResults"]
        })


        // var url = 'http://localhost:3003/file/' + idval;
        // fetch(url)
        //     .then(response => response.json())
        //     .then(data => {
        //         console.log(data);
        //         this.setState({
        //             isLoaded: true,
        //             data: data.articles,
        //             string: data.totalResults
        //         });
        //     })
        //     .catch(err => {
        //         console.log(err);
        //     });
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
                        <h1 className="Newsupdatestitle">News Updates</h1>
                        <div className="Newscontainer">
                            {this.renderArticles()}
                        </div>
                    </div>
                </div>

            );
        }

    }
}

export default NewsPortion;