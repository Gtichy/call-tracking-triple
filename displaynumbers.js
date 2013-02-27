//Updated: Feb, 27 2013
//BY: Garrett Tichy

//google ORGANIC phone number
var gorganicnum = '';
var gorganicnum2 = '';
var gorganicnum3 = '';

//yahoo ORGANIC phone number
var yorganicnum = '';
var yorganicnum2 = '';
var yorganicnum3 = '';

//bing ORGANIC phone number
var borganicnum = '';
var borganicnum2 = '';
var borganicnum3 = '';

//google PPC phone number
var gppcnum = '';
var gppcnum2 = '';
var gppcnum3 = '';

//yahoo PPC phone number
var yppcnum = '';
var yppcnum2 = '';
var yppcnum3 = '';

//bing PPC phone number
var bppcnum = '';
var bppcnum2 = '';
var bppcnum3 = '';

//your 'default' tracking phone number OR REAL if n/a
var defaultNum = '';
var defaultNum2 = '';
var defaultNum3 = '';

//list of your 'branded' search terms separated by commas only
var brandedTerms = 'dontdeletekeyword';

//name of the class containing your phone number in your HTML
var phoneClassName = 'tele';
var phoneClassName2 = 'tele2';
var phoneClassName3 = 'tele3';


//variables to deal with our CSS background header image
var idToChangeClass = 'wrapper-a';
var gBGurl = '../images/wrapper_0210.jpg';
var yBGurl = '../images/wrapper_0186.jpg';
var bBGurl = '../images/wrapper_0743.jpg';


//create an array out of the branded terms list
var brandedTermsArray = brandedTerms.split(',');

function _uGC(l,n,s) {
 if (!l || l==="" || !n || n==="" || !s || s==="") return "-";
 var i,i2,i3,c="-";
 i=l.indexOf(n);
 i3=n.indexOf("=")+1;
 if (i > -1) {
  i2=l.indexOf(s,i); if (i2 < 0) { i2=l.length; }
  c=l.substring((i+i3),i2);
 }
 return c;
}

// 
// Get the __utmz cookie value. This is the cookies that 
// stores all campaign information. 
// 
var z = _uGC(document.cookie, '__utmz=', ';'); 
// 
// The cookie has a number of name-value pairs. 
// Each identifies an aspect of the campaign. 
// 
// utmcsr  = campaign source 
// utmcmd  = campaign medium 
// utmctr  = campaign term (keyword) 
// utmcct  = campaign content  
// utmccn  = campaign name 
// utmgclid = unique identifier used when AdWords auto tagging is enabled 
// 
// This is very basic code. It separates the campaign-tracking cookie 
// and populates a variable with each piece of campaign info. 
// 
var source  = _uGC(z, 'utmcsr=', '|'); 
var medium  = _uGC(z, 'utmcmd=', '|'); 
var term    = _uGC(z, 'utmctr=', '|'); 
var content = _uGC(z, 'utmcct=', '|'); 
var campaign = _uGC(z, 'utmccn=', '|'); 
var gclid   = _uGC(z, 'utmgclid=', '|'); 
// 
// The gclid is ONLY present when auto tagging has been enabled. 
// All other variables, except the term variable, will be '(not set)'. 
// Because the gclid is only present for Google AdWords we can 
// populate some other variables that would normally 
// be left blank. 
// 
if (gclid !="-") { 
      source = 'google'; 
      medium = 'cpc'; 
} 
// Data from the custom segmentation cookie can also be passed 
// back to your server via a hidden form field 
var csegment = _uGC(document.cookie, '__utmv=', ';'); 
if (csegment != '-') { 
      var csegmentex = /[1-9]*?\.(.*)/;
      csegment    = csegment.match(csegmentex); 
      csegment    = csegment[1]; 
} else { 
      csegment = '(not set)'; 
} 

//
// One more bonus piece of information.  
// We're going to extract the number of visits that the visitor
// has generated.  It's also stored in a cookie, the __utma cookis
// 
var a = _uGC(document.cookie, '__utma=', ';');
var aParts = a.split(".");
var nVisits = aParts[5];


function isNotBrandedTerm(){

	for (i=0;i<brandedTermsArray.length;i++)
	{
		if (term.toLowerCase().indexOf(brandedTermsArray[i]) != -1){ // Made case insensitive
		//if(term == brandedTermsArray[i]){
			return false;
		}
	} 
	
	return true;
}

