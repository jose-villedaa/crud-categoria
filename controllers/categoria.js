const { response, request } = require('express');
const bcrypt = require('bcryptjs');

const Categoria = require('../models/categoria');

//Mostrar Categoria
const getCategorias = async(req = request, res = response) => {
    
    //condiciones del get
    const query = {estado:true};

    const listaCategorias = await Promise.all([
        Categoria.countDocuments(query),
        Categoria.find(query)
    ])
    
    res.json({
        msg: 'GET API - Controlador Categoria',
        listaCategorias
    })
}

// Agregar Categoria
const postCategoria = async(req = request, res = response) => {
    //Desestructuracion
    const { nombre, descripcion } = req.body;
    const categoriaGuardadoDB = new Categoria({ nombre, descripcion });

    await categoriaGuardadoDB.save();

    res.json({
        msg: 'API - Categoria (POST)',
        categoriaGuardadoDB
    })
}   

//Editar Categoria
const putCategoria = async(req = request, res = response) => {

    const { id } = req.params;
    const{ _id, img, ...resto } = req.body;

    
    const categoriaEditada = await Categoria.findByIdAndUpdate(id, resto)


    res.json({
        msg: 'PUT editar categoria',
        id,
        categoriaEditada
    })
}
// Eliminar Categoria
const deleteCategoria = async(req = request, res = response) => {
    //Req params para traer datos de las rutas
    const { id } = req.params;
    
    const categoriaEliminada = await Categoria.findByIdAndDelete(id)

    res.json({
        msg: 'get Api - Controlador Categoria (DELETE)',
        categoriaEliminada

    })


}


module.exports = {
    getCategorias,
    postCategoria,
    putCategoria,
    deleteCategoria
}