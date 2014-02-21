

var exec = require('cordova/exec');

/**
 * 
 */

module.exports = {

    /**
     * Pass the checkpoint.
     *
     * @param {String}        The number of milliseconds to vibrate for.
     */
    passCheckpoint: function(name) {
        exec(null, null, "Userhabit", "passCheckpoint", [name]);
    },
};