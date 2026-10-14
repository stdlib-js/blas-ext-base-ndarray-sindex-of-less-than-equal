"use strict";var q=function(a,e){return function(){try{return e||a((e={exports:{}}).exports,e),e.exports}catch(r){throw (e=0, r)}};};var f=q(function(E,d){
var x=require('@stdlib/ndarray-base-numel-dimension/dist'),c=require('@stdlib/ndarray-base-stride/dist'),l=require('@stdlib/ndarray-base-offset/dist'),o=require('@stdlib/ndarray-base-data-buffer/dist'),s=require('@stdlib/ndarray-base-ndarraylike2scalar/dist'),m=require('@stdlib/ndarray-base-clip-index/dist'),g=require('@stdlib/blas-ext-base-sindex-of-less-than-equal/dist').ndarray;function p(a){var e,r,u,v,n,i,t;return t=a[0],e=s(a[1]),r=s(a[2]),i=x(t,0),r=m(r,i),r>=i?-1:(i-=r,u=c(t,0),v=l(t)+u*r,n=g(i,e,o(t),u,v),n>=0&&(n+=r),n)}d.exports=p
});var h=f();module.exports=h;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
