import React from 'react';
import "./App.css"
import { actions, comedy, horror, originals } from './urls'
import Banner from './Components/Banner/Banner';
import NavBar from './Components/NavBar/NavBar/NavBar';
import RowPost from './Components/RowPost/RowPost';
function App() {
  return (
  <div className='app'>
  <NavBar/>
   <Banner/>
   <RowPost url={originals}   title='Netflix Originals'/>
   <RowPost url={actions}  title='Action' isSmall/>
   <RowPost url={comedy}   title='Comedy Movies' isSmall/>
   <RowPost url={horror} title='Horror Movies' isSmall/>
  </div>);
}

export default App;
