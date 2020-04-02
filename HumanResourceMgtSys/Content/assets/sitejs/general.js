$(document).ready(function () {
    attachValidation();   
})

function getControlValue(id, isControl) {
    var values = "";
    if (typeof isControl == "undefined") { isControl = false; }
    if (!isControl) {
        if ($("#" + id).length > 0) {
            var control = $("#" + id);
            var isCurrency = $("#" + id).attr("formatcurrency");
            var controlName = control[0].tagName.toLowerCase();
            if (controlName == "input" || controlName == "textarea") {
                var controlType = control[0].type.toLowerCase();
                if (controlType == "checkbox" || controlType == "radio") {
                    values = $("#" + id).is(":checked");
                }
                else {
                    values = $.trim($(control).val());
                }
            }
            else if (controlName == "select" || controlName == "textarea") {
                values = $.trim($(control).val());
            }
            else {
                values = $.trim($(control).html());
            }
            if (typeof isCurrency != "undefined") {
                values = values.replaceAll("$", "").replaceAll(",", "").trim();
            }
        }
    }
    else {
        if ($(id).length > 0) {
            var control = $(id);
            var isCurrency = $(id).attr("formatcurrency");
            var controlName = control[0].tagName.toLowerCase();
            if (controlName == "input" || controlName == "textarea") {
                var controlType = control[0].type.toLowerCase();
                if (controlType == "checkbox" || controlType == "radio") {
                    values = $(id).is(":checked");
                }
                else {
                    values = $.trim($(control).val());
                }
            }
            else if (controlName == "select" || controlName == "textarea") {
                values = $.trim($(control).val());
            }
            else {
                values = $.trim($(control).html());
            }
            if (typeof isCurrency != "undefined") {
                values = values.replaceAll("$", "").replaceAll(",", "").trim();
            }
        }
    }
    return values;
}

function getRadioValue(containerId, attrValueToGet) {
    if (typeof attrValueToGet == "undefined") { attrValueToGet = "value"; }
    var chkId = "";
    $("#" + containerId + " input[type=radio]").each(function () {
        var isChecked = $(this).is(":checked");
        if (isChecked) {
            chkId = ($(this).attr(attrValueToGet));
        }
    });
    return chkId;
}


function setControlValue(controlId, values, isControl) {
    if (typeof isControl == "undefined") { isControl = false; }
    if (!isControl) {
        if ($("#" + controlId).length > 0) {
            var control = $("#" + controlId);
            var controlName = control[0].tagName.toLowerCase();
            if (controlName == "input" || controlName == "textarea") {
                var controlType = control[0].type.toLowerCase();
                if (controlType == "checkbox" || controlType == "radio") {
                    //  $(control).prop('checked', Boolean(values));
                    if (values.toString().toLowerCase() == "true") {
                        $("#" + controlId).prop('checked', true);
                    }
                    else {
                        $("#" + controlId).prop('checked', false);
                    }
                    //$("#" + controlId).prop('checked', values);
                    //  control[0].checked = Boolean(values);
                }
                else {
                    $(control).val(values);
                }
            }
            else if (controlName == "select") {
                $(control).val(values);
            }
            else {
                $(control).html(values);
            }
        }
    }
    else {
        if ($(controlId).length > 0) {
            var control = $(controlId);
            var controlName = control[0].tagName.toLowerCase();
            if (controlName == "input" || controlName == "textarea") {
                var controlType = control[0].type.toLowerCase();
                if (controlType == "checkbox" || controlType == "radio") {
                    //$(control).prop('checked', values);
                    control.checked = Boolean(values);
                }
                else {
                    $(control).val(values);
                }
            }
            else if (controlName == "select") {
                $(control).val(values);
            }
            else {
                $(control).html(values);
            }
        }
    }
}

// If you dont know parent Id then call method like  getControlValueByAttr("", "[content] [accountNumber]");
// getControlValueByAttr("trItemids_1", "accountNumber");  

