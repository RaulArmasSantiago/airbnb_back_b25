import mongoose from 'mongoose';


const Schema = mongoose.Schema;

const AccomodationSchema = new Schema({
    name:{
        type:String,
        required: true
    },
    rating:{
        type:[Number]
    },
    description:{
        type:String,
        required:true
    },
    characteristics:{
        capacity:{
            type:Number,
            require:true
        },
        bedrooms:{
            type:Number,
            require:true
        },
        beds:{
            type:Number,
            require:true
        },
        bathrooms:{
            type:Number,
            require:true
        }
    },
    url_images:[{
        type:String
    }],
    location:{
        type:String,
        required:true
    },
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
    },
    price:{
        type:String,
        required:true
    }
},{'collection':'Accomodation', 'timestamps':true});

const Accomodation = mongoose.model('Accomodation', AccomodationSchema);

export default Accomodation;