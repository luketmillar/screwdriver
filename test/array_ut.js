(function() {
    window.screwdriver_array_ut = function() {
        this.test_ARRAY_max = function() {
            assert.isUndefined([].max());
            
            assert.areEqual([2,3,4,5,1].max(), 5);
            assert.areEqual([-1, 0].max(), 0);
            assert.areEqual([-1, -2].max(), -1);
            assert.areEqual([1].max(), 1);
            assert.areEqual(['a', 'b', 'c'].max(), 'c');
        };
        
        this.test_ARRAY_min = function() {
            assert.isUndefined([].min());
            
            assert.areEqual([2,3,4,5,1].min(), 1);
            assert.areEqual([-1, 0].min(), -1);
            assert.areEqual([1, 0].min(), 0);
            assert.areEqual([-1, -2].min(), -2);
            assert.areEqual([1].min(), 1);
            assert.areEqual(['a', 'b', 'c'].min(), 'a');
        };
        
        this.test_ARRAY_isEmpty = function() {
            assert.isTrue([].isEmpty());
            
            assert.isFalse([1,2].isEmpty());
            assert.isFalse([1].isEmpty());
        };
    };
})();