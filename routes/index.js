var express = require('express');
var router = express.Router();
const fs = require("fs");

router.get("/", function(req, res){
  fs.readdir("./files", {withFileTypes: true}, function(err, files){
    res.render("index", {files});
  })
});

router.post("/change/:oldname", function(req, res){
  fs.rename(`./files/${req.params.oldname}`, `./files/${req.body.filename}`, function(err){
    res.redirect("/");
  })
});

router.get("/file/delete/:filename", function(req, res){
  fs.unlink(`./files/${req.params.filename}`, function(err){
    res.redirect("/");
  })
});

router.get("/folder/delete/:filename", function(req, res){
  fs.rmdir(`./files/${req.params.filename}`, function(err){
    res.redirect("/");
  })
});

router.get("/filecreate", function(req, res){
  fs.writeFile(`./files/${req.query.filename}`, "", function(err){
    res.redirect("/");
  })
});

router.get("/foldercreate", function(req, res){
  fs.mkdir(`./files/${req.query.foldername}`, function(err){
    res.redirect("/");
  })
});


router.get("/file/:filename", function(req, res){
  fs.readdir("./files", {withFileTypes: true}, function(err, files){
    fs.readFile(`./files/${req.params.filename}`, "utf8", function(err, data){
      res.render("fileshow", {files, filename: req.params.filename, data});
    })
  })
});

module.exports = router;