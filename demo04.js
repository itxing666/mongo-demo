var db=connect('company')

// 不可以 db.workmate.update({name:'MinJie'},{age: 1})

// $set修改器
// $unset用于将key删除
// $inc对数字进行计算
// $mult选项 修改全部
// upsert选项 找不到值 自动插入

// db.workmate.update({'name': 'MinJie'}, {'$set': {'sex':2, age:21}})
// db.workmate.update({'name': 'MinJie'}, {'$set': {'skill.skillThree': 'word'}})
// db.workmate.update({'name': 'MinJie'}, {$unset: {'age': ''}})
// db.workmate.update({'name': 'MinJie'}, {$set: {'age': 18}})
// db.workmate.update({'name': 'MinJie'},{$inc:{'age':-2}})
// db.workmate.update({}, {$set: {interset:[]}},{multi:true})
db.workmate.update({'name': 'xiaoWang'}, {$set: {age: 20}}, {upsert: true})
print('[update]: The data was updated successfully');