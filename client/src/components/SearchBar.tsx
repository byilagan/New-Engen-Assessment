import * as React from 'react'; 
import brand from '../images/logo.png';

class SearchBar extends React.Component {
    render () {
        return (
            <div style={{backgroundColor: "#363C3C", zIndex: 10}}>
                <img src={brand} style={{float: "left", height: 30, width: "auto", margin: 15}}/> 
                <input placeholder="Search" style={{border: "none", borderRadius: 5, height: 35, float: "right", margin: 15, marginRight: 25, paddingLeft: 15}}/>
            </div>
        )
    }
}

export default SearchBar;