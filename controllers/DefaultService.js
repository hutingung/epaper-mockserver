'use strict';

exports.loginPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * username (String)
  * password (String)
  **/
    var examples = {};
  examples['application/json'] = "auth-1234567890";
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.newsBreakingGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
    var examples = {};
  examples['application/json'] = [ {
  "pdfURL" : "http://localhost:8081/news/today/a/1news.pdf",
  "pageNo" : "a1",  
  "description" : "<b>KUCHING</b>:<p>Chief Minister Datuk Patinggi Tan Sri Adenan Satem passed away this afternoon at 1.20pm, at the Sarawak General Hospital Heart Centre in Samarahan. </p> <p>He would have turned 73 on Jan 27.Adenan was appointed Chief Minister on Feb 28, 2014.All three deputy chief ministers – Datuk Amar Uggah Embas, Tan Sri Dr Jemut Masing and Datuk Amar Abang Johari Openg and Local Government Minister Datuk Dr Sim Kui Hian were among the first to arrive at the hospital upon hearing the news.Family members, relatives and ministers slowly trickled after the official announcement of his passing, with many seen openly sobbing upon hearing the sad news.</p> <p>Head of State Tun Pehin Sri Abdul Taib Mahmud also arrived as the last rites were performed for his successor. Adenan’s body will be moved to his family home at 4pm where it will lie in state.</p>",
  "title" : "Adenan Passes Away",
  "imageURL" : "http://cdn.theborneopost.com/newsimages/2017/01/aden.jpg"
},{
  "pdfURL" : "http://localhost:8081/news/today/b/1news.pdf",
  "pageNo" : "b1",  
  "description" : "<div><p>Sarawak Chief Minister Adenan Satem has passed away at the age of 72.</p><p>It is understood that he was recently warded at the Sarawak General Hospital Heart Centre in Kota Samarahan.</p><p>Adenan took over the post of Sarawak chief minister from his predecessor, Abdul Taib Mahmud, in February 2014.</p><p>Although it is still unclear what the cause of death was, Adenan had spoken of his close shave with death due to a heart ailment four years ago.</p><p>Three years ago I was very sick. I was at the National Heart Institute (IJN in Kuala Lumpur) and in Singapore. And there was a time I thought I was going. I called all my relatives, my children and grandchildren, he said in an interview with <em>Bernama</em> prior to the Sarawak state election last year.</p>",
  "title" : "Sarawak CM Adenan Satem dies, aged 72",
  "imageURL" : "http://mk-cdn.mkini.net/1073/f4e978c9835349caa325b7bf86b397c5.jpg"
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.newsCategoriesGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
    var examples = {};
  examples['application/json'] = {
  "total" : "2",
  "categories" : [ {
    "total" : "10",
    "date" : "2017-01-01",
    "news" : [ {
      "pdfURL" : "http://localhost:8081/news/today/a/1news.pdf",
      "pageNo" : "a1",
      "thumbnailURL" : "http://localhost:8081/news/today/a/1thumbnail.jpg"
    } ],
    "title" : "Category A"
  },{
    "total" : "10",
    "news" : [ {
      "pdfURL" : "http://localhost:8081/news/today/b/1news.pdf",
      "pageNo" : "b1",
      "thumbnailURL" : "http://localhost:8081/news/today/b/1thumbnail.jpg"
    } ],
    "title" : "Category B"
  } ]
};
    for(var j = 0; j < 2; j++) {       
        var category = "a";
        if(j == 1) {
            category = "b";
        }
        for(var i = 2; i <= 10; i ++) {
           examples['application/json'].categories[j].news.push({
              "pdfURL" : "http://localhost:8081/news/today/" + category + "/" + i + "news.pdf",
              "pageNo" : category + i,
              "thumbnailURL" : "http://localhost:8081/news/today/" + category + "/" + i + "thumbnail.jpg"
            } );
        }
    }
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.newsTodayCategoryPageNonews_pdfGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * pageNo (BigDecimal)
  * category (String)
  * auth (String)
  **/
  // no response value expected for this operation
  res.end();
}

exports.newsTodayCategoryPageNothumbnail_pngGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * pageNo (BigDecimal)
  * category (String)
  **/
  // no response value expected for this operation
  res.end();
}

