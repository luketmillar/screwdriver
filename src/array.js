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