define([
        'text!todos/template/todoItemTemplate.html'
    ],
    function(TodoItemTemplate){
        var TodoItemView = Marionette.ItemView.extend({
            template: _.template(TodoItemTemplate),
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