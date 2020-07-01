const express = require('express');
       os = require('os');
       path = require('path');
const app = express();
var request = require('request');
var cheerio = require('cheerio');


const port = process.env.port || 4000;

app.get('/scrape',(req,res) => {
  request('https://blog.hubspot.com/marketing/beginner-blogger-mistakes', function (error, response, html) {
  if (!error && response.statusCode == 200) {
    var tagName = 'meta'
    var loadData = cheerio.load(html);
    console.log(loadData.html(tagName));
    res.status(200).json({"metatags":loadData.html(tagName)});
  }
});
})

app.get('/api/posts',(req,res)=>{
  const posts = {
    "message": "Post fetched successfully ",
    "postsDetails": [
    {
    "_id": "5ef45e15b2f20a44d42af5c1",
    "title": "First post",
    "content": "Saving First post",
    "__v": 0
    },
    {
    "_id": "5ef586f10036fd25f02434c5",
    "title": "Second post",
    "content": "Post details for reactive form",
    "__v": 0
    },
    {
    "_id": "5ef6c921434db958b4126511",
    "title": "Addding new post ",
    "content": "Addding new post ",
    "__v": 0
    },
    {
    "_id": "5ef6c92b434db958b4126512",
    "title": "Hello post",
    "content": "Hello post",
    "__v": 0
    },
    {
    "_id": "5ef6c939434db958b4126513",
    "title": "Good Content",
    "content": "Good Content",
    "__v": 0
    },
    {
    "_id": "5ef6d68045d6792d949fc800",
    "title": "Sixth post",
    "content": "Sixth post details",
    "__v": 0
    },
    {
    "_id": "5ef6d68f45d6792d949fc801",
    "title": "Valid check post",
    "content": "Valid check post",
    "__v": 0
    },
    {
    "_id": "5ef6d6a945d6792d949fc802",
    "title": "seven post",
    "content": "seven post detail",
    "__v": 0
    }
    ]
    };
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(posts);
})


app.get('/', (req, res) => res.sendFile('./problem.html', {root: __dirname }))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))