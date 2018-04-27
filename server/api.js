const db = require('./db')

module.exports = function (app) {
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
  })
  // 注册
  app.get('/api/user/register', function (req, res) {
    // 对发来的注册数据进行验证
    let name = req.query.account;
    let pwd = req.query.password;
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
  })
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
  })
    app.get('/api/bigclass',function(req,res){
      db.bigclassModel.find(function(err,doc){
        res.json({code:200,msg:'查询成功',body:doc})
      })
    })
  app.get('*', function(req, res){
    res.end('404')
  })
}