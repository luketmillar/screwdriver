(function() {
    String.prototype.startsWith = function(str) {
        return (this.match("^"+str)==str)
    };
    
    String.prototype.endsWith = function(str) {
        return (this.match(str+"$")==str)
    };

    String.prototype.format = function() {
        var args = arguments;
        return this.replace(/\{([0-9]+)\}/g, function (_, i) { return args[i]; });
    }
})();