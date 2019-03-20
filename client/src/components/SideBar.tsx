import * as React from 'react'; 
import { Redirect, withRouter} from 'react-router';

class SideBar extends React.Component<any, any> {

    public handleClick = () => {
        console.log(this.props.randomColor)

        var colorId = this.props.randomColor()['_id'];

        this.props.history.push(`/${colorId}`);
    }

    public render () {
        return (
            <div id="sideBar">
                <div onClick={this.handleClick} className="button"><b>Random Color</b></div>
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

export default withRouter(SideBar);