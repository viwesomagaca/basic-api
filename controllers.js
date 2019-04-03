const item = require('./models');

const getItem = (req,res) => {
 item.find()
 .then((data) =>{
    console.log(data)
    return res.json({success: true, data: data})
})
.catch(err => {
    if(err) return res.json({ success: false, error: err });
  });
};

const postItem = (req,res) =>{
    const item = new item();
    item.itemname = req.body.itemname;

    item.save(err =>{
        return res.json({status: true});
    })

}

  module.exports = {
      getItem,
      
  }

 