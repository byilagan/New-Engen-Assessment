import Color from '../models/ColorModel'; 
import randomColor from 'randomcolor'; 

const NUM_COLORS = 100;

class ColorController {

    public fillDB() {
        Color.find((err: any, colors: any) => {
            if (err) {
                throw new Error(err); 
            } 

            if (colors.length === 0) {
                console.log("DB is empty...")

                var colorList = randomColor({count: NUM_COLORS}); 

                console.log(`Filling DB with ${NUM_COLORS} colors`)

                for (var color of colorList) {
                    console.log(color);

                    var newColor = new Color({colorCode: color}); 

                    newColor.save((err: any) => {
                        if (err) {
                            throw err;
                        }
                    })
                }

                console.log("Successfully filled DB"); 
            } else {
                console.log("DB is filled!");
            }
        })
    }

    public getAllColors(req: any, res: any) {
        Color.find((err: any, colors: any) => {
            if (err) {
                res.send(err); 
            } else {
                res.send(colors);
            }
        })
    }

    public getColor(req: any, res: any) {
        Color.findById(req.params.id, (err: any, color: any) => {
            if (err) {
                res.send(err);
            } else {
                res.send(color);
            }
        })
    }
}

export default ColorController;