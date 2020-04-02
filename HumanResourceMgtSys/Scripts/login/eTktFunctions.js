var expChkAR=new Array("SCRIPT","CREATE","INSERT","SELECT","DELETE","DROP","UPDATE","HAVING");

//var strCitizenLogin = /^([0-9.-]{8,25})$/;
//var strGovtLogin = /^([a-zA-Z0-9]{3,5})$/;
//var strCTZLogin = /^([0-9-]{6,30})$/;

function isBrowserClosed()
{
var browserWindowWidth = 0;
var browserWindowHeight = 0;
// gets the width and height of the browser window
if (parseInt(navigator.appVersion) > 3)
{
if (navigator.appName == "Netscape")
{browserWindowWidth = window.innerWidth;browserWindowHeight = window.innerHeight;}

if (navigator.appName.indexOf("Microsoft") !=- 1)
{browserWindowWidth = top.window.document.body.offsetWidth;browserWindowHeight = top.window.document.body.offsetHeight;
}
}


// checks if the X button was closed

// if event.clientY < 0, then click was on the browser menu area

// if event.screenX > (browserWindowWidth - 25), the X button was clicked

// use screenX if working with multiple frames

return (event.clientY < 0 && event.screenX > (browserWindowWidth - 25)) ? true : false;
}
//---------------------------------------------------------------------------//
function clearMeAR(fieldToClr){fieldToClr.value="";}

function  md5AuthC(seed) {
var userPass = document.getElementById("tbPasswordC").value;
document.getElementById("hidHashC").value=MD5(seed+MD5(userPass));
document.getElementById("tbPasswordC").value = document.getElementById("hidHashC").value;
}

function md5AuthU(seed) {
    //var usrType="C";
    //var usrID=document.getElementById("tbUserID").value;
    var userPass = document.getElementById("tbPswd").value;
    document.getElementById("hidHash").value = MD5(seed + MD5(userPass));
    document.getElementById("tbPswd").value = document.getElementById("hidHash").value;
}


//function validUsrAR(usrType,valChk)
//{
//    var i=0;var usrID=valChk.trim();
//    //1.Blank
//    var strlen=usrID.length;
//    if (strlen==0) {return false;}
//    //1.Reserved Words
//    if (chkResWords(usrID)==false){return false;}
//    
//    if usrType=="C"
//    {if (!usrID.match(strCTZLogin))  {return false;}  }
//    
//    if usrType=="G"
//    { if (!usrID.match(strGovtLogin)) {return false;}   }
//    
//    if (usrType=="I" || usrType=="D")
//    {if (isValidCodeInt(usrID,5,5)==false){ return false;}}
//       
//    return true;
//}
//function chkResWords(strChk)
//{
//   //Reserved word
//	for(i=0;i<expChkAR.length;i++)
//	{
//		var chk=new RegExp(expChkAR[i]);
//		if (strChk.toUpperCase().match(chk))
//		{return false;break;}
//	}
//    return true;
//}
//-----For Codes of Integer type
//function isValidCodeInt(intCheck,intMinLen,intMaxLen)
//{

//if (intCheck.length>intMaxLen)
//{return false;}

////------------------------------------
//if (intCheck.length<intMinLen)
//{return false;}


//if (intCheck=="0")
//{return false;}

////------------------------------------
//validFormatRegExp = /^(\d)?\d*$/;
//return validFormatRegExp.test(intCheck);
//}
//function confirmAction(Mmsg,ctrlToSet)
//{
//  //if (confirm("Are you sure you want to delete the custom search?")==true)
//   if (confirm(Mmsg)==true)
//    {
//    //alert(document.getElementById(ctrlToSet));
//    return false;}
//    
//  else
//    return true;
//}

//var expChkAR=new Array("SCRIPT","CREATE","INSERT","SELECT","DELETE","DROP","UPDATE");
//String.prototype.trim = function() { return this.replace(/^\s+|\s+$/, ''); };

//// JScript File

//function changeIndexBudgetType(field)
//{
////Check  correct date
//if (ValidDate(field,"dd/mm/yyyy")==false){return false;}