function formatPhoneNumber(numIn){

	//need functionality that formats the number according to selected pattern;
	
	return numIn;

}

//return the proper phone number based on the rules
function getPhoneNumber(){
	
	if(source == 'google' && (medium == "organic" || medium =="localpack")){
		return gorganicnum;
	} else if(source == 'yahoo' && medium == "organic"){
		return yorganicnum;
	} else if(source == 'bing' && medium == "organic"){
		return borganicnum;
	} else if(source == 'google' && medium == "cpc"){
		return gppcnum;
	} else if(source == 'yahoo' && medium == "cpc"){
		return yppcnum;
	} else if(source == 'bing' && medium == "cpc"){
		return bppcnum;
	} else {
		return defaultNum;
	}

}
function getPhoneNumber2(){
	
	if(source == 'google' && (medium == "organic" || medium =="localpack")){
		return gorganicnum2;
	} else if(source == 'yahoo' && medium == "organic"){
		return yorganicnum2;
	} else if(source == 'bing' && medium == "organic"){
		return borganicnum2;
	} else if(source == 'google' && medium == "cpc"){
		return gppcnum2;
	} else if(source == 'yahoo' && medium == "cpc"){
		return yppcnum2;
	} else if(source == 'bing' && medium == "cpc"){
		return bppcnum2;
	} else {
		return defaultNum2;
	}

}
function getPhoneNumber3(){
	
	if(source == 'google' && (medium == "organic" || medium =="localpack")){
		return gorganicnum3;
	} else if(source == 'yahoo' && medium == "organic"){
		return yorganicnum3;
	} else if(source == 'bing' && medium == "organic"){
		return borganicnum3;
	} else if(source == 'google' && medium == "cpc"){
		return gppcnum3;
	} else if(source == 'yahoo' && medium == "cpc"){
		return yppcnum3;
	} else if(source == 'bing' && medium == "cpc"){
		return bppcnum3;
	} else {
		return defaultNum3;
	}

}


function displayTextNumber(){
	
	if(isNotBrandedTerm()){
		var NumberSpans = document.getElementsByTagName('span');
		for(var i=0; i < NumberSpans.length; i++) {
				if(NumberSpans[i].className=== phoneClassName) {
						NumberSpans[i].innerHTML=getPhoneNumber();
				}
		} //CLOSE FOR
		for(var i=0; i < NumberSpans.length; i++) {
				if(NumberSpans[i].className=== phoneClassName2) {
						NumberSpans[i].innerHTML=getPhoneNumber2();
				}
		} //CLOSE FOR
		for(var i=0; i < NumberSpans.length; i++) {
				if(NumberSpans[i].className=== phoneClassName3) {
						NumberSpans[i].innerHTML=getPhoneNumber3();
				}
		} //CLOSE FOR

	}//close isNotBrandedTerm

	}//CLOSE FUNCTION
	
	
function replaceBGImage(){
	if(isNotBrandedTerm()){
		if(getPhoneNumber() == gorganicnum){
			document.getElementById(idToChangeClass).style.backgroundImage = 'url('+ gBGurl +')';
		} else if(getPhoneNumber() ==yorganicnum){
			document.getElementById(idToChangeClass).style.backgroundImage = 'url('+ yBGurl +')';
		} else if(getPhoneNumber() == borganicnum){
			document.getElementById(idToChangeClass).style.backgroundImage = 'url('+ bBGurl +')';
		}
		//SECOND NUMBER RUNNING
		if(getPhoneNumber2() == gorganicnum2){
			document.getElementById(idToChangeClass).style.backgroundImage = 'url('+ gBGurl +')';
		} else if(getPhoneNumber2() ==yorganicnum2){
			document.getElementById(idToChangeClass).style.backgroundImage = 'url('+ yBGurl +')';
		} else if(getPhoneNumber2() == borganicnum2){
			document.getElementById(idToChangeClass).style.backgroundImage = 'url('+ bBGurl +')';
		}
		//SECOND NUMBER RUNNING
		if(getPhoneNumber3() == gorganicnum3){
			document.getElementById(idToChangeClass).style.backgroundImage = 'url('+ gBGurl +')';
		} else if(getPhoneNumber3() ==yorganicnum3){
			document.getElementById(idToChangeClass).style.backgroundImage = 'url('+ yBGurl +')';
		} else if(getPhoneNumber3() == borganicnum3){
			document.getElementById(idToChangeClass).style.backgroundImage = 'url('+ bBGurl +')';
		}

	}//close isNotBrandedTerm
}