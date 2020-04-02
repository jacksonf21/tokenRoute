import express from "express";
import Token from "../models/Token";
import authenticate from "../middlewares/authenticate";
import parseErrors from "../utils/parseErrors";
import mongoose from "mongoose";

const router = express.Router();

router.use(authenticate);

router.get("/", (req, res) => {
    const reference = req.query;
    reference._id = mongoose.Types.ObjectId(reference._id)

    Token.find(reference, (err, result) => {
        if (err) res.json(err)
        res.json(result) 
    })

});

router.post("/update", (req, res) => {
    const recordData = req.body
    const objectId = mongoose.Types.ObjectId(recordData._id)
    
    Token.findOneAndUpdate({ _id: objectId }, recordData)
        .then( integrationID => {
            res.status(200).json({
                id: integrationID.id,
                name: integrationID.name,
                msg: 'successful update'
            })
        })
        .catch(err => {
            console.log(err);
            res.status(400).json({ errors: parseErrors(err.errors) })
        });
})

router.post("/create", (req, res) => {
    const recordData = req.body
    
    Token.create(recordData)
        .then( integrationID => {
            res.status(200).json({
                id: integrationID.id,
                name: integrationID.name,
                msg: 'successful create'
            })
        })
        .catch(err => {
            console.log(err);
            res.status(400).json({ errors: parseErrors(err.errors) })
        });
})

export default router;
