var a=document.querySelector('.a');	
var m=document.querySelector('.m');		

var b=document.querySelector('.b');
var l=document.querySelector('.l');

var c=document.querySelector('.c');
var k=document.querySelector('.k');

var d=document.querySelector('.d');
var i=document.querySelector('.i');

var e=document.querySelector('.e');
var h=document.querySelector('.h');

var f=document.querySelector('.f');
var g=document.querySelector('.g');

var j=document.querySelector('.j');
var n=document.querySelector('.n');
var o=document.querySelector('.o');

var p=document.querySelector('.p');
var q=document.querySelector('.q');
var r=document.querySelector('.r');

var s=document.querySelector('.s');
var t=document.querySelector('.t');
var u=document.querySelector('.u');

var click=0;
var clicks=0;
var clicking=0;
var clickon=0;
var clickoff=0;
var clicksing=0;
var clicker=0;
var clic=0;
var cli=0;
var cl=0;
var clk=0;
var cll=0;
var cla=0;
var clx=0;
var clp=0;
var clz=0;
var clo=0;
var clt=0;
var clj=0;
var clu=0;
var clg=0;
var clw=0;

var bu=document.querySelector('#button3');

var border=document.createElement('style');
document.body.appendChild(border);

function reverse() {
	
a.style.background='red';
m.style.background='blue';	

clickon++;
	
if(clickon===2) {
	
c.style.background='lightblue';	
g.style.background='lightblue';

a.style.background='';
m.style.background='';	
	
}
	
if(clickon===3) {
	
c.style.background='';	
g.style.background='';

a.style.background='';
m.style.background='';	
	
e.style.background='green';	
h.style.background='orange';
	
}

if(clickon===4) {
	
c.style.background='';	
g.style.background='';

a.style.background='';
m.style.background='';	
	
e.style.background='brown';	
h.style.background='gray';

k.style.background='black';
l.style.background='red';
	
}

if(clickon===5) {
	
c.style.background='';	
g.style.background='';

a.style.background='blue';
m.style.background='';	
	
e.style.background='';	
h.style.background='';

k.style.background='black';
l.style.background='';

d.style.background='blue';
	
}
	
}

function opposite() {
	
b.style.background='lightgreen';
l.style.background='blue';	
	
a.style.background='purple';
m.style.background='purple';
	
clickoff++;

if(clickoff===2) {

b.style.background='';
l.style.background='';	
	
a.style.background='';
m.style.background='';

d.style.background='blue';
e.style.background='blue';
f.style.background='blue';


}	

if(clickoff===3) {

b.style.background='';
l.style.background='';	
	
a.style.background='';
m.style.background='';

d.style.background='';
e.style.background='';
f.style.background='';

g.style.background='red';
h.style.background='brown';
i.style.background='gray';


}	

if(clickoff===4) {

b.style.background='';
l.style.background='green';	
	
a.style.background='';
m.style.background='green';

d.style.background='';
e.style.background='';
f.style.background='';

g.style.background='';
h.style.background='';
i.style.background='';

k.style.background='green';
c.style.background='';

}	

if(clickoff===5) {

b.style.background='';
l.style.background='';	
	
a.style.background='purple';
m.style.background='purple';

d.style.background='';
e.style.background='purple';
f.style.background='';

g.style.background='';
h.style.background='';
i.style.background='';

k.style.background='';
c.style.background='';

}	

if(clickoff===6) {

b.style.background='blue';
l.style.background='blue';	
	
a.style.background='blue';
m.style.background='blue';

d.style.background='blue';
e.style.background='blue';
f.style.background='blue';

g.style.background='blue';
h.style.background='blue';
i.style.background='blue';

k.style.background='blue';
c.style.background='blue';

alert('Pobeda');

document.querySelector('#a').innerHTML +='<a href="ucenje2.html">=> Sledeci nivo</a>';	


}	

	
}

function other() {

c.style.background='blue';
k.style.background='orange';

b.style.background='purple';
l.style.background='purple';		
a.style.background='purple';
m.style.background='purple';

clic++;

if(clic===2) {
	
c.style.background='yellow';
k.style.background='yellow';

b.style.background='yellow';
l.style.background='yellow';		
a.style.background='yellow';
m.style.background='yellow';

e.style.background='yellow';
g.style.background='yellow';
h.style.background='yellow';
i.style.background='yellow';	

d.style.background='yellow';
f.style.background='yellow';	
}

if(clic===3) {
	
c.style.background='red';
k.style.background='red';

b.style.background='gray';
l.style.background='gray';		
a.style.background='gray';
m.style.background='red';

e.style.background='red';
g.style.background='red';
h.style.background='gray';
i.style.background='red';	

d.style.background='gray';
f.style.background='gray';	
}

if(clic===4) {
	
c.style.background='brown';
k.style.background='brown';

b.style.background='brown';
l.style.background='brown';		
a.style.background='brown';
m.style.background='brown';

e.style.background='brown';
g.style.background='brown';
h.style.background='brown';
i.style.background='brown';	

d.style.background='brown';
f.style.background='brown';	

}

if(clic===5) {
	
c.style.background='red';
k.style.background='pink';

b.style.background='red';
l.style.background='pink';		
a.style.background='red';
m.style.background='pink';

e.style.background='red';
g.style.background='pink';
h.style.background='red';
i.style.background='pink';	

d.style.background='red';
f.style.background='pink';	

}

	
}

function another() {

d.style.background='blue';
i.style.background='red';

c.style.background='';
k.style.background='';
b.style.background='';
l.style.background='';		
a.style.background='';
m.style.background='';

clicksing++;

if(clicksing===2) {
	
d.style.background='red';
i.style.background='green';

c.style.background='green';
k.style.background='red';
b.style.background='yellow';
l.style.background='yellow';		
a.style.background='red';
m.style.background='green';	

h.style.background='yellow';
e.style.background='yellow';
f.style.background='green';
g.style.background='red';
	
}

if(clicksing===3) {
	
d.style.background='orange';
i.style.background='pink';

c.style.background='pink';
k.style.background='orange';
b.style.background='purple';
l.style.background='purple';		
a.style.background='orange';
m.style.background='pink';	

h.style.background='purple';
e.style.background='purple';
f.style.background='pink';
g.style.background='orange';
	
}

if(clicksing===4) {
	
d.style.background='brown';
i.style.background='gray';

c.style.background='gray';
k.style.background='brown';
b.style.background='purple';
l.style.background='purple';		
a.style.background='brown';
m.style.background='gray';	

h.style.background='purple';
e.style.background='purple';
f.style.background='red';
g.style.background='brown';
	
}
	
if(clicksing===5) {
	
d.style.background='yellow';
i.style.background='orange';

c.style.background='blue';
k.style.background='yellow';
b.style.background='orange';
l.style.background='blue';		
a.style.background='yellow';
m.style.background='orange';	

h.style.background='blue';
e.style.background='yellow';
f.style.background='orange';
g.style.background='blue';
	
}
	
}

function hower() {

e.style.background='purple';
h.style.background='blue';

d.style.background='purple';
i.style.background='purple';
c.style.background='purple';
k.style.background='purple';
b.style.background='purple';
l.style.background='purple';		
a.style.background='purple';
m.style.background='purple';

cli++;

if(cli===2) {
	
e.style.background='blue';
h.style.background='';

d.style.background='';
i.style.background='blue';
c.style.background='blue';
k.style.background='';
b.style.background='';
l.style.background='blue';		
a.style.background='blue';
m.style.background='';

f.style.background='';
g.style.background='blue';	
}

if(cli===3) {
	
e.style.background='';
h.style.background='blue';

d.style.background='blue';
i.style.background='';
c.style.background='';
k.style.background='blue';
b.style.background='blue';
l.style.background='';		
a.style.background='';
m.style.background='blue';

f.style.background='blue';
g.style.background='';	
}
	
	
if(cli===4) {
	
e.style.background='';
h.style.background='blue';

d.style.background='';
i.style.background='blue';
c.style.background='blue';
k.style.background='';
b.style.background='blue';
l.style.background='';		
a.style.background='blue';
m.style.background='';

f.style.background='';
g.style.background='blue';
	
}

if(cli===5) {
	
e.style.background='green';
h.style.background='gray';

d.style.background='green';
i.style.background='gray';
c.style.background='green';
k.style.background='gray';
b.style.background='green';
l.style.background='gray';		
a.style.background='green';
m.style.background='';

f.style.background='';
g.style.background='';
	
}

	
}

function sorder() {

f.style.background='brown';
g.style.background='blue';

e.style.background='purple';
h.style.background='purple';
d.style.background='purple';
i.style.background='purple';
c.style.background='purple';
k.style.background='purple';
b.style.background='purple';
l.style.background='purple';		
a.style.background='purple';
m.style.background='purple';

clicker++;

if(clicker===2) {

f.style.background='';
g.style.background='gray';

e.style.background='brown';
h.style.background='';
d.style.background='';
i.style.background='brown';
c.style.background='brown';
k.style.background='';
b.style.background='';
l.style.background='brown';		
a.style.background='brown';
m.style.background='';

}

if(clicker===3) {

f.style.background='';
g.style.background='';

e.style.background='';
h.style.background='purple';
d.style.background='';
i.style.background='';
c.style.background='';
k.style.background='';
b.style.background='';
l.style.background='';		
a.style.background='';
m.style.background='';

}
	
if(clicker===4) {

f.style.background='pink';
g.style.background='pink';

e.style.background='pink';
h.style.background='pink';
d.style.background='pink';
i.style.background='pink';
c.style.background='pink';
k.style.background='pink';
b.style.background='pink';
l.style.background='pink';		
a.style.background='pink';
m.style.background='orange';

}
	
if(clicker===5) {

f.style.background='brown';
g.style.background='brown';

e.style.background='purple';
h.style.background='brown';
d.style.background='brown';
i.style.background='purple';
c.style.background='brown';
k.style.background='brown';
b.style.background='purple';
l.style.background='brown';		
a.style.background='brown';
m.style.background='purple';

}

	
}

function order() {

g.style.background='green';
a.style.background='yellow';
c.style.background='blue';
	
b.style.background='purple';
d.style.background='purple';
e.style.background='purple';
i.style.background='purple';
k.style.background='purple';
m.style.background='purple';
h.style.background='purple';
f.style.background='purple';
l.style.background='purple';

cla++;

if(cla===2)  {
	
g.style.background='';
a.style.background='black';
c.style.background='';
	
b.style.background='';
d.style.background='';
e.style.background='gray';
i.style.background='black';
k.style.background='';
m.style.background='';
h.style.background='';
f.style.background='';
l.style.background='';	
		
}

if(cla===3)  {
	
g.style.background='';
a.style.background='black';
c.style.background='black';
	
b.style.background='red';
d.style.background='yellow';
e.style.background='blue';
i.style.background='';
k.style.background='';
m.style.background='';
h.style.background='';
f.style.background='yellow';
l.style.background='';	
		
}

if(cla===4)  {
	
g.style.background='';
a.style.background='red';
c.style.background='';
	
b.style.background='';
d.style.background='red';
e.style.background='';
i.style.background='';
k.style.background='yellow';
m.style.background='';
h.style.background='yellow';
f.style.background='';
l.style.background='';	
		
}

if(cla===5)  {
	
g.style.background='';
a.style.background='';
c.style.background='';
	
b.style.background='';
d.style.background='';
e.style.background='';
i.style.background='blue';
k.style.background='blue';
m.style.background='';
h.style.background='';
f.style.background='';
l.style.background='green';	
		
}

	
}

function disorder() {

b.style.background='blue';
d.style.background='blue';
e.style.background='red';	
h.style.background='blue';
f.style.background='blue';

a.style.background='purple';	
c.style.background='purple';		
k.style.background='purple';	
i.style.background='purple';	
l.style.background='purple';	
g.style.background='purple';	
m.style.background='purple';

clx++;

if(clx===2)  {
	
g.style.background='pink';
a.style.background='pink';
c.style.background='pink';
	
b.style.background='pink';
d.style.background='pink';
e.style.background='pink';
i.style.background='pink';
k.style.background='pink';
m.style.background='pink';
h.style.background='pink';
f.style.background='pink';
l.style.background='pink';	
		
}

if(clx===3)  {
	
g.style.background='gray';
a.style.background='gray';
c.style.background='gray';
	
b.style.background='gray';
d.style.background='gray';
e.style.background='gray';
i.style.background='gray';
k.style.background='gray';
m.style.background='gray';
h.style.background='gray';
f.style.background='gray';
l.style.background='gray';	
		
}

if(clx===4)  {
	
g.style.background='brown';
a.style.background='red';
c.style.background='yellow';
	
b.style.background='blue';
d.style.background='blue';
e.style.background='blue';
i.style.background='orange';
k.style.background='orange';
m.style.background='orange';
h.style.background='green';
f.style.background='green';
l.style.background='green';	
		
}

if(clx===5)  {
	
g.style.background='';
a.style.background='';
c.style.background='';
	
b.style.background='';
d.style.background='';
e.style.background='purple';
i.style.background='';
k.style.background='';
m.style.background='';
h.style.background='';
f.style.background='';
l.style.background='';	
		
}
	
}

function der() {

i.style.background='pink';
a.style.background='orange';
k.style.background='blue';
g.style.background='blue';

b.style.background='purple';
c.style.background='purple';
d.style.background='purple';
e.style.background='purple';
f.style.background='purple';
m.style.background='purple';
l.style.background='purple';

click++;

if(click===2)  {
	
g.style.background='';
a.style.background='';
c.style.background='';
	
b.style.background='';
d.style.background='';
e.style.background='';
i.style.background='';
k.style.background='blue';
m.style.background='';
h.style.background='';
f.style.background='';
l.style.background='';	
		
}

if(click===3)  {
	
g.style.background='';
a.style.background='';
c.style.background='';
	
b.style.background='';
d.style.background='';
e.style.background='';
i.style.background='';
k.style.background='';
m.style.background='blue';
h.style.background='';
f.style.background='';
l.style.background='';	
		
}

if(click===4)  {
	
g.style.background='';
a.style.background='';
c.style.background='';
	
b.style.background='';
d.style.background='';
e.style.background='';
i.style.background='';
k.style.background='blue';
m.style.background='';
h.style.background='';
f.style.background='';
l.style.background='';	
		
}

if(click===5)  {
	
g.style.background='';
a.style.background='';
c.style.background='';
	
b.style.background='';
d.style.background='';
e.style.background='blue';
i.style.background='';
k.style.background='';
m.style.background='';
h.style.background='';
f.style.background='';
l.style.background='';	
		
}

}

function dre() {

e.style.background='blue';
b.style.background='';
c.style.background='blue';
d.style.background='red';
m.style.background='red';

a.style.background='purple';
f.style.background='purple';
g.style.background='purple';
k.style.background='purple';
h.style.background='purple';
i.style.background='purple';
l.style.background='purple';

clicking++;

if(clicking===2) {
	
a.style.background='blue';	
b.style.background='blue';	
c.style.background='blue';

d.style.background='purple';
e.style.background='purple';
f.style.background='purple';

g.style.background='red';
h.style.background='red';
i.style.background='red';

k.style.background='purple';
l.style.background='purple';
m.style.background='purple';
	
 }
 
if(clicking===3) {
	
a.style.background='';	
b.style.background='';	
c.style.background='';

d.style.background='';
e.style.background='';
f.style.background='';

g.style.background='';
h.style.background='';
i.style.background='';

k.style.background='';
l.style.background='yellow';
m.style.background='';
	
}
 
if(clicking===4) {
	
a.style.background='red';	
b.style.background='red';	
c.style.background='red';

d.style.background='yellow';
e.style.background='yellow';
f.style.background='yellow';

g.style.background='green';
h.style.background='green';
i.style.background='green';

k.style.background='blue';
l.style.background='blue';
m.style.background='blue';
	
}

if(clicking===5) {
	
a.style.background='orange';	
b.style.background='orange';	
c.style.background='orange';

d.style.background='pink';
e.style.background='pink';
f.style.background='pink';

g.style.background='gray';
h.style.background='gray';
i.style.background='gray';

k.style.background='brown';
l.style.background='brown';
m.style.background='brown';
	
}
 
 
}

function den() {
	
l.style.background='blue';

a.style.background='purple';
f.style.background='blue';
g.style.background='blue';
k.style.background='blue';
h.style.background='blue';
i.style.background='blue';
b.style.background='blue';
c.style.background='blue';
d.style.background='blue';
m.style.background='blue';
e.style.background='blue';

clw++;

if(clw===2) {
	
a.style.background='gray';	
b.style.background='black';	
c.style.background='gray';

d.style.background='';
e.style.background='';
f.style.background='';

g.style.background='gray';
h.style.background='black';
i.style.background='gray';

k.style.background='';
l.style.background='';
m.style.background='';
	
}

if(clw===3) {
	
a.style.background='';	
b.style.background='';	
c.style.background='';

d.style.background='red';
e.style.background='brown';
f.style.background='black';

g.style.background='';
h.style.background='';
i.style.background='';

k.style.background='red';
l.style.background='brown';
m.style.background='black';
	
}

if(clw===4) {
	
a.style.background='pink';	
b.style.background='';	
c.style.background='pink';

d.style.background='';
e.style.background='pink';
f.style.background='';

g.style.background='purple';
h.style.background='';
i.style.background='purple';

k.style.background='';
l.style.background='purple';
m.style.background='';
	
}

if(clw===5) {
	
a.style.background='black';	
b.style.background='blue';	
c.style.background='black';

d.style.background='green';
e.style.background='black';
f.style.background='orange';

g.style.background='black';
h.style.background='yellow';
i.style.background='black';

k.style.background='';
l.style.background='';
m.style.background='';
	
}

	
}

function dent() {

l.style.background='blue';

a.style.background='purple';
f.style.background='purple';
g.style.background='purple';
k.style.background='purple';
h.style.background='purple';
i.style.background='purple';
b.style.background='purple';
c.style.background='purple';
d.style.background='purple';
m.style.background='purple';
e.style.background='purple';		

clicks++;

if(clicks===2) {

b.style.background='blue';	
e.style.background='blue';	
h.style.background='blue';	
l.style.background='green';

a.style.background='purple';
c.style.background='purple';
d.style.background='purple';
f.style.background='purple';
g.style.background='purple';
i.style.background='purple';
k.style.background='purple';
m.style.background='purple';
	
}

if(clicks===3) {
	
a.style.background='brown';	
b.style.background='brown';	
c.style.background='brown';

d.style.background='brown';
e.style.background='brown';
f.style.background='brown';

g.style.background='brown';
h.style.background='brown';
i.style.background='brown';

k.style.background='';
l.style.background='';
m.style.background='';
	
}

if(clicks===4) {
	
a.style.background='blue';	
b.style.background='blue';	
c.style.background='blue';

d.style.background='blue';
e.style.background='blue';
f.style.background='blue';

g.style.background='blue';
h.style.background='blue';
i.style.background='blue';

k.style.background='';
l.style.background='';
m.style.background='';
	
}

if(clicks===5) {
	
a.style.background='yellow';	
b.style.background='yellow';	
c.style.background='yellow';

d.style.background='yellow';
e.style.background='yellow';
f.style.background='yellow';

g.style.background='yellow';
h.style.background='yellow';
i.style.background='yellow';

k.style.background='';
l.style.background='';
m.style.background='';
	
}
	
}


