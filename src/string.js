(function() {
    String.prototype.startsWith = function(str) {
        return (this.match('^'+str)==str);
    };
    
    String.prototype.endsWith = function(str) {
        return (this.match(str+'$')==str);
    };

    String.prototype.format = function() {
        var args = arguments;
        return this.replace(/\{([0-9]+)\}/g, function (_, i) { return args[i]; });
    };
    
    String.prototype.isEmailAddress = function() {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(this);
    };
    
    String.prototype.isPhoneNumber = function() {
        var re = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        return re.test(this);
    };
})();