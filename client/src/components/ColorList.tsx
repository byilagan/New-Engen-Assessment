import * as React from 'react'; 
import {Link} from 'react-router-dom'; 

class ColorList extends React.Component<any, any> {

    public render() {
        return (
            <div id="colorList" className="scroll" style={{display: "grid", gridRowGap: 20, padding: 30, gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", justifyItems: "center", height: "calc(100vh - 65px)"}}>
                {this.props.colorList.map((color: any) =>
                    <Link to={`/${color._id}`}>
                        <div style={{height: 165, width: 140, display: "grid", gridTemplateRows: "80% auto", borderRadius: 5, boxShadow: "0px 0px 10px -1px #888888", padding: 1}}>
                            <div style={{backgroundColor: `${color.colorCode}`, borderRadius: "5px 5px 0px 0px"}}/>
                            <h4 style={{fontSize: 16, margin: "8px 15px"}}>{color.colorCode}</h4>
                        </div>
                    </Link>
                )}
            </div>
        )
    }
}

export default ColorList;