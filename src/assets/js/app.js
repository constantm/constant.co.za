import vivus from 'vivus';

new vivus('icon-hammer', {duration: 50});
var v2 = new vivus('icon-webapp', {duration: 50, start: 'manual'});
var v3 = new vivus('icon-compass', {duration: 50, start: 'manual'});

setTimeout(function(){
	v2.play();
}, 100)
setTimeout(function(){
	v3.play();
}, 200)