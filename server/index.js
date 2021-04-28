const express = require('express')

const app = express()

const robotCtrl = require('./robotController')

app.get('/api/robots', robotCtrl.getRobots)
app.delete('/api/robots/:id',robotCtrl.deleteRobot)

const port = 3005;

app.listen(port,()=>console.log(`Your server is running on port: ${port}`))