define([
        'todos/model/todoModel'
    ],
    function(Todo){

        var Todos = Backbone.Collection.extend({
            model: Todo
        });

        return Todos;
    });