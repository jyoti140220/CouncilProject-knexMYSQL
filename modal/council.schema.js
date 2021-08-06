const knex=require('../config/db.connection.js')

knex.schema.createTableIfNotExists('CouncilDetials', (table) => {
    table.increments('serialNumber')
    table.string('name')
    table.string('fullName')
    table.string('work')
}).then(()=>{console.log("table crated....")}).catch((err)=>{console.log(err)})

module.exports=knex