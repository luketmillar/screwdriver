(function() {
    Object.prototype.isEmpty = function() {
        for (var prop in this) {
            if (this.hasOwnProperty(prop))
                return false;
        }
        
        return true;
    };
    
    Object.prototype.size = function() {
        var size = 0;
        
        for (var prop in this) {
            if (this.hasOwnProperty(prop))
                size++;
        }
        
        return size;
    };
    
    Object.prototype.duplicate = function() {
        var dupe = {};
        
        if (this.isArray()) {
            dupe = [];
            for (var i = 0; i < this.length; i++) {
                if (is_scalar(this[i])) {
                    dupe[i] = this[i];
                }
                else {
                    dupe[i] = this[i].duplicate();
                }
            }
        }
        else {
            for (var prop in this) {
                if (this.hasOwnProperty(prop)) {
                    if (is_scalar(this[prop])) {
                        dupe[prop] = this[prop];
                    }
                    else {
                        dupe[prop] = this[prop].duplicate();
                    }
                }
            }
        }
        
        return dupe;
    };
    
    Object.prototype.isArray = function() {
        return Object.prototype.toString.call(this) === '[object Array]';
    };
    
    Object.prototype.isIdenticalTo = function(a) {
        if (a == null || this.size() !== a.size())
            return false;
        
        if (this.isArray()) {
            if (this.length !== a.length)
                return false;
            
            for (var i = 0; i < this.length; i++) {
                if (is_scalar(this[i])) {
                    if (this[i] !== a[i])
                        return false;
                }
                else {
                    if (!this[i].isIdenticalTo(a[i]))
                        return false;
                }
            }
        }
        else {
            for (var prop in this) {
                if (this.hasOwnProperty(prop)) {
                    if (is_scalar(this[prop])) {
                        if (this[prop] !== a[prop])
                            return false;
                    }
                    else {
                        if (!this[prop].isIdenticalTo(a[prop]))
                            return false;
                    }
                }
            }
        }
        
        return true;
    };
    
    function is_scalar(obj){return (/string|number|boolean/).test(typeof obj);}
})();