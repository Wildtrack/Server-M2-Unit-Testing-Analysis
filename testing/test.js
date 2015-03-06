//var jsdom = require("jsdom").jsdom;


var jsdom = require("jsdom").jsdom;
var fs = require("fs");
var libs = fs.readFileSync("./subject/MiniProject1/www/js/libs.js", "utf-8");
var site = fs.readFileSync("./subject/MiniProject1/www/site.js", "utf-8");



    describe('It should tests', function(){
	    
    	it('Should be like this yo', function(){

    		jsdom.env({
				  file: "./subject/MiniProject1/www/index.html",				//html file here
				  src: [libs, site],
				  done: function (errors, window) {
				    if(errors) console.log(errors);


				    window.layers(10, 12);
				    window.waves(20, 30);
				    window.pv.identity;
				 }
			});
		});
  });




