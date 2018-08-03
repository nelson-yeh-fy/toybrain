import express from 'express';
import CFSLogModel from '../models/cfsLogModel';
const Router = express.Router();

Router.use('/:cfsId', (req, res, next)=>{
        CFSLogModel.find( {cfsId: req.params.cfsId}, (err,cfsLog)=>{
              if(err)
                  res.status(500).send(err)
              else {
                  req.cfsLog = cfsLog;
                  next()
              }
          })

      })

Router.route('/:cfsId')
    .get((req, res) => {
        res.json(req.cfsLog)
    })

export default Router;