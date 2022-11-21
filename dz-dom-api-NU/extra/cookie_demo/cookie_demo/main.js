var CookieHelper = {
	setCookie: function (key, value, path, expriry) {
		// check the params...
		if (!key || !value || !path) {
			throw new Error('Must provide key, value and path');
		}
		var cookieString = key + '=' + value +
			'; path=' + path;
		// expiry is optional
		if (expriry) {
			cookieString += '; expires=' +
				(new Date(expriry)).toGMTString();	
		} 

		this.gatherCookies();
		document.cookie = cookieString;
		// add the cookie to the hash
		this.cookies[key] = value;
	},

	getCookie: function (key) {
		this.gatherCookies();
		return this.cookies[key];
	},

	gatherCookies: function () {
		if (!this.cookies) {
			// create the cookies hash
			var docCookies = document.cookie.split('; ');
			var cookie;
			this.cookies = {};

			for (var i = 0, len = docCookies.length; i < len; i += 1) {
				cookie = docCookies[i].split('=');
				this.cookies[cookie[0]] = cookie[1];
			}
		}
	}
};

// And as a constructor function...
/*
var CookieHelper = function () {
	// create the cookies hash
	var docCookies = document.cookie.split('; ');
	var cookie;
	this.cookies = {};

	for (var i = 0, len = docCookies.length; i < len; i += 1) {
		cookie = docCookies[i].split('=');
		this.cookies[cookie[0]] = cookie[1];
	}
};

CookieHelper.prototype.setCookie = function (key, value, path, expriry) {
	// check the params...
	if (!key || !value || !path) {
		throw new Error('Must provide key, value and path');
	}
	var cookieString = key + '=' + value +
		'; path=' + path;
	// expiry is optional
	if (expriry) {
		cookieString += '; expires=' +
			(new Date(expriry)).toGMTString();	
	} 

	document.cookie = cookieString;
	// add the cookie to the hash
	this.cookies[key] = value;
};

CookieHelper.prototype.getCookie = function (key) {
	return this.cookies[key];
};
*/