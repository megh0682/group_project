$(document).ready(function() {
	//
var user = {

	"name" : "",
	"gender" : "",
	"email"  : "",
	"wineTypes" : [],
	"wineStyles" : [],
	"varietals" : [],
	"favoriteWines" : [],
	"favoriteBuddies":[],
	"blockedBuddies":[],

	init:function(name,gender,email){
     
    this.name = name,
    this.gender = gender,
    this.email = email
     
	},

	addFavoriteWines:function(favoriteWines){
     
     this.favoriteWines = favoriteWines.slice();

	},

    addWineTypes:function(wineTypes){
      
      this.wineTypes = wineTypes.slice();

	},

    addWineStyles:function(wineStyles){

    this.wineStyles= wineStyles.slice();

	},

    addVarietals:function(varietals){

    this.varietals = varietals.slice();

	},

    addBuddy:function(otheruser){

    this.favoriteBuddies.push(otheruser);

	},

	removeBuddy : function(otheruser){

    let len =  this.favoriteBuddies.length;
    for(let i =0;i<len;i++){
    	if(this.favoriteBuddies[i].email === otheruser.email){

    		this.favoriteBuddies.splice(i,1);
    	}
    }
        
    },

	removeWineStyle :function(winestyle){

    let len =  this.wineStyles.length;
    for(let i =0;i<len;i++){
    	if(this.wineStyles[i] === winestyle){

    		this.wineStyles.splice(i,1);
    	}
    }

	},

	removeWineType :function(winetype){

    let len =  this.wineTypes.length;
    for(let i =0;i<len;i++){
    	if(this.wineTypes[i] === winetype){

    		this.wineTypes.splice(i,1);
    	}
    }

	}

	
};

//var paramString = api.generateUserPrefParamString();
//api.getPreferences(paramString,0,100,"rating");


	
});