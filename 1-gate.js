//2013 © Rotesource, Inc. http://rotesource.com/bigcommerce-agegate (Goke Pelemo - http://goke.me)
function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
};

var goke = readCookie('Bouncer');
if (goke) {
    document.write("<style> #AgeGate { visibility:hidden; }</style>");
};

//2013 © Rotesource, Inc. http://rotesource.com/bigcommerce-agegate (Goke Pelemo - http://goke.me)
if (goke == null || goke=='') {
    document.write("<style> #AgeGate { display:none; }</style>");
//The message displayed when the visitor has Javascript disabled - END
}
