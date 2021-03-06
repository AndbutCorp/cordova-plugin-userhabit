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

package io.userhabit.plugin.cordova;


import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CallbackContext;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import android.app.Activity;

import io.userhabit.model.UserhabitOnSurveyClosedHandler;
import io.userhabit.service.Userhabit;

/**
 * Cordova Userhabit Plugin
 */
public class UserhabitPlugin extends CordovaPlugin {

    @Override
    public boolean execute(String action, JSONArray args, final CallbackContext callbackContext) throws JSONException {
        if (action.equals("passCheckpoint")) {

			Userhabit.passCheckpoint(cordova.getActivity(), args.getString(0), new UserhabitOnSurveyClosedHandler() {
            
                @Override
                public void onSurveyClosed(Activity activity) {
                    callbackContext.success(); 
                }

            });

            return true;
        } else if (action.equals("setFragmentTag")) {

        	Userhabit.setFragmentTag(args.getString(0));
            
            callbackContext.success(); 

            return true;
        }
        return false;
    }
}