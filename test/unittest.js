(function() {
    var _passed_test = true;
    var _asserts = [];
    var _running_uts = false;
    var _failed_tests = 0;
    var _total_tests = 0;
    var _failed_asserts = 0;
    var _total_asserts = 0;
    
    window.ut = window.ut || {};
    
    ut.run = function() {
        _running_uts = true;
        _failed_tests = 0;
        _total_tests = 0;
        
        // find all of the unit test classes
        for (var prop in window) {
            if (window.hasOwnProperty(prop) && prop.endsWith('_ut')) {
                
                // instantiate the unit test object
                var ut = new window[prop]();
                
                // find all of the unit tests in this class
                for (var func in ut) {
                    if (ut.hasOwnProperty(func) && func.startsWith('test_')) {
                        
                        // reset the test status before running a test
                        _passed_test = true;
                        _asserts = [];
                        
                        // set up the test
                        ut.setup && ut.setup();
                        
                        // run the test
                        ut[func]();
                        
                        // tear down the test
                        ut.teardown && ut.teardown();
                        
                        // log the results of the test
                        if (_passed_test) {
                            console.log('passed -- ' + prop + '.' + func);
                        }
                        else {
                            console.log('failed -- ' + prop + '.' + func);
                            
                            // print out all of the individual assert results
                            for (var i = 0; i < _asserts.length; i++) {
                                console.log('\t' + _asserts[i]);
                            }
                            
                            _failed_tests++;
                        }
                        
                        _total_tests++;
                    }
                }
            }
        }
        
        if (_failed_asserts > 0) {            
            console.log('\nFAILED');
            console.log('   ' + _failed_tests + ' tests');
            console.log('   ' + _failed_asserts + ' asserts');
        }
        else {
            console.log('\nPASSED');
            console.log('   ' + _total_tests + ' tests');
            console.log('   ' + _total_asserts + ' asserts');
        }        
        _running_uts = false;
    };
    
    var a = window.assert = window.assert || {};

    a.isNotUndefined = function(value) {
        return assert(value !== undefined, 'isNotUndefined', value);
    };
    
    a.isUndefined = function(value) {
        return assert(value === undefined, 'isUndefined', value);
    };
    
    a.isNull = function(value) {
        return assert(value === null, 'isNull', value);
    };
    
    a.isNotNull = function(value) {
        return assert(value !== null, 'isNotNull', value);
    };
    
    a.isNullOrUndefined = function(value) {
        return assert(value == null, 'isNullOrUndefined', value);
    };
    
    a.isTrue = function(value) {
        return assert(value === true, 'isTrue', value);
    };

    a.isFalse = function(value) {
        return assert(value === false, 'isFalse', value);
    };

    a.areEqual = function(actual, expected) {
        return assert(actual === expected, 'areEqual', actual, expected);
    };
    
    a.areNotEqual = function(actual, expected) {
        return assert(actual !== expected, 'areNotEqual', actual, expected);
    };
    
    function assert (condition, test, a, b) {
        var result = 'passed';
        if (condition === false) {
            if (_running_uts) {
                _passed_test = false;
            }
            
            result = 'failed';
            
            _failed_asserts++;
        }
        
        _total_asserts++;
        
        // log the results to the correct spot
        var output = result + ' -- ' + test + '(' + a + (!!b ? ', ' + b : '') + ')';
        if (_running_uts) {
            _asserts.push(output);
        }
        else {
            console.log(output)
        }
        
        return result === 'passed';
    }
})();
