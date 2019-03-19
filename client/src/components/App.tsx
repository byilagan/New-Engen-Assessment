import * as React from 'react';
import logo from './logo.svg';
import '../styles/App.css'; 

import SearchBar from './SearchBar'; 
import SideBar from './SideBar';

class App extends React.Component {
  render() {
    return (
      <div style={{display: "grid", gridTemplateRows: "65px auto", height: "100%", width: "100%"}}>
        <SearchBar/> 
        <div style={{display: "grid", gridTemplateColumns: "200px auto"}}>
          <SideBar/> 
          <div></div>
        </div>
      </div>
    );
  }
}

export default App;
