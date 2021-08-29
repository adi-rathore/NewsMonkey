import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl } = this.props;

    return (
      <div className="card" style={{ width: "18rem" }}>
        <img
          className="card-img-top"
          src={
            imageUrl
              ? imageUrl
              : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.alamy.com%2Fstock-image-news-background-wallpaper-hot-news-large-title-in-the-center-of-banner-166661260.html&psig=AOvVaw1BGcXYfy6YjuiacbHPe9vb&ust=1630268821767000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJih3-nG1PICFQAAAAAdAAAAABAD"
          }
          alt="unavailable"
        />
        <div className="card-body">
          <h5 className="card-title"> {title} </h5>
          <p className="card-text">{description}</p>
          <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">
            Read More
          </a>
        </div>
      </div>
    );
  }
}

export default NewsItem;
