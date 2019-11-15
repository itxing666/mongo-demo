var db=connect('company')
// false：第一句末尾的false是upsert的简写，代表没有此条数据时不增加;
// true：true是multi的简写，代表修改所有，这两个我们在前边课程已经学过。
// getLastError:1 :表示返回功能错误，这里的参数很多，如果有兴趣请自行查找学习，这里不作过多介绍。
// printjson：表示以json对象的格式输出到控制台。
// db.workmate.update({sex: 1}, {$set: {money: 1000}}, false, true)
// var resultMessage = db.runCommand({getLastError: 1})

var myModify = {
  findAndModify: 'workmate',
  query: { name: 'xiaoWang' },
  update: { $set: {age:18}},
  new: true // 更新完成，需要查看结果，如果为false不进行查看结果
}
var resultMessage = db.runCommand(myModify)
printjson(resultMessage)

// findAndModify属性值：
// query：需要查询的条件/文档
// sort: 进行排序
// update 和 remove 只能有一个
// remove：[boolean]是否删除查找到的文档，值填写true，可以删除。
// new:[boolean]返回更新前的文档还是更新后的文档。
// fields：需要返回的字段
// upsert：没有这个值是否增加。