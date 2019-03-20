import * as React from 'react'; 
import ColorService from '../services/ColorService'; 
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router';

const colorService = new ColorService();
const NUM_SUGGESTED_COLORS = 5;
class ColorView extends React.Component<any, any> {

    public state = {
        currColor: {
            colorCode: ""
        },
        suggestedColors: []
    }

    public suggestColors = () => {
        var colorArray = [] as any[]; 

        while (colorArray.length !== NUM_SUGGESTED_COLORS) {
            var newColor = this.props.randomColor()

            if (!colorArray.includes(newColor) && newColor['colorCode'] !== this.state.currColor.colorCode) {
                colorArray.push(newColor);
            }
        }

        return colorArray; 
    }

    public updateView(id: any): any {
        colorService.getColor(id)
        .then(res => {
            return this.setState({
                currColor : {...res}, 
                suggestedColors: this.suggestColors()
            }); 
        })
        .catch(err => {
            console.log(err);
        })
    }

    public componentDidMount = () => this.updateView(this.props.match.params.id)

    public componentWillReceiveProps = (nextProps: any) => {
        if(this.props.match.params.id !== nextProps.match.params.id) {
            this.updateView(nextProps.match.params.id);
        }
     }

    public render() {
        return (
            <div className="scroll" id="colorView">
                <div>
                    <div style={{backgroundColor: `${this.state.currColor.colorCode}`}}/>
                    <h4>{this.state.currColor.colorCode}</h4>
                </div>
                <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", justifyItems: "center", gridRowGap: 20, marginBottom: 20}}>
                    {this.state.suggestedColors.map((color: any) =>
                        <Link to={`/${color._id}`}>
                            <div style={{height: 120, width: 120, display: "grid", gridTemplateRows: "65% auto", borderRadius: 5, boxShadow: "0px 0px 10px -1px #888888", padding: 1}}>
                                <div style={{backgroundColor: `${color.colorCode}`, borderRadius: "5px 5px 0px 0px"}}/>
                                <h4 style={{fontSize: 16, margin: "8px 15px"}}>{color.colorCode}</h4>
                            </div>
                        </Link>
                    )}
                </div>
                <div className="button"><Link to="/"><b>Clear</b></Link></div>
            </div>
        )
    }
}

export default withRouter(ColorView);