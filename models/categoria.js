const { Schema, model} = require('mongoose');

const CategoriaSchema = Schema({
    nombre:{
        type: String,
        required:[true, 'El nombre de la categoria es obligatorio!']
    },
    descripcion:{
        type: String,
        required:[true, 'La descripcion de la categoria es oblogatoria']
    },
    img:{
        type: String
    },
    estado:{
        type: Boolean,
        default: true

    }
});

module.exports = model('Categoria', CategoriaSchema);