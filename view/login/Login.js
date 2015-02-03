Ext.define("cvges.view.login.Login", {
			extend : 'Ext.window.Window',
			xtype : 'login',
			requires : ['cvges.controller.login.LoginController','Ext.form.Panel', 'cvges.view.main.MainModel',],
			viewModel : {
				type : 'main'
			},
			controller : 'login',
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
							name : 'username',
							fieldLabel : 'N° de documento',
							allowBlank : false
						}, {
							xtype : 'textfield',
							name : 'password',
							inputType : 'password',
							fieldLabel : 'Contraseña',
							allowBlank : false
						}, {
							xtype : 'displayfield',
							hideEmptyLabel : false,
							value : 'Enter any non-blank password'
						}],
				buttons : [{
							text : 'Login',
							formBind : true,
							listeners : {
								click : 'onLoginClick'
							}
						}]
			}
		});