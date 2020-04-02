function attachValidation() {
    $("span[formatcurrency]").each(function () {
        var formatCurrency = $(this).attr("formatcurrency");
        if (typeof formatCurrency != "undefined") {
            var values = $(this).html();
            var formatCurrency1 = formatCurrency.split(',');
            if (formatCurrency1.length > 1) {
                 $(this).html(values.formatMoney(formatCurrency1[0], formatCurrency1[1], ',', '.'));
            }
        }
    });


    $("input[type=text]").each(function () {
        var formatCurrency = $(this).attr("formatcurrency");
        if (typeof formatCurrency != "undefined") {
            var values = this.value;
            var formatCurrency1 = formatCurrency.split(',');
            if (formatCurrency1.length > 1) {
                this.value = values.formatMoney(formatCurrency1[0], formatCurrency1[1], ',', '.');
            }
        }

        var access = $(this).attr("accesskey")
        if (access == 'a') {
            var currentClass = $(this).attr("class")
            // this.setAttribute("onfocus", "txtBoxFocus(this,'" + currentClass + "','" + currentClass + "')")
            this.setAttribute("onblur", "txtBoxFocus(this,'" + currentClass + "','" + currentClass + "ValidBreak')")
        }

        if ($(this).attr("validat") == "email") {
            var currentClass = $(this).attr("class");
            //    this.setAttribute("onfocus", "txtBoxFocus(this,'" + currentClass + "','" + currentClass + "')")
            this.setAttribute("onblur", "txtBoxFocus(this,'" + currentClass + "','" + currentClass + "ValidBreak')")
        }
        if ($(this).attr("validat") == "url") {
            var currentClass = $(this).attr("class");
            //    this.setAttribute("onfocus", "txtBoxFocus(this,'" + currentClass + "','" + currentClass + "')")
            this.setAttribute("onblur", "txtBoxFocus(this,'" + currentClass + "','" + currentClass + "ValidBreak')")
        }
    });
    $("textarea").each(function() {
        var access = $(this).attr("accesskey")
        if (access == 'a') {
            var currentClass = $(this).attr("class")
           // this.setAttribute("onfocus", "txtBoxFocus(this,'" + currentClass + "','" + currentClass + "')")
            this.setAttribute("onblur", "txtBoxFocus(this,'" + currentClass + "','" + currentClass + "ValidBreak')")
        }
    });
    $("input[type=password]").each(function() {
        var access = $(this).attr("accesskey")
        if (access == 'a') {
            var currentClass = $(this).attr("class")
          //  this.setAttribute("onfocus", "txtBoxFocus(this,'" + currentClass + "','" + currentClass + "')")
            this.setAttribute("onblur", "txtBoxFocus(this,'" + currentClass + "','" + currentClass + "ValidBreak')")
        }
    });
}
 



// this is to validate email address
function validateEmailFormat(val) {
    if (val.length > 0) {
        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if (reg.test(val) == false) {
            return false;
        }
        else
            return true;
    }
    else { return true; }
}
// this is to validate email address
function validateURLFormat(val) {
    if (val.length > 0) {
        var reg = /(http(s)?:\\)?([\w-]+\.)+[\w-]+[.com|.in|.org]+(\[\?%&=]*)?/;
        if (reg.test(val) == false) {
            return false;
        }
        else
            return true;
    }
    else { return true; }
}


function changePwd(id1, id2) {
    var browser = navigator.userAgent.toLowerCase()
    if (browser.indexOf("msie") > -1) {
        browser = "ie"
    }
    else {
        browser = "other"
    }
    var check = true;
    check = checkTextBoxes();
    if (!check)
        return false;
    if (document.getElementById(id1).value != document.getElementById(id2).value) {
        if (browser == "other") {
            document.getElementById(id2).setAttribute("class", "txtValidation")
        }
        else {
            document.getElementById(id2).setAttribute("className", "txtValidation")
        }
        
        check = false;
    }
    return check;
}


