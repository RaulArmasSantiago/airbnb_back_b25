import Accommodation from '../../models/Accommodations'
import User from '../../models/Users'
import Restaurant from '../../models/Restaurants'
import Experience from '../../models/Experiences'

export default {

    //Accommodatiosn
    async createAccommodation(root, {input}) {
        return await Accommodation.create(input).then(accommodation => {
            return accommodation.toObject();
        }).catch(err => {
            throw err;
        })
    },

    async updateAccommodation(root, {id, input}){
        return await Accommodation.findOneAndUpdate(id, {$set: input}, {new: true}).then(updateAccommodation => {
            return updateAccommodation;
        }).catch(err => {
            throw err;
        });
    },

    async deleteAccommodation(root,{id}){
        return await Accommodation.findByIdAndDelete(id).then(() => 'Eliminado exitosamente')
        .catch(err => {
            throw err;
        });
    },

    //Users
    async createUser(root, {input}) {
        return await User.create(input).then(user => {
            return user.toObject();
        }).catch(err => {
            throw err;
        })
    },

    async updateUser(root, {id, input}){
        return await User.findOneAndUpdate(id, {$set: input}, {new: true}).then(user => {
            return user;
        }).catch(err => {
            throw err;
        });
    },

    async deleteUser(root,{id}){
        return await User.findByIdAndDelete(id).then(() => 'Eliminado exitosamente')
        .catch(err => {
            throw err;
        });
    },

    //Restaurant
    async createRestaurant(root, {input}) {
        return await Restaurant.create(input).then(restaurant => {
            return restaurant.toObject();
        }).catch(err => {
            throw err;
        })
    },

    async updateRestaurant(root, {id, input}){
        return await Restaurant.findOneAndUpdate(id, {$set: input}, {new: true}).then(restaurant => {
            return restaurant;
        }).catch(err => {
            throw err;
        });
    },

    async deleteRestaurant(root,{id}){
        return await Restaurant.findByIdAndDelete(id).then(() => 'Eliminado exitosamente')
        .catch(err => {
            throw err;
        });
    },

    //Experience
    async createExperience(root, {input}) {
        return await Experience.create(input).then(experience => {
            return experience.toObject();
        }).catch(err => {
            throw err;
        })
    },

    async updateExperience(root, {id, input}){
        return await Experience.findOneAndUpdate(id, {$set: input}, {new: true}).then(experience => {
            return experience;
        }).catch(err => {
            throw err;
        });
    },

    async deleteExperience(root,{id}){
        return await Experience.findByIdAndDelete(id).then(() => 'Eliminado exitosamente')
        .catch(err => {
            throw err;
        });
    },
}