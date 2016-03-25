// using Version 5.4.1
var jsdom = require('jsdom').jsdom;
var document = jsdom('<html></html>', {});
var window = document.defaultView;
var jQuery = require('jquery')(window);


console.log("I am a purple platypus");

var testArray = ['walnut','raisin','dora','hazelnut'];

jQuery.each(testArray,function(index,value){
    console.log(testArray+" pig ");
});


var C = require("./citysdk/citysdk.js");
var CitySDK = new CitySDK();
//var CitySDK = require("./citysdk/citysdk.arcgis.js");

console.log(CitySDK.getStateCapitalCoords());