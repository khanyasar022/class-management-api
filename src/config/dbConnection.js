const mogoose = require('mongoose')
mogoose
  .connect(process.env.DATABASE)
  .then(() => {
    console.log("database connected")
  })
  .catch((err) => {
    console.log(err)
  })