function startOver() {
	
location.reload();
	
}


function jok() {
	
a.style.background='orange';	

clicks++;

if(clicks===2) {

a.style.background='blue';
b.style.background='';
c.style.background='blue';
d.style.background='';
e.style.background='blue';
f.style.background='';
g.style.background='green';
h.style.background='';
i.style.background='green';
}	

if(clicks===3) {

a.style.background='blue';
b.style.background='';
c.style.background='';
d.style.background='';
e.style.background='blue';
f.style.background='';
g.style.background='yellow';
h.style.background='';
i.style.background='yellow';
}	

if(clicks===4) {

a.style.background='';
b.style.background='green';
c.style.background='green';
d.style.background='green';
e.style.background='green';
f.style.background='red';
g.style.background='red';
h.style.background='red';
i.style.background='';
}	

if(clicks===5) {

a.style.background='red';
b.style.background='red';
c.style.background='red';
d.style.background='red';
e.style.background='red';
f.style.background='red';
g.style.background='blue';
h.style.background='blue';
i.style.background='blue';
}	
	
}

function mok() {
	
b.style.background='orange';	
a.style.background='purple';
	
clicking++;	
	
if(clicking===2) {

a.style.background='';
b.style.background='';
c.style.background='';
d.style.background='';
e.style.background='';
f.style.background='';
g.style.background='yellow';
h.style.background='yellow';
i.style.background='yellow';


}	

if(clicking===3) {

a.style.background='brown';
b.style.background='';
c.style.background='brown';
d.style.background='brown';
e.style.background='';
f.style.background='brown';
g.style.background='brown';
h.style.background='';
i.style.background='brown';


}	

if(clicking===4) {

a.style.background='';
b.style.background='';
c.style.background='';
d.style.background='blue';
e.style.background='';
f.style.background='blue';
g.style.background='';
h.style.background='blue';
i.style.background='';


}	

if(clicking===5) {

a.style.background='';
b.style.background='';
c.style.background='red';
d.style.background='';
e.style.background='';
f.style.background='';
g.style.background='';
h.style.background='';
i.style.background='';


}	

if(clicking===6) {

a.style.background='';
b.style.background='';
c.style.background='';
d.style.background='orange';
e.style.background='';
f.style.background='';
g.style.background='';
h.style.background='';
i.style.background='';


}	
	
}

function rok() {

c.style.background='blue';
a.style.background='blue';	
b.style.background='purple';	

clicker++;

if(clicker===2) {
	
d.style.background='darkblue';	
e.style.background='darkblue';		
f.style.background='darkblue';	

a.style.background='';	
b.style.background='';		
c.style.background='';	

g.style.background='';	
h.style.background='';		
i.style.background='';	

	
}

if(clicker===3) {
	
d.style.background='';	
e.style.background='purple';		
f.style.background='';	

a.style.background='';	
b.style.background='';		
c.style.background='purple';	

g.style.background='lightblue';	
h.style.background='';		
i.style.background='';	

	
}
	
if(clicker===4) {
	
d.style.background='';	
e.style.background='';		
f.style.background='blue';	

a.style.background='blue';	
b.style.background='blue';		
c.style.background='blue';	

g.style.background='blue';	
h.style.background='blue';		
i.style.background='';	

	
}

if(clicker===5) {

d.style.background='';	
e.style.background='purple';		
f.style.background='';	

a.style.background='purple';	
b.style.background='';		
c.style.background='';	

g.style.background='';	
h.style.background='';		
i.style.background='purple';

}	

if(clicker===6) {

d.style.background='yellow';	
e.style.background='';		
f.style.background='';	

a.style.background='';	
b.style.background='';		
c.style.background='yellow';	

g.style.background='';	
h.style.background='';		
i.style.background='yellow';

}	

if(clicker===7) {

d.style.background='blue';	
e.style.background='blue';		
f.style.background='blue';	

a.style.background='blue';	
b.style.background='blue';		
c.style.background='blue';	

g.style.background='blue';	
h.style.background='blue';		
i.style.background='blue';

alert('Pobeda');

document.querySelector('#c').innerHTML +='<a href="ucenje.html">SLEDECI NIVO</a>';

}	
	
}

function hok() {

d.style.background='blue';
b.style.background='blue';	
c.style.background='red';
a.style.background='purple';	
	
cli++;	
	
if(cli===2) {

a.style.background='yellow';
b.style.background='yellow';
c.style.background='yellow';
d.style.background='yellow';
e.style.background='yellow';
f.style.background='yellow';
g.style.background='yellow';
h.style.background='yellow';
i.style.background='purple';

}	

if(cli===3) {

a.style.background='';
b.style.background='';
c.style.background='brown';
d.style.background='';
e.style.background='';
f.style.background='';
g.style.background='';
h.style.background='';
i.style.background='purple';

}		

if(cli===4) {

a.style.background='blue';
b.style.background='blue';
c.style.background='blue';
d.style.background='';
e.style.background='blue';
f.style.background='blue';
g.style.background='blue';
h.style.background='blue';
i.style.background='blue';

}		

if(cli===4) {

a.style.background='';
b.style.background='blue';
c.style.background='blue';
d.style.background='blue';
e.style.background='blue';
f.style.background='blue';
g.style.background='blue';
h.style.background='blue';
i.style.background='blue';

}		
	
}

function tok() {

e.style.background='blue';
d.style.background='purple';
c.style.background='blue';
a.style.background='lightgreen';	
b.style.background='blue';	

clicksing++;

if(clicksing===2) {
	
a.style.background='red';
b.style.background='';
c.style.background='';	
d.style.background='';
e.style.background='';
f.style.background='';
g.style.background='';
h.style.background='';
i.style.background='red';
	
}

if(clicksing===3) {
	
a.style.background='';
b.style.background='yellow';
c.style.background='';	
d.style.background='';
e.style.background='';
f.style.background='';
g.style.background='';
h.style.background='black';
i.style.background='';
	
}

if(clicksing===4) {
	
a.style.background='';
b.style.background='';
c.style.background='green';	
d.style.background='';
e.style.background='';
f.style.background='';
g.style.background='green';
h.style.background='';
i.style.background='';
	
}

if(clicksing===5) {
	
a.style.background='';
b.style.background='';
c.style.background='';	
d.style.background='blue';
e.style.background='';
f.style.background='blue';
g.style.background='';
h.style.background='';
i.style.background='';
	
}

if(clicksing===6) {
	
a.style.background='';
b.style.background='';
c.style.background='';	
d.style.background='';
e.style.background='brown';
f.style.background='';
g.style.background='';
h.style.background='';
i.style.background='';
	
}
	
}

function kok() {

f.style.background='purple';
e.style.background='purple';
d.style.background='purple';
c.style.background='purple';
a.style.background='purple';	
b.style.background='blue';	
	
clickon++;

if(clickon===2) {

a.style.background='';
b.style.background='';
c.style.background='';
d.style.background='';
e.style.background='';
f.style.background='';
g.style.background='orange';
h.style.background='';
i.style.background='';

}	

if(clickon===3) {

a.style.background='blue';
b.style.background='blue';
c.style.background='blue';
d.style.background='blue';
e.style.background='';
f.style.background='blue';
g.style.background='blue';
h.style.background='blue';
i.style.background='blue';

}	

if(clickon===4) {

a.style.background='';
b.style.background='';
c.style.background='';
d.style.background='';
e.style.background='';
f.style.background='pink';
g.style.background='';
h.style.background='';
i.style.background='';

}	

if(clickon===5) {

a.style.background='brown';
b.style.background='yellow';
c.style.background='brown';
d.style.background='yellow';
e.style.background='brown';
f.style.background='yellow';
g.style.background='brown';
h.style.background='yellow';
i.style.background='brown';

}	
	
}

function pok() {

g.style.background='blue';
f.style.background='blue';
e.style.background='blue';
d.style.background='blue';
c.style.background='blue';
a.style.background='yellow';	
b.style.background='purple';	

click++;

if(click===2) {
	
a.style.background='';	
b.style.background='';
c.style.background='';
d.style.background='';
e.style.background='orange';
f.style.background='';
g.style.background='';
h.style.background='';
i.style.background='';
	
}

if(click===3) {
	
a.style.background='';	
b.style.background='';
c.style.background='';
d.style.background='black';
e.style.background='';
f.style.background='';
g.style.background='';
h.style.background='';
i.style.background='';
	
}

if(click===4) {
	
a.style.background='';	
b.style.background='';
c.style.background='';
d.style.background='red';
e.style.background='';
f.style.background='';
g.style.background='';
h.style.background='';
i.style.background='';
	
}

if(click===5) {
	
a.style.background='orange';	
b.style.background='orange';
c.style.background='orange';
d.style.background='orange';
e.style.background='orange';
f.style.background='orange';
g.style.background='orange';
h.style.background='orange';
i.style.background='orange';
	
}



if(click===6) {

i.style.background='blue';
h.style.background='blue';
g.style.background='blue';
f.style.background='blue';
e.style.background='blue';
d.style.background='blue';
c.style.background='blue';
a.style.background='blue';	
b.style.background='blue';	

alert('Pobeda');

document.querySelector('#c').innerHTML +='<a href="ucenje.html">=> Sledeci nivo</a>';

}
	
	
}

function bok() {

h.style.background='red';
g.style.background='purple';
f.style.background='purple';
e.style.background='purple';
d.style.background='purple';
c.style.background='purple';
a.style.background='purple';	
b.style.background='purple';	

clickoff++;

if(clickoff===2) {
	
a.style.background='green';	
b.style.background='green';	
c.style.background='green';
d.style.background='green';	
e.style.background='green';
f.style.background='green';
g.style.background='green';
h.style.background='green';
i.style.background='green';

}

if(clickoff===3) {
	
a.style.background='blue';	
b.style.background='blue';	
c.style.background='blue';
d.style.background='pink';	
e.style.background='pink';
f.style.background='pink';
g.style.background='gray';
h.style.background='gray';
i.style.background='gray';

}

if(clickoff===4) {
	
a.style.background='';	
b.style.background='';	
c.style.background='';
d.style.background='';	
e.style.background='';
f.style.background='blue';
g.style.background='';
h.style.background='';
i.style.background='';

}

if(clickoff===5) {
	
a.style.background='blue';	
b.style.background='blue';	
c.style.background='';
d.style.background='blue';	
e.style.background='blue';
f.style.background='';
g.style.background='blue';
h.style.background='blue';
i.style.background='blue';

}

if(clickoff===6) {
	
a.style.background='';	
b.style.background='';	
c.style.background='';
d.style.background='brown';	
e.style.background='';
f.style.background='';
g.style.background='';
h.style.background='';
i.style.background='';

}

if(clickoff===7) {
	
a.style.background='';	
b.style.background='';	
c.style.background='';
d.style.background='';	
e.style.background='';
f.style.background='';
g.style.background='purple';
h.style.background='';
i.style.background='';

}		
		
if(clickoff===8) {
	
a.style.background='';	
b.style.background='blue';	
c.style.background='blue';
d.style.background='blue';	
e.style.background='blue';
f.style.background='blue';
g.style.background='blue';
h.style.background='blue';
i.style.background='';

}		
		
}

function ook() {

i.style.background='purple';
h.style.background='blue';
g.style.background='blue';
f.style.background='blue';
e.style.background='blue';
d.style.background='blue';
c.style.background='blue';
a.style.background='blue';	
b.style.background='blue';	

clic++;

if(clic===2) {
	
a.style.background='purple';	
b.style.background='';
c.style.background='purple';
d.style.background='';
e.style.background='purple';
f.style.background='';
g.style.background='purple';
h.style.background='';
i.style.background='purple';
	
}

if(clic===3) {
	
a.style.background='';	
b.style.background='purple';
c.style.background='';
d.style.background='purple';
e.style.background='';
f.style.background='purple';
g.style.background='';
h.style.background='purple';
i.style.background='';
	
}

if(clic===4) {
	
a.style.background='';	
b.style.background='purple';
c.style.background='';
d.style.background='';
e.style.background='';
f.style.background='';
g.style.background='';
h.style.background='';
i.style.background='';
	
}

if(clic===5) {
	
a.style.background='green';	
b.style.background='green';
c.style.background='green';
d.style.background='blue';
e.style.background='';
f.style.background='blue';
g.style.background='';
h.style.background='';
i.style.background='blue';
	
}

if(clic===6) {
	
a.style.background='';	
b.style.background='blue';
c.style.background='blue';
d.style.background='blue';
e.style.background='blue';
f.style.background='blue';
g.style.background='';
h.style.background='blue';
i.style.background='blue';
	
}

	
}




function few() {
	
a.style.background='hotpink';
c.style.background='plum';	
m.style.background='tomato';	

clx++;

if(clx===2) {

a.style.background='';
b.style.background='hotpink';	
c.style.background='';
d.style.background='plum';
e.style.background='';
f.style.background='tomato';

g.style.background='';
h.style.background='hotpink';
i.style.background='';
j.style.background='plum';
k.style.background='';
l.style.background='tomato';
m.style.background='';
n.style.background='';
o.style.background='';	

}	

if(clx===3) {

a.style.background='hotpink';
b.style.background='hotpink';	
c.style.background='hotpink';
d.style.background='plum';
e.style.background='plum';
f.style.background='plum';

g.style.background='tomato';
h.style.background='tomato';
i.style.background='tomato';
j.style.background='hotpink';
k.style.background='hotpink';
l.style.background='hotpink';
m.style.background='plum';
n.style.background='plum';
o.style.background='plum';	

}	

if(clx===4) {

a.style.background='plum';
b.style.background='plum';	
c.style.background='plum';
d.style.background='tomato';
e.style.background='tomato';
f.style.background='tomato';

g.style.background='hotpink';
h.style.background='hotpink';
i.style.background='hotpink';
j.style.background='plum';
k.style.background='plum';
l.style.background='plum';
m.style.background='tomato';
n.style.background='tomato';
o.style.background='tomato';	

}	

if(clx===5) {

a.style.background='tomato';
b.style.background='tomato';	
c.style.background='tomato';
d.style.background='hotpink';
e.style.background='hotpink';
f.style.background='hotpink';

g.style.background='plum';
h.style.background='plum';
i.style.background='plum';
j.style.background='tomato';
k.style.background='tomato';
l.style.background='tomato';
m.style.background='hotpink';
n.style.background='hotpink';
o.style.background='hotpink';	

}	

	
}

function bew() {

b.style.background='purple';
d.style.background='orange';
f.style.background='silver';
	
a.style.background='purple';
c.style.background='purple';	
m.style.background='purple';	

clicks++;

if(clicks===2) {
	
a.style.background='yellowgreen';
b.style.background='yellowgreen';	
c.style.background='yellowgreen';
d.style.background='yellowgreen';
e.style.background='yellowgreen';
f.style.background='yellowgreen';

g.style.background='yellowgreen';
h.style.background='yellowgreen';
i.style.background='yellowgreen';
j.style.background='yellowgreen';
k.style.background='yellowgreen';
l.style.background='yellowgreen';
m.style.background='yellowgreen';
n.style.background='yellowgreen';
o.style.background='yellowgreen';		
		
}
	
if(clicks===3) {
	
a.style.background='silver';
b.style.background='silver';	
c.style.background='silver';
d.style.background='silver';
e.style.background='silver';
f.style.background='silver';

g.style.background='wheat';
h.style.background='wheat';
i.style.background='wheat';
j.style.background='wheat';
k.style.background='wheat';
l.style.background='wheat';
m.style.background='wheat';
n.style.background='wheat';
o.style.background='wheat';		
		
}

if(clicks===4) {
	
a.style.background='black';
b.style.background='yellow';	
c.style.background='black';
d.style.background='yellow';
e.style.background='black';
f.style.background='yellow';

g.style.background='black';
h.style.background='yellow';
i.style.background='black';
j.style.background='yellow';
k.style.background='black';
l.style.background='yellow';
m.style.background='black';
n.style.background='yellow';
o.style.background='black';		
		
}

if(clicks===5) {
	
a.style.background='yellow';
b.style.background='black';	
c.style.background='yellow';
d.style.background='black';
e.style.background='yellow';
f.style.background='black';

g.style.background='yellow';
h.style.background='black';
i.style.background='yellow';
j.style.background='black';
k.style.background='yellow';
l.style.background='black';
m.style.background='yellow';
n.style.background='black';
o.style.background='yellow';		
		
}

	
}

function sew() {

e.style.background='blue';
g.style.background='blue';
h.style.background='blue';

b.style.background='purple';
d.style.background='purple';
f.style.background='purple';
	
a.style.background='purple';
c.style.background='purple';	
m.style.background='purple';	

clicking++;

if(clicking===2) {
	
a.style.background='pink';
b.style.background='pink';		
c.style.background='pink';	
d.style.background='pink';	
e.style.background='pink';
f.style.background='pink';
g.style.background='pink';
h.style.background='pink';
i.style.background='pink';
j.style.background='pink';
k.style.background='pink';
l.style.background='pink';
m.style.background='pink';
n.style.background='pink';
o.style.background='pink';
	
}
	
if(clicking===3) {
	
a.style.background='chocolate';
b.style.background='chocolate';		
c.style.background='chocolate';	
d.style.background='chocolate';	
e.style.background='chocolate';
f.style.background='chocolate';
g.style.background='chocolate';
h.style.background='chocolate';
i.style.background='chocolate';
j.style.background='chocolate';
k.style.background='chocolate';
l.style.background='chocolate';
m.style.background='chocolate';
n.style.background='chocolate';
o.style.background='chocolate';
	
}

if(clicking===4) {
	
a.style.background='lightblue';
b.style.background='lightblue';	
c.style.background='lightblue';
d.style.background='lightblue';
e.style.background='lightblue';
f.style.background='lightblue';

g.style.background='lightblue';
h.style.background='lightblue';
i.style.background='lightblue';
j.style.background='lightblue';
k.style.background='lightblue';
l.style.background='lightblue';
m.style.background='lightblue';
n.style.background='lightblue';
o.style.background='lightblue';		
		
}

if(clicking===5) {
	
a.style.background='khaki';
b.style.background='khaki';	
c.style.background='khaki';
d.style.background='khaki';
e.style.background='khaki';
f.style.background='khaki';

g.style.background='khaki';
h.style.background='khaki';
i.style.background='khaki';
j.style.background='khaki';
k.style.background='khaki';
l.style.background='khaki';
m.style.background='khaki';
n.style.background='khaki';
o.style.background='khaki';		
		
}

	
}

