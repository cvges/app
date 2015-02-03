/**
 * This class is the main view for the application. It is specified in app.js as
 * the "autoCreateViewport" property. That setting automatically applies the
 * "viewport" plugin to promote that instance of this class to the body element.
 * 
 * TODO - Replace this content of this view to suite the needs of your
 * application.
 */
Ext.define('cvges.view.main.Main', {
			extend : 'Ext.container.Container',
			plugins : 'viewport',
			requires : ['cvges.controller.main.MainController','cvges.view.main.MainModel',],
			xtype : 'app-main',

			controller : 'main',
			viewModel : {
				type : 'main'
			},

			layout : {
				type : 'border'
			},

			items : [{
				xtype : 'panel',
				bind : {
					title : '{name}'
				},
				region : 'west',
				html : '',
				collapsible : false,
				collapsed : false,
				split : true,
				lbar : [{
							text : 'Control de máquinas',
							// icon: 'http://sencha.com/favicon.ico',
							handler : 'onControl'
						}, {
							text : 'Mesa de Entrada',
							handler : 'onEntrada'
						}, {
							text : 'Salir',
							handler : 'onSalir'
						}]
				,
					/*
					 * lbar: [{ xtype:'splitbutton', text: 'Menu Button',
					 * iconCls: 'add16', textAlign: 'left', menu: [{text: 'Menu
					 * Button 1'}] },'-',{ xtype:'splitbutton', text: 'Cut
					 * Selection', iconCls: 'add16', textAlign: 'left', menu:
					 * [{text: 'Cut Menu Item'}] }],
					 */
					/*
					 * items: [ { xtype: 'panel', layout: { // layout-specific
					 * configs go here type: 'accordion', titleCollapse: false,
					 * animate: true, activeOnTop: true },items: [{ title: 'D.G.
					 * Gabinete', html: 'Panel content!' },{ title: 'D.G.
					 * Jurídica', html: 'Panel content!' }], title: 'Menu',
					 * //html: '<h2>Contenido ejemplo.</h2>' } ],
					 */
				}, {
				region : 'center',
				xtype : 'tabpanel',
				reference : 'tabPanelMain',
				items : [{
							title : 'Inicio',
							html : '<h2>Contenido ejemplo.</h2>'
						}]
			}]
		});
