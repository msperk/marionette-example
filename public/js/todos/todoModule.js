define([
    "todos/model/todoCollection",
    "todos/view/todoView",
    "todos/controller/todoController"
], function(TodoCollection, TodoView, TodoController) {
    var TodoModule = Marionette.Module.extend({
        initialize: function(moduleName, app, options){
            var radio = Backbone.Wreqr.radio.channel(moduleName);
            this.reqres = radio.reqres;
            this.commands = radio.commands;
            this.vent = radio.vent;

            var todoCollection = new TodoCollection([{name: "Todo 1"}, {name: "Todo 2"}, {name: "Todo 3"}, {name: "Todo 4"}]);

            var todoView = new TodoView({
                module: this,
                collection: todoCollection
            });
            new TodoController({
                module: this,
                collection: todoCollection
            });

            this.show = function(region){
                region.show(todoView);
            }
        }
    });

    return TodoModule;
});