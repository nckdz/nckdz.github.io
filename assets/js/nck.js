	var navBtn = document.querySelector('.btn'), list = document.querySelector('list');
	navBtn.addEventListener('click', function() {
		if (list.style.top == '56px') {
			list.style.top = '-100%';
		} else {
			list.style.top = '56px';
		}
	})

// Create cookie
function createCookie(name, value, days) {
    var expires;
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    } else {
        expires = "";
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}
// Read cookie
function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1, c.length);
        }
        if (c.indexOf(nameEQ) === 0) {
            return c.substring(nameEQ.length, c.length);
        }
    }
    return null;
}
// Erase cookie
function eraseCookie(name) {
    createCookie(name, "", -1);
}