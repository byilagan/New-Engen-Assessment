import * as React from 'react';
import logo from './logo.svg';
import '../styles/App.css'; 

import SearchBar from './SearchBar'; 
import SideBar from './SideBar';
import ColorList from './ColorList';

import ColorService from '../services/ColorService';

const colorService = new ColorService();

class App extends React.Component {
  public state = {
    colors: []
  }

  public componentWillMount = () => {
    colorService.getAllColors()
    .then(res => {
      console.log(res);
      this.setState({colors: res});
      return null;
    })
    .catch(err => {
      console.log(err); 
    })
  }

  render() {
    return (
      <div style={{display: "grid", gridTemplateRows: "65px auto", height: "100%", width: "100%"}}>
        <SearchBar/> 
        <div style={{display: "grid", gridTemplateColumns: "200px auto"}}>
          <SideBar/> 
          <ColorList colorList={this.state.colors}/> 
        </div>
      </div>
    );
  }
}

export default App;
