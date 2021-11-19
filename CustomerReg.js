"use strict";
var $ = function(id) { return document.getElementById(id); };

var saveReservation=function(){
	sessionStorage.arrivalDate=$("arrival_date").value;
	sessionStorage.nights=$("nights").value;
	sessionStorage.adults=$("adults").value;
	sessionStorage.children=$("children").value;
	if($("business").checked){
		sessionStorage.roomType=$("business").value;
	}
	else if($("standard").checked)
	{
		sessionStorage.roomType=$("standard").value;
	}
	if($("suite").checked){
	sessionStorage.roomType=$("suite").value;
	}
	if($("double").checked){
	sessionStorage.bedType=$("double").value;
	}
		if($("smoking").checked){
	sessionStorage.smoking="yes";
	}
	else{
		sessionStorage.smoking="no";
	}
	sessionStorage.name=$("name").value;
	sessionStorage.email=$("email").value;
	sessionStorage.phone=$("phone").value;
	
	
	
	$("reservation_form").submit();
}
window.onload = function() {
    $("submit_request").onclick = saveReservation;
    $("arrival_date").focus();
};