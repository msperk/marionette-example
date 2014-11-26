define([
        'backbone',
        'todos/model/todoModel'
    ],
    function(Backbone, Todo){

        var Todos = Backbone.Collection.extend({
            model: Todo
        });

        return Todos;
    });