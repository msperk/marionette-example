define([],
    function(){
        var TodoItemView = Marionette.Controller.extend({
            initialize: function(options){
                this.collection = options.collection;
                this.module = options.module;
                this.module.commands.setHandler("addTodo", this.addUser, this);
                this.module.commands.setHandler("removeTodo", this.removeUser, this);
            },
            addUser: function(name){
                this.collection.add({name:name});
            },
            removeUser: function(todo) {
                this.collection.remove(todo);
            }
        });

        return TodoItemView;
    });