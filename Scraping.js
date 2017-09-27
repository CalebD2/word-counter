// These are the variable declarations that are used to scrape the page specified
var request = require('request'),
    cheerio = require('cheerio'),
    urls = [];

//This specifies the request to have two fields, a string that is used for the Web page to scrape, and a function, specified below
request('http://www.reddit.com',function(err,resp,body){
    //Basically specified "If retrieved successfully..."
    if(!err && resp.statusCode == 200){
        //This uses jQuery format, just loads th4e body of the HTML into this variable
        var $ = cheerio.load(body);
        //"For this variable..." Title is the title of pages, "siteTable" (common sense), and for each, perform that function
        $('a.title', '#siteTable').each(function(){

            // Grabs the URLs from the "siteTable"
            var url = $(this).attr('href');
            // Pushes them onto the previously declared array
            urls.push(url);
        });
        // Prints to user the array of URLs
        console.log(urls);
    }
});