function txtBoxFocus(ids, cssclass1, cssclass2) {
    var browser = navigator.userAgent.toLowerCase()
    if (browser.indexOf("msie") > -1) {
        browser = "ie"
    }
    else {
        browser = "other"
    }
    document.getElementById(ids.id).setAttribute("class", cssclass1)
    var data = document.getElementById(ids.id).value;
    if (data == "") {
        if (browser == "other") {
            document.getElementById(ids.id).setAttribute("class", cssclass2)
        }
        else {
            //document.getElementById(ids.id).setAttribute("className", cssclass2)
            document.getElementById(ids.id).className = cssclass2;
        }
    }
 
    if ($(ids).attr("validat") == "email") {
      //  document.getElementById(ids.id).setAttribute("class", cssclass1)
        var email = document.getElementById(ids.id).value;
        if (!validateEmailFormat(email)) {
            if (browser == "other") {
                document.getElementById(ids.id).setAttribute("class", cssclass2)
            }
            else {
                //document.getElementById(ids.id).setAttribute("className", cssclass2)
                document.getElementById(ids.id).className = cssclass2;
            }
            if ($("#" + ids.id).parent().children(".emailNotValid").length == 0) {
                $("#" + ids.id).parent().append(" <div style='margin-top:-50px;' class='emailNotValid tooltip fade top in'>"
                                                       + "<div class='tooltip-arrow'></div>"
                                                      + "<div class='tooltip-inner'>Email not in valid format.</div>"
                                                       + "  </div>" );
            }
            else {
                if ($("#" + ids.id).parent().children(".in").length == 0) {
                    $("#" + ids.id).parent().children(".emailNotValid").addClass("in");
                }
            }
        }
        else {
            if ($("#" + ids.id).parent().children(".emailNotValid").length >= 1) {
                $("#" + ids.id).parent().children(".emailNotValid").removeClass("in");
            }
        }
    }

     if ($(ids).attr("validat") == "url") {
        //  document.getElementById(ids.id).setAttribute("class", cssclass1)
        var email = document.getElementById(ids.id).value;
        if (!validateURLFormat(email)) {
            if (browser == "other") {
                document.getElementById(ids.id).setAttribute("class", cssclass2)
            }
            else {
                //document.getElementById(ids.id).setAttribute("className", cssclass2)
                document.getElementById(ids.id).className = cssclass2;
            }
            if ($("#" + ids.id).parent().children(".emailNotValid").length == 0) {
                $("#" + ids.id).parent().append(" <div style='margin-top:-50px;' class='emailNotValid tooltip fade top in'>"
                                                       + "<div class='tooltip-arrow'></div>"
                                                      + "<div class='tooltip-inner'>URL not in valid format.</div>"
                                                       + "  </div>");
            }
            else {
                if ($("#" + ids.id).parent().children(".in").length == 0) {
                    $("#" + ids.id).parent().children(".emailNotValid").addClass("in");
                }
            }
        }
        else {
            if ($("#" + ids.id).parent().children(".emailNotValid").length >= 1) {
                $("#" + ids.id).parent().children(".emailNotValid").removeClass("in");
            }
        }
    }
}


function ddlFocus(ids, cssclass1, cssclass2) {
    var browser = navigator.userAgent.toLowerCase()
    if (browser.indexOf("msie") > -1) {
        browser = "ie"
    }
    else {
        browser = "other"
    }
    document.getElementById(ids.id).setAttribute("class", cssclass1)
    var val = getDDLSelectedText(ids.id)
    if (val == "--Select--") {
        if (browser == "other") {
            document.getElementById(ids.id).setAttribute("class", cssclass2)
        }
        else {
            document.getElementById(ids.id).className = cssclass2;
        }
    }
}

