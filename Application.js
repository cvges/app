/**
 * The main application class. An instance of this class is created by app.js when it calls
 * Ext.application(). This is the ideal place to handle application launch and initialization
 * details.
 */
Ext.define('cvges.Application', {
    extend: 'Ext.app.Application',
    
    name: 'cvges',

	views: [
        'cvges.view.login.Login',
        'cvges.view.main.Main',
		'cvges.view.mesadeentrada.Grid',
		'cvges.view.controlcombustibles.Grid'
    ],
	
    stores: [
        // TODO: add global / shared stores here
    ],
    
    launch: function () {
        // Check whether the browser supports LocalStorage
        // It's important to note that this type of application could use
        // any type of storage, i.e., Cookies, LocalStorage, etc.
        var supportsLocalStorage = Ext.supports.LocalStorage, 
            loggedIn;

        if (!supportsLocalStorage) {

            // Alert the user if the browser does not support localStorage
            Ext.Msg.alert('Tu navegador no soporta almaciento local');
            return;
        }

        // Check to see the current value of the localStorage key
        loggedIn = localStorage.getItem("TutorialLoggedIn");

        // This ternary operator determines the value of the TutorialLoggedIn key.
        // If TutorialLoggedIn isn't true, we display the login window,
        // otherwise, we display the main view        
        Ext.widget(loggedIn ? 'app-main' : 'login');
    }
});
