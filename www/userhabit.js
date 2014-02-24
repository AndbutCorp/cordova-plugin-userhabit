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
    setFragmentTag: function(tag) {
        exec(null, null, "Userhabit", "setFragmentTag", [tag]);
    },
};