function validateTextBoxes(containerId) {
    var isFocused = false;
    var browser = navigator.userAgent.toLowerCase()
    if (browser.indexOf("msie") > -1) {
        browser = "ie"
    }
    else {
        browser = "other"
    }
    var check = true;
    $("#" + containerId + " [matchwith]").each(function () {
        var parentId = $(this).attr("matchwith");
        var parentValue = getControlValue(parentId);
        var thisValue = getControlValue(this.id);
        if (thisValue != parentValue) {
            check = false; 
              var currentClass = $(this).attr("class")
                currentClass = currentClass.replace("ValidBreak", "");
            if (browser == "other") {
            this.setAttribute("class", currentClass + "ValidBreak")
            }
            else {
                document.getElementById(this.id).className = currentClass + "ValidBreak";
            }
        }
    })

    $("#" + containerId + "  select[accesskey]").each(function () {
        
        if (this.value == "" || this.value == "0" || this.value == "-1") {
            var access = $(this).attr("accesskey")

            if (access == 'a') {
                var currentClass = $(this).attr("class")
                currentClass = currentClass.replace("ValidBreak", "");
                if (browser == "other") {
                    this.setAttribute("class", currentClass + " ValidBreak")
                }
                else {
                    // this.setAttribute("className", currentClass + "ValidBreak");
                    document.getElementById(this.id).className = currentClass + " ValidBreak";
                }
                check = false;
                if (!isFocused) {
                    document.getElementById(this.id).focus();
                }
                isFocused = true;
            }
        }
    });


    $("#" + containerId + "  input[type=text], #" + containerId + " input[disabled!='disabled']").each(function () {
        if (this.value == "") {
            var access = $(this).attr("accesskey")
            if (access == 'a') {
                var currentClass = $(this).attr("class")
                currentClass = currentClass.replace("ValidBreak", "");
                if (browser == "other") {
                    this.setAttribute("class", currentClass + " ValidBreak")
                }
                else {
                    // this.setAttribute("className", currentClass + "ValidBreak");
                    document.getElementById(this.id).className = currentClass + " ValidBreak";
                }
                check = false;
                if (!isFocused) {
                    document.getElementById(this.id).focus();
                }
                isFocused = true;
            }
        }

        if ($(this).attr("validat") == "email") {
            //  document.getElementById(ids.id).setAttribute("class", cssclass1)
            var email = this.value;
            if (!validateEmailFormat(email)) {
                var currentClass = $(this).attr("class")
                cssclass2 = currentClass.replace("ValidBreak", "");
                cssclass2 = cssclass2 + " ValidBreak";
                if (browser == "other") {
                    document.getElementById(this.id).setAttribute("class", cssclass2)
                }
                else {
                    //document.getElementById(this.id).setAttribute("className", cssclass2)
                    document.getElementById(this.id).className = cssclass2;
                }
                if ($("#" + this.id).parent().children(".emailNotValid").length == 0) {
                    $("#" + this.id).parent().append(" <div style='margin-top:-50px;' class='emailNotValid tooltip fade top in'>"
                                                       + "<div class='tooltip-arrow'></div>"
                                                      + "<div class='tooltip-inner'>Email not in valid format.</div>"
                                                       + "  </div>");
                }
                else {
                    if ($("#" + this.id).parent().children(".in").length == 0) {
                        $("#" + this.id).parent().children(".emailNotValid").addClass("in");
                    }
                }
                check = false;
                if (!isFocused) {
                    document.getElementById(this.id).focus();
                }
                isFocused = true;
            }
            else {
                if ($("#" + this.id).parent().children(".emailNotValid").length >= 1) {
                    $("#" + this.id).parent().children(".emailNotValid").removeClass("in");
                }
            }
        }



        if ($(this).attr("validat") == "url") {
            //  document.getElementById(ids.id).setAttribute("class", cssclass1)
            var email = this.value;
            if (!validateURLFormat(email)) {
                var currentClass = $(this).attr("class")
                cssclass2 = currentClass.replace("ValidBreak", "");
                cssclass2 = cssclass2 + " ValidBreak";
                if (browser == "other") {
                    document.getElementById(this.id).setAttribute("class", cssclass2)
                }
                else {
                    //document.getElementById(this.id).setAttribute("className", cssclass2)
                    document.getElementById(this.id).className = cssclass2;
                }
                if ($("#" + this.id).parent().children(".emailNotValid").length == 0) {
                    $("#" + this.id).parent().append(" <div style='margin-top:-50px;' class='emailNotValid tooltip fade top in'>"
                                                       + "<div class='tooltip-arrow'></div>"
                                                      + "<div class='tooltip-inner'>URL not in valid format.</div>"
                                                       + "  </div>");
                }
                else {
                    if ($("#" + this.id).parent().children(".in").length == 0) {
                        $("#" + this.id).parent().children(".emailNotValid").addClass("in");
                    }
                }
                check = false;
                if (!isFocused) {
                    document.getElementById(this.id).focus();
                }
                isFocused = true;
            }
            else {
                if ($("#" + this.id).parent().children(".emailNotValid").length >= 1) {
                    $("#" + this.id).parent().children(".emailNotValid").removeClass("in");
                }
            }
        } 
    });
    $("#" + containerId + "  input[type=password]").each(function() {
        if (this.value == "") {
            var access = $(this).attr("accesskey")

            if (access == 'a') {
                var currentClass = $(this).attr("class")
                currentClass = currentClass.replace("ValidBreak", "");
                if (browser == "other") {
                    this.setAttribute("class", currentClass + " ValidBreak")
                }
                else {
                    // this.setAttribute("className", currentClass + "ValidBreak");
                    document.getElementById(this.id).className = currentClass + " ValidBreak";
                }
                check = false;
                if (!isFocused) {
                    document.getElementById(this.id).focus();
                }
                isFocused = true;
            }
        }
    });
    
    $("#" + containerId + "  textarea").each(function() {
        if (this.value == "") {
            var access = $(this).attr("accesskey")

            if (access == 'a') {
                var currentClass = $(this).attr("class")
                currentClass = currentClass.replace("ValidBreak", "");
                if (browser == "other") {
                    this.setAttribute("class", currentClass + " ValidBreak")
                }
                else {
                    // this.setAttribute("className", currentClass + "ValidBreak");
                    document.getElementById(this.id).className = currentClass + " ValidBreak";
                }
                check = false;
                if (!isFocused) {
                    document.getElementById(this.id).focus();
                }
                isFocused = true;
            }
        }
    });
    if (check) {
       
    }
    return check;
}

