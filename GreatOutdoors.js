$(document).ready(function(){
//hover replace pic 
	$("#01").hover(function(){ //on over #1
			$("#imgBig").attr("src", "images/mountain3.jpg"); //swap #7 with #1
	}, 
	function(){ //on out
		$("#imgBig").attr("src", "images/mountain2.jpg"); // revert
	});

	$("#02").hover(function(){ //on over #2
		$("#imgBig").attr("src", "images/waterfall2.jpg"); //swap #7 with #2
	}, 
	function(){ //on out #4
		$("#imgBig").attr("src", "images/mountain2.jpg"); //revert
	});
	
	$("#03").hover(function(){ //on over #3
		$("#imgBig").attr("src", "images/Desert.jpg"); //swap #7 with #3
	}, 
	function(){ //on out
		$("#imgBig").attr("src", "images/mountain2.jpg"); //revert
	});
	
	$("#04").hover(function(){ //on over #4
			$("#imgBig").attr("src", "images/mountain.jpg"); //swap #7 with #4
	}, 
	function(){ //on out
		$("#imgBig").attr("src", "images/mountain2.jpg"); // revert
	});

	$("#05").hover(function(){ //on over #5
		$("#imgBig").attr("src", "images/waterfall.jpg"); //swap #7 with #5
	}, 
	function(){ //on out
		$("#imgBig").attr("src", "images/mountain2.jpg"); //revert
	}); 
	
	$("#06").hover(function(){ //on over #6
		$("#imgBig").attr("src", "images/grandfatherMountain.jpg"); //swap #7 with #6
	}, 
	function(){ //on out
		$("#imgBig").attr("src", "images/mountain2.jpg"); //revert
	});

}); //end ready


//onclick
function clickFunction(){
		document.getElementById('click').style.color ='red';
	}

//onload
function load(){
	alert('Images are loaded');
}

//enlarge image in the home page
function bigImg(x) {
    x.style.height = "200px";
    x.style.width = "250px";
}

function normalImg(x) {
    x.style.height = "100px";
    x.style.width = "150px";
}

//cookies maybe???

/* var today = new Date();
var expiry = new Date(today.getTime() + 30 * 24 * 3600 * 1000); //set exp time

function setCookie(name, value)
{
	var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
	document.cookie = name + "=" + value + ";" + expires + ";path=/";
	alert(document.cookie);
}
function makeCookie()
                //this should set the email cookie to the proper value;
{
   setCookie("email", $("#email").val(),365);
   alert("Alert Inside"+$("#email").val());
   return true;
} */

//cookies take 2
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    var user = getCookie("username");
    if (user != "") {
        alert("Welcome again " + user);
    } else {
        user = prompt("Please enter your name:", "");
        if (user != "" && user != null) {
            setCookie("username", user, 365);
        }
    }
}