//var myRBL0 = document.getElementById("ctl00_ContentPlaceHolder1_rblBudgetType_0");
//var myRBL1 = document.getElementById("ctl00_ContentPlaceHolder1_rblBudgetType_1");
//var myRBL2 = document.getElementById("ctl00_ContentPlaceHolder1_rblBudgetType_2");

//myRBL0.checked=false;
//myRBL1.checked=false;
//myRBL2.checked=false;
//var myAmount=document.getElementById("ctl00_ContentPlaceHolder1_tbAmount");
//myAmount.value="";
//}


//function checkzero(field){var str1=new String();str1=field.value; if(str1.length==0){field.value="0";}}


////===Field Integer Check=======================================
//function validInt(intCheck,intMinLen,intMaxLen,intSign)
//{
//if (intCheck.length>intMaxLen)
//{return false;}
////------------------------------------
//if (intCheck.length<intMinLen)
//{return false;}
////------------------------------------
//validFormatRegExp = /^(\d)?\d*$/;

//if (intSign=="-")
//{
//if ((intCheck=="-1") || validFormatRegExp.test(intCheck)==true)
//{return true;}
//else
//{return false;}

//}
//else
//{
////integer 
//return validFormatRegExp.test(intCheck);
//}
//}




//////For Key Press Event-----------------------
//function numbersonly(e)
//{
//var key;
//var keychar;
//if (window.event)
//   key = window.event.keyCode;
//else if (e)
//   key = e.which;
//else
//   return true;
//keychar = String.fromCharCode(key);

//// control keys
//if ((key==null) || (key==0) || (key==8) || 
//    (key==9) || (key==13) || (key==27) )
//   return true;

//// numbers
//else if ((("0123456789").indexOf(keychar) > -1))
//   return true;
//else
//   return false;
//}





//function ValidDate(obj, format){
//dateBits = DateComponents(obj.value, format);
//if (dateBits == null) return false;

//day = dateBits[0];
//month = dateBits[1];
//year = dateBits[2];

//if ((month < 1 || month > 12) || (day < 1 || day > 31)) { // check month range 
//return false;
//} 
//if ((month==4 || month==6 || month==9 || month==11) && day==31) {
//return false;
//}
//if (month == 2) {
//// check for february 29th 
//var isleap = (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)); 
//if (day>29 || (day==29 && !isleap)) {
//return false;
//}
//} 
//return true;
//}

//function DateComponents(dateStr, format) {
//var results = new Array();
//var datePat = /^(\d{1,2})(\/|-)(\d{1,2})\2(\d{4})$/;
//var matchArray = dateStr.match(datePat);

//if (matchArray == null) return null; 
//// parse date into variables
//if (format.charAt(0)=="d"){ //format=dd/mm 
//results[0] = matchArray[1];
//results[1] = matchArray[3];
//} else { 
//results[1] = matchArray[1];
//results[0] = matchArray[3]; }
//results[2] = matchArray[4];
//return results;
//}



////===========//===========//===========//===========//===========//===========
////Printing Report
////===========//===========//===========//===========//===========//===========
//function printMe()
//{
//show(false,"divPrnt");
//print();
//show(true,"divPrnt");
//}

////For hiding contorls while printing
//// quick browser tests
//var ns4 = (document.layers) ? true : false;
//var ie4 = (document.all && !document.getElementById) ? true : false;
//var ie5 = (document.all && document.getElementById) ? true : false;
//var ns6 = (!document.all && document.getElementById) ? true : false;

//function show(sw,obj) {
//	// show/hide the divisions
//	if (sw && (ie4 || ie5) ){document.all[obj].style.visibility = 'visible';}
//	if (!sw && (ie4 || ie5) ){document.all[obj].style.visibility = 'hidden';}

//	if (sw && ns4){ document.layers[obj].visibility = 'visible';}
//	if (!sw && ns4){ document.layers[obj].visibility = 'hidden';}
//	
//}
////===========//===========//===========//===========//===========//===========


//function validMonth(ctrlMonth)
//{

