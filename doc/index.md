<!---
   Copyright 2014  AndbuT Corporation 

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
-->

# io.userhabit.plugin.cordova

This plugin provides to use Userhabit.

## Installation

    cordova plugin add https://github.com/AndbutCorp/cordova-plugin-userhabit.git

### Supported Platforms

- Android

### Example

    // if you want pass checkpoint
    cordova.userhabit.passCheckpoint('CHECKPOINT');

    // if you want pass checkpoint and add the event handler for completed surveys)
    cordova.userhabit.passCheckpoint('CHECKPOINT', function () { /* event handler for a complete */ });

    // if you want set the fragment tag
    cordova.userhabit.setFragmentTag('FRAGMENT_TAG');
