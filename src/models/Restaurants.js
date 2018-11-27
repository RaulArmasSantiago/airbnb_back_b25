import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const RestaurantSchema = new Schema({
    name:{
        type:String,
        required: true
    },
    url_images:[{
        type:String
    }],
    location:{
        type:String,
        required:true
    },
    social:[{
        type:String,
    }],
    schedules:[{
        type:String,
        required:true
    }],
    rating:{
        type:[Number]
    },
    comments:[{
        type:String
    }],
    speciality:{
        type:String,
    },
    host:{
        type:String,
        required:true
    }

},{'collection':'Restaurant', 'timestamps':true});

const Restaurant = mongoose.model('Restaurant', RestaurantSchema);

export default Restaurant;