function dew() {

i.style.background='';
k.style.background='';
j.style.background='';

g.style.background='purple';
h.style.background='purple';

e.style.background='purple';
f.style.background='purple';
b.style.background='purple';
d.style.background='purple';
	
a.style.background='purple';
c.style.background='purple';	
m.style.background='purple';	

cla++;

if(cla===2) {
	
a.style.background='red';
b.style.background='red';	
c.style.background='red';
d.style.background='red';
e.style.background='red';
f.style.background='red';

g.style.background='yellow';
h.style.background='yellow';
i.style.background='yellow';
j.style.background='blue';
k.style.background='blue';
l.style.background='blue';
m.style.background='green';
n.style.background='green';
o.style.background='green';		
		
}

if(cla===3) {
	
a.style.background='black';
b.style.background='silver';	
c.style.background='black';
d.style.background='silver';
e.style.background='black';
f.style.background='silver';

g.style.background='black';
h.style.background='silver';
i.style.background='black';
j.style.background='silver';
k.style.background='black';
l.style.background='silver';
m.style.background='black';
n.style.background='';
o.style.background='';		
		
}

if(cla===4) {
	
a.style.background='purple';
b.style.background='pink';	
c.style.background='purple';
d.style.background='pink';
e.style.background='purple';
f.style.background='pink';

g.style.background='purple';
h.style.background='pink';
i.style.background='purple';
j.style.background='pink';
k.style.background='purple';
l.style.background='pink';
m.style.background='';
n.style.background='';
o.style.background='';		
		
}

if(cla===5) {
	
a.style.background='yellow';
b.style.background='green';	
c.style.background='green';
d.style.background='yellow';
e.style.background='yellow';
f.style.background='green';

g.style.background='green';
h.style.background='yellow';
i.style.background='yellow';
j.style.background='green';
k.style.background='green';
l.style.background='yellow';
m.style.background='yellow';
n.style.background='green';
o.style.background='green';		
		
}
		
}

function hew() {

a.style.background='blue';
b.style.background='blue';	
c.style.background='blue';
d.style.background='blue';
e.style.background='blue';
f.style.background='blue';

g.style.background='purple';
h.style.background='purple';
i.style.background='purple';
j.style.background='purple';
k.style.background='purple';
l.style.background='purple';

clu++;

if(clu===2) {
	
a.style.background='maroon';
b.style.background='maroon';	
c.style.background='black';
d.style.background='';
e.style.background='';
f.style.background='';

g.style.background='';
h.style.background='';
i.style.background='';
j.style.background='';
k.style.background='';
l.style.background='';
m.style.background='black';
n.style.background='maroon';
o.style.background='maroon';		
		
}

if(clu===3) {
	
a.style.background='orange';
b.style.background='orange';	
c.style.background='orange';
d.style.background='chocolate';
e.style.background='chocolate';
f.style.background='chocolate';

g.style.background='red';
h.style.background='red';
i.style.background='red';
j.style.background='lightgreen';
k.style.background='lightgreen';
l.style.background='lightgreen';
m.style.background='';
n.style.background='';
o.style.background='';		
		
}

if(clu===4) {
	
a.style.background='blue';
b.style.background='blue';	
c.style.background='blue';
d.style.background='';
e.style.background='';
f.style.background='';

g.style.background='blue';
h.style.background='blue';
i.style.background='blue';
j.style.background='blue';
k.style.background='blue';
l.style.background='blue';
m.style.background='blue';
n.style.background='blue';
o.style.background='blue';		
		
}

if(clu===5) {
	
a.style.background='red';
b.style.background='red';	
c.style.background='red';
d.style.background='red';
e.style.background='red';
f.style.background='red';

g.style.background='red';
h.style.background='red';
i.style.background='red';
j.style.background='red';
k.style.background='red';
l.style.background='red';
m.style.background='';
n.style.background='';
o.style.background='';		
		
}
		
}


function jew() {

a.style.background='purple';
b.style.background='purple';	
c.style.background='purple';
d.style.background='purple';
e.style.background='purple';
f.style.background='purple';

g.style.background='blue';
h.style.background='blue';
i.style.background='blue';
j.style.background='blue';
k.style.background='blue';
l.style.background='blue';
m.style.background='blue';
n.style.background='blue';
o.style.background='blue';		

clp++;

if(clp===2) {
	
a.style.background='orange';
b.style.background='orange';	
c.style.background='orange';
d.style.background='orange';
e.style.background='orange';
f.style.background='orange';

g.style.background='orange';
h.style.background='orange';
i.style.background='orange';
j.style.background='orange';
k.style.background='orange';
l.style.background='orange';
m.style.background='orange';
n.style.background='orange';
o.style.background='';		
		
}

if(clp===3) {
	
a.style.background='orange';
b.style.background='orange';	
c.style.background='orange';
d.style.background='orange';
e.style.background='orange';
f.style.background='orange';

g.style.background='orange';
h.style.background='orange';
i.style.background='orange';
j.style.background='orange';
k.style.background='orange';
l.style.background='orange';
m.style.background='orange';
n.style.background='';
o.style.background='orange';			
		
}

if(clp===4) {
	
a.style.background='orange';
b.style.background='orange';	
c.style.background='orange';
d.style.background='orange';
e.style.background='orange';
f.style.background='orange';

g.style.background='orange';
h.style.background='orange';
i.style.background='orange';
j.style.background='orange';
k.style.background='orange';
l.style.background='orange';
m.style.background='';
n.style.background='orange';
o.style.background='orange';		
		
}

if(clp===5) {
	
a.style.background='orange';
b.style.background='orange';	
c.style.background='orange';
d.style.background='orange';
e.style.background='orange';
f.style.background='orange';

g.style.background='orange';
h.style.background='orange';
i.style.background='orange';
j.style.background='orange';
k.style.background='orange';
l.style.background='';
m.style.background='orange';
n.style.background='orange';
o.style.background='orange';		
		
}


}

function pew() {

a.style.background='purple';
b.style.background='purple';	
c.style.background='purple';
d.style.background='purple';
e.style.background='purple';
f.style.background='purple';

g.style.background='purple';
h.style.background='purple';
i.style.background='purple';
j.style.background='purple';
k.style.background='purple';
l.style.background='purple';
m.style.background='purple';
n.style.background='purple';
o.style.background='blue';		

clk++;

if(clk===2) {

a.style.background='black';
b.style.background='yellow';	
c.style.background='red';
d.style.background='yellow';
e.style.background='red';
f.style.background='black';

g.style.background='red';
h.style.background='black';
i.style.background='yellow';
j.style.background='black';
k.style.background='yellow';
l.style.background='red';
m.style.background='yellow';
n.style.background='red';
o.style.background='black';	

}

if(clk===3) {

a.style.background='';
b.style.background='';	
c.style.background='';
d.style.background='';
e.style.background='';
f.style.background='';

g.style.background='';
h.style.background='';
i.style.background='';
j.style.background='';
k.style.background='';
l.style.background='';
m.style.background='';
n.style.background='';
o.style.background='gray';	

}

if(clk===4) {

a.style.background='';
b.style.background='';	
c.style.background='';
d.style.background='';
e.style.background='';
f.style.background='';

g.style.background='';
h.style.background='gray';
i.style.background='';
j.style.background='';
k.style.background='';
l.style.background='';
m.style.background='';
n.style.background='';
o.style.background='';	

}

if(clk===5) {

a.style.background='';
b.style.background='';	
c.style.background='';
d.style.background='';
e.style.background='';
f.style.background='';

g.style.background='blue';
h.style.background='';
i.style.background='';
j.style.background='';
k.style.background='';
l.style.background='';
m.style.background='';
n.style.background='';
o.style.background='';	

}


}

function zew() {

a.style.background='purple';
b.style.background='purple';	
c.style.background='purple';
d.style.background='purple';
e.style.background='purple';
f.style.background='purple';

g.style.background='purple';
h.style.background='purple';
i.style.background='red';
j.style.background='red';
k.style.background='purple';
l.style.background='purple';
m.style.background='purple';
n.style.background='purple';
o.style.background='purple';		

clicksing++;

if(clicksing===2) {

a.style.background='blue';
b.style.background='blue';	
c.style.background='blue';
d.style.background='blue';
e.style.background='blue';
f.style.background='blue';

g.style.background='blue';
h.style.background='blue';
i.style.background='blue';
j.style.background='blue';
k.style.background='blue';
l.style.background='blue';
m.style.background='blue';
n.style.background='blue';
o.style.background='';	

}

if(clicksing===3) {

a.style.background='blue';
b.style.background='blue';	
c.style.background='blue';
d.style.background='blue';
e.style.background='blue';
f.style.background='blue';

g.style.background='';
h.style.background='blue';
i.style.background='blue';
j.style.background='blue';
k.style.background='blue';
l.style.background='blue';
m.style.background='blue';
n.style.background='blue';
o.style.background='blue';	

}

if(clicksing===4) {

a.style.background='blue';
b.style.background='blue';	
c.style.background='blue';
d.style.background='blue';
e.style.background='blue';
f.style.background='blue';

g.style.background='blue';
h.style.background='blue';
i.style.background='';
j.style.background='blue';
k.style.background='blue';
l.style.background='blue';
m.style.background='blue';
n.style.background='blue';
o.style.background='blue';

}

if(clicksing===5) {

a.style.background='blue';
b.style.background='blue';	
c.style.background='blue';
d.style.background='blue';
e.style.background='blue';
f.style.background='blue';

g.style.background='';
h.style.background='blue';
i.style.background='blue';
j.style.background='blue';
k.style.background='blue';
l.style.background='blue';
m.style.background='blue';
n.style.background='blue';
o.style.background='blue';

}


}

function cew() {

a.style.background='purple';
b.style.background='brown';	
c.style.background='purple';
d.style.background='purple';
e.style.background='brown';
f.style.background='purple';

g.style.background='purple';
h.style.background='brown';
i.style.background='purple';
j.style.background='purple';
k.style.background='brown';
l.style.background='purple';
m.style.background='purple';
n.style.background='brown';
o.style.background='purple';		

clt++;

if(clt===2) {

a.style.background='red';
b.style.background='red';	
c.style.background='';
d.style.background='red';
e.style.background='red';
f.style.background='';

g.style.background='red';
h.style.background='red';
i.style.background='';
j.style.background='yellow';
k.style.background='yellow';
l.style.background='';
m.style.background='yellow';
n.style.background='yellow';
o.style.background='';	

}

if(clt===3) {

a.style.background='';
b.style.background='';	
c.style.background='gray';
d.style.background='';
e.style.background='';
f.style.background='gray';

g.style.background='';
h.style.background='';
i.style.background='gray';
j.style.background='';
k.style.background='';
l.style.background='gray';
m.style.background='';
n.style.background='';
o.style.background='gray';	

}

if(clt===4) {

a.style.background='';
b.style.background='orange';	
c.style.background='';
d.style.background='';
e.style.background='pink';
f.style.background='';

g.style.background='';
h.style.background='orange';
i.style.background='';
j.style.background='';
k.style.background='pink';
l.style.background='';
m.style.background='';
n.style.background='orange';
o.style.background='';	

}

if(clt===5) {

a.style.background='green';
b.style.background='';	
c.style.background='';
d.style.background='green';
e.style.background='';
f.style.background='';

g.style.background='green';
h.style.background='';
i.style.background='';
j.style.background='green';
k.style.background='';
l.style.background='';
m.style.background='green';
n.style.background='';
o.style.background='';	

}


}

function qew() {

a.style.background='green';
b.style.background='purple';	
c.style.background='purple';
d.style.background='green';
e.style.background='purple';
f.style.background='purple';

g.style.background='green';
h.style.background='purple';
i.style.background='purple';
j.style.background='green';
k.style.background='purple';
l.style.background='purple';
m.style.background='green';
n.style.background='purple';
o.style.background='purple';		

cl++;

if(cl===2) {

a.style.background='red';
b.style.background='';	
c.style.background='';
d.style.background='';
e.style.background='red';
f.style.background='';

g.style.background='';
h.style.background='';
i.style.background='red';
j.style.background='';
k.style.background='red';
l.style.background='';
m.style.background='red';
n.style.background='';
o.style.background='';	

}

if(cl===3) {

a.style.background='';
b.style.background='';	
c.style.background='green';
d.style.background='';
e.style.background='green';
f.style.background='';

g.style.background='green';
h.style.background='';
i.style.background='';
j.style.background='';
k.style.background='green';
l.style.background='';
m.style.background='';
n.style.background='';
o.style.background='green';	

}

if(cl===4) {

a.style.background='';
b.style.background='blue';	
c.style.background='';
d.style.background='blue';
e.style.background='';
f.style.background='blue';

g.style.background='blue';
h.style.background='';
i.style.background='blue';
j.style.background='blue';
k.style.background='';
l.style.background='blue';
m.style.background='';
n.style.background='blue';
o.style.background='';	

}

if(cl===5) {

a.style.background='yellow';
b.style.background='';	
c.style.background='yellow';
d.style.background='';
e.style.background='yellow';
f.style.background='';

g.style.background='';
h.style.background='yellow';
i.style.background='';
j.style.background='';
k.style.background='yellow';
l.style.background='';
m.style.background='yellow';
n.style.background='';
o.style.background='yellow';	

}

}


function yew() {

a.style.background='purple';
b.style.background='purple';	
c.style.background='gold';
d.style.background='purple';
e.style.background='purple';
f.style.background='gold';

g.style.background='purple';
h.style.background='purple';
i.style.background='gold';
j.style.background='purple';
k.style.background='purple';
l.style.background='gold';
m.style.background='purple';
n.style.background='purple';
o.style.background='gold';		

clickoff++;

if(clickoff===2) {

a.style.background='black';
b.style.background='red';	
c.style.background='black';
d.style.background='red';
e.style.background='black';
f.style.background='red';

g.style.background='black';
h.style.background='red';
i.style.background='black';
j.style.background='red';
k.style.background='black';
l.style.background='red';
m.style.background='black';
n.style.background='red';
o.style.background='black';	

}

if(clickoff===3) {

a.style.background='red';
b.style.background='black';	
c.style.background='red';
d.style.background='black';
e.style.background='red';
f.style.background='black';

g.style.background='red';
h.style.background='black';
i.style.background='red';
j.style.background='black';
k.style.background='red';
l.style.background='black';
m.style.background='red';
n.style.background='black';
o.style.background='red';	

}

if(clickoff===4) {

a.style.background='red';
b.style.background='black';	
c.style.background='red';
d.style.background='red';
e.style.background='black';
f.style.background='red';

g.style.background='red';
h.style.background='black';
i.style.background='red';
j.style.background='red';
k.style.background='black';
l.style.background='red';
m.style.background='red';
n.style.background='black';
o.style.background='red';	

}

if(clickoff===5) {

a.style.background='';
b.style.background='';	
c.style.background='';
d.style.background='';
e.style.background='';
f.style.background='';

g.style.background='';
h.style.background='';
i.style.background='';
j.style.background='';
k.style.background='';
l.style.background='';
m.style.background='';
n.style.background='';
o.style.background='red';	

}

}

function vew() {

a.style.background='blue';
b.style.background='purple';	
c.style.background='';
d.style.background='purple';
e.style.background='blue';
f.style.background='';

g.style.background='purple';
h.style.background='purple';
i.style.background='blue';
j.style.background='';
k.style.background='blue';
l.style.background='';
m.style.background='blue';
n.style.background='';
o.style.background='';		

cli++;

if(cli===2) {

a.style.background='purple';
b.style.background='pink';	
c.style.background='green';
d.style.background='blue';
e.style.background='blue';
f.style.background='blue';

g.style.background='';
h.style.background='';
i.style.background='';
j.style.background='';
k.style.background='';
l.style.background='';
m.style.background='';
n.style.background='';
o.style.background='';	

}

if(cli===3) {

a.style.background='';
b.style.background='';	
c.style.background='';
d.style.background='';
e.style.background='';
f.style.background='';

g.style.background='purple';
h.style.background='pink';
i.style.background='green';
j.style.background='purple';
k.style.background='pink';
l.style.background='green';
m.style.background='blue';
n.style.background='blue';
o.style.background='blue';	

}

if(cli===4) {

a.style.background='';
b.style.background='';	
c.style.background='';
d.style.background='';
e.style.background='';
f.style.background='';

g.style.background='blue';
h.style.background='';
i.style.background='';
j.style.background='';
k.style.background='';
l.style.background='';
m.style.background='';
n.style.background='';
o.style.background='';	

}

if(cli===5) {

a.style.background='';
b.style.background='';	
c.style.background='';
d.style.background='';
e.style.background='';
f.style.background='';

g.style.background='';
h.style.background='';
i.style.background='';
j.style.background='blue';
k.style.background='';
l.style.background='';
m.style.background='';
n.style.background='';
o.style.background='';	

}


}

function wew() {

a.style.background='blue';
b.style.background='blue';	
c.style.background='blue';
d.style.background='purple';
e.style.background='';
f.style.background='';

g.style.background='red';
h.style.background='purple';
i.style.background='yellow';
j.style.background='red';
k.style.background='';
l.style.background='yellow';
m.style.background='red';
n.style.background='';
o.style.background='yellow';		

clicking++;

if(clicking===2) {

a.style.background='red';
b.style.background='orange';	
c.style.background='red';
d.style.background='orange';
e.style.background='red';
f.style.background='orange';

g.style.background='';
h.style.background='';
i.style.background='';
j.style.background='';
k.style.background='';
l.style.background='';
m.style.background='';
n.style.background='';
o.style.background='';	

}

if(clicking===3) {

a.style.background='';
b.style.background='';	
c.style.background='';
d.style.background='';
e.style.background='';
f.style.background='';

g.style.background='red';
h.style.background='orange';
i.style.background='red';
j.style.background='orange';
k.style.background='red';
l.style.background='orange';
m.style.background='red';
n.style.background='orange';
o.style.background='red';	

}

if(clicking===4) {

a.style.background='black';
b.style.background='';	
c.style.background='black';
d.style.background='';
e.style.background='';
f.style.background='';

g.style.background='black';
h.style.background='';
i.style.background='black';
j.style.background='';
k.style.background='';
l.style.background='';
m.style.background='black';
n.style.background='';
o.style.background='black';	

}

if(clicking===5) {

a.style.background='';
b.style.background='blue';	
c.style.background='';
d.style.background='';
e.style.background='';
f.style.background='';

g.style.background='';
h.style.background='blue';
i.style.background='';
j.style.background='';
k.style.background='';
l.style.background='';
m.style.background='';
n.style.background='blue';
o.style.background='';	

}


}

