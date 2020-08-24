// Ext.define('AM.store.Users', {
//     extend: 'Ext.data.Store',
//     // fields: ['name', 'age'],
//     //dont need fields, can use model
//     model: 'AM.model.User',

//     data: [
//         {name: 'Fennie', age: 18},
//         {name: 'FF', age: 18}
//     ]
// });

Ext.define('AM.store.Users', {
    extend: 'Ext.data.Store',
    model: 'AM.model.User',
    autoLoad: true,

    proxy: {
        type: 'ajax',
        url: 'data/users.json',
        reader: {
            type: 'json',
            root: 'users',
            successProperty: 'success'
        }
    }
});