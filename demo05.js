var db=connect('company')
// $push追加数组/内嵌文档值
// $ne查找是否存在 没有则修改，有则不修改
// $addToSet 升级版的$ne
// $each 批量追加
// $pop 删除数组值 (1 数组末端进行删除 -1 数组开端进行删除)
// db.workmate.update({name: 'MinJie'},{$push: {'skill.skillFour': 'draw'}})
// db.workmate.update({name:'xiaoWang'},{$push:{interest:'draw'}})
// db.workmate.update({name: 'xiaoWang', 'interest': {$ne: 'playGame'}}, {$push: {interest: 'Game'}});
// db.workmate.update({name: 'xiaoWang'},{$addToSet: {interest: 'readBook'}})

// var newInterset = ['Sing', 'Dance', 'Code']
// db.workmate.update({'name': 'xiaoWang'}, {$addToSet: {interest: {$each: newInterset}}})
// db.workmate.update({'name': 'xiaoWang'}, {$set: {'interest.2': 'Code'}})
db.workmate.update({'name': 'XiaoWang'}, {$pop: {interest: 1}})
print('[update]: The data was updated successfully');