import mongoose from 'mongoose';


const Schema = mongoose.Schema;

const ExperienceSchema = new Schema({
    name:{
        type:String,
        required: true
    },
    category:{
        type:Schema.Types.ObjectId
    },
    description:{
        type:String,
        required:true
    },
    rating:{
        type:[Number]
    },
    pricePeople:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    duration:{
        type:String,
        require:true
    },
    services:[{
        type:String,
        require:true
    }],
    description:{
        type:String,
        required:true
    },
    url_images:[{
        type:String
    }],
    
    services:[{
        type:String,
        require:true
    }],
    comments:[{
        type:String
    }],
    host:{
        type:String,
        required:true
    }

},{'collection':'Experience', 'timestamps':true});

const Experience = mongoose.model('Experience', ExperienceSchema);

export default Experience;