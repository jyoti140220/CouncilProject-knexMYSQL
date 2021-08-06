const knex = require('../modal/council.schema.js')

deleteCouncilIfExits=async(req,res)=>{
    knex.from('CouncilDetials').select("*").where('name', "=", req.params.name).del()
    .then(()=>{
        return res.status(200).json({message:"One Row Deleted Succesfully!!!",status:200})
    }).catch((err)=>{
        return res.status(400).json({error:err,status:400})
    })


}
module.exports=deleteCouncilIfExits