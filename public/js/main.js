require.config({
    shim: {

    },
    paths: {
        backbone: "../../bower_components/backbone/backbone",
        jquery: "../../bower_components/jquery/dist/jquery",
        marionette: "../../bower_components/marionette/lib/core/backbone.marionette",
        requirejs: "../../bower_components/requirejs/require",
        underscore: "../../bower_components/underscore/underscore",
        "backbone.babysitter": "../../bower_components/backbone.babysitter/lib/backbone.babysitter",
        "backbone.wreqr": "../../bower_components/backbone.wreqr/lib/backbone.wreqr"
    },
    packages: [

    ]
});

require([
    "backbone",
    "marionette",
    "todos/todoModule"
], function (Backbone, Marionette, TodoModule) {

    var app = new Marionette.Application();

    app.addRegions({
        mainRegion:"#main-region"

    });

    var TodoModule = app.module("TodoModule", TodoModule);

    app.start();
});