import React, {Component} from 'react';
import './Scroller.css';
import PropTypes from 'prop-types'

class Scroller extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <div className="fade"></div>

        <section className="star-wars">
          <div className="crawl">
            <div className="title">
              <h1>{this.props.filmsInfo.title}</h1>
              <p>{this.props.filmsInfo.date}</p>
            </div>

            <p>{this.props.filmsInfo.scroll}</p>
          </div>
        </section>
      </div>
    );
  }
}

Scroller.propTypes = {
  filmsInfo: PropTypes.object.isRequired
};


export default Scroller;