// This is to reset all textBoxes
function resetTextBoxes() {
    $("input[type=text]").each(function() {
        this.value = "";
    });
    $("textarea").each(function() {
        this.value = "";
    });
}
//this functions allows to type numbers only   onkeypress="return numbersonly(event)"
function numbersonly(e) {
    var unicode = e.charCode ? e.charCode : e.keyCode
    if (unicode != 8) { //if the key isn't the backspace key (which we should allow)
        if (unicode < 48 || unicode > 57 ) //if not a number
            return false //disable key press
    }
}


//this functions allows to type numbers only onkeypress="return alphaNumeric(event)"
//function alphaNumericonly(e) {
//    var unicode = e.charCode ? e.charCode : e.keyCode
//    if (unicode != 8) { //if the key isn't the backspace key (which we should allow)
//        if (unicode < 48 || unicode > 122) {
//            if (unicode > 57 || unicode < 65)
//                return false
//            if (unicode > 90 || unicode < 97)
//                return false
//        }else 
//        return false
//        //if (unicode < 48 || unicode > 57 || unicode > 90 || unicode < 65 || unicode > 122 || unicode < 97) //if not a number
//          //   return false //disable key press
//    }
//}

//this functions allows to type price only with one decimal  onkeypress= "return priceonly(event,this)"
function priceonly(e, thiss) {
     var unicode = e.charCode ? e.charCode : e.keyCode
    if (unicode != 8) { //if the key isn't the backspace key (which we should allow)
        if (unicode == 46) {
            var val = $(thiss).val();
            var decimalCount = (val.split(".").length - 1)
            if (decimalCount >= 1)
                return false
            else {
                return true
            }
        }
        else if (unicode < 48 || unicode > 57) //if not a number
            return false //disable key press
        else {
            var price = $(thiss).val();
            price = price.formatMoney('', 2, '', '.');
            if (!(/^\d*(?:\.\d{0,2})?$/.test(price))) {
                return false;
            }
            else
                return true;
        }
    }
}


function disableAll(containerId) {
    $("#" + containerId + " input").each(function() {
            this.setAttribute("disabled", "disabled")
    });
}

function enableAll(containerId) {
    $("#" + containerId + " input").each(function() {
        this.removeAttribute("disabled")
    });
}

//Usage : src.toBoolean()
String.prototype.toBoolean = function () {
    var vals = this.toString().toLowerCase();
    if (vals == "false" || vals == "" || vals=="0") {
        return false;
    }
    else {
        return true;
    }
}

//Usage : src.toFloat()
String.prototype.toFloat = function () {
    return parseFloat(this.toString().replace("$", "").replaceAll(",", ""));
}
 

//Usage : src.replaceAll('value coes here','new value')
String.prototype.replaceAll = function (find, replace) {
    //return this.replace(new RegExp(find, 'g'), replace);
    return this.split(find).join(replace);
}