function uew() {

a.style.background='';
b.style.background='';	
c.style.background='';
d.style.background='purple';
e.style.background='';
f.style.background='';

g.style.background='';
h.style.background='';
i.style.background='';
j.style.background='';
k.style.background='';
l.style.background='';
m.style.background='';
n.style.background='purple';
o.style.background='';		

clic++;

if(clic===2) {

a.style.background='blue';
b.style.background='';	
c.style.background='';
d.style.background='';
e.style.background='';
f.style.background='';

g.style.background='';
h.style.background='';
i.style.background='';
j.style.background='';
k.style.background='';
l.style.background='';
m.style.background='';
n.style.background='';
o.style.background='';	

}

if(clic===3) {

a.style.background='blue';
b.style.background='blue';	
c.style.background='blue';
d.style.background='blue';
e.style.background='blue';
f.style.background='blue';

g.style.background='blue';
h.style.background='blue';
i.style.background='blue';
j.style.background='blue';
k.style.background='blue';
l.style.background='blue';
m.style.background='';
n.style.background='';
o.style.background='';	

}

if(clic===3) {

a.style.background='blue';
b.style.background='blue';	
c.style.background='blue';
d.style.background='blue';
e.style.background='blue';
f.style.background='blue';

g.style.background='blue';
h.style.background='blue';
i.style.background='blue';
j.style.background='blue';
k.style.background='blue';
l.style.background='blue';
m.style.background='blue';
n.style.background='';
o.style.background='';

}

if(clic===4) {

a.style.background='blue';
b.style.background='blue';	
c.style.background='blue';
d.style.background='blue';
e.style.background='blue';
f.style.background='blue';

g.style.background='blue';
h.style.background='blue';
i.style.background='blue';
j.style.background='blue';
k.style.background='blue';
l.style.background='blue';
m.style.background='blue';
n.style.background='blue';
o.style.background='';

}

if(clic===5) {

a.style.background='';
b.style.background='';	
c.style.background='';
d.style.background='';
e.style.background='';
f.style.background='';

g.style.background='';
h.style.background='';
i.style.background='';
j.style.background='';
k.style.background='';
l.style.background='';
m.style.background='';
n.style.background='';
o.style.background='blue';	

}

}

function eew() {

a.style.background='red';
b.style.background='yellow';	
c.style.background='green';
d.style.background='blue';
e.style.background='red';
f.style.background='purple';

g.style.background='';
h.style.background='purple';
i.style.background='orange';
j.style.background='brown';
k.style.background='indianred';
l.style.background='aqua';
m.style.background='darkgreen';
n.style.background='darkblue';
o.style.background='goldenrod';		

clg++;

if(clg===2) {

a.style.background='';
b.style.background='';	
c.style.background='';
d.style.background='green';
e.style.background='green';
f.style.background='green';

g.style.background='green';
h.style.background='green';
i.style.background='green';
j.style.background='green';
k.style.background='green';
l.style.background='green';
m.style.background='green';
n.style.background='green';
o.style.background='green';	

}

if(clg===3) {

a.style.background='green';
b.style.background='green';	
c.style.background='green';
d.style.background='green';
e.style.background='green';
f.style.background='green';

g.style.background='green';
h.style.background='green';
i.style.background='green';
j.style.background='green';
k.style.background='green';
l.style.background='green';
m.style.background='';
n.style.background='';
o.style.background='';		

}

if(clg===4) {

a.style.background='green';
b.style.background='green';	
c.style.background='green';
d.style.background='';
e.style.background='';
f.style.background='';

g.style.background='green';
h.style.background='green';
i.style.background='green';
j.style.background='green';
k.style.background='green';
l.style.background='green';
m.style.background='green';
n.style.background='green';
o.style.background='green';	

}

if(clg===5) {

a.style.background='green';
b.style.background='green';	
c.style.background='green';
d.style.background='green';
e.style.background='green';
f.style.background='green';

g.style.background='';
h.style.background='';
i.style.background='';
j.style.background='green';
k.style.background='green';
l.style.background='green';
m.style.background='green';
n.style.background='green';
o.style.background='green';	

}


}

function iew() {

a.style.background='';
b.style.background='';	
c.style.background='';
d.style.background='';
e.style.background='';
f.style.background='';

g.style.background='';
h.style.background='';
i.style.background='';
j.style.background='';
k.style.background='';
l.style.background='';
m.style.background='';
n.style.background='';
o.style.background='';		

click++;

if(click===2) {

a.style.background='green';
b.style.background='green';	
c.style.background='green';
d.style.background='green';
e.style.background='green';
f.style.background='green';

g.style.background='green';
h.style.background='red';
i.style.background='red';
j.style.background='red';
k.style.background='red';
l.style.background='red';
m.style.background='red';
n.style.background='red';
o.style.background='red';		
		
}	

if(click===3) {

a.style.background='burlywood';
b.style.background='burlywood';	
c.style.background='burlywood';
d.style.background='burlywood';
e.style.background='burlywood';
f.style.background='burlywood';

g.style.background='lightpink';
h.style.background='lightpink';
i.style.background='lightpink';
j.style.background='lightpink';
k.style.background='lightpink';
l.style.background='lightpink';
m.style.background='lightpink';
n.style.background='lightpink';
o.style.background='lightpink';		
		
}	

if(click===4) {

a.style.background='';
b.style.background='';	
c.style.background='';
d.style.background='';
e.style.background='';
f.style.background='';

g.style.background='';
h.style.background='';
i.style.background='';
j.style.background='';
k.style.background='';
l.style.background='';
m.style.background='';
n.style.background='';
o.style.background='';	

}

if(click===5) {

a.style.background='blue';
b.style.background='blue';	
c.style.background='blue';
d.style.background='blue';
e.style.background='blue';
f.style.background='blue';

g.style.background='blue';
h.style.background='blue';
i.style.background='blue';
j.style.background='blue';
k.style.background='blue';
l.style.background='blue';
m.style.background='blue';
n.style.background='blue';
o.style.background='blue';		
	
alert('Pobeda');
	
document.querySelector('#b').innerHTML +='<a href="ucenje3.html">=> Sledeci nivo</a>';
	
}	

}

function ax() {
	
r.style.background='blue';	
q.style.background='blue';		
p.style.background='blue';	

click++;

if(click===2) {

r.style.background='orange';	
q.style.background='orange';		
p.style.background='orange';		
	
}

if(click===3) {

r.style.background='pink';	
q.style.background='pink';		
p.style.background='pink';		
	
}

if(click===4) {
	
a.style.background='';
b.style.background='';
c.style.background='';

d.style.background='';
e.style.background='';
f.style.background='';

g.style.background='';
h.style.background='';
i.style.background='';

j.style.background='';
k.style.background='';
l.style.background='';

m.style.background='';
n.style.background='';
o.style.background='blue';
	
p.style.background='';	
q.style.background='';		
r.style.background='';
		
}

if(click===5) {
	
a.style.background='red';
b.style.background='';
c.style.background='';

d.style.background='';
e.style.background='';
f.style.background='';

g.style.background='';
h.style.background='';
i.style.background='';

j.style.background='red';
k.style.background='';
l.style.background='';

m.style.background='';
n.style.background='';
o.style.background='';
	
p.style.background='';	
q.style.background='';		
r.style.background='';
		
}
	
}

function bx() {

m.style.background='blue';
n.style.background='blue';
o.style.background='blue';
	
r.style.background='';	
q.style.background='';		
p.style.background='';	

clicks++;

if(clicks===2) {

m.style.background='orange';
n.style.background='orange';
o.style.background='orange';
	
r.style.background='';	
q.style.background='';		
p.style.background='';	
		
}

if(clicks===3) {

m.style.background='gray';
n.style.background='gray';
o.style.background='gray';
	
r.style.background='';	
q.style.background='';		
p.style.background='';	
		
}

if(clicks===4) {
	
a.style.background='';
b.style.background='';
c.style.background='';

d.style.background='';
e.style.background='';
f.style.background='';

g.style.background='';
h.style.background='';
i.style.background='';

j.style.background='blue';
k.style.background='';
l.style.background='';

m.style.background='';
n.style.background='';
o.style.background='';
	
p.style.background='';	
q.style.background='';		
r.style.background='';
		
}

if(clicks===5) {
	
a.style.background='';
b.style.background='';
c.style.background='';

d.style.background='blue';
e.style.background='blue';
f.style.background='blue';

g.style.background='blue';
h.style.background='blue';
i.style.background='blue';

j.style.background='blue';
k.style.background='blue';
l.style.background='blue';

m.style.background='blue';
n.style.background='blue';
o.style.background='blue';
	
p.style.background='blue';	
q.style.background='blue';		
r.style.background='blue';
		
}
	
}

function cx() {

j.style.background='blue';
k.style.background='blue';
l.style.background='blue';

m.style.background='';
n.style.background='';
o.style.background='';
	
r.style.background='';	
q.style.background='';		
p.style.background='';	

clz++;

if(clz===2) {
	
a.style.background='orange';
b.style.background='orange';
c.style.background='orange';

d.style.background='green';
e.style.background='green';
f.style.background='green';

g.style.background='orange';
h.style.background='orange';
i.style.background='orange';

j.style.background='green';
k.style.background='green';
l.style.background='green';

m.style.background='orange';
n.style.background='orange';
o.style.background='orange';

p.style.background='green';	
q.style.background='green';		
r.style.background='green';
		
}

if(clz===3) {
	
a.style.background='red';
b.style.background='purple';
c.style.background='red';

d.style.background='purple';
e.style.background='red';
f.style.background='purple';

g.style.background='red';
h.style.background='purple';
i.style.background='red';

j.style.background='purple';
k.style.background='red';
l.style.background='purple';

m.style.background='red';
n.style.background='purple';
o.style.background='red';

p.style.background='purple';	
q.style.background='red';		
r.style.background='purple';
		
}

if(clz===4) {
	
a.style.background='';
b.style.background='';
c.style.background='';

d.style.background='';
e.style.background='';
f.style.background='';

g.style.background='';
h.style.background='';
i.style.background='';

j.style.background='';
k.style.background='';
l.style.background='';

m.style.background='blue';
n.style.background='';
o.style.background='';
	
p.style.background='';	
q.style.background='';		
r.style.background='';
		
}

if(clz===5) {
	
a.style.background='blue';
b.style.background='blue';
c.style.background='blue';

d.style.background='';
e.style.background='';
f.style.background='';

g.style.background='blue';
h.style.background='blue';
i.style.background='blue';

j.style.background='blue';
k.style.background='blue';
l.style.background='blue';

m.style.background='blue';
n.style.background='blue';
o.style.background='blue';
	
p.style.background='blue';	
q.style.background='blue';		
r.style.background='blue';
		
}
	
}

function dx() {

g.style.background='blue';
h.style.background='blue';
i.style.background='blue';


j.style.background='';
k.style.background='';
l.style.background='';

m.style.background='';
n.style.background='';
o.style.background='';
	
r.style.background='';	
q.style.background='';		
p.style.background='';	

clp++;

if(clp===2) {
	
a.style.background='';
b.style.background='';
c.style.background='';

d.style.background='';
e.style.background='';
f.style.background='';

g.style.background='';
h.style.background='';
i.style.background='';

j.style.background='';
k.style.background='';
l.style.background='';

m.style.background='';
n.style.background='';
o.style.background='';
	
p.style.background='';	
q.style.background='';		
r.style.background='';
		
}

if(clp===3) {
	
a.style.background='blue';
b.style.background='red';
c.style.background='blue';

d.style.background='red';
e.style.background='blue';
f.style.background='red';

g.style.background='blue';
h.style.background='red';
i.style.background='blue';

j.style.background='red';
k.style.background='blue';
l.style.background='red';

m.style.background='blue';
n.style.background='red';
o.style.background='blue';
	
p.style.background='red';	
q.style.background='blue';		
r.style.background='red';
		
}

if(clp===4) {
	
a.style.background='';
b.style.background='';
c.style.background='';

d.style.background='blue';
e.style.background='';
f.style.background='';

g.style.background='';
h.style.background='';
i.style.background='';

j.style.background='';
k.style.background='';
l.style.background='';

m.style.background='';
n.style.background='';
o.style.background='';
	
p.style.background='';	
q.style.background='';		
r.style.background='';
		
}

if(clp===5) {
	
a.style.background='';
b.style.background='brown';
c.style.background='';

d.style.background='';
e.style.background='brown';
f.style.background='';

g.style.background='';
h.style.background='brown';
i.style.background='';

j.style.background='';
k.style.background='brown';
l.style.background='';

m.style.background='';
n.style.background='brown';
o.style.background='';
	
p.style.background='';	
q.style.background='brown';		
r.style.background='';
		
}
	
}

function ex() {

d.style.background='blue';
e.style.background='blue';
f.style.background='blue';

g.style.background='';
h.style.background='';
i.style.background='';

j.style.background='';
k.style.background='';
l.style.background='';

m.style.background='';
n.style.background='';
o.style.background='';
	
r.style.background='';	
q.style.background='';		
p.style.background='';	

clx++;

if(clx===2) {
	
a.style.background='purple';
b.style.background='purple';
c.style.background='purple';

d.style.background='purple';
e.style.background='purple';
f.style.background='purple';

g.style.background='purple';
h.style.background='purple';
i.style.background='purple';

j.style.background='purple';
k.style.background='purple';
l.style.background='purple';

m.style.background='purple';
n.style.background='purple';
o.style.background='purple';
	
p.style.background='purple';	
q.style.background='purple';		
r.style.background='purple';	
		
}

if(clx===3) {
	
a.style.background='orange';
b.style.background='orange';
c.style.background='pink';

d.style.background='pink';
e.style.background='orange';
f.style.background='orange';

g.style.background='pink';
h.style.background='pink';
i.style.background='orange';

j.style.background='orange';
k.style.background='pink';
l.style.background='pink';

m.style.background='';
n.style.background='';
o.style.background='';
	
p.style.background='';	
q.style.background='';		
r.style.background='';	
		
}

if(clx===4) {
	
a.style.background='';
b.style.background='';
c.style.background='';

d.style.background='';
e.style.background='';
f.style.background='';

g.style.background='';
h.style.background='';
i.style.background='';

j.style.background='';
k.style.background='';
l.style.background='blue';

m.style.background='';
n.style.background='';
o.style.background='';
	
p.style.background='';	
q.style.background='';		
r.style.background='';	
		
}

if(clx===5) {
	
a.style.background='';
b.style.background='purple';
c.style.background='';

d.style.background='';
e.style.background='purple';
f.style.background='';

g.style.background='';
h.style.background='purple';
i.style.background='';

j.style.background='';
k.style.background='red';
l.style.background='';

m.style.background='';
n.style.background='red';
o.style.background='';
	
p.style.background='';	
q.style.background='red';		
r.style.background='';	
		
}

}

function fx() {

a.style.background='green';
b.style.background='green';
c.style.background='green';

d.style.background='';
e.style.background='';
f.style.background='';

g.style.background='';
h.style.background='';
i.style.background='';

j.style.background='';
k.style.background='';
l.style.background='';

m.style.background='';
n.style.background='';
o.style.background='';
	
r.style.background='';	
q.style.background='';		
p.style.background='';	
	
cla++;

if(cla===2)  {

a.style.background='purple';
b.style.background='purple';
c.style.background='purple';

d.style.background='purple';
e.style.background='purple';
f.style.background='purple';

g.style.background='purple';
h.style.background='purple';
i.style.background='purple';

j.style.background='purple';
k.style.background='purple';
l.style.background='purple';

m.style.background='purple';
n.style.background='purple';
o.style.background='purple';
	
p.style.background='purple';	
q.style.background='purple';		
r.style.background='purple';

}	

if(cla===3)  {

a.style.background='brown';
b.style.background='blue';
c.style.background='brown';

d.style.background='blue';
e.style.background='brown';
f.style.background='blue';

g.style.background='brown';
h.style.background='blue';
i.style.background='brown';

j.style.background='blue';
k.style.background='';
l.style.background='';

m.style.background='';
n.style.background='';
o.style.background='';
	
p.style.background='';	
q.style.background='';		
r.style.background='';

}	

if(cla===4)  {

a.style.background='orange';
b.style.background='orange';
c.style.background='orange';

d.style.background='yellow';
e.style.background='yellow';
f.style.background='yellow';

g.style.background='pink';
h.style.background='pink';
i.style.background='pink';

j.style.background='purple';
k.style.background='purple';
l.style.background='purple';

m.style.background='orange';
n.style.background='orange';
o.style.background='orange';
	
p.style.background='yellow';	
q.style.background='yellow';		
r.style.background='yellow';

}	

if(cla===5) {
	
a.style.background='';
b.style.background='yellow';
c.style.background='';

d.style.background='';
e.style.background='yellow';
f.style.background='';

g.style.background='';
h.style.background='yellow';
i.style.background='';

j.style.background='';
k.style.background='yellow';
l.style.background='';

m.style.background='';
n.style.background='yellow';
o.style.background='';
	
p.style.background='';	
q.style.background='yellow';		
r.style.background='';	
		
}	

}

function gx() {

a.style.background='green';
b.style.background='green';
c.style.background='green';

d.style.background='green';
e.style.background='green';
f.style.background='green';

g.style.background='';
h.style.background='';
i.style.background='';

j.style.background='';
k.style.background='';
l.style.background='';

m.style.background='';
n.style.background='';
o.style.background='';
	
p.style.background='';	
q.style.background='';		
r.style.background='';	

cll++;

if(cll===2)  {
	
a.style.background='purple';
b.style.background='purple';
c.style.background='purple';

d.style.background='purple';
e.style.background='purple';
f.style.background='purple';

g.style.background='purple';
h.style.background='purple';
i.style.background='purple';

j.style.background='purple';
k.style.background='purple';
l.style.background='purple';

m.style.background='purple';
n.style.background='purple';
o.style.background='purple';
	
p.style.background='purple';	
q.style.background='purple';		
r.style.background='purple';
		
}

if(cll===3) {
	
a.style.background='yellow';
b.style.background='green';
c.style.background='yellow';

d.style.background='green';
e.style.background='yellow';
f.style.background='green';

g.style.background='yellow';
h.style.background='green';
i.style.background='yellow';

j.style.background='green';
k.style.background='yellow';
l.style.background='green';

m.style.background='yellow';
n.style.background='green';
o.style.background='yellow';
	
p.style.background='green';	
q.style.background='yellow';		
r.style.background='green';	
		
}

if(cll===4) {
	
a.style.background='blue';
b.style.background='blue';
c.style.background='blue';

d.style.background='brown';
e.style.background='brown';
f.style.background='brown';

g.style.background='green';
h.style.background='green';
i.style.background='green';

j.style.background='red';
k.style.background='red';
l.style.background='red';

m.style.background='orange';
n.style.background='orange';
o.style.background='orange';
	
p.style.background='red';	
q.style.background='red';		
r.style.background='red';	
		
}

if(cll===5) {
	
a.style.background='';
b.style.background='red';
c.style.background='';

d.style.background='';
e.style.background='red';
f.style.background='';

g.style.background='';
h.style.background='red';
i.style.background='';

j.style.background='';
k.style.background='brown';
l.style.background='';

m.style.background='';
n.style.background='brown';
o.style.background='';
	
p.style.background='';	
q.style.background='brown';		
r.style.background='';	
		
}
	
}

