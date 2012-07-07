(function() {
    window.screwdriver_string_ut = function() {
        this.test_STRING_startsWith = function() {
            assert.isTrue('test'.startsWith('t'));
            assert.isTrue('test'.startsWith('test'));
            assert.isTrue('test'.startsWith(''));
            
            assert.isFalse('test'.startsWith('tests'));
            assert.isFalse('test'.startsWith('x'));
            assert.isFalse('test'.startsWith('est'));
        };
        
        this.test_STRING_endsWith = function() {
            assert.isTrue('test'.endsWith('t'));
            assert.isTrue('test'.endsWith('est'));
            assert.isTrue('test'.endsWith(''));
            
            assert.isFalse('test'.endsWith('stest'));
            assert.isFalse('test'.endsWith('x'));
            assert.isFalse('test'.endsWith('tes'));
        };
        
        this.test_STRING_format = function() {
            assert.areEqual('a{0}c'.format('b'), 'abc');
            assert.areEqual('a{0}c{0}'.format('b'), 'abcb');
            assert.areEqual('a{0}c{1}e{2}g'.format('b', 'd', 'f'), 'abcdefg');
            assert.areEqual('a{0}c{1}e{2}g{0}'.format('b', 'd', 'f'), 'abcdefgb');
            assert.areEqual('a{0}c{1}e{2}g{0}'.format('b', 'd', 'f', 'z'), 'abcdefgb');
            assert.areEqual('{0}{1}'.format('{1}', '{0}'), '{1}{0}');
        };
        
        this.test_STRING_isEmailAddress = function() {
            assert.isTrue('screw@driver.com'.isEmailAddress());
            assert.isFalse('screwdriver'.isEmailAddress());
            assert.isFalse('@screwdriver.com'.isEmailAddress());
            assert.isFalse('screwdriver.com'.isEmailAddress());
            assert.isFalse('screw@driver'.isEmailAddress());
            assert.isFalse(''.isEmailAddress());
        };
        
        this.test_STRING_isPhoneNumber = function() {
            assert.isTrue('555 555 5555'.isPhoneNumber());
            assert.isTrue('(555) 555 5555'.isPhoneNumber());
            assert.isTrue('(555) 555-5555'.isPhoneNumber());
            assert.isTrue('555-555-5555'.isPhoneNumber());
            assert.isTrue('5555555555'.isPhoneNumber());
            assert.isFalse('55 55 55 55'.isPhoneNumber());
            assert.isFalse('55 55 55 55 55'.isPhoneNumber());
            assert.isFalse(''.isPhoneNumber());
        };
    };
})();