const user = require('../model/user')
module.exports={
    index:(req,res)=>{
        //your code here
        
            user.find({}).then((data)=>{
                res.json(data)
                   
            })
    },
    create:(req,res)=>{
        //your code here
        const newuser= user(req.body);
        newuser.save().then(()=>res.json({"mes": "course created"}))
    },
    update:(req,res)=>{
        //your code here
        user.updateOne({_id : req.params.id},{name:req.body.name}).then(()=>{
            res.json({'mes' : "course updated"})
        })
    },
    delete:(req,res)=>{
        //your code here
        user.deleteOne({_id : req.params.id},{name : req.body.name}).then(()=>{
            res.json({'mes' : "user deleted"})
        })
    }
}