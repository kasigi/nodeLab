var jQuery = require('jquery');
var jsdom = require('jsdom');

console.log("I am a purple platypus");

var testArray = ['walnut','raisin','dora','hazelnut'];

jQuery.each(testArray,function(index,value){
    console.log(testArray+" pig ");
});