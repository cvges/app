Ext.define('cvges.controller.controlcombustibles.combustiblesController', {
			extend : 'Ext.app.ViewController',
			alias : 'controller.combus',

			onNewRead : function() {
				console.log("Mensaje de log para controlador");
				//se abre la ventana para la carga de datos
				Ext.widget('lectura-carga');

			},
			onLecturaAceptar : function() {
				console.log("Se cargó una nueva lectura");
				this.getView().destroy();
				//Ext.widget('app-main');
			}
		});