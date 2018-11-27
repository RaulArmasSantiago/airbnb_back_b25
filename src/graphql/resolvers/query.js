//Mongo Models
import Accommodation from '../../models/Accommodations';
import Restaurant from '../../models/Restaurants';
import Experience from '../../models/Experiences';
import User from '../../models/Users';

export default {

    //User
    async oneUser(_, {id}, context, info){
        return await User.findById(id);
    },

    async allUsers(){
        return await User.find();
    },

    //Experiences
    async allExperience (){
        return await Experience.find();
    },

    async oneExperience(_,{id}, context, info){
        return await Experience.findById(id);
    },

    //Restaurants
    async allRestauran (){
        return await Restaurant.find();
    },

    async oneExperience(_,{id}, context, info){
        return await Restaurant.findById(id);
    },

    //Accommodation
    async allAccommodtion (){
        return await Accommodation.find();
    },

    async oneAccommodation(_,{id}, context, info){
        return await Accommodation.findById(id);
    }


}