function hx() {

a.style.background='green';
b.style.background='green';
c.style.background='green';

d.style.background='green';
e.style.background='green';
f.style.background='green';

g.style.background='green';
h.style.background='green';
i.style.background='green';

j.style.background='';
k.style.background='';
l.style.background='';

m.style.background='';
n.style.background='';
o.style.background='';
	
r.style.background='';	
q.style.background='';		
p.style.background='';	
	
clk++;

if(clk===2) {

a.style.background='blue';
b.style.background='yellow';
c.style.background='red';

d.style.background='orange';
e.style.background='purple';
f.style.background='purple';

g.style.background='green';
h.style.background='white';
i.style.background='red';

j.style.background='brown';
k.style.background='blue';
l.style.background='white';

m.style.background='yellow';
n.style.background='green';
o.style.background='orange';
	
p.style.background='red';	
q.style.background='red';		
r.style.background='purple';

}	

if(clk===3) {

a.style.background='blue';
b.style.background='blue';
c.style.background='';

d.style.background='';
e.style.background='blue';
f.style.background='blue';

g.style.background='blue';
h.style.background='blue';
i.style.background='blue';

j.style.background='blue';
k.style.background='blue';
l.style.background='blue';

m.style.background='blue';
n.style.background='blue';
o.style.background='blue';
	
p.style.background='blue';	
q.style.background='blue';		
r.style.background='blue';

}	

if(clk===4) {

a.style.background='yellow';
b.style.background='red';
c.style.background='yellow';

d.style.background='red';
e.style.background='yellow';
f.style.background='red';

g.style.background='yellow';
h.style.background='red';
i.style.background='yellow';

j.style.background='red';
k.style.background='yellow';
l.style.background='red';

m.style.background='yellow';
n.style.background='red';
o.style.background='yellow';
	
p.style.background='red';	
q.style.background='yellow';		
r.style.background='red';

}	

if(clk===5) {
	
a.style.background='blue';
b.style.background='blue';
c.style.background='blue';

d.style.background='blue';
e.style.background='blue';
f.style.background='blue';

g.style.background='blue';
h.style.background='blue';
i.style.background='blue';

j.style.background='blue';
k.style.background='blue';
l.style.background='blue';

m.style.background='blue';
n.style.background='blue';
o.style.background='blue';
	
p.style.background='blue';	
q.style.background='blue';		
r.style.background='blue';	

alert('Pobeda :)');
	
document.querySelector('#d').innerHTML +='<a href="ucenje4.html">=> SLEDECI NIVO</a>';
	
}
	
}

function ix() {

a.style.background='green';
b.style.background='green';
c.style.background='green';

d.style.background='green';
e.style.background='green';
f.style.background='green';

g.style.background='green';
h.style.background='green';
i.style.background='green';

j.style.background='green';
k.style.background='green';
l.style.background='green';

m.style.background='';
n.style.background='';
o.style.background='';
	
r.style.background='';	
q.style.background='';		
p.style.background='';	
	
cl++;

if(cl===2) {

a.style.background='brown';
b.style.background='red';
c.style.background='brown';

d.style.background='brown';
e.style.background='red';
f.style.background='brown';

g.style.background='brown';
h.style.background='red';
i.style.background='brown';

j.style.background='brown';
k.style.background='red';
l.style.background='brown';

m.style.background='brown';
n.style.background='red';
o.style.background='brown';

p.style.background='brown';	
q.style.background='red';		
r.style.background='brown';

}	

if(cl===3) {

a.style.background='';
b.style.background='';
c.style.background='';

d.style.background='';
e.style.background='';
f.style.background='';

g.style.background='';
h.style.background='';
i.style.background='';

j.style.background='';
k.style.background='';
l.style.background='';

m.style.background='';
n.style.background='';
o.style.background='';

p.style.background='';	
q.style.background='';		
r.style.background='';

}	

if(cl===4) {

a.style.background='';
b.style.background='purple';
c.style.background='black';

d.style.background='purple';
e.style.background='black';
f.style.background='purple';

g.style.background='black';
h.style.background='purple';
i.style.background='black';

j.style.background='purple';
k.style.background='black';
l.style.background='purple';

m.style.background='black';
n.style.background='purple';
o.style.background='black';

p.style.background='purple';	
q.style.background='black';		
r.style.background='purple';

}	

if(cl===5) {

a.style.background='';
b.style.background='';
c.style.background='';

d.style.background='';
e.style.background='';
f.style.background='';

g.style.background='';
h.style.background='';
i.style.background='';

j.style.background='';
k.style.background='';
l.style.background='';

m.style.background='';
n.style.background='';
o.style.background='';

p.style.background='';	
q.style.background='';		
r.style.background='red';

}	
	
}

function jx() {

a.style.background='green';
b.style.background='green';
c.style.background='green';

d.style.background='green';
e.style.background='green';
f.style.background='green';

g.style.background='green';
h.style.background='green';
i.style.background='green';

j.style.background='green';
k.style.background='green';
l.style.background='green';

m.style.background='green';
n.style.background='green';
o.style.background='green';
	
r.style.background='';	
q.style.background='';		
p.style.background='';	
	
clicksing++;

if(clicksing===2) {

a.style.background='';
b.style.background='';
c.style.background='';

d.style.background='brown';
e.style.background='';
f.style.background='';

g.style.background='';
h.style.background='';
i.style.background='';

j.style.background='';
k.style.background='';
l.style.background='';

m.style.background='';
n.style.background='';
o.style.background='';

p.style.background='';	
q.style.background='';		
r.style.background='';


}	

if(clicksing===3) {

a.style.background='purple';
b.style.background='purple';
c.style.background='purple';

d.style.background='';
e.style.background='';
f.style.background='';

g.style.background='';
h.style.background='';
i.style.background='';

j.style.background='';
k.style.background='';
l.style.background='';

m.style.background='';
n.style.background='';
o.style.background='';

p.style.background='purple';	
q.style.background='purple';		
r.style.background='purple';

}	

if(clicksing===4) {

a.style.background='';
b.style.background='';
c.style.background='';

d.style.background='purple';
e.style.background='purple';
f.style.background='purple';

g.style.background='purple';
h.style.background='purple';
i.style.background='purple';

j.style.background='purple';
k.style.background='purple';
l.style.background='purple';

m.style.background='purple';
n.style.background='purple';
o.style.background='purple';

p.style.background='';	
q.style.background='';		
r.style.background='';

}	

if(clicksing===5) {

a.style.background='red';
b.style.background='red';
c.style.background='red';

d.style.background='red';
e.style.background='red';
f.style.background='red';

g.style.background='red';
h.style.background='red';
i.style.background='red';

j.style.background='red';
k.style.background='red';
l.style.background='red';

m.style.background='red';
n.style.background='red';
o.style.background='red';

p.style.background='red';	
q.style.background='red';		
r.style.background='red';

}	
	
}

function kx() {

a.style.background='green';
b.style.background='green';
c.style.background='green';

d.style.background='green';
e.style.background='green';
f.style.background='green';

g.style.background='green';
h.style.background='green';
i.style.background='green';

j.style.background='green';
k.style.background='green';
l.style.background='green';

m.style.background='green';
n.style.background='green';
o.style.background='green';
	
r.style.background='red';	
q.style.background='red';		
p.style.background='red';	

cli++;

if(cli===2) {
	
a.style.background='';
b.style.background='';
c.style.background='';

d.style.background='';
e.style.background='';
f.style.background='';

g.style.background='yellow';
h.style.background='';
i.style.background='';

j.style.background='';
k.style.background='';
l.style.background='';

m.style.background='';
n.style.background='';
o.style.background='';

p.style.background='';	
q.style.background='';		
r.style.background='';	
		
}

if(cli===3) {
	
a.style.background='blue';
b.style.background='blue';
c.style.background='blue';

d.style.background='green';
e.style.background='green';
f.style.background='green';

g.style.background='yellow';
h.style.background='yellow';
i.style.background='yellow';

j.style.background='red';
k.style.background='red';
l.style.background='red';

m.style.background='pink';
n.style.background='pink';
o.style.background='pink';

p.style.background='orange';	
q.style.background='orange';		
r.style.background='orange';	
		
}

if(cli===4) {
	
a.style.background='';
b.style.background='green';
c.style.background='green';

d.style.background='';
e.style.background='blue';
f.style.background='blue';

g.style.background='';
h.style.background='green';
i.style.background='green';

j.style.background='';
k.style.background='blue';
l.style.background='green';

m.style.background='';
n.style.background='blue';
o.style.background='blue';

p.style.background='';	
q.style.background='green';		
r.style.background='green';	
		
}

if(cli===5) {
	
a.style.background='purple';
b.style.background='yellow';
c.style.background='purple';

d.style.background='yellow';
e.style.background='purple';
f.style.background='yellow';

g.style.background='purple';
h.style.background='yellow';
i.style.background='purple';

j.style.background='yellow';
k.style.background='purple';
l.style.background='yellow';

m.style.background='purple';
n.style.background='yellow';
o.style.background='purple';

p.style.background='yellow';	
q.style.background='purple';		
r.style.background='yellow';	
		
}
	
}

function lx() {

a.style.background='green';
b.style.background='green';
c.style.background='green';

d.style.background='green';
e.style.background='green';
f.style.background='green';

g.style.background='green';
h.style.background='green';
i.style.background='green';

j.style.background='green';
k.style.background='green';
l.style.background='green';

m.style.background='pink';
n.style.background='pink';
o.style.background='pink';
	
r.style.background='pink';	
q.style.background='pink';		
p.style.background='pink';	

clickoff++;

if(clickoff===2)  {
	
a.style.background='orange';
b.style.background='';
c.style.background='orange';

d.style.background='';
e.style.background='orange';
f.style.background='';

g.style.background='pink';
h.style.background='';
i.style.background='pink';

j.style.background='';
k.style.background='pink';
l.style.background='';

m.style.background='green';
n.style.background='';
o.style.background='green';

p.style.background='';	
q.style.background='green';		
r.style.background='';	
		
}

if(clickoff===2)  {
	
a.style.background='red';
b.style.background='red';
c.style.background='red';

d.style.background='red';
e.style.background='red';
f.style.background='red';

g.style.background='red';
h.style.background='red';
i.style.background='red';

j.style.background='gray';
k.style.background='gray';
l.style.background='gray';

m.style.background='gray';
n.style.background='gray';
o.style.background='gray';

p.style.background='gray';	
q.style.background='gray';		
r.style.background='gray';	
		
}

if(clickoff===3)  {
	
a.style.background='';
b.style.background='';
c.style.background='';

d.style.background='orange';
e.style.background='purple';
f.style.background='orange';

g.style.background='purple';
h.style.background='orange';
i.style.background='purple';

j.style.background='orange';
k.style.background='purple';
l.style.background='orange';

m.style.background='';
n.style.background='';
o.style.background='';

p.style.background='';	
q.style.background='';		
r.style.background='';	
		
}
	
if(clickoff===4)  {
	
a.style.background='red';
b.style.background='brown';
c.style.background='red';

d.style.background='brown';
e.style.background='yellow';
f.style.background='blue';

g.style.background='brown';
h.style.background='blue';
i.style.background='purple';

j.style.background='';
k.style.background='';
l.style.background='';

m.style.background='';
n.style.background='';
o.style.background='';

p.style.background='';	
q.style.background='';		
r.style.background='';	
		
}
	
if(clickoff===5)  {
	
a.style.background='blue';
b.style.background='orange';
c.style.background='green';

d.style.background='blue';
e.style.background='orange';
f.style.background='green';

g.style.background='blue';
h.style.background='orange';
i.style.background='green';

j.style.background='blue';
k.style.background='orange';
l.style.background='green';

m.style.background='blue';
n.style.background='orange';
o.style.background='green';

p.style.background='blue';	
q.style.background='orange';		
r.style.background='green';	
		
}
	
}

function mx() {

a.style.background='green';
b.style.background='green';
c.style.background='green';

d.style.background='green';
e.style.background='green';
f.style.background='green';

g.style.background='green';
h.style.background='green';
i.style.background='green';

j.style.background='blue';
k.style.background='blue';
l.style.background='blue';

m.style.background='blue';
n.style.background='blue';
o.style.background='blue';
	
r.style.background='blue';	
q.style.background='blue';		
p.style.background='blue';	

clickon++;

if(clickon===2) {
	
a.style.background='';
b.style.background='';
c.style.background='';

d.style.background='';
e.style.background='';
f.style.background='';

g.style.background='';
h.style.background='';
i.style.background='purple';

j.style.background='';
k.style.background='';
l.style.background='';

m.style.background='';
n.style.background='';
o.style.background='';

p.style.background='';	
q.style.background='';		
r.style.background='';	
		
}

if(clickon===3) {
	
a.style.background='';
b.style.background='';
c.style.background='blue';

d.style.background='';
e.style.background='';
f.style.background='blue';

g.style.background='';
h.style.background='';
i.style.background='blue';

j.style.background='';
k.style.background='';
l.style.background='blue';

m.style.background='';
n.style.background='';
o.style.background='blue';

p.style.background='';	
q.style.background='';		
r.style.background='blue';	
		
}

if(clickon===4) {
	
a.style.background='blue';
b.style.background='blue';
c.style.background='';

d.style.background='blue';
e.style.background='blue';
f.style.background='blue';

g.style.background='blue';
h.style.background='blue';
i.style.background='blue';

j.style.background='blue';
k.style.background='blue';
l.style.background='blue';

m.style.background='blue';
n.style.background='blue';
o.style.background='blue';

p.style.background='blue';	
q.style.background='blue';		
r.style.background='blue';	
		
}

if(clickon===5) {
	
a.style.background='';
b.style.background='';
c.style.background='red';

d.style.background='';
e.style.background='';
f.style.background='pink';

g.style.background='';
h.style.background='';
i.style.background='red';

j.style.background='';
k.style.background='';
l.style.background='pink';

m.style.background='';
n.style.background='';
o.style.background='red';

p.style.background='';	
q.style.background='';		
r.style.background='pink';	
		
}

}



function nx() {

a.style.background='green';
b.style.background='green';
c.style.background='green';

d.style.background='green';
e.style.background='green';
f.style.background='green';

g.style.background='gray';
h.style.background='gray';
i.style.background='gray';

j.style.background='gray';
k.style.background='gray';
l.style.background='gray';

m.style.background='pink';
n.style.background='pink';
o.style.background='pink';

r.style.background='pink';	
q.style.background='pink';		
p.style.background='pink';	

clicker++;

if(clicker===2)  {
	
a.style.background='';
b.style.background='';
c.style.background='red';

d.style.background='';
e.style.background='';
f.style.background='yellow';

g.style.background='';
h.style.background='';
i.style.background='green';

j.style.background='';
k.style.background='';
l.style.background='brown';

m.style.background='';
n.style.background='';
o.style.background='pink';

p.style.background='';	
q.style.background='';		
r.style.background='purple';	
	
	
}
	
if(clicker===3)  {
	
a.style.background='';
b.style.background='blue';
c.style.background='';

d.style.background='';
e.style.background='blue';
f.style.background='';

g.style.background='';
h.style.background='blue';
i.style.background='';

j.style.background='';
k.style.background='blue';
l.style.background='';

m.style.background='';
n.style.background='blue';
o.style.background='';

p.style.background='';	
q.style.background='blue';		
r.style.background='';	
	
	
}

if(clicker===4)  {
	
a.style.background='yellow';
b.style.background='purple';
c.style.background='yellow';

d.style.background='purple';
e.style.background='yellow';
f.style.background='purple';

g.style.background='';
h.style.background='';
i.style.background='';

j.style.background='';
k.style.background='';
l.style.background='';

m.style.background='purple';
n.style.background='yellow';
o.style.background='purple';

p.style.background='yellow';	
q.style.background='purple';		
r.style.background='yellow';	
		
}

if(clicker===5)  {
	
a.style.background='brown';
b.style.background='yellow';
c.style.background='brown';

d.style.background='yellow';
e.style.background='brown';
f.style.background='yellow';

g.style.background='brown';
h.style.background='yellow';
i.style.background='brown';

j.style.background='yellow';
k.style.background='brown';
l.style.background='yellow';

m.style.background='brown';
n.style.background='yellow';
o.style.background='brown';

p.style.background='yellow';	
q.style.background='brown';		
r.style.background='yellow';	
	
	
}

}

function ox() {

a.style.background='green';
b.style.background='green';
c.style.background='green';

d.style.background='yellow';
e.style.background='yellow';
f.style.background='yellow';

g.style.background='yellow';
h.style.background='yellow';
i.style.background='yellow';

j.style.background='brown';
k.style.background='brown';
l.style.background='brown';

m.style.background='blue';
n.style.background='blue';
o.style.background='blue';

r.style.background='red';	
q.style.background='red';		
p.style.background='red';	

clic++;

if(clic===2)  {	
	
a.style.background='blue';
b.style.background='blue';
c.style.background='';

d.style.background='blue';
e.style.background='blue';
f.style.background='';

g.style.background='blue';
h.style.background='blue';
i.style.background='';

j.style.background='blue';
k.style.background='blue';
l.style.background='';

m.style.background='blue';
n.style.background='blue';
o.style.background='';

p.style.background='blue';	
q.style.background='blue';		
r.style.background='';	
		
}	
if(clic===3)  {	
	
a.style.background='orange';
b.style.background='';
c.style.background='';

d.style.background='yellow';
e.style.background='';
f.style.background='';

g.style.background='orange';
h.style.background='';
i.style.background='';

j.style.background='yellow';
k.style.background='';
l.style.background='';

m.style.background='orange';
n.style.background='';
o.style.background='';

p.style.background='yellow';	
q.style.background='';		
r.style.background='';	
		
}	

if(clic===4)  {	
	
a.style.background='blue';
b.style.background='blue';
c.style.background='';

d.style.background='';
e.style.background='blue';
f.style.background='blue';

g.style.background='';
h.style.background='orange';
i.style.background='';

j.style.background='';
k.style.background='';
l.style.background='red';

m.style.background='';
n.style.background='red';
o.style.background='';

p.style.background='';	
q.style.background='purple';		
r.style.background='';	
		
}	

if(clic===5)  {	
	
a.style.background='purple';
b.style.background='pink';
c.style.background='purple';

d.style.background='pink';
e.style.background='purple';
f.style.background='pink';

g.style.background='purple';
h.style.background='pink';
i.style.background='purple';

j.style.background='pink';
k.style.background='purple';
l.style.background='pink';

m.style.background='purple';
n.style.background='pink';
o.style.background='purple';

p.style.background='pink';	
q.style.background='purple';		
r.style.background='pink';	
		
}	
	
}

