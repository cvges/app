Ext.define('cvges.view.controlcombustibles.controlCargaLectura' ,{
	extend : 'Ext.window.Window',
	alias : 'widget.lectura',
	title: 'Cargar nueva lectura',
	xtype: 'lectura-carga',
	requires: [
		'cvges.controller.controlcombustibles.combustiblesController','Ext.form.Panel'],
	controller: 'combus',
	viewModel : {
		type : 'main'
	},
	bodyPadding : 10,
	bind : {
		title : '{name}' + ' - Acceso exclusivo a funcionarios'
	},
	closable : false,
	autoShow : true,
	items : {
	xtype : 'form',
	url : '/cvges',
	reference : 'form',
	items : [{
				xtype : 'textfield',
				name : 'combus1',
				fieldLabel : 'Combustible 1',
				allowBlank : false
			}, {
				xtype : 'textfield',
				name : 'combus2',
				//inputType : 'password',
				fieldLabel : 'Combustible 2',
				allowBlank : false
			}, {
				xtype : 'displayfield',
				hideEmptyLabel : false,
				value : 'Ingrese los valores de la nueva lectura'
			}],
	buttons : [{
				text : 'Aceptar',
				formBind : true,
				listeners : {
					click : 'onLecturaAceptar'
				}
			}]
}
});