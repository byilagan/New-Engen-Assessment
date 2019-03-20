import * as React from 'react'; 
import brand from '../images/logo.png';
import {Link} from 'react-router-dom'

class SearchBar extends React.Component {
    render () {
        return (
            <div id="searchBar">
                <Link to="/"><img src={brand}/></Link>
                <input placeholder="Search"/>
            </div>
        )
    }
}

export default SearchBar;