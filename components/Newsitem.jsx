import React, { Component } from 'react'

export class Newsitem extends Component {
  render() {

    let { title, description, imageUrl , newsUrl } = this.props;
    return (
      <>
      <div className="card" style={{width: "18rem"}}>
        <img src={imageUrl} className="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{title}</h5>
          <p class="card-text">{description}</p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </>
    )
  }
}

export default Newsitem;