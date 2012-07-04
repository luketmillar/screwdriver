// ARRAY
(function() {
    Array.prototype.shuffle = function() {
        for (var i = this.length - 1; i > 0; i--) {
            var r = Math.floor(Math.random() * i);
            var a = this[r];
            this[r] = this[i];
            this[i] = a;
        }
        
        return this;
    };
    
    Array.prototype.max = function() {
        var max;
        
        for (var i = this.length - 1; i >= 0; i--) {
            if (max == null) {
                max = this[i];
            }
            else if (this[i] > max){
                max = this[i];
            }
        }
        
        return max;
    };
    
    Array.prototype.min = function() {
        var min;
        
        for (var i = this.length - 1; i >= 0; i--) {
            if (min == null) {
                min = this[i];
            }
            else if (this[i] < min){
                min = this[i];
            }
        }
        
        return min;
    };
    
    Array.prototype.isEmpty = function() {
        return this.length === 0;
    };
})();

// STRING
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

// OBJECT
(function() {
    Object.prototype.isEmpty = function() {
        for (var prop in this) {
            if (this.hasOwnProperty(prop))
                return false;
        }
        
        return true;
    };
})();

// DOM
(function() {
    var dom = window.dom = window.dom || {};
    
    dom.create = function(tagname) {
        return doc.createElement(tagname);
    };

    dom.byId = function(id) {
        return document.getElementById(id);
    };

    dom.byClass = function(classname, scope) {
        scope = scope || document;
        return scope.getElementsByClassName(classname);
    };
    
})();