function getControlValueByAttr(parentRowId, controlAttr) {
    var values = "";
    var newControlAttr = controlAttr;
  
    if (controlAttr.indexOf(' ') == -1) {
        newControlAttr = " [" + newControlAttr + "]";
    }
    if (parentRowId != "") {
        parentRowId = "#" + parentRowId;
    }
    var isCurrency = $(parentRowId + newControlAttr).attr("formatcurrency");
    if ($(parentRowId + newControlAttr).length > 0) {
        var control = $(parentRowId + newControlAttr);
        var controlName = control[0].tagName.toLowerCase();
        if (controlName == "input" || controlName == "textarea") {
            var controlType = control[0].type.toLowerCase();
            if (controlType == "checkbox") {
                // values = $("#" + id).is(":checked");
                values = $(control).is(":checked");
            }
            else {
                values = $.trim($(control).val());
            }
        }
        else if (controlName == "select" || controlName == "textarea") {
            values = $.trim($(control).val());
        }
        else {
            values = $.trim($(control).html());
        }
        if (typeof isCurrency != "undefined") {
            values = values.replaceAll("$", "").replaceAll(",", "").trim();
        }
    }
       
    return values;
}

function setControlValueByAttr(parentRowId, controlAttr, values) {
    if (controlAttr != "") {
        // if(controlAttr.indexOf("***")>-1){
        var attr = controlAttr.split("&");
        var attr2 = "";
        for (i in attr) {
            attr2 = attr2 + "[" + attr[i] + "]";
        }
        //  }
    }
    controlAttr = attr2;
    if ($("#" + parentRowId + " " + attr2 + "").length > 0) {
        var control = $("#" + parentRowId + "  " + controlAttr + "");
        var controlName = control[0].tagName.toLowerCase();
        if (controlName == "input" || controlName == "textarea") {
            var controlType = control[0].type.toLowerCase();
            if (controlType == "checkbox" || controlType == "radio") {
                $(control).prop('checked', values);
            }
            else {
                $(control).val(values);
            }
        }
        else if (controlName == "select") {
            $(control).val(values);
        }
        else {
            $(control).html(values);
        }
    }
}

function getCheckedRadioInContainer(containerId, attrToMatch, attrToReturn) {
    var valueChecked = "";
    if (typeof attrToMatch == "undefined" || attrToMatch == "") { attrToMatch = ""; }
    else { attrToMatch = "[" + attrToMatch + "]"; }
    if (typeof attrToReturn == "undefined" || attrToReturn == "") { attrToReturn = "value"; }
    $("#" + containerId + " input[type=radio]" + attrToMatch).each(function () {
        if (this.checked) {
            valueChecked = ($(this).attr(attrToReturn));
        }
    })
    return valueChecked;
}

function bindMask() {
    $("input[mask='phone']").mask("(999) 999-9999");
}

function bindPhoneMask(txtId) {
    $("#" + txtId).mask("(999) 999-9999");
}

function deleteConfirm(valToShowInModal, valueToShowInProcess) {
    if (confirm(valToShowInModal)) {
     
        return true;
    }
    else
        return false;
}

function getNumbersFromString(values) {
    // return values.match(/\d+/);
    return values.replace(/\D/g, '');
}

 
function makeDefaultButtonInDiv(thiss,e, btnId) {
    if (e.keyCode == '13') {
        $(thiss).find("#"+btnId).click();
    }
}

function showDivInModapPopUp(divId) {
    $(".modal-content > [showHide] ").addClass("hide");
    $(".modal-content #" + divId).removeClass("hide");
}

function loadIframePage(tabToHighlight, url,path) {
   
    var oldURL = url;
    var originLocation = getWindowLocation();
    var iframeSrc = originLocation + "/" + url;

    $(".sidebar-menu > li").removeClass("active");
    $(".sidebar-menu a").removeClass("active");

    if ($(".sidebar-menu #" + tabToHighlight).length > 0) {
        var prevSrc = $("#iframe" + tabToHighlight).attr("src");
        if (oldURL.length < 2) {

        }
        if (prevSrc != iframeSrc && oldURL.length > 2) {
            $("#iframe" + tabToHighlight).attr("src", iframeSrc);
        }

        $(".sidebar-menu .treeview-menu").css({ "display": "none" });
        $(".sidebar-menu #" + tabToHighlight).parent().parent().css({ "display": "block" });
        $(".sidebar-menu #" + tabToHighlight).parent().parent().parent().addClass("active");
        $(".sidebar-menu #" + tabToHighlight).addClass("active");
    }

 
    var iframeSrc = originLocation + "/" + url;
    $("#iframeDefault").attr("src", iframeSrc);
    
}

