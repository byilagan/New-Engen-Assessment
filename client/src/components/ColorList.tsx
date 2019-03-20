import * as React from 'react'; 
import {Link} from 'react-router-dom'; 

const COLORS_PER_PAGE = 16;
class ColorList extends React.Component<any, any> {

    public state = {
        currentPage: 0, 
        numPages: Math.ceil(this.props.colorList.length / COLORS_PER_PAGE)
    }

    public getPage = () => {
        var startIndex = this.state.currentPage * COLORS_PER_PAGE; 
        var endIndex = startIndex + COLORS_PER_PAGE; 

        return this.props.colorList.slice(startIndex, endIndex); 
    }

    public nextPage = () => {
        this.setState({
            currentPage: this.state.currentPage + 1
        })
    }

    public prevPage = () => {
        this.setState({
            currentPage: this.state.currentPage - 1
        })
    }


    public render() {
        return (
            <div id="colorList" className="scroll">
                <div>
                    {this.getPage().map((color: any) =>
                        <Link to={`/${color._id}`}>
                            <div className="color-item">
                                <div className="top-border-radius" style={{backgroundColor: `${color.colorCode}`}}/>
                                <h4>{color.colorCode}</h4>
                            </div>
                        </Link>
                    )}
                </div>
                <div id="pagination">
                    {this.state.currentPage + 1 !== 1 ? (
                        <div className="button prevBtn" onClick={this.prevPage} ><b>Prev</b></div>
                    ) : null}
                    <h4>{this.state.currentPage + 1}</h4>
                    {this.state.currentPage + 1 !== this.state.numPages ? (
                        <div className="button nextBtn" onClick={this.nextPage}><b>Next</b></div>
                    ) : null}
                </div>
            </div>
        )
    }
}

export default ColorList;