//var myMoney = 3543.75873;
//var formattedMoney =   myMoney.formatMoney('$',2, ',', '.'); // "$3,543.76"
String.prototype.formatMoney = function (symbol, decPlaces, thouSeparator, decSeparator) {
    var n = this.replaceAll("$", "").replaceAll(",", ""),
        decPlaces = isNaN(decPlaces = Math.abs(decPlaces)) ? 2 : decPlaces,
        decSeparator = decSeparator == undefined ? "." : decSeparator,
        thouSeparator = thouSeparator == undefined ? "," : thouSeparator,
        sign = n < 0 ? "-" : "",
        i = parseInt(n = Math.abs(+n || 0).toFixed(decPlaces)) + "",
        j = (j = i.length) > 3 ? j % 3 : 0;
    return symbol + sign + (j ? i.substr(0, j) + thouSeparator : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thouSeparator) + (decPlaces ? decSeparator + Math.abs(n - i).toFixed(decPlaces).slice(2) : "");
};

// Usage : String.IsNullOrEmpty('value coes here')
String.IsNullOrEmpty = function (value) {
    var isNullOrEmpty = true;
    if (value) {
        if (typeof (value) == 'string') {
            if (value.length > 0)
                isNullOrEmpty = false;
        }
    }
    return isNullOrEmpty;
}

// Usage : value.IsNullOrEmpty2()
String.prototype.IsNullOrEmpty2 = function (value) {
    var values = $.trim(this);
    var isNullOrEmpty = true;
    if (values) {
        if (typeof (values) == 'string') {
            if (values.length > 0)
                isNullOrEmpty = false;
        }
    }
    return isNullOrEmpty;
}


//Usage:    var date = "10/27/2014 3:54:31 PM";  var newDate = date.formatDateTimeWithParameter('d,,a');
String.prototype.formatDateTimeWithParameter = function (value) {
    if ($.trim(this) != "") {
        var dateSplit = value.split(',');
        var date = $.trim(this);
        var newDate = date;
        if (date.split(' ').length == 3) {
            newDate = "";
            if (dateSplit[0] != "") {
                newDate = newDate + formatDateZeroAppend(date.split(' ')[0]) + " ";
            }
            if (dateSplit[1] != "") {
                var time1 = date.split(' ')[1].split(":")

                newDate = newDate + time1[0] + ":" + time1[1] + " ";
                // newDate = newDate + date.split(' ')[1] + " ";
            }
            if (dateSplit[2] != "") {
                newDate = newDate + date.split(' ')[2];
            }
        }
        return newDate;
    }
    else {
        return "";
    }
}


//Uasge: var end = new Date('11/25/2014 10:10 AM').addHours(2)
Date.prototype.addHours = function (h) {
    this.setHours(this.getHours() + h);
    return this;
}



function rgbToHex(red, green, blue) {
    var rgb = blue | (green << 8) | (red << 16);
    return '#' + (0x1000000 + rgb).toString(16).slice(1);
}


function disableAllControlsInContainer(containerId) {
    $('#' + containerId).find('input, textarea, button, select, btn').attr('disabled', 'disabled');
    $('#' + containerId).find('[nd]').removeAttr('disabled');
    $('#' + containerId + " img").addClass("hide");
    $('#' + containerId + " .iconTray").addClass("hide");
    $('#' + containerId + " [hide]").addClass("hide");
    $('#' + containerId).addClass("disableAll");
}

function enableAllControlsInContainer(containerId) {
    $('#' + containerId).find('input, textarea, button, select, btn').removeAttr('disabled', 'disabled');
    $('#' + containerId + " img").removeClass("hide");
    $('#' + containerId + " .iconTray").removeClass("hide");
    $('#' + containerId + " [hide]").removeClass("hide");
    $('#' + containerId).removeClass("disableAll");
}



function clearAllTextBoxes(containerId) {
    if ($("#" + containerId).length > 0) {
        $("#" + containerId + " input, #" + containerId + "select").each(function () {
            var control = $(this);
            var controlName = control[0].tagName.toLowerCase();
            if (controlName == "input") {
                var controlType = control[0].type.toLowerCase();
                if (controlType == "checkbox") {
                    //   values = $("#" + id).is(":checked");
                    this.checked =false
                }
                else {//textboxex
                    if ($(this).attr("value")) {
                        this.value = $(this).attr("value");
                    }
                    else {
                        this.value = "";
                    }
                }
            }
            else if (controlName == "select" || controlName == "textarea") {
                if ($(this).parent().children("ddlvalue").length > 0) {
                    var ddlValue = $(this).parent().children("ddlvalue").html();
                    $(this).val(ddlValue);
                }
            }
            else {
                $(control).html('');
            }
        });
    }
}
 