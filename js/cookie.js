function SetCookie(sName, sValue) 
    { 
        date = new Date(); 
        s = date.getDate(); 
        date.setDate(s+1);            //expire time is one month late!, and can't be current date! 
        document.cookie = sName + "=" + escape(sValue) + "; expires=" + date.toGMTString(); 
    } 
    function GetCookie(sName) 
    { 
        // cookies are separated by semicolons 
        var aCookie = document.cookie.split("; "); 
        for (var i=0; i < aCookie.length; i++) 
        { 
        // a name/value pair (a crumb) is separated by an equal sign 
        var aCrumb = aCookie[i].split("="); 
        if (sName == aCrumb[0]) { 
            return unescape(aCrumb[1]);} 
        } 
         
        // a cookie with the requested name does not exist 
        return null; 
    }

function fnLoad() 
    { 
        document.body.scrollLeft = GetCookie("scrollLeft"); 
        document.body.scrollTop = GetCookie("scrollTop"); 
    }


 
function fnUnload() 
    { 
        SetCookie("scrollLeft", document.body.scrollLeft) 
        SetCookie("scrollTop", document.body.scrollTop) 
    }

window.onload = fnLoad; 
    window.onunload = fnUnload;