import React from 'react';
import ReactDOM from 'react-dom';
import Loadmore from './lib';

const App = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  return (
    <Loadmore visible={2} increment={3} >
      { arr.map((a, i) => {
        return (
          <div key={i}>{a}</div>
        )
      })}
    </Loadmore>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
