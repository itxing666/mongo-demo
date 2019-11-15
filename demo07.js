// var workmate1={
//   name:'JSPang',
//   age:33,
//   sex:1,
//   job:'前端',
//   skill:{
//       skillOne:'HTML+CSS',
//       skillTwo:'JavaScript',
//       skillThree:'PHP'
//   },
//   regeditTime:new Date(),
//   interest:[]
// }
// var workmate2={
//   name:'ShengLei',
//   age:31,
//   sex:1,
//   job:'JAVA后端',
//   skill:{
//       skillOne:'HTML+CSS',
//       skillTwo:'J2EE',
//       skillThree:'PPT'
//   },
//   regeditTime:new Date(),
//   interest:[]
// }
// var workmate3={
//   name:'MinJie',
//   age:18,
//   sex:0,
//   job:'UI',
//   skill:{
//       skillOne:'PhotoShop',
//       skillTwo:'UI',
//       skillThree:'PPT'
//   },
//   regeditTime:new Date(),
//   interest:[]
// }
// var workmate4={
//   name:'XiaoWang',
//   age:25,
//   sex:1,
//   job:'UI',
//   skill:{
//       skillOne:'PhotoShop',
//       skillTwo:'UI',
//       skillThree:'PPT'
//   },
//   regeditTime:new Date(),
//   interest:[]
// }
// var workmate5={
//   name:'LiangPeng',
//   age:28,
//   sex:1,
//   job:'前端',
//   skill:{
//       skillOne:'HTML+CSS',
//       skillTwo:'JavaScript',
//   },
//   regeditTime:new Date(),
//   interest:[]
// }
// var workmate6={
//   name:'HouFei',
//   age:25,
//   sex:0,
//   job:'前端',
//   skill:{
//       skillOne:'HTML+CSS',
//       skillTwo:'JavaScript',
//   },
//   regeditTime:new Date(),
//   interest:[]
// }
// var workmate7={
//   name:'LiuYan',
//   age:35,
//   sex:0,
//   job:'美工',
//   skill:{
//       skillOne:'PhotoShop',
//       skillTwo:'CAD',
//   },
//   regeditTime:new Date(),
//   interest:[]
// }
// var workmate8={
//   name:'DingLu',
//   age:20,
//   sex:0,
//   job:'美工',
//   skill:{
//       skillOne:'PhotoShop',
//       skillTwo:'CAD',
//   },
//   regeditTime:new Date(),
//   interest:[]
// }
// var workmate9={
//   name:'JiaPeng',
//   age:29,
//   sex:1,
//   job:'前端',
//   skill:{
//       skillOne:'HTML+CSS',
//       skillTwo:'JavaScript',
//       skillThree:'PHP'
//   },
//   regeditTime:new Date(),
//   interest:[]
// }
// var workmate10={
//   name:'LiJia',
//   age:26,
//   sex:0,
//   job:'前端',
//   skill:{
//       skillOne:'HTML+CSS',
//       skillTwo:'JavaScript',
//       skillThree:'PHP'
//   },
//   regeditTime:new Date(),
//   interest:[]
// }
// var db=connect('company');
// var workmateArray=[workmate1,workmate2,workmate3,workmate4,workmate5,workmate6,workmate7,workmate8,workmate9,workmate10];
// db.workmate.insert(workmateArray);
// print('[SUCCESS]：The data was inserted successfully');

var db=connect('company');
db.workmate.find({'skill.skillOne': 'HTML+CSS'})
db.workmate.find(
  {"skill.skillOne":"HTML+CSS"},
  {name:true,"skill.skillOne":true} // true 就是显示
)

db.workmate.find(
  {"skill.skillOne":"HTML+CSS"},
  {name:true,"skill.skillOne":true,_id:false}
)

// 不等修饰符

// 小于($lt):英文全称less-than
// 小于等于($lte)：英文全称less-than-equal
// 大于($gt):英文全称greater-than
// 大于等于($gte):英文全称greater-than-equal
// 不等于($ne):英文全称not-equal


db.workmate.find(
  {age: {$lte:30,$gte:25}},
  {name:true,age:true,"skill.skillOne":true,_id:false}
)

var startDate= new Date('01/01/2018');
db.workmate.find(
    {regeditTime:{$gt:startDate}},
    {name:true,age:true,"skill.skillOne":true,_id:false}
)

// $in修饰符 解决一键多值的查询情况

db.workmate.find({age:{$in: [25, 33]}},
  {name: 1, 'skill.skillOne': 1, age: 1, _id: 0}
)

// $or修饰符 查询多个键值的情况，就比如查询同事中大于30岁或者会做PHP的信息
db.workmate.find({$or: [
  { age: {$gte: 30}},
  {'skill.skillThree': 'PHP'}
]},
  {name: 1, 'skill.skillThree': 1, age: 1, _id: 0}
)

// $and修饰符  $and用来查找几个key值都满足的情况，比如要查询同事中大于30岁并且会做PHP的信息，
db.workmate.find({$and: [
  { age: {$gte: 30}},
  {'skill.skillThree': 'PHP'}
]},
  {name: 1, 'skill.skillThree': 1, age: 1, _id: 0}
)

// $not修饰符 它用来查询除条件之外的值，比如我们现在要查找除年龄大于20岁，小于30岁的人员信息

db.workmate.find({
  age: {
    $not: {
      $lte: 30,
      $gte: 20
    }
  }
},
{name:1,"skill.skillOne":1,age:1,_id:0}
)