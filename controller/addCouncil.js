const knex = require('../modal/council.schema.js')

const addCouncilIfNotExits = async (req, res) => {
    const reqData = req.body
    var findOneData = reqData.filter((data) => {
        return data.council == req.params.name
    })

    knex.from('CouncilDetials').select("*").where('name', "=", req.params.name)
        .then((data) => {
            if (Object.keys(data).length == 0) {
                knex('CouncilDetials').insert({ name: findOneData[0]["council"], fullname: findOneData[0]["fullname"], work: findOneData[0]["work"] })
                    .then(() => { 
                        console.log("Data Insert")
                        return res.status(200).send(`Name Of Council :-- ${findOneData[0]["fullname"]}\n\n Responsibilities: -\n\n${findOneData[0]["work"]}`)
                     })
                    .catch(() => { res.status(400).send("Error :" + JSON.stringify(err, undefined, 2)) })

            } else {
                console.log("data insert")
                return res.status(200).send(`Name Of Council :-- ${findOneData[0]["fullname"]}\n\n Responsibilities: -\n\n${findOneData[0]["work"]}`)
            }})
        .catch((err) => { res.status(400).send(err) })
}

module.exports = addCouncilIfNotExits