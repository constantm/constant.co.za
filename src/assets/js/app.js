import vivus from 'vivus';

new vivus('icon-hammer', {duration: 100});
var v2 = new vivus('icon-webapp', {duration: 100, start: 'manual'});
var v3 = new vivus('icon-compass', {duration: 100, start: 'manual'});

setTimeout(function(){
	v2.play();
}, 400)
setTimeout(function(){
	v3.play();
}, 800)