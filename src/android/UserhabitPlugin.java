package io.userhabit.plugin.cordova;


import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CallbackContext;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import io.userhabit.service.Userhabit;

/**
 *
 */
public class UserhabitPlugin extends CordovaPlugin {

    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
        if (action.equals("passCheckpoint")) {

			Userhabit.passCheckpoint(cordova.getActivity(), args.getString(0));

			callbackContext.success();

            return true;
        }
        return false;
    }
}