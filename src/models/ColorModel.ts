import mongoose from 'mongoose'; 

const MONGO_CONNECTION_STRING = "mongodb+srv://bailey:newengen@bailey-new-engen-k7ifo.mongodb.net/test?retryWrites=true";

mongoose.connect(MONGO_CONNECTION_STRING, (err: any) => {
    if (err) {
        console.log(err.message); 
    } else {
        console.log("MongoDB successfully connected!");
    }   
})

export interface IColor extends mongoose.Document {
    colorCode: string;
}

export const ColorSchema = new mongoose.Schema({
    colorCode: {type:String, required: true}
}); 

const Color = mongoose.model<IColor>('Color', ColorSchema); 
export default Color;