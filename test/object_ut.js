(function() {
    window.screwdriver_object_ut = function() {
        this.test_OBJECT_isEmpty = function() {
            assert.isTrue({}.isEmpty());
            assert.isFalse({a: 1}.isEmpty());
        };
        
        this.test_OBJECT_size = function() {
            assert.areEqual({}.size(), 0);
            assert.areEqual({a: 1}.size(), 1);
            assert.areEqual({a: 1, b: 2}.size(), 2);
        };
        
        this.test_OBJECT_isArray = function() {
            assert.isTrue([].isArray());
            assert.isTrue([1, 2, 3].isArray());
            assert.isTrue([{}].isArray());
            assert.isFalse({ a: [] }.isArray());
            assert.isFalse({}.isArray());
        };
        
        this.test_OBJECT_isIdenticalTo = function() {
            var obj1_a = {};
            var obj1_b = {};
            assert.isTrue(obj1_a.isIdenticalTo(obj1_b));
            
            var obj2_a = { a: 15, b: 'string', c: true };
            var obj2_b = { a: 15, b: 'string', c: true };
            assert.isTrue(obj2_a.isIdenticalTo(obj2_b));
            
            var obj3_a = { a: [1, 3, 4] };
            var obj3_b = { a: [1, 3, 4] };
            assert.isTrue(obj3_a.isIdenticalTo(obj3_b));
            
            var obj4_a = { a: [1, { a: '' }, 4], b: { a: [2, 1, 3], b: 1029, c: 'screwdriver', d: { a: false } } };
            var obj4_b = { a: [1, { a: '' }, 4], b: { a: [2, 1, 3], b: 1029, c: 'screwdriver', d: { a: false } } };
            assert.isTrue(obj4_a.isIdenticalTo(obj4_b));
            
            var obj5_a = { a: [1, { a: '' }, 4], b: { a: [2, 1, 3], b: 1029, c: 'screwdriver', d: { a: false } } };
            var obj5_b = { a: [1, { a: '', b: 't' }, 4], b: { a: [2, 1, 3], b: 1029, c: 'screwdriver', d: { a: false } } };
            assert.isFalse(obj5_a.isIdenticalTo(obj5_b));
        };
        
        this.test_OBJECT_duplicate = function() {
            var obj1 = {};
            var d_obj1 = obj1.duplicate();
            assert.areNotEqual(d_obj1, obj1);
            assert.isTrue(d_obj1.isIdenticalTo(obj1));
            
            var obj2 = { a: 15, b: 'string', c: true };
            var d_obj2 = obj2.duplicate();
            assert.areNotEqual(d_obj2, obj2);
            assert.isTrue(d_obj2.isIdenticalTo(obj2));
                        
            var obj3 = { a: [1, 3, 4] };
            var d_obj3 = obj3.duplicate();
            assert.areNotEqual(d_obj3, obj3);
            assert.isTrue(d_obj3.isIdenticalTo(obj3));
            
            var obj4 = { a: [1, 3, 4], b: { a: [2, 1, 3], b: 1029, c: 'screwdriver', d: { a: false } } };
            var d_obj4 = obj4.duplicate();
            assert.areNotEqual(d_obj4, obj4);
            assert.isTrue(d_obj4.isIdenticalTo(obj4));
        };
    };
})();