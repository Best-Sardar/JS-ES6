!function(e){var o={};function t(n){if(o[n])return o[n].exports;var r=o[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=o,t.d=function(e,o,n){t.o(e,o)||Object.defineProperty(e,o,{configurable:!1,enumerable:!0,get:n})},t.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},t.p="",t(t.s=1)}([function(e,o,t){"use strict";Object.defineProperty(o,"__esModule",{value:!0});o.default={name:"mahdi ",family:"hosseini",show:function(){return this.name+this.family+":))"}}},function(e,o,t){"use strict";var n=function(){return function(e,o){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,o){var t=[],n=!0,r=!1,a=void 0;try{for(var s,i=e[Symbol.iterator]();!(n=(s=i.next()).done)&&(t.push(s.value),!o||t.length!==o);n=!0);}catch(e){r=!0,a=e}finally{try{!n&&i.return&&i.return()}finally{if(r)throw a}}return t}(e,o);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),r=function(){function e(e,o){for(var t=0;t<o.length;t++){var n=o[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(o,t,n){return t&&e(o.prototype,t),n&&e(o,n),o}}(),a=function(e){return e&&e.__esModule?e:{default:e}}(t(0));function s(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}console.log("mahdi"," : var and let example");console.log(15," : var and let example"),console.log(10," : var and let example");var i=["mahdi","mphammad","mostafa"];i[0]="ali",console.log(i[0]," : const variable example");console.log("hi seyyedmahdi :)"," : Template_Literals"),console.log("hi seyyedmahdi :)"," : Template_Literals");var l=[10,20].concat([30,40,50],[60]);console.log(l," : Spread Operator"),function(){for(var e,o=arguments.length,t=Array(o),n=0;n<o;n++)t[n]=arguments[n];(e=console).log.apply(e,t.concat([" : Spread Operator"]))}(1,5,6,8,10);var u=[" seyyed "," mahdi "," hosseini "],c=u[0],f=u[1];console.log(c+f," : Destructuring Assignment");var h={name:" mahdi ",family:" hosseini "},d=h.name,m=h.family;console.log(d+m," : Destructuring Assignment");var p,y,g={name1:" mahdi ",family1:" hosseini "};p=g.name1,y=g.family1,console.log(p+y," : Destructuring Assignment");console.log("HELLO WORLD :| "," : Arrow Function"),setTimeout(function(){console.log("HELLO WORLD :| "," : Arrow Function")},3e3);console.log([1,2,3].map(function(e){return e+5})," : Map and Filter");console.log([10,20,30,40,50,60,70].filter(function(e){return e>40}));var v="hell"+"oOo".repeat(10)+" :))";console.log(v," : String Helper Methods");var b="seyyedmahdi".startsWith("seyyed");console.log(b," : String Helper Methods"),console.log("seyyed mahdi".endsWith("mahdi")," : String Helper Methods"),console.log("seyyed mahdi".includes("ma")," : String Helper Methods");var w;w=123456789,console.log(Number.isFinite(w)," : Numbers Helper Methods"),function(e){console.log(Number.isSafeInteger(e)," : Numbers Helper Methods")}(Math.pow(25,50)),console.log(a.default.show()," : Module in javascript");var O=function(){function e(o,t){s(this,e),this.name=o,this.height=t}return r(e,[{key:"helo",value:function(){console.log("hello "+this.name+" . are your height is "+this.height+" ??"," : Class in javascript")}}],[{key:"message",value:function(e){return"hello "+e+" :)"}}]),e}(),_=function(e){function o(e,t,n){s(this,o);var r=function(e,o){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!o||"object"!=typeof o&&"function"!=typeof o?e:o}(this,(o.__proto__||Object.getPrototypeOf(o)).call(this,e,t));return r.color=n,r}return function(e,o){if("function"!=typeof o&&null!==o)throw new TypeError("Super expression must either be null or a function, not "+typeof o);e.prototype=Object.create(o&&o.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),o&&(Object.setPrototypeOf?Object.setPrototypeOf(e,o):e.__proto__=o)}(o,O),o}(),M=new O("lion","1.5");console.log(M," : Class in javascript"),M.helo();var j=new _("mos",1.8,"golden");console.log(j," : Class in javascript"),console.log(O.message("mahdi")," : Class in javascript");var S=function(e,o,t){var n=this;this.name=e,this.time=o,this.position=t,this.showcourse=function(){return"name : "+n.name+" time : "+n.time+" pos : "+n.position}};S.prototype.info=function(){return"add info function"};var x=new S("math",21,"tehran");console.log(x," : prototype"),console.log(x.showcourse()," : prototype"),console.log(x.info()," : prototype");var k=new Set;k.add([1,2,3]),k.add("mahdi"),k.add(21),k.add({university:"shahed",term:6}),console.log(k," : data strauctures"),console.log(k.has(21)," : data strauctures"),console.log(k.has({university:"shahed"})," : data strauctures");var A=new Set(["mahdi",{name:"mahdi"},46,78,["man","men"]]);console.log(A," : data strauctures");var H=!0,L=!1,P=void 0;try{for(var E,T=A.values()[Symbol.iterator]();!(H=(E=T.next()).done);H=!0){var C=E.value;console.log(C," : data strauctures")}}catch(e){L=!0,P=e}finally{try{!H&&T.return&&T.return()}finally{if(L)throw P}}console.log(new Set("asdfasdfasdfasdfasdfasdfasdfasdfasdfasdf".split("")));var D=new Map;D.set("key1","this is value for key1"),D.set({a:"key2"},"this is value for key2"),D.set(function(){return"key3"},"this is value for key3"),console.log(D," : data strauctures");var F=new Map([[1,2],["mahdi","hosseini"],[{name:"a"},function(){return"Ok"}]]);console.log(F," : data strauctures");var N=!0,W=!1,R=void 0;try{for(var I,q=F[Symbol.iterator]();!(N=(I=q.next()).done);N=!0){var z=n(I.value,2),B=z[0],G=z[1];console.log("the key : "+B+" , the val : "+G," : data strauctures")}}catch(e){W=!0,R=e}finally{try{!N&&q.return&&q.return()}finally{if(W)throw R}}var J=function(){return"ES6"};console.log(J()," : closures");var K,Q=(K="seyyed",function(e){return K+e});console.log(Q(" mahdi")," : closures");var U={f:"mahdi",family:" hosseini",show:function(){return"mahdi hosseini"}};console.log(U.f," : private Methods"),console.log(U.show()," : private Methods")}]);
//# sourceMappingURL=bundle.js.map