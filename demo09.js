var db=connect('company');
db.workmate.find({
  interest: ['画画','聚会','看电影']
},  {name:1,interest:1,age:1,_id:0} )

// 问题就在于我们写了一个中括号([]),因为加上中括号就相当于完全匹配了
db.workmate.find({interest:'看电影'},
    {name:1,interest:1,age:1,_id:0}
)

// $all-数组多项查询
db.workmate.find(
  {interest:{$all:["看电影","看书"]}},
  {name:1,interest:1,age:1,_id:0}
)

// $in 数组的或者查询
db.workmate.find(
  {interest:{$all:["看电影","看书"]}},
  {name:1,interest:1,age:1,_id:0}
)

// $size-数组个数查询
db.workmate.find({
  interest: {$size: 5}},
  {name: 1,interest:1,age:1,_id:0})

// $slice-显示选项 显示每个人兴趣的前两项
db.workmate.find(
  {},
  {name:1,interest:{$slice:2},age:1,_id:0}
)

db.workmate.find({}, {name: 1, interest: {$slice: -1}, age:1, _id: 0})

// find 参数
// query：这个就是查询条件，MongoDB默认的第一个参数。
// fields：（返回内容）查询出来后显示的结果样式，可以用true和false控制是否显示。
// limit：返回的数量，后边跟数字，控制每次查询返回的结果数量。
// skip:跳过多少个显示，和limit结合可以实现分页。
// sort：排序方式，从小到大排序使用1，从大到小排序使用-1。
db.workmate.find({},{name:true,age:true,_id:false}).limit(0).skip(2).sort({age:1});

// $where 不建议使用
db.workmate.find(
  {$where:"this.age>30"},
  {name:true,age:true,_id:false}
)