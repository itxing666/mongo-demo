var db = connect('company')
var result = db.workmate.find() // 声明变量result，并把查询结果赋值给result
//hasNext循环结果  利用游标的hasNext()进行循环输出结果

// while(result.hasNext()) {
//   printjson(result.next())
// }

// forEach循环
result.forEach(function(result) {
  printjson(result)
})