function px() {

a.style.background='yellow';
b.style.background='yellow';
c.style.background='yellow';

d.style.background='';
e.style.background='';
f.style.background='';

g.style.background='';
h.style.background='';
i.style.background='';

j.style.background='';
k.style.background='';
l.style.background='';

m.style.background='';
n.style.background='';
o.style.background='';

r.style.background='red';	
q.style.background='red';		
p.style.background='red';	

clicking++;

if(clicking===2) {
	
a.style.background='';
b.style.background='';
c.style.background='';

d.style.background='';
e.style.background='';
f.style.background='';

g.style.background='';
h.style.background='';
i.style.background='';

j.style.background='purple';
k.style.background='';
l.style.background='';

m.style.background='';
n.style.background='';
o.style.background='';

r.style.background='';	
q.style.background='';		
p.style.background='';
	
}

if(clicking===3) {
	
a.style.background='';
b.style.background='';
c.style.background='';

d.style.background='';
e.style.background='';
f.style.background='';

g.style.background='';
h.style.background='';
i.style.background='';

j.style.background='red';
k.style.background='';
l.style.background='';

m.style.background='red';
n.style.background='';
o.style.background='';

r.style.background='';	
q.style.background='';		
p.style.background='';
	
}

if(clicking===4) {
	
a.style.background='blue';
b.style.background='';
c.style.background='blue';

d.style.background='';
e.style.background='';
f.style.background='';

g.style.background='green';
h.style.background='green';
i.style.background='green';

j.style.background='';
k.style.background='';
l.style.background='';

m.style.background='';
n.style.background='';
o.style.background='';

r.style.background='brown';	
q.style.background='';		
p.style.background='';
	
}

if(clicking===5) {
	
a.style.background='red';
b.style.background='pink';
c.style.background='red';

d.style.background='yellow';
e.style.background='orange';
f.style.background='purple';

g.style.background='red';
h.style.background='pink';
i.style.background='red';

j.style.background='yellow';
k.style.background='orange';
l.style.background='purple';

m.style.background='red';
n.style.background='pink';
o.style.background='red';

r.style.background='yellow';	
q.style.background='orange';		
p.style.background='purple';
	
}

}

function qx() {

a.style.background='yellow';
b.style.background='yellow';
c.style.background='yellow';

d.style.background='yellow';
e.style.background='yellow';
f.style.background='yellow';

g.style.background='yellow';
h.style.background='yellow';
i.style.background='yellow';

j.style.background='red';
k.style.background='red';
l.style.background='red';

m.style.background='red';
n.style.background='red';
o.style.background='red';

r.style.background='red';	
q.style.background='red';		
p.style.background='red';	
	
clicks++;

if(clicks===2) {

a.style.background='orange';
b.style.background='orange';
c.style.background='orange';

d.style.background='orange';
e.style.background='orange';
f.style.background='orange';

g.style.background='orange';
h.style.background='orange';
i.style.background='orange';

j.style.background='orange';
k.style.background='orange';
l.style.background='orange';

m.style.background='orange';
n.style.background='orange';
o.style.background='orange';

r.style.background='orange';	
q.style.background='orange';		
p.style.background='orange';

}	

if(clicks===3) {

a.style.background='brown';
b.style.background='brown';
c.style.background='brown';

d.style.background='brown';
e.style.background='blue';
f.style.background='blue';

g.style.background='blue';
h.style.background='blue';
i.style.background='blue';

j.style.background='blue';
k.style.background='blue';
l.style.background='blue';

m.style.background='blue';
n.style.background='blue';
o.style.background='blue';

r.style.background='blue';	
q.style.background='blue';		
p.style.background='blue';

}	

if(clicks===4) {

a.style.background='purple';
b.style.background='orange';
c.style.background='blue';

d.style.background='orange';
e.style.background='blue';
f.style.background='purple';

g.style.background='blue';
h.style.background='purple';
i.style.background='orange';

j.style.background='';
k.style.background='';
l.style.background='';

m.style.background='';
n.style.background='';
o.style.background='';

r.style.background='';	
q.style.background='';		
p.style.background='';

}	

if(clicks===5) {
	
a.style.background='';
b.style.background='';
c.style.background='';

d.style.background='';
e.style.background='';
f.style.background='';

g.style.background='';
h.style.background='';
i.style.background='';

j.style.background='';
k.style.background='';
l.style.background='';

m.style.background='';
n.style.background='';
o.style.background='';

r.style.background='purple';	
q.style.background='';		
p.style.background='';
	
}
	
}

function rx() {

a.style.background='yellow';
b.style.background='yellow';
c.style.background='yellow';

d.style.background='yellow';
e.style.background='yellow';
f.style.background='yellow';

g.style.background='yellow';
h.style.background='yellow';
i.style.background='yellow';

j.style.background='yellow';
k.style.background='yellow';
l.style.background='yellow';

m.style.background='yellow';
n.style.background='yellow';
o.style.background='yellow';

r.style.background='yellow';	
q.style.background='yellow';		
p.style.background='yellow';	
	
click++;

if(click===2) {

a.style.background='red';
b.style.background='red';
c.style.background='red';

d.style.background='red';
e.style.background='red';
f.style.background='red';

g.style.background='red';
h.style.background='red';
i.style.background='red';

j.style.background='red';
k.style.background='red';
l.style.background='red';

m.style.background='red';
n.style.background='red';
o.style.background='red';

r.style.background='red';	
q.style.background='red';		
p.style.background='red';
	
}	

if(click===3) {

a.style.background='green';
b.style.background='';
c.style.background='';

d.style.background='';
e.style.background='';
f.style.background='';

g.style.background='';
h.style.background='';
i.style.background='';

j.style.background='';
k.style.background='';
l.style.background='';

m.style.background='';
n.style.background='';
o.style.background='';

r.style.background='';	
q.style.background='';		
p.style.background='';
	
}	

if(click===4) {

a.style.background='red';
b.style.background='blue';
c.style.background='red';

d.style.background='blue';
e.style.background='blue';
f.style.background='red';

g.style.background='red';
h.style.background='blue';
i.style.background='red';

j.style.background='blue';
k.style.background='red';
l.style.background='blue';

m.style.background='red';
n.style.background='red';
o.style.background='red';

r.style.background='blue';	
q.style.background='blue';		
p.style.background='blue';
	
}	

if(click===5) {
	
a.style.background='';
b.style.background='';
c.style.background='';

d.style.background='';
e.style.background='';
f.style.background='';

g.style.background='';
h.style.background='';
i.style.background='';

j.style.background='orange';
k.style.background='';
l.style.background='';

m.style.background='';
n.style.background='';
o.style.background='';

r.style.background='';	
q.style.background='';		
p.style.background='';
	
}
	
}

function az() {

a.style.background='red';	

clw++;

if(clw===2) {
	
u.style.background='black';
t.style.background='';
s.style.background='black';
r.style.background='';
q.style.background='black';
p.style.background='';
o.style.background='black';
n.style.background='';
m.style.background='black';
l.style.background='';
k.style.background='black';
j.style.background='';
i.style.background='yellow';
h.style.background='';
g.style.background='yellow';
f.style.background='';
e.style.background='yellow';
d.style.background='';
c.style.background='yellow';
b.style.background='';	
a.style.background='yellow';		
		
}

if(clw===3) {
	
u.style.background='gray';
t.style.background='red';
s.style.background='gray';
r.style.background='red';
q.style.background='gray';
p.style.background='red';
o.style.background='gray';
n.style.background='red';
m.style.background='gray';
l.style.background='red';
k.style.background='gray';
j.style.background='red';
i.style.background='gray';
h.style.background='red';
g.style.background='gray';
f.style.background='red';
e.style.background='gray';
d.style.background='red';
c.style.background='gray';
b.style.background='red';	
a.style.background='gray';		
		
}

if(clw===4) {
	
u.style.background='';
t.style.background='blue';
s.style.background='blue';
r.style.background='blue';
q.style.background='blue';
p.style.background='blue';
o.style.background='blue';
n.style.background='blue';
m.style.background='blue';
l.style.background='blue';
k.style.background='blue';
j.style.background='blue';
i.style.background='blue';
h.style.background='blue';
g.style.background='blue';
f.style.background='blue';
e.style.background='blue';
d.style.background='blue';
c.style.background='blue';
b.style.background='blue';	
a.style.background='blue';		
		
}

if(clw===5) {
	
u.style.background='';
t.style.background='red';
s.style.background='red';
r.style.background='red';
q.style.background='red';
p.style.background='red';
o.style.background='red';
n.style.background='red';
m.style.background='red';
l.style.background='red';
k.style.background='red';
j.style.background='red';
i.style.background='red';
h.style.background='red';
g.style.background='red';
f.style.background='red';
e.style.background='red';
d.style.background='red';
c.style.background='red';
b.style.background='red';	
a.style.background='red';		
		
}

	
}

function bz() {

b.style.background='yellow';	
a.style.background='';	
	
clg++;

if(clg===2) {
	
u.style.background='purple';
t.style.background='';
s.style.background='purple';
r.style.background='';
q.style.background='purple';
p.style.background='';
o.style.background='purple';
n.style.background='';
m.style.background='purple';
l.style.background='';
k.style.background='purple';
j.style.background='';
i.style.background='red';
h.style.background='';
g.style.background='red';
f.style.background='';
e.style.background='red';
d.style.background='';
c.style.background='red';
b.style.background='';	
a.style.background='red';		
		
}

if(clg===3) {
	
u.style.background='yellow';
t.style.background='yellow';
s.style.background='yellow';
r.style.background='';
q.style.background='';
p.style.background='';
o.style.background='yellow';
n.style.background='yellow';
m.style.background='yellow';
l.style.background='';
k.style.background='';
j.style.background='';
i.style.background='brown';
h.style.background='brown';
g.style.background='brown';
f.style.background='';
e.style.background='';
d.style.background='';
c.style.background='brown';
b.style.background='brown';	
a.style.background='brown';			
		
}

if(clg===4) {
	
u.style.background='blue';
t.style.background='blue';
s.style.background='blue';
r.style.background='blue';
q.style.background='blue';
p.style.background='blue';
o.style.background='blue';
n.style.background='blue';
m.style.background='blue';
l.style.background='blue';
k.style.background='blue';
j.style.background='blue';
i.style.background='blue';
h.style.background='blue';
g.style.background='blue';
f.style.background='blue';
e.style.background='blue';
d.style.background='blue';
c.style.background='blue';
b.style.background='blue';	
a.style.background='';
			
}

if(clg===5) {
	
u.style.background='purple';
t.style.background='purple';
s.style.background='purple';
r.style.background='purple';
q.style.background='purple';
p.style.background='purple';
o.style.background='purple';
n.style.background='purple';
m.style.background='purple';
l.style.background='purple';
k.style.background='purple';
j.style.background='purple';
i.style.background='purple';
h.style.background='purple';
g.style.background='purple';
f.style.background='purple';
e.style.background='purple';
d.style.background='purple';
c.style.background='purple';
b.style.background='purple';	
a.style.background='';		
		
}

	
}

function cz() {

c.style.background='green';
b.style.background='';	
a.style.background='';	

clu++;

if(clu===2) {
	
u.style.background='gray';
t.style.background='';
s.style.background='gray';
r.style.background='';
q.style.background='gray';
p.style.background='';
o.style.background='gray';
n.style.background='';
m.style.background='gray';
l.style.background='';
k.style.background='gray';
j.style.background='';
i.style.background='black';
h.style.background='';
g.style.background='black';
f.style.background='';
e.style.background='black';
d.style.background='';
c.style.background='black';
b.style.background='';	
a.style.background='black';		
		
}

if(clu===3)  {
	
u.style.background='black';
t.style.background='green';
s.style.background='black';
r.style.background='green';
q.style.background='black';
p.style.background='green';
o.style.background='black';
n.style.background='green';
m.style.background='black';
l.style.background='green';
k.style.background='black';
j.style.background='green';
i.style.background='black';
h.style.background='green';
g.style.background='black';
f.style.background='green';
e.style.background='black';
d.style.background='green';
c.style.background='black';
b.style.background='green';	
a.style.background='black';	
		
}

if(clu===4) {
	
u.style.background='pink';
t.style.background='pink';
s.style.background='pink';
r.style.background='pink';
q.style.background='pink';
p.style.background='pink';
o.style.background='pink';
n.style.background='pink';
m.style.background='pink';
l.style.background='pink';
k.style.background='pink';
j.style.background='pink';
i.style.background='pink';
h.style.background='pink';
g.style.background='pink';
f.style.background='pink';
e.style.background='pink';
d.style.background='pink';
c.style.background='pink';
b.style.background='pink';	
a.style.background='pink';	
		
}

if(clu===5)  {
	
u.style.background='';
t.style.background='';
s.style.background='';
r.style.background='';
q.style.background='';
p.style.background='blue';
o.style.background='';
n.style.background='';
m.style.background='';
l.style.background='';
k.style.background='';
j.style.background='';
i.style.background='';
h.style.background='';
g.style.background='';
f.style.background='';
e.style.background='';
d.style.background='';
c.style.background='';
b.style.background='';	
a.style.background='';	
		
}
	
}

function dz() {

d.style.background='red';
c.style.background='';
b.style.background='';	
a.style.background='';	

clt++;

if(clt===2)  {
	
u.style.background='blue';
t.style.background='blue';
s.style.background='blue';
r.style.background='blue';
q.style.background='blue';
p.style.background='blue';
o.style.background='blue';
n.style.background='blue';
m.style.background='blue';
l.style.background='blue';
k.style.background='';
j.style.background='gray';
i.style.background='gray';
h.style.background='gray';
g.style.background='gray';
f.style.background='gray';
e.style.background='gray';
d.style.background='gray';
c.style.background='gray';
b.style.background='gray';	
a.style.background='gray';		
		
}
	
if(clt===3)  {

u.style.background='blue';
t.style.background='blue';
s.style.background='blue';
r.style.background='blue';
q.style.background='blue';
p.style.background='blue';
o.style.background='blue';
n.style.background='yellow';
m.style.background='yellow';
l.style.background='yellow';
k.style.background='yellow';
j.style.background='yellow';
i.style.background='yellow';
h.style.background='yellow';
g.style.background='orange';
f.style.background='orange';
e.style.background='orange';
d.style.background='orange';
c.style.background='orange';
b.style.background='orange';	
a.style.background='orange';

}	

if(clt===4) {
	
u.style.background='blue';	
t.style.background='blue';
s.style.background='blue';
r.style.background='yellow';
q.style.background='yellow';
p.style.background='yellow';
o.style.background='red';
n.style.background='red';
m.style.background='red';
l.style.background='gray';
k.style.background='gray';
j.style.background='gray';
i.style.background='black';
h.style.background='black';
g.style.background='black';
f.style.background='purple';
e.style.background='purple';
d.style.background='purple';
c.style.background='orange';
b.style.background='orange';	
a.style.background='orange';
		
}

if(clt===5) {
	
u.style.background='pink';	
t.style.background='pink';
s.style.background='pink';
r.style.background='yellow';
q.style.background='red';
p.style.background='gray';
o.style.background='yellow';
n.style.background='red';
m.style.background='gray';
l.style.background='yellow';
k.style.background='red';
j.style.background='gray';
i.style.background='black';
h.style.background='purple';
g.style.background='orange';
f.style.background='black';
e.style.background='purple';
d.style.background='orange';
c.style.background='black';
b.style.background='purple';	
a.style.background='orange';
		
}
	
}

function ez() {

e.style.background='orange';
d.style.background='';
c.style.background='';
b.style.background='';	
a.style.background='';	

clj++;

if(clj===2)  {
	
u.style.background='green';
t.style.background='green';
s.style.background='green';
r.style.background='green';
q.style.background='green';
p.style.background='green';
o.style.background='green';
n.style.background='green';
m.style.background='green';
l.style.background='green';
k.style.background='';
j.style.background='blue';
i.style.background='blue';
h.style.background='blue';
g.style.background='blue';
f.style.background='blue';
e.style.background='blue';
d.style.background='blue';
c.style.background='blue';
b.style.background='blue';	
a.style.background='blue';	
		
}

if(clj===3) {
	
u.style.background='red';	
t.style.background='';
s.style.background='brown';
r.style.background='yellow';
q.style.background='red';
p.style.background='';
o.style.background='brown';
n.style.background='yellow';
m.style.background='red';
l.style.background='';
k.style.background='brown';
j.style.background='yellow';
i.style.background='red';
h.style.background='';
g.style.background='brown';
f.style.background='yellow';
e.style.background='red';
d.style.background='';
c.style.background='brown';
b.style.background='yellow';	
a.style.background='red';
		
}

if(clj===4) {
	
u.style.background='blue';	
t.style.background='blue';
s.style.background='blue';
r.style.background='green';
q.style.background='green';
p.style.background='green';
o.style.background='blue';
n.style.background='blue';
m.style.background='blue';
l.style.background='green';
k.style.background='gray';
j.style.background='yellow';
i.style.background='blue';
h.style.background='blue';
g.style.background='blue';
f.style.background='red';
e.style.background='yellow';
d.style.background='gray';
c.style.background='blue';
b.style.background='blue';	
a.style.background='blue';
		
}

if(clj===5) {
	
u.style.background='';	
t.style.background='';
s.style.background='';
r.style.background='';
q.style.background='';
p.style.background='';
o.style.background='';
n.style.background='';
m.style.background='';
l.style.background='';
k.style.background='';
j.style.background='';
i.style.background='';
h.style.background='blue';
g.style.background='';
f.style.background='';
e.style.background='';
d.style.background='';
c.style.background='';
b.style.background='';	
a.style.background='';
		
}
	
}

function fz() {

f.style.background='blue';
e.style.background='';
d.style.background='';
c.style.background='';
b.style.background='';	
a.style.background='';	

clo++;

if(clo===2) {
	
u.style.background='red';
t.style.background='red';
s.style.background='red';
r.style.background='red';
q.style.background='red';
p.style.background='red';
o.style.background='red';
n.style.background='red';
m.style.background='red';
l.style.background='red';
k.style.background='';
j.style.background='brown';
i.style.background='brown';
h.style.background='brown';
g.style.background='brown';
f.style.background='brown';
e.style.background='brown';
d.style.background='brown';
c.style.background='brown';
b.style.background='brown';	
a.style.background='brown';		
		
}

if(clo===3) {
	
u.style.background='gray';	
t.style.background='';
s.style.background='pink';
r.style.background='';
q.style.background='purple';
p.style.background='';
o.style.background='yellow';
n.style.background='';
m.style.background='gray';
l.style.background='';
k.style.background='pink';
j.style.background='';
i.style.background='purple';
h.style.background='';
g.style.background='yellow';
f.style.background='';
e.style.background='gray';
d.style.background='';
c.style.background='pink';
b.style.background='';	
a.style.background='purple';
		
}

if(clo===4) {
	
u.style.background='';	
t.style.background='red';
s.style.background='red';
r.style.background='red';
q.style.background='red';
p.style.background='';
o.style.background='';
n.style.background='red';
m.style.background='red';
l.style.background='red';
k.style.background='red';
j.style.background='';
i.style.background='';
h.style.background='red';
g.style.background='red';
f.style.background='red';
e.style.background='red';
d.style.background='';
c.style.background='';
b.style.background='red';	
a.style.background='red';
		
}

if(clo===5) {
	
u.style.background='blue';	
t.style.background='gray';
s.style.background='blue';
r.style.background='gray';
q.style.background='blue';
p.style.background='gray';
o.style.background='blue';
n.style.background='gray';
m.style.background='blue';
l.style.background='gray';
k.style.background='blue';
j.style.background='gray';
i.style.background='blue';
h.style.background='gray';
g.style.background='blue';
f.style.background='gray';
e.style.background='blue';
d.style.background='gray';
c.style.background='blue';
b.style.background='gray';	
a.style.background='blue';
		
}
	
}

