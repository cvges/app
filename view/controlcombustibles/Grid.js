Ext.define('cvges.view.controlcombustibles.Grid' ,{
	extend: 'Ext.container.Container',
	alias : 'widget.control',
	title: 'Control de Máquinas',
	layout: 
	{
		type: 'vbox'
	},
	items: 
	[
		{
			xtype: 'panel',
			items: 
			[
				{
					xtype:'button',
					text:'Nuevas lecturas',
					handler:'onNewRead'
				}
			]
			
		},
		{
			xtype: 'container',
			layout: 'hbox',
			name: 'datos1',
			items: [{
				xtype: 'panel',
				name: 'maquina1',
				html: 'Hola world'
			
			}]
		},
		{
			xtype: 'container',
			layout: 'hbox',
			name: 'datos2',
			items: [{
				xtype: 'panel',
				name: 'maquina2',
				html: 'Hello mundo'
			
			}],
		}
	]
	
});