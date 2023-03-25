var express = require('express');
var router = express.Router();
const axios = require('axios');

//请求参数
const appid = "wx8aeb2f11bb29f6ed"; //小程序后台管理的appid
const secret = "f548f79f411740bb369e2665470c0c4b"; //小程序后台管理的secret
const grant_type = "authorization_code"
let js_code = 'this is a fake code'; //获取小程序传来的code
//返回给小程序的值
let openid = null; //用户唯一标识
let session_key = null; //会话密钥
let unionid = null; //用户在开放平台的唯一标识符

/**
 *
 */
//微信获取登录凭证，openid、session_key、unionid
router.post("/h",(req,res)=>{
  js_code = req.body.code;
  console.log("post");
  axios.get(`https://api.weixin.qq.com/sns/jscode2session?appid=${appid}&secret=${secret}&js_code=${js_code}&grant_type=${grant_type}`)
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.log(error);
  });

});
router.get("/",(req,res)=>{
  res.send("testtest");
  axios.get(`https://api.weixin.qq.com/sns/jscode2session?appid=${appid}&secret=${secret}&js_code=${js_code}&grant_type=${grant_type}`)
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.log(error);
  });

});
module.exports = router;