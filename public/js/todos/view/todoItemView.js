define([
        'backbone',
        'marionette'
    ],
    function(Backbone, Marionette){
        var TodoItemView = Marionette.ItemView.extend({
            template: "#todo-item",
            tagName: 'div',
            initialize: function(options) {
                this.module = options.module;
            },
            ui: {
                "remove": ".removeButton"
            },
            events: {
                "click @ui.remove": "removeTodo"
            },
            removeTodo: function() {
                this.module.commands.execute("removeTodo", this.model);
            }
        });

        return TodoItemView;
    });