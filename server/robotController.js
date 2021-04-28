let robotArr = require('../src/robot_data.json')

module.exports = {
    getRobots: (req,res) => {
        res.status(200).send(robotArr)
    },
    deleteRobot: (req,res) => {
        const {id} = req.params
        robotArr = robotArr.filter(robotObj=>robotObj.id!==parseInt(id,10))
        res.status(200).send(robotArr)
    }
}