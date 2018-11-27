import mongoose from 'mongoose';

const Schema = mongoose.Schema; 


const UserSchema = new Schema({
    name:{
        type:String,
        require:true
    },
    lastname:{
        type:String,
        require:true
    },
    email: {
        type: String,
        required: true
    },
    password:{
        type:String,
        required:true
    },
    birthdate:{
        type: Date
    },
    cellPhone:{
        type:String
    },
    natiolality:{
        type:String
    },
    img_uri:{
        type:String
    },
    sex:{
        type:String
    },
    posts:[{
        type:Schema.Types.ObjectId,
        ref:"Catalogue"
    }],
    saved:{
        type:Schema.Types.ObjectId,
        ref:"Catalogue"
    }
},{'collection':'User', 'timestamps':true});

const User = mongoose.model('User', UserSchema);

export default User;