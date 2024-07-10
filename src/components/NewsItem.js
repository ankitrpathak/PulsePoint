import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {
    let {title, description, imageUrl, newsUrl, author, date, source} = this.props;

    return (
        <div className="card">
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: "50%", zIndex: "1"}}>{!source? "Unknown":source}</span>
            <img src={!imageUrl?"https://images.hindustantimes.com/default/1600x900.jpg":imageUrl} alt="..." />
            <div className="card-body" style={{color: 'white', backgroundColor: "darkslategray"}}>
                <h5 className="card-title">{title.slice(0,76)}...</h5>
                <p className="card-text">{description.slice(0,139)}...</p>
                <p className="card-text"><small className="text-body-emphasis">By {!author? "Unknown": author} on {new Date(date).toGMTString()}</small></p>
                <div className="container text-center">
                  <a rel="noreferrer" href={newsUrl} target='_blank' className="btn btn-sm btn-dark">Read More</a>
                </div>
            </div>
        </div>
    )
  }
}

export default NewsItem
