const database = require('../helpers/database')
const Product = database('Product')

module.exports = {
    async show(req, res){
        await Product.findAll().then(products => {
            if(products == ''){
                res.status(404).send({message: 'No product yet!'})
            }else{
                res.status(200).send(products)
            }
        })
    },
    async showOne(req, res){
        const id = req.params.id
        await Product.findOne({where:{id}/*, attributes: ['id','name', 'description']*/}).then(product => {
            if(product == null){
                return res.status(404).send({message:`The product not exists!`})
            }else{
                return res.status(200).send(product)
            }
        }).catch(e => {
            return res.status(404).send(`Erro[${e}]`)
        })
    },
    async create(req, res){
        const {name, description, price, qnt} = req.body
        const products = {
            name, 
            description,
            price,
            qnt
        }
        await Product.create(products).then(products => {
            return res.status(201).send(products)
        }).catch(e=>{
            res.status(404).send({message: `An error occurred while registering. [${e}]`})
        })
    },
    async update(req, res){
        const {id} = req.params
        const {name, description, price, qnt} = req.body
        const products = {
            name, 
            description,
            price,
            qnt
        }
        await Product.findOne({where:{id}}).then(product => {
            if(!product){
                return res.status(404).send({message: 'Cannot find this product!'})

            }else{
                Product.update(products, {where:{
                    id
                }})
                return res.status(200).send({message: 'Updated!'})
            }
        })
    },
    async delete(req, res){
        const id = req.params.id
        await Product.findOne({where:{id}}).then(product => {
            if(product == null){
                return res.status(404).send({message:`The product not exists!`})
            }else{
                Product.destroy({where:{id}}).then(product => {
                    res.status(200).send({message: 'The product has been deleted!'})
                })
            }
            }).catch(e => {
                return res.status(404).send({message:`Error while deleting. [${e}]`})
        })
    }
}