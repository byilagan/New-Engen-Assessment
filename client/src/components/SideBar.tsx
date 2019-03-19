import * as React from 'react'; 

class SideBar extends React.Component {

    public render () {
        return (
            <div id="sidebar">
                <div><b>Random Color</b></div>
                <ul>
                    <li><a>Red</a></li>
                    <li><a>Orange</a></li>
                    <li><a>Yellow</a></li>
                    <li><a>Green</a></li>
                    <li><a>Blue</a></li>
                    <li><a>Purple</a></li>
                    <li><a>Brown</a></li>
                    <li><a>Gray</a></li> 
                </ul>
            </div>
        )
    }
}

export default SideBar;