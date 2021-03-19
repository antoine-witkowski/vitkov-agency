const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AnnonceSchema = new Schema({

    titre: {
        type: String,
    },
    description: {
        type: String,
    },
    adresse: {
        type: String,
    },
    code_postal: {
        type: Number,
    },
    ville: {
        type: String,
    },
    prix: {
        type: Number,
    },

});

const AnnonceModel = mongoose.model("annonce", AnnonceSchema);

module.exports = AnnonceModel;