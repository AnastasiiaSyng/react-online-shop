import React from 'react';
import './App.css';
import Homepage from './pages/homepage.component'
import SingInAndSingUpPage from './pages/sing-in-and-sing-up/sing-in-and-sing-up.component'
import Shop from './pages/shop/shop.component'
import Header from './components/header/header.component'

import {
    Switch,
    Route,
    // Link
  } from "react-router-dom";

// const Dance = () => {
//     return (
//         <div>
//             <p>Dance work</p>
//         </div>
//     )
// }


function App() {
  return (
    <div>
         < Header />
        <Switch>
            <Route exact path='/' component={Homepage} />
            <Route path='/shop' component={Shop} />
            <Route path='/signin' component={SingInAndSingUpPage} />
        </Switch>
    </div>
  );
}

export default App;
