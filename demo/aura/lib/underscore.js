// Underscore.js 1.3.3
// (c) 2009-2012 Jeremy Ashkenas, DocumentCloud Inc.
// Underscore is freely distributable under the MIT license.
// Portions of Underscore are inspired or borrowed from Prototype,
// Oliver Steele's Functional, and John Resig's Micro-Templating.
// For all details and documentation:
// http://documentcloud.github.com/underscore
(function(){function e(t,n,r){if(t===n)return 0!==t||1/t==1/n;if(null==t||null==n)return t===n;t._chain&&(t=t._wrapped),n._chain&&(n=n._wrapped);if(t.isEqual&&E.isFunction(t.isEqual))return t.isEqual(n);if(n.isEqual&&E.isFunction(n.isEqual))return n.isEqual(t);var i=a.call(t);if(i!=a.call(n))return!1;switch(i){case"[object String]":return t==""+n;case"[object Number]":return t!=+t?n!=+n:0==t?1/t==1/n:t==+n;case"[object Date]":case"[object Boolean]":return+t==+n;case"[object RegExp]":return t.source==n.source&&t.global==n.global&&t.multiline==n.multiline&&t.ignoreCase==n.ignoreCase}if("object"!=typeof t||"object"!=typeof n)return!1;for(var s=r.length;s--;)if(r[s]==t)return!0;r.push(t);var s=0,o=!0;if("[object Array]"==i){if(s=t.length,o=s==n.length)for(;s--&&(o=s in t==s in n&&e(t[s],n[s],r)););}else{if("constructor"in t!="constructor"in n||t.constructor!=n.constructor)return!1;for(var u in t)if(E.has(t,u)&&(s++,!(o=E.has(n,u)&&e(t[u],n[u],r))))break;if(o){for(u in n)if(E.has(n,u)&&!(s--))break;o=!s}}return r.pop(),o}var t=this,n=t._,r={},i=Array.prototype,s=Object.prototype,o=i.slice,u=i.unshift,a=s.toString,f=s.hasOwnProperty,l=i.forEach,c=i.map,h=i.reduce,p=i.reduceRight,d=i.filter,v=i.every,m=i.some,g=i.indexOf,y=i.lastIndexOf,s=Array.isArray,b=Object.keys,w=Function.prototype.bind,E=function(e){return new _(e)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=E),exports._=E):t._=E,E.VERSION="1.3.3";var S=E.each=E.forEach=function(e,t,n){if(e!=null)if(l&&e.forEach===l)e.forEach(t,n);else if(e.length===+e.length){for(var i=0,s=e.length;i<s;i++)if(i in e&&t.call(n,e[i],i,e)===r)break}else for(i in e)if(E.has(e,i)&&t.call(n,e[i],i,e)===r)break};E.map=E.collect=function(e,t,n){var r=[];return e==null?r:c&&e.map===c?e.map(t,n):(S(e,function(e,i,s){r[r.length]=t.call(n,e,i,s)}),e.length===+e.length&&(r.length=e.length),r)},E.reduce=E.foldl=E.inject=function(e,t,n,r){var i=arguments.length>2;e==null&&(e=[]);if(h&&e.reduce===h)return r&&(t=E.bind(t,r)),i?e.reduce(t,n):e.reduce(t);S(e,function(e,s,o){i?n=t.call(r,n,e,s,o):(n=e,i=!0)});if(!i)throw new TypeError("Reduce of empty array with no initial value");return n},E.reduceRight=E.foldr=function(e,t,n,r){var i=arguments.length>2;e==null&&(e=[]);if(p&&e.reduceRight===p)return r&&(t=E.bind(t,r)),i?e.reduceRight(t,n):e.reduceRight(t);var s=E.toArray(e).reverse();return r&&!i&&(t=E.bind(t,r)),i?E.reduce(s,t,n,r):E.reduce(s,t)},E.find=E.detect=function(e,t,n){var r;return x(e,function(e,i,s){if(t.call(n,e,i,s))return r=e,!0}),r},E.filter=E.select=function(e,t,n){var r=[];return e==null?r:d&&e.filter===d?e.filter(t,n):(S(e,function(e,i,s){t.call(n,e,i,s)&&(r[r.length]=e)}),r)},E.reject=function(e,t,n){var r=[];return e==null?r:(S(e,function(e,i,s){t.call(n,e,i,s)||(r[r.length]=e)}),r)},E.every=E.all=function(e,t,n){var i=!0;return e==null?i:v&&e.every===v?e.every(t,n):(S(e,function(e,s,o){if(!(i=i&&t.call(n,e,s,o)))return r}),!!i)};var x=E.some=E.any=function(e,t,n){t||(t=E.identity);var i=!1;return e==null?i:m&&e.some===m?e.some(t,n):(S(e,function(e,s,o){if(i||(i=t.call(n,e,s,o)))return r}),!!i)};E.include=E.contains=function(e,t){var n=!1;return e==null?n:g&&e.indexOf===g?e.indexOf(t)!=-1:n=x(e,function(e){return e===t})},E.invoke=function(e,t){var n=o.call(arguments,2);return E.map(e,function(e){return(E.isFunction(t)?t||e:e[t]).apply(e,n)})},E.pluck=function(e,t){return E.map(e,function(e){return e[t]})},E.max=function(e,t,n){if(!t&&E.isArray(e)&&e[0]===+e[0])return Math.max.apply(Math,e);if(!t&&E.isEmpty(e))return-Infinity;var r={computed:-Infinity};return S(e,function(e,i,s){i=t?t.call(n,e,i,s):e,i>=r.computed&&(r={value:e,computed:i})}),r.value},E.min=function(e,t,n){if(!t&&E.isArray(e)&&e[0]===+e[0])return Math.min.apply(Math,e);if(!t&&E.isEmpty(e))return Infinity;var r={computed:Infinity};return S(e,function(e,i,s){i=t?t.call(n,e,i,s):e,i<r.computed&&(r={value:e,computed:i})}),r.value},E.shuffle=function(e){var t=[],n;return S(e,function(e,r){n=Math.floor(Math.random()*(r+1)),t[r]=t[n],t[n]=e}),t},E.sortBy=function(e,t,n){var r=E.isFunction(t)?t:function(e){return e[t]};return E.pluck(E.map(e,function(e,t,i){return{value:e,criteria:r.call(n,e,t,i)}}).sort(function(e,t){var n=e.criteria,r=t.criteria;return n===void 0?1:r===void 0?-1:n<r?-1:n>r?1:0}),"value")},E.groupBy=function(e,t){var n={},r=E.isFunction(t)?t:function(e){return e[t]};return S(e,function(e,t){var i=r(e,t);(n[i]||(n[i]=[])).push(e)}),n},E.sortedIndex=function(e,t,n){n||(n=E.identity);for(var r=0,i=e.length;r<i;){var s=r+i>>1;n(e[s])<n(t)?r=s+1:i=s}return r},E.toArray=function(e){return e?E.isArray(e)||E.isArguments(e)?o.call(e):e.toArray&&E.isFunction(e.toArray)?e.toArray():E.values(e):[]},E.size=function(e){return E.isArray(e)?e.length:E.keys(e).length},E.first=E.head=E.take=function(e,t,n){return t!=null&&!n?o.call(e,0,t):e[0]},E.initial=function(e,t,n){return o.call(e,0,e.length-(t==null||n?1:t))},E.last=function(e,t,n){return t!=null&&!n?o.call(e,Math.max(e.length-t,0)):e[e.length-1]},E.rest=E.tail=function(e,t,n){return o.call(e,t==null||n?1:t)},E.compact=function(e){return E.filter(e,function(e){return!!e})},E.flatten=function(e,t){return E.reduce(e,function(e,n){return E.isArray(n)?e.concat(t?n:E.flatten(n)):(e[e.length]=n,e)},[])},E.without=function(e){return E.difference(e,o.call(arguments,1))},E.uniq=E.unique=function(e,t,n){var n=n?E.map(e,n):e,r=[];return e.length<3&&(t=!0),E.reduce(n,function(n,i,s){if(t?E.last(n)!==i||!n.length:!E.include(n,i))n.push(i),r.push(e[s]);return n},[]),r},E.union=function(){return E.uniq(E.flatten(arguments,!0))},E.intersection=E.intersect=function(e){var t=o.call(arguments,1);return E.filter(E.uniq(e),function(e){return E.every(t,function(t){return E.indexOf(t,e)>=0})})},E.difference=function(e){var t=E.flatten(o.call(arguments,1),!0);return E.filter(e,function(e){return!E.include(t,e)})},E.zip=function(){for(var e=o.call(arguments),t=E.max(E.pluck(e,"length")),n=Array(t),r=0;r<t;r++)n[r]=E.pluck(e,""+r);return n},E.indexOf=function(e,t,n){if(e==null)return-1;var r;if(n)return n=E.sortedIndex(e,t),e[n]===t?n:-1;if(g&&e.indexOf===g)return e.indexOf(t);n=0;for(r=e.length;n<r;n++)if(n in e&&e[n]===t)return n;return-1},E.lastIndexOf=function(e,t){if(e==null)return-1;if(y&&e.lastIndexOf===y)return e.lastIndexOf(t);for(var n=e.length;n--;)if(n in e&&e[n]===t)return n;return-1},E.range=function(e,t,n){arguments.length<=1&&(t=e||0,e=0);for(var n=arguments[2]||1,r=Math.max(Math.ceil((t-e)/n),0),i=0,s=Array(r);i<r;)s[i++]=e,e+=n;return s};var T=function(){};E.bind=function(e,t){var n,r;if(e.bind===w&&w)return w.apply(e,o.call(arguments,1));if(!E.isFunction(e))throw new TypeError;return r=o.call(arguments,2),n=function(){if(this instanceof n){T.prototype=e.prototype;var i=new T,s=e.apply(i,r.concat(o.call(arguments)));return Object(s)===s?s:i}return e.apply(t,r.concat(o.call(arguments)))}},E.bindAll=function(e){var t=o.call(arguments,1);return t.length==0&&(t=E.functions(e)),S(t,function(t){e[t]=E.bind(e[t],e)}),e},E.memoize=function(e,t){var n={};return t||(t=E.identity),function(){var r=t.apply(this,arguments);return E.has(n,r)?n[r]:n[r]=e.apply(this,arguments)}},E.delay=function(e,t){var n=o.call(arguments,2);return setTimeout(function(){return e.apply(null,n)},t)},E.defer=function(e){return E.delay.apply(E,[e,1].concat(o.call(arguments,1)))},E.throttle=function(e,t){var n,r,i,s,o,u,a=E.debounce(function(){o=s=!1},t);return function(){return n=this,r=arguments,i||(i=setTimeout(function(){i=null,o&&e.apply(n,r),a()},t)),s?o=!0:u=e.apply(n,r),a(),s=!0,u}},E.debounce=function(e,t,n){var r;return function(){var i=this,s=arguments;n&&!r&&e.apply(i,s),clearTimeout(r),r=setTimeout(function(){r=null,n||e.apply(i,s)},t)}},E.once=function(e){var t=!1,n;return function(){return t?n:(t=!0,n=e.apply(this,arguments))}},E.wrap=function(e,t){return function(){var n=[e].concat(o.call(arguments,0));return t.apply(this,n)}},E.compose=function(){var e=arguments;return function(){for(var t=arguments,n=e.length-1;n>=0;n--)t=[e[n].apply(this,t)];return t[0]}},E.after=function(e,t){return e<=0?t():function(){if(--e<1)return t.apply(this,arguments)}},E.keys=b||function(e){if(e!==Object(e))throw new TypeError("Invalid object");var t=[],n;for(n in e)E.has(e,n)&&(t[t.length]=n);return t},E.values=function(e){return E.map(e,E.identity)},E.functions=E.methods=function(e){var t=[],n;for(n in e)E.isFunction(e[n])&&t.push(n);return t.sort()},E.extend=function(e){return S(o.call(arguments,1),function(t){for(var n in t)e[n]=t[n]}),e},E.pick=function(e){var t={};return S(E.flatten(o.call(arguments,1)),function(n){n in e&&(t[n]=e[n])}),t},E.defaults=function(e){return S(o.call(arguments,1),function(t){for(var n in t)e[n]==null&&(e[n]=t[n])}),e},E.clone=function(e){return E.isObject(e)?E.isArray(e)?e.slice():E.extend({},e):e},E.tap=function(e,t){return t(e),e},E.isEqual=function(t,n){return e(t,n,[])},E.isEmpty=function(e){if(e==null)return!0;if(E.isArray(e)||E.isString(e))return e.length===0;for(var t in e)if(E.has(e,t))return!1;return!0},E.isElement=function(e){return!!e&&e.nodeType==1},E.isArray=s||function(e){return a.call(e)=="[object Array]"},E.isObject=function(e){return e===Object(e)},E.isArguments=function(e){return a.call(e)=="[object Arguments]"},E.isArguments(arguments)||(E.isArguments=function(e){return!!e&&!!E.has(e,"callee")}),E.isFunction=function(e){return a.call(e)=="[object Function]"},E.isString=function(e){return a.call(e)=="[object String]"},E.isNumber=function(e){return a.call(e)=="[object Number]"},E.isFinite=function(e){return E.isNumber(e)&&isFinite(e)},E.isNaN=function(e){return e!==e},E.isBoolean=function(e){return e===!0||e===!1||a.call(e)=="[object Boolean]"},E.isDate=function(e){return a.call(e)=="[object Date]"},E.isRegExp=function(e){return a.call(e)=="[object RegExp]"},E.isNull=function(e){return e===null},E.isUndefined=function(e){return e===void 0},E.has=function(e,t){return f.call(e,t)},E.noConflict=function(){return t._=n,this},E.identity=function(e){return e},E.times=function(e,t,n){for(var r=0;r<e;r++)t.call(n,r)},E.escape=function(e){return(""+e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;")},E.result=function(e,t){if(e==null)return null;var n=e[t];return E.isFunction(n)?n.call(e):n},E.mixin=function(e){S(E.functions(e),function(t){P(t,E[t]=e[t])})};var N=0;E.uniqueId=function(e){var t=N++;return e?e+t:t},E.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var C=/.^/,k={"\\":"\\","'":"'",r:"\r",n:"\n",t:"	",u2028:"\u2028",u2029:"\u2029"},L;for(L in k)k[k[L]]=L;var A=/\\|'|\r|\n|\t|\u2028|\u2029/g,O=/\\(\\|'|r|n|t|u2028|u2029)/g,M=function(e){return e.replace(O,function(e,t){return k[t]})};E.template=function(e,t,n){n=E.defaults(n||{},E.templateSettings),e="__p+='"+e.replace(A,function(e){return"\\"+k[e]}).replace(n.escape||C,function(e,t){return"'+\n_.escape("+M(t)+")+\n'"}).replace(n.interpolate||C,function(e,t){return"'+\n("+M(t)+")+\n'"}).replace(n.evaluate||C,function(e,t){return"';\n"+M(t)+"\n;__p+='"})+"';\n",n.variable||(e="with(obj||{}){\n"+e+"}\n");var e="var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};\n"+e+"return __p;\n",r=new Function(n.variable||"obj","_",e);return t?r(t,E):(t=function(e){return r.call(this,e,E)},t.source="function("+(n.variable||"obj")+"){\n"+e+"}",t)},E.chain=function(e){return E(e).chain()};var _=function(e){this._wrapped=e};E.prototype=_.prototype;var D=function(e,t){return t?E(e).chain():e},P=function(e,t){_.prototype[e]=function(){var e=o.call(arguments);return u.call(e,this._wrapped),D(t.apply(E,e),this._chain)}};E.mixin(E),S("pop,push,reverse,shift,sort,splice,unshift".split(","),function(e){var t=i[e];_.prototype[e]=function(){var n=this._wrapped;t.apply(n,arguments);var r=n.length;return(e=="shift"||e=="splice")&&r===0&&delete n[0],D(n,this._chain)}}),S(["concat","join","slice"],function(e){var t=i[e];_.prototype[e]=function(){return D(t.apply(this._wrapped,arguments),this._chain)}}),_.prototype.chain=function(){return this._chain=!0,this},_.prototype.value=function(){return this._wrapped}}).call(this);