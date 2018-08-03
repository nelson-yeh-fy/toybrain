import express from 'express';
import CFSLogModel from '../models/cfsLogModel';
const Router = express.Router();
Router.route('/')
    .get((req, res) => {
      CFSLogModel.find({}, (err, cfsLog) => {
            res.json(cfsLog)
        })
    })
    .post((req, res) => {
        let cfsLog = new CFSLogModel(req.body);
        cfsLog.save();
        res.status(201).send(cfsLog)
    })

// Middleware
Router.use('/:itemId', (req, res, next)=>{
  CFSLogModel.findById( req.params.itemId, (err,cfsLog)=>{
        if(err)
            res.status(500).send(err)
        else {
            req.cfsLog = cfsLog;
            next()
        }
    })

})
Router.route('/:itemId')
    .get((req, res) => {
        res.json(req.cfsLog)
    })
    .put((req,res) => {
        req.cfsLog.type = req.body.type;
        req.cfsLog.text = req.body.text;
        req.cfsLog.addby = req.body.addby;
        req.cfsLog.addon = req.body.addon;
        req.cfsLog.cfsId = req.body.cfsId;
        req.cfsLog.save()
        res.json(req.book)
    })
    .patch((req,res)=>{
        if(req.body._id){
            delete req.body._id;
        }
        for( let p in req.body ){
            req.cfsLog[p] = req.body[p]
        }
        req.cfsLog.save()
        res.json(req.cfsLog)
    })//patch
    .delete((req,res)=>{
        req.cfsLog.remove(err => {
            if(err){
                res.status(500).send(err)
            }
            else{
                res.status(204).send('removed')
            }
        })
    })//delete

export default Router;