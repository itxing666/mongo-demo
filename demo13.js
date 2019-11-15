var db = connect('company')
db.info.insert({contextInfo:"I am a programmer, I love life, love family. Every day after work, I write a diary."})
db.info.insert({contextInfo:"I am a programmer, I love PlayGame, love drink. Every day after work, I playGame and drink."})

// 建立全局索引 db.info.ensureIndex({contextInfo: 'text'})
// 查找 或的关系 db.info.find({$text: {$search: "programmer family diary drink"}})
// 取消drink db.info.find({$text:{$search:"programmer family diary -drink"}})
// 搜索的是两个词（love PlayGame和drink），这时候需要使用\斜杠来转意 db.info.find({$text:{$search:"\"love PlayGame\" drink"}})