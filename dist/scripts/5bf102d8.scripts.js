"use strict";var app=angular.module("testappApp",["ngResource","ngAnimate"]);app.factory("instagram",["$resource",function(a){return{fetchPopular:function(b){var c=a("https://api.instagram.com/v1/tags/kpop/media/recent?client_id=:client_id&callback=JSON_CALLBACK",{client_id:"642176ece1e7445e99244cec26f4de1f"},{fetch:{method:"JSONP"}});c.fetch(function(a){b(a.data)})}}}]),app.controller("SwitchableGridController",["$scope","instagram",function(a,b){a.layout="grid",a.items=[],a.pics=[],b.fetchPopular(function(b){a.pics=b;for(var c=[],d=0,e=Math.ceil(a.pics.length/3),f=0;e>f;f++){d=3*f;var g={i1:a.pics[d]};a.pics[d+1]&&(g.i2=a.pics[d+1]),a.pics[d+2]&&(g.i3=a.pics[d+2]),c.push(g)}a.items=c})}]),angular.module("testappApp").controller("MainCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]);