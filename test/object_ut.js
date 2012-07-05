(function() {
    window.screwdriver_object_ut = function() {
        this.test_OBJECT_isEmpty = function() {
            assert.isTrue({}.isEmpty());
            
            assert.isFalse({a: 1}.isEmpty());
        };
    };
})();