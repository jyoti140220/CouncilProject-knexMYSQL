const express = require('express')
const fs = require('fs')
const { parse } = require('path')
const app = express()
var router = express.Router()
router.use(express.json())

const knex = require('knex')({
    client: "mysql",
    connection: {
        host: "localhost",
        user: "root",
        password: "Jyoti34@12",
        database: "councilDB"

    }
})

router.post('/createtable', (req, res) => {
    knex.schema.createTable('CouncilDetials', (table) => {
        table.increments('serialNumber')
        table.string('name')
        table.string('fullName')
        table.string('work')
    }).then(() => { res.send("table crate") }).catch(() => {res.send("Alreday exit") })

})


router.get('/:name', (req, res) => {
    var dicdata = req.body
    var check = true
    knex.from('CouncilDetials').select("*")
        .then((rows) => {
            for (j in rows) {
                if (rows[j]['name'] == req.params.name) {
                    check = false}}
            for (i in dicdata) {
                var counsil_name = dicdata[i]["council"]
                if (counsil_name == req.params.name) {
                    res.send(`Name Of Council :-- ${dicdata[i]["fullname"]}\n\n Responsibilities: -\n\n${dicdata[i]["work"]}`)
                    if (check == true) {
                        knex('CouncilDetials').insert({ name: dicdata[i]["council"], fullname: dicdata[i]["fullname"], work: dicdata[i]["work"] }).then(() => { console.log("inserat data") })
                            .catch(() => { console.log("Error :" + JSON.stringify(err, undefined, 2)) })}}
                    }}

        ).catch((err) => { console.log(err) })
})



router.delete('/:nameOFCouncil',(req,res)=>{
    knex.from('CouncilDetials').select("*").then((data)=>{
        for(i in data){
            if(req.params.nameOFCouncil==data[i]['name']){
                knex('CouncilDetials').where('name',req.params.nameOFCouncil).del().then(()=>{res.send(`${req.params.nameOFCouncil} this row is delete from table`)}).catch((err)=>{res.send(err)})
            }
        }
    })
})



module.exports = router
