var userName = 'test'
var timeStamp = Date.parse(new Date())
var jsonDatabase = {"loginUnser":userName,"loginTime":timeStamp} // 组成JSON字符串
var db = connect('log')  // 链接数据库(没有将会创建) db不能用let声明
db.login.insert(jsonDatabase)  //插入数据
print('[demo]log  print success');  //没有错误显示成功

// 终端执行命令 mongo goTask.js


// use db（建立数据库）：use不仅可以进入一个数据库，如果你敲入的库不存在，它还可以帮你建立一个库。但是在没有集合前，它还是默认为空。
// db.集合.insert( ):新建数据集合和插入文件（数据），当集合没有时，这时候就可以新建一个集合，并向里边插入数据。Demo：db.user.insert({“name”:”jspang”})
// db.集合.find( ):查询所有数据，这条命令会列出集合下的所有数据，可以看到MongoDB是自动给我们加入了索引值的。Demo：db.user.find()
// db.集合.findOne( ):查询第一个文件数据，这里需要注意的，所有MongoDB的组合单词都使用首字母小写的驼峰式写法。
// db.集合.update({查询},{修改}):修改文件数据，第一个是查询条件，第二个是要修改成的值。这里注意的是可以多加文件数据项的
// db.集合.remove(条件)：删除文件数据，注意的是要跟一个条件。
// Demo:db.user.remove({“name”:”jspang”})
// db.集合.drop( ):删除整个集合，这个在实际工作中一定要谨慎使用，如果是程序，一定要二次确认。
// db.dropDatabase( ):删除整个数据库，在删除库时，一定要先进入数据库，然后再删除。实际工作中这个基本不用，实际工作可定需要保留数据和痕迹的。
