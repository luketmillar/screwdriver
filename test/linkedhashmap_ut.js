(function() {
    window.screwdriver_linkedhashmap_ut = function() {
        var _lhm;
        
        this.setup = function() {
            _lhm = new LinkedHashMap();
        };
        
        this.test_put = function() {
            var a_val = { a: 1 };
            var b_val = { b: 2 };
            
            _lhm.put('a', a_val);
            assert.areEqual(_lhm.size(), 1);
            assert.isTrue(_lhm.containsKey('a'));
            assert.isFalse(_lhm.containsKey('b'));
            assert.areEqual(_lhm.get('a'), a_val);
            assert.isNull(_lhm.get('b'));
            
            _lhm.put('b', b_val);
            assert.areEqual(_lhm.size(), 2);
            assert.isTrue(_lhm.containsKey('a'));
            assert.isTrue(_lhm.containsKey('b'));
            assert.areEqual(_lhm.get('a'), a_val);
            assert.areEqual(_lhm.get('b'), b_val);
            assert.areEqual(_lhm.peekLast(), b_val);
            assert.areEqual(_lhm.peekFirst(), a_val);
            
            var prev_value = _lhm.put('a', b_val);
            assert.areEqual(_lhm.size(), 2);
            assert.isTrue(_lhm.containsKey('a'));
            assert.isTrue(_lhm.containsKey('b'));
            assert.areEqual(prev_value, a_val);
            assert.areEqual(_lhm.get('a'), b_val);
            assert.areEqual(_lhm.get('b'), b_val);
            
            _lhm.put('a', a_val);
            assert.areEqual(_lhm.peekLast(), a_val);
            assert.areEqual(_lhm.peekFirst(), b_val);
            
            _lhm = new LinkedHashMap(2);
            _lhm.put('a', 'a_val');
            _lhm.put('b', 'b_val');
            _lhm.put('c', 'c_val');
            assert.areEqual(_lhm.size(), 2);
            assert.areEqual(_lhm.peekLast(), 'c_val');
            assert.areEqual(_lhm.peekFirst(), 'b_val');
        };
        
        this.test_remove = function() {
            // set up the scenario
            _lhm.put('a', 'a_val');
            _lhm.put('b', 'b_val');
            _lhm.put('c', 'c_val');
            assert.areEqual(_lhm.size(), 3);
            assert.areEqual(_lhm.peekLast(), 'c_val');
            
            // remove non-existant item
            _lhm.remove('d');
            assert.areEqual(_lhm.size(), 3);
            
            // remove middle item
            _lhm.remove('b');
            assert.areEqual(_lhm.size(), 2);
            assert.isFalse(_lhm.containsKey('b'));
            assert.isNullOrUndefined(_lhm.get('b'));
            assert.areEqual(_lhm.get('a'), 'a_val');
            assert.areEqual(_lhm.get('c'), 'c_val');
            
            // remove head
            _lhm.remove('a');
            assert.areEqual(_lhm.size(), 1);
            assert.isFalse(_lhm.containsKey('a'));
            assert.isNullOrUndefined(_lhm.get('a'));
            assert.areEqual(_lhm.get('c'), 'c_val');
            assert.areEqual(_lhm.peekLast(), _lhm.get('c'));
            assert.areEqual(_lhm.peekFirst(), _lhm.get('c'));
            
            // remove tail
            _lhm.put('a', 'a_val');
            _lhm.remove('a');
            assert.areEqual(_lhm.size(), 1);
            assert.isFalse(_lhm.containsKey('a'));
            assert.isNullOrUndefined(_lhm.get('a'));
            assert.areEqual(_lhm.get('c'), 'c_val');
            assert.areEqual(_lhm.peekLast(), _lhm.get('c'));
            assert.areEqual(_lhm.peekFirst(), _lhm.get('c'));
            
            // remove only item
            _lhm.remove('c');
            assert.areEqual(_lhm.size(), 0);
            assert.isTrue(_lhm.isEmpty());
            assert.isFalse(_lhm.containsKey('c'));
        };
    
        this.test_isEmpty = function() {
            assert.isTrue(_lhm.isEmpty());
            
            _lhm.put('a', 'a_val');
            assert.isFalse(_lhm.isEmpty());
            
            _lhm.put('b', 'b_val');
            assert.isFalse(_lhm.isEmpty());
            
            _lhm.put('c', 'c_val');
            assert.isFalse(_lhm.isEmpty());
            
            _lhm.remove('a');
            assert.isFalse(_lhm.isEmpty());
            
            _lhm.remove('b');
            assert.isFalse(_lhm.isEmpty());
            
            _lhm.remove('c');
            assert.isTrue(_lhm.isEmpty());
            
            _lhm.put('a', 'a_val');
            assert.isFalse(_lhm.isEmpty());
            
            _lhm.put('b', 'b_val');
            assert.isFalse(_lhm.isEmpty());
            
            _lhm.put('c', 'c_val');
            assert.isFalse(_lhm.isEmpty());
            
            _lhm.clear();
            assert.isTrue(_lhm.isEmpty());
        };
    
        this.test_clear = function() {
            // set up the scenario
            _lhm.put('a', 'a_val');
            _lhm.put('b', 'b_val');
            _lhm.put('c', 'c_val');
            assert.areEqual(_lhm.size(), 3);
            
            _lhm.clear();
            assert.areEqual(_lhm.size(), 0);
            assert.isTrue(_lhm.isEmpty());
            
            _lhm.clear();
            assert.areEqual(_lhm.size(), 0);
            assert.isTrue(_lhm.isEmpty());
        };
        
        this.test_size = function() {
            assert.areEqual(_lhm.size(), 0);
            
            _lhm.put('a', 'a_val');
            assert.areEqual(_lhm.size(), 1);
            
            _lhm.put('b', 'b_val');
            assert.areEqual(_lhm.size(), 2);
            
            _lhm.put('c', 'c_val');
            assert.areEqual(_lhm.size(), 3);
            
            _lhm.put('b', 'b_val2');
            assert.areEqual(_lhm.size(), 3);
            
            _lhm.remove('b');
            assert.areEqual(_lhm.size(), 2);
            
            _lhm.remove('d');
            assert.areEqual(_lhm.size(), 2);
            
            _lhm.clear();
            assert.areEqual(_lhm.size(), 0);
        };
    
        this.test_get = function() {
            assert.isNullOrUndefined(_lhm.get('a'));
            
            _lhm.put('a', 'a_val');
            assert.areEqual(_lhm.get('a'), 'a_val');
            
            _lhm.put('b', 'b_val');
            assert.areEqual(_lhm.get('a'), 'a_val');
            assert.areEqual(_lhm.get('b'), 'b_val');
            
            _lhm.put('c', 'c_val');
            assert.areEqual(_lhm.get('a'), 'a_val');
            assert.areEqual(_lhm.get('b'), 'b_val');
            assert.areEqual(_lhm.get('c'), 'c_val');
            
            _lhm.put('b', 'b_val2');
            assert.areEqual(_lhm.get('a'), 'a_val');
            assert.areEqual(_lhm.get('b'), 'b_val2');
            assert.areEqual(_lhm.get('c'), 'c_val');
            
            _lhm.remove('b');
            assert.areEqual(_lhm.get('a'), 'a_val');
            assert.areEqual(_lhm.get('c'), 'c_val');
            assert.isNullOrUndefined(_lhm.get('b'));
            
            _lhm.remove('d');
            assert.areEqual(_lhm.get('a'), 'a_val');
            assert.areEqual(_lhm.get('c'), 'c_val');
            
            _lhm.clear();
            assert.isNullOrUndefined(_lhm.get('a'));
            assert.isNullOrUndefined(_lhm.get('c'));
        };
        
        this.test_containsKey = function() {
            assert.isFalse(_lhm.containsKey('a'));
            assert.isFalse(_lhm.containsKey('b'));
            assert.isFalse(_lhm.containsKey('c'));
            
            _lhm.put('a', 'a_val');
            assert.isTrue(_lhm.containsKey('a'));
            assert.isFalse(_lhm.containsKey('b'));
            assert.isFalse(_lhm.containsKey('c'));
            
            _lhm.put('b', 'b_val');
            assert.isTrue(_lhm.containsKey('a'));
            assert.isTrue(_lhm.containsKey('b'));
            assert.isFalse(_lhm.containsKey('c'));
            
            _lhm.put('c', 'c_val');
            assert.isTrue(_lhm.containsKey('a'));
            assert.isTrue(_lhm.containsKey('b'));
            assert.isTrue(_lhm.containsKey('c'));
            
            _lhm.put('b', 'b_val2');
            assert.isTrue(_lhm.containsKey('a'));
            assert.isTrue(_lhm.containsKey('b'));
            assert.isTrue(_lhm.containsKey('c'));
            
            _lhm.remove('b');
            assert.isTrue(_lhm.containsKey('a'));
            assert.isFalse(_lhm.containsKey('b'));
            assert.isTrue(_lhm.containsKey('c'));
            
            _lhm.remove('d');
            assert.isTrue(_lhm.containsKey('a'));
            assert.isFalse(_lhm.containsKey('b'));
            assert.isTrue(_lhm.containsKey('c'));
            
            _lhm.clear();
            assert.isFalse(_lhm.containsKey('a'));
            assert.isFalse(_lhm.containsKey('b'));
            assert.isFalse(_lhm.containsKey('c'));
        };
        
        this.test_peekFirst = function() {
            assert.isNull(_lhm.peekFirst());
            
            _lhm.put('a', 'a_val');
            assert.areEqual(_lhm.peekFirst(), 'a_val');
            
            _lhm.put('b', 'b_val');
            assert.areEqual(_lhm.peekFirst(), 'a_val');
            
            _lhm.remove('a');
            assert.areEqual(_lhm.peekFirst(), 'b_val');
        };
        
        this.test_peekLast = function() {
            assert.isNull(_lhm.peekLast());
            
            _lhm.put('a', 'a_val');
            assert.areEqual(_lhm.peekLast(), 'a_val');
            
            _lhm.put('b', 'b_val');
            assert.areEqual(_lhm.peekLast(), 'b_val');
            
            _lhm.remove('b');
            assert.areEqual(_lhm.peekLast(), 'a_val');
        };
        
        this.test_values = function() {
            // set up the scenario
            _lhm.put('a', 'a_val');
            _lhm.put('b', 'b_val');
            _lhm.put('c', 'c_val');
            
            var values = _lhm.values();
            assert.areEqual(values.length, _lhm.size());
            assert.areEqual(values[0], 'a_val');
            assert.areEqual(values[1], 'b_val');
            assert.areEqual(values[2], 'c_val');
        };
    };
})();