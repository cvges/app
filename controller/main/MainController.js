/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('cvges.controller.main.MainController', {
    extend: 'Ext.app.ViewController',
	alias: 'controller.main',

    onSalir: function () {
        // Remove the localStorage key/value
        localStorage.removeItem('TutorialLoggedIn');
		
		// Add the Login Window
        Ext.widget('login');
		
        // Remove Main View
        this.getView().destroy();

        
    },
	onControl: function(){
		//console.log(this.lookupReference('tabPanelMain'));
		var tabPanelMain=this.lookupReference('tabPanelMain');
		if(!this.lookupReference('tabControl')){
			var	tab = Ext.widget('control');
				tab.closable=true;
				tab.reference='tabControl';
				//Ext.create('Ext.Panel', {reference:'tabControl',title:'Control de máquinas',html:'<img src="http://www.pgr.gov.py/files/logo-sgs.png"/>',closable:true,});
				tabPanelMain.add(tab);
				tabPanelMain.doLayout();
				tabPanelMain.setActiveTab(tab);
		}else{
			tabPanelMain.setActiveTab(this.lookupReference('tabControl'))
		}
	},
	onEntrada: function(){
		//console.log(this.lookupReference('tabPanelMain'));
		var tabPanelMain=this.lookupReference('tabPanelMain');
		if(!this.lookupReference('tabEntrada')){
			var	tab = Ext.widget('entradas');
			tab.closable=true;
			tab.reference='tabEntrada';
			tabPanelMain.add(tab);
			tabPanelMain.doLayout(); 
			tabPanelMain.setActiveTab(tab);
		}else{
			tabPanelMain.setActiveTab(this.lookupReference('tabEntrada'))
		}
	}
});
