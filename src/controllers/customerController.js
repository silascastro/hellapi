const Customer = require('../models/Customer');

exports.getCustomers = (req,res,next)=>{
    Customer.find((err, result)=>{
        console.log(result);
        if(result){
            res.status(200).send(result);
        }
        if(err){
            res.status(500).send({msg: 'erro: '+err});
        }
    })
};


exports.createCustomer = (req,res,next)=>{
    const customer = new Customer(req.body);
    customer.save((err, result)=>{
        if(result)
            res.status(200).send(result);
        if(err)
            res.status(500).send(err);
    });
};