//if(ctrlMonth.value=="" || ctrlMonth.length==0) {return true;}
//var mon=parseInt(ctrlMonth.value);
//if (mon<=0 || mon>12){alert("Invalid Month");ctrlMonth.focus();return false;}
//return true;
//}


//function validStartYear(ctrlYear)
//{

//var d = new Date();
//var currDate = d.getDate();
//var maxYear = d.getFullYear();
//var minYear="1959";
//var valYear=ctrlYear.value;

//if (valYear<1959 || valYear>maxYear)
//{
//alert("Invalid year, valid range is "+minYear+"-to-"+maxYear);
//ctrlYear.focus();
//return false;
//}

//return true;
//}

//function validStartYearSearch(ctrlYear)
//{
//var valYear=ctrlYear.value;
//if (valYear.length>0)
//{
//    var d = new Date();
//    var currDate = d.getDate();
//    var maxYear = d.getFullYear();
//    var minYear="1959";

//    if (valYear<1959 || valYear>maxYear)
//    {
//    alert("Invalid year, valid range is "+minYear+"-to-"+maxYear);
//    ctrlYear.focus();
//    return false;
//    }
//   }

//return true;
//}

////function for budgetheadselection window

//function getBudgetHeadID() 
//{
//var param1=document.getElementById("ctl00_ContentPlaceHolder1_hfBudgetHeadID");
//var param2=document.getElementById("ctl00_ContentPlaceHolder1_tbAccountHead");
//var param3=document.getElementById("ctl00_ContentPlaceHolder1_tbBudgetCode");
//var param4=document.getElementById("ctl00_ContentPlaceHolder1_tbSOECode");
//var MyArgs = new Array(param1.value,param2.value,param3.value,param4.value);//param2.value,param3.value,param4.value);
//var WinSettings = "center:yes;resizable:no;dialogHeight:520px;dialogwidth=790px;"
//var MyArgs=window.showModalDialog("getBudgetHead.aspx", MyArgs, WinSettings);
//if (MyArgs == null)
//{
//  window.alert("Budget head not selected");
//}
//else
//{
//  param1.value=MyArgs[0].toString();
//  param2.value=MyArgs[1].toString();
//  param3.value=MyArgs[2].toString();
//  param4.value=MyArgs[3].toString();
//}
//}


//function getbudgetClose() 
//{
//var param1=document.getElementById("hfBudgetHeadID").value ;
//var param2=document.getElementById("hfAccountHead").value ;
//var param3=document.getElementById("hfBudgetCode").value ;
//var param4=document.getElementById("hfSOECode").value ;
//if (param1=="" ||  param2=="" ||  param3=="" || param4=="")
//{var MyArgs = null;window.returnValue = MyArgs;}
//else
//{var MyArgs = new Array(param1,param2,param3,param4);window.returnValue = MyArgs;}
//window.close();
//}
//    
//function getbudgetInit()
//{
//var param1 = "";
//var param2 = "";
//var param3 = "";
//var param4 = "";
//var MyArgs = new Array(param1,param3,param3,param4);
//MyArgs =  window.dialogArguments;
//}



///KeyPress
function KeypressDecimalNumbers(e,field)
{
var countdot=0;
var ctrlvalue=document.getElementById(field).value;
var i=0;
var key;
var keychar;
if (window.event)
   key = window.event.keyCode;
else if (e)
   key = e.which;
else
   return true;
  
keychar = String.fromCharCode(key);
// control keys
if ((key==null) || (key==0) || (key==8) || 
    (key==9) || (key==13) || (key==27) )
   return true;

// numbers
else if ((("0123456789").indexOf(keychar) > -1))
     return true;
     else if (keychar==".")
        {
        for(i=0;i<ctrlvalue.length;i++){ if(ctrlvalue.substring(i,i+1)=="."){countdot++; }}
        if (countdot>0){return false;}
        return true;
        }
       else
      return false;
}


