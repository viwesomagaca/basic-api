const item = require('./models');

const getItem = (req,res);
 item.find()
 .then((data) =>{
    console.log(data)
    return res.json({success: true, data: data})
})
.catch(err => {
    if(err) return res.json({ success: false, error: err });
  });

  module.exports = {
      getItem,
  }