/*
    This file is generated and updated by Sencha Cmd. You can edit this file as
    needed for your application, but these edits will have to be merged by
    Sencha Cmd when upgrading.
*/

// Ext.application({
//     name: 'ExtJsApp',

//     extend: 'ExtJsApp.Application',

//     autoCreateViewport: true
// });

Ext.application({
    requires: ['Ext.container.Viewport'],
    name: 'AM',

    appFolder: 'app',

    controllers: [
        'Users'
    ],

    launch: function() {
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: [
                {
                    xtype: 'userlist'
                }
            ]
        });
    }
});