////To avoid the entry of invalid charachers
//function KeyPressAlphanumeric(e,field)
//{
//var key;
//var keychar;
//if (window.event)
//   key = window.event.keyCode;
//else if (e)
//   key = e.which;
//else
//   return true;
//keychar = String.fromCharCode(key);
//// control keys
//if ((key==null) || (key==0) || (key==8) || 
//    (key==9) || (key==13) || (key==27) )
//   return true;
//// numbers
//else if ((("0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-").indexOf(keychar) > -1))
//   return true;
//   else
//   return false;
//}

//
function KeyPressForConsumerID(e)
{
var key;
var keychar;
if (window.event)
   key = window.event.keyCode;
else if (e)
   key = e.which;
else
   return true;
keychar = String.fromCharCode(key);
// control keys
if ((key==null) || (key==0) || (key==8) || 
    (key==9) || (key==13) || (key==27) )
   return true;
// numbers
else if ((("0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-/.").indexOf(keychar) > -1))
   return true;
   else
   return false;
}

function KeyPressForName(e)
{
var key;
var keychar;
if (window.event)
   key = window.event.keyCode;
else if (e)
   key = e.which;
else
   return true;
keychar = String.fromCharCode(key);
// control keys
if ((key==null) || (key==0) || (key==8) || 
    (key==9) || (key==13) || (key==27) )
   return true;
// numbers
else if ((("0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ").indexOf(keychar) > -1))
   return true;
   else
   return false;
}

function IsValidConsumerID(field,minlength,maxlength)
{

var errCount=0;
var ctrlvalue=document.getElementById(field).value;
if (ctrlvalue.length>maxlength)
{errCount++;}
if (ctrlvalue.length<minlength)
{errCount++;}

//
//Reserved Words
for(i=0;i<expChkAR.length;i++)
{   var chk=new RegExp(expChkAR[i]);
	if (ctrlvalue.toUpperCase().match(chk))
	{errCount++;break;}
}
 //==========Invalid Charachers 
//var validFormatRegExp = /^['\\@#$%\^*~!+=|:;,./()\-\"{}\[\]?><`]+$/;
//if (validFormatRegExp.test(ctrlvalue)==true)
//{errCount++;}

if (errCount>0){alert("Invalid Value");document.getElementById(field).focus();}
}


function IsValidName(field,minlength,maxlength)
{

var errCount=0;
var ctrlvalue=document.getElementById(field).value;
if (ctrlvalue.length>maxlength)
{errCount++;}
if (ctrlvalue.length<minlength)
{errCount++;}

//
//Reserved Words
for(i=0;i<expChkAR.length;i++)
{   var chk=new RegExp(expChkAR[i]);
	if (ctrlvalue.toUpperCase().match(chk))
	{errCount++;break;}
}
 //==========Invalid Charachers 
//var validFormatRegExp = /^['\\@#$%\^*~!+=|:;,./()\-\"{}\[\]?><`]+$/;
//if (validFormatRegExp.test(ctrlvalue)==true)
//{errCount++;}

if (errCount>0){alert("Invalid Value");document.getElementById(field).focus();}
}

 

//To avoid the entry of invalid charachers
function KeyPressNumbersonly(e)
{
var key;
var keychar;
if (window.event)
   key = window.event.keyCode;
else if (e)
   key = e.which;
else
   return true;
keychar = String.fromCharCode(key);

// control keys
if ((key==null) || (key==0) || (key==8) || 
    (key==9) || (key==13) || (key==27) )
   return true;

// numbers
else if ((("0123456789").indexOf(keychar) > -1))
   return true;
else
   return false;
}


////-----For Codes of Integer type
function isValidInteger(field,intMinLen,intMaxLen)
{
var intCheck=document.getElementById(field).value;

if (intCheck.length>intMaxLen)
{alert("Invalid Value");document.getElementById(field).focus();return false;}

//------------------------------------
if (intCheck.length<intMinLen)
{alert("Invalid Value");document.getElementById(field).focus();return false;}

//if (intCheck=="0")
//{return false;}

//------------------------------------
validFormatRegExp = /^(\d)?\d*$/;
if (validFormatRegExp.test(intCheck)){}
else
{alert("Invalid Value");
document.getElementById(field).focus();
}
}




