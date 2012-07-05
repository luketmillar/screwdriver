(function() {
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
    
})();