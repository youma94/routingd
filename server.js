const express = require('express')
const app = express()

requesttime = (req, res, next)=> {
    let date=new Date()
    let hh=date.getHours()
    console.log('Time:'+ hh + 'h  Web site closed at 17h');
    if (hh<17 && hh>7)next();
};

// app.use(express.static(__dirname + '/'))

app.get('/home',requesttime, (req, res) => {
    res.sendFile(__dirname + '/home.html')
})

app.get('/services',requesttime, (req, res) => {
    res.sendFile(__dirname + '/ourservice.html')
})

app.get('/contact',requesttime, (req, res) => {
    res.sendFile(__dirname + '/contact.html')
})

app.listen(5000, (err) => {
    if (err) console.log("server is not running")
    else console.log("server is runing on port 5000")
})