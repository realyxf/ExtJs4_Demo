Ext.define('ExtJsApp.Application', {
    name: 'ExtJsApp',

    extend: 'Ext.app.Application',
    
    launch: function() {
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: [
                {
                    title: 'Hello Ext',
                    html : 'Hello! Welcome to Ext JS.'
                }
            ]
        });
    },

    views: [
        // TODO: add views here
    ],

    controllers: [
        // TODO: add controllers here
    ],

    stores: [
        // TODO: add stores here
    ]
});
