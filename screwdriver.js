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
    
    Array.prototype.peek = function() {
        return this.isEmpty() ? null : this[this.length - 1];
    };
    
    Array.prototype.search = function(obj) {
        for (var i = this.length - 1; i >= 0; i--) {
            if (this[i] === obj)
                return this.length - i;
        }
    
        return -1;
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
        var _tail = null;
        var _head = null;
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
            _tail = null;
            _head = null;
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
            if (_max_size > 0 && !_key_to_node[key] && _size === _max_size && !!_head) {
                // the cache is full so we remove the oldest entry before adding a new one
                this.remove(_head.key);
            }
            
            // If this key existed before, we should replace it. We remove and then add it back to the end of the list.
            var prev_value = this.remove(key);
            
            var node = {
                key: key,
                value: value
            };
            
            _key_to_node[key] = node;
            _size++;
            
            if (!_head) {
                _tail = _head = node;
            }
            else {
                _tail.next = node;
                node.previous = _tail;
                _tail = node;
            }
            
            return prev_value;
        };
        
        this.remove = function(key) {
            var node = _key_to_node[key];
            
            if (!node) return null;
            
            if (_tail === node && _head === node) {
                // removing the only element
                _tail = _head = null;
            }
            else if (_tail === node) {
                // removing the tail
                _tail.previous.next = null;
                _tail = _tail.previous;
            }
            else if (_head === node) {
                // removing the head
                _head.next.previous = null;
                _head = _head.next;
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
        
        this.values = function() {
            var values = [];
            
            var n = _head;
            while (n) {
                values.push(n.value);
                n = n.next;
            }
            
            return values;
        };
        
        this.peekLast = function() {
            return !!_tail ? _tail.value : null;
        };
        
        this.peekFirst = function() {
            return !!_head ? _head.value : null;
        };
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
})();(function() {
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