(function() {
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
            
            var node = createNode(key, value);
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
