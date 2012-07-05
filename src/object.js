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
})();