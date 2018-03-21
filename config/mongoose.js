/**
 * Created by wangyi on 2018/03/08.
 */
var mongoose=require('mongoose');
var config=require('./db_url.js');

module.exports=function(){
      var db=mongoose.connect(config.mongodb, { keepAlive: 30000, connectTimeoutMS: 30000, }, function(err, db) {});
    require('../model/user.js');
    require('../model/holiday.js');
    require('../model/signin.js');
    return db;
}
