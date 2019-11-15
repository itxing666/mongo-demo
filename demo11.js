// 生成随机数
function getRandomNum(min, max) {
  let range = max - min;  // 得到随机数区间
  let rand = Math.random(); // 得到随机数
  return (min +Math.round(rand * range))
}

// console.log(getRandomNum(10000, 99999))

// 生成随机用户名
function getRadomUserName(min, max) {
  let tempStringArray = "123456789qwertyuiopasdfghjklzxcvbnm".split("")  // 构造生成时的字母库数组
  let outPuttext = ""  // 最后输出的变量
  // 进行循环 随机生成用户名的长度 这里需要生成随机数方法的配合
  for (let i = 0; i < getRandomNum(min, max); i++) {
    //随机抽取字母，拼装成需要的用户名
    outPuttext=outPuttext+tempStringArray[getRandomNum(0,tempStringArray.length)]
  }
  return outPuttext
}
// console.log(getRadomUserName(7,16))

var db = connect('company')
db.randomInfo.drop()
var tempInfo = []
for (let i = 0; i < 2000000; i++) {
  tempInfo.push({
    username: getRadomUserName(7, 16),
    regeditTime: new Date(),
    randNum0: getRandomNum(100000,999999),
    randNum1: getRandomNum(100000,999999),
    randNum2: getRandomNum(100000,999999),
    randNum3: getRandomNum(100000,999999),
    randNum4: getRandomNum(100000,999999),
    randNum5: getRandomNum(100000,999999),
    randNum6: getRandomNum(100000,999999),
    randNum7: getRandomNum(100000,999999),
    randNum8: getRandomNum(100000,999999),
    randNum8: getRandomNum(100000,999999),
  })
}

db.randomInfo.insert(tempInfo)
