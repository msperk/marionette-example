define([
        'todos/view/todoItemView',
        'text!todos/template/todoCompositeTemplate.html'
    ],
    function(TodoItemView, TodoCompositeTemplate) {

        var TodoView = Marionette.CompositeView.extend({
            tagName: "div",
            id: "todos",
            template: _.template(TodoCompositeTemplate),
            childView: TodoItemView,
            childViewContainer: "#content",
            initialize: function(options) {
                this.module = options.module;
            },
            childViewOptions:  function(model,index){
                return{
                    module: this.module
                };
            },
            ui: {
                "addTodo":"#addTodo",
                "todoname": "#nameInput"
            },
            events : {
                "click @ui.addTodo": "addTodo"
            },
            addTodo: function() {
                var name = this.ui.todoname.val();
                this.module.commands.execute("addTodo", name);
            }
        });

        return TodoView;
    });