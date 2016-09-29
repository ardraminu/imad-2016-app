var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articleOne  = {
    title:'Article one ardra',
    heading: 'Article-One',
    date:' sep 26 2016',
    content: `
         <p>
                  this is the content of my first article.this is the content of my first article. this is the content of my first article.this is the content of my first article.this is the content of my first article .
         </p>
         
          <p>
                  this is the content of my first article.this is the content of my first article.this is the content of my first article .this is the content of my first article      this is the content of my first article   
         </p> 
        
             <p>
                   this is the content of my first article. this is the content of my first article . this is the content of my first article.this is the content of my first article. this is the content of my first article.
             </p>`
}; 
function createTemplate(data){
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;
    var htmlTemplate = `
    <html>
      <head> 
        <title>
           S{title}
        </title>
        <meta name="viexport" content="width-device-width,initial-scole-1/">
        <link href="/ui/style.css" rel="stylesheet" />
      </head>
      <body>
          <div class="container">
            <div>
             <a href="/">home</a>
            </div>
             <hr/>
              <h3>
               S{heading}
             </h3>
            <div> 
               S{date}
           </div>
              
           <div>
              S{content}
           </div>
         </div>
      </body>  
    
    </html>
     `;
  return htmlTemplate;
} 
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one',function(req,res){
res.send(createTemplate(articleOne)); 
});

app.get('/article-two',function(req,res){
res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));   
});

app.get('/article-three',function(req,res){
 res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));  
});

app.get('/ui/style.crss', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
