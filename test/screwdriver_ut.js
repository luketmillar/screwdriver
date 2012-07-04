(function() {
    window.screwdriver_ut = function() {
        this.test_ARRAY_max = function() {
            assert.isUndefined([].max());
            
            assert.areEqual([2,3,4,5,1].max(), 5);
            assert.areEqual([-1, 0].max(), 0);
            assert.areEqual([-1, -2].max(), -1);
            assert.areEqual([1].max(), 1);
        };
        
        this.test_ARRAY_min = function() {
            assert.isUndefined([].min());
            
            assert.areEqual([2,3,4,5,1].min(), 1);
            assert.areEqual([-1, 0].min(), -1);
            assert.areEqual([1, 0].min(), 0);
            assert.areEqual([-1, -2].min(), -2);
            assert.areEqual([1].min(), 1);
        };
        
        this.test_ARRAY_isEmpty = function() {
            assert.isTrue([].isEmpty());
            
            assert.isFalse([1,2].isEmpty());
            assert.isFalse([1].isEmpty());
        };
        
        this.test_OBJECT_isEmpty = function() {
            assert.isTrue({}.isEmpty());
            
            assert.isFalse({a: 1}.isEmpty());
        };
        
        this.test_STRING_startsWith = function() {
            assert.isTrue("test".startsWith('t'));
            assert.isTrue("test".startsWith('test'));
            assert.isTrue("test".startsWith(''));
            
            assert.isFalse("test".startsWith('tests'));
            assert.isFalse("test".startsWith('x'));
            assert.isFalse("test".startsWith('est'));
        };
        
        this.test_STRING_endsWith = function() {
            assert.isTrue("test".endsWith('t'));
            assert.isTrue("test".endsWith('est'));
            assert.isTrue("test".endsWith(''));
            
            assert.isFalse("test".endsWith('stest'));
            assert.isFalse("test".endsWith('x'));
            assert.isFalse("test".endsWith('tes'));
        };
        
        this.test_STRING_format = function() {
            assert.areEqual('a{0}c'.format('b'), 'abc');
            assert.areEqual('a{0}c{0}'.format('b'), 'abcb');
            assert.areEqual('a{0}c{1}e{2}g'.format('b', 'd', 'f'), 'abcdefg');
            assert.areEqual('a{0}c{1}e{2}g{0}'.format('b', 'd', 'f'), 'abcdefgb');
            assert.areEqual('a{0}c{1}e{2}g{0}'.format('b', 'd', 'f', 'z'), 'abcdefgb');
            assert.areEqual('{0}{1}'.format('{1}', '{0}'), '{1}{0}');
        };
    };
})();