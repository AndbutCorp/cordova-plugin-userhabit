/**
*   Copyright 2014  AndbuT Corporation 
*
*   Licensed under the Apache License, Version 2.0 (the "License");
*   you may not use this file except in compliance with the License.
*   You may obtain a copy of the License at
*
*       http://www.apache.org/licenses/LICENSE-2.0
*
*   Unless required by applicable law or agreed to in writing, software
*   distributed under the License is distributed on an "AS IS" BASIS,
*   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
*   See the License for the specific language governing permissions and
*   limitations under the License.
*/

var exec = require('cordova/exec'),
    channel = require('cordova/channel');


channel.createSticky('onCordovaInfoReady');
// Tell cordova channel to wait on the CordovaInfoReady event
channel.waitForInitialization('onCordovaInfoReady');

/**
 * 
 */
module.exports = {

    /**
     * Pass the checkpoint.
     *
     * @param {String}        The checkpoint name
     * @param {Function}      The success handler
     */
    passCheckpoint: function(name, success) {
        exec(success, null, "Userhabit", "passCheckpoint", [name]);
    },

    /**
     * set the Fragment Tag.
     *
     * @param {String}        The fragment tag
     * @param {Function}      The success handler
     */
    setFragmentTag: function(tag, success) {
        exec(success, null, "Userhabit", "setFragmentTag", [tag]);
    },
};


channel.onCordovaReady.subscribe(function() {
    // TODO: Implements initial codes
    // cordova.userhabit.setFragmentTag(window.location.href);
});