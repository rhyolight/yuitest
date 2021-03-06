
YUITest.CoverageFormat = {

    /**
     * Returns the coverage report in JSON format. This is the straight
     * JSON representation of the native coverage report.
     * @param {Object} coverage The coverage report object.
     * @return {String} A JSON-formatted string of coverage data.
     * @method JSON
     * @namespace YUITest.CoverageFormat
     */
    JSON: function(coverage){
        return JSON.stringify(coverage);
    },
    
    /**
     * Returns the coverage report in a JSON format compatible with
     * Xdebug. See <a href="http://www.xdebug.com/docs/code_coverage">Xdebug Documentation</a>
     * for more information. Note: function coverage is not available
     * in this format.
     * @param {Object} coverage The coverage report object.
     * @return {String} A JSON-formatted string of coverage data.
     * @method XdebugJSON
     * @namespace YUITest.CoverageFormat
     */    
    XdebugJSON: function(coverage){
    
        var report = {};
        Y.Object.each(coverage, function(value, name){
            report[name] = coverage[name].lines;
        });

        return JSON.stringify(coverage);
    }

};


  