//function KeyPressNumbersonly(e)
//{
//var key;
//var keychar;
//if (window.event)
//   key = window.event.keyCode;
//else if (e)
//   key = e.which;
//else
//   return true;
//keychar = String.fromCharCode(key);

//// control keys
//if ((key==null) || (key==0) || (key==8) || 
//    (key==9) || (key==13) || (key==27) )
//   return true;

//// numbers
//else if ((("0123456789").indexOf(keychar) > -1))
//   return true;
//else
//   return false;
//}







//////--
function isValidDecimalNumber(field,maxlength,minlength)
{
 var ctrlvalue=document.getElementById(field).value;
if (ctrlvalue.length>maxlength){document.getElementById(field).focus();return false;}
if (ctrlvalue.length<minlength){document.getElementById(field).focus();return false;}

if (ctrlvalue==0)
{return true;}
else
{
    if(( /^\d*\.{0,2}\d+$/.test(ctrlvalue)))
    {}
    else
    {document.getElementById(field).focus();}
}
}
////--
//function IsValidString(strChk,fieldName)
//{
//var errCount=0;
//var errMsg=new String();
//errMsg="Please Check " +fieldName+" for-->>\n";
////Reserved Words
//for(i=0;i<expChk1.length;i++)
//{
//    var chk=new RegExp(expChk1[i]);
//	if (strChk.toUpperCase().match(chk))
//	{errCount++;errMsg=errMsg+errCount+". Use synonym of word "+expChk1[i]+"\n";break;}
//}
// //==========Invalid Charachers 
//var strlen=strChk.length;
//var chkStr=/['\\@#$%^*()~!_+=|:;\"{}[]?><`]/;
//if (strChk.match(chkStr))
//{invalidYN=1;}

// //return false;
//if (errCount>0){alert(errMsg);return false;}
//}
//--
//function isValidAgreementNumber(ctrlvalue,minLength,maxLength)
//{
//if (ctrlvalue.length<minLength){return false;}
//if (ctrlvalue.length>maxLength){return false;}

//return true;
//}
//////--








////16.Functions for Login user id & pswd check




////17. for valid password
//function validPSWDAR(valChk)
//{
//    var i;var expChk=/\s/;
//    var strChk=valChk.trim();
//    //Length Check
//    if (strChk.trim().length>10 || strChk.length<1){return false;}
//    else
//    {
//    //	//Preceeding/following integer check
//    //	if (("0123456789").indexOf(strChk.substr(0,1)) > -1) 
//    //	{return false;}
//    //	
//    //	
//    //	if (("0123456789").indexOf(strChk.substr(strChk.length-1,1)) > -1)
//    //	{return false;}
//    	
//    if (strChk.search(expChk)>-1){return false;}
//    //reserved word
//    if (chkResWords(valChk)==false){return false;}
//    }
//    return true;
//}



//function roundNumber(rnum, rlength) { // Arguments: number to round, number of decimal places
//  var newnumber = Math.round(rnum*Math.pow(10,rlength))/Math.pow(10,rlength);
//  return newnumber;
//  //document.roundform.numberfield.value = newnumber; // Output the result to the form field (change for your purposes)
//}




//function KeyPressExpressionOnly(e)
//{
/////././././././
//var countdot=0;
////var ctrlvalue=document.getElementById(field).value;
//var i=0;

//var key;
//var keychar;
//if (window.event)
//   key = window.event.keyCode;
//else if (e)
//   key = e.which;
//else
//   return true;
//keychar = String.fromCharCode(key);
//// control keys
//if ((key==null) || (key==0) || (key==8) || 
//    (key==9) || (key==13) || (key==27) )
//   return true;
//// numbers
//// numbers
////else if ((("0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ").indexOf(keychar) > -1))
//else if ((("0123456789+-*/(){}[]^%").indexOf(keychar) > -1))
//      return true;
//else 
//      return false;
//}


//function KeyPressNumbersforPhoneNoOnly(e,field)
//{
//var countdot=0;
//var ctrlvalue=document.getElementById(field).value;
//var i=0;