function gz() {

g.style.background='purple';
f.style.background='';
e.style.background='';
d.style.background='';
c.style.background='';
b.style.background='';	
a.style.background='';	

clz++;

if(clz===2)  {
	
u.style.background='red';	
t.style.background='blue';
s.style.background='red';
r.style.background='blue';
q.style.background='red';
p.style.background='blue';
o.style.background='red';
n.style.background='blue';
m.style.background='red';
l.style.background='blue';
k.style.background='';
j.style.background='red';
i.style.background='blue';
h.style.background='red';
g.style.background='blue';
f.style.background='red';
e.style.background='blue';
d.style.background='red';
c.style.background='blue';
b.style.background='red';	
a.style.background='blue';	
		
}

if(clz===3) {
	
u.style.background='blue';	
t.style.background='green';
s.style.background='yellow';
r.style.background='orange';
q.style.background='purple';
p.style.background='gray';
o.style.background='pink';
n.style.background='brown';
m.style.background='black';
l.style.background='blue';
k.style.background='green';
j.style.background='yellow';
i.style.background='orange';
h.style.background='purple';
g.style.background='gray';
f.style.background='pink';
e.style.background='brown';
d.style.background='black';
c.style.background='blue';
b.style.background='green';	
a.style.background='yellow';
		
}

if(clz===4) {
	
u.style.background='red';	
t.style.background='orange';
s.style.background='red';
r.style.background='yellow';
q.style.background='pink';
p.style.background='yellow';
o.style.background='red';
n.style.background='orange';
m.style.background='red';
l.style.background='yellow';
k.style.background='pink';
j.style.background='yellow';
i.style.background='red';
h.style.background='orange';
g.style.background='red';
f.style.background='yellow';
e.style.background='pink';
d.style.background='yellow';
c.style.background='red';
b.style.background='orange';	
a.style.background='red';
		
}

if(clz===5) {
	
u.style.background='black';	
t.style.background='green';
s.style.background='black';
r.style.background='gray';
q.style.background='blue';
p.style.background='gray';
o.style.background='black';
n.style.background='green';
m.style.background='black';
l.style.background='gray';
k.style.background='blue';
j.style.background='gray';
i.style.background='black';
h.style.background='green';
g.style.background='black';
f.style.background='gray';
e.style.background='blue';
d.style.background='gray';
c.style.background='black';
b.style.background='green';	
a.style.background='black';
		
}
	
}

function hz() {

h.style.background='pink';
g.style.background='';
f.style.background='';
e.style.background='';
d.style.background='';
c.style.background='';
b.style.background='';	
a.style.background='';	

clp++;

if(clp===2)  {
	
u.style.background='purple';	
t.style.background='brown';
s.style.background='blue';
r.style.background='purple';
q.style.background='blue';
p.style.background='brown';
o.style.background='purple';
n.style.background='brown';
m.style.background='purple';
l.style.background='blue';
k.style.background='';
j.style.background='purple';
i.style.background='brown';
h.style.background='blue';
g.style.background='purple';
f.style.background='blue';
e.style.background='brown';
d.style.background='purple';
c.style.background='brown';
b.style.background='blue';	
a.style.background='purple';	
		
}

if(clp===3) {
	
u.style.background='blue';	
t.style.background='red';
s.style.background='yellow';
r.style.background='';
q.style.background='';
p.style.background='';
o.style.background='blue';
n.style.background='red';
m.style.background='yellow';
l.style.background='';
k.style.background='';
j.style.background='';
i.style.background='blue';
h.style.background='red';
g.style.background='yellow';
f.style.background='';
e.style.background='';
d.style.background='';
c.style.background='blue';
b.style.background='red';	
a.style.background='yellow';
		
}

if(clp===4) {
	
u.style.background='brown';	
t.style.background='green';
s.style.background='black';
r.style.background='';
q.style.background='';
p.style.background='';
o.style.background='brown';
n.style.background='green';
m.style.background='black';
l.style.background='';
k.style.background='';
j.style.background='';
i.style.background='brown';
h.style.background='green';
g.style.background='black';
f.style.background='';
e.style.background='';
d.style.background='';
c.style.background='brown';
b.style.background='green';	
a.style.background='black';
		
}

if(clp===5) {
	
u.style.background='purple';	
t.style.background='';
s.style.background='pink';
r.style.background='';
q.style.background='gray';
p.style.background='';
o.style.background='purple';
n.style.background='';
m.style.background='pink';
l.style.background='';
k.style.background='gray';
j.style.background='';
i.style.background='purple';
h.style.background='';
g.style.background='pink';
f.style.background='';
e.style.background='gray';
d.style.background='';
c.style.background='purple';
b.style.background='';	
a.style.background='pink';
		
}
	
}

function iz() {

i.style.background='brown';
h.style.background='';
g.style.background='';
f.style.background='';
e.style.background='';
d.style.background='';
c.style.background='';
b.style.background='';	
a.style.background='';	

clx++;

if(clx===2) {
	
u.style.background='blue';	
t.style.background='yellow';
s.style.background='blue';
r.style.background='yellow';
q.style.background='blue';
p.style.background='yellow';
o.style.background='blue';
n.style.background='yellow';
m.style.background='blue';
l.style.background='yellow';
k.style.background='';
j.style.background='purple';
i.style.background='blue';
h.style.background='purple';
g.style.background='blue';
f.style.background='purple';
e.style.background='blue';
d.style.background='purple';
c.style.background='blue';
b.style.background='purple';	
a.style.background='blue';
		
}

if(clx===3) {
	
u.style.background='blue';	
t.style.background='blue';
s.style.background='blue';
r.style.background='blue';
q.style.background='blue';
p.style.background='blue';
o.style.background='blue';
n.style.background='blue';
m.style.background='blue';
l.style.background='blue';
k.style.background='blue';
j.style.background='blue';
i.style.background='blue';
h.style.background='blue';
g.style.background='blue';
f.style.background='blue';
e.style.background='blue';
d.style.background='blue';
c.style.background='blue';
b.style.background='';	
a.style.background='blue';
		
}

if(clx===4) {
	
u.style.background='';	
t.style.background='';
s.style.background='';
r.style.background='';
q.style.background='';
p.style.background='';
o.style.background='';
n.style.background='';
m.style.background='';
l.style.background='';
k.style.background='';
j.style.background='';
i.style.background='';
h.style.background='';
g.style.background='';
f.style.background='';
e.style.background='';
d.style.background='';
c.style.background='';
b.style.background='';	
a.style.background='';
		
}

if(clx===5) {
	
u.style.background='pink';	
t.style.background='purple';
s.style.background='yellow';
r.style.background='gray';
q.style.background='pink';
p.style.background='purple';
o.style.background='yellow';
n.style.background='gray';
m.style.background='';
l.style.background='pink';
k.style.background='purple';
j.style.background='yellow';
i.style.background='gray';
h.style.background='pink';
g.style.background='purple';
f.style.background='yellow';
e.style.background='gray';
d.style.background='';
c.style.background='pink';
b.style.background='purple';	
a.style.background='yellow';
		
}

if(clx===6)  {
	
alert('Pobeda.Cestitamo :).Vidimo se u nekoj novijoj verziji.');	
	
i.style.background='';
h.style.background='';
g.style.background='';
f.style.background='';
e.style.background='';
d.style.background='';
c.style.background='';
b.style.background='';	
a.style.background='';

document.querySelector('#e').innerHTML +='<a href="ucenje1.html">Vrati se na pocetak</a>';
		
}

	
}

function jz() {

j.style.background='purple';
i.style.background='';
h.style.background='';
g.style.background='';
f.style.background='';
e.style.background='';
d.style.background='';
c.style.background='';
b.style.background='';	
a.style.background='';	

cla++;

if(cla===2)  {
	
u.style.background='pink';	
t.style.background='orange';
s.style.background='pink';
r.style.background='orange';
q.style.background='pink';
p.style.background='orange';
o.style.background='pink';
n.style.background='orange';
m.style.background='pink';
l.style.background='orange';
k.style.background='';
j.style.background='purple';
i.style.background='red';
h.style.background='purple';
g.style.background='red';
f.style.background='purple';
e.style.background='red';
d.style.background='purple';
c.style.background='red';
b.style.background='purple';	
a.style.background='red';
		
}

if(cla===3) {
	
u.style.background='';	
t.style.background='';
s.style.background='';
r.style.background='';
q.style.background='';
p.style.background='';
o.style.background='red';
n.style.background='black';
m.style.background='gray';
l.style.background='black';
k.style.background='gray';
j.style.background='red';
i.style.background='gray';
h.style.background='red';
g.style.background='black';
f.style.background='red';
e.style.background='black';
d.style.background='gray';
c.style.background='black';
b.style.background='gray';	
a.style.background='red';
		
}

if(cla===4) {
	
u.style.background='blue';	
t.style.background='blue';
s.style.background='blue';
r.style.background='blue';
q.style.background='blue';
p.style.background='blue';
o.style.background='gray';
n.style.background='gray';
m.style.background='gray';
l.style.background='gray';
k.style.background='gray';
j.style.background='gray';
i.style.background='gray';
h.style.background='gray';
g.style.background='gray';
f.style.background='blue';
e.style.background='blue';
d.style.background='blue';
c.style.background='blue';
b.style.background='blue';	
a.style.background='blue';
		
}

if(cla===5) {
	
u.style.background='brown';	
t.style.background='brown';
s.style.background='brown';
r.style.background='brown';
q.style.background='brown';
p.style.background='blue';
o.style.background='blue';
n.style.background='blue';
m.style.background='blue';
l.style.background='purple';
k.style.background='purple';
j.style.background='purple';
i.style.background='purple';
h.style.background='pink';
g.style.background='pink';
f.style.background='pink';
e.style.background='pink';
d.style.background='red';
c.style.background='red';
b.style.background='red';	
a.style.background='red';
		
}
	
}

function kz() {

k.style.background='red';
j.style.background='';
i.style.background='';
h.style.background='';
g.style.background='';
f.style.background='';
e.style.background='';
d.style.background='';
c.style.background='';
b.style.background='';	
a.style.background='';	

clk++;

if(clk===2) {
	
u.style.background='green';	
t.style.background='red';
s.style.background='green';
r.style.background='red';
q.style.background='green';
p.style.background='red';
o.style.background='green';
n.style.background='red';
m.style.background='green';
l.style.background='red';
k.style.background='';
j.style.background='orange';
i.style.background='purple';
h.style.background='orange';
g.style.background='purple';
f.style.background='orange';
e.style.background='purple';
d.style.background='orange';
c.style.background='purple';
b.style.background='orange';	
a.style.background='purple';	
		
}

if(clk===3) {
	
u.style.background='';	
t.style.background='red';
s.style.background='';
r.style.background='red';
q.style.background='';
p.style.background='red';
o.style.background='';
n.style.background='brown';
m.style.background='';
l.style.background='brown';
k.style.background='brown';
j.style.background='brown';
i.style.background='';
h.style.background='gray';
g.style.background='';
f.style.background='gray';
e.style.background='gray';
d.style.background='gray';
c.style.background='';
b.style.background='gray';	
a.style.background='';
		
}

if(clk===4) {
	
u.style.background='brown';	
t.style.background='';
s.style.background='brown';
r.style.background='';
q.style.background='brown';
p.style.background='';
o.style.background='brown';
n.style.background='';
m.style.background='brown';
l.style.background='';
k.style.background='brown';
j.style.background='';
i.style.background='brown';
h.style.background='';
g.style.background='brown';
f.style.background='';
e.style.background='brown';
d.style.background='';
c.style.background='brown';
b.style.background='';	
a.style.background='brown';
		
}

if(clk===5) {
	
u.style.background='';	
t.style.background='';
s.style.background='';
r.style.background='';
q.style.background='';
p.style.background='';
o.style.background='';
n.style.background='';
m.style.background='';
l.style.background='';
k.style.background='orange';
j.style.background='';
i.style.background='';
h.style.background='';
g.style.background='';
f.style.background='';
e.style.background='';
d.style.background='';
c.style.background='';
b.style.background='';	
a.style.background='';
		
}
	
}

function lz() {

l.style.background='yellow';
k.style.background='';
j.style.background='';
i.style.background='';
h.style.background='';
g.style.background='';
f.style.background='';
e.style.background='';
d.style.background='';
c.style.background='';
b.style.background='';	
a.style.background='';	

cll++;

if(cll===2) {
	
u.style.background='pink';	
t.style.background='pink';
s.style.background='pink';
r.style.background='pink';
q.style.background='pink';
p.style.background='pink';
o.style.background='pink';
n.style.background='pink';
m.style.background='pink';
l.style.background='pink';
k.style.background='';
j.style.background='orange';
i.style.background='orange';
h.style.background='orange';
g.style.background='orange';
f.style.background='orange';
e.style.background='orange';
d.style.background='orange';
c.style.background='orange';
b.style.background='orange';	
a.style.background='orange';	
		
}

if(cll===3) {
	
u.style.background='black';	
t.style.background='';
s.style.background='black';
r.style.background='';
q.style.background='black';
p.style.background='';
o.style.background='black';
n.style.background='';
m.style.background='black';
l.style.background='';
k.style.background='black';
j.style.background='';
i.style.background='black';
h.style.background='';
g.style.background='black';
f.style.background='';
e.style.background='black';
d.style.background='';
c.style.background='black';
b.style.background='';	
a.style.background='black';
		
}

if(cll===4) {
	
u.style.background='';	
t.style.background='orange';
s.style.background='orange';
r.style.background='';
q.style.background='gray';
p.style.background='gray';
o.style.background='';
n.style.background='brown';
m.style.background='brown';
l.style.background='';
k.style.background='green';
j.style.background='green';
i.style.background='';
h.style.background='yellow';
g.style.background='yellow';
f.style.background='';
e.style.background='blue';
d.style.background='blue';
c.style.background='';
b.style.background='red';	
a.style.background='red';
		
}

if(cll===5) {
	
u.style.background='blue';	
t.style.background='';
s.style.background='';
r.style.background='blue';
q.style.background='';
p.style.background='';
o.style.background='blue';
n.style.background='';
m.style.background='';
l.style.background='blue';
k.style.background='';
j.style.background='';
i.style.background='orange';
h.style.background='';
g.style.background='';
f.style.background='';
e.style.background='orange';
d.style.background='';
c.style.background='';
b.style.background='';	
a.style.background='orange';
	
}

if(cll===6)  {
	
alert('Jos malo');	
	
l.style.background='';
k.style.background='';
j.style.background='';
i.style.background='';
h.style.background='';
g.style.background='';
f.style.background='';
e.style.background='';
d.style.background='';
c.style.background='';
b.style.background='';	
a.style.background='';

l.style.display='none';
k.style.display='none';
j.style.display='none';

border.innerHTML='#e{height: 180px;}';
		
}

	
}

function mz() {

m.style.background='green';
l.style.background='';
k.style.background='';
j.style.background='';
i.style.background='';
h.style.background='';
g.style.background='';
f.style.background='';
e.style.background='';
d.style.background='';
c.style.background='';
b.style.background='';	
a.style.background='';	

cl++;

if(cl===2) {

u.style.background='blue';	
t.style.background='blue';
s.style.background='blue';
r.style.background='blue';
q.style.background='blue';
p.style.background='blue';
o.style.background='blue';
n.style.background='blue';
m.style.background='blue';
l.style.background='blue';
k.style.background='';
j.style.background='yellow';
i.style.background='yellow';
h.style.background='yellow';
g.style.background='yellow';
f.style.background='yellow';
e.style.background='yellow';
d.style.background='yellow';
c.style.background='yellow';
b.style.background='yellow';	
a.style.background='yellow';	
		
}

if(cl===3) {
	
u.style.background='';	
t.style.background='black';
s.style.background='';
r.style.background='orange';
q.style.background='';
p.style.background='';
o.style.background='black';
n.style.background='';
m.style.background='orange';
l.style.background='';
k.style.background='';
j.style.background='black';
i.style.background='';
h.style.background='orange';
g.style.background='';
f.style.background='orange';
e.style.background='';
d.style.background='';
c.style.background='black';
b.style.background='';	
a.style.background='orange';
		
}

if(cl===4) {
	
u.style.background='yellow';	
t.style.background='yellow';
s.style.background='yellow';
r.style.background='';
q.style.background='';
p.style.background='';
o.style.background='red';
n.style.background='red';
m.style.background='red';
l.style.background='';
k.style.background='';
j.style.background='';
i.style.background='black';
h.style.background='black';
g.style.background='black';
f.style.background='';
e.style.background='';
d.style.background='';
c.style.background='blue';
b.style.background='blue';	
a.style.background='blue';
		
}

if(cl===5) {
	
u.style.background='orange';	
t.style.background='';
s.style.background='orange';
r.style.background='';
q.style.background='';
p.style.background='';
o.style.background='red';
n.style.background='black';
m.style.background='red';
l.style.background='';
k.style.background='';
j.style.background='';
i.style.background='brown';
h.style.background='brown';
g.style.background='brown';
f.style.background='yellow';
e.style.background='yellow';
d.style.background='yellow';
c.style.background='gray';
b.style.background='green';	
a.style.background='green';
		
}

	
}

function nz() {

n.style.background='red';
m.style.background='';
l.style.background='';
k.style.background='';
j.style.background='';
i.style.background='';
h.style.background='';
g.style.background='';
f.style.background='';
e.style.background='';
d.style.background='';
c.style.background='';
b.style.background='';	
a.style.background='';	

cli++;

if(cli===2) {
	
u.style.background='red';	
t.style.background='purple';
s.style.background='red';
r.style.background='';
q.style.background='';
p.style.background='';
o.style.background='';
n.style.background='';
m.style.background='';
l.style.background='';
k.style.background='';
j.style.background='';
i.style.background='';
h.style.background='';
g.style.background='';
f.style.background='';
e.style.background='';
d.style.background='';
c.style.background='orange';
b.style.background='yellow';	
a.style.background='orange';
	
	
	
}

if(cli===3) {
	
u.style.background='black';	
t.style.background='purple';
s.style.background='black';
r.style.background='purple';
q.style.background='black';
p.style.background='purple';
o.style.background='black';
n.style.background='purple';
m.style.background='black';
l.style.background='purple';
k.style.background='black';
j.style.background='purple';
i.style.background='black';
h.style.background='purple';
g.style.background='black';
f.style.background='purple';
e.style.background='black';
d.style.background='purple';
c.style.background='black';
b.style.background='purple';	
a.style.background='black';
		
}

if(cli===4) {
	
u.style.background='';	
t.style.background='';
s.style.background='';
r.style.background='';
q.style.background='';
p.style.background='';
o.style.background='';
n.style.background='';
m.style.background='';
l.style.background='gray';
k.style.background='';
j.style.background='';
i.style.background='';
h.style.background='';
g.style.background='';
f.style.background='';
e.style.background='';
d.style.background='';
c.style.background='';
b.style.background='';	
a.style.background='';
		
}

if(cli===5) {
	
u.style.background='red';	
t.style.background='';
s.style.background='blue';
r.style.background='';
q.style.background='red';
p.style.background='';
o.style.background='blue';
n.style.background='';
m.style.background='red';
l.style.background='';
k.style.background='blue';
j.style.background='';
i.style.background='red';
h.style.background='';
g.style.background='blue';
f.style.background='';
e.style.background='red';
d.style.background='';
c.style.background='blue';
b.style.background='';	
a.style.background='red';
			
}
	
}

