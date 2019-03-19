import * as React from 'react'; 

class ColorList extends React.Component<any, any> {
    public render() {
        return (
            <div style={{display: "grid", gridRowGap: 20, padding: 30, gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", justifyItems: "center"}}>
                {this.props.colorList.map((color: any) =>
                    <div style={{height: 165, width: 140, display: "grid", gridTemplateRows: "80% auto", borderRadius: 5, boxShadow: "0px 0px 10px -1px #888888", padding: 1}}>
                        <div style={{backgroundColor: `${color.colorCode}`, borderRadius: "5px 5px 0px 0px"}}/>
                        <h4 style={{fontSize: 16, margin: "8px 15px"}}>{color.colorCode}</h4>
                    </div>
                )}
            </div>
        )
    }
}

export default ColorList;