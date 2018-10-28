# Load More List

## Install  
`$ npm i --save react-loadmore-list`


## Use it in any component
```js
import React from 'react';
import Loadmore from 'react-loadmore-list';

const App = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

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
```

## Props

| Name      | Type    | Required | Description                            |
| :-------: | :-----: | :------: | :------------------------------------: |
| visible   | Integer | Yes      | Number of items displayed at the start |
| increment | Integer | Yes      | Increase in displayed number of items  |
<br/>

## Development

`$ git clone https://github.com/hkureshy/react-loadmore.git`  
`$ cd react-loadmore`  
`$ npm install`  
`$ npm start`  

**Feel free to contact if you find any problem using this package.**  
Email: `hassnainkureshy@gmail.com`
