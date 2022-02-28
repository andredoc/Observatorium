const router = require("express").Router()

const { Router } = require("express")
const Item = require("./../models/Item.model")



// LISTA DE ITEMS ///////////////////////

router.get("/getAllItems", (req, res) => {
    Item
        .find()
        .select("name description img")
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})



// DETALLES DE ITEM SELECCIONADO ///////////////////////

router.get("getOneItem/:id", (req, res) => {
    const { item_id } = req.params

    Item
        .findById(item_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})



// CREAR ITEMS ///////////////////////

router.post("/createItem", (req, res) => {
    const { name, img, description, location, size } = req.body

    Item
        .create({ name, img, description, location, size })
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

module.exports = router