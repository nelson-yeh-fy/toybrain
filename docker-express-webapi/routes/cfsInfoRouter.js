import express from 'express';
import CFSInfoModel from '../models/cfsInfoModel';
const Router = express.Router();

// Get partial fields of CFSInfoModel, make it effiency for getting list only.
Router.route('/')
    .get((req, res) => {
      CFSInfoModel.find({}, (err, cfsInfo) => {
        const cfslist = cfsInfo.map( item => {
            return { _id: item._id, cfsNumber: item.cfsNumber, cfsStatus: item.cfsStatus }
        })
        // res.json(cfslist)
        setTimeout((function() {res.json(cfslist)}), 2000);
      })
    })

Router.route('/fulldetail')
    .get((req, res) => {
      CFSInfoModel.find({}, (err, cfsInfo) => {
            res.json(cfsInfo)
        })
    })
    .post((req, res) => {
        let cfsInfo = new CFSInfoModel(req.body);
        cfsInfo.save();
        res.status(201).send(cfsInfo)
    })


// Middleware
Router.use('/:itemId', (req, res, next)=>{
  CFSInfoModel.findById( req.params.itemId, (err,cfsInfo)=>{
        if(err)
            res.status(500).send(err)
        else {
            req.cfsInfo = cfsInfo;
            next()
        }
    })

})
Router.route('/:itemId')
    .get((req, res) => {
        res.json(req.cfsInfo)
    }) // end get Books/:itemId
    .put((req,res) => {
        req.cfsInfo.cfsNumber = req.body.cfsNumber;
        req.cfsInfo.cfsStatus = req.body.cfsStatus;
        req.cfsInfo.cfsDesc = req.body.cfsDesc;
        req.cfsInfo.addby = req.body.addby;
        req.cfsInfo.addon = req.body.addon;
        req.cfsInfo.save()
        res.json(req.book)
    })
    .patch((req,res)=>{
        if(req.body._id){
            delete req.body._id;
        }
        for( let p in req.body ){
            req.cfsInfo[p] = req.body[p]
        }
        req.cfsInfo.save()
        res.json(req.cfsInfo)
    })//patch
    .delete((req,res)=>{
        req.cfsInfo.remove(err => {
            if(err){
                res.status(500).send(err)
            }
            else{
                res.status(204).send('removed')
            }
        })
    })//delete

export default Router;