//var key;
//var keychar;
//if (window.event)
//   key = window.event.keyCode;
//else if (e)
//   key = e.which;
//else
//   return true;
//keychar = String.fromCharCode(key);
//// control keys
//if ((key==null) || (key==0) || (key==8) || 
//    (key==9) || (key==13) || (key==27) )
//   return true;
//// numbers
//// numbers
////else if ((("0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ").indexOf(keychar) > -1))
//else if ((("0123456789").indexOf(keychar) > -1))
//     return true;
//     else if (keychar=="-")
//        {
//        for(i=0;i<ctrlvalue.length;i++){ if(ctrlvalue.substring(i,i+1)=="-"){countdot++; }}
//        if (countdot>0){return false;}
//        return true;
//        }
//       else
//      return false;
// }
//      
      //function isValidPhoneNo(str,fieldName)
//{
//var v = new RegExp(); 
//v.compile("/^[0-9]\d{2,4}-\d{6,8}$/");
//if (!v.test(str)) 
//{alert("!! Error !! \n Invalid "+fieldname);return false;}
//}

//function isValidMobileNo(str,fieldName)
//{
//var v = new RegExp(); 
//v.compile("^([8-9]{1})([234789]{1})([0-9]{8})$");
//if (!v.test(str)) {alert("!! Error !! \n Invalid "+fieldname);return false;}
//}



//function KeyPressforLogin(e,field)
//{
////var countH=0;
////var countP=0;
////var countDesh=0;
////var ctrlvalue=document.getElementById(field).value;
////var i=0;

////var key;
////var keychar;
////if (window.event)
////   key = window.event.keyCode;
////   if ((key > 0x60) && (key < 0x7B)){
////   window.event.keyCode = key-0x20;}

////else if (e)
////   key = e.which;
////else
////   return true;
////keychar = String.fromCharCode(key);
////// control keys
////if ((key==null) || (key==0) || (key==8) || 
////    (key==9) || (key==13) || (key==27) )
////   return true;
////else //if ((("0123456789HPhpDd").indexOf(keychar) > -1))
//////     return true;
//////     else if (keychar=="-")
//////        {
//////            for(i=0;i<ctrlvalue.length;i++){ 
//////              if(ctrlvalue.substring(i,i+1)=="-"){countDesh++;}
//////            }
//////            if (countDesh>0){return false;}
//////            return true;
//////        }
//////       else
////           return false;
// }
 
 function chkResWords(strChk)
{
   //Reserved word
	for(i=0;i<expChkAR.length;i++)
	{
		var chk=new RegExp(expChkAR[i]);
		if (strChk.toUpperCase().match(chk))
		{return false;break;}
	}
return true;
}

function KeyPressToUppercase()
{
key = window.event.keyCode;
if ((key > 0x60) && (key < 0x7B))
window.event.keyCode = key-0x20;
}



//function DisableRefershing()
//{ 
//switch (event.keyCode) 
//{ 
//case 116 : // 'F5' 
//event.returnValue = false; 
//event.keyCode = 0;
//window.location.replace("../citizenUnAuth/errPage.aspx.aspx"); 
////window.status = "You can't refresh this page............."; 
//break; 
//} 
//}

function prntDIV(elementId)
{
 var printContent = document.getElementById(elementId);
 var windowUrl = 'about:blank';
 var windowName = 'Print' + new Date().getTime();
 var printWindow = window.open(windowUrl, windowName, 'left=0,top=0,width=0,height=0');

 printWindow.document.write(printContent.innerHTML);
 printWindow.document.close();
 printWindow.focus();
 printWindow.print();
 printWindow.close();

}


function IsValidEmailID(field) 
{
   var valChk=document.getElementById(field).value;
   var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if(reg.test(valChk)){}
    else
     { alert("Invalid Email Address");document.getElementById(field).focus();return false;}
}


