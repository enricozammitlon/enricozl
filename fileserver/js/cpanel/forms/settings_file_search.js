FR.editSettings = {};
FR.editSettings.formPanel = new FR.components.editForm({
	title: FR.T('File indexing'),
	layout: 'form', bodyStyle: 'padding:10px;',
	defaults: {width: 535}, autoScroll: true,
	items: [
		{
			xtype: 'fieldset',
			defaults: {width: 250},
			labelWidth: 160,
			items: [
				{
					xtype: 'radiogroup', vertical: true, columns: 1,
					fieldLabel: FR.T('Default search criteria'), id: 'settings[search_default_mode]',
					items: [
						{boxLabel: FR.T('Name'), name: 'm', inputValue: 'filename', checked: (FR.settings.search_default_mode == 'filename')},
						{boxLabel: FR.T('Metadata'), name: 'm', inputValue: 'meta', checked: (FR.settings.search_default_mode == 'meta')},
						{boxLabel: FR.T('Contents')+(FR.isPHP5?' (Requires PHP 7)':''), name: 'm', inputValue: 'contents', checked: (FR.settings.search_default_mode == 'contents'), disabled: (!parseInt(FR.settings.search_enable) || FR.isPHP5)}
					]
				},
				{
					xtype: 'combo',
					fieldLabel: FR.T('Metadata search mode'),
					name: 'settings[search_mode]', hiddenName: 'settings[search_mode]',
					autoCreate: true, mode: 'local', editable: false,
					displayField: 'name', valueField: 'id',
					triggerAction:'all', disableKeyFilter: true,
					value: FR.settings.search_mode, width: 150,
					store: new Ext.data.SimpleStore({fields: ['id', 'name'], data: [
						['broad', FR.T('Broad match')],
						['exact', FR.T('Exact match')]
					]}),
					helpText: FR.T('The default value is "Broad match".') +'<br />'+
							FR.T('If searching becomes slow, it is recommeneded to use the "Exact match" instead.') +'<br />'+
							FR.T('When "Broad match" is enabled, use <em>"keyword"</em> for exact match.') +'<br />'+
							FR.T('When "Exact match" is enabled, use <em>*keyword*</em> for broad match.')
				},
				{
					xtype: 'textfield',
					fieldLabel: FR.T('Search results limit'), width: 60,
					name: 'settings[search_result_limit]', value: FR.settings.search_result_limit,
					helpText: FR.T('The default value is 200. Larger numbers can cause the users browsers to freeze.')
				}
			]
		},
		{
			xtype: 'fieldset',
			checkboxToggle: {tag: 'input', type: 'checkbox', name: this.checkboxName || this.id + '-checkbox', id: 'settings[search_enable]'}, 
			checkboxName: 'settings[search_enable]',
			title: FR.T('Enable file indexing.')+(FR.isPHP5?' (Requires PHP 7)':''), animCollapse: true,
			collapsed: !parseInt(FR.settings.search_enable),
			labelWidth: 200, disabled: FR.isPHP5,
			listeners: {'expand': function() {if (!this.layoutPatched) {this.doLayout(false, true);this.layoutPatched = true;}}},
			items: [
				{
					xtype: 'fieldset',
					title: FR.T('Elasticsearch'),
					labelWidth: 200, width: 510,
					defaults: {width: 250},
					items: [
						{
							xtype: 'textfield',
							fieldLabel: FR.T('Host URL'),
							name: 'settings[search_elastic_host_url]', value: FR.settings.search_elastic_host_url
						},
						{
							xtype: 'panel', border: false, layout: 'hbox', width: 500,
							layoutConfig: {padding: 5}, bodyStyle: 'padding-left:200px',
							defaults:{margins:'0 0 0 0'},
							items: [
								{xtype: 'button', cls: 'fr-btn-default regular-case fr-btn-smaller fr-btn-nomargin', text: FR.T('Test server'), handler: function() {
										var params = FR.editSettings.formPanel.form.getValues();
										var output = FR.editSettings.formPanel.serverReply3; output.show();
										FR.utils.getAjaxOutput(FR.URLRoot+'/?module=cpanel&section=settings&page=file_search&action=checkElasticServer', params, output);
									}}
							]
						},
						{xtype: 'displayfield', ref: '../../serverReply3', value: 'test', style:'border:1px solid silver;padding:3px;', hidden: true}
					]
				},
				{
					xtype: 'fieldset',
					title: FR.T('Apache Tika'),
					labelWidth: 200, width: 510,
					defaults: {width: 250},
					items: [
						{
							xtype: 'textfield', ref: 'impath',
							fieldLabel: FR.T('Path to Apache Tika jar file'),
							name: 'settings[search_tika_path]', value: FR.settings.search_tika_path
						},
						{
							xtype: 'panel', border: false, layout: 'hbox', width: 500,
							layoutConfig: {padding: 5}, bodyStyle: 'padding-left:200px',
							defaults:{margins:'0 0 0 0'},
							items: [
								{xtype: 'button', cls: 'fr-btn-default regular-case fr-btn-smaller fr-btn-nomargin', text: FR.T('Check path'), handler: function() {
										var par = 'path='+encodeURIComponent(this.ownerCt.ownerCt.impath.getValue());
										var output = this.ownerCt.ownerCt.serverReply; output.show();
										FR.utils.getAjaxOutput(FR.URLRoot+'/?module=cpanel&section=settings&page=file_search&action=checkTikaPath', par, output);
									}}
							]
						},
						{xtype: 'displayfield', ref: 'serverReply', value: 'test', style:'border:1px solid silver;padding:3px;', hidden: true},
						{
							xtype: 'textfield',
							fieldLabel: FR.T('Apache Tika server hostname'),
							name: 'settings[search_tika_host]', value: FR.settings.search_tika_host,
							helpText: FR.T('If a hostname is set, then Apache Tika will be used in server mode.')
						},
						{
							xtype: 'textfield',
							fieldLabel: FR.T('Port number'), width: 50, ref: 'tikaurl',
							name: 'settings[search_tika_port]', value: FR.settings.search_tika_port,
							helpText: FR.T('The default Apache Tika port is %1').replace('%1', '9998')
						},
						{
							xtype: 'panel', border: false, layout: 'hbox', width: 500,
							layoutConfig: {padding: 5}, bodyStyle: 'padding-left:200px',
							defaults:{margins:'0 0 0 0'},
							items: [
								{xtype: 'button', cls: 'fr-btn-default regular-case fr-btn-smaller fr-btn-nomargin', text: FR.T('Test server'), handler: function() {
										var params = FR.editSettings.formPanel.form.getValues();
										var output = FR.editSettings.formPanel.serverReply2; output.show();
										FR.utils.getAjaxOutput(FR.URLRoot+'/?module=cpanel&section=settings&page=file_search&action=checkTikaServer', params, output);
									}}
							]
						},
						{xtype: 'displayfield', ref: '../../serverReply2', value: 'test', style:'border:1px solid silver;padding:3px;', hidden: true}
					]
				},
				{
					xtype: 'fieldset',
					defaults: {width: 250},
					items: [
						{
							xtype: 'textfield',
							fieldLabel: FR.T('Exclude files by extension'),
							name: 'settings[search_exclude_ext]', value: FR.settings.search_exclude_ext,
							helpText: FR.T('Example list:') + ' exe,dll,bin,db'
						},
						{
							xtype: 'displayfield',
							fieldLabel: FR.T('Number of queued operations'),
							value: FR.stats.queuedOps
						}
					]
				}
			]
		},
		{
			xtype: 'displayfield', hideLabel: true, style: 'color:gray', width: 600, value: FR.T('Requires a scheduled task which periodically runs the command line script "cron/process_search_index_queue.php". Do not enable without setting the task.'), hidden: parseInt(FR.settings.search_enable)
		}
	],
	tbar: [
		{
			text: FR.T('Save changes'), cls: 'fr-btn-primary',
			ref: 'saveBtn',
			handler: function() {
				var editForm = this.ownerCt.ownerCt;
				var params = editForm.form.getFieldValues();
				var extra = {};
				extra['settings[search_enable]'] = Ext.get('settings[search_enable]').dom.checked ? 1:0;
				extra['settings[search_default_mode]'] = Ext.getCmp('settings[search_default_mode]').getValue().getGroupValue();
				Ext.apply(params, extra);
				var opts = {
					url: FR.URLRoot+'/?module=cpanel&section=settings&action=save',
					maskText: 'Saving changes...',
					params: params
				};
				editForm.submitForm(opts);
			}
		}
	]
});
Ext.getCmp('appTab').add(FR.editSettings.formPanel);
Ext.getCmp('appTab').doLayout();