function oz() {

o.style.background='orange';
n.style.background='';
m.style.background='';
l.style.background='';
k.style.background='';
j.style.background='';
i.style.background='';
h.style.background='';
g.style.background='';
f.style.background='';
e.style.background='';
d.style.background='';
c.style.background='';
b.style.background='';	
a.style.background='';	
	
clic++;

if(clic===2)  {

u.style.background='';	
t.style.background='';
s.style.background='';
r.style.background='';
q.style.background='';
p.style.background='';
o.style.background='';
n.style.background='';
m.style.background='';
l.style.background='';
k.style.background='blue';
j.style.background='red';
i.style.background='red';
h.style.background='blue';
g.style.background='blue';
f.style.background='red';
e.style.background='red';
d.style.background='blue';
c.style.background='blue';
b.style.background='blue';	
a.style.background='red';

}	

if(clic===3)  {

u.style.background='';	
t.style.background='';
s.style.background='';
r.style.background='blue';
q.style.background='black';
p.style.background='blue';
o.style.background='blue';
n.style.background='black';
m.style.background='blue';
l.style.background='green';
k.style.background='green';
j.style.background='red';
i.style.background='green';
h.style.background='green';
g.style.background='red';
f.style.background='yellow';
e.style.background='pink';
d.style.background='pink';
c.style.background='yellow';
b.style.background='pink';	
a.style.background='pink';

}	

if(clic===4)  {

u.style.background='';	
t.style.background='';
s.style.background='';
r.style.background='';
q.style.background='';
p.style.background='';
o.style.background='brown';
n.style.background='purple';
m.style.background='purple';
l.style.background='brown';
k.style.background='green';
j.style.background='green';
i.style.background='gray';
h.style.background='yellow';
g.style.background='yellow';
f.style.background='black';
e.style.background='blue';
d.style.background='blue';
c.style.background='orange';
b.style.background='red';	
a.style.background='red';

}	

if(clic===5)  {

u.style.background='';	
t.style.background='';
s.style.background='';
r.style.background='';
q.style.background='';
p.style.background='';
o.style.background='';
n.style.background='';
m.style.background='black';
l.style.background='';
k.style.background='';
j.style.background='';
i.style.background='';
h.style.background='';
g.style.background='';
f.style.background='';
e.style.background='';
d.style.background='';
c.style.background='';
b.style.background='';	
a.style.background='';

}	

if(clic===6)  {
	
alert('Jos malo');	
	
o.style.background='';
n.style.background='';
m.style.background='';
l.style.background='';
k.style.background='';
j.style.background='';
i.style.background='';
h.style.background='';
g.style.background='';
f.style.background='';
e.style.background='';
d.style.background='';
c.style.background='';
b.style.background='';	
a.style.background='';

o.style.display='none';
n.style.display='none';
m.style.display='none';

border.innerHTML='#e{height: 240px;}';
		
}
	
}

function pz() {

p.style.background='blue';
o.style.background='';
n.style.background='';
m.style.background='';
l.style.background='';
k.style.background='';
j.style.background='';
i.style.background='';
h.style.background='';
g.style.background='';
f.style.background='';
e.style.background='';
d.style.background='';
c.style.background='';
b.style.background='';	
a.style.background='';	

clicker++;

if(clicker===2) {

u.style.background='red';
t.style.background='green';
s.style.background='red';
r.style.background='green';
q.style.background='';
p.style.background='';
o.style.background='';
n.style.background='';
m.style.background='red';
l.style.background='green';
k.style.background='red';
j.style.background='green';
i.style.background='';
h.style.background='';
g.style.background='';
f.style.background='';
e.style.background='';
d.style.background='red';
c.style.background='green';
b.style.background='red';	
a.style.background='green';	
		
}

if(clicker===3) {

u.style.background='';
t.style.background='orange';
s.style.background='red';
r.style.background='';
q.style.background='orange';
p.style.background='red';
o.style.background='';
n.style.background='orange';
m.style.background='red';
l.style.background='';
k.style.background='orange';
j.style.background='red';
i.style.background='';
h.style.background='orange';
g.style.background='red';
f.style.background='';
e.style.background='orange';
d.style.background='red';
c.style.background='';
b.style.background='orange';	
a.style.background='red';	
		
}

if(clicker===4) {

u.style.background='';
t.style.background='red';
s.style.background='orange';
r.style.background='';
q.style.background='red';
p.style.background='orange';
o.style.background='';
n.style.background='red';
m.style.background='orange';
l.style.background='';
k.style.background='red';
j.style.background='orange';
i.style.background='';
h.style.background='red';
g.style.background='orange';
f.style.background='';
e.style.background='red';
d.style.background='orange';
c.style.background='';
b.style.background='red';	
a.style.background='orange';	
		
}

if(clicker===5) {

u.style.background='';
t.style.background='';
s.style.background='';
r.style.background='';
q.style.background='';
p.style.background='';
o.style.background='';
n.style.background='';
m.style.background='';
l.style.background='';
k.style.background='';
j.style.background='';
i.style.background='';
h.style.background='';
g.style.background='';
f.style.background='';
e.style.background='';
d.style.background='';
c.style.background='';
b.style.background='';	
a.style.background='';	
		
}

	
}

function qz() {

q.style.background='purple';
p.style.background='';
o.style.background='';
n.style.background='';
m.style.background='';
l.style.background='';
k.style.background='';
j.style.background='';
i.style.background='';
h.style.background='';
g.style.background='';
f.style.background='';
e.style.background='';
d.style.background='';
c.style.background='';
b.style.background='';	
a.style.background='';	

clickoff++;

if(clickoff===2) {

u.style.background='purple';	
t.style.background='';
s.style.background='purple';
r.style.background='purple';
q.style.background='';
p.style.background='purple';
o.style.background='purple';
n.style.background='';
m.style.background='purple';
l.style.background='purple';
k.style.background='';
j.style.background='purple';
i.style.background='purple';
h.style.background='';
g.style.background='purple';
f.style.background='purple';
e.style.background='';
d.style.background='purple';
c.style.background='purple';
b.style.background='';	
a.style.background='purple';
	
}

if(clickoff===3)  {
	
u.style.background='';	
t.style.background='';
s.style.background='';
r.style.background='';
q.style.background='';
p.style.background='';
o.style.background='';
n.style.background='';
m.style.background='';
l.style.background='';
k.style.background='';
j.style.background='';
i.style.background='black';
h.style.background='blue';
g.style.background='green';
f.style.background='black';
e.style.background='blue';
d.style.background='green';
c.style.background='black';
b.style.background='blue';	
a.style.background='green';
		
}

if(clickoff===4)  {
	
u.style.background='purple';	
t.style.background='brown';
s.style.background='pink';
r.style.background='blue';
q.style.background='blue';
p.style.background='blue';
o.style.background='purple';
n.style.background='brown';
m.style.background='pink';
l.style.background='';
k.style.background='';
j.style.background='';
i.style.background='purple';
h.style.background='brown';
g.style.background='pink';
f.style.background='blue';
e.style.background='blue';
d.style.background='blue';
c.style.background='purple';
b.style.background='brown';	
a.style.background='pink';
		
}

if(clickoff===5)  {
	
u.style.background='blue';	
t.style.background='blue';
s.style.background='blue';
r.style.background='';
q.style.background='';
p.style.background='';
o.style.background='black';
n.style.background='gray';
m.style.background='yellow';
l.style.background='blue';
k.style.background='blue';
j.style.background='blue';
i.style.background='';
h.style.background='';
g.style.background='';
f.style.background='black';
e.style.background='gray';
d.style.background='yellow';
c.style.background='blue';
b.style.background='blue';	
a.style.background='blue';
		
}

	
}

function rz() {

r.style.background='pink';
q.style.background='';
p.style.background='';
o.style.background='';
n.style.background='';
m.style.background='';
l.style.background='';
k.style.background='';
j.style.background='';
i.style.background='';
h.style.background='';
g.style.background='';
f.style.background='';
e.style.background='';
d.style.background='';
c.style.background='';
b.style.background='';	
a.style.background='';	

clickon++;

if(clickon===2)  {
	
u.style.background='brown';	
t.style.background='brown';
s.style.background='brown';
r.style.background='';
q.style.background='';
p.style.background='';
o.style.background='brown';
n.style.background='brown';
m.style.background='brown';
l.style.background='';
k.style.background='';
j.style.background='';
i.style.background='brown';
h.style.background='brown';
g.style.background='brown';
f.style.background='';
e.style.background='';
d.style.background='';
c.style.background='brown';
b.style.background='brown';	
a.style.background='brown';
		
}

if(clickon===3)  {
	
u.style.background='';	
t.style.background='';
s.style.background='';
r.style.background='';
q.style.background='';
p.style.background='';
o.style.background='';
n.style.background='';
m.style.background='';
l.style.background='';
k.style.background='';
j.style.background='';
i.style.background='gray';
h.style.background='green';
g.style.background='yellow';
f.style.background='yellow';
e.style.background='gray';
d.style.background='green';
c.style.background='green';
b.style.background='yellow';	
a.style.background='gray';
		
}

if(clickon===4)  {
	
u.style.background='yellow';	
t.style.background='black';
s.style.background='yellow';
r.style.background='black';
q.style.background='yellow';
p.style.background='black';
o.style.background='';
n.style.background='';
m.style.background='';
l.style.background='';
k.style.background='';
j.style.background='';
i.style.background='';
h.style.background='';
g.style.background='';
f.style.background='black';
e.style.background='yellow';
d.style.background='black';
c.style.background='yellow';
b.style.background='black';	
a.style.background='yellow';
		
}

if(clickon===5)  {
	
u.style.background='';	
t.style.background='';
s.style.background='';
r.style.background='';
q.style.background='';
p.style.background='';
o.style.background='';
n.style.background='';
m.style.background='';
l.style.background='blue';
k.style.background='blue';
j.style.background='blue';
i.style.background='blue';
h.style.background='blue';
g.style.background='blue';
f.style.background='blue';
e.style.background='blue';
d.style.background='blue';
c.style.background='blue';
b.style.background='blue';	
a.style.background='blue';
		
}

if(clickon===6)  {
	
alert('Jos malo');	
	
r.style.background='';
q.style.background='';
p.style.background='';
o.style.background='';
n.style.background='';
m.style.background='';
l.style.background='';
k.style.background='';
j.style.background='';
i.style.background='';
h.style.background='';
g.style.background='';
f.style.background='';
e.style.background='';
d.style.background='';
c.style.background='';
b.style.background='';	
a.style.background='';

r.style.display='none';
q.style.display='none';
p.style.display='none';

border.innerHTML='#e{height: 300px;}';
		
}
	
}

function sz() {

s.style.background='brown';
r.style.background='';
q.style.background='';
p.style.background='';
o.style.background='';
n.style.background='';
m.style.background='';
l.style.background='';
k.style.background='';
j.style.background='';
i.style.background='';
h.style.background='';
g.style.background='';
f.style.background='';
e.style.background='';
d.style.background='';
c.style.background='';
b.style.background='';	
a.style.background='';	
	
clicking++;

if(clicking===2)  {

u.style.background='';	
t.style.background='yellow';
s.style.background='yellow';
r.style.background='';
q.style.background='yellow';
p.style.background='yellow';
o.style.background='';
n.style.background='yellow';
m.style.background='yellow';
l.style.background='';
k.style.background='yellow';
j.style.background='yellow';
i.style.background='';
h.style.background='yellow';
g.style.background='yellow';
f.style.background='';
e.style.background='yellow';
d.style.background='yellow';
c.style.background='';
b.style.background='yellow';	
a.style.background='yellow';

}	

if(clicking===3)  {

u.style.background='orange';	
t.style.background='orange';
s.style.background='orange';
r.style.background='orange';
q.style.background='orange';
p.style.background='orange';
o.style.background='orange';
n.style.background='pink';
m.style.background='pink';
l.style.background='pink';
k.style.background='pink';
j.style.background='pink';
i.style.background='pink';
h.style.background='pink';
g.style.background='gray';
f.style.background='gray';
e.style.background='gray';
d.style.background='gray';
c.style.background='gray';
b.style.background='gray';	
a.style.background='gray';

}	

if(clicking===4)  {

u.style.background='black';
t.style.background='black';
s.style.background='black';
r.style.background='black';
q.style.background='black';
p.style.background='black';
o.style.background='';
n.style.background='';
m.style.background='';
l.style.background='';
k.style.background='';
j.style.background='';
i.style.background='';
h.style.background='';
g.style.background='';
f.style.background='black';
e.style.background='black';
d.style.background='black';
c.style.background='black';
b.style.background='black';
a.style.background='black';

}	
	
if(clicking===5)  {
	
u.style.background='';
t.style.background='';
s.style.background='';
r.style.background='';
q.style.background='';
p.style.background='';
o.style.background='';
n.style.background='';
m.style.background='';
l.style.background='';
k.style.background='';
j.style.background='';
i.style.background='';
h.style.background='';
g.style.background='';
f.style.background='';
e.style.background='';
d.style.background='';
c.style.background='';
b.style.background='';	
a.style.background='';	
		
}

	
}

function tz() {

t.style.background='purple';
s.style.background='';
r.style.background='';
q.style.background='';
p.style.background='';
o.style.background='';
n.style.background='';
m.style.background='';
l.style.background='';
k.style.background='';
j.style.background='';
i.style.background='';
h.style.background='';
g.style.background='';
f.style.background='';
e.style.background='';
d.style.background='';
c.style.background='';
b.style.background='';	
a.style.background='';	

clicks++;

if(clicks===2) {

u.style.background='';	
t.style.background='green';
s.style.background='';
r.style.background='green';
q.style.background='';
p.style.background='green';
o.style.background='';
n.style.background='green';
m.style.background='';
l.style.background='green';
k.style.background='';
j.style.background='green';
i.style.background='';
h.style.background='green';
g.style.background='';
f.style.background='green';
e.style.background='';
d.style.background='green';
c.style.background='';
b.style.background='green';	
a.style.background='';		
		
}

if(clicks===3) {

u.style.background='green';	
t.style.background='green';
s.style.background='green';
r.style.background='green';
q.style.background='green';
p.style.background='green';
o.style.background='green';
n.style.background='green';
m.style.background='green';
l.style.background='green';
k.style.background='green';
j.style.background='green';
i.style.background='green';
h.style.background='green';
g.style.background='green';
f.style.background='green';
e.style.background='green';
d.style.background='green';
c.style.background='green';
b.style.background='green';	
a.style.background='green';		
		
}

if(clicks===4) {

u.style.background='pink';	
t.style.background='pink';
s.style.background='pink';
r.style.background='pink';
q.style.background='pink';
p.style.background='pink';
o.style.background='pink';
n.style.background='pink';
m.style.background='pink';
l.style.background='blue';
k.style.background='blue';
j.style.background='blue';
i.style.background='blue';
h.style.background='blue';
g.style.background='blue';
f.style.background='blue';
e.style.background='blue';
d.style.background='blue';
c.style.background='blue';
b.style.background='blue';	
a.style.background='blue';		
		
}

if(clicks===5) {

u.style.background='brown';	
t.style.background='brown';
s.style.background='brown';
r.style.background='brown';
q.style.background='brown';
p.style.background='brown';
o.style.background='brown';
n.style.background='brown';
m.style.background='brown';
l.style.background='brown';
k.style.background='brown';
j.style.background='brown';
i.style.background='orange';
h.style.background='orange';
g.style.background='orange';
f.style.background='orange';
e.style.background='orange';
d.style.background='orange';
c.style.background='orange';
b.style.background='orange';	
a.style.background='orange';		
		
}
	
}

function uz() {

u.style.background='red';
t.style.background='';
s.style.background='';
r.style.background='';
q.style.background='';
p.style.background='';
o.style.background='';
n.style.background='';
m.style.background='';
l.style.background='';
k.style.background='';
j.style.background='';
i.style.background='';
h.style.background='';
g.style.background='';
f.style.background='';
e.style.background='';
d.style.background='';
c.style.background='';
b.style.background='';	
a.style.background='';	
	
click++;

if(click===2) {

u.style.background='blue';
t.style.background='';
s.style.background='blue';
r.style.background='';
q.style.background='blue';
p.style.background='';
o.style.background='blue';
n.style.background='';
m.style.background='blue';
l.style.background='';
k.style.background='blue';
j.style.background='';
i.style.background='blue';
h.style.background='';
g.style.background='blue';
f.style.background='';
e.style.background='blue';
d.style.background='';
c.style.background='blue';
b.style.background='';	
a.style.background='blue';	

}	

if(click===3) {
	
u.style.background='red';	
t.style.background='gray';
s.style.background='red';
r.style.background='red';
q.style.background='gray';
p.style.background='red';
o.style.background='red';
n.style.background='gray';
m.style.background='red';
l.style.background='red';
k.style.background='gray';
j.style.background='red';
i.style.background='green';
h.style.background='black';
g.style.background='green';
f.style.background='green';
e.style.background='black';
d.style.background='green';
c.style.background='green';
b.style.background='black';	
a.style.background='green';
		
}


	
if(click===4) {
	
u.style.background='brown';	
t.style.background='purple';
s.style.background='brown';
r.style.background='blue';
q.style.background='orange';
p.style.background='blue';
o.style.background='brown';
n.style.background='purple';
m.style.background='brown';
l.style.background='blue';
k.style.background='orange';
j.style.background='blue';
i.style.background='brown';
h.style.background='purple';
g.style.background='brown';
f.style.background='blue';
e.style.background='orange';
d.style.background='blue';
c.style.background='brown';
b.style.background='purple';	
a.style.background='brown';
		
}
	
if(click===5)  {

alert('Pobeda :).Ali jos nije gotovo ;)');
	
u.style.display='none';
t.style.display='none';
s.style.display='none';

border.innerHTML='#e{height: 360px;}';
	
u.style.background='blue';
t.style.background='blue';
s.style.background='blue';
r.style.background='blue';
q.style.background='blue';
p.style.background='blue';
o.style.background='blue';
n.style.background='blue';
m.style.background='blue';
l.style.background='blue';
k.style.background='blue';
j.style.background='blue';
i.style.background='blue';
h.style.background='blue';
g.style.background='blue';
f.style.background='blue';
e.style.background='blue';
d.style.background='blue';
c.style.background='blue';
b.style.background='blue';	
a.style.background='blue';	
			
}
	
}