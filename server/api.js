const db = require('./db')
module.exports = function (app) {
  var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
  app.all("*", function(req, res, next) {

    next();
  });
  // api login

  //登录
  app.get('/api/user/login', function (req, res) {
    // 对发来的登录数据进行验证
    if (!req.query.account) {
      res.json({code: 600, msg:'账号不能为空！'})
      return
    }
    if (!req.query.password) {
      res.json({code: 600, msg:'密码不能为空！'})
      return
    }
    db.userModel.findOne({account: req.query.account}, function(err, doc){
      if (err) {
        console.log('查询出错：' + err);
        res.json({code: 700, msg:'查询出错：' + err})
        return
      } else {
        console.log(doc)
        if (!doc) {
          res.json({code: 700, msg:'不存在该用户名：' + req.query.account})
          return
        } else {
          console.log(typeof(req.query.password))
          console.log(typeof(doc.password))
          if (req.query.password != doc.password) {
            res.json({code: 700, msg:'密码不正确！'})
            return
          } else {
            res.json({code: 200, msg:'密码正确，登录成功',body:doc})
            return
          }
        }

      }
    })
  });
  // 注册
  app.post('/api/user/register', function (req, res) {
    // 对发来的注册数据进行验证
    let name = req.body.account;
    let pwd = req.body.password;
    if (!name) {
      res.json({code: 600, msg:'name 不能为空！'})
      return
    }
    if (!pwd) {
      res.json({code: 600, msg:'pwd 不能为空！'})
      return
    }
    // 查询数据库验证注册账号、密码
    // 是否存在账号
    db.userModel.findOne({account: name}, function(err, doc){
      if (err) {
        console.log('查询出错：' + err);
        res.json({code: 700, msg:'查询出错：' + err})
        return
      } else {
        if (doc) {
          res.json({code: 700, msg:'该用户名名已经被注册：' + name})
          return
        } else {
          db.userModel.create({
            account: name,
            password: pwd
          }, function (err, doc) {
            if (err) {
              res.end('注册失败:' + err)
            } else {
              res.json({code: 200, msg:'用户注册成功：' ,body:doc})
              return
            }
          })
        }

      }
    })
    // 返回注册状态
    // res.send(JSON.stringify({code: 200, data: {account: 'guojcres', pass: 111111}}))
  });
  //获取购物车信息
    app.get('/api/user/shopcar', function (req, res) {
    // 对发来的登录数据进行验证
    if (!req.query.account) {
      // res.writeHead('Access-Control-Allow-Origin', '*');
      // res.writeHead('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild, x-access-token');
      // res.writeHead('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
      // res.writeHead('Access-Control-Allow-Credentials', 'true');
      res.json({code: 600, msg:'账号不能为空！'})
      return
    }
    db.shopcarModel.find({account: req.query.account}, function(err, doc){
      if (err) {
        console.log('查询出错：' + err);
        res.json({code: 700, msg:'查询出错：' + err})
        return
      } else {
        console.log(doc)
        if (!doc) {
          return
        } else {
            res.json({code: 200, msg:'查询成功',body:doc})
            return
        }

      }
    })
  });
    //获取分类
    app.get('/api/bigclass',function(req,res){
      db.bigclassModel.find(function(err,doc){
        res.json({code:200,msg:'查询成功',body:doc})
      })
    });
    //获取地址
  app.get('/api/addr',function(req,res){
    db.addrModel.find({account:req.query.account},function(err,doc){
       if (err) {
        console.log('查询出错：' + err);
        res.json({code: 700, msg:'查询出错：' + err})
        return
      } else {
        console.log(doc)
        if (!doc) {
          return
        } else {
            res.json({code: 200, msg:'查询成功',body:doc})
            return
        }
      }
    })
  });
  //新增地址
  app.post('/api/addaddr',function(req,res){
          // var count = 0
    db.addrModel.find({},function(err,doc){
      // console.log(doc.length)
      // count = doc.length + 1
      // console.log(count);
      db.addrModel.create({
            account: req.body.account,
            name:req.body.name,
            tel:req.body.tel,
            address:req.body.address,
            address_detail:req.body.address_detail,
            province : req.body.province,
            city: req.body.city,
            county : req.body.county,
            postal_code : req.body.postal_code,
            default : req.body.default,
            area_code : req.body.area_code
          }, function (err, doc) {
            if (err) {
              res.end('注册失败:' + err)
            } else {
              res.json({code: 200, msg:'新增地址成功：',body:doc})
              return
            }
          })
    });
  });
  //findByIdAndUpdate通过查找_id更新数据
  //修改地址
    app.post('/api/editaddr',function(req,res){
      var mongoose = require('mongoose');  
      var id = mongoose.Types.ObjectId(req.body._id); 
      console.log(id)
      db.addrModel.findByIdAndUpdate({_id:id},{
        account: req.body.account,
        name:req.body.name,
        tel:req.body.tel,
        address:req.body.province + req.body.city + req.body.county + req.body.address_detail,
        address_detail:req.body.address_detail,
        province : req.body.province,
        city: req.body.city,
        county : req.body.county,
        postal_code : req.body.postal_code,
        default : req.body.is_default,
        area_code : req.body.area_code
      },function(err,doc){
        console.log(doc)
        if (err) {
          res.end('保存失败' + err)
        }else {
          res.json({code:200,msg:'保存地址成功',body:doc})
        }
      })
    });
    //删除地址
    app.delete('/api/deleteaddr',function(req,res){
      var mongoose = require('mongoose');  
      var id = mongoose.Types.ObjectId(req.body._id); 
      console.log(id)
      db.addrModel.findByIdAndRemove({_id:id},function(err,doc){
        console.log(doc)
        if (err) {
          res.end('删除失败' + err)
        }else {
          res.json({code:200,msg:'删除地址成功',body:doc})
        }
      })
    })
    app.get('*', function(req, res){
    res.end('404')
  });
}