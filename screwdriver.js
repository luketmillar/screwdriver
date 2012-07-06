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
})();(function() {
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
    
})();(function() {
    window.LinkedHashMap = function(max_size) {
        var _mostRecent = null;
        var _leastRecent = null;
        var _key_to_node = {};
        var _size = 0;
        var _max_size = !!max_size ? max_size : 0;
        
        // A node is defined as
        //  {
        //      key: 'key',
        //      value: Object,
        //      next: node,
        //      previous: node
        //  }
            
        this.clear = function() {
            _mostRecent = null;
            _leastRecent = null;
            _key_to_node = {};
            _size = 0;
        };
        
        this.containsKey = function(key) {
            return !!_key_to_node[key];
        };
        
        this.get = function(key) {
            var node = _key_to_node[key];
            return !!node ? node.value : null;
        };
        
        this.put = function(key, value) {
            if (_max_size > 0 && !_key_to_node[key] && _size === _max_size && !!_leastRecent) {
                // the cache is full so we remove the oldest entry before adding a new one
                this.remove(_leastRecent.key);
            }
            
            // If this key existed before, we should replace it. We remove and then add it back to the end of the list.
            var prev_value = this.remove(key);
            
            var node = createNode(key, value);
            _key_to_node[key] = node;
            _size++;
            
            if (!_mostRecent) {
                _mostRecent = _leastRecent = node;
            }
            else {
                node.next = _mostRecent;
                _mostRecent.previous = node;
                _mostRecent = node;
            }
            
            return prev_value;
        };
        
        this.remove = function(key) {
            var node = _key_to_node[key];
            
            if (!node) return null;
            
            if (_mostRecent === node && _leastRecent === node) {
                // removing the only element
                _mostRecent = _leastRecent = null;
            }
            else if (_mostRecent === node) {
                // removing the mostRecent
                _mostRecent.next.previous = null;
                _mostRecent = _mostRecent.next;
            }
            else if (_leastRecent === node) {
                // removing the leastRecent
                _leastRecent.previous.next = null;
                _leastRecent = _leastRecent.previous;
            }
            else {
                var previous = node.previous;
                var next = node.next;
                previous.next = next;
                next.previous = previous;
            }
            
            delete _key_to_node[key];
            _size--;
            
            return node.value;
        };
        
        this.size = function() {
            return _size;
        };
        
        this.isEmpty = function() {
            return _size === 0;
        };
        
        this._peekMostRecent = function() {
            return !!_mostRecent ? _mostRecent.value : null;
        };
        
        this._peekLeastRecent = function() {
            return !!_leastRecent ? _leastRecent.value : null;
        };
        
        function createNode(key, value, next, previous) {
            return {
                key: key,
                value: value,
                next: next,
                previous: previous
            };
        }
    };
})();
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
})();(function() {
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