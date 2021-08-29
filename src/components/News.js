import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
    constructor() {
        super();
        console.log("hello..!");

        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResults:1
        };
    }

    async componentDidMount() {
        let url =
            "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=bd8daf232a9d43d4becaf184494f3293&page=1&pageSize=6";
        let data = await fetch(url);

        let parsedData = await data.json();

        this.setState({
            articles: parsedData.articles,
            totalResults : parsedData.totalResults
        });
    }

    handlePrevClick = async () => {

        let url =
            `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=bd8daf232a9d43d4becaf184494f3293&page=${this.state.page - 1 > 0 ? this.state.page - 1 : 1}&pageSize=6`;
        let data = await fetch(url);

        let parsedData = await data.json()

        this.setState({
            articles: parsedData.articles,
            loading: false,
            page: this.state.page - 1 > 0 ? this.state.page - 1 : 1
        });
    }

    handleNextClick = async () => {

                console.log("next clicked")
                console.log(this.state.page)
                console.log(this.state.totalResults)
                // console.log(Math.ceil(this.state.totalResults/6))

                let url =
                `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=bd8daf232a9d43d4becaf184494f3293&page=${this.state.page + 1}&pageSize=6`;
                let data = await fetch(url);

                let parsedData = await data.json()

                this.setState({
                    articles: parsedData.articles,
                    loading: false,
                    page: this.state.page + 1
                });       

    }

    render() {
        return (
            <div className="container my-3">
                <h1>Top headlines</h1>

                <div className="row">
                    {this.state.articles.map((element) => {
                        return (
                            <div className="col-md-4" key={element.url}>
                                <NewsItem
                                    title={element.title}
                                    imageUrl={element.urlToImage}
                                    description={element.description}
                                    newsUrl={element.url}
                                />
                            </div>
                        );
                    })}
                </div>

                <div className="container d-flex justify-content-between my-5">
                    <button
                        disabled={this.state.page <= 1}
                        onClick={this.handlePrevClick}
                        type="button"
                        className="btn btn-primary"
                    >
                        &larr;Previous page
                    </button>

                    <button
                        type="button"
                        disabled = {this.state.page >= Math.ceil(this.state.totalResults/6)}
                        onClick={this.handleNextClick}
                        className="btn btn-primary"
                    >
                        Next page&rarr;
                    </button>
                </div>
            </div>
        );
    }
}

export default News;
