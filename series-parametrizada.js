const express = require('express');
const app = express();

app.get ('/serie/:id', function (req,res) {
let lasSeries = series.find(series=> serie.id == req.params.id);
res.send (lasSeries) ;
});