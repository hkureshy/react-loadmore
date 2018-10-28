import React, { Component } from 'react';
import './Loadmore.css';

class Loadmore extends Component {
  constructor(props) {
    super(props);

    this.state = {
        visible: props.visible,
        increment: props.increment
    }
  }

  loadmore() {
    this.setState((prevState) => ({ visible: prevState.visible + this.state.increment }));
  }

  render() {
    const { children } = this.props;
    const { visible } = this.state;

    return (
      <div className="load-more">
        { children.slice(0, visible).map((e) => e) }
        { children.length > visible ?
          <div className='loadmore-btn-container'>
            <button className='loadmore-btn' onClick={() => this.loadmore()}>Load More</button>
          </div>
        : null }
      </div>
    );
  }
}

export default Loadmore;
