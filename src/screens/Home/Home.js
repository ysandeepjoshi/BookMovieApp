import './Home.css';
import React from 'react';

import Header from "../../common/header/Header";
 const Home = (props) =>{
    return (<div>
      <Header baseUrl={props.baseUrl} />
          <div>HEllo Home</div></div>
    )
}
export default Home;