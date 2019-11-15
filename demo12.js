var startTime = new Date().getTime()
var db = connect('company')
// var rs = db.randomInfo.find({username:"zulleoh7lo9", randNum0: 768713})
var rs = db.randomInfo.find({username:"zulleoh7lo9", randNum0: 768713}).hint({randNum0: 1})
rs.forEach(rs => {printjson(rs)})
var runTime = new Date().getTime() - startTime;
print('[SUCCESS]This run time is:'+runTime+'ms')


// 在mongo执行 建立索引 db.randomInfo.ensureIndex({username: 1})
// 查看索引 db.randomInfo.getIndexes()
// 再执行 mongo demo12.js


// 数据不超万条时，不需要使用索引。性能的提升并不明显，而大大增加了内存和硬盘的消耗。
// 查询数据超过表数据量30%时，不要使用索引字段查询。实际证明会比不使用索引更慢，因为它大量检索了索引表和我们原表。
// 数字索引，要比字符串索引快的多，在百万级甚至千万级数据量面前，使用数字索引是个明确的选择。
// 把你经常查询的数据做成一个内嵌数据（对象型的数据），然后集体进行索引。



// 复合索引 就是两条以上的索引
// db.randomInfo.ensureIndex({randNum0: 1})
// db.randomInfo.getIndexes()

// 指定索引 hint
// var rs = db.randomInfo.find({username:"zulleoh7lo9", randNum0: 768713}).hint({randNum0: 1})
// 删除索引 dropIndex() 删除时填写的值，并不是我们的字段名称（key），而是我们索引查询表中的name值
db.randomInfo.dropIndex('randNum0_1')