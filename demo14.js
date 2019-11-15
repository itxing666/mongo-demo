var db = connect('company')
db.createUser({
  user: "itxing",
  pwd: "123456",
  customData: {
    name: 'itxing',
    email: 'itxing666@163.com',
    age: 18
  },
  roles: ['read']
})

// db.createUser({
//   user:"itxing",
//   pwd:"123456",
//   customData:{
//       name: 'itxing',
//       email: 'itxing666@163.com',
//       age: 18,
//   },
//   roles:[
//       {
//           role:"readWrite",
//           db:"company"
//       },
//       'read'
//   ]
// })

// 内置角色：

// 数据库用户角色：read、readWrite；
// 数据库管理角色：dbAdmin、dbOwner、userAdmin;
// 集群管理角色：clusterAdmin、clusterManager、clusterMonitor、hostManage；
// 备份恢复角色：backup、restore；
// 所有数据库角色：readAnyDatabase、readWriteAnyDatabase、userAdminAnyDatabase、dbAdminAnyDatabase
// 超级用户角色：root
// 内部角色：__system

// 删除用户
db.system.users.remove({user: 'itxing'})

// 建权
db.auth('itxing','123456')

// 备份
// mongodump --host 127.0.0.1 --port 27017 --out D:/databack/

// mongorestore --host 127.0.0.1 --port 27017 D:/databack/