function loadIframePageInParent(tabToHighlight, url) {
    var originLocation = getWindowLocation();
    if (self == window.parent) {
        window.location.href = originLocation + "/" + url;
    }
    else {
       // window.parent.loadIframePage(tabToHighlight, url);
    }
}


function loadIframePageInParentsParent(tabToHighlight, url) {
    var originLocation = getWindowLocation();
    loadIframePageInParent(tabToHighlight, url);
}

function getWindowLocation() {
    var originLocation = window.location.origin;
    if (!window.location.origin) {
        originLocation = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port : '');
    }
    return originLocation;
}

function reloadPageRemoveQueryStr() {
    window.location = window.location.split("?")[0];
}

function openUrl(url, newTab) {
    if (typeof newTab == "undefined") {
        if (url.indexOf("http") > -1) {
            window.location.href = url;
        }
        else {
              url = "http://" + url;
            window.location.href = url;
        }
    }
}

function getQuerystring(key) {
    if (window.location.search.length > 0) {
        var query = window.location.search.substring(1);
        //alert(query);
        var vars = query.split("&");
        var vals = null;
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split("=");
            if (pair[0] == key) {
                vals = pair[1];
            }
        }
        return vals;
    }
    else
    { return null; }
}

function decodeQryStr(s) {
    s = s.replace(/%([EF][0-9A-F])%([89AB][0-9A-F])%([89AB][0-9A-F])/gi,
                function (code, hex1, hex2, hex3) {
                    var n1 = parseInt(hex1, 16) - 0xE0;
                    var n2 = parseInt(hex2, 16) - 0x80;
                    if (n1 == 0 && n2 < 32) return code;
                    var n3 = parseInt(hex3, 16) - 0x80;
                    var n = (n1 << 12) + (n2 << 6) + n3;
                    if (n > 0xFFFF) return code;
                    return String.fromCharCode(n);
                });
    s = s.replace(/%([CD][0-9A-F])%([89AB][0-9A-F])/gi,
                function (code, hex1, hex2) {
                    var n1 = parseInt(hex1, 16) - 0xC0;
                    if (n1 < 2) return code;
                    var n2 = parseInt(hex2, 16) - 0x80;
                    return String.fromCharCode((n1 << 6) + n2);
                });
    s = s.replace(/%([0-7][0-9A-F])/gi,
                function (code, hex) {
                    return String.fromCharCode(parseInt(hex, 16));
                });
    return s;
}

function filterArray(arr, criteria) {
    return arr.filter(function (obj) {
        return Object.keys(criteria).every(function (c) {
            return obj[c] == criteria[c];
        });
    });
}

function isValueBool(val) { 
  val=val.toString().trim().toLowerCase();
  if (val == "1" || val == "true") {
      return true;
  }
  else { false };
}

function formatData() {
    $("[formatCurrency]").each(function () {
        var myMoney = "";
        var dollarSymbol = "$";
        if (typeof $(this).attr("nd") != "undefined") { //nd means do'nt show $
            dollarSymbol = "";
        }
        var control = $(this);
        var controlName = control[0].tagName.toLowerCase();
        if (controlName == "input") {
            myMoney = $.trim($(this).val());
            $(this).val(myMoney.formatMoney(dollarSymbol, 2, ',', '.'));
        }
        else {
            myMoney = $.trim($(this).html());
            $(this).html(myMoney.formatMoney(dollarSymbol, 2, ',', '.'));
        }
    })
 
    $("[formatDateTime]").each(function () {
        var formatDateTime = $(this).attr("formatDateTime");
        var values = getControlValue(this, true);
        if (values !== null || values != "") {
            var values2 = values.formatDateTimeWithParameter(formatDateTime);
            setControlValue(this, values2, true);
        }
    });

    $("[formatPhone]").each(function () {
        var myPhone = "";
        var control = $(this);
        var controlName = control[0].tagName.toLowerCase();
        if (controlName == "input") {
            myPhone = $.trim($(this).val());
            myPhone = myPhone.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
            $(this).val(myPhone);
        }
        else {
            myPhone = $.trim($(this).html());
            myPhone = myPhone.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
            $(this).html(myPhone);
        }
    });
}
