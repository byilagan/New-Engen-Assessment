import * as React from 'react';
import logo from './logo.svg';
import '../styles/App.css'; 
import {BrowserRouter, Switch, Route} from 'react-router-dom'; 

import SearchBar from './SearchBar'; 
import SideBar from './SideBar';
import ColorList from './ColorList';
import ColorView from './ColorView';

import ColorService from '../services/ColorService';

const colorService = new ColorService();

class App extends React.Component {
  public state = {
    colors: []
  }

  public componentWillMount = () => {
    colorService.getAllColors()
    .then(res => {
      return this.setState({colors: res});
    })
    .catch(err => {
      console.log(err); 
    })
  }

  public randomColor = () => {
    return this.state.colors[Math.floor(Math.random()*this.state.colors.length)];
  }

  render() {
    return (
      <BrowserRouter>
        <div style={{display: "grid", gridTemplateRows: "65px auto", height: "100%", width: "100%"}}>
          <SearchBar/> 
          <div style={{display: "grid", gridTemplateColumns: "200px auto"}}>
            <SideBar randomColor={this.randomColor}/> 
              <Switch>
                <Route path="/" exact={true} component={() => <ColorList colorList={this.state.colors}/> }/>
                <Route path="/:id" component={() => <ColorView randomColor={this.randomColor}/> }/>
              </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
