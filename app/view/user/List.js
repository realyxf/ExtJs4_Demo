Ext.define('AM.view.user.List' ,{
    extend: 'Ext.grid.Panel',
    alias: 'widget.userlist',
    title: 'All Users',

    //don't need init to define the users
    store: 'Users',

    initComponent: function() {
        // this.store = {
        //     fields: ['name', 'age'],
        //     data  : [
        //         {name: 'Fennie', age: 18},
        //         {name: 'FF', age: 18}
        //     ]
        // };

        this.columns = [
            {header: 'Name',  dataIndex: 'name',  flex: 1},
            {header: 'Age', dataIndex: 'age', flex: 1}
        ];

        this.callParent(arguments);
    }
});