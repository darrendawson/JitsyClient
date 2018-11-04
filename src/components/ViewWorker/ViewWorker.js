import React, { Component } from 'react';
import './ViewWorker.css';
import YouTube from 'react-youtube';

class ViewWorker extends Component {

  constructor() {
    super();

    let worker = {
      name: "Darren Dawson",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      review_score: " ★ ★ ★ ☆ ☆ ",
      skills: ["skill 1", "skill 2"],
      profile_img: "https://avatars1.githubusercontent.com/u/12383469?s=400&v=4",
      num_jobs: "15 successful jobs",
      video_id: "2g811Eo7K8U"
    };


    this.state = {
      worker: worker
    }
  }



  // render --------------------------------------------------------------------

  renderTopBar = () => {

    let worker = this.state.worker;

    let skills = [];
    for (let i = 0; i < worker.skills.length; i++) {
      skills.push(<div key={i} className="vw-skill">{worker.skills[i]}</div>)
    }

    return (
      <div className="vw-top-bar-container">
        <div className="vw-profile-photo-column">
          <div className="vw-photo-container">
            <img id="vw-photo-img" src={worker.profile_img}/>
          </div>
        </div>

        <div className="vw-description-column">
          <h1 id="vw-name-h1">{worker.name}</h1>
          <h1 id="vw-num-jobs">{worker.num_jobs} - <span id="vw-review-stars">{worker.review_score}</span></h1>
          <p id="vw-bio">{worker.bio}</p>

          <h2 className="vw-h2">Skills & Certificates</h2>
          <div className="vw-skills-container">
            {skills}
          </div>
        </div>
      </div>
    );
  }


  //
  renderVideoBar = () => {
    return (
      <div className="vw-videobar-container">
        {this.renderYoutubeVideo()}
      </div>
    );
  }

  renderYoutubeVideo = () => {
    const opts = {
      height: '400', // 390
      width: '750', // 640
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 0
      }
    };

    return (
      <YouTube
        videoId={this.state.worker.video_id}
        opts={opts}
      />
    );
  }



  renderReview = (review) => {
    return (
      <div className="vw-review-container">

      </div>
    );
  }

  // render reviews
  renderReviewsBar = () => {
    let review = {title: "title", company: "company", "score": " * * * * *"};

    return (
      <div className="vw-reviews-bar-container">
        {this.renderReview(review)}
      </div>
    );
  }

  // renders <ViewWorker/>
  render() {
    return (
      <div className="vw-full-container">
        <div className="vw-side-column" onClick={this.props.closeViewWorker}></div>
        <div className="vw-column-container">
          <div className="vw-top-gray"></div>
          {this.renderTopBar()}
          {this.renderVideoBar()}
          {this.renderReviewsBar()}

        </div>
        <div className="vw-side-column" onClick={this.props.closeViewWorker}></div>
      </div>
    );
  }
}

export default ViewWorker;