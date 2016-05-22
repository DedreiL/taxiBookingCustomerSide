function validateForm()

 {	
    var fName = document.forms["mainForm"]["firstName"].value;
	var lName = document.forms["mainForm"]["lastName"].value;
	var mNumber = document.forms["mainForm"]["mobileNumber"].value;
	var unitNum = document.forms["mainForm"]["unitNumber"].value;
	var strNum = document.forms["mainForm"]["streetNumber"].value;
	var strName = document.forms["mainForm"]["streetName"].value;
	var pUSub = document.forms["mainForm"]["pickUpSuburb"].value;
	var destSub = document.forms["mainForm"]["destSuburb"].value;
	var date = document.forms["mainForm"]["date"].value;
	var time = document.forms["mainForm"]["time"].value;
	//	var pNumber = document.forms["mainForm"]["phoneNumber"].value;
	
	var datePattern = /^\d{2}\/\d{2}\/\d{2}$/;
	var namesPattern = /^[a-zA-Z_ -]*$/;
	
	if(fName == "" || lName == "" || mNumber == "" || strNum == "" || strName == "" || pUSub == "" || destSub == "" || date == "" || time == "")
	{
		alert("Please ensure that you have filled out all required fields");
		return false;
	}
	else if(!fName.match(namesPattern) || !lName.match(namesPattern) || !strName.match(namesPattern) || !pUSub.match(namesPattern) || !destSub.match(namesPattern))
	{
		alert("Please ensure that names include no digits or special characters");
		return false;
	}
	else if(isNaN(mNumber) || isNaN(strNum))
	{
		alert("Please ensure that numbers are correctly filled out");
		return false;
	}
	else if(!date.match(datePattern))
	{
		alert("Please enter a valid date in the yy/mm/dd format");
		return false
	}
    else
    {
		return true;
    }                
 }
 

 function createRequest() {
    var xhr = false;  
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    }
    else if (window.ActiveXObject) {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
    return xhr;
} 
 
// getUserData

function getData(dataSource, divID, aName, lastName, mNumber, uNumber, strNumber, strName, suburb, destSub, aDate, aTime)  {
	if(validateForm())
	{
		var xhr = createRequest();
    if(xhr) {
	    var place = document.getElementById(divID);
	    var url = dataSource+"?name="+aName+"&lName="+lastName+"&mNum="+mNumber+"&uNum="+uNumber+"&sNum="+strNumber+"&sName="+strName+"&sub="+suburb+"&dSub="+destSub+"&date="+aDate+"&time="+aTime;
	    xhr.open("GET", url, true);
	    xhr.onreadystatechange = function() {
			if (xhr.readyState == 4 && xhr.status == 200) {
			place.innerHTML = xhr.responseText;
		    } 
	    } 
	    xhr.send(null);
	}
	}	
} 
