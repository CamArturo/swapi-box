import React, {Component} from 'react';
import './Scroller.css';

class Scroller extends Component {
  constructor(props) {
    super(props)
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
              <p>Episode IV</p>
              <h1>A New Hope</h1>
            </div>

            <p>It is a period of civil war. Rebel spaceships, striking from a
              hidden base, have won their first victory against the evil Galactic
              Empire.</p>
          </div>
        </section>
      </div>
    );
  }

};

export default Scroller;