function EncriptChangePass(seed) {
if (ValidateFields()==false){return false;}
else
{
 //used while changing the password
var mast="ctl00_ContentPlaceHolder1_";
var pass=document.getElementById(mast+"tbOldPwd").value;
document.getElementById(mast+"hidHashOld").value=MD5(seed+MD5(pass));

  
var pass=document.getElementById(mast+"tbNewPwd").value;
if (pass==""){return false;}
  
document.getElementById(mast+"hidHashNew").value=MD5(pass);
  
  
var pass=document.getElementById(mast+"tbConfirmNewPwd").value;
if (pass==""){return false;}
document.getElementById(mast+"hidHashConfirm").value=MD5(pass);
    
document.getElementById(mast+"tbOldPwd").value="";
document.getElementById(mast+"tbConfirmNewPwd").value="";
document.getElementById(mast+"tbNewPwd").value="";
  return true;
  }
}

function ValidateFields()
{
var mast="ctl00_ContentPlaceHolder1_";

debugger;
var isValid=true;
var errorMsg="";
var space  = " ";
var strNewPwd=document.getElementById(mast+"tbNewPwd").value;
var strConfirmPwd=document.getElementById(mast+"tbConfirmNewPwd").value;

var Lnewpwd=strNewPwd.length;
var Lconfirmpwd=strConfirmPwd.length;
         //password length
        if(!((Lnewpwd >=8 && Lnewpwd <=10 && Lconfirmpwd >=8 && Lconfirmpwd<=10))){   
        errorMsg+="\nPassword length must be minimum 8 charecter and maximum 10 charecter.\n"; 
        }
        //It must not contain a space
        if (strNewPwd.indexOf(space) > -1 && strConfirmPwd.indexOf(space) > -1) {
         errorMsg += "\n Passwords cannot include a space.\n";
         }     
        //It must contain at least one number character
        if (!(strNewPwd.match(/\d/)) && !(strConfirmPwd.match(/\d/))) {
        errorMsg += "\n Password must include at least one number.\n";
        }
        //It must contain at least one special character
        if (!(strNewPwd.match(/\W+/)) && !(strConfirmPwd.match(/[#@%!]/))) {
        errorMsg += "\n Password must include at least one special character - #,@,%,!\n";
         }  
             
        if (IsValidString(strConfirmPwd)==false )               
        {errorMsg+="\n Invalid special characters or reserved words like SCRIPT,CREATE,INSERT,SELECT,DELETE,DROP,UPDATE,HAVING\n"}
         //new password and confirm new password must be same     
        if (strNewPwd!=strConfirmPwd)
        {errorMsg += "\n new password and confirm new password must be same \n";
        }
        if (errorMsg != ""){
          msg = "______________________________________________________\n\n";
          msg += "Please correct the problem(s).\n";
          msg += "______________________________________________________\n";
          alert(msg + errorMsg + "\n\n");  
          document.getElementById(mast+"tbNewPwd").focus();      
          return false;
        }
     else
     {
     
     return true;
     }
  }
     

function KeyPressPasswordCharsOnly(e)
{
var key;
var keychar;
if (window.event)
   key = window.event.keyCode;
else if (e)
   key = e.which;
else
   return true;
keychar = String.fromCharCode(key);

// control keys
if ((key==null) || (key==0) || (key==8) || 
    (key==9) || (key==13) || (key==27) )
   return true;

// numbers
else if ((("0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ#@%!").indexOf(keychar) > -1))
   return true;
else
   return false;
}




function IsValidString(strChk)
{
var errCount=0;
var errMsg=new String();
errMsg="Please Check for-->>\n";
//Reserved Words
for(i=0;i<expChkAR.length;i++)
{
    var chk=new RegExp(expChkAR[i]);
	if (strChk.toUpperCase().match(chk))
	{errCount++;errMsg=errMsg+errCount+". Use synonym of word "+expChkAR[i]+"\n";break;}
}
 //==========Invalid Charachers 
var iChars = "$^&*()+=-[]\';,./{}|\":<>?";   
for (var i = 0; i < strChk.length; i++)
{   
if (iChars.indexOf(strChk.charAt(i)) != -1)    
{errCount++;}}
 //return false;
if (errCount>0){return false;}
}