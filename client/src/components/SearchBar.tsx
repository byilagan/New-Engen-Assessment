import * as React from 'react'; 
import brand from '../images/logo.png';

class SearchBar extends React.Component {
    render () {
        return (
            <div id="searchBar">
                <img src={brand}/> 
                <input placeholder="Search"/>
            </div>
        )
    }
}

export default SearchBar;