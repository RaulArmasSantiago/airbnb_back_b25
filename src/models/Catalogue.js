import mongoose from 'mongoose';

const Schema = mongoose.Schema; 


const CatalogueSchema = new Schema({
    accommodations:[{
        name:{

        }
    }]
},{'collection':'Catalogue', 'timestamps':true});

const Catalogue = mongoose.model('Catalogue', CatalogueSchema);

export default Catalogue;