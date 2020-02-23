var express = require('express');
var router = express.Router();
const fs = require('fs');
var marked = require('marked');
/* GET home page. */
router.get('/getNote', function(req, res, next) {
  res.send('成功调用笔记接口');
});
router.get('/getNoteList', function(req, res, next) {
  let files = fintNoteList('./note');
  res.json(files);
});
router.get('/getNoteByName/:name', function(req, res, next) {
  console.log(req.params.name);
  fileName = req.params.name;
  // res.send(req.params.name);
  fs.readFile('./note/' + fileName +'.MD',function(err,data){
    if(err){
      res.send('文件不存在')
    }else{
      var htmlStr = marked(data.toString());
      res.json(htmlStr);
    }
  })
});
function fintNoteList(path){
  let result = [];
  let files = fs.readdirSync(path);
  files.forEach(val=>{
    if(val.endsWith('.MD')){
      result.push(val.split('.MD')[0]);
    }
  })
  console.log(result);
  return result;
  
}
module.exports = router;
