/**
 * @license RequireJS i18n 2.0.1 Copyright (c) 2010-2012, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/requirejs/i18n for details
 */
/*jslint regexp: true */
/*global require: false, navigator: false, define: false */
/**
 * This plugin handles i18n! prefixed modules. It does the following:
 *
 * 1) A regular module can have a dependency on an i18n bundle, but the regular
 * module does not want to specify what locale to load. So it just specifies
 * the top-level bundle, like "i18n!nls/colors".
 *
 * This plugin will load the i18n bundle at nls/colors, see that it is a root/master
 * bundle since it does not have a locale in its name. It will then try to find
 * the best match locale available in that master bundle, then request all the
 * locale pieces for that best match locale. For instance, if the locale is "en-us",
 * then the plugin will ask for the "en-us", "en" and "root" bundles to be loaded
 * (but only if they are specified on the master bundle).
 *
 * Once all the bundles for the locale pieces load, then it mixes in all those
 * locale pieces into each other, then finally sets the context.defined value
 * for the nls/colors bundle to be that mixed in locale.
 *
 * 2) A regular module specifies a specific locale to load. For instance,
 * i18n!nls/fr-fr/colors. In this case, the plugin needs to load the master bundle
 * first, at nls/colors, then figure out what the best match locale is for fr-fr,
 * since maybe only fr or just root is defined for that locale. Once that best
 * fit is found, all of its locale pieces need to have their bundles loaded.
 *
 * Once all the bundles for the locale pieces load, then it mixes in all those
 * locale pieces into each other, then finally sets the context.defined value
 * for the nls/fr-fr/colors bundle to be that mixed in locale.
 */
(function(){"use strict";function t(e,t,n,r,i,s){t[e]&&(n.push(e),(t[e]===!0||t[e]===1)&&r.push(i+e+"/"+s))}function n(e,t,n,r,i){var s=r+t+"/"+i;require._fileExists(e.toUrl(s))&&n.push(s)}function r(e,t,n){var i;for(i in t)t.hasOwnProperty(i)&&(!e.hasOwnProperty(i)||n)?e[i]=t[i]:typeof t[i]=="object"&&r(e[i],t[i],n)}var e=/(^.*(^|\/)nls(\/|$))([^\/]*)\/?([^\/]*)/;define(["module"],function(i){var s=i.config();return{version:"2.0.1",load:function(i,o,u,a){a=a||{},a.locale&&(s.locale=a.locale);var f,l=e.exec(i),c=l[1],h=l[4],p=l[5],d=h.split("-"),v=[],m={},g,y,b="";l[5]?(c=l[1],f=c+p):(f=i,p=l[4],h=s.locale,h||(h=s.locale=typeof navigator=="undefined"?"root":(navigator.language||navigator.userLanguage||"root").toLowerCase()),d=h.split("-"));if(a.isBuild){v.push(f),n(o,"root",v,c,p);for(g=0;g<d.length;g++)y=d[g],b+=(b?"-":"")+y,n(o,b,v,c,p);o(v,function(){u()})}else o([f],function(e){var n=[],i;t("root",e,n,v,c,p);for(g=0;g<d.length;g++)i=d[g],b+=(b?"-":"")+i,t(b,e,n,v,c,p);o(v,function(){var t,i,s;for(t=n.length-1;t>-1&&n[t];t--){s=n[t],i=e[s];if(i===!0||i===1)i=o(c+s+"/"+p);r(m,i)}u(m)})})}}})})();