const fs = require ('fs')
const {parse, stringify} = require('flatted/cjs')

const ShopModel = require ('../models/shop')

async function add(item){
    return ShopModel.create(item)
} 

async function findAll(){
    return ShopModel.find()
} 

async function loadById(itemId){
    return ShopModel.findOne({ _id: itemId })
}   

async function loadByName(itemName){
    return ShopModel.find({name: itemName})
} 

async function deleteItem(itemId){
   return ShopModel.remove({_id: itemId})
}   


module.exports = {
    add,
    findAll,
    loadById,
    loadByName,
    deleteItem
}
