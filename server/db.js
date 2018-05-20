const mongoose = require('mongoose')
const Schema = mongoose.Schema

// 用户信息的数据结构模型
const userSchema = new Schema({
  account: {type: String},
  password: {type: String},
}, { timestamps: true })
// 商品的的数据结构模型
const goodsSchema = new Schema({
  good_id: String,
  good_name: String,
  good_price: String,
  good_size: String,
  good_class: String,
  good_img: String,
},  { timestamps: true })
// 购物车的的数据结构模型
const shopcarSchema = new Schema({
	account:String,
	shopname:String,
	goodsname:String,
	goodsimg:String,
	goodssize:String,
	goodsnote:String,
	goodsprice:String,
	goodsnum:String,
	goodsselected:Boolean
})
const bigclassSchema = new Schema({
	bigclassid:String,
	bigclassname:String
})
const addrSchema = new Schema({
	name:String,
	account:String
})
mongoose.Promise = global.Promise;
const database = mongoose.connect('mongodb://127.0.0.1:27017/vuemall')
database.connection.on('error', function(error){
  console.log('数据库连接失败：' + error)
  return
})
database.connection.once('open', function(){
  console.log('数据库连接成功')
  // 初始化数据库
})

const db = {
  userModel: database.model('userModel', userSchema),
  goodsModel: database.model('goodsModel', goodsSchema),
  shopcarModel : database.model('shopcarModel',shopcarSchema),
  bigclassModel : database.model('bigclassModel',bigclassSchema),
  addrModel : database.model('addrModel',addrSchema)
}

module.exports = db