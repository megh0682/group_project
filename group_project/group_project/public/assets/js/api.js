//Define the parameter for wine.com catalog API
//create wineType JSON Object
var wineTypes = {

	"red": "124",
	"white": "125",
	"sparkling":"123",
	"rose":"126"
};
//create wineStyle JSON Object
var wineStyles = {

	"light&fruity": "610",
	"smooth&supple": "611",
	"earth&spicy":"612",
	"big&bold":"613",
	"fruity&smooth": "615",
	"rich&creamy": "616",
	"light&crisp":"614",
	"sweet":"617"

};
var user_selected_wineTypes = ["red","white"];
var user_selected_wineStyles = ["light&fruity","smooth&supple"];
 
var generateUserPrefParamString = function(){

var paramString = "";

user_selected_wineStyles.forEach(function(item){

	paramString += wineStyles[item];

});

user_selected_wineTypes.forEach(function(item){
 
    paramString += wineTypes[item];

});

console.log(paramString);
return paramString;

};



var getPreferences = function(paramString,offset,size,sort){

var paramString = paramString;
var offset = offset;
var size = size;
var sort = sort;
var apikey = "007fe7ab34275330c97077856e7a5644";

$.ajax({
	url: 'http://services.wine.com/api/beta2/service.svc/json/catalog?filter=categories('+ paramString+')&offset='+offset+'&size='+size+'&sort='+sort+'&apikey='+apikey,
	type: 'GET'	
})
.done(function(response) {
	console.log(response);
})
.fail(function() {
	console.log("error");
})
.always(function() {
	console.log("complete");
});

};



/*

module.exports = {

   wineTypes:wineTypes,
   wineStyles:wineStyles,
   getPreferences:getPreferences,
   generateUserPrefParamString:generateUserPrefParamString,
   user_selected_wineTypes:user_selected_wineTypes,
   user_selected_wineStyles:user_selected_wineStyles

};*/




