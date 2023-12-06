(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const sl="152",Rh=0,Xl=1,Ch=2,Yu=1,Lh=2,Ti=3,Ci=0,vn=1,Xn=2,Gi=0,kr=1,ql=2,jl=3,Yl=4,Ph=5,Br=100,Dh=101,Ih=102,Kl=103,$l=104,Nh=200,Uh=201,Fh=202,Oh=203,Ku=204,$u=205,Bh=206,zh=207,kh=208,Hh=209,Gh=210,Vh=0,Wh=1,Xh=2,Go=3,qh=4,jh=5,Yh=6,Kh=7,Da=0,$h=1,Zh=2,Ri=0,Jh=1,Qh=2,ed=3,td=4,nd=5,Zu=300,Wr=301,Xr=302,Vo=303,Wo=304,Ia=306,Vi=1e3,qn=1001,Ca=1002,Jt=1003,Xo=1004,ba=1005,hn=1006,Ju=1007,fr=1008,hr=1009,id=1010,rd=1011,Qu=1012,sd=1013,rr=1014,Hi=1015,Ls=1016,ad=1017,od=1018,Hr=1020,ld=1021,Un=1023,cd=1024,ud=1025,lr=1026,qr=1027,fd=1028,hd=1029,dd=1030,pd=1031,md=1033,no=33776,io=33777,ro=33778,so=33779,Zl=35840,Jl=35841,Ql=35842,ec=35843,gd=36196,tc=37492,nc=37496,ic=37808,rc=37809,sc=37810,ac=37811,oc=37812,lc=37813,cc=37814,uc=37815,fc=37816,hc=37817,dc=37818,pc=37819,mc=37820,gc=37821,ao=36492,_d=36283,_c=36284,vc=36285,xc=36286,Ps=2300,jr=2301,oo=2302,yc=2400,Mc=2401,Sc=2402,vd=2500,xd=0,ef=1,qo=2,tf=3e3,cr=3001,yd=3200,Md=3201,Na=0,Sd=1,ur="",it="srgb",ci="srgb-linear",nf="display-p3",lo=7680,Td=519,jo=35044,Tc="300 es",Yo=1035;class Jr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ec=1234567;const As=Math.PI/180,Yr=180/Math.PI;function ri(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(un[r&255]+un[r>>8&255]+un[r>>16&255]+un[r>>24&255]+"-"+un[e&255]+un[e>>8&255]+"-"+un[e>>16&15|64]+un[e>>24&255]+"-"+un[t&63|128]+un[t>>8&255]+"-"+un[t>>16&255]+un[t>>24&255]+un[n&255]+un[n>>8&255]+un[n>>16&255]+un[n>>24&255]).toLowerCase()}function dn(r,e,t){return Math.max(e,Math.min(t,r))}function al(r,e){return(r%e+e)%e}function Ed(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function bd(r,e,t){return r!==e?(t-r)/(e-r):0}function ws(r,e,t){return(1-t)*r+t*e}function Ad(r,e,t,n){return ws(r,e,1-Math.exp(-t*n))}function wd(r,e=1){return e-Math.abs(al(r,e*2)-e)}function Rd(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function Cd(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function Ld(r,e){return r+Math.floor(Math.random()*(e-r+1))}function Pd(r,e){return r+Math.random()*(e-r)}function Dd(r){return r*(.5-Math.random())}function Id(r){r!==void 0&&(Ec=r);let e=Ec+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Nd(r){return r*As}function Ud(r){return r*Yr}function Ko(r){return(r&r-1)===0&&r!==0}function rf(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function sf(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Fd(r,e,t,n,i){const s=Math.cos,o=Math.sin,l=s(t/2),f=o(t/2),u=s((e+n)/2),p=o((e+n)/2),m=s((e-n)/2),v=o((e-n)/2),x=s((n-e)/2),T=o((n-e)/2);switch(i){case"XYX":r.set(l*p,f*m,f*v,l*u);break;case"YZY":r.set(f*v,l*p,f*m,l*u);break;case"ZXZ":r.set(f*m,f*v,l*p,l*u);break;case"XZX":r.set(l*p,f*T,f*x,l*u);break;case"YXY":r.set(f*x,l*p,f*T,l*u);break;case"ZYZ":r.set(f*T,f*x,l*p,l*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function wi(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Pt(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Od={DEG2RAD:As,RAD2DEG:Yr,generateUUID:ri,clamp:dn,euclideanModulo:al,mapLinear:Ed,inverseLerp:bd,lerp:ws,damp:Ad,pingpong:wd,smoothstep:Rd,smootherstep:Cd,randInt:Ld,randFloat:Pd,randFloatSpread:Dd,seededRandom:Id,degToRad:Nd,radToDeg:Ud,isPowerOfTwo:Ko,ceilPowerOfTwo:rf,floorPowerOfTwo:sf,setQuaternionFromProperEuler:Fd,normalize:Pt,denormalize:wi};class ct{constructor(e=0,t=0){ct.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(dn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class _t{constructor(){_t.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,s,o,l,f,u){const p=this.elements;return p[0]=e,p[1]=i,p[2]=l,p[3]=t,p[4]=s,p[5]=f,p[6]=n,p[7]=o,p[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],l=n[3],f=n[6],u=n[1],p=n[4],m=n[7],v=n[2],x=n[5],T=n[8],E=i[0],y=i[3],g=i[6],C=i[1],A=i[4],L=i[7],I=i[2],h=i[5],H=i[8];return s[0]=o*E+l*C+f*I,s[3]=o*y+l*A+f*h,s[6]=o*g+l*L+f*H,s[1]=u*E+p*C+m*I,s[4]=u*y+p*A+m*h,s[7]=u*g+p*L+m*H,s[2]=v*E+x*C+T*I,s[5]=v*y+x*A+T*h,s[8]=v*g+x*L+T*H,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],l=e[5],f=e[6],u=e[7],p=e[8];return t*o*p-t*l*u-n*s*p+n*l*f+i*s*u-i*o*f}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],l=e[5],f=e[6],u=e[7],p=e[8],m=p*o-l*u,v=l*f-p*s,x=u*s-o*f,T=t*m+n*v+i*x;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/T;return e[0]=m*E,e[1]=(i*u-p*n)*E,e[2]=(l*n-i*o)*E,e[3]=v*E,e[4]=(p*t-i*f)*E,e[5]=(i*s-l*t)*E,e[6]=x*E,e[7]=(n*f-u*t)*E,e[8]=(o*t-n*s)*E,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,l){const f=Math.cos(s),u=Math.sin(s);return this.set(n*f,n*u,-n*(f*o+u*l)+o+e,-i*u,i*f,-i*(-u*o+f*l)+l+t,0,0,1),this}scale(e,t){return this.premultiply(co.makeScale(e,t)),this}rotate(e){return this.premultiply(co.makeRotation(-e)),this}translate(e,t){return this.premultiply(co.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const co=new _t;function af(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Ds(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}const bc={};function Rs(r){r in bc||(bc[r]=!0,console.warn(r))}function Gr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function uo(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const Bd=new _t().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),zd=new _t().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function kd(r){return r.convertSRGBToLinear().applyMatrix3(zd)}function Hd(r){return r.applyMatrix3(Bd).convertLinearToSRGB()}const Gd={[ci]:r=>r,[it]:r=>r.convertSRGBToLinear(),[nf]:kd},Vd={[ci]:r=>r,[it]:r=>r.convertLinearToSRGB(),[nf]:Hd},Jn={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(r){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!r},get workingColorSpace(){return ci},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=Gd[e],i=Vd[t];if(n===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)}};let vr;class of{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{vr===void 0&&(vr=Ds("canvas")),vr.width=e.width,vr.height=e.height;const n=vr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=vr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ds("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Gr(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Gr(t[n]/255)*255):t[n]=Gr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class lf{constructor(e=null){this.isSource=!0,this.uuid=ri(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,l=i.length;o<l;o++)i[o].isDataTexture?s.push(fo(i[o].image)):s.push(fo(i[o]))}else s=fo(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function fo(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?of.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Wd=0;class ln extends Jr{constructor(e=ln.DEFAULT_IMAGE,t=ln.DEFAULT_MAPPING,n=qn,i=qn,s=hn,o=fr,l=Un,f=hr,u=ln.DEFAULT_ANISOTROPY,p=ur){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wd++}),this.uuid=ri(),this.name="",this.source=new lf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=l,this.internalFormat=null,this.type=f,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new _t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof p=="string"?this.colorSpace=p:(Rs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=p===cr?it:ur),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Zu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Vi:e.x=e.x-Math.floor(e.x);break;case qn:e.x=e.x<0?0:1;break;case Ca:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Vi:e.y=e.y-Math.floor(e.y);break;case qn:e.y=e.y<0?0:1;break;case Ca:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Rs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===it?cr:tf}set encoding(e){Rs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===cr?it:ur}}ln.DEFAULT_IMAGE=null;ln.DEFAULT_MAPPING=Zu;ln.DEFAULT_ANISOTROPY=1;class Dt{constructor(e=0,t=0,n=0,i=1){Dt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const f=e.elements,u=f[0],p=f[4],m=f[8],v=f[1],x=f[5],T=f[9],E=f[2],y=f[6],g=f[10];if(Math.abs(p-v)<.01&&Math.abs(m-E)<.01&&Math.abs(T-y)<.01){if(Math.abs(p+v)<.1&&Math.abs(m+E)<.1&&Math.abs(T+y)<.1&&Math.abs(u+x+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const A=(u+1)/2,L=(x+1)/2,I=(g+1)/2,h=(p+v)/4,H=(m+E)/4,Y=(T+y)/4;return A>L&&A>I?A<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(A),i=h/n,s=H/n):L>I?L<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(L),n=h/i,s=Y/i):I<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(I),n=H/s,i=Y/s),this.set(n,i,s,t),this}let C=Math.sqrt((y-T)*(y-T)+(m-E)*(m-E)+(v-p)*(v-p));return Math.abs(C)<.001&&(C=1),this.x=(y-T)/C,this.y=(m-E)/C,this.z=(v-p)/C,this.w=Math.acos((u+x+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Li extends Jr{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Dt(0,0,e,t),this.scissorTest=!1,this.viewport=new Dt(0,0,e,t);const i={width:e,height:t,depth:1};n.encoding!==void 0&&(Rs("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===cr?it:ur),this.texture=new ln(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:hn,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new lf(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class cf extends ln{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Xd extends ln{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class si{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,l){let f=n[i+0],u=n[i+1],p=n[i+2],m=n[i+3];const v=s[o+0],x=s[o+1],T=s[o+2],E=s[o+3];if(l===0){e[t+0]=f,e[t+1]=u,e[t+2]=p,e[t+3]=m;return}if(l===1){e[t+0]=v,e[t+1]=x,e[t+2]=T,e[t+3]=E;return}if(m!==E||f!==v||u!==x||p!==T){let y=1-l;const g=f*v+u*x+p*T+m*E,C=g>=0?1:-1,A=1-g*g;if(A>Number.EPSILON){const I=Math.sqrt(A),h=Math.atan2(I,g*C);y=Math.sin(y*h)/I,l=Math.sin(l*h)/I}const L=l*C;if(f=f*y+v*L,u=u*y+x*L,p=p*y+T*L,m=m*y+E*L,y===1-l){const I=1/Math.sqrt(f*f+u*u+p*p+m*m);f*=I,u*=I,p*=I,m*=I}}e[t]=f,e[t+1]=u,e[t+2]=p,e[t+3]=m}static multiplyQuaternionsFlat(e,t,n,i,s,o){const l=n[i],f=n[i+1],u=n[i+2],p=n[i+3],m=s[o],v=s[o+1],x=s[o+2],T=s[o+3];return e[t]=l*T+p*m+f*x-u*v,e[t+1]=f*T+p*v+u*m-l*x,e[t+2]=u*T+p*x+l*v-f*m,e[t+3]=p*T-l*m-f*v-u*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,s=e._z,o=e._order,l=Math.cos,f=Math.sin,u=l(n/2),p=l(i/2),m=l(s/2),v=f(n/2),x=f(i/2),T=f(s/2);switch(o){case"XYZ":this._x=v*p*m+u*x*T,this._y=u*x*m-v*p*T,this._z=u*p*T+v*x*m,this._w=u*p*m-v*x*T;break;case"YXZ":this._x=v*p*m+u*x*T,this._y=u*x*m-v*p*T,this._z=u*p*T-v*x*m,this._w=u*p*m+v*x*T;break;case"ZXY":this._x=v*p*m-u*x*T,this._y=u*x*m+v*p*T,this._z=u*p*T+v*x*m,this._w=u*p*m-v*x*T;break;case"ZYX":this._x=v*p*m-u*x*T,this._y=u*x*m+v*p*T,this._z=u*p*T-v*x*m,this._w=u*p*m+v*x*T;break;case"YZX":this._x=v*p*m+u*x*T,this._y=u*x*m+v*p*T,this._z=u*p*T-v*x*m,this._w=u*p*m-v*x*T;break;case"XZY":this._x=v*p*m-u*x*T,this._y=u*x*m-v*p*T,this._z=u*p*T+v*x*m,this._w=u*p*m+v*x*T;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],l=t[5],f=t[9],u=t[2],p=t[6],m=t[10],v=n+l+m;if(v>0){const x=.5/Math.sqrt(v+1);this._w=.25/x,this._x=(p-f)*x,this._y=(s-u)*x,this._z=(o-i)*x}else if(n>l&&n>m){const x=2*Math.sqrt(1+n-l-m);this._w=(p-f)/x,this._x=.25*x,this._y=(i+o)/x,this._z=(s+u)/x}else if(l>m){const x=2*Math.sqrt(1+l-n-m);this._w=(s-u)/x,this._x=(i+o)/x,this._y=.25*x,this._z=(f+p)/x}else{const x=2*Math.sqrt(1+m-n-l);this._w=(o-i)/x,this._x=(s+u)/x,this._y=(f+p)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(dn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,l=t._x,f=t._y,u=t._z,p=t._w;return this._x=n*p+o*l+i*u-s*f,this._y=i*p+o*f+s*l-n*u,this._z=s*p+o*u+n*f-i*l,this._w=o*p-n*l-i*f-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let l=o*e._w+n*e._x+i*e._y+s*e._z;if(l<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,l=-l):this.copy(e),l>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const f=1-l*l;if(f<=Number.EPSILON){const x=1-t;return this._w=x*o+t*this._w,this._x=x*n+t*this._x,this._y=x*i+t*this._y,this._z=x*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(f),p=Math.atan2(u,l),m=Math.sin((1-t)*p)/u,v=Math.sin(t*p)/u;return this._w=o*m+this._w*v,this._x=n*m+this._x*v,this._y=i*m+this._y*v,this._z=s*m+this._z*v,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,t=0,n=0){k.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ac.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ac.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,l=e.z,f=e.w,u=f*t+o*i-l*n,p=f*n+l*t-s*i,m=f*i+s*n-o*t,v=-s*t-o*n-l*i;return this.x=u*f+v*-s+p*-l-m*-o,this.y=p*f+v*-o+m*-s-u*-l,this.z=m*f+v*-l+u*-o-p*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,l=t.y,f=t.z;return this.x=i*f-s*l,this.y=s*o-n*f,this.z=n*l-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ho.copy(this).projectOnVector(e),this.sub(ho)}reflect(e){return this.sub(ho.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(dn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ho=new k,Ac=new si;class ui{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(_i.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(_i.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=_i.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),xr.copy(e.boundingBox),xr.applyMatrix4(e.matrixWorld),this.union(xr);else{const i=e.geometry;if(i!==void 0)if(t&&i.attributes!==void 0&&i.attributes.position!==void 0){const s=i.attributes.position;for(let o=0,l=s.count;o<l;o++)_i.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(_i)}else i.boundingBox===null&&i.computeBoundingBox(),xr.copy(i.boundingBox),xr.applyMatrix4(e.matrixWorld),this.union(xr)}const n=e.children;for(let i=0,s=n.length;i<s;i++)this.expandByObject(n[i],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,_i),_i.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ps),Ys.subVectors(this.max,ps),yr.subVectors(e.a,ps),Mr.subVectors(e.b,ps),Sr.subVectors(e.c,ps),Ii.subVectors(Mr,yr),Ni.subVectors(Sr,Mr),Ji.subVectors(yr,Sr);let t=[0,-Ii.z,Ii.y,0,-Ni.z,Ni.y,0,-Ji.z,Ji.y,Ii.z,0,-Ii.x,Ni.z,0,-Ni.x,Ji.z,0,-Ji.x,-Ii.y,Ii.x,0,-Ni.y,Ni.x,0,-Ji.y,Ji.x,0];return!po(t,yr,Mr,Sr,Ys)||(t=[1,0,0,0,1,0,0,0,1],!po(t,yr,Mr,Sr,Ys))?!1:(Ks.crossVectors(Ii,Ni),t=[Ks.x,Ks.y,Ks.z],po(t,yr,Mr,Sr,Ys))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,_i).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(_i).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(gi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),gi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),gi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),gi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),gi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),gi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),gi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),gi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(gi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const gi=[new k,new k,new k,new k,new k,new k,new k,new k],_i=new k,xr=new ui,yr=new k,Mr=new k,Sr=new k,Ii=new k,Ni=new k,Ji=new k,ps=new k,Ys=new k,Ks=new k,Qi=new k;function po(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Qi.fromArray(r,s);const l=i.x*Math.abs(Qi.x)+i.y*Math.abs(Qi.y)+i.z*Math.abs(Qi.z),f=e.dot(Qi),u=t.dot(Qi),p=n.dot(Qi);if(Math.max(-Math.max(f,u,p),Math.min(f,u,p))>l)return!1}return!0}const qd=new ui,ms=new k,mo=new k;class fi{constructor(e=new k,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):qd.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ms.subVectors(e,this.center);const t=ms.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ms,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(mo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ms.copy(e.center).add(mo)),this.expandByPoint(ms.copy(e.center).sub(mo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const vi=new k,go=new k,$s=new k,Ui=new k,_o=new k,Zs=new k,vo=new k;class Ua{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,vi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=vi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(vi.copy(this.origin).addScaledVector(this.direction,t),vi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){go.copy(e).add(t).multiplyScalar(.5),$s.copy(t).sub(e).normalize(),Ui.copy(this.origin).sub(go);const s=e.distanceTo(t)*.5,o=-this.direction.dot($s),l=Ui.dot(this.direction),f=-Ui.dot($s),u=Ui.lengthSq(),p=Math.abs(1-o*o);let m,v,x,T;if(p>0)if(m=o*f-l,v=o*l-f,T=s*p,m>=0)if(v>=-T)if(v<=T){const E=1/p;m*=E,v*=E,x=m*(m+o*v+2*l)+v*(o*m+v+2*f)+u}else v=s,m=Math.max(0,-(o*v+l)),x=-m*m+v*(v+2*f)+u;else v=-s,m=Math.max(0,-(o*v+l)),x=-m*m+v*(v+2*f)+u;else v<=-T?(m=Math.max(0,-(-o*s+l)),v=m>0?-s:Math.min(Math.max(-s,-f),s),x=-m*m+v*(v+2*f)+u):v<=T?(m=0,v=Math.min(Math.max(-s,-f),s),x=v*(v+2*f)+u):(m=Math.max(0,-(o*s+l)),v=m>0?s:Math.min(Math.max(-s,-f),s),x=-m*m+v*(v+2*f)+u);else v=o>0?-s:s,m=Math.max(0,-(o*v+l)),x=-m*m+v*(v+2*f)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,m),i&&i.copy(go).addScaledVector($s,v),x}intersectSphere(e,t){vi.subVectors(e.center,this.origin);const n=vi.dot(this.direction),i=vi.dot(vi)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),l=n-o,f=n+o;return f<0?null:l<0?this.at(f,t):this.at(l,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,l,f;const u=1/this.direction.x,p=1/this.direction.y,m=1/this.direction.z,v=this.origin;return u>=0?(n=(e.min.x-v.x)*u,i=(e.max.x-v.x)*u):(n=(e.max.x-v.x)*u,i=(e.min.x-v.x)*u),p>=0?(s=(e.min.y-v.y)*p,o=(e.max.y-v.y)*p):(s=(e.max.y-v.y)*p,o=(e.min.y-v.y)*p),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),m>=0?(l=(e.min.z-v.z)*m,f=(e.max.z-v.z)*m):(l=(e.max.z-v.z)*m,f=(e.min.z-v.z)*m),n>f||l>i)||((l>n||n!==n)&&(n=l),(f<i||i!==i)&&(i=f),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,vi)!==null}intersectTriangle(e,t,n,i,s){_o.subVectors(t,e),Zs.subVectors(n,e),vo.crossVectors(_o,Zs);let o=this.direction.dot(vo),l;if(o>0){if(i)return null;l=1}else if(o<0)l=-1,o=-o;else return null;Ui.subVectors(this.origin,e);const f=l*this.direction.dot(Zs.crossVectors(Ui,Zs));if(f<0)return null;const u=l*this.direction.dot(_o.cross(Ui));if(u<0||f+u>o)return null;const p=-l*Ui.dot(vo);return p<0?null:this.at(p/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class mt{constructor(){mt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,s,o,l,f,u,p,m,v,x,T,E,y){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=i,g[1]=s,g[5]=o,g[9]=l,g[13]=f,g[2]=u,g[6]=p,g[10]=m,g[14]=v,g[3]=x,g[7]=T,g[11]=E,g[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new mt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Tr.setFromMatrixColumn(e,0).length(),s=1/Tr.setFromMatrixColumn(e,1).length(),o=1/Tr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),l=Math.sin(n),f=Math.cos(i),u=Math.sin(i),p=Math.cos(s),m=Math.sin(s);if(e.order==="XYZ"){const v=o*p,x=o*m,T=l*p,E=l*m;t[0]=f*p,t[4]=-f*m,t[8]=u,t[1]=x+T*u,t[5]=v-E*u,t[9]=-l*f,t[2]=E-v*u,t[6]=T+x*u,t[10]=o*f}else if(e.order==="YXZ"){const v=f*p,x=f*m,T=u*p,E=u*m;t[0]=v+E*l,t[4]=T*l-x,t[8]=o*u,t[1]=o*m,t[5]=o*p,t[9]=-l,t[2]=x*l-T,t[6]=E+v*l,t[10]=o*f}else if(e.order==="ZXY"){const v=f*p,x=f*m,T=u*p,E=u*m;t[0]=v-E*l,t[4]=-o*m,t[8]=T+x*l,t[1]=x+T*l,t[5]=o*p,t[9]=E-v*l,t[2]=-o*u,t[6]=l,t[10]=o*f}else if(e.order==="ZYX"){const v=o*p,x=o*m,T=l*p,E=l*m;t[0]=f*p,t[4]=T*u-x,t[8]=v*u+E,t[1]=f*m,t[5]=E*u+v,t[9]=x*u-T,t[2]=-u,t[6]=l*f,t[10]=o*f}else if(e.order==="YZX"){const v=o*f,x=o*u,T=l*f,E=l*u;t[0]=f*p,t[4]=E-v*m,t[8]=T*m+x,t[1]=m,t[5]=o*p,t[9]=-l*p,t[2]=-u*p,t[6]=x*m+T,t[10]=v-E*m}else if(e.order==="XZY"){const v=o*f,x=o*u,T=l*f,E=l*u;t[0]=f*p,t[4]=-m,t[8]=u*p,t[1]=v*m+E,t[5]=o*p,t[9]=x*m-T,t[2]=T*m-x,t[6]=l*p,t[10]=E*m+v}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(jd,e,Yd)}lookAt(e,t,n){const i=this.elements;return In.subVectors(e,t),In.lengthSq()===0&&(In.z=1),In.normalize(),Fi.crossVectors(n,In),Fi.lengthSq()===0&&(Math.abs(n.z)===1?In.x+=1e-4:In.z+=1e-4,In.normalize(),Fi.crossVectors(n,In)),Fi.normalize(),Js.crossVectors(In,Fi),i[0]=Fi.x,i[4]=Js.x,i[8]=In.x,i[1]=Fi.y,i[5]=Js.y,i[9]=In.y,i[2]=Fi.z,i[6]=Js.z,i[10]=In.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],l=n[4],f=n[8],u=n[12],p=n[1],m=n[5],v=n[9],x=n[13],T=n[2],E=n[6],y=n[10],g=n[14],C=n[3],A=n[7],L=n[11],I=n[15],h=i[0],H=i[4],Y=i[8],w=i[12],U=i[1],fe=i[5],Q=i[9],q=i[13],te=i[2],ee=i[6],ye=i[10],ue=i[14],de=i[3],Me=i[7],ge=i[11],Ne=i[15];return s[0]=o*h+l*U+f*te+u*de,s[4]=o*H+l*fe+f*ee+u*Me,s[8]=o*Y+l*Q+f*ye+u*ge,s[12]=o*w+l*q+f*ue+u*Ne,s[1]=p*h+m*U+v*te+x*de,s[5]=p*H+m*fe+v*ee+x*Me,s[9]=p*Y+m*Q+v*ye+x*ge,s[13]=p*w+m*q+v*ue+x*Ne,s[2]=T*h+E*U+y*te+g*de,s[6]=T*H+E*fe+y*ee+g*Me,s[10]=T*Y+E*Q+y*ye+g*ge,s[14]=T*w+E*q+y*ue+g*Ne,s[3]=C*h+A*U+L*te+I*de,s[7]=C*H+A*fe+L*ee+I*Me,s[11]=C*Y+A*Q+L*ye+I*ge,s[15]=C*w+A*q+L*ue+I*Ne,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],l=e[5],f=e[9],u=e[13],p=e[2],m=e[6],v=e[10],x=e[14],T=e[3],E=e[7],y=e[11],g=e[15];return T*(+s*f*m-i*u*m-s*l*v+n*u*v+i*l*x-n*f*x)+E*(+t*f*x-t*u*v+s*o*v-i*o*x+i*u*p-s*f*p)+y*(+t*u*m-t*l*x-s*o*m+n*o*x+s*l*p-n*u*p)+g*(-i*l*p-t*f*m+t*l*v+i*o*m-n*o*v+n*f*p)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],l=e[5],f=e[6],u=e[7],p=e[8],m=e[9],v=e[10],x=e[11],T=e[12],E=e[13],y=e[14],g=e[15],C=m*y*u-E*v*u+E*f*x-l*y*x-m*f*g+l*v*g,A=T*v*u-p*y*u-T*f*x+o*y*x+p*f*g-o*v*g,L=p*E*u-T*m*u+T*l*x-o*E*x-p*l*g+o*m*g,I=T*m*f-p*E*f-T*l*v+o*E*v+p*l*y-o*m*y,h=t*C+n*A+i*L+s*I;if(h===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const H=1/h;return e[0]=C*H,e[1]=(E*v*s-m*y*s-E*i*x+n*y*x+m*i*g-n*v*g)*H,e[2]=(l*y*s-E*f*s+E*i*u-n*y*u-l*i*g+n*f*g)*H,e[3]=(m*f*s-l*v*s-m*i*u+n*v*u+l*i*x-n*f*x)*H,e[4]=A*H,e[5]=(p*y*s-T*v*s+T*i*x-t*y*x-p*i*g+t*v*g)*H,e[6]=(T*f*s-o*y*s-T*i*u+t*y*u+o*i*g-t*f*g)*H,e[7]=(o*v*s-p*f*s+p*i*u-t*v*u-o*i*x+t*f*x)*H,e[8]=L*H,e[9]=(T*m*s-p*E*s-T*n*x+t*E*x+p*n*g-t*m*g)*H,e[10]=(o*E*s-T*l*s+T*n*u-t*E*u-o*n*g+t*l*g)*H,e[11]=(p*l*s-o*m*s-p*n*u+t*m*u+o*n*x-t*l*x)*H,e[12]=I*H,e[13]=(p*E*i-T*m*i+T*n*v-t*E*v-p*n*y+t*m*y)*H,e[14]=(T*l*i-o*E*i-T*n*f+t*E*f+o*n*y-t*l*y)*H,e[15]=(o*m*i-p*l*i+p*n*f-t*m*f-o*n*v+t*l*v)*H,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,l=e.y,f=e.z,u=s*o,p=s*l;return this.set(u*o+n,u*l-i*f,u*f+i*l,0,u*l+i*f,p*l+n,p*f-i*o,0,u*f-i*l,p*f+i*o,s*f*f+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,l=t._z,f=t._w,u=s+s,p=o+o,m=l+l,v=s*u,x=s*p,T=s*m,E=o*p,y=o*m,g=l*m,C=f*u,A=f*p,L=f*m,I=n.x,h=n.y,H=n.z;return i[0]=(1-(E+g))*I,i[1]=(x+L)*I,i[2]=(T-A)*I,i[3]=0,i[4]=(x-L)*h,i[5]=(1-(v+g))*h,i[6]=(y+C)*h,i[7]=0,i[8]=(T+A)*H,i[9]=(y-C)*H,i[10]=(1-(v+E))*H,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Tr.set(i[0],i[1],i[2]).length();const o=Tr.set(i[4],i[5],i[6]).length(),l=Tr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Qn.copy(this);const u=1/s,p=1/o,m=1/l;return Qn.elements[0]*=u,Qn.elements[1]*=u,Qn.elements[2]*=u,Qn.elements[4]*=p,Qn.elements[5]*=p,Qn.elements[6]*=p,Qn.elements[8]*=m,Qn.elements[9]*=m,Qn.elements[10]*=m,t.setFromRotationMatrix(Qn),n.x=s,n.y=o,n.z=l,this}makePerspective(e,t,n,i,s,o){const l=this.elements,f=2*s/(t-e),u=2*s/(n-i),p=(t+e)/(t-e),m=(n+i)/(n-i),v=-(o+s)/(o-s),x=-2*o*s/(o-s);return l[0]=f,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=u,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=v,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,o){const l=this.elements,f=1/(t-e),u=1/(n-i),p=1/(o-s),m=(t+e)*f,v=(n+i)*u,x=(o+s)*p;return l[0]=2*f,l[4]=0,l[8]=0,l[12]=-m,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-v,l[2]=0,l[6]=0,l[10]=-2*p,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Tr=new k,Qn=new mt,jd=new k(0,0,0),Yd=new k(1,1,1),Fi=new k,Js=new k,In=new k,wc=new mt,Rc=new si;class Kr{constructor(e=0,t=0,n=0,i=Kr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],l=i[8],f=i[1],u=i[5],p=i[9],m=i[2],v=i[6],x=i[10];switch(t){case"XYZ":this._y=Math.asin(dn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-p,x),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(v,u),this._z=0);break;case"YXZ":this._x=Math.asin(-dn(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(l,x),this._z=Math.atan2(f,u)):(this._y=Math.atan2(-m,s),this._z=0);break;case"ZXY":this._x=Math.asin(dn(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-m,x),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(f,s));break;case"ZYX":this._y=Math.asin(-dn(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(v,x),this._z=Math.atan2(f,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(dn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-p,u),this._y=Math.atan2(-m,s)):(this._x=0,this._y=Math.atan2(l,x));break;case"XZY":this._z=Math.asin(-dn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(v,u),this._y=Math.atan2(l,s)):(this._x=Math.atan2(-p,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return wc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(wc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Rc.setFromEuler(this),this.setFromQuaternion(Rc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Kr.DEFAULT_ORDER="XYZ";class ol{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Kd=0;const Cc=new k,Er=new si,xi=new mt,Qs=new k,gs=new k,$d=new k,Zd=new si,Lc=new k(1,0,0),Pc=new k(0,1,0),Dc=new k(0,0,1),Jd={type:"added"},Ic={type:"removed"};class Bt extends Jr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Kd++}),this.uuid=ri(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Bt.DEFAULT_UP.clone();const e=new k,t=new Kr,n=new si,i=new k(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new mt},normalMatrix:{value:new _t}}),this.matrix=new mt,this.matrixWorld=new mt,this.matrixAutoUpdate=Bt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new ol,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Er.setFromAxisAngle(e,t),this.quaternion.multiply(Er),this}rotateOnWorldAxis(e,t){return Er.setFromAxisAngle(e,t),this.quaternion.premultiply(Er),this}rotateX(e){return this.rotateOnAxis(Lc,e)}rotateY(e){return this.rotateOnAxis(Pc,e)}rotateZ(e){return this.rotateOnAxis(Dc,e)}translateOnAxis(e,t){return Cc.copy(e).applyQuaternion(this.quaternion),this.position.add(Cc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Lc,e)}translateY(e){return this.translateOnAxis(Pc,e)}translateZ(e){return this.translateOnAxis(Dc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(xi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Qs.copy(e):Qs.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),gs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xi.lookAt(gs,Qs,this.up):xi.lookAt(Qs,gs,this.up),this.quaternion.setFromRotationMatrix(xi),i&&(xi.extractRotation(i.matrixWorld),Er.setFromRotationMatrix(xi),this.quaternion.premultiply(Er.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Jd)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ic)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Ic)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),xi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),xi.multiply(e.parent.matrixWorld)),e.applyMatrix4(xi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectsByProperty(e,t);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gs,e,$d),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gs,Zd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const l=i[s];l.matrixWorldAutoUpdate===!0&&l.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(l,f){return l[f.uuid]===void 0&&(l[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const f=l.shapes;if(Array.isArray(f))for(let u=0,p=f.length;u<p;u++){const m=f[u];s(e.shapes,m)}else s(e.shapes,f)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let f=0,u=this.material.length;f<u;f++)l.push(s(e.materials,this.material[f]));i.material=l}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let l=0;l<this.children.length;l++)i.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let l=0;l<this.animations.length;l++){const f=this.animations[l];i.animations.push(s(e.animations,f))}}if(t){const l=o(e.geometries),f=o(e.materials),u=o(e.textures),p=o(e.images),m=o(e.shapes),v=o(e.skeletons),x=o(e.animations),T=o(e.nodes);l.length>0&&(n.geometries=l),f.length>0&&(n.materials=f),u.length>0&&(n.textures=u),p.length>0&&(n.images=p),m.length>0&&(n.shapes=m),v.length>0&&(n.skeletons=v),x.length>0&&(n.animations=x),T.length>0&&(n.nodes=T)}return n.object=i,n;function o(l){const f=[];for(const u in l){const p=l[u];delete p.metadata,f.push(p)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Bt.DEFAULT_UP=new k(0,1,0);Bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ei=new k,yi=new k,xo=new k,Mi=new k,br=new k,Ar=new k,Nc=new k,yo=new k,Mo=new k,So=new k;let ea=!1;class ni{constructor(e=new k,t=new k,n=new k){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),ei.subVectors(e,t),i.cross(ei);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){ei.subVectors(i,t),yi.subVectors(n,t),xo.subVectors(e,t);const o=ei.dot(ei),l=ei.dot(yi),f=ei.dot(xo),u=yi.dot(yi),p=yi.dot(xo),m=o*u-l*l;if(m===0)return s.set(-2,-1,-1);const v=1/m,x=(u*f-l*p)*v,T=(o*p-l*f)*v;return s.set(1-x-T,T,x)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Mi),Mi.x>=0&&Mi.y>=0&&Mi.x+Mi.y<=1}static getUV(e,t,n,i,s,o,l,f){return ea===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ea=!0),this.getInterpolation(e,t,n,i,s,o,l,f)}static getInterpolation(e,t,n,i,s,o,l,f){return this.getBarycoord(e,t,n,i,Mi),f.setScalar(0),f.addScaledVector(s,Mi.x),f.addScaledVector(o,Mi.y),f.addScaledVector(l,Mi.z),f}static isFrontFacing(e,t,n,i){return ei.subVectors(n,t),yi.subVectors(e,t),ei.cross(yi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ei.subVectors(this.c,this.b),yi.subVectors(this.a,this.b),ei.cross(yi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ni.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ni.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return ea===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ea=!0),ni.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}getInterpolation(e,t,n,i,s){return ni.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return ni.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ni.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,l;br.subVectors(i,n),Ar.subVectors(s,n),yo.subVectors(e,n);const f=br.dot(yo),u=Ar.dot(yo);if(f<=0&&u<=0)return t.copy(n);Mo.subVectors(e,i);const p=br.dot(Mo),m=Ar.dot(Mo);if(p>=0&&m<=p)return t.copy(i);const v=f*m-p*u;if(v<=0&&f>=0&&p<=0)return o=f/(f-p),t.copy(n).addScaledVector(br,o);So.subVectors(e,s);const x=br.dot(So),T=Ar.dot(So);if(T>=0&&x<=T)return t.copy(s);const E=x*u-f*T;if(E<=0&&u>=0&&T<=0)return l=u/(u-T),t.copy(n).addScaledVector(Ar,l);const y=p*T-x*m;if(y<=0&&m-p>=0&&x-T>=0)return Nc.subVectors(s,i),l=(m-p)/(m-p+(x-T)),t.copy(i).addScaledVector(Nc,l);const g=1/(y+E+v);return o=E*g,l=v*g,t.copy(n).addScaledVector(br,o).addScaledVector(Ar,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Qd=0;class jn extends Jr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Qd++}),this.uuid=ri(),this.name="",this.type="Material",this.blending=kr,this.side=Ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Ku,this.blendDst=$u,this.blendEquation=Br,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Go,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Td,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=lo,this.stencilZFail=lo,this.stencilZPass=lo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==kr&&(n.blending=this.blending),this.side!==Ci&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const l in s){const f=s[l];delete f.metadata,o.push(f)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const uf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ti={h:0,s:0,l:0},ta={h:0,s:0,l:0};function To(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Qe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=it){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Jn.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Jn.workingColorSpace){return this.r=e,this.g=t,this.b=n,Jn.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Jn.workingColorSpace){if(e=al(e,1),t=dn(t,0,1),n=dn(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=To(o,s,e+1/3),this.g=To(o,s,e),this.b=To(o,s,e-1/3)}return Jn.toWorkingColorSpace(this,i),this}setStyle(e,t=it){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],l=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=it){const n=uf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Gr(e.r),this.g=Gr(e.g),this.b=Gr(e.b),this}copyLinearToSRGB(e){return this.r=uo(e.r),this.g=uo(e.g),this.b=uo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=it){return Jn.fromWorkingColorSpace(fn.copy(this),e),Math.round(dn(fn.r*255,0,255))*65536+Math.round(dn(fn.g*255,0,255))*256+Math.round(dn(fn.b*255,0,255))}getHexString(e=it){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Jn.workingColorSpace){Jn.fromWorkingColorSpace(fn.copy(this),t);const n=fn.r,i=fn.g,s=fn.b,o=Math.max(n,i,s),l=Math.min(n,i,s);let f,u;const p=(l+o)/2;if(l===o)f=0,u=0;else{const m=o-l;switch(u=p<=.5?m/(o+l):m/(2-o-l),o){case n:f=(i-s)/m+(i<s?6:0);break;case i:f=(s-n)/m+2;break;case s:f=(n-i)/m+4;break}f/=6}return e.h=f,e.s=u,e.l=p,e}getRGB(e,t=Jn.workingColorSpace){return Jn.fromWorkingColorSpace(fn.copy(this),t),e.r=fn.r,e.g=fn.g,e.b=fn.b,e}getStyle(e=it){Jn.fromWorkingColorSpace(fn.copy(this),e);const t=fn.r,n=fn.g,i=fn.b;return e!==it?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(ti),ti.h+=e,ti.s+=t,ti.l+=n,this.setHSL(ti.h,ti.s,ti.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ti),e.getHSL(ta);const n=ws(ti.h,ta.h,t),i=ws(ti.s,ta.s,t),s=ws(ti.l,ta.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const fn=new Qe;Qe.NAMES=uf;class sr extends jn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Da,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Kt=new k,na=new ct;class Gt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=jo,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)na.fromBufferAttribute(this,t),na.applyMatrix3(e),this.setXY(t,na.x,na.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix3(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix4(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyNormalMatrix(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.transformDirection(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=wi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=wi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=wi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=wi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array),i=Pt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array),i=Pt(i,this.array),s=Pt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==jo&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class ff extends Gt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class hf extends Gt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Qt extends Gt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let ep=0;const kn=new mt,Eo=new Bt,wr=new k,Nn=new ui,_s=new ui,rn=new k;class pn extends Jr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ep++}),this.uuid=ri(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(af(e)?hf:ff)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new _t().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return kn.makeRotationFromQuaternion(e),this.applyMatrix4(kn),this}rotateX(e){return kn.makeRotationX(e),this.applyMatrix4(kn),this}rotateY(e){return kn.makeRotationY(e),this.applyMatrix4(kn),this}rotateZ(e){return kn.makeRotationZ(e),this.applyMatrix4(kn),this}translate(e,t,n){return kn.makeTranslation(e,t,n),this.applyMatrix4(kn),this}scale(e,t,n){return kn.makeScale(e,t,n),this.applyMatrix4(kn),this}lookAt(e){return Eo.lookAt(e),Eo.updateMatrix(),this.applyMatrix4(Eo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(wr).negate(),this.translate(wr.x,wr.y,wr.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Qt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ui);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Nn.setFromBufferAttribute(s),this.morphTargetsRelative?(rn.addVectors(this.boundingBox.min,Nn.min),this.boundingBox.expandByPoint(rn),rn.addVectors(this.boundingBox.max,Nn.max),this.boundingBox.expandByPoint(rn)):(this.boundingBox.expandByPoint(Nn.min),this.boundingBox.expandByPoint(Nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new k,1/0);return}if(e){const n=this.boundingSphere.center;if(Nn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const l=t[s];_s.setFromBufferAttribute(l),this.morphTargetsRelative?(rn.addVectors(Nn.min,_s.min),Nn.expandByPoint(rn),rn.addVectors(Nn.max,_s.max),Nn.expandByPoint(rn)):(Nn.expandByPoint(_s.min),Nn.expandByPoint(_s.max))}Nn.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)rn.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(rn));if(t)for(let s=0,o=t.length;s<o;s++){const l=t[s],f=this.morphTargetsRelative;for(let u=0,p=l.count;u<p;u++)rn.fromBufferAttribute(l,u),f&&(wr.fromBufferAttribute(e,u),rn.add(wr)),i=Math.max(i,n.distanceToSquared(rn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,o=t.uv.array,l=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Gt(new Float32Array(4*l),4));const f=this.getAttribute("tangent").array,u=[],p=[];for(let U=0;U<l;U++)u[U]=new k,p[U]=new k;const m=new k,v=new k,x=new k,T=new ct,E=new ct,y=new ct,g=new k,C=new k;function A(U,fe,Q){m.fromArray(i,U*3),v.fromArray(i,fe*3),x.fromArray(i,Q*3),T.fromArray(o,U*2),E.fromArray(o,fe*2),y.fromArray(o,Q*2),v.sub(m),x.sub(m),E.sub(T),y.sub(T);const q=1/(E.x*y.y-y.x*E.y);isFinite(q)&&(g.copy(v).multiplyScalar(y.y).addScaledVector(x,-E.y).multiplyScalar(q),C.copy(x).multiplyScalar(E.x).addScaledVector(v,-y.x).multiplyScalar(q),u[U].add(g),u[fe].add(g),u[Q].add(g),p[U].add(C),p[fe].add(C),p[Q].add(C))}let L=this.groups;L.length===0&&(L=[{start:0,count:n.length}]);for(let U=0,fe=L.length;U<fe;++U){const Q=L[U],q=Q.start,te=Q.count;for(let ee=q,ye=q+te;ee<ye;ee+=3)A(n[ee+0],n[ee+1],n[ee+2])}const I=new k,h=new k,H=new k,Y=new k;function w(U){H.fromArray(s,U*3),Y.copy(H);const fe=u[U];I.copy(fe),I.sub(H.multiplyScalar(H.dot(fe))).normalize(),h.crossVectors(Y,fe);const q=h.dot(p[U])<0?-1:1;f[U*4]=I.x,f[U*4+1]=I.y,f[U*4+2]=I.z,f[U*4+3]=q}for(let U=0,fe=L.length;U<fe;++U){const Q=L[U],q=Q.start,te=Q.count;for(let ee=q,ye=q+te;ee<ye;ee+=3)w(n[ee+0]),w(n[ee+1]),w(n[ee+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Gt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let v=0,x=n.count;v<x;v++)n.setXYZ(v,0,0,0);const i=new k,s=new k,o=new k,l=new k,f=new k,u=new k,p=new k,m=new k;if(e)for(let v=0,x=e.count;v<x;v+=3){const T=e.getX(v+0),E=e.getX(v+1),y=e.getX(v+2);i.fromBufferAttribute(t,T),s.fromBufferAttribute(t,E),o.fromBufferAttribute(t,y),p.subVectors(o,s),m.subVectors(i,s),p.cross(m),l.fromBufferAttribute(n,T),f.fromBufferAttribute(n,E),u.fromBufferAttribute(n,y),l.add(p),f.add(p),u.add(p),n.setXYZ(T,l.x,l.y,l.z),n.setXYZ(E,f.x,f.y,f.z),n.setXYZ(y,u.x,u.y,u.z)}else for(let v=0,x=t.count;v<x;v+=3)i.fromBufferAttribute(t,v+0),s.fromBufferAttribute(t,v+1),o.fromBufferAttribute(t,v+2),p.subVectors(o,s),m.subVectors(i,s),p.cross(m),n.setXYZ(v+0,p.x,p.y,p.z),n.setXYZ(v+1,p.x,p.y,p.z),n.setXYZ(v+2,p.x,p.y,p.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)rn.fromBufferAttribute(e,t),rn.normalize(),e.setXYZ(t,rn.x,rn.y,rn.z)}toNonIndexed(){function e(l,f){const u=l.array,p=l.itemSize,m=l.normalized,v=new u.constructor(f.length*p);let x=0,T=0;for(let E=0,y=f.length;E<y;E++){l.isInterleavedBufferAttribute?x=f[E]*l.data.stride+l.offset:x=f[E]*p;for(let g=0;g<p;g++)v[T++]=u[x++]}return new Gt(v,p,m)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new pn,n=this.index.array,i=this.attributes;for(const l in i){const f=i[l],u=e(f,n);t.setAttribute(l,u)}const s=this.morphAttributes;for(const l in s){const f=[],u=s[l];for(let p=0,m=u.length;p<m;p++){const v=u[p],x=e(v,n);f.push(x)}t.morphAttributes[l]=f}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let l=0,f=o.length;l<f;l++){const u=o[l];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const f=this.parameters;for(const u in f)f[u]!==void 0&&(e[u]=f[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const f in n){const u=n[f];e.data.attributes[f]=u.toJSON(e.data)}const i={};let s=!1;for(const f in this.morphAttributes){const u=this.morphAttributes[f],p=[];for(let m=0,v=u.length;m<v;m++){const x=u[m];p.push(x.toJSON(e.data))}p.length>0&&(i[f]=p,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const l=this.boundingSphere;return l!==null&&(e.data.boundingSphere={center:l.center.toArray(),radius:l.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const u in i){const p=i[u];this.setAttribute(u,p.clone(t))}const s=e.morphAttributes;for(const u in s){const p=[],m=s[u];for(let v=0,x=m.length;v<x;v++)p.push(m[v].clone(t));this.morphAttributes[u]=p}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,p=o.length;u<p;u++){const m=o[u];this.addGroup(m.start,m.count,m.materialIndex)}const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Uc=new mt,oi=new Ua,ia=new fi,Fc=new k,Rr=new k,Cr=new k,Lr=new k,bo=new k,ra=new k,sa=new ct,aa=new ct,oa=new ct,Oc=new k,Bc=new k,zc=new k,la=new k,ca=new k;class on extends Bt{constructor(e=new pn,t=new sr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const l=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const l=this.morphTargetInfluences;if(s&&l){ra.set(0,0,0);for(let f=0,u=s.length;f<u;f++){const p=l[f],m=s[f];p!==0&&(bo.fromBufferAttribute(m,e),o?ra.addScaledVector(bo,p):ra.addScaledVector(bo.sub(t),p))}t.add(ra)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ia.copy(n.boundingSphere),ia.applyMatrix4(s),oi.copy(e.ray).recast(e.near),!(ia.containsPoint(oi.origin)===!1&&(oi.intersectSphere(ia,Fc)===null||oi.origin.distanceToSquared(Fc)>(e.far-e.near)**2))&&(Uc.copy(s).invert(),oi.copy(e.ray).applyMatrix4(Uc),!(n.boundingBox!==null&&oi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t)))}_computeIntersections(e,t){let n;const i=this.geometry,s=this.material,o=i.index,l=i.attributes.position,f=i.attributes.uv,u=i.attributes.uv1,p=i.attributes.normal,m=i.groups,v=i.drawRange;if(o!==null)if(Array.isArray(s))for(let x=0,T=m.length;x<T;x++){const E=m[x],y=s[E.materialIndex],g=Math.max(E.start,v.start),C=Math.min(o.count,Math.min(E.start+E.count,v.start+v.count));for(let A=g,L=C;A<L;A+=3){const I=o.getX(A),h=o.getX(A+1),H=o.getX(A+2);n=ua(this,y,e,oi,f,u,p,I,h,H),n&&(n.faceIndex=Math.floor(A/3),n.face.materialIndex=E.materialIndex,t.push(n))}}else{const x=Math.max(0,v.start),T=Math.min(o.count,v.start+v.count);for(let E=x,y=T;E<y;E+=3){const g=o.getX(E),C=o.getX(E+1),A=o.getX(E+2);n=ua(this,s,e,oi,f,u,p,g,C,A),n&&(n.faceIndex=Math.floor(E/3),t.push(n))}}else if(l!==void 0)if(Array.isArray(s))for(let x=0,T=m.length;x<T;x++){const E=m[x],y=s[E.materialIndex],g=Math.max(E.start,v.start),C=Math.min(l.count,Math.min(E.start+E.count,v.start+v.count));for(let A=g,L=C;A<L;A+=3){const I=A,h=A+1,H=A+2;n=ua(this,y,e,oi,f,u,p,I,h,H),n&&(n.faceIndex=Math.floor(A/3),n.face.materialIndex=E.materialIndex,t.push(n))}}else{const x=Math.max(0,v.start),T=Math.min(l.count,v.start+v.count);for(let E=x,y=T;E<y;E+=3){const g=E,C=E+1,A=E+2;n=ua(this,s,e,oi,f,u,p,g,C,A),n&&(n.faceIndex=Math.floor(E/3),t.push(n))}}}}function tp(r,e,t,n,i,s,o,l){let f;if(e.side===vn?f=n.intersectTriangle(o,s,i,!0,l):f=n.intersectTriangle(i,s,o,e.side===Ci,l),f===null)return null;ca.copy(l),ca.applyMatrix4(r.matrixWorld);const u=t.ray.origin.distanceTo(ca);return u<t.near||u>t.far?null:{distance:u,point:ca.clone(),object:r}}function ua(r,e,t,n,i,s,o,l,f,u){r.getVertexPosition(l,Rr),r.getVertexPosition(f,Cr),r.getVertexPosition(u,Lr);const p=tp(r,e,t,n,Rr,Cr,Lr,la);if(p){i&&(sa.fromBufferAttribute(i,l),aa.fromBufferAttribute(i,f),oa.fromBufferAttribute(i,u),p.uv=ni.getInterpolation(la,Rr,Cr,Lr,sa,aa,oa,new ct)),s&&(sa.fromBufferAttribute(s,l),aa.fromBufferAttribute(s,f),oa.fromBufferAttribute(s,u),p.uv1=ni.getInterpolation(la,Rr,Cr,Lr,sa,aa,oa,new ct),p.uv2=p.uv1),o&&(Oc.fromBufferAttribute(o,l),Bc.fromBufferAttribute(o,f),zc.fromBufferAttribute(o,u),p.normal=ni.getInterpolation(la,Rr,Cr,Lr,Oc,Bc,zc,new k),p.normal.dot(n.direction)>0&&p.normal.multiplyScalar(-1));const m={a:l,b:f,c:u,normal:new k,materialIndex:0};ni.getNormal(Rr,Cr,Lr,m.normal),p.face=m}return p}class Us extends pn{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const l=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const f=[],u=[],p=[],m=[];let v=0,x=0;T("z","y","x",-1,-1,n,t,e,o,s,0),T("z","y","x",1,-1,n,t,-e,o,s,1),T("x","z","y",1,1,e,n,t,i,o,2),T("x","z","y",1,-1,e,n,-t,i,o,3),T("x","y","z",1,-1,e,t,n,i,s,4),T("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(f),this.setAttribute("position",new Qt(u,3)),this.setAttribute("normal",new Qt(p,3)),this.setAttribute("uv",new Qt(m,2));function T(E,y,g,C,A,L,I,h,H,Y,w){const U=L/H,fe=I/Y,Q=L/2,q=I/2,te=h/2,ee=H+1,ye=Y+1;let ue=0,de=0;const Me=new k;for(let ge=0;ge<ye;ge++){const Ne=ge*fe-q;for(let Ae=0;Ae<ee;Ae++){const ie=Ae*U-Q;Me[E]=ie*C,Me[y]=Ne*A,Me[g]=te,u.push(Me.x,Me.y,Me.z),Me[E]=0,Me[y]=0,Me[g]=h>0?1:-1,p.push(Me.x,Me.y,Me.z),m.push(Ae/H),m.push(1-ge/Y),ue+=1}}for(let ge=0;ge<Y;ge++)for(let Ne=0;Ne<H;Ne++){const Ae=v+Ne+ee*ge,ie=v+Ne+ee*(ge+1),pe=v+(Ne+1)+ee*(ge+1),Z=v+(Ne+1)+ee*ge;f.push(Ae,ie,Z),f.push(ie,pe,Z),de+=6}l.addGroup(x,de,w),x+=de,v+=ue}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Us(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function $r(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function gn(r){const e={};for(let t=0;t<r.length;t++){const n=$r(r[t]);for(const i in n)e[i]=n[i]}return e}function np(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function df(r){return r.getRenderTarget()===null?r.outputColorSpace:ci}const ll={clone:$r,merge:gn};var ip=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,rp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Fn extends jn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ip,this.fragmentShader=rp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=$r(e.uniforms),this.uniformsGroups=np(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class pf extends Bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mt,this.projectionMatrix=new mt,this.projectionMatrixInverse=new mt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class _n extends pf{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Yr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(As*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Yr*2*Math.atan(Math.tan(As*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(As*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const f=o.fullWidth,u=o.fullHeight;s+=o.offsetX*i/f,t-=o.offsetY*n/u,i*=o.width/f,n*=o.height/u}const l=this.filmOffset;l!==0&&(s+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Pr=-90,Dr=1;class sp extends Bt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new _n(Pr,Dr,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const s=new _n(Pr,Dr,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const o=new _n(Pr,Dr,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const l=new _n(Pr,Dr,e,t);l.layers=this.layers,l.up.set(0,0,1),l.lookAt(0,-1,0),this.add(l);const f=new _n(Pr,Dr,e,t);f.layers=this.layers,f.up.set(0,1,0),f.lookAt(0,0,1),this.add(f);const u=new _n(Pr,Dr,e,t);u.layers=this.layers,u.up.set(0,1,0),u.lookAt(0,0,-1),this.add(u)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,o,l,f,u]=this.children,p=e.getRenderTarget(),m=e.toneMapping,v=e.xr.enabled;e.toneMapping=Ri,e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,l),e.setRenderTarget(n,4),e.render(t,f),n.texture.generateMipmaps=x,e.setRenderTarget(n,5),e.render(t,u),e.setRenderTarget(p),e.toneMapping=m,e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class mf extends ln{constructor(e,t,n,i,s,o,l,f,u,p){e=e!==void 0?e:[],t=t!==void 0?t:Wr,super(e,t,n,i,s,o,l,f,u,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ap extends Li{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(Rs("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===cr?it:ur),this.texture=new mf(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:hn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Us(5,5,5),s=new Fn({name:"CubemapFromEquirect",uniforms:$r(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:vn,blending:Gi});s.uniforms.tEquirect.value=t;const o=new on(i,s),l=t.minFilter;return t.minFilter===fr&&(t.minFilter=hn),new sp(1,10,this).update(e,o),t.minFilter=l,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}const Ao=new k,op=new k,lp=new _t;class tr{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Ao.subVectors(n,t).cross(op.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ao),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||lp.getNormalMatrix(e),i=this.coplanarPoint(Ao).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const er=new fi,fa=new k;class cl{constructor(e=new tr,t=new tr,n=new tr,i=new tr,s=new tr,o=new tr){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(n),l[3].copy(i),l[4].copy(s),l[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],s=n[1],o=n[2],l=n[3],f=n[4],u=n[5],p=n[6],m=n[7],v=n[8],x=n[9],T=n[10],E=n[11],y=n[12],g=n[13],C=n[14],A=n[15];return t[0].setComponents(l-i,m-f,E-v,A-y).normalize(),t[1].setComponents(l+i,m+f,E+v,A+y).normalize(),t[2].setComponents(l+s,m+u,E+x,A+g).normalize(),t[3].setComponents(l-s,m-u,E-x,A-g).normalize(),t[4].setComponents(l-o,m-p,E-T,A-C).normalize(),t[5].setComponents(l+o,m+p,E+T,A+C).normalize(),this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),er.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),er.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(er)}intersectsSprite(e){return er.center.set(0,0,0),er.radius=.7071067811865476,er.applyMatrix4(e.matrixWorld),this.intersectsSphere(er)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(fa.x=i.normal.x>0?e.max.x:e.min.x,fa.y=i.normal.y>0?e.max.y:e.min.y,fa.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(fa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function gf(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function cp(r,e){const t=e.isWebGL2,n=new WeakMap;function i(u,p){const m=u.array,v=u.usage,x=r.createBuffer();r.bindBuffer(p,x),r.bufferData(p,m,v),u.onUploadCallback();let T;if(m instanceof Float32Array)T=r.FLOAT;else if(m instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(t)T=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else T=r.UNSIGNED_SHORT;else if(m instanceof Int16Array)T=r.SHORT;else if(m instanceof Uint32Array)T=r.UNSIGNED_INT;else if(m instanceof Int32Array)T=r.INT;else if(m instanceof Int8Array)T=r.BYTE;else if(m instanceof Uint8Array)T=r.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)T=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:x,type:T,bytesPerElement:m.BYTES_PER_ELEMENT,version:u.version}}function s(u,p,m){const v=p.array,x=p.updateRange;r.bindBuffer(m,u),x.count===-1?r.bufferSubData(m,0,v):(t?r.bufferSubData(m,x.offset*v.BYTES_PER_ELEMENT,v,x.offset,x.count):r.bufferSubData(m,x.offset*v.BYTES_PER_ELEMENT,v.subarray(x.offset,x.offset+x.count)),x.count=-1),p.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),n.get(u)}function l(u){u.isInterleavedBufferAttribute&&(u=u.data);const p=n.get(u);p&&(r.deleteBuffer(p.buffer),n.delete(u))}function f(u,p){if(u.isGLBufferAttribute){const v=n.get(u);(!v||v.version<u.version)&&n.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const m=n.get(u);m===void 0?n.set(u,i(u,p)):m.version<u.version&&(s(m.buffer,u,p),m.version=u.version)}return{get:o,remove:l,update:f}}class ul extends pn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,l=Math.floor(n),f=Math.floor(i),u=l+1,p=f+1,m=e/l,v=t/f,x=[],T=[],E=[],y=[];for(let g=0;g<p;g++){const C=g*v-o;for(let A=0;A<u;A++){const L=A*m-s;T.push(L,-C,0),E.push(0,0,1),y.push(A/l),y.push(1-g/f)}}for(let g=0;g<f;g++)for(let C=0;C<l;C++){const A=C+u*g,L=C+u*(g+1),I=C+1+u*(g+1),h=C+1+u*g;x.push(A,L,h),x.push(L,I,h)}this.setIndex(x),this.setAttribute("position",new Qt(T,3)),this.setAttribute("normal",new Qt(E,3)),this.setAttribute("uv",new Qt(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ul(e.width,e.height,e.widthSegments,e.heightSegments)}}var up=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hp=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,dp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,mp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gp="vec3 transformed = vec3( position );",_p=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,xp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,yp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Mp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Sp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Tp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ep=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ap=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,wp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Rp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Cp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Lp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Pp=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Dp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ip=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Np=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Up=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Fp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Op=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Bp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,zp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,kp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Hp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Gp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Vp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Wp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Xp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Yp=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Kp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$p=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Zp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Jp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Qp=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,em=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,tm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,nm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,im=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,rm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif`,sm=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,am=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,om=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,cm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,um=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,hm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,dm=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,pm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,gm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_m=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xm=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ym=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Mm=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Sm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Tm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#ifdef USE_NORMALMAP_TANGENTSPACE
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,Em=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,bm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Am=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Rm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Cm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Lm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Pm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Dm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Im=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Nm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Um=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Fm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Om=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Bm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,zm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,km=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Hm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Gm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Vm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Wm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Xm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,jm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ym=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Km=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$m=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Zm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Jm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Qm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,eg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,tg=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ng=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ig=`#ifdef USE_UV
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,rg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const sg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ag=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,og=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,cg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ug=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,fg=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,hg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,dg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,pg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,mg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,gg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,_g=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,vg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xg=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,yg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Eg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Ag=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,wg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Lg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Dg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ig=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Ng=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ug=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Fg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Og=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Bg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,dt={alphamap_fragment:up,alphamap_pars_fragment:fp,alphatest_fragment:hp,alphatest_pars_fragment:dp,aomap_fragment:pp,aomap_pars_fragment:mp,begin_vertex:gp,beginnormal_vertex:_p,bsdfs:vp,iridescence_fragment:xp,bumpmap_pars_fragment:yp,clipping_planes_fragment:Mp,clipping_planes_pars_fragment:Sp,clipping_planes_pars_vertex:Tp,clipping_planes_vertex:Ep,color_fragment:bp,color_pars_fragment:Ap,color_pars_vertex:wp,color_vertex:Rp,common:Cp,cube_uv_reflection_fragment:Lp,defaultnormal_vertex:Pp,displacementmap_pars_vertex:Dp,displacementmap_vertex:Ip,emissivemap_fragment:Np,emissivemap_pars_fragment:Up,encodings_fragment:Fp,encodings_pars_fragment:Op,envmap_fragment:Bp,envmap_common_pars_fragment:zp,envmap_pars_fragment:kp,envmap_pars_vertex:Hp,envmap_physical_pars_fragment:Qp,envmap_vertex:Gp,fog_vertex:Vp,fog_pars_vertex:Wp,fog_fragment:Xp,fog_pars_fragment:qp,gradientmap_pars_fragment:jp,lightmap_fragment:Yp,lightmap_pars_fragment:Kp,lights_lambert_fragment:$p,lights_lambert_pars_fragment:Zp,lights_pars_begin:Jp,lights_toon_fragment:em,lights_toon_pars_fragment:tm,lights_phong_fragment:nm,lights_phong_pars_fragment:im,lights_physical_fragment:rm,lights_physical_pars_fragment:sm,lights_fragment_begin:am,lights_fragment_maps:om,lights_fragment_end:lm,logdepthbuf_fragment:cm,logdepthbuf_pars_fragment:um,logdepthbuf_pars_vertex:fm,logdepthbuf_vertex:hm,map_fragment:dm,map_pars_fragment:pm,map_particle_fragment:mm,map_particle_pars_fragment:gm,metalnessmap_fragment:_m,metalnessmap_pars_fragment:vm,morphcolor_vertex:xm,morphnormal_vertex:ym,morphtarget_pars_vertex:Mm,morphtarget_vertex:Sm,normal_fragment_begin:Tm,normal_fragment_maps:Em,normal_pars_fragment:bm,normal_pars_vertex:Am,normal_vertex:wm,normalmap_pars_fragment:Rm,clearcoat_normal_fragment_begin:Cm,clearcoat_normal_fragment_maps:Lm,clearcoat_pars_fragment:Pm,iridescence_pars_fragment:Dm,output_fragment:Im,packing:Nm,premultiplied_alpha_fragment:Um,project_vertex:Fm,dithering_fragment:Om,dithering_pars_fragment:Bm,roughnessmap_fragment:zm,roughnessmap_pars_fragment:km,shadowmap_pars_fragment:Hm,shadowmap_pars_vertex:Gm,shadowmap_vertex:Vm,shadowmask_pars_fragment:Wm,skinbase_vertex:Xm,skinning_pars_vertex:qm,skinning_vertex:jm,skinnormal_vertex:Ym,specularmap_fragment:Km,specularmap_pars_fragment:$m,tonemapping_fragment:Zm,tonemapping_pars_fragment:Jm,transmission_fragment:Qm,transmission_pars_fragment:eg,uv_pars_fragment:tg,uv_pars_vertex:ng,uv_vertex:ig,worldpos_vertex:rg,background_vert:sg,background_frag:ag,backgroundCube_vert:og,backgroundCube_frag:lg,cube_vert:cg,cube_frag:ug,depth_vert:fg,depth_frag:hg,distanceRGBA_vert:dg,distanceRGBA_frag:pg,equirect_vert:mg,equirect_frag:gg,linedashed_vert:_g,linedashed_frag:vg,meshbasic_vert:xg,meshbasic_frag:yg,meshlambert_vert:Mg,meshlambert_frag:Sg,meshmatcap_vert:Tg,meshmatcap_frag:Eg,meshnormal_vert:bg,meshnormal_frag:Ag,meshphong_vert:wg,meshphong_frag:Rg,meshphysical_vert:Cg,meshphysical_frag:Lg,meshtoon_vert:Pg,meshtoon_frag:Dg,points_vert:Ig,points_frag:Ng,shadow_vert:Ug,shadow_frag:Fg,sprite_vert:Og,sprite_frag:Bg},Re={common:{diffuse:{value:new Qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new _t},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new _t}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new _t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new _t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new _t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new _t},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new _t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new _t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new _t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new _t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new _t}},sprite:{diffuse:{value:new Qe(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new _t},alphaMap:{value:null},alphaTest:{value:0}}},li={basic:{uniforms:gn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:dt.meshbasic_vert,fragmentShader:dt.meshbasic_frag},lambert:{uniforms:gn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new Qe(0)}}]),vertexShader:dt.meshlambert_vert,fragmentShader:dt.meshlambert_frag},phong:{uniforms:gn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new Qe(0)},specular:{value:new Qe(1118481)},shininess:{value:30}}]),vertexShader:dt.meshphong_vert,fragmentShader:dt.meshphong_frag},standard:{uniforms:gn([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new Qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag},toon:{uniforms:gn([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new Qe(0)}}]),vertexShader:dt.meshtoon_vert,fragmentShader:dt.meshtoon_frag},matcap:{uniforms:gn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:dt.meshmatcap_vert,fragmentShader:dt.meshmatcap_frag},points:{uniforms:gn([Re.points,Re.fog]),vertexShader:dt.points_vert,fragmentShader:dt.points_frag},dashed:{uniforms:gn([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:dt.linedashed_vert,fragmentShader:dt.linedashed_frag},depth:{uniforms:gn([Re.common,Re.displacementmap]),vertexShader:dt.depth_vert,fragmentShader:dt.depth_frag},normal:{uniforms:gn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:dt.meshnormal_vert,fragmentShader:dt.meshnormal_frag},sprite:{uniforms:gn([Re.sprite,Re.fog]),vertexShader:dt.sprite_vert,fragmentShader:dt.sprite_frag},background:{uniforms:{uvTransform:{value:new _t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:dt.background_vert,fragmentShader:dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:dt.backgroundCube_vert,fragmentShader:dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:dt.cube_vert,fragmentShader:dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:dt.equirect_vert,fragmentShader:dt.equirect_frag},distanceRGBA:{uniforms:gn([Re.common,Re.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:dt.distanceRGBA_vert,fragmentShader:dt.distanceRGBA_frag},shadow:{uniforms:gn([Re.lights,Re.fog,{color:{value:new Qe(0)},opacity:{value:1}}]),vertexShader:dt.shadow_vert,fragmentShader:dt.shadow_frag}};li.physical={uniforms:gn([li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new _t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new _t},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new _t},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new _t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new _t},sheen:{value:0},sheenColor:{value:new Qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new _t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new _t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new _t},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new _t},attenuationDistance:{value:0},attenuationColor:{value:new Qe(0)},specularColor:{value:new Qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new _t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new _t}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag};const ha={r:0,b:0,g:0};function zg(r,e,t,n,i,s,o){const l=new Qe(0);let f=s===!0?0:1,u,p,m=null,v=0,x=null;function T(y,g){let C=!1,A=g.isScene===!0?g.background:null;switch(A&&A.isTexture&&(A=(g.backgroundBlurriness>0?t:e).get(A)),A===null?E(l,f):A&&A.isColor&&(E(A,1),C=!0),r.xr.getEnvironmentBlendMode()){case"opaque":C=!0;break;case"additive":n.buffers.color.setClear(0,0,0,1,o),C=!0;break;case"alpha-blend":n.buffers.color.setClear(0,0,0,0,o),C=!0;break}(r.autoClear||C)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),A&&(A.isCubeTexture||A.mapping===Ia)?(p===void 0&&(p=new on(new Us(1,1,1),new Fn({name:"BackgroundCubeMaterial",uniforms:$r(li.backgroundCube.uniforms),vertexShader:li.backgroundCube.vertexShader,fragmentShader:li.backgroundCube.fragmentShader,side:vn,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(h,H,Y){this.matrixWorld.copyPosition(Y.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(p)),p.material.uniforms.envMap.value=A,p.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,p.material.toneMapped=A.colorSpace!==it,(m!==A||v!==A.version||x!==r.toneMapping)&&(p.material.needsUpdate=!0,m=A,v=A.version,x=r.toneMapping),p.layers.enableAll(),y.unshift(p,p.geometry,p.material,0,0,null)):A&&A.isTexture&&(u===void 0&&(u=new on(new ul(2,2),new Fn({name:"BackgroundMaterial",uniforms:$r(li.background.uniforms),vertexShader:li.background.vertexShader,fragmentShader:li.background.fragmentShader,side:Ci,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(u)),u.material.uniforms.t2D.value=A,u.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,u.material.toneMapped=A.colorSpace!==it,A.matrixAutoUpdate===!0&&A.updateMatrix(),u.material.uniforms.uvTransform.value.copy(A.matrix),(m!==A||v!==A.version||x!==r.toneMapping)&&(u.material.needsUpdate=!0,m=A,v=A.version,x=r.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null))}function E(y,g){y.getRGB(ha,df(r)),n.buffers.color.setClear(ha.r,ha.g,ha.b,g,o)}return{getClearColor:function(){return l},setClearColor:function(y,g=1){l.set(y),f=g,E(l,f)},getClearAlpha:function(){return f},setClearAlpha:function(y){f=y,E(l,f)},render:T}}function kg(r,e,t,n){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,l={},f=y(null);let u=f,p=!1;function m(te,ee,ye,ue,de){let Me=!1;if(o){const ge=E(ue,ye,ee);u!==ge&&(u=ge,x(u.object)),Me=g(te,ue,ye,de),Me&&C(te,ue,ye,de)}else{const ge=ee.wireframe===!0;(u.geometry!==ue.id||u.program!==ye.id||u.wireframe!==ge)&&(u.geometry=ue.id,u.program=ye.id,u.wireframe=ge,Me=!0)}de!==null&&t.update(de,r.ELEMENT_ARRAY_BUFFER),(Me||p)&&(p=!1,Y(te,ee,ye,ue),de!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(de).buffer))}function v(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function x(te){return n.isWebGL2?r.bindVertexArray(te):s.bindVertexArrayOES(te)}function T(te){return n.isWebGL2?r.deleteVertexArray(te):s.deleteVertexArrayOES(te)}function E(te,ee,ye){const ue=ye.wireframe===!0;let de=l[te.id];de===void 0&&(de={},l[te.id]=de);let Me=de[ee.id];Me===void 0&&(Me={},de[ee.id]=Me);let ge=Me[ue];return ge===void 0&&(ge=y(v()),Me[ue]=ge),ge}function y(te){const ee=[],ye=[],ue=[];for(let de=0;de<i;de++)ee[de]=0,ye[de]=0,ue[de]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:ee,enabledAttributes:ye,attributeDivisors:ue,object:te,attributes:{},index:null}}function g(te,ee,ye,ue){const de=u.attributes,Me=ee.attributes;let ge=0;const Ne=ye.getAttributes();for(const Ae in Ne)if(Ne[Ae].location>=0){const pe=de[Ae];let Z=Me[Ae];if(Z===void 0&&(Ae==="instanceMatrix"&&te.instanceMatrix&&(Z=te.instanceMatrix),Ae==="instanceColor"&&te.instanceColor&&(Z=te.instanceColor)),pe===void 0||pe.attribute!==Z||Z&&pe.data!==Z.data)return!0;ge++}return u.attributesNum!==ge||u.index!==ue}function C(te,ee,ye,ue){const de={},Me=ee.attributes;let ge=0;const Ne=ye.getAttributes();for(const Ae in Ne)if(Ne[Ae].location>=0){let pe=Me[Ae];pe===void 0&&(Ae==="instanceMatrix"&&te.instanceMatrix&&(pe=te.instanceMatrix),Ae==="instanceColor"&&te.instanceColor&&(pe=te.instanceColor));const Z={};Z.attribute=pe,pe&&pe.data&&(Z.data=pe.data),de[Ae]=Z,ge++}u.attributes=de,u.attributesNum=ge,u.index=ue}function A(){const te=u.newAttributes;for(let ee=0,ye=te.length;ee<ye;ee++)te[ee]=0}function L(te){I(te,0)}function I(te,ee){const ye=u.newAttributes,ue=u.enabledAttributes,de=u.attributeDivisors;ye[te]=1,ue[te]===0&&(r.enableVertexAttribArray(te),ue[te]=1),de[te]!==ee&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](te,ee),de[te]=ee)}function h(){const te=u.newAttributes,ee=u.enabledAttributes;for(let ye=0,ue=ee.length;ye<ue;ye++)ee[ye]!==te[ye]&&(r.disableVertexAttribArray(ye),ee[ye]=0)}function H(te,ee,ye,ue,de,Me){n.isWebGL2===!0&&(ye===r.INT||ye===r.UNSIGNED_INT)?r.vertexAttribIPointer(te,ee,ye,de,Me):r.vertexAttribPointer(te,ee,ye,ue,de,Me)}function Y(te,ee,ye,ue){if(n.isWebGL2===!1&&(te.isInstancedMesh||ue.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;A();const de=ue.attributes,Me=ye.getAttributes(),ge=ee.defaultAttributeValues;for(const Ne in Me){const Ae=Me[Ne];if(Ae.location>=0){let ie=de[Ne];if(ie===void 0&&(Ne==="instanceMatrix"&&te.instanceMatrix&&(ie=te.instanceMatrix),Ne==="instanceColor"&&te.instanceColor&&(ie=te.instanceColor)),ie!==void 0){const pe=ie.normalized,Z=ie.itemSize,me=t.get(ie);if(me===void 0)continue;const F=me.buffer,Ee=me.type,De=me.bytesPerElement;if(ie.isInterleavedBufferAttribute){const be=ie.data,qe=be.stride,Mt=ie.offset;if(be.isInstancedInterleavedBuffer){for(let Oe=0;Oe<Ae.locationSize;Oe++)I(Ae.location+Oe,be.meshPerAttribute);te.isInstancedMesh!==!0&&ue._maxInstanceCount===void 0&&(ue._maxInstanceCount=be.meshPerAttribute*be.count)}else for(let Oe=0;Oe<Ae.locationSize;Oe++)L(Ae.location+Oe);r.bindBuffer(r.ARRAY_BUFFER,F);for(let Oe=0;Oe<Ae.locationSize;Oe++)H(Ae.location+Oe,Z/Ae.locationSize,Ee,pe,qe*De,(Mt+Z/Ae.locationSize*Oe)*De)}else{if(ie.isInstancedBufferAttribute){for(let be=0;be<Ae.locationSize;be++)I(Ae.location+be,ie.meshPerAttribute);te.isInstancedMesh!==!0&&ue._maxInstanceCount===void 0&&(ue._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let be=0;be<Ae.locationSize;be++)L(Ae.location+be);r.bindBuffer(r.ARRAY_BUFFER,F);for(let be=0;be<Ae.locationSize;be++)H(Ae.location+be,Z/Ae.locationSize,Ee,pe,Z*De,Z/Ae.locationSize*be*De)}}else if(ge!==void 0){const pe=ge[Ne];if(pe!==void 0)switch(pe.length){case 2:r.vertexAttrib2fv(Ae.location,pe);break;case 3:r.vertexAttrib3fv(Ae.location,pe);break;case 4:r.vertexAttrib4fv(Ae.location,pe);break;default:r.vertexAttrib1fv(Ae.location,pe)}}}}h()}function w(){Q();for(const te in l){const ee=l[te];for(const ye in ee){const ue=ee[ye];for(const de in ue)T(ue[de].object),delete ue[de];delete ee[ye]}delete l[te]}}function U(te){if(l[te.id]===void 0)return;const ee=l[te.id];for(const ye in ee){const ue=ee[ye];for(const de in ue)T(ue[de].object),delete ue[de];delete ee[ye]}delete l[te.id]}function fe(te){for(const ee in l){const ye=l[ee];if(ye[te.id]===void 0)continue;const ue=ye[te.id];for(const de in ue)T(ue[de].object),delete ue[de];delete ye[te.id]}}function Q(){q(),p=!0,u!==f&&(u=f,x(u.object))}function q(){f.geometry=null,f.program=null,f.wireframe=!1}return{setup:m,reset:Q,resetDefaultState:q,dispose:w,releaseStatesOfGeometry:U,releaseStatesOfProgram:fe,initAttributes:A,enableAttribute:L,disableUnusedAttributes:h}}function Hg(r,e,t,n){const i=n.isWebGL2;let s;function o(u){s=u}function l(u,p){r.drawArrays(s,u,p),t.update(p,s,1)}function f(u,p,m){if(m===0)return;let v,x;if(i)v=r,x="drawArraysInstanced";else if(v=e.get("ANGLE_instanced_arrays"),x="drawArraysInstancedANGLE",v===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[x](s,u,p,m),t.update(p,s,m)}this.setMode=o,this.render=l,this.renderInstances=f}function Gg(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const H=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(H.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(H){if(H==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";H="mediump"}return H==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let l=t.precision!==void 0?t.precision:"highp";const f=s(l);f!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",f,"instead."),l=f);const u=o||e.has("WEBGL_draw_buffers"),p=t.logarithmicDepthBuffer===!0,m=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),v=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=r.getParameter(r.MAX_TEXTURE_SIZE),T=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),E=r.getParameter(r.MAX_VERTEX_ATTRIBS),y=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),g=r.getParameter(r.MAX_VARYING_VECTORS),C=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),A=v>0,L=o||e.has("OES_texture_float"),I=A&&L,h=o?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:i,getMaxPrecision:s,precision:l,logarithmicDepthBuffer:p,maxTextures:m,maxVertexTextures:v,maxTextureSize:x,maxCubemapSize:T,maxAttributes:E,maxVertexUniforms:y,maxVaryings:g,maxFragmentUniforms:C,vertexTextures:A,floatFragmentTextures:L,floatVertexTextures:I,maxSamples:h}}function Vg(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new tr,l=new _t,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(m,v){const x=m.length!==0||v||n!==0||i;return i=v,n=m.length,x},this.beginShadows=function(){s=!0,p(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(m,v){t=p(m,v,0)},this.setState=function(m,v,x){const T=m.clippingPlanes,E=m.clipIntersection,y=m.clipShadows,g=r.get(m);if(!i||T===null||T.length===0||s&&!y)s?p(null):u();else{const C=s?0:n,A=C*4;let L=g.clippingState||null;f.value=L,L=p(T,v,A,x);for(let I=0;I!==A;++I)L[I]=t[I];g.clippingState=L,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=C}};function u(){f.value!==t&&(f.value=t,f.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function p(m,v,x,T){const E=m!==null?m.length:0;let y=null;if(E!==0){if(y=f.value,T!==!0||y===null){const g=x+E*4,C=v.matrixWorldInverse;l.getNormalMatrix(C),(y===null||y.length<g)&&(y=new Float32Array(g));for(let A=0,L=x;A!==E;++A,L+=4)o.copy(m[A]).applyMatrix4(C,l),o.normal.toArray(y,L),y[L+3]=o.constant}f.value=y,f.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,y}}function Wg(r){let e=new WeakMap;function t(o,l){return l===Vo?o.mapping=Wr:l===Wo&&(o.mapping=Xr),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const l=o.mapping;if(l===Vo||l===Wo)if(e.has(o)){const f=e.get(o).texture;return t(f,o.mapping)}else{const f=o.image;if(f&&f.height>0){const u=new ap(f.height/2);return u.fromEquirectangularTexture(r,o),e.set(o,u),o.addEventListener("dispose",i),t(u.texture,o.mapping)}else return null}}return o}function i(o){const l=o.target;l.removeEventListener("dispose",i);const f=e.get(l);f!==void 0&&(e.delete(l),f.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Fa extends pf{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,l=i+t,f=i-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,l-=p*this.view.offsetY,f=l-p*this.view.height}this.projectionMatrix.makeOrthographic(s,o,l,f,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const zr=4,kc=[.125,.215,.35,.446,.526,.582],ir=20,wo=new Fa,Hc=new Qe;let Ro=null;const nr=(1+Math.sqrt(5))/2,Ir=1/nr,Gc=[new k(1,1,1),new k(-1,1,1),new k(1,1,-1),new k(-1,1,-1),new k(0,nr,Ir),new k(0,nr,-Ir),new k(Ir,0,nr),new k(-Ir,0,nr),new k(nr,Ir,0),new k(-nr,Ir,0)];class Vc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Ro=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ro),e.scissorTest=!1,da(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Wr||e.mapping===Xr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ro=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:hn,minFilter:hn,generateMipmaps:!1,type:Ls,format:Un,colorSpace:ci,depthBuffer:!1},i=Wc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wc(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Xg(s)),this._blurMaterial=qg(s,e,t)}return i}_compileMaterial(e){const t=new on(this._lodPlanes[0],e);this._renderer.compile(t,wo)}_sceneToCubeUV(e,t,n,i){const l=new _n(90,1,t,n),f=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],p=this._renderer,m=p.autoClear,v=p.toneMapping;p.getClearColor(Hc),p.toneMapping=Ri,p.autoClear=!1;const x=new sr({name:"PMREM.Background",side:vn,depthWrite:!1,depthTest:!1}),T=new on(new Us,x);let E=!1;const y=e.background;y?y.isColor&&(x.color.copy(y),e.background=null,E=!0):(x.color.copy(Hc),E=!0);for(let g=0;g<6;g++){const C=g%3;C===0?(l.up.set(0,f[g],0),l.lookAt(u[g],0,0)):C===1?(l.up.set(0,0,f[g]),l.lookAt(0,u[g],0)):(l.up.set(0,f[g],0),l.lookAt(0,0,u[g]));const A=this._cubeSize;da(i,C*A,g>2?A:0,A,A),p.setRenderTarget(i),E&&p.render(T,l),p.render(e,l)}T.geometry.dispose(),T.material.dispose(),p.toneMapping=v,p.autoClear=m,e.background=y}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Wr||e.mapping===Xr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=qc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xc());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new on(this._lodPlanes[0],s),l=s.uniforms;l.envMap.value=e;const f=this._cubeSize;da(t,0,0,3*f,2*f),n.setRenderTarget(t),n.render(o,wo)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Gc[(i-1)%Gc.length];this._blur(e,i-1,i,s,o)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,l){const f=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const p=3,m=new on(this._lodPlanes[i],u),v=u.uniforms,x=this._sizeLods[n]-1,T=isFinite(s)?Math.PI/(2*x):2*Math.PI/(2*ir-1),E=s/T,y=isFinite(s)?1+Math.floor(p*E):ir;y>ir&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${ir}`);const g=[];let C=0;for(let H=0;H<ir;++H){const Y=H/E,w=Math.exp(-Y*Y/2);g.push(w),H===0?C+=w:H<y&&(C+=2*w)}for(let H=0;H<g.length;H++)g[H]=g[H]/C;v.envMap.value=e.texture,v.samples.value=y,v.weights.value=g,v.latitudinal.value=o==="latitudinal",l&&(v.poleAxis.value=l);const{_lodMax:A}=this;v.dTheta.value=T,v.mipInt.value=A-n;const L=this._sizeLods[i],I=3*L*(i>A-zr?i-A+zr:0),h=4*(this._cubeSize-L);da(t,I,h,3*L,2*L),f.setRenderTarget(t),f.render(m,wo)}}function Xg(r){const e=[],t=[],n=[];let i=r;const s=r-zr+1+kc.length;for(let o=0;o<s;o++){const l=Math.pow(2,i);t.push(l);let f=1/l;o>r-zr?f=kc[o-r+zr-1]:o===0&&(f=0),n.push(f);const u=1/(l-2),p=-u,m=1+u,v=[p,p,m,p,m,m,p,p,m,m,p,m],x=6,T=6,E=3,y=2,g=1,C=new Float32Array(E*T*x),A=new Float32Array(y*T*x),L=new Float32Array(g*T*x);for(let h=0;h<x;h++){const H=h%3*2/3-1,Y=h>2?0:-1,w=[H,Y,0,H+2/3,Y,0,H+2/3,Y+1,0,H,Y,0,H+2/3,Y+1,0,H,Y+1,0];C.set(w,E*T*h),A.set(v,y*T*h);const U=[h,h,h,h,h,h];L.set(U,g*T*h)}const I=new pn;I.setAttribute("position",new Gt(C,E)),I.setAttribute("uv",new Gt(A,y)),I.setAttribute("faceIndex",new Gt(L,g)),e.push(I),i>zr&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Wc(r,e,t){const n=new Li(r,e,t);return n.texture.mapping=Ia,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function da(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function qg(r,e,t){const n=new Float32Array(ir),i=new k(0,1,0);return new Fn({name:"SphericalGaussianBlur",defines:{n:ir,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:fl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function Xc(){return new Fn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function qc(){return new Fn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function fl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function jg(r){let e=new WeakMap,t=null;function n(l){if(l&&l.isTexture){const f=l.mapping,u=f===Vo||f===Wo,p=f===Wr||f===Xr;if(u||p)if(l.isRenderTargetTexture&&l.needsPMREMUpdate===!0){l.needsPMREMUpdate=!1;let m=e.get(l);return t===null&&(t=new Vc(r)),m=u?t.fromEquirectangular(l,m):t.fromCubemap(l,m),e.set(l,m),m.texture}else{if(e.has(l))return e.get(l).texture;{const m=l.image;if(u&&m&&m.height>0||p&&m&&i(m)){t===null&&(t=new Vc(r));const v=u?t.fromEquirectangular(l):t.fromCubemap(l);return e.set(l,v),l.addEventListener("dispose",s),v.texture}else return null}}}return l}function i(l){let f=0;const u=6;for(let p=0;p<u;p++)l[p]!==void 0&&f++;return f===u}function s(l){const f=l.target;f.removeEventListener("dispose",s);const u=e.get(f);u!==void 0&&(e.delete(f),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Yg(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Kg(r,e,t,n){const i={},s=new WeakMap;function o(m){const v=m.target;v.index!==null&&e.remove(v.index);for(const T in v.attributes)e.remove(v.attributes[T]);v.removeEventListener("dispose",o),delete i[v.id];const x=s.get(v);x&&(e.remove(x),s.delete(v)),n.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,t.memory.geometries--}function l(m,v){return i[v.id]===!0||(v.addEventListener("dispose",o),i[v.id]=!0,t.memory.geometries++),v}function f(m){const v=m.attributes;for(const T in v)e.update(v[T],r.ARRAY_BUFFER);const x=m.morphAttributes;for(const T in x){const E=x[T];for(let y=0,g=E.length;y<g;y++)e.update(E[y],r.ARRAY_BUFFER)}}function u(m){const v=[],x=m.index,T=m.attributes.position;let E=0;if(x!==null){const C=x.array;E=x.version;for(let A=0,L=C.length;A<L;A+=3){const I=C[A+0],h=C[A+1],H=C[A+2];v.push(I,h,h,H,H,I)}}else{const C=T.array;E=T.version;for(let A=0,L=C.length/3-1;A<L;A+=3){const I=A+0,h=A+1,H=A+2;v.push(I,h,h,H,H,I)}}const y=new(af(v)?hf:ff)(v,1);y.version=E;const g=s.get(m);g&&e.remove(g),s.set(m,y)}function p(m){const v=s.get(m);if(v){const x=m.index;x!==null&&v.version<x.version&&u(m)}else u(m);return s.get(m)}return{get:l,update:f,getWireframeAttribute:p}}function $g(r,e,t,n){const i=n.isWebGL2;let s;function o(v){s=v}let l,f;function u(v){l=v.type,f=v.bytesPerElement}function p(v,x){r.drawElements(s,x,l,v*f),t.update(x,s,1)}function m(v,x,T){if(T===0)return;let E,y;if(i)E=r,y="drawElementsInstanced";else if(E=e.get("ANGLE_instanced_arrays"),y="drawElementsInstancedANGLE",E===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}E[y](s,x,l,v*f,T),t.update(x,s,T)}this.setMode=o,this.setIndex=u,this.render=p,this.renderInstances=m}function Zg(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,l){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=l*(s/3);break;case r.LINES:t.lines+=l*(s/2);break;case r.LINE_STRIP:t.lines+=l*(s-1);break;case r.LINE_LOOP:t.lines+=l*s;break;case r.POINTS:t.points+=l*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Jg(r,e){return r[0]-e[0]}function Qg(r,e){return Math.abs(e[1])-Math.abs(r[1])}function e_(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,o=new Dt,l=[];for(let u=0;u<8;u++)l[u]=[u,0];function f(u,p,m){const v=u.morphTargetInfluences;if(e.isWebGL2===!0){const T=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,E=T!==void 0?T.length:0;let y=s.get(p);if(y===void 0||y.count!==E){let ee=function(){q.dispose(),s.delete(p),p.removeEventListener("dispose",ee)};var x=ee;y!==void 0&&y.texture.dispose();const A=p.morphAttributes.position!==void 0,L=p.morphAttributes.normal!==void 0,I=p.morphAttributes.color!==void 0,h=p.morphAttributes.position||[],H=p.morphAttributes.normal||[],Y=p.morphAttributes.color||[];let w=0;A===!0&&(w=1),L===!0&&(w=2),I===!0&&(w=3);let U=p.attributes.position.count*w,fe=1;U>e.maxTextureSize&&(fe=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const Q=new Float32Array(U*fe*4*E),q=new cf(Q,U,fe,E);q.type=Hi,q.needsUpdate=!0;const te=w*4;for(let ye=0;ye<E;ye++){const ue=h[ye],de=H[ye],Me=Y[ye],ge=U*fe*4*ye;for(let Ne=0;Ne<ue.count;Ne++){const Ae=Ne*te;A===!0&&(o.fromBufferAttribute(ue,Ne),Q[ge+Ae+0]=o.x,Q[ge+Ae+1]=o.y,Q[ge+Ae+2]=o.z,Q[ge+Ae+3]=0),L===!0&&(o.fromBufferAttribute(de,Ne),Q[ge+Ae+4]=o.x,Q[ge+Ae+5]=o.y,Q[ge+Ae+6]=o.z,Q[ge+Ae+7]=0),I===!0&&(o.fromBufferAttribute(Me,Ne),Q[ge+Ae+8]=o.x,Q[ge+Ae+9]=o.y,Q[ge+Ae+10]=o.z,Q[ge+Ae+11]=Me.itemSize===4?o.w:1)}}y={count:E,texture:q,size:new ct(U,fe)},s.set(p,y),p.addEventListener("dispose",ee)}let g=0;for(let A=0;A<v.length;A++)g+=v[A];const C=p.morphTargetsRelative?1:1-g;m.getUniforms().setValue(r,"morphTargetBaseInfluence",C),m.getUniforms().setValue(r,"morphTargetInfluences",v),m.getUniforms().setValue(r,"morphTargetsTexture",y.texture,t),m.getUniforms().setValue(r,"morphTargetsTextureSize",y.size)}else{const T=v===void 0?0:v.length;let E=n[p.id];if(E===void 0||E.length!==T){E=[];for(let L=0;L<T;L++)E[L]=[L,0];n[p.id]=E}for(let L=0;L<T;L++){const I=E[L];I[0]=L,I[1]=v[L]}E.sort(Qg);for(let L=0;L<8;L++)L<T&&E[L][1]?(l[L][0]=E[L][0],l[L][1]=E[L][1]):(l[L][0]=Number.MAX_SAFE_INTEGER,l[L][1]=0);l.sort(Jg);const y=p.morphAttributes.position,g=p.morphAttributes.normal;let C=0;for(let L=0;L<8;L++){const I=l[L],h=I[0],H=I[1];h!==Number.MAX_SAFE_INTEGER&&H?(y&&p.getAttribute("morphTarget"+L)!==y[h]&&p.setAttribute("morphTarget"+L,y[h]),g&&p.getAttribute("morphNormal"+L)!==g[h]&&p.setAttribute("morphNormal"+L,g[h]),i[L]=H,C+=H):(y&&p.hasAttribute("morphTarget"+L)===!0&&p.deleteAttribute("morphTarget"+L),g&&p.hasAttribute("morphNormal"+L)===!0&&p.deleteAttribute("morphNormal"+L),i[L]=0)}const A=p.morphTargetsRelative?1:1-C;m.getUniforms().setValue(r,"morphTargetBaseInfluence",A),m.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:f}}function t_(r,e,t,n){let i=new WeakMap;function s(f){const u=n.render.frame,p=f.geometry,m=e.get(f,p);return i.get(m)!==u&&(e.update(m),i.set(m,u)),f.isInstancedMesh&&(f.hasEventListener("dispose",l)===!1&&f.addEventListener("dispose",l),t.update(f.instanceMatrix,r.ARRAY_BUFFER),f.instanceColor!==null&&t.update(f.instanceColor,r.ARRAY_BUFFER)),m}function o(){i=new WeakMap}function l(f){const u=f.target;u.removeEventListener("dispose",l),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}const _f=new ln,vf=new cf,xf=new Xd,yf=new mf,jc=[],Yc=[],Kc=new Float32Array(16),$c=new Float32Array(9),Zc=new Float32Array(4);function Qr(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=jc[i];if(s===void 0&&(s=new Float32Array(i),jc[i]=s),e!==0){n.toArray(s,0);for(let o=1,l=0;o!==e;++o)l+=t,r[o].toArray(s,l)}return s}function en(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function tn(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Oa(r,e){let t=Yc[e];t===void 0&&(t=new Int32Array(e),Yc[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function n_(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function i_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;r.uniform2fv(this.addr,e),tn(t,e)}}function r_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(en(t,e))return;r.uniform3fv(this.addr,e),tn(t,e)}}function s_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;r.uniform4fv(this.addr,e),tn(t,e)}}function a_(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(en(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),tn(t,e)}else{if(en(t,n))return;Zc.set(n),r.uniformMatrix2fv(this.addr,!1,Zc),tn(t,n)}}function o_(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(en(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),tn(t,e)}else{if(en(t,n))return;$c.set(n),r.uniformMatrix3fv(this.addr,!1,$c),tn(t,n)}}function l_(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(en(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),tn(t,e)}else{if(en(t,n))return;Kc.set(n),r.uniformMatrix4fv(this.addr,!1,Kc),tn(t,n)}}function c_(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function u_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;r.uniform2iv(this.addr,e),tn(t,e)}}function f_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;r.uniform3iv(this.addr,e),tn(t,e)}}function h_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;r.uniform4iv(this.addr,e),tn(t,e)}}function d_(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function p_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;r.uniform2uiv(this.addr,e),tn(t,e)}}function m_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;r.uniform3uiv(this.addr,e),tn(t,e)}}function g_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;r.uniform4uiv(this.addr,e),tn(t,e)}}function __(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||_f,i)}function v_(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||xf,i)}function x_(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||yf,i)}function y_(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||vf,i)}function M_(r){switch(r){case 5126:return n_;case 35664:return i_;case 35665:return r_;case 35666:return s_;case 35674:return a_;case 35675:return o_;case 35676:return l_;case 5124:case 35670:return c_;case 35667:case 35671:return u_;case 35668:case 35672:return f_;case 35669:case 35673:return h_;case 5125:return d_;case 36294:return p_;case 36295:return m_;case 36296:return g_;case 35678:case 36198:case 36298:case 36306:case 35682:return __;case 35679:case 36299:case 36307:return v_;case 35680:case 36300:case 36308:case 36293:return x_;case 36289:case 36303:case 36311:case 36292:return y_}}function S_(r,e){r.uniform1fv(this.addr,e)}function T_(r,e){const t=Qr(e,this.size,2);r.uniform2fv(this.addr,t)}function E_(r,e){const t=Qr(e,this.size,3);r.uniform3fv(this.addr,t)}function b_(r,e){const t=Qr(e,this.size,4);r.uniform4fv(this.addr,t)}function A_(r,e){const t=Qr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function w_(r,e){const t=Qr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function R_(r,e){const t=Qr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function C_(r,e){r.uniform1iv(this.addr,e)}function L_(r,e){r.uniform2iv(this.addr,e)}function P_(r,e){r.uniform3iv(this.addr,e)}function D_(r,e){r.uniform4iv(this.addr,e)}function I_(r,e){r.uniform1uiv(this.addr,e)}function N_(r,e){r.uniform2uiv(this.addr,e)}function U_(r,e){r.uniform3uiv(this.addr,e)}function F_(r,e){r.uniform4uiv(this.addr,e)}function O_(r,e,t){const n=this.cache,i=e.length,s=Oa(t,i);en(n,s)||(r.uniform1iv(this.addr,s),tn(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||_f,s[o])}function B_(r,e,t){const n=this.cache,i=e.length,s=Oa(t,i);en(n,s)||(r.uniform1iv(this.addr,s),tn(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||xf,s[o])}function z_(r,e,t){const n=this.cache,i=e.length,s=Oa(t,i);en(n,s)||(r.uniform1iv(this.addr,s),tn(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||yf,s[o])}function k_(r,e,t){const n=this.cache,i=e.length,s=Oa(t,i);en(n,s)||(r.uniform1iv(this.addr,s),tn(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||vf,s[o])}function H_(r){switch(r){case 5126:return S_;case 35664:return T_;case 35665:return E_;case 35666:return b_;case 35674:return A_;case 35675:return w_;case 35676:return R_;case 5124:case 35670:return C_;case 35667:case 35671:return L_;case 35668:case 35672:return P_;case 35669:case 35673:return D_;case 5125:return I_;case 36294:return N_;case 36295:return U_;case 36296:return F_;case 35678:case 36198:case 36298:case 36306:case 35682:return O_;case 35679:case 36299:case 36307:return B_;case 35680:case 36300:case 36308:case 36293:return z_;case 36289:case 36303:case 36311:case 36292:return k_}}class G_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=M_(t.type)}}class V_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=H_(t.type)}}class W_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const l=i[s];l.setValue(e,t[l.id],n)}}}const Co=/(\w+)(\])?(\[|\.)?/g;function Jc(r,e){r.seq.push(e),r.map[e.id]=e}function X_(r,e,t){const n=r.name,i=n.length;for(Co.lastIndex=0;;){const s=Co.exec(n),o=Co.lastIndex;let l=s[1];const f=s[2]==="]",u=s[3];if(f&&(l=l|0),u===void 0||u==="["&&o+2===i){Jc(t,u===void 0?new G_(l,r,e):new V_(l,r,e));break}else{let m=t.map[l];m===void 0&&(m=new W_(l),Jc(t,m)),t=m}}}class Aa{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);X_(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const l=t[s],f=n[l.id];f.needsUpdate!==!1&&l.setValue(e,f.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Qc(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}let q_=0;function j_(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const l=o+1;n.push(`${l===e?">":" "} ${l}: ${t[o]}`)}return n.join(`
`)}function Y_(r){switch(r){case ci:return["Linear","( value )"];case it:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),["Linear","( value )"]}}function eu(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+j_(r.getShaderSource(e),o)}else return i}function K_(r,e){const t=Y_(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function $_(r,e){let t;switch(e){case Jh:t="Linear";break;case Qh:t="Reinhard";break;case ed:t="OptimizedCineon";break;case td:t="ACESFilmic";break;case nd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Z_(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ts).join(`
`)}function J_(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Q_(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let l=1;s.type===r.FLOAT_MAT2&&(l=2),s.type===r.FLOAT_MAT3&&(l=3),s.type===r.FLOAT_MAT4&&(l=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:l}}return t}function Ts(r){return r!==""}function tu(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function nu(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ev=/^[ \t]*#include +<([\w\d./]+)>/gm;function $o(r){return r.replace(ev,tv)}function tv(r,e){const t=dt[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return $o(t)}const nv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function iu(r){return r.replace(nv,iv)}function iv(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function ru(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function rv(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Yu?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Lh?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Ti&&(e="SHADOWMAP_TYPE_VSM"),e}function sv(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Wr:case Xr:e="ENVMAP_TYPE_CUBE";break;case Ia:e="ENVMAP_TYPE_CUBE_UV";break}return e}function av(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Xr:e="ENVMAP_MODE_REFRACTION";break}return e}function ov(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Da:e="ENVMAP_BLENDING_MULTIPLY";break;case $h:e="ENVMAP_BLENDING_MIX";break;case Zh:e="ENVMAP_BLENDING_ADD";break}return e}function lv(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function cv(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,l=t.fragmentShader;const f=rv(t),u=sv(t),p=av(t),m=ov(t),v=lv(t),x=t.isWebGL2?"":Z_(t),T=J_(s),E=i.createProgram();let y,g,C=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=[T].filter(Ts).join(`
`),y.length>0&&(y+=`
`),g=[x,T].filter(Ts).join(`
`),g.length>0&&(g+=`
`)):(y=[ru(t),"#define SHADER_NAME "+t.shaderName,T,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ts).join(`
`),g=[x,ru(t),"#define SHADER_NAME "+t.shaderName,T,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+p:"",t.envMap?"#define "+m:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ri?"#define TONE_MAPPING":"",t.toneMapping!==Ri?dt.tonemapping_pars_fragment:"",t.toneMapping!==Ri?$_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",dt.encodings_pars_fragment,K_("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ts).join(`
`)),o=$o(o),o=tu(o,t),o=nu(o,t),l=$o(l),l=tu(l,t),l=nu(l,t),o=iu(o),l=iu(l),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,y=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,g=["#define varying in",t.glslVersion===Tc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Tc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const A=C+y+o,L=C+g+l,I=Qc(i,i.VERTEX_SHADER,A),h=Qc(i,i.FRAGMENT_SHADER,L);if(i.attachShader(E,I),i.attachShader(E,h),t.index0AttributeName!==void 0?i.bindAttribLocation(E,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(E,0,"position"),i.linkProgram(E),r.debug.checkShaderErrors){const w=i.getProgramInfoLog(E).trim(),U=i.getShaderInfoLog(I).trim(),fe=i.getShaderInfoLog(h).trim();let Q=!0,q=!0;if(i.getProgramParameter(E,i.LINK_STATUS)===!1)if(Q=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,E,I,h);else{const te=eu(i,I,"vertex"),ee=eu(i,h,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(E,i.VALIDATE_STATUS)+`

Program Info Log: `+w+`
`+te+`
`+ee)}else w!==""?console.warn("THREE.WebGLProgram: Program Info Log:",w):(U===""||fe==="")&&(q=!1);q&&(this.diagnostics={runnable:Q,programLog:w,vertexShader:{log:U,prefix:y},fragmentShader:{log:fe,prefix:g}})}i.deleteShader(I),i.deleteShader(h);let H;this.getUniforms=function(){return H===void 0&&(H=new Aa(i,E)),H};let Y;return this.getAttributes=function(){return Y===void 0&&(Y=Q_(i,E)),Y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(E),this.program=void 0},this.name=t.shaderName,this.id=q_++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=I,this.fragmentShader=h,this}let uv=0;class fv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new hv(e),t.set(e,n)),n}}class hv{constructor(e){this.id=uv++,this.code=e,this.usedTimes=0}}function dv(r,e,t,n,i,s,o){const l=new ol,f=new fv,u=[],p=i.isWebGL2,m=i.logarithmicDepthBuffer,v=i.vertexTextures;let x=i.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(w){return w===1?"uv1":w===2?"uv2":w===3?"uv3":"uv"}function y(w,U,fe,Q,q){const te=Q.fog,ee=q.geometry,ye=w.isMeshStandardMaterial?Q.environment:null,ue=(w.isMeshStandardMaterial?t:e).get(w.envMap||ye),de=ue&&ue.mapping===Ia?ue.image.height:null,Me=T[w.type];w.precision!==null&&(x=i.getMaxPrecision(w.precision),x!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",x,"instead."));const ge=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,Ne=ge!==void 0?ge.length:0;let Ae=0;ee.morphAttributes.position!==void 0&&(Ae=1),ee.morphAttributes.normal!==void 0&&(Ae=2),ee.morphAttributes.color!==void 0&&(Ae=3);let ie,pe,Z,me;if(Me){const bt=li[Me];ie=bt.vertexShader,pe=bt.fragmentShader}else ie=w.vertexShader,pe=w.fragmentShader,f.update(w),Z=f.getVertexShaderID(w),me=f.getFragmentShaderID(w);const F=r.getRenderTarget(),Ee=q.isInstancedMesh===!0,De=!!w.map,be=!!w.matcap,qe=!!ue,Mt=!!w.aoMap,Oe=!!w.lightMap,ot=!!w.bumpMap,Nt=!!w.normalMap,Ie=!!w.displacementMap,xt=!!w.emissiveMap,Vt=!!w.metalnessMap,St=!!w.roughnessMap,Ut=w.clearcoat>0,sn=w.iridescence>0,N=w.sheen>0,P=w.transmission>0,ne=Ut&&!!w.clearcoatMap,xe=Ut&&!!w.clearcoatNormalMap,Te=Ut&&!!w.clearcoatRoughnessMap,Pe=sn&&!!w.iridescenceMap,Ye=sn&&!!w.iridescenceThicknessMap,Fe=N&&!!w.sheenColorMap,ce=N&&!!w.sheenRoughnessMap,Ge=!!w.specularMap,ze=!!w.specularColorMap,We=!!w.specularIntensityMap,Ue=P&&!!w.transmissionMap,ke=P&&!!w.thicknessMap,et=!!w.gradientMap,st=!!w.alphaMap,It=w.alphaTest>0,V=!!w.extensions,ae=!!ee.attributes.uv1,Se=!!ee.attributes.uv2,Ce=!!ee.attributes.uv3;return{isWebGL2:p,shaderID:Me,shaderName:w.type,vertexShader:ie,fragmentShader:pe,defines:w.defines,customVertexShaderID:Z,customFragmentShaderID:me,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:x,instancing:Ee,instancingColor:Ee&&q.instanceColor!==null,supportsVertexTextures:v,outputColorSpace:F===null?r.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:ci,map:De,matcap:be,envMap:qe,envMapMode:qe&&ue.mapping,envMapCubeUVHeight:de,aoMap:Mt,lightMap:Oe,bumpMap:ot,normalMap:Nt,displacementMap:v&&Ie,emissiveMap:xt,normalMapObjectSpace:Nt&&w.normalMapType===Sd,normalMapTangentSpace:Nt&&w.normalMapType===Na,metalnessMap:Vt,roughnessMap:St,clearcoat:Ut,clearcoatMap:ne,clearcoatNormalMap:xe,clearcoatRoughnessMap:Te,iridescence:sn,iridescenceMap:Pe,iridescenceThicknessMap:Ye,sheen:N,sheenColorMap:Fe,sheenRoughnessMap:ce,specularMap:Ge,specularColorMap:ze,specularIntensityMap:We,transmission:P,transmissionMap:Ue,thicknessMap:ke,gradientMap:et,opaque:w.transparent===!1&&w.blending===kr,alphaMap:st,alphaTest:It,combine:w.combine,mapUv:De&&E(w.map.channel),aoMapUv:Mt&&E(w.aoMap.channel),lightMapUv:Oe&&E(w.lightMap.channel),bumpMapUv:ot&&E(w.bumpMap.channel),normalMapUv:Nt&&E(w.normalMap.channel),displacementMapUv:Ie&&E(w.displacementMap.channel),emissiveMapUv:xt&&E(w.emissiveMap.channel),metalnessMapUv:Vt&&E(w.metalnessMap.channel),roughnessMapUv:St&&E(w.roughnessMap.channel),clearcoatMapUv:ne&&E(w.clearcoatMap.channel),clearcoatNormalMapUv:xe&&E(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Te&&E(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Pe&&E(w.iridescenceMap.channel),iridescenceThicknessMapUv:Ye&&E(w.iridescenceThicknessMap.channel),sheenColorMapUv:Fe&&E(w.sheenColorMap.channel),sheenRoughnessMapUv:ce&&E(w.sheenRoughnessMap.channel),specularMapUv:Ge&&E(w.specularMap.channel),specularColorMapUv:ze&&E(w.specularColorMap.channel),specularIntensityMapUv:We&&E(w.specularIntensityMap.channel),transmissionMapUv:Ue&&E(w.transmissionMap.channel),thicknessMapUv:ke&&E(w.thicknessMap.channel),alphaMapUv:st&&E(w.alphaMap.channel),vertexTangents:Nt&&!!ee.attributes.tangent,vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,vertexUv1s:ae,vertexUv2s:Se,vertexUv3s:Ce,pointsUvs:q.isPoints===!0&&!!ee.attributes.uv&&(De||st),fog:!!te,useFog:w.fog===!0,fogExp2:te&&te.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:m,skinning:q.isSkinnedMesh===!0,morphTargets:ee.morphAttributes.position!==void 0,morphNormals:ee.morphAttributes.normal!==void 0,morphColors:ee.morphAttributes.color!==void 0,morphTargetsCount:Ne,morphTextureStride:Ae,numDirLights:U.directional.length,numPointLights:U.point.length,numSpotLights:U.spot.length,numSpotLightMaps:U.spotLightMap.length,numRectAreaLights:U.rectArea.length,numHemiLights:U.hemi.length,numDirLightShadows:U.directionalShadowMap.length,numPointLightShadows:U.pointShadowMap.length,numSpotLightShadows:U.spotShadowMap.length,numSpotLightShadowsWithMaps:U.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:r.shadowMap.enabled&&fe.length>0,shadowMapType:r.shadowMap.type,toneMapping:w.toneMapped?r.toneMapping:Ri,useLegacyLights:r.useLegacyLights,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Xn,flipSided:w.side===vn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionDerivatives:V&&w.extensions.derivatives===!0,extensionFragDepth:V&&w.extensions.fragDepth===!0,extensionDrawBuffers:V&&w.extensions.drawBuffers===!0,extensionShaderTextureLOD:V&&w.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:p||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:p||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:p||n.has("EXT_shader_texture_lod"),customProgramCacheKey:w.customProgramCacheKey()}}function g(w){const U=[];if(w.shaderID?U.push(w.shaderID):(U.push(w.customVertexShaderID),U.push(w.customFragmentShaderID)),w.defines!==void 0)for(const fe in w.defines)U.push(fe),U.push(w.defines[fe]);return w.isRawShaderMaterial===!1&&(C(U,w),A(U,w),U.push(r.outputColorSpace)),U.push(w.customProgramCacheKey),U.join()}function C(w,U){w.push(U.precision),w.push(U.outputColorSpace),w.push(U.envMapMode),w.push(U.envMapCubeUVHeight),w.push(U.mapUv),w.push(U.alphaMapUv),w.push(U.lightMapUv),w.push(U.aoMapUv),w.push(U.bumpMapUv),w.push(U.normalMapUv),w.push(U.displacementMapUv),w.push(U.emissiveMapUv),w.push(U.metalnessMapUv),w.push(U.roughnessMapUv),w.push(U.clearcoatMapUv),w.push(U.clearcoatNormalMapUv),w.push(U.clearcoatRoughnessMapUv),w.push(U.iridescenceMapUv),w.push(U.iridescenceThicknessMapUv),w.push(U.sheenColorMapUv),w.push(U.sheenRoughnessMapUv),w.push(U.specularMapUv),w.push(U.specularColorMapUv),w.push(U.specularIntensityMapUv),w.push(U.transmissionMapUv),w.push(U.thicknessMapUv),w.push(U.combine),w.push(U.fogExp2),w.push(U.sizeAttenuation),w.push(U.morphTargetsCount),w.push(U.morphAttributeCount),w.push(U.numDirLights),w.push(U.numPointLights),w.push(U.numSpotLights),w.push(U.numSpotLightMaps),w.push(U.numHemiLights),w.push(U.numRectAreaLights),w.push(U.numDirLightShadows),w.push(U.numPointLightShadows),w.push(U.numSpotLightShadows),w.push(U.numSpotLightShadowsWithMaps),w.push(U.shadowMapType),w.push(U.toneMapping),w.push(U.numClippingPlanes),w.push(U.numClipIntersection),w.push(U.depthPacking)}function A(w,U){l.disableAll(),U.isWebGL2&&l.enable(0),U.supportsVertexTextures&&l.enable(1),U.instancing&&l.enable(2),U.instancingColor&&l.enable(3),U.matcap&&l.enable(4),U.envMap&&l.enable(5),U.normalMapObjectSpace&&l.enable(6),U.normalMapTangentSpace&&l.enable(7),U.clearcoat&&l.enable(8),U.iridescence&&l.enable(9),U.alphaTest&&l.enable(10),U.vertexColors&&l.enable(11),U.vertexAlphas&&l.enable(12),U.vertexUv1s&&l.enable(13),U.vertexUv2s&&l.enable(14),U.vertexUv3s&&l.enable(15),U.vertexTangents&&l.enable(16),w.push(l.mask),l.disableAll(),U.fog&&l.enable(0),U.useFog&&l.enable(1),U.flatShading&&l.enable(2),U.logarithmicDepthBuffer&&l.enable(3),U.skinning&&l.enable(4),U.morphTargets&&l.enable(5),U.morphNormals&&l.enable(6),U.morphColors&&l.enable(7),U.premultipliedAlpha&&l.enable(8),U.shadowMapEnabled&&l.enable(9),U.useLegacyLights&&l.enable(10),U.doubleSided&&l.enable(11),U.flipSided&&l.enable(12),U.useDepthPacking&&l.enable(13),U.dithering&&l.enable(14),U.transmission&&l.enable(15),U.sheen&&l.enable(16),U.opaque&&l.enable(17),U.pointsUvs&&l.enable(18),w.push(l.mask)}function L(w){const U=T[w.type];let fe;if(U){const Q=li[U];fe=ll.clone(Q.uniforms)}else fe=w.uniforms;return fe}function I(w,U){let fe;for(let Q=0,q=u.length;Q<q;Q++){const te=u[Q];if(te.cacheKey===U){fe=te,++fe.usedTimes;break}}return fe===void 0&&(fe=new cv(r,U,w,s),u.push(fe)),fe}function h(w){if(--w.usedTimes===0){const U=u.indexOf(w);u[U]=u[u.length-1],u.pop(),w.destroy()}}function H(w){f.remove(w)}function Y(){f.dispose()}return{getParameters:y,getProgramCacheKey:g,getUniforms:L,acquireProgram:I,releaseProgram:h,releaseShaderCache:H,programs:u,dispose:Y}}function pv(){let r=new WeakMap;function e(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function t(s){r.delete(s)}function n(s,o,l){r.get(s)[o]=l}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function mv(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function su(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function au(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(m,v,x,T,E,y){let g=r[e];return g===void 0?(g={id:m.id,object:m,geometry:v,material:x,groupOrder:T,renderOrder:m.renderOrder,z:E,group:y},r[e]=g):(g.id=m.id,g.object=m,g.geometry=v,g.material=x,g.groupOrder=T,g.renderOrder=m.renderOrder,g.z=E,g.group=y),e++,g}function l(m,v,x,T,E,y){const g=o(m,v,x,T,E,y);x.transmission>0?n.push(g):x.transparent===!0?i.push(g):t.push(g)}function f(m,v,x,T,E,y){const g=o(m,v,x,T,E,y);x.transmission>0?n.unshift(g):x.transparent===!0?i.unshift(g):t.unshift(g)}function u(m,v){t.length>1&&t.sort(m||mv),n.length>1&&n.sort(v||su),i.length>1&&i.sort(v||su)}function p(){for(let m=e,v=r.length;m<v;m++){const x=r[m];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:l,unshift:f,finish:p,sort:u}}function gv(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new au,r.set(n,[o])):i>=s.length?(o=new au,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function _v(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new k,color:new Qe};break;case"SpotLight":t={position:new k,direction:new k,color:new Qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new Qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new Qe,groundColor:new Qe};break;case"RectAreaLight":t={color:new Qe,position:new k,halfWidth:new k,halfHeight:new k};break}return r[e.id]=t,t}}}function vv(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let xv=0;function yv(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Mv(r,e){const t=new _v,n=vv(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let p=0;p<9;p++)i.probe.push(new k);const s=new k,o=new mt,l=new mt;function f(p,m){let v=0,x=0,T=0;for(let fe=0;fe<9;fe++)i.probe[fe].set(0,0,0);let E=0,y=0,g=0,C=0,A=0,L=0,I=0,h=0,H=0,Y=0;p.sort(yv);const w=m===!0?Math.PI:1;for(let fe=0,Q=p.length;fe<Q;fe++){const q=p[fe],te=q.color,ee=q.intensity,ye=q.distance,ue=q.shadow&&q.shadow.map?q.shadow.map.texture:null;if(q.isAmbientLight)v+=te.r*ee*w,x+=te.g*ee*w,T+=te.b*ee*w;else if(q.isLightProbe)for(let de=0;de<9;de++)i.probe[de].addScaledVector(q.sh.coefficients[de],ee);else if(q.isDirectionalLight){const de=t.get(q);if(de.color.copy(q.color).multiplyScalar(q.intensity*w),q.castShadow){const Me=q.shadow,ge=n.get(q);ge.shadowBias=Me.bias,ge.shadowNormalBias=Me.normalBias,ge.shadowRadius=Me.radius,ge.shadowMapSize=Me.mapSize,i.directionalShadow[E]=ge,i.directionalShadowMap[E]=ue,i.directionalShadowMatrix[E]=q.shadow.matrix,L++}i.directional[E]=de,E++}else if(q.isSpotLight){const de=t.get(q);de.position.setFromMatrixPosition(q.matrixWorld),de.color.copy(te).multiplyScalar(ee*w),de.distance=ye,de.coneCos=Math.cos(q.angle),de.penumbraCos=Math.cos(q.angle*(1-q.penumbra)),de.decay=q.decay,i.spot[g]=de;const Me=q.shadow;if(q.map&&(i.spotLightMap[H]=q.map,H++,Me.updateMatrices(q),q.castShadow&&Y++),i.spotLightMatrix[g]=Me.matrix,q.castShadow){const ge=n.get(q);ge.shadowBias=Me.bias,ge.shadowNormalBias=Me.normalBias,ge.shadowRadius=Me.radius,ge.shadowMapSize=Me.mapSize,i.spotShadow[g]=ge,i.spotShadowMap[g]=ue,h++}g++}else if(q.isRectAreaLight){const de=t.get(q);de.color.copy(te).multiplyScalar(ee),de.halfWidth.set(q.width*.5,0,0),de.halfHeight.set(0,q.height*.5,0),i.rectArea[C]=de,C++}else if(q.isPointLight){const de=t.get(q);if(de.color.copy(q.color).multiplyScalar(q.intensity*w),de.distance=q.distance,de.decay=q.decay,q.castShadow){const Me=q.shadow,ge=n.get(q);ge.shadowBias=Me.bias,ge.shadowNormalBias=Me.normalBias,ge.shadowRadius=Me.radius,ge.shadowMapSize=Me.mapSize,ge.shadowCameraNear=Me.camera.near,ge.shadowCameraFar=Me.camera.far,i.pointShadow[y]=ge,i.pointShadowMap[y]=ue,i.pointShadowMatrix[y]=q.shadow.matrix,I++}i.point[y]=de,y++}else if(q.isHemisphereLight){const de=t.get(q);de.skyColor.copy(q.color).multiplyScalar(ee*w),de.groundColor.copy(q.groundColor).multiplyScalar(ee*w),i.hemi[A]=de,A++}}C>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Re.LTC_FLOAT_1,i.rectAreaLTC2=Re.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=Re.LTC_HALF_1,i.rectAreaLTC2=Re.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=v,i.ambient[1]=x,i.ambient[2]=T;const U=i.hash;(U.directionalLength!==E||U.pointLength!==y||U.spotLength!==g||U.rectAreaLength!==C||U.hemiLength!==A||U.numDirectionalShadows!==L||U.numPointShadows!==I||U.numSpotShadows!==h||U.numSpotMaps!==H)&&(i.directional.length=E,i.spot.length=g,i.rectArea.length=C,i.point.length=y,i.hemi.length=A,i.directionalShadow.length=L,i.directionalShadowMap.length=L,i.pointShadow.length=I,i.pointShadowMap.length=I,i.spotShadow.length=h,i.spotShadowMap.length=h,i.directionalShadowMatrix.length=L,i.pointShadowMatrix.length=I,i.spotLightMatrix.length=h+H-Y,i.spotLightMap.length=H,i.numSpotLightShadowsWithMaps=Y,U.directionalLength=E,U.pointLength=y,U.spotLength=g,U.rectAreaLength=C,U.hemiLength=A,U.numDirectionalShadows=L,U.numPointShadows=I,U.numSpotShadows=h,U.numSpotMaps=H,i.version=xv++)}function u(p,m){let v=0,x=0,T=0,E=0,y=0;const g=m.matrixWorldInverse;for(let C=0,A=p.length;C<A;C++){const L=p[C];if(L.isDirectionalLight){const I=i.directional[v];I.direction.setFromMatrixPosition(L.matrixWorld),s.setFromMatrixPosition(L.target.matrixWorld),I.direction.sub(s),I.direction.transformDirection(g),v++}else if(L.isSpotLight){const I=i.spot[T];I.position.setFromMatrixPosition(L.matrixWorld),I.position.applyMatrix4(g),I.direction.setFromMatrixPosition(L.matrixWorld),s.setFromMatrixPosition(L.target.matrixWorld),I.direction.sub(s),I.direction.transformDirection(g),T++}else if(L.isRectAreaLight){const I=i.rectArea[E];I.position.setFromMatrixPosition(L.matrixWorld),I.position.applyMatrix4(g),l.identity(),o.copy(L.matrixWorld),o.premultiply(g),l.extractRotation(o),I.halfWidth.set(L.width*.5,0,0),I.halfHeight.set(0,L.height*.5,0),I.halfWidth.applyMatrix4(l),I.halfHeight.applyMatrix4(l),E++}else if(L.isPointLight){const I=i.point[x];I.position.setFromMatrixPosition(L.matrixWorld),I.position.applyMatrix4(g),x++}else if(L.isHemisphereLight){const I=i.hemi[y];I.direction.setFromMatrixPosition(L.matrixWorld),I.direction.transformDirection(g),y++}}}return{setup:f,setupView:u,state:i}}function ou(r,e){const t=new Mv(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function o(m){n.push(m)}function l(m){i.push(m)}function f(m){t.setup(n,m)}function u(m){t.setupView(n,m)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:f,setupLightsView:u,pushLight:o,pushShadow:l}}function Sv(r,e){let t=new WeakMap;function n(s,o=0){const l=t.get(s);let f;return l===void 0?(f=new ou(r,e),t.set(s,[f])):o>=l.length?(f=new ou(r,e),l.push(f)):f=l[o],f}function i(){t=new WeakMap}return{get:n,dispose:i}}class Tv extends jn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=yd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ev extends jn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const bv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Av=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function wv(r,e,t){let n=new cl;const i=new ct,s=new ct,o=new Dt,l=new Tv({depthPacking:Md}),f=new Ev,u={},p=t.maxTextureSize,m={[Ci]:vn,[vn]:Ci,[Xn]:Xn},v=new Fn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:bv,fragmentShader:Av}),x=v.clone();x.defines.HORIZONTAL_PASS=1;const T=new pn;T.setAttribute("position",new Gt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new on(T,v),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yu;let g=this.type;this.render=function(I,h,H){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||I.length===0)return;const Y=r.getRenderTarget(),w=r.getActiveCubeFace(),U=r.getActiveMipmapLevel(),fe=r.state;fe.setBlending(Gi),fe.buffers.color.setClear(1,1,1,1),fe.buffers.depth.setTest(!0),fe.setScissorTest(!1);const Q=g!==Ti&&this.type===Ti,q=g===Ti&&this.type!==Ti;for(let te=0,ee=I.length;te<ee;te++){const ye=I[te],ue=ye.shadow;if(ue===void 0){console.warn("THREE.WebGLShadowMap:",ye,"has no shadow.");continue}if(ue.autoUpdate===!1&&ue.needsUpdate===!1)continue;i.copy(ue.mapSize);const de=ue.getFrameExtents();if(i.multiply(de),s.copy(ue.mapSize),(i.x>p||i.y>p)&&(i.x>p&&(s.x=Math.floor(p/de.x),i.x=s.x*de.x,ue.mapSize.x=s.x),i.y>p&&(s.y=Math.floor(p/de.y),i.y=s.y*de.y,ue.mapSize.y=s.y)),ue.map===null||Q===!0||q===!0){const ge=this.type!==Ti?{minFilter:Jt,magFilter:Jt}:{};ue.map!==null&&ue.map.dispose(),ue.map=new Li(i.x,i.y,ge),ue.map.texture.name=ye.name+".shadowMap",ue.camera.updateProjectionMatrix()}r.setRenderTarget(ue.map),r.clear();const Me=ue.getViewportCount();for(let ge=0;ge<Me;ge++){const Ne=ue.getViewport(ge);o.set(s.x*Ne.x,s.y*Ne.y,s.x*Ne.z,s.y*Ne.w),fe.viewport(o),ue.updateMatrices(ye,ge),n=ue.getFrustum(),L(h,H,ue.camera,ye,this.type)}ue.isPointLightShadow!==!0&&this.type===Ti&&C(ue,H),ue.needsUpdate=!1}g=this.type,y.needsUpdate=!1,r.setRenderTarget(Y,w,U)};function C(I,h){const H=e.update(E);v.defines.VSM_SAMPLES!==I.blurSamples&&(v.defines.VSM_SAMPLES=I.blurSamples,x.defines.VSM_SAMPLES=I.blurSamples,v.needsUpdate=!0,x.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Li(i.x,i.y)),v.uniforms.shadow_pass.value=I.map.texture,v.uniforms.resolution.value=I.mapSize,v.uniforms.radius.value=I.radius,r.setRenderTarget(I.mapPass),r.clear(),r.renderBufferDirect(h,null,H,v,E,null),x.uniforms.shadow_pass.value=I.mapPass.texture,x.uniforms.resolution.value=I.mapSize,x.uniforms.radius.value=I.radius,r.setRenderTarget(I.map),r.clear(),r.renderBufferDirect(h,null,H,x,E,null)}function A(I,h,H,Y){let w=null;const U=H.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(U!==void 0)w=U;else if(w=H.isPointLight===!0?f:l,r.localClippingEnabled&&h.clipShadows===!0&&Array.isArray(h.clippingPlanes)&&h.clippingPlanes.length!==0||h.displacementMap&&h.displacementScale!==0||h.alphaMap&&h.alphaTest>0||h.map&&h.alphaTest>0){const fe=w.uuid,Q=h.uuid;let q=u[fe];q===void 0&&(q={},u[fe]=q);let te=q[Q];te===void 0&&(te=w.clone(),q[Q]=te),w=te}if(w.visible=h.visible,w.wireframe=h.wireframe,Y===Ti?w.side=h.shadowSide!==null?h.shadowSide:h.side:w.side=h.shadowSide!==null?h.shadowSide:m[h.side],w.alphaMap=h.alphaMap,w.alphaTest=h.alphaTest,w.map=h.map,w.clipShadows=h.clipShadows,w.clippingPlanes=h.clippingPlanes,w.clipIntersection=h.clipIntersection,w.displacementMap=h.displacementMap,w.displacementScale=h.displacementScale,w.displacementBias=h.displacementBias,w.wireframeLinewidth=h.wireframeLinewidth,w.linewidth=h.linewidth,H.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const fe=r.properties.get(w);fe.light=H}return w}function L(I,h,H,Y,w){if(I.visible===!1)return;if(I.layers.test(h.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&w===Ti)&&(!I.frustumCulled||n.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,I.matrixWorld);const Q=e.update(I),q=I.material;if(Array.isArray(q)){const te=Q.groups;for(let ee=0,ye=te.length;ee<ye;ee++){const ue=te[ee],de=q[ue.materialIndex];if(de&&de.visible){const Me=A(I,de,Y,w);r.renderBufferDirect(H,null,Q,Me,I,ue)}}}else if(q.visible){const te=A(I,q,Y,w);r.renderBufferDirect(H,null,Q,te,I,null)}}const fe=I.children;for(let Q=0,q=fe.length;Q<q;Q++)L(fe[Q],h,H,Y,w)}}function Rv(r,e,t){const n=t.isWebGL2;function i(){let V=!1;const ae=new Dt;let Se=null;const Ce=new Dt(0,0,0,0);return{setMask:function(Be){Se!==Be&&!V&&(r.colorMask(Be,Be,Be,Be),Se=Be)},setLocked:function(Be){V=Be},setClear:function(Be,bt,At,Xt,wn){wn===!0&&(Be*=Xt,bt*=Xt,At*=Xt),ae.set(Be,bt,At,Xt),Ce.equals(ae)===!1&&(r.clearColor(Be,bt,At,Xt),Ce.copy(ae))},reset:function(){V=!1,Se=null,Ce.set(-1,0,0,0)}}}function s(){let V=!1,ae=null,Se=null,Ce=null;return{setTest:function(Be){Be?F(r.DEPTH_TEST):Ee(r.DEPTH_TEST)},setMask:function(Be){ae!==Be&&!V&&(r.depthMask(Be),ae=Be)},setFunc:function(Be){if(Se!==Be){switch(Be){case Vh:r.depthFunc(r.NEVER);break;case Wh:r.depthFunc(r.ALWAYS);break;case Xh:r.depthFunc(r.LESS);break;case Go:r.depthFunc(r.LEQUAL);break;case qh:r.depthFunc(r.EQUAL);break;case jh:r.depthFunc(r.GEQUAL);break;case Yh:r.depthFunc(r.GREATER);break;case Kh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Se=Be}},setLocked:function(Be){V=Be},setClear:function(Be){Ce!==Be&&(r.clearDepth(Be),Ce=Be)},reset:function(){V=!1,ae=null,Se=null,Ce=null}}}function o(){let V=!1,ae=null,Se=null,Ce=null,Be=null,bt=null,At=null,Xt=null,wn=null;return{setTest:function(zt){V||(zt?F(r.STENCIL_TEST):Ee(r.STENCIL_TEST))},setMask:function(zt){ae!==zt&&!V&&(r.stencilMask(zt),ae=zt)},setFunc:function(zt,xn,On){(Se!==zt||Ce!==xn||Be!==On)&&(r.stencilFunc(zt,xn,On),Se=zt,Ce=xn,Be=On)},setOp:function(zt,xn,On){(bt!==zt||At!==xn||Xt!==On)&&(r.stencilOp(zt,xn,On),bt=zt,At=xn,Xt=On)},setLocked:function(zt){V=zt},setClear:function(zt){wn!==zt&&(r.clearStencil(zt),wn=zt)},reset:function(){V=!1,ae=null,Se=null,Ce=null,Be=null,bt=null,At=null,Xt=null,wn=null}}}const l=new i,f=new s,u=new o,p=new WeakMap,m=new WeakMap;let v={},x={},T=new WeakMap,E=[],y=null,g=!1,C=null,A=null,L=null,I=null,h=null,H=null,Y=null,w=!1,U=null,fe=null,Q=null,q=null,te=null;const ee=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ye=!1,ue=0;const de=r.getParameter(r.VERSION);de.indexOf("WebGL")!==-1?(ue=parseFloat(/^WebGL (\d)/.exec(de)[1]),ye=ue>=1):de.indexOf("OpenGL ES")!==-1&&(ue=parseFloat(/^OpenGL ES (\d)/.exec(de)[1]),ye=ue>=2);let Me=null,ge={};const Ne=r.getParameter(r.SCISSOR_BOX),Ae=r.getParameter(r.VIEWPORT),ie=new Dt().fromArray(Ne),pe=new Dt().fromArray(Ae);function Z(V,ae,Se,Ce){const Be=new Uint8Array(4),bt=r.createTexture();r.bindTexture(V,bt),r.texParameteri(V,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(V,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let At=0;At<Se;At++)n&&(V===r.TEXTURE_3D||V===r.TEXTURE_2D_ARRAY)?r.texImage3D(ae,0,r.RGBA,1,1,Ce,0,r.RGBA,r.UNSIGNED_BYTE,Be):r.texImage2D(ae+At,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Be);return bt}const me={};me[r.TEXTURE_2D]=Z(r.TEXTURE_2D,r.TEXTURE_2D,1),me[r.TEXTURE_CUBE_MAP]=Z(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(me[r.TEXTURE_2D_ARRAY]=Z(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),me[r.TEXTURE_3D]=Z(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),l.setClear(0,0,0,1),f.setClear(1),u.setClear(0),F(r.DEPTH_TEST),f.setFunc(Go),Ie(!1),xt(Xl),F(r.CULL_FACE),ot(Gi);function F(V){v[V]!==!0&&(r.enable(V),v[V]=!0)}function Ee(V){v[V]!==!1&&(r.disable(V),v[V]=!1)}function De(V,ae){return x[V]!==ae?(r.bindFramebuffer(V,ae),x[V]=ae,n&&(V===r.DRAW_FRAMEBUFFER&&(x[r.FRAMEBUFFER]=ae),V===r.FRAMEBUFFER&&(x[r.DRAW_FRAMEBUFFER]=ae)),!0):!1}function be(V,ae){let Se=E,Ce=!1;if(V)if(Se=T.get(ae),Se===void 0&&(Se=[],T.set(ae,Se)),V.isWebGLMultipleRenderTargets){const Be=V.texture;if(Se.length!==Be.length||Se[0]!==r.COLOR_ATTACHMENT0){for(let bt=0,At=Be.length;bt<At;bt++)Se[bt]=r.COLOR_ATTACHMENT0+bt;Se.length=Be.length,Ce=!0}}else Se[0]!==r.COLOR_ATTACHMENT0&&(Se[0]=r.COLOR_ATTACHMENT0,Ce=!0);else Se[0]!==r.BACK&&(Se[0]=r.BACK,Ce=!0);Ce&&(t.isWebGL2?r.drawBuffers(Se):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Se))}function qe(V){return y!==V?(r.useProgram(V),y=V,!0):!1}const Mt={[Br]:r.FUNC_ADD,[Dh]:r.FUNC_SUBTRACT,[Ih]:r.FUNC_REVERSE_SUBTRACT};if(n)Mt[Kl]=r.MIN,Mt[$l]=r.MAX;else{const V=e.get("EXT_blend_minmax");V!==null&&(Mt[Kl]=V.MIN_EXT,Mt[$l]=V.MAX_EXT)}const Oe={[Nh]:r.ZERO,[Uh]:r.ONE,[Fh]:r.SRC_COLOR,[Ku]:r.SRC_ALPHA,[Gh]:r.SRC_ALPHA_SATURATE,[kh]:r.DST_COLOR,[Bh]:r.DST_ALPHA,[Oh]:r.ONE_MINUS_SRC_COLOR,[$u]:r.ONE_MINUS_SRC_ALPHA,[Hh]:r.ONE_MINUS_DST_COLOR,[zh]:r.ONE_MINUS_DST_ALPHA};function ot(V,ae,Se,Ce,Be,bt,At,Xt){if(V===Gi){g===!0&&(Ee(r.BLEND),g=!1);return}if(g===!1&&(F(r.BLEND),g=!0),V!==Ph){if(V!==C||Xt!==w){if((A!==Br||h!==Br)&&(r.blendEquation(r.FUNC_ADD),A=Br,h=Br),Xt)switch(V){case kr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ql:r.blendFunc(r.ONE,r.ONE);break;case jl:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Yl:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case kr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ql:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case jl:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Yl:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}L=null,I=null,H=null,Y=null,C=V,w=Xt}return}Be=Be||ae,bt=bt||Se,At=At||Ce,(ae!==A||Be!==h)&&(r.blendEquationSeparate(Mt[ae],Mt[Be]),A=ae,h=Be),(Se!==L||Ce!==I||bt!==H||At!==Y)&&(r.blendFuncSeparate(Oe[Se],Oe[Ce],Oe[bt],Oe[At]),L=Se,I=Ce,H=bt,Y=At),C=V,w=!1}function Nt(V,ae){V.side===Xn?Ee(r.CULL_FACE):F(r.CULL_FACE);let Se=V.side===vn;ae&&(Se=!Se),Ie(Se),V.blending===kr&&V.transparent===!1?ot(Gi):ot(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.premultipliedAlpha),f.setFunc(V.depthFunc),f.setTest(V.depthTest),f.setMask(V.depthWrite),l.setMask(V.colorWrite);const Ce=V.stencilWrite;u.setTest(Ce),Ce&&(u.setMask(V.stencilWriteMask),u.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),u.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),St(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?F(r.SAMPLE_ALPHA_TO_COVERAGE):Ee(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ie(V){U!==V&&(V?r.frontFace(r.CW):r.frontFace(r.CCW),U=V)}function xt(V){V!==Rh?(F(r.CULL_FACE),V!==fe&&(V===Xl?r.cullFace(r.BACK):V===Ch?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ee(r.CULL_FACE),fe=V}function Vt(V){V!==Q&&(ye&&r.lineWidth(V),Q=V)}function St(V,ae,Se){V?(F(r.POLYGON_OFFSET_FILL),(q!==ae||te!==Se)&&(r.polygonOffset(ae,Se),q=ae,te=Se)):Ee(r.POLYGON_OFFSET_FILL)}function Ut(V){V?F(r.SCISSOR_TEST):Ee(r.SCISSOR_TEST)}function sn(V){V===void 0&&(V=r.TEXTURE0+ee-1),Me!==V&&(r.activeTexture(V),Me=V)}function N(V,ae,Se){Se===void 0&&(Me===null?Se=r.TEXTURE0+ee-1:Se=Me);let Ce=ge[Se];Ce===void 0&&(Ce={type:void 0,texture:void 0},ge[Se]=Ce),(Ce.type!==V||Ce.texture!==ae)&&(Me!==Se&&(r.activeTexture(Se),Me=Se),r.bindTexture(V,ae||me[V]),Ce.type=V,Ce.texture=ae)}function P(){const V=ge[Me];V!==void 0&&V.type!==void 0&&(r.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function ne(){try{r.compressedTexImage2D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function xe(){try{r.compressedTexImage3D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Te(){try{r.texSubImage2D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Pe(){try{r.texSubImage3D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ye(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Fe(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ce(){try{r.texStorage2D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ge(){try{r.texStorage3D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ze(){try{r.texImage2D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function We(){try{r.texImage3D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ue(V){ie.equals(V)===!1&&(r.scissor(V.x,V.y,V.z,V.w),ie.copy(V))}function ke(V){pe.equals(V)===!1&&(r.viewport(V.x,V.y,V.z,V.w),pe.copy(V))}function et(V,ae){let Se=m.get(ae);Se===void 0&&(Se=new WeakMap,m.set(ae,Se));let Ce=Se.get(V);Ce===void 0&&(Ce=r.getUniformBlockIndex(ae,V.name),Se.set(V,Ce))}function st(V,ae){const Ce=m.get(ae).get(V);p.get(ae)!==Ce&&(r.uniformBlockBinding(ae,Ce,V.__bindingPointIndex),p.set(ae,Ce))}function It(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),n===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),v={},Me=null,ge={},x={},T=new WeakMap,E=[],y=null,g=!1,C=null,A=null,L=null,I=null,h=null,H=null,Y=null,w=!1,U=null,fe=null,Q=null,q=null,te=null,ie.set(0,0,r.canvas.width,r.canvas.height),pe.set(0,0,r.canvas.width,r.canvas.height),l.reset(),f.reset(),u.reset()}return{buffers:{color:l,depth:f,stencil:u},enable:F,disable:Ee,bindFramebuffer:De,drawBuffers:be,useProgram:qe,setBlending:ot,setMaterial:Nt,setFlipSided:Ie,setCullFace:xt,setLineWidth:Vt,setPolygonOffset:St,setScissorTest:Ut,activeTexture:sn,bindTexture:N,unbindTexture:P,compressedTexImage2D:ne,compressedTexImage3D:xe,texImage2D:ze,texImage3D:We,updateUBOMapping:et,uniformBlockBinding:st,texStorage2D:ce,texStorage3D:Ge,texSubImage2D:Te,texSubImage3D:Pe,compressedTexSubImage2D:Ye,compressedTexSubImage3D:Fe,scissor:Ue,viewport:ke,reset:It}}function Cv(r,e,t,n,i,s,o){const l=i.isWebGL2,f=i.maxTextures,u=i.maxCubemapSize,p=i.maxTextureSize,m=i.maxSamples,v=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,x=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),T=new WeakMap;let E;const y=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function C(N,P){return g?new OffscreenCanvas(N,P):Ds("canvas")}function A(N,P,ne,xe){let Te=1;if((N.width>xe||N.height>xe)&&(Te=xe/Math.max(N.width,N.height)),Te<1||P===!0)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap){const Pe=P?sf:Math.floor,Ye=Pe(Te*N.width),Fe=Pe(Te*N.height);E===void 0&&(E=C(Ye,Fe));const ce=ne?C(Ye,Fe):E;return ce.width=Ye,ce.height=Fe,ce.getContext("2d").drawImage(N,0,0,Ye,Fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+N.width+"x"+N.height+") to ("+Ye+"x"+Fe+")."),ce}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+N.width+"x"+N.height+")."),N;return N}function L(N){return Ko(N.width)&&Ko(N.height)}function I(N){return l?!1:N.wrapS!==qn||N.wrapT!==qn||N.minFilter!==Jt&&N.minFilter!==hn}function h(N,P){return N.generateMipmaps&&P&&N.minFilter!==Jt&&N.minFilter!==hn}function H(N){r.generateMipmap(N)}function Y(N,P,ne,xe,Te=!1){if(l===!1)return P;if(N!==null){if(r[N]!==void 0)return r[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let Pe=P;return P===r.RED&&(ne===r.FLOAT&&(Pe=r.R32F),ne===r.HALF_FLOAT&&(Pe=r.R16F),ne===r.UNSIGNED_BYTE&&(Pe=r.R8)),P===r.RG&&(ne===r.FLOAT&&(Pe=r.RG32F),ne===r.HALF_FLOAT&&(Pe=r.RG16F),ne===r.UNSIGNED_BYTE&&(Pe=r.RG8)),P===r.RGBA&&(ne===r.FLOAT&&(Pe=r.RGBA32F),ne===r.HALF_FLOAT&&(Pe=r.RGBA16F),ne===r.UNSIGNED_BYTE&&(Pe=xe===it&&Te===!1?r.SRGB8_ALPHA8:r.RGBA8),ne===r.UNSIGNED_SHORT_4_4_4_4&&(Pe=r.RGBA4),ne===r.UNSIGNED_SHORT_5_5_5_1&&(Pe=r.RGB5_A1)),(Pe===r.R16F||Pe===r.R32F||Pe===r.RG16F||Pe===r.RG32F||Pe===r.RGBA16F||Pe===r.RGBA32F)&&e.get("EXT_color_buffer_float"),Pe}function w(N,P,ne){return h(N,ne)===!0||N.isFramebufferTexture&&N.minFilter!==Jt&&N.minFilter!==hn?Math.log2(Math.max(P.width,P.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?P.mipmaps.length:1}function U(N){return N===Jt||N===Xo||N===ba?r.NEAREST:r.LINEAR}function fe(N){const P=N.target;P.removeEventListener("dispose",fe),q(P),P.isVideoTexture&&T.delete(P)}function Q(N){const P=N.target;P.removeEventListener("dispose",Q),ee(P)}function q(N){const P=n.get(N);if(P.__webglInit===void 0)return;const ne=N.source,xe=y.get(ne);if(xe){const Te=xe[P.__cacheKey];Te.usedTimes--,Te.usedTimes===0&&te(N),Object.keys(xe).length===0&&y.delete(ne)}n.remove(N)}function te(N){const P=n.get(N);r.deleteTexture(P.__webglTexture);const ne=N.source,xe=y.get(ne);delete xe[P.__cacheKey],o.memory.textures--}function ee(N){const P=N.texture,ne=n.get(N),xe=n.get(P);if(xe.__webglTexture!==void 0&&(r.deleteTexture(xe.__webglTexture),o.memory.textures--),N.depthTexture&&N.depthTexture.dispose(),N.isWebGLCubeRenderTarget)for(let Te=0;Te<6;Te++)r.deleteFramebuffer(ne.__webglFramebuffer[Te]),ne.__webglDepthbuffer&&r.deleteRenderbuffer(ne.__webglDepthbuffer[Te]);else{if(r.deleteFramebuffer(ne.__webglFramebuffer),ne.__webglDepthbuffer&&r.deleteRenderbuffer(ne.__webglDepthbuffer),ne.__webglMultisampledFramebuffer&&r.deleteFramebuffer(ne.__webglMultisampledFramebuffer),ne.__webglColorRenderbuffer)for(let Te=0;Te<ne.__webglColorRenderbuffer.length;Te++)ne.__webglColorRenderbuffer[Te]&&r.deleteRenderbuffer(ne.__webglColorRenderbuffer[Te]);ne.__webglDepthRenderbuffer&&r.deleteRenderbuffer(ne.__webglDepthRenderbuffer)}if(N.isWebGLMultipleRenderTargets)for(let Te=0,Pe=P.length;Te<Pe;Te++){const Ye=n.get(P[Te]);Ye.__webglTexture&&(r.deleteTexture(Ye.__webglTexture),o.memory.textures--),n.remove(P[Te])}n.remove(P),n.remove(N)}let ye=0;function ue(){ye=0}function de(){const N=ye;return N>=f&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+f),ye+=1,N}function Me(N){const P=[];return P.push(N.wrapS),P.push(N.wrapT),P.push(N.wrapR||0),P.push(N.magFilter),P.push(N.minFilter),P.push(N.anisotropy),P.push(N.internalFormat),P.push(N.format),P.push(N.type),P.push(N.generateMipmaps),P.push(N.premultiplyAlpha),P.push(N.flipY),P.push(N.unpackAlignment),P.push(N.colorSpace),P.join()}function ge(N,P){const ne=n.get(N);if(N.isVideoTexture&&Ut(N),N.isRenderTargetTexture===!1&&N.version>0&&ne.__version!==N.version){const xe=N.image;if(xe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(xe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ee(ne,N,P);return}}t.bindTexture(r.TEXTURE_2D,ne.__webglTexture,r.TEXTURE0+P)}function Ne(N,P){const ne=n.get(N);if(N.version>0&&ne.__version!==N.version){Ee(ne,N,P);return}t.bindTexture(r.TEXTURE_2D_ARRAY,ne.__webglTexture,r.TEXTURE0+P)}function Ae(N,P){const ne=n.get(N);if(N.version>0&&ne.__version!==N.version){Ee(ne,N,P);return}t.bindTexture(r.TEXTURE_3D,ne.__webglTexture,r.TEXTURE0+P)}function ie(N,P){const ne=n.get(N);if(N.version>0&&ne.__version!==N.version){De(ne,N,P);return}t.bindTexture(r.TEXTURE_CUBE_MAP,ne.__webglTexture,r.TEXTURE0+P)}const pe={[Vi]:r.REPEAT,[qn]:r.CLAMP_TO_EDGE,[Ca]:r.MIRRORED_REPEAT},Z={[Jt]:r.NEAREST,[Xo]:r.NEAREST_MIPMAP_NEAREST,[ba]:r.NEAREST_MIPMAP_LINEAR,[hn]:r.LINEAR,[Ju]:r.LINEAR_MIPMAP_NEAREST,[fr]:r.LINEAR_MIPMAP_LINEAR};function me(N,P,ne){if(ne?(r.texParameteri(N,r.TEXTURE_WRAP_S,pe[P.wrapS]),r.texParameteri(N,r.TEXTURE_WRAP_T,pe[P.wrapT]),(N===r.TEXTURE_3D||N===r.TEXTURE_2D_ARRAY)&&r.texParameteri(N,r.TEXTURE_WRAP_R,pe[P.wrapR]),r.texParameteri(N,r.TEXTURE_MAG_FILTER,Z[P.magFilter]),r.texParameteri(N,r.TEXTURE_MIN_FILTER,Z[P.minFilter])):(r.texParameteri(N,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(N,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(N===r.TEXTURE_3D||N===r.TEXTURE_2D_ARRAY)&&r.texParameteri(N,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(P.wrapS!==qn||P.wrapT!==qn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(N,r.TEXTURE_MAG_FILTER,U(P.magFilter)),r.texParameteri(N,r.TEXTURE_MIN_FILTER,U(P.minFilter)),P.minFilter!==Jt&&P.minFilter!==hn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const xe=e.get("EXT_texture_filter_anisotropic");if(P.magFilter===Jt||P.minFilter!==ba&&P.minFilter!==fr||P.type===Hi&&e.has("OES_texture_float_linear")===!1||l===!1&&P.type===Ls&&e.has("OES_texture_half_float_linear")===!1)return;(P.anisotropy>1||n.get(P).__currentAnisotropy)&&(r.texParameterf(N,xe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(P.anisotropy,i.getMaxAnisotropy())),n.get(P).__currentAnisotropy=P.anisotropy)}}function F(N,P){let ne=!1;N.__webglInit===void 0&&(N.__webglInit=!0,P.addEventListener("dispose",fe));const xe=P.source;let Te=y.get(xe);Te===void 0&&(Te={},y.set(xe,Te));const Pe=Me(P);if(Pe!==N.__cacheKey){Te[Pe]===void 0&&(Te[Pe]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,ne=!0),Te[Pe].usedTimes++;const Ye=Te[N.__cacheKey];Ye!==void 0&&(Te[N.__cacheKey].usedTimes--,Ye.usedTimes===0&&te(P)),N.__cacheKey=Pe,N.__webglTexture=Te[Pe].texture}return ne}function Ee(N,P,ne){let xe=r.TEXTURE_2D;(P.isDataArrayTexture||P.isCompressedArrayTexture)&&(xe=r.TEXTURE_2D_ARRAY),P.isData3DTexture&&(xe=r.TEXTURE_3D);const Te=F(N,P),Pe=P.source;t.bindTexture(xe,N.__webglTexture,r.TEXTURE0+ne);const Ye=n.get(Pe);if(Pe.version!==Ye.__version||Te===!0){t.activeTexture(r.TEXTURE0+ne),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,P.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,P.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.NONE);const Fe=I(P)&&L(P.image)===!1;let ce=A(P.image,Fe,!1,p);ce=sn(P,ce);const Ge=L(ce)||l,ze=s.convert(P.format,P.colorSpace);let We=s.convert(P.type),Ue=Y(P.internalFormat,ze,We,P.colorSpace);me(xe,P,Ge);let ke;const et=P.mipmaps,st=l&&P.isVideoTexture!==!0,It=Ye.__version===void 0||Te===!0,V=w(P,ce,Ge);if(P.isDepthTexture)Ue=r.DEPTH_COMPONENT,l?P.type===Hi?Ue=r.DEPTH_COMPONENT32F:P.type===rr?Ue=r.DEPTH_COMPONENT24:P.type===Hr?Ue=r.DEPTH24_STENCIL8:Ue=r.DEPTH_COMPONENT16:P.type===Hi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),P.format===lr&&Ue===r.DEPTH_COMPONENT&&P.type!==Qu&&P.type!==rr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),P.type=rr,We=s.convert(P.type)),P.format===qr&&Ue===r.DEPTH_COMPONENT&&(Ue=r.DEPTH_STENCIL,P.type!==Hr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),P.type=Hr,We=s.convert(P.type))),It&&(st?t.texStorage2D(r.TEXTURE_2D,1,Ue,ce.width,ce.height):t.texImage2D(r.TEXTURE_2D,0,Ue,ce.width,ce.height,0,ze,We,null));else if(P.isDataTexture)if(et.length>0&&Ge){st&&It&&t.texStorage2D(r.TEXTURE_2D,V,Ue,et[0].width,et[0].height);for(let ae=0,Se=et.length;ae<Se;ae++)ke=et[ae],st?t.texSubImage2D(r.TEXTURE_2D,ae,0,0,ke.width,ke.height,ze,We,ke.data):t.texImage2D(r.TEXTURE_2D,ae,Ue,ke.width,ke.height,0,ze,We,ke.data);P.generateMipmaps=!1}else st?(It&&t.texStorage2D(r.TEXTURE_2D,V,Ue,ce.width,ce.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,ce.width,ce.height,ze,We,ce.data)):t.texImage2D(r.TEXTURE_2D,0,Ue,ce.width,ce.height,0,ze,We,ce.data);else if(P.isCompressedTexture)if(P.isCompressedArrayTexture){st&&It&&t.texStorage3D(r.TEXTURE_2D_ARRAY,V,Ue,et[0].width,et[0].height,ce.depth);for(let ae=0,Se=et.length;ae<Se;ae++)ke=et[ae],P.format!==Un?ze!==null?st?t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ae,0,0,0,ke.width,ke.height,ce.depth,ze,ke.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ae,Ue,ke.width,ke.height,ce.depth,0,ke.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):st?t.texSubImage3D(r.TEXTURE_2D_ARRAY,ae,0,0,0,ke.width,ke.height,ce.depth,ze,We,ke.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ae,Ue,ke.width,ke.height,ce.depth,0,ze,We,ke.data)}else{st&&It&&t.texStorage2D(r.TEXTURE_2D,V,Ue,et[0].width,et[0].height);for(let ae=0,Se=et.length;ae<Se;ae++)ke=et[ae],P.format!==Un?ze!==null?st?t.compressedTexSubImage2D(r.TEXTURE_2D,ae,0,0,ke.width,ke.height,ze,ke.data):t.compressedTexImage2D(r.TEXTURE_2D,ae,Ue,ke.width,ke.height,0,ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):st?t.texSubImage2D(r.TEXTURE_2D,ae,0,0,ke.width,ke.height,ze,We,ke.data):t.texImage2D(r.TEXTURE_2D,ae,Ue,ke.width,ke.height,0,ze,We,ke.data)}else if(P.isDataArrayTexture)st?(It&&t.texStorage3D(r.TEXTURE_2D_ARRAY,V,Ue,ce.width,ce.height,ce.depth),t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,ze,We,ce.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,Ue,ce.width,ce.height,ce.depth,0,ze,We,ce.data);else if(P.isData3DTexture)st?(It&&t.texStorage3D(r.TEXTURE_3D,V,Ue,ce.width,ce.height,ce.depth),t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,ze,We,ce.data)):t.texImage3D(r.TEXTURE_3D,0,Ue,ce.width,ce.height,ce.depth,0,ze,We,ce.data);else if(P.isFramebufferTexture){if(It)if(st)t.texStorage2D(r.TEXTURE_2D,V,Ue,ce.width,ce.height);else{let ae=ce.width,Se=ce.height;for(let Ce=0;Ce<V;Ce++)t.texImage2D(r.TEXTURE_2D,Ce,Ue,ae,Se,0,ze,We,null),ae>>=1,Se>>=1}}else if(et.length>0&&Ge){st&&It&&t.texStorage2D(r.TEXTURE_2D,V,Ue,et[0].width,et[0].height);for(let ae=0,Se=et.length;ae<Se;ae++)ke=et[ae],st?t.texSubImage2D(r.TEXTURE_2D,ae,0,0,ze,We,ke):t.texImage2D(r.TEXTURE_2D,ae,Ue,ze,We,ke);P.generateMipmaps=!1}else st?(It&&t.texStorage2D(r.TEXTURE_2D,V,Ue,ce.width,ce.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,ze,We,ce)):t.texImage2D(r.TEXTURE_2D,0,Ue,ze,We,ce);h(P,Ge)&&H(xe),Ye.__version=Pe.version,P.onUpdate&&P.onUpdate(P)}N.__version=P.version}function De(N,P,ne){if(P.image.length!==6)return;const xe=F(N,P),Te=P.source;t.bindTexture(r.TEXTURE_CUBE_MAP,N.__webglTexture,r.TEXTURE0+ne);const Pe=n.get(Te);if(Te.version!==Pe.__version||xe===!0){t.activeTexture(r.TEXTURE0+ne),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,P.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,P.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.NONE);const Ye=P.isCompressedTexture||P.image[0].isCompressedTexture,Fe=P.image[0]&&P.image[0].isDataTexture,ce=[];for(let ae=0;ae<6;ae++)!Ye&&!Fe?ce[ae]=A(P.image[ae],!1,!0,u):ce[ae]=Fe?P.image[ae].image:P.image[ae],ce[ae]=sn(P,ce[ae]);const Ge=ce[0],ze=L(Ge)||l,We=s.convert(P.format,P.colorSpace),Ue=s.convert(P.type),ke=Y(P.internalFormat,We,Ue,P.colorSpace),et=l&&P.isVideoTexture!==!0,st=Pe.__version===void 0||xe===!0;let It=w(P,Ge,ze);me(r.TEXTURE_CUBE_MAP,P,ze);let V;if(Ye){et&&st&&t.texStorage2D(r.TEXTURE_CUBE_MAP,It,ke,Ge.width,Ge.height);for(let ae=0;ae<6;ae++){V=ce[ae].mipmaps;for(let Se=0;Se<V.length;Se++){const Ce=V[Se];P.format!==Un?We!==null?et?t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Se,0,0,Ce.width,Ce.height,We,Ce.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Se,ke,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):et?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Se,0,0,Ce.width,Ce.height,We,Ue,Ce.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Se,ke,Ce.width,Ce.height,0,We,Ue,Ce.data)}}}else{V=P.mipmaps,et&&st&&(V.length>0&&It++,t.texStorage2D(r.TEXTURE_CUBE_MAP,It,ke,ce[0].width,ce[0].height));for(let ae=0;ae<6;ae++)if(Fe){et?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,ce[ae].width,ce[ae].height,We,Ue,ce[ae].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,ke,ce[ae].width,ce[ae].height,0,We,Ue,ce[ae].data);for(let Se=0;Se<V.length;Se++){const Be=V[Se].image[ae].image;et?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Se+1,0,0,Be.width,Be.height,We,Ue,Be.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Se+1,ke,Be.width,Be.height,0,We,Ue,Be.data)}}else{et?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,We,Ue,ce[ae]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,ke,We,Ue,ce[ae]);for(let Se=0;Se<V.length;Se++){const Ce=V[Se];et?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Se+1,0,0,We,Ue,Ce.image[ae]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Se+1,ke,We,Ue,Ce.image[ae])}}}h(P,ze)&&H(r.TEXTURE_CUBE_MAP),Pe.__version=Te.version,P.onUpdate&&P.onUpdate(P)}N.__version=P.version}function be(N,P,ne,xe,Te){const Pe=s.convert(ne.format,ne.colorSpace),Ye=s.convert(ne.type),Fe=Y(ne.internalFormat,Pe,Ye,ne.colorSpace);n.get(P).__hasExternalTextures||(Te===r.TEXTURE_3D||Te===r.TEXTURE_2D_ARRAY?t.texImage3D(Te,0,Fe,P.width,P.height,P.depth,0,Pe,Ye,null):t.texImage2D(Te,0,Fe,P.width,P.height,0,Pe,Ye,null)),t.bindFramebuffer(r.FRAMEBUFFER,N),St(P)?v.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,xe,Te,n.get(ne).__webglTexture,0,Vt(P)):(Te===r.TEXTURE_2D||Te>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Te<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,xe,Te,n.get(ne).__webglTexture,0),t.bindFramebuffer(r.FRAMEBUFFER,null)}function qe(N,P,ne){if(r.bindRenderbuffer(r.RENDERBUFFER,N),P.depthBuffer&&!P.stencilBuffer){let xe=r.DEPTH_COMPONENT16;if(ne||St(P)){const Te=P.depthTexture;Te&&Te.isDepthTexture&&(Te.type===Hi?xe=r.DEPTH_COMPONENT32F:Te.type===rr&&(xe=r.DEPTH_COMPONENT24));const Pe=Vt(P);St(P)?v.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Pe,xe,P.width,P.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,Pe,xe,P.width,P.height)}else r.renderbufferStorage(r.RENDERBUFFER,xe,P.width,P.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,N)}else if(P.depthBuffer&&P.stencilBuffer){const xe=Vt(P);ne&&St(P)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,xe,r.DEPTH24_STENCIL8,P.width,P.height):St(P)?v.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,xe,r.DEPTH24_STENCIL8,P.width,P.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,N)}else{const xe=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let Te=0;Te<xe.length;Te++){const Pe=xe[Te],Ye=s.convert(Pe.format,Pe.colorSpace),Fe=s.convert(Pe.type),ce=Y(Pe.internalFormat,Ye,Fe,Pe.colorSpace),Ge=Vt(P);ne&&St(P)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ge,ce,P.width,P.height):St(P)?v.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ge,ce,P.width,P.height):r.renderbufferStorage(r.RENDERBUFFER,ce,P.width,P.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Mt(N,P){if(P&&P.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,N),!(P.depthTexture&&P.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(P.depthTexture).__webglTexture||P.depthTexture.image.width!==P.width||P.depthTexture.image.height!==P.height)&&(P.depthTexture.image.width=P.width,P.depthTexture.image.height=P.height,P.depthTexture.needsUpdate=!0),ge(P.depthTexture,0);const xe=n.get(P.depthTexture).__webglTexture,Te=Vt(P);if(P.depthTexture.format===lr)St(P)?v.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,xe,0,Te):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,xe,0);else if(P.depthTexture.format===qr)St(P)?v.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,xe,0,Te):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,xe,0);else throw new Error("Unknown depthTexture format")}function Oe(N){const P=n.get(N),ne=N.isWebGLCubeRenderTarget===!0;if(N.depthTexture&&!P.__autoAllocateDepthBuffer){if(ne)throw new Error("target.depthTexture not supported in Cube render targets");Mt(P.__webglFramebuffer,N)}else if(ne){P.__webglDepthbuffer=[];for(let xe=0;xe<6;xe++)t.bindFramebuffer(r.FRAMEBUFFER,P.__webglFramebuffer[xe]),P.__webglDepthbuffer[xe]=r.createRenderbuffer(),qe(P.__webglDepthbuffer[xe],N,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,P.__webglFramebuffer),P.__webglDepthbuffer=r.createRenderbuffer(),qe(P.__webglDepthbuffer,N,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function ot(N,P,ne){const xe=n.get(N);P!==void 0&&be(xe.__webglFramebuffer,N,N.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D),ne!==void 0&&Oe(N)}function Nt(N){const P=N.texture,ne=n.get(N),xe=n.get(P);N.addEventListener("dispose",Q),N.isWebGLMultipleRenderTargets!==!0&&(xe.__webglTexture===void 0&&(xe.__webglTexture=r.createTexture()),xe.__version=P.version,o.memory.textures++);const Te=N.isWebGLCubeRenderTarget===!0,Pe=N.isWebGLMultipleRenderTargets===!0,Ye=L(N)||l;if(Te){ne.__webglFramebuffer=[];for(let Fe=0;Fe<6;Fe++)ne.__webglFramebuffer[Fe]=r.createFramebuffer()}else{if(ne.__webglFramebuffer=r.createFramebuffer(),Pe)if(i.drawBuffers){const Fe=N.texture;for(let ce=0,Ge=Fe.length;ce<Ge;ce++){const ze=n.get(Fe[ce]);ze.__webglTexture===void 0&&(ze.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(l&&N.samples>0&&St(N)===!1){const Fe=Pe?P:[P];ne.__webglMultisampledFramebuffer=r.createFramebuffer(),ne.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,ne.__webglMultisampledFramebuffer);for(let ce=0;ce<Fe.length;ce++){const Ge=Fe[ce];ne.__webglColorRenderbuffer[ce]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,ne.__webglColorRenderbuffer[ce]);const ze=s.convert(Ge.format,Ge.colorSpace),We=s.convert(Ge.type),Ue=Y(Ge.internalFormat,ze,We,Ge.colorSpace,N.isXRRenderTarget===!0),ke=Vt(N);r.renderbufferStorageMultisample(r.RENDERBUFFER,ke,Ue,N.width,N.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ce,r.RENDERBUFFER,ne.__webglColorRenderbuffer[ce])}r.bindRenderbuffer(r.RENDERBUFFER,null),N.depthBuffer&&(ne.__webglDepthRenderbuffer=r.createRenderbuffer(),qe(ne.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Te){t.bindTexture(r.TEXTURE_CUBE_MAP,xe.__webglTexture),me(r.TEXTURE_CUBE_MAP,P,Ye);for(let Fe=0;Fe<6;Fe++)be(ne.__webglFramebuffer[Fe],N,P,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Fe);h(P,Ye)&&H(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Pe){const Fe=N.texture;for(let ce=0,Ge=Fe.length;ce<Ge;ce++){const ze=Fe[ce],We=n.get(ze);t.bindTexture(r.TEXTURE_2D,We.__webglTexture),me(r.TEXTURE_2D,ze,Ye),be(ne.__webglFramebuffer,N,ze,r.COLOR_ATTACHMENT0+ce,r.TEXTURE_2D),h(ze,Ye)&&H(r.TEXTURE_2D)}t.unbindTexture()}else{let Fe=r.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(l?Fe=N.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Fe,xe.__webglTexture),me(Fe,P,Ye),be(ne.__webglFramebuffer,N,P,r.COLOR_ATTACHMENT0,Fe),h(P,Ye)&&H(Fe),t.unbindTexture()}N.depthBuffer&&Oe(N)}function Ie(N){const P=L(N)||l,ne=N.isWebGLMultipleRenderTargets===!0?N.texture:[N.texture];for(let xe=0,Te=ne.length;xe<Te;xe++){const Pe=ne[xe];if(h(Pe,P)){const Ye=N.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,Fe=n.get(Pe).__webglTexture;t.bindTexture(Ye,Fe),H(Ye),t.unbindTexture()}}}function xt(N){if(l&&N.samples>0&&St(N)===!1){const P=N.isWebGLMultipleRenderTargets?N.texture:[N.texture],ne=N.width,xe=N.height;let Te=r.COLOR_BUFFER_BIT;const Pe=[],Ye=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Fe=n.get(N),ce=N.isWebGLMultipleRenderTargets===!0;if(ce)for(let Ge=0;Ge<P.length;Ge++)t.bindFramebuffer(r.FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ge,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Fe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ge,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Fe.__webglFramebuffer);for(let Ge=0;Ge<P.length;Ge++){Pe.push(r.COLOR_ATTACHMENT0+Ge),N.depthBuffer&&Pe.push(Ye);const ze=Fe.__ignoreDepthValues!==void 0?Fe.__ignoreDepthValues:!1;if(ze===!1&&(N.depthBuffer&&(Te|=r.DEPTH_BUFFER_BIT),N.stencilBuffer&&(Te|=r.STENCIL_BUFFER_BIT)),ce&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Fe.__webglColorRenderbuffer[Ge]),ze===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[Ye]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[Ye])),ce){const We=n.get(P[Ge]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,We,0)}r.blitFramebuffer(0,0,ne,xe,0,0,ne,xe,Te,r.NEAREST),x&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Pe)}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ce)for(let Ge=0;Ge<P.length;Ge++){t.bindFramebuffer(r.FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ge,r.RENDERBUFFER,Fe.__webglColorRenderbuffer[Ge]);const ze=n.get(P[Ge]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Fe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ge,r.TEXTURE_2D,ze,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Fe.__webglMultisampledFramebuffer)}}function Vt(N){return Math.min(m,N.samples)}function St(N){const P=n.get(N);return l&&N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&P.__useRenderToTexture!==!1}function Ut(N){const P=o.render.frame;T.get(N)!==P&&(T.set(N,P),N.update())}function sn(N,P){const ne=N.colorSpace,xe=N.format,Te=N.type;return N.isCompressedTexture===!0||N.format===Yo||ne!==ci&&ne!==ur&&(ne===it?l===!1?e.has("EXT_sRGB")===!0&&xe===Un?(N.format=Yo,N.minFilter=hn,N.generateMipmaps=!1):P=of.sRGBToLinear(P):(xe!==Un||Te!==hr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ne)),P}this.allocateTextureUnit=de,this.resetTextureUnits=ue,this.setTexture2D=ge,this.setTexture2DArray=Ne,this.setTexture3D=Ae,this.setTextureCube=ie,this.rebindTextures=ot,this.setupRenderTarget=Nt,this.updateRenderTargetMipmap=Ie,this.updateMultisampleRenderTarget=xt,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=be,this.useMultisampledRTT=St}function Lv(r,e,t){const n=t.isWebGL2;function i(s,o=ur){let l;if(s===hr)return r.UNSIGNED_BYTE;if(s===ad)return r.UNSIGNED_SHORT_4_4_4_4;if(s===od)return r.UNSIGNED_SHORT_5_5_5_1;if(s===id)return r.BYTE;if(s===rd)return r.SHORT;if(s===Qu)return r.UNSIGNED_SHORT;if(s===sd)return r.INT;if(s===rr)return r.UNSIGNED_INT;if(s===Hi)return r.FLOAT;if(s===Ls)return n?r.HALF_FLOAT:(l=e.get("OES_texture_half_float"),l!==null?l.HALF_FLOAT_OES:null);if(s===ld)return r.ALPHA;if(s===Un)return r.RGBA;if(s===cd)return r.LUMINANCE;if(s===ud)return r.LUMINANCE_ALPHA;if(s===lr)return r.DEPTH_COMPONENT;if(s===qr)return r.DEPTH_STENCIL;if(s===Yo)return l=e.get("EXT_sRGB"),l!==null?l.SRGB_ALPHA_EXT:null;if(s===fd)return r.RED;if(s===hd)return r.RED_INTEGER;if(s===dd)return r.RG;if(s===pd)return r.RG_INTEGER;if(s===md)return r.RGBA_INTEGER;if(s===no||s===io||s===ro||s===so)if(o===it)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(s===no)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===io)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===ro)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===so)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(s===no)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===io)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===ro)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===so)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Zl||s===Jl||s===Ql||s===ec)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(s===Zl)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Jl)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Ql)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===ec)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===gd)return l=e.get("WEBGL_compressed_texture_etc1"),l!==null?l.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===tc||s===nc)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(s===tc)return o===it?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(s===nc)return o===it?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===ic||s===rc||s===sc||s===ac||s===oc||s===lc||s===cc||s===uc||s===fc||s===hc||s===dc||s===pc||s===mc||s===gc)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(s===ic)return o===it?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===rc)return o===it?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===sc)return o===it?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===ac)return o===it?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===oc)return o===it?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===lc)return o===it?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===cc)return o===it?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===uc)return o===it?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===fc)return o===it?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===hc)return o===it?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===dc)return o===it?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===pc)return o===it?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===mc)return o===it?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===gc)return o===it?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===ao)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(s===ao)return o===it?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===_d||s===_c||s===vc||s===xc)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(s===ao)return l.COMPRESSED_RED_RGTC1_EXT;if(s===_c)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===vc)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===xc)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Hr?n?r.UNSIGNED_INT_24_8:(l=e.get("WEBGL_depth_texture"),l!==null?l.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class Pv extends _n{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ar extends Bt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Dv={type:"move"};class Lo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ar,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ar,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ar,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const l=this._targetRay,f=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const E of e.hand.values()){const y=t.getJointPose(E,n),g=this._getHandJoint(u,E);y!==null&&(g.matrix.fromArray(y.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=y.radius),g.visible=y!==null}const p=u.joints["index-finger-tip"],m=u.joints["thumb-tip"],v=p.position.distanceTo(m.position),x=.02,T=.005;u.inputState.pinching&&v>x+T?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&v<=x-T&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(f.matrix.fromArray(s.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,s.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(s.linearVelocity)):f.hasLinearVelocity=!1,s.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(s.angularVelocity)):f.hasAngularVelocity=!1));l!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(l.matrix.fromArray(i.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,i.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(i.linearVelocity)):l.hasLinearVelocity=!1,i.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(i.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(Dv)))}return l!==null&&(l.visible=i!==null),f!==null&&(f.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ar;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Iv extends ln{constructor(e,t,n,i,s,o,l,f,u,p){if(p=p!==void 0?p:lr,p!==lr&&p!==qr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&p===lr&&(n=rr),n===void 0&&p===qr&&(n=Hr),super(null,i,s,o,l,f,p,n,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=l!==void 0?l:Jt,this.minFilter=f!==void 0?f:Jt,this.flipY=!1,this.generateMipmaps=!1}}class Nv extends Jr{constructor(e,t){super();const n=this;let i=null,s=1,o=null,l="local-floor",f=1,u=null,p=null,m=null,v=null,x=null,T=null;const E=t.getContextAttributes();let y=null,g=null;const C=[],A=[],L=new Set,I=new Map,h=new _n;h.layers.enable(1),h.viewport=new Dt;const H=new _n;H.layers.enable(2),H.viewport=new Dt;const Y=[h,H],w=new Pv;w.layers.enable(1),w.layers.enable(2);let U=null,fe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let pe=C[ie];return pe===void 0&&(pe=new Lo,C[ie]=pe),pe.getTargetRaySpace()},this.getControllerGrip=function(ie){let pe=C[ie];return pe===void 0&&(pe=new Lo,C[ie]=pe),pe.getGripSpace()},this.getHand=function(ie){let pe=C[ie];return pe===void 0&&(pe=new Lo,C[ie]=pe),pe.getHandSpace()};function Q(ie){const pe=A.indexOf(ie.inputSource);if(pe===-1)return;const Z=C[pe];Z!==void 0&&(Z.update(ie.inputSource,ie.frame,u||o),Z.dispatchEvent({type:ie.type,data:ie.inputSource}))}function q(){i.removeEventListener("select",Q),i.removeEventListener("selectstart",Q),i.removeEventListener("selectend",Q),i.removeEventListener("squeeze",Q),i.removeEventListener("squeezestart",Q),i.removeEventListener("squeezeend",Q),i.removeEventListener("end",q),i.removeEventListener("inputsourceschange",te);for(let ie=0;ie<C.length;ie++){const pe=A[ie];pe!==null&&(A[ie]=null,C[ie].disconnect(pe))}U=null,fe=null,e.setRenderTarget(y),x=null,v=null,m=null,i=null,g=null,Ae.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){s=ie,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){l=ie,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(ie){u=ie},this.getBaseLayer=function(){return v!==null?v:x},this.getBinding=function(){return m},this.getFrame=function(){return T},this.getSession=function(){return i},this.setSession=async function(ie){if(i=ie,i!==null){if(y=e.getRenderTarget(),i.addEventListener("select",Q),i.addEventListener("selectstart",Q),i.addEventListener("selectend",Q),i.addEventListener("squeeze",Q),i.addEventListener("squeezestart",Q),i.addEventListener("squeezeend",Q),i.addEventListener("end",q),i.addEventListener("inputsourceschange",te),E.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const pe={antialias:i.renderState.layers===void 0?E.antialias:!0,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:s};x=new XRWebGLLayer(i,t,pe),i.updateRenderState({baseLayer:x}),g=new Li(x.framebufferWidth,x.framebufferHeight,{format:Un,type:hr,colorSpace:e.outputColorSpace,stencilBuffer:E.stencil})}else{let pe=null,Z=null,me=null;E.depth&&(me=E.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,pe=E.stencil?qr:lr,Z=E.stencil?Hr:rr);const F={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:s};m=new XRWebGLBinding(i,t),v=m.createProjectionLayer(F),i.updateRenderState({layers:[v]}),g=new Li(v.textureWidth,v.textureHeight,{format:Un,type:hr,depthTexture:new Iv(v.textureWidth,v.textureHeight,Z,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:E.stencil,colorSpace:e.outputColorSpace,samples:E.antialias?4:0});const Ee=e.properties.get(g);Ee.__ignoreDepthValues=v.ignoreDepthValues}g.isXRRenderTarget=!0,this.setFoveation(f),u=null,o=await i.requestReferenceSpace(l),Ae.setContext(i),Ae.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function te(ie){for(let pe=0;pe<ie.removed.length;pe++){const Z=ie.removed[pe],me=A.indexOf(Z);me>=0&&(A[me]=null,C[me].disconnect(Z))}for(let pe=0;pe<ie.added.length;pe++){const Z=ie.added[pe];let me=A.indexOf(Z);if(me===-1){for(let Ee=0;Ee<C.length;Ee++)if(Ee>=A.length){A.push(Z),me=Ee;break}else if(A[Ee]===null){A[Ee]=Z,me=Ee;break}if(me===-1)break}const F=C[me];F&&F.connect(Z)}}const ee=new k,ye=new k;function ue(ie,pe,Z){ee.setFromMatrixPosition(pe.matrixWorld),ye.setFromMatrixPosition(Z.matrixWorld);const me=ee.distanceTo(ye),F=pe.projectionMatrix.elements,Ee=Z.projectionMatrix.elements,De=F[14]/(F[10]-1),be=F[14]/(F[10]+1),qe=(F[9]+1)/F[5],Mt=(F[9]-1)/F[5],Oe=(F[8]-1)/F[0],ot=(Ee[8]+1)/Ee[0],Nt=De*Oe,Ie=De*ot,xt=me/(-Oe+ot),Vt=xt*-Oe;pe.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(Vt),ie.translateZ(xt),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert();const St=De+xt,Ut=be+xt,sn=Nt-Vt,N=Ie+(me-Vt),P=qe*be/Ut*St,ne=Mt*be/Ut*St;ie.projectionMatrix.makePerspective(sn,N,P,ne,St,Ut),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}function de(ie,pe){pe===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(pe.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(i===null)return;w.near=H.near=h.near=ie.near,w.far=H.far=h.far=ie.far,(U!==w.near||fe!==w.far)&&(i.updateRenderState({depthNear:w.near,depthFar:w.far}),U=w.near,fe=w.far);const pe=ie.parent,Z=w.cameras;de(w,pe);for(let me=0;me<Z.length;me++)de(Z[me],pe);Z.length===2?ue(w,h,H):w.projectionMatrix.copy(h.projectionMatrix),Me(ie,w,pe)};function Me(ie,pe,Z){Z===null?ie.matrix.copy(pe.matrixWorld):(ie.matrix.copy(Z.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(pe.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0);const me=ie.children;for(let F=0,Ee=me.length;F<Ee;F++)me[F].updateMatrixWorld(!0);ie.projectionMatrix.copy(pe.projectionMatrix),ie.projectionMatrixInverse.copy(pe.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=Yr*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(v===null&&x===null))return f},this.setFoveation=function(ie){f=ie,v!==null&&(v.fixedFoveation=ie),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=ie)},this.getPlanes=function(){return L};let ge=null;function Ne(ie,pe){if(p=pe.getViewerPose(u||o),T=pe,p!==null){const Z=p.views;x!==null&&(e.setRenderTargetFramebuffer(g,x.framebuffer),e.setRenderTarget(g));let me=!1;Z.length!==w.cameras.length&&(w.cameras.length=0,me=!0);for(let F=0;F<Z.length;F++){const Ee=Z[F];let De=null;if(x!==null)De=x.getViewport(Ee);else{const qe=m.getViewSubImage(v,Ee);De=qe.viewport,F===0&&(e.setRenderTargetTextures(g,qe.colorTexture,v.ignoreDepthValues?void 0:qe.depthStencilTexture),e.setRenderTarget(g))}let be=Y[F];be===void 0&&(be=new _n,be.layers.enable(F),be.viewport=new Dt,Y[F]=be),be.matrix.fromArray(Ee.transform.matrix),be.matrix.decompose(be.position,be.quaternion,be.scale),be.projectionMatrix.fromArray(Ee.projectionMatrix),be.projectionMatrixInverse.copy(be.projectionMatrix).invert(),be.viewport.set(De.x,De.y,De.width,De.height),F===0&&(w.matrix.copy(be.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),me===!0&&w.cameras.push(be)}}for(let Z=0;Z<C.length;Z++){const me=A[Z],F=C[Z];me!==null&&F!==void 0&&F.update(me,pe,u||o)}if(ge&&ge(ie,pe),pe.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:pe.detectedPlanes});let Z=null;for(const me of L)pe.detectedPlanes.has(me)||(Z===null&&(Z=[]),Z.push(me));if(Z!==null)for(const me of Z)L.delete(me),I.delete(me),n.dispatchEvent({type:"planeremoved",data:me});for(const me of pe.detectedPlanes)if(!L.has(me))L.add(me),I.set(me,pe.lastChangedTime),n.dispatchEvent({type:"planeadded",data:me});else{const F=I.get(me);me.lastChangedTime>F&&(I.set(me,me.lastChangedTime),n.dispatchEvent({type:"planechanged",data:me}))}}T=null}const Ae=new gf;Ae.setAnimationLoop(Ne),this.setAnimationLoop=function(ie){ge=ie},this.dispose=function(){}}}function Uv(r,e){function t(y,g){y.matrixAutoUpdate===!0&&y.updateMatrix(),g.value.copy(y.matrix)}function n(y,g){g.color.getRGB(y.fogColor.value,df(r)),g.isFog?(y.fogNear.value=g.near,y.fogFar.value=g.far):g.isFogExp2&&(y.fogDensity.value=g.density)}function i(y,g,C,A,L){g.isMeshBasicMaterial||g.isMeshLambertMaterial?s(y,g):g.isMeshToonMaterial?(s(y,g),m(y,g)):g.isMeshPhongMaterial?(s(y,g),p(y,g)):g.isMeshStandardMaterial?(s(y,g),v(y,g),g.isMeshPhysicalMaterial&&x(y,g,L)):g.isMeshMatcapMaterial?(s(y,g),T(y,g)):g.isMeshDepthMaterial?s(y,g):g.isMeshDistanceMaterial?(s(y,g),E(y,g)):g.isMeshNormalMaterial?s(y,g):g.isLineBasicMaterial?(o(y,g),g.isLineDashedMaterial&&l(y,g)):g.isPointsMaterial?f(y,g,C,A):g.isSpriteMaterial?u(y,g):g.isShadowMaterial?(y.color.value.copy(g.color),y.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(y,g){y.opacity.value=g.opacity,g.color&&y.diffuse.value.copy(g.color),g.emissive&&y.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(y.map.value=g.map,t(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,t(g.alphaMap,y.alphaMapTransform)),g.bumpMap&&(y.bumpMap.value=g.bumpMap,t(g.bumpMap,y.bumpMapTransform),y.bumpScale.value=g.bumpScale,g.side===vn&&(y.bumpScale.value*=-1)),g.normalMap&&(y.normalMap.value=g.normalMap,t(g.normalMap,y.normalMapTransform),y.normalScale.value.copy(g.normalScale),g.side===vn&&y.normalScale.value.negate()),g.displacementMap&&(y.displacementMap.value=g.displacementMap,t(g.displacementMap,y.displacementMapTransform),y.displacementScale.value=g.displacementScale,y.displacementBias.value=g.displacementBias),g.emissiveMap&&(y.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,y.emissiveMapTransform)),g.specularMap&&(y.specularMap.value=g.specularMap,t(g.specularMap,y.specularMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest);const C=e.get(g).envMap;if(C&&(y.envMap.value=C,y.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=g.reflectivity,y.ior.value=g.ior,y.refractionRatio.value=g.refractionRatio),g.lightMap){y.lightMap.value=g.lightMap;const A=r.useLegacyLights===!0?Math.PI:1;y.lightMapIntensity.value=g.lightMapIntensity*A,t(g.lightMap,y.lightMapTransform)}g.aoMap&&(y.aoMap.value=g.aoMap,y.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,y.aoMapTransform))}function o(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,g.map&&(y.map.value=g.map,t(g.map,y.mapTransform))}function l(y,g){y.dashSize.value=g.dashSize,y.totalSize.value=g.dashSize+g.gapSize,y.scale.value=g.scale}function f(y,g,C,A){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.size.value=g.size*C,y.scale.value=A*.5,g.map&&(y.map.value=g.map,t(g.map,y.uvTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function u(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.rotation.value=g.rotation,g.map&&(y.map.value=g.map,t(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function p(y,g){y.specular.value.copy(g.specular),y.shininess.value=Math.max(g.shininess,1e-4)}function m(y,g){g.gradientMap&&(y.gradientMap.value=g.gradientMap)}function v(y,g){y.metalness.value=g.metalness,g.metalnessMap&&(y.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,y.metalnessMapTransform)),y.roughness.value=g.roughness,g.roughnessMap&&(y.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,y.roughnessMapTransform)),e.get(g).envMap&&(y.envMapIntensity.value=g.envMapIntensity)}function x(y,g,C){y.ior.value=g.ior,g.sheen>0&&(y.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),y.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(y.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,y.sheenColorMapTransform)),g.sheenRoughnessMap&&(y.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,y.sheenRoughnessMapTransform))),g.clearcoat>0&&(y.clearcoat.value=g.clearcoat,y.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(y.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,y.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(y.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===vn&&y.clearcoatNormalScale.value.negate())),g.iridescence>0&&(y.iridescence.value=g.iridescence,y.iridescenceIOR.value=g.iridescenceIOR,y.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(y.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,y.iridescenceMapTransform)),g.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),g.transmission>0&&(y.transmission.value=g.transmission,y.transmissionSamplerMap.value=C.texture,y.transmissionSamplerSize.value.set(C.width,C.height),g.transmissionMap&&(y.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,y.transmissionMapTransform)),y.thickness.value=g.thickness,g.thicknessMap&&(y.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=g.attenuationDistance,y.attenuationColor.value.copy(g.attenuationColor)),y.specularIntensity.value=g.specularIntensity,y.specularColor.value.copy(g.specularColor),g.specularColorMap&&(y.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,y.specularColorMapTransform)),g.specularIntensityMap&&(y.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,y.specularIntensityMapTransform))}function T(y,g){g.matcap&&(y.matcap.value=g.matcap)}function E(y,g){const C=e.get(g).light;y.referencePosition.value.setFromMatrixPosition(C.matrixWorld),y.nearDistance.value=C.shadow.camera.near,y.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Fv(r,e,t,n){let i={},s={},o=[];const l=t.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function f(C,A){const L=A.program;n.uniformBlockBinding(C,L)}function u(C,A){let L=i[C.id];L===void 0&&(T(C),L=p(C),i[C.id]=L,C.addEventListener("dispose",y));const I=A.program;n.updateUBOMapping(C,I);const h=e.render.frame;s[C.id]!==h&&(v(C),s[C.id]=h)}function p(C){const A=m();C.__bindingPointIndex=A;const L=r.createBuffer(),I=C.__size,h=C.usage;return r.bindBuffer(r.UNIFORM_BUFFER,L),r.bufferData(r.UNIFORM_BUFFER,I,h),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,A,L),L}function m(){for(let C=0;C<l;C++)if(o.indexOf(C)===-1)return o.push(C),C;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(C){const A=i[C.id],L=C.uniforms,I=C.__cache;r.bindBuffer(r.UNIFORM_BUFFER,A);for(let h=0,H=L.length;h<H;h++){const Y=L[h];if(x(Y,h,I)===!0){const w=Y.__offset,U=Array.isArray(Y.value)?Y.value:[Y.value];let fe=0;for(let Q=0;Q<U.length;Q++){const q=U[Q],te=E(q);typeof q=="number"?(Y.__data[0]=q,r.bufferSubData(r.UNIFORM_BUFFER,w+fe,Y.__data)):q.isMatrix3?(Y.__data[0]=q.elements[0],Y.__data[1]=q.elements[1],Y.__data[2]=q.elements[2],Y.__data[3]=q.elements[0],Y.__data[4]=q.elements[3],Y.__data[5]=q.elements[4],Y.__data[6]=q.elements[5],Y.__data[7]=q.elements[0],Y.__data[8]=q.elements[6],Y.__data[9]=q.elements[7],Y.__data[10]=q.elements[8],Y.__data[11]=q.elements[0]):(q.toArray(Y.__data,fe),fe+=te.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,w,Y.__data)}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function x(C,A,L){const I=C.value;if(L[A]===void 0){if(typeof I=="number")L[A]=I;else{const h=Array.isArray(I)?I:[I],H=[];for(let Y=0;Y<h.length;Y++)H.push(h[Y].clone());L[A]=H}return!0}else if(typeof I=="number"){if(L[A]!==I)return L[A]=I,!0}else{const h=Array.isArray(L[A])?L[A]:[L[A]],H=Array.isArray(I)?I:[I];for(let Y=0;Y<h.length;Y++){const w=h[Y];if(w.equals(H[Y])===!1)return w.copy(H[Y]),!0}}return!1}function T(C){const A=C.uniforms;let L=0;const I=16;let h=0;for(let H=0,Y=A.length;H<Y;H++){const w=A[H],U={boundary:0,storage:0},fe=Array.isArray(w.value)?w.value:[w.value];for(let Q=0,q=fe.length;Q<q;Q++){const te=fe[Q],ee=E(te);U.boundary+=ee.boundary,U.storage+=ee.storage}if(w.__data=new Float32Array(U.storage/Float32Array.BYTES_PER_ELEMENT),w.__offset=L,H>0){h=L%I;const Q=I-h;h!==0&&Q-U.boundary<0&&(L+=I-h,w.__offset=L)}L+=U.storage}return h=L%I,h>0&&(L+=I-h),C.__size=L,C.__cache={},this}function E(C){const A={boundary:0,storage:0};return typeof C=="number"?(A.boundary=4,A.storage=4):C.isVector2?(A.boundary=8,A.storage=8):C.isVector3||C.isColor?(A.boundary=16,A.storage=12):C.isVector4?(A.boundary=16,A.storage=16):C.isMatrix3?(A.boundary=48,A.storage=48):C.isMatrix4?(A.boundary=64,A.storage=64):C.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",C),A}function y(C){const A=C.target;A.removeEventListener("dispose",y);const L=o.indexOf(A.__bindingPointIndex);o.splice(L,1),r.deleteBuffer(i[A.id]),delete i[A.id],delete s[A.id]}function g(){for(const C in i)r.deleteBuffer(i[C]);o=[],i={},s={}}return{bind:f,update:u,dispose:g}}function Ov(){const r=Ds("canvas");return r.style.display="block",r}class Mf{constructor(e={}){const{canvas:t=Ov(),context:n=null,depth:i=!0,stencil:s=!0,alpha:o=!1,antialias:l=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:u=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:m=!1}=e;this.isWebGLRenderer=!0;let v;n!==null?v=n.getContextAttributes().alpha:v=o;let x=null,T=null;const E=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=it,this.useLegacyLights=!0,this.toneMapping=Ri,this.toneMappingExposure=1;const g=this;let C=!1,A=0,L=0,I=null,h=-1,H=null;const Y=new Dt,w=new Dt;let U=null,fe=t.width,Q=t.height,q=1,te=null,ee=null;const ye=new Dt(0,0,fe,Q),ue=new Dt(0,0,fe,Q);let de=!1;const Me=new cl;let ge=!1,Ne=!1,Ae=null;const ie=new mt,pe=new k,Z={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function me(){return I===null?q:1}let F=n;function Ee(D,K){for(let se=0;se<D.length;se++){const j=D[se],le=t.getContext(j,K);if(le!==null)return le}return null}try{const D={alpha:!0,depth:i,stencil:s,antialias:l,premultipliedAlpha:f,preserveDrawingBuffer:u,powerPreference:p,failIfMajorPerformanceCaveat:m};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${sl}`),t.addEventListener("webglcontextlost",ke,!1),t.addEventListener("webglcontextrestored",et,!1),t.addEventListener("webglcontextcreationerror",st,!1),F===null){const K=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&K.shift(),F=Ee(K,D),F===null)throw Ee(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}F.getShaderPrecisionFormat===void 0&&(F.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(D){throw console.error("THREE.WebGLRenderer: "+D.message),D}let De,be,qe,Mt,Oe,ot,Nt,Ie,xt,Vt,St,Ut,sn,N,P,ne,xe,Te,Pe,Ye,Fe,ce,Ge,ze;function We(){De=new Yg(F),be=new Gg(F,De,e),De.init(be),ce=new Lv(F,De,be),qe=new Rv(F,De,be),Mt=new Zg(F),Oe=new pv,ot=new Cv(F,De,qe,Oe,be,ce,Mt),Nt=new Wg(g),Ie=new jg(g),xt=new cp(F,be),Ge=new kg(F,De,xt,be),Vt=new Kg(F,xt,Mt,Ge),St=new t_(F,Vt,xt,Mt),Pe=new e_(F,be,ot),ne=new Vg(Oe),Ut=new dv(g,Nt,Ie,De,be,Ge,ne),sn=new Uv(g,Oe),N=new gv,P=new Sv(De,be),Te=new zg(g,Nt,Ie,qe,St,v,f),xe=new wv(g,St,be),ze=new Fv(F,Mt,be,qe),Ye=new Hg(F,De,Mt,be),Fe=new $g(F,De,Mt,be),Mt.programs=Ut.programs,g.capabilities=be,g.extensions=De,g.properties=Oe,g.renderLists=N,g.shadowMap=xe,g.state=qe,g.info=Mt}We();const Ue=new Nv(g,F);this.xr=Ue,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const D=De.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=De.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(D){D!==void 0&&(q=D,this.setSize(fe,Q,!1))},this.getSize=function(D){return D.set(fe,Q)},this.setSize=function(D,K,se=!0){if(Ue.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}fe=D,Q=K,t.width=Math.floor(D*q),t.height=Math.floor(K*q),se===!0&&(t.style.width=D+"px",t.style.height=K+"px"),this.setViewport(0,0,D,K)},this.getDrawingBufferSize=function(D){return D.set(fe*q,Q*q).floor()},this.setDrawingBufferSize=function(D,K,se){fe=D,Q=K,q=se,t.width=Math.floor(D*se),t.height=Math.floor(K*se),this.setViewport(0,0,D,K)},this.getCurrentViewport=function(D){return D.copy(Y)},this.getViewport=function(D){return D.copy(ye)},this.setViewport=function(D,K,se,j){D.isVector4?ye.set(D.x,D.y,D.z,D.w):ye.set(D,K,se,j),qe.viewport(Y.copy(ye).multiplyScalar(q).floor())},this.getScissor=function(D){return D.copy(ue)},this.setScissor=function(D,K,se,j){D.isVector4?ue.set(D.x,D.y,D.z,D.w):ue.set(D,K,se,j),qe.scissor(w.copy(ue).multiplyScalar(q).floor())},this.getScissorTest=function(){return de},this.setScissorTest=function(D){qe.setScissorTest(de=D)},this.setOpaqueSort=function(D){te=D},this.setTransparentSort=function(D){ee=D},this.getClearColor=function(D){return D.copy(Te.getClearColor())},this.setClearColor=function(){Te.setClearColor.apply(Te,arguments)},this.getClearAlpha=function(){return Te.getClearAlpha()},this.setClearAlpha=function(){Te.setClearAlpha.apply(Te,arguments)},this.clear=function(D=!0,K=!0,se=!0){let j=0;D&&(j|=F.COLOR_BUFFER_BIT),K&&(j|=F.DEPTH_BUFFER_BIT),se&&(j|=F.STENCIL_BUFFER_BIT),F.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ke,!1),t.removeEventListener("webglcontextrestored",et,!1),t.removeEventListener("webglcontextcreationerror",st,!1),N.dispose(),P.dispose(),Oe.dispose(),Nt.dispose(),Ie.dispose(),St.dispose(),Ge.dispose(),ze.dispose(),Ut.dispose(),Ue.dispose(),Ue.removeEventListener("sessionstart",Be),Ue.removeEventListener("sessionend",bt),Ae&&(Ae.dispose(),Ae=null),At.stop()};function ke(D){D.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function et(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const D=Mt.autoReset,K=xe.enabled,se=xe.autoUpdate,j=xe.needsUpdate,le=xe.type;We(),Mt.autoReset=D,xe.enabled=K,xe.autoUpdate=se,xe.needsUpdate=j,xe.type=le}function st(D){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function It(D){const K=D.target;K.removeEventListener("dispose",It),V(K)}function V(D){ae(D),Oe.remove(D)}function ae(D){const K=Oe.get(D).programs;K!==void 0&&(K.forEach(function(se){Ut.releaseProgram(se)}),D.isShaderMaterial&&Ut.releaseShaderCache(D))}this.renderBufferDirect=function(D,K,se,j,le,Xe){K===null&&(K=Z);const Ke=le.isMesh&&le.matrixWorld.determinant()<0,tt=za(D,K,se,j,le);qe.setMaterial(j,Ke);let ut=se.index,at=1;j.wireframe===!0&&(ut=Vt.getWireframeAttribute(se),at=2);const ft=se.drawRange,ht=se.attributes.position;let Tt=ft.start*at,nn=(ft.start+ft.count)*at;Xe!==null&&(Tt=Math.max(Tt,Xe.start*at),nn=Math.min(nn,(Xe.start+Xe.count)*at)),ut!==null?(Tt=Math.max(Tt,0),nn=Math.min(nn,ut.count)):ht!=null&&(Tt=Math.max(Tt,0),nn=Math.min(nn,ht.count));const Rn=nn-Tt;if(Rn<0||Rn===1/0)return;Ge.setup(le,j,tt,se,ut);let Yn,Ht=Ye;if(ut!==null&&(Yn=xt.get(ut),Ht=Fe,Ht.setIndex(Yn)),le.isMesh)j.wireframe===!0?(qe.setLineWidth(j.wireframeLinewidth*me()),Ht.setMode(F.LINES)):Ht.setMode(F.TRIANGLES);else if(le.isLine){let gt=j.linewidth;gt===void 0&&(gt=1),qe.setLineWidth(gt*me()),le.isLineSegments?Ht.setMode(F.LINES):le.isLineLoop?Ht.setMode(F.LINE_LOOP):Ht.setMode(F.LINE_STRIP)}else le.isPoints?Ht.setMode(F.POINTS):le.isSprite&&Ht.setMode(F.TRIANGLES);if(le.isInstancedMesh)Ht.renderInstances(Tt,Rn,le.count);else if(se.isInstancedBufferGeometry){const gt=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,mr=Math.min(se.instanceCount,gt);Ht.renderInstances(Tt,Rn,mr)}else Ht.render(Tt,Rn)},this.compile=function(D,K){function se(j,le,Xe){j.transparent===!0&&j.side===Xn&&j.forceSinglePass===!1?(j.side=vn,j.needsUpdate=!0,Wi(j,le,Xe),j.side=Ci,j.needsUpdate=!0,Wi(j,le,Xe),j.side=Xn):Wi(j,le,Xe)}T=P.get(D),T.init(),y.push(T),D.traverseVisible(function(j){j.isLight&&j.layers.test(K.layers)&&(T.pushLight(j),j.castShadow&&T.pushShadow(j))}),T.setupLights(g.useLegacyLights),D.traverse(function(j){const le=j.material;if(le)if(Array.isArray(le))for(let Xe=0;Xe<le.length;Xe++){const Ke=le[Xe];se(Ke,D,j)}else se(le,D,j)}),y.pop(),T=null};let Se=null;function Ce(D){Se&&Se(D)}function Be(){At.stop()}function bt(){At.start()}const At=new gf;At.setAnimationLoop(Ce),typeof self<"u"&&At.setContext(self),this.setAnimationLoop=function(D){Se=D,Ue.setAnimationLoop(D),D===null?At.stop():At.start()},Ue.addEventListener("sessionstart",Be),Ue.addEventListener("sessionend",bt),this.render=function(D,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),Ue.enabled===!0&&Ue.isPresenting===!0&&(Ue.cameraAutoUpdate===!0&&Ue.updateCamera(K),K=Ue.getCamera()),D.isScene===!0&&D.onBeforeRender(g,D,K,I),T=P.get(D,y.length),T.init(),y.push(T),ie.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),Me.setFromProjectionMatrix(ie),Ne=this.localClippingEnabled,ge=ne.init(this.clippingPlanes,Ne),x=N.get(D,E.length),x.init(),E.push(x),Xt(D,K,0,g.sortObjects),x.finish(),g.sortObjects===!0&&x.sort(te,ee),ge===!0&&ne.beginShadows();const se=T.state.shadowsArray;if(xe.render(se,D,K),ge===!0&&ne.endShadows(),this.info.autoReset===!0&&this.info.reset(),Te.render(x,D),T.setupLights(g.useLegacyLights),K.isArrayCamera){const j=K.cameras;for(let le=0,Xe=j.length;le<Xe;le++){const Ke=j[le];wn(x,D,Ke,Ke.viewport)}}else wn(x,D,K);I!==null&&(ot.updateMultisampleRenderTarget(I),ot.updateRenderTargetMipmap(I)),D.isScene===!0&&D.onAfterRender(g,D,K),Ge.resetDefaultState(),h=-1,H=null,y.pop(),y.length>0?T=y[y.length-1]:T=null,E.pop(),E.length>0?x=E[E.length-1]:x=null};function Xt(D,K,se,j){if(D.visible===!1)return;if(D.layers.test(K.layers)){if(D.isGroup)se=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(K);else if(D.isLight)T.pushLight(D),D.castShadow&&T.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||Me.intersectsSprite(D)){j&&pe.setFromMatrixPosition(D.matrixWorld).applyMatrix4(ie);const Ke=St.update(D),tt=D.material;tt.visible&&x.push(D,Ke,tt,se,pe.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||Me.intersectsObject(D))){D.isSkinnedMesh&&D.skeleton.frame!==Mt.render.frame&&(D.skeleton.update(),D.skeleton.frame=Mt.render.frame);const Ke=St.update(D),tt=D.material;if(j&&(Ke.boundingSphere===null&&Ke.computeBoundingSphere(),pe.copy(Ke.boundingSphere.center).applyMatrix4(D.matrixWorld).applyMatrix4(ie)),Array.isArray(tt)){const ut=Ke.groups;for(let at=0,ft=ut.length;at<ft;at++){const ht=ut[at],Tt=tt[ht.materialIndex];Tt&&Tt.visible&&x.push(D,Ke,Tt,se,pe.z,ht)}}else tt.visible&&x.push(D,Ke,tt,se,pe.z,null)}}const Xe=D.children;for(let Ke=0,tt=Xe.length;Ke<tt;Ke++)Xt(Xe[Ke],K,se,j)}function wn(D,K,se,j){const le=D.opaque,Xe=D.transmissive,Ke=D.transparent;T.setupLightsView(se),ge===!0&&ne.setGlobalState(g.clippingPlanes,se),Xe.length>0&&zt(le,Xe,K,se),j&&qe.viewport(Y.copy(j)),le.length>0&&xn(le,K,se),Xe.length>0&&xn(Xe,K,se),Ke.length>0&&xn(Ke,K,se),qe.buffers.depth.setTest(!0),qe.buffers.depth.setMask(!0),qe.buffers.color.setMask(!0),qe.setPolygonOffset(!1)}function zt(D,K,se,j){if(Ae===null){const tt=be.isWebGL2;Ae=new Li(1024,1024,{generateMipmaps:!0,type:De.has("EXT_color_buffer_half_float")?Ls:hr,minFilter:fr,samples:tt&&l===!0?4:0})}const le=g.getRenderTarget();g.setRenderTarget(Ae),g.clear();const Xe=g.toneMapping;g.toneMapping=Ri,xn(D,se,j),ot.updateMultisampleRenderTarget(Ae),ot.updateRenderTargetMipmap(Ae);let Ke=!1;for(let tt=0,ut=K.length;tt<ut;tt++){const at=K[tt],ft=at.object,ht=at.geometry,Tt=at.material,nn=at.group;if(Tt.side===Xn&&ft.layers.test(j.layers)){const Rn=Tt.side;Tt.side=vn,Tt.needsUpdate=!0,On(ft,se,j,ht,Tt,nn),Tt.side=Rn,Tt.needsUpdate=!0,Ke=!0}}Ke===!0&&(ot.updateMultisampleRenderTarget(Ae),ot.updateRenderTargetMipmap(Ae)),g.setRenderTarget(le),g.toneMapping=Xe}function xn(D,K,se){const j=K.isScene===!0?K.overrideMaterial:null;for(let le=0,Xe=D.length;le<Xe;le++){const Ke=D[le],tt=Ke.object,ut=Ke.geometry,at=j===null?Ke.material:j,ft=Ke.group;tt.layers.test(se.layers)&&On(tt,K,se,ut,at,ft)}}function On(D,K,se,j,le,Xe){D.onBeforeRender(g,K,se,j,le,Xe),D.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),le.onBeforeRender(g,K,se,j,D,Xe),le.transparent===!0&&le.side===Xn&&le.forceSinglePass===!1?(le.side=vn,le.needsUpdate=!0,g.renderBufferDirect(se,K,j,le,D,Xe),le.side=Ci,le.needsUpdate=!0,g.renderBufferDirect(se,K,j,le,D,Xe),le.side=Xn):g.renderBufferDirect(se,K,j,le,D,Xe),D.onAfterRender(g,K,se,j,le,Xe)}function Wi(D,K,se){K.isScene!==!0&&(K=Z);const j=Oe.get(D),le=T.state.lights,Xe=T.state.shadowsArray,Ke=le.state.version,tt=Ut.getParameters(D,le.state,Xe,K,se),ut=Ut.getProgramCacheKey(tt);let at=j.programs;j.environment=D.isMeshStandardMaterial?K.environment:null,j.fog=K.fog,j.envMap=(D.isMeshStandardMaterial?Ie:Nt).get(D.envMap||j.environment),at===void 0&&(D.addEventListener("dispose",It),at=new Map,j.programs=at);let ft=at.get(ut);if(ft!==void 0){if(j.currentProgram===ft&&j.lightsStateVersion===Ke)return zs(D,tt),ft}else tt.uniforms=Ut.getUniforms(D),D.onBuild(se,tt,g),D.onBeforeCompile(tt,g),ft=Ut.acquireProgram(tt,ut),at.set(ut,ft),j.uniforms=tt.uniforms;const ht=j.uniforms;(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(ht.clippingPlanes=ne.uniform),zs(D,tt),j.needsLights=ka(D),j.lightsStateVersion=Ke,j.needsLights&&(ht.ambientLightColor.value=le.state.ambient,ht.lightProbe.value=le.state.probe,ht.directionalLights.value=le.state.directional,ht.directionalLightShadows.value=le.state.directionalShadow,ht.spotLights.value=le.state.spot,ht.spotLightShadows.value=le.state.spotShadow,ht.rectAreaLights.value=le.state.rectArea,ht.ltc_1.value=le.state.rectAreaLTC1,ht.ltc_2.value=le.state.rectAreaLTC2,ht.pointLights.value=le.state.point,ht.pointLightShadows.value=le.state.pointShadow,ht.hemisphereLights.value=le.state.hemi,ht.directionalShadowMap.value=le.state.directionalShadowMap,ht.directionalShadowMatrix.value=le.state.directionalShadowMatrix,ht.spotShadowMap.value=le.state.spotShadowMap,ht.spotLightMatrix.value=le.state.spotLightMatrix,ht.spotLightMap.value=le.state.spotLightMap,ht.pointShadowMap.value=le.state.pointShadowMap,ht.pointShadowMatrix.value=le.state.pointShadowMatrix);const Tt=ft.getUniforms(),nn=Aa.seqWithValue(Tt.seq,ht);return j.currentProgram=ft,j.uniformsList=nn,ft}function zs(D,K){const se=Oe.get(D);se.outputColorSpace=K.outputColorSpace,se.instancing=K.instancing,se.skinning=K.skinning,se.morphTargets=K.morphTargets,se.morphNormals=K.morphNormals,se.morphColors=K.morphColors,se.morphTargetsCount=K.morphTargetsCount,se.numClippingPlanes=K.numClippingPlanes,se.numIntersection=K.numClipIntersection,se.vertexAlphas=K.vertexAlphas,se.vertexTangents=K.vertexTangents,se.toneMapping=K.toneMapping}function za(D,K,se,j,le){K.isScene!==!0&&(K=Z),ot.resetTextureUnits();const Xe=K.fog,Ke=j.isMeshStandardMaterial?K.environment:null,tt=I===null?g.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:ci,ut=(j.isMeshStandardMaterial?Ie:Nt).get(j.envMap||Ke),at=j.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,ft=!!j.normalMap&&!!se.attributes.tangent,ht=!!se.morphAttributes.position,Tt=!!se.morphAttributes.normal,nn=!!se.morphAttributes.color,Rn=j.toneMapped?g.toneMapping:Ri,Yn=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,Ht=Yn!==void 0?Yn.length:0,gt=Oe.get(j),mr=T.state.lights;if(ge===!0&&(Ne===!0||D!==H)){const an=D===H&&j.id===h;ne.setState(j,D,an)}let Wt=!1;j.version===gt.__version?(gt.needsLights&&gt.lightsStateVersion!==mr.state.version||gt.outputColorSpace!==tt||le.isInstancedMesh&&gt.instancing===!1||!le.isInstancedMesh&&gt.instancing===!0||le.isSkinnedMesh&&gt.skinning===!1||!le.isSkinnedMesh&&gt.skinning===!0||gt.envMap!==ut||j.fog===!0&&gt.fog!==Xe||gt.numClippingPlanes!==void 0&&(gt.numClippingPlanes!==ne.numPlanes||gt.numIntersection!==ne.numIntersection)||gt.vertexAlphas!==at||gt.vertexTangents!==ft||gt.morphTargets!==ht||gt.morphNormals!==Tt||gt.morphColors!==nn||gt.toneMapping!==Rn||be.isWebGL2===!0&&gt.morphTargetsCount!==Ht)&&(Wt=!0):(Wt=!0,gt.__version=j.version);let Kn=gt.currentProgram;Wt===!0&&(Kn=Wi(j,K,le));let rs=!1,qt=!1,ai=!1;const jt=Kn.getUniforms(),di=gt.uniforms;if(qe.useProgram(Kn.program)&&(rs=!0,qt=!0,ai=!0),j.id!==h&&(h=j.id,qt=!0),rs||H!==D){if(jt.setValue(F,"projectionMatrix",D.projectionMatrix),be.logarithmicDepthBuffer&&jt.setValue(F,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),H!==D&&(H=D,qt=!0,ai=!0),j.isShaderMaterial||j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshStandardMaterial||j.envMap){const an=jt.map.cameraPosition;an!==void 0&&an.setValue(F,pe.setFromMatrixPosition(D.matrixWorld))}(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&jt.setValue(F,"isOrthographic",D.isOrthographicCamera===!0),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial||j.isShadowMaterial||le.isSkinnedMesh)&&jt.setValue(F,"viewMatrix",D.matrixWorldInverse)}if(le.isSkinnedMesh){jt.setOptional(F,le,"bindMatrix"),jt.setOptional(F,le,"bindMatrixInverse");const an=le.skeleton;an&&(be.floatVertexTextures?(an.boneTexture===null&&an.computeBoneTexture(),jt.setValue(F,"boneTexture",an.boneTexture,ot),jt.setValue(F,"boneTextureSize",an.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const ss=se.morphAttributes;if((ss.position!==void 0||ss.normal!==void 0||ss.color!==void 0&&be.isWebGL2===!0)&&Pe.update(le,se,Kn),(qt||gt.receiveShadow!==le.receiveShadow)&&(gt.receiveShadow=le.receiveShadow,jt.setValue(F,"receiveShadow",le.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(di.envMap.value=ut,di.flipEnvMap.value=ut.isCubeTexture&&ut.isRenderTargetTexture===!1?-1:1),qt&&(jt.setValue(F,"toneMappingExposure",g.toneMappingExposure),gt.needsLights&&ks(di,ai),Xe&&j.fog===!0&&sn.refreshFogUniforms(di,Xe),sn.refreshMaterialUniforms(di,j,q,Q,Ae),Aa.upload(F,gt.uniformsList,di,ot)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Aa.upload(F,gt.uniformsList,di,ot),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&jt.setValue(F,"center",le.center),jt.setValue(F,"modelViewMatrix",le.modelViewMatrix),jt.setValue(F,"normalMatrix",le.normalMatrix),jt.setValue(F,"modelMatrix",le.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const an=j.uniformsGroups;for(let gr=0,_r=an.length;gr<_r;gr++)if(be.isWebGL2){const as=an[gr];ze.update(as,Kn),ze.bind(as,Kn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Kn}function ks(D,K){D.ambientLightColor.needsUpdate=K,D.lightProbe.needsUpdate=K,D.directionalLights.needsUpdate=K,D.directionalLightShadows.needsUpdate=K,D.pointLights.needsUpdate=K,D.pointLightShadows.needsUpdate=K,D.spotLights.needsUpdate=K,D.spotLightShadows.needsUpdate=K,D.rectAreaLights.needsUpdate=K,D.hemisphereLights.needsUpdate=K}function ka(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(D,K,se){Oe.get(D.texture).__webglTexture=K,Oe.get(D.depthTexture).__webglTexture=se;const j=Oe.get(D);j.__hasExternalTextures=!0,j.__hasExternalTextures&&(j.__autoAllocateDepthBuffer=se===void 0,j.__autoAllocateDepthBuffer||De.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(D,K){const se=Oe.get(D);se.__webglFramebuffer=K,se.__useDefaultFramebuffer=K===void 0},this.setRenderTarget=function(D,K=0,se=0){I=D,A=K,L=se;let j=!0,le=null,Xe=!1,Ke=!1;if(D){const ut=Oe.get(D);ut.__useDefaultFramebuffer!==void 0?(qe.bindFramebuffer(F.FRAMEBUFFER,null),j=!1):ut.__webglFramebuffer===void 0?ot.setupRenderTarget(D):ut.__hasExternalTextures&&ot.rebindTextures(D,Oe.get(D.texture).__webglTexture,Oe.get(D.depthTexture).__webglTexture);const at=D.texture;(at.isData3DTexture||at.isDataArrayTexture||at.isCompressedArrayTexture)&&(Ke=!0);const ft=Oe.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(le=ft[K],Xe=!0):be.isWebGL2&&D.samples>0&&ot.useMultisampledRTT(D)===!1?le=Oe.get(D).__webglMultisampledFramebuffer:le=ft,Y.copy(D.viewport),w.copy(D.scissor),U=D.scissorTest}else Y.copy(ye).multiplyScalar(q).floor(),w.copy(ue).multiplyScalar(q).floor(),U=de;if(qe.bindFramebuffer(F.FRAMEBUFFER,le)&&be.drawBuffers&&j&&qe.drawBuffers(D,le),qe.viewport(Y),qe.scissor(w),qe.setScissorTest(U),Xe){const ut=Oe.get(D.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+K,ut.__webglTexture,se)}else if(Ke){const ut=Oe.get(D.texture),at=K||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,ut.__webglTexture,se||0,at)}h=-1},this.readRenderTargetPixels=function(D,K,se,j,le,Xe,Ke){if(!(D&&D.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let tt=Oe.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Ke!==void 0&&(tt=tt[Ke]),tt){qe.bindFramebuffer(F.FRAMEBUFFER,tt);try{const ut=D.texture,at=ut.format,ft=ut.type;if(at!==Un&&ce.convert(at)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ht=ft===Ls&&(De.has("EXT_color_buffer_half_float")||be.isWebGL2&&De.has("EXT_color_buffer_float"));if(ft!==hr&&ce.convert(ft)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ft===Hi&&(be.isWebGL2||De.has("OES_texture_float")||De.has("WEBGL_color_buffer_float")))&&!ht){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=D.width-j&&se>=0&&se<=D.height-le&&F.readPixels(K,se,j,le,ce.convert(at),ce.convert(ft),Xe)}finally{const ut=I!==null?Oe.get(I).__webglFramebuffer:null;qe.bindFramebuffer(F.FRAMEBUFFER,ut)}}},this.copyFramebufferToTexture=function(D,K,se=0){const j=Math.pow(2,-se),le=Math.floor(K.image.width*j),Xe=Math.floor(K.image.height*j);ot.setTexture2D(K,0),F.copyTexSubImage2D(F.TEXTURE_2D,se,0,0,D.x,D.y,le,Xe),qe.unbindTexture()},this.copyTextureToTexture=function(D,K,se,j=0){const le=K.image.width,Xe=K.image.height,Ke=ce.convert(se.format),tt=ce.convert(se.type);ot.setTexture2D(se,0),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,se.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,se.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,se.unpackAlignment),K.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,j,D.x,D.y,le,Xe,Ke,tt,K.image.data):K.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,j,D.x,D.y,K.mipmaps[0].width,K.mipmaps[0].height,Ke,K.mipmaps[0].data):F.texSubImage2D(F.TEXTURE_2D,j,D.x,D.y,Ke,tt,K.image),j===0&&se.generateMipmaps&&F.generateMipmap(F.TEXTURE_2D),qe.unbindTexture()},this.copyTextureToTexture3D=function(D,K,se,j,le=0){if(g.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Xe=D.max.x-D.min.x+1,Ke=D.max.y-D.min.y+1,tt=D.max.z-D.min.z+1,ut=ce.convert(j.format),at=ce.convert(j.type);let ft;if(j.isData3DTexture)ot.setTexture3D(j,0),ft=F.TEXTURE_3D;else if(j.isDataArrayTexture)ot.setTexture2DArray(j,0),ft=F.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,j.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,j.unpackAlignment);const ht=F.getParameter(F.UNPACK_ROW_LENGTH),Tt=F.getParameter(F.UNPACK_IMAGE_HEIGHT),nn=F.getParameter(F.UNPACK_SKIP_PIXELS),Rn=F.getParameter(F.UNPACK_SKIP_ROWS),Yn=F.getParameter(F.UNPACK_SKIP_IMAGES),Ht=se.isCompressedTexture?se.mipmaps[0]:se.image;F.pixelStorei(F.UNPACK_ROW_LENGTH,Ht.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Ht.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,D.min.x),F.pixelStorei(F.UNPACK_SKIP_ROWS,D.min.y),F.pixelStorei(F.UNPACK_SKIP_IMAGES,D.min.z),se.isDataTexture||se.isData3DTexture?F.texSubImage3D(ft,le,K.x,K.y,K.z,Xe,Ke,tt,ut,at,Ht.data):se.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),F.compressedTexSubImage3D(ft,le,K.x,K.y,K.z,Xe,Ke,tt,ut,Ht.data)):F.texSubImage3D(ft,le,K.x,K.y,K.z,Xe,Ke,tt,ut,at,Ht),F.pixelStorei(F.UNPACK_ROW_LENGTH,ht),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Tt),F.pixelStorei(F.UNPACK_SKIP_PIXELS,nn),F.pixelStorei(F.UNPACK_SKIP_ROWS,Rn),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Yn),le===0&&j.generateMipmaps&&F.generateMipmap(ft),qe.unbindTexture()},this.initTexture=function(D){D.isCubeTexture?ot.setTextureCube(D,0):D.isData3DTexture?ot.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?ot.setTexture2DArray(D,0):ot.setTexture2D(D,0),qe.unbindTexture()},this.resetState=function(){A=0,L=0,I=null,qe.reset(),Ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===it?cr:tf}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===cr?it:ci}}class Bv extends Mf{}Bv.prototype.isWebGL1Renderer=!0;class Sf extends Bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class zv{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=jo,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=ri()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ri()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ri()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const mn=new k;class hl{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)mn.fromBufferAttribute(this,t),mn.applyMatrix4(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)mn.fromBufferAttribute(this,t),mn.applyNormalMatrix(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)mn.fromBufferAttribute(this,t),mn.transformDirection(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}setX(e,t){return this.normalized&&(t=Pt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=wi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=wi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=wi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=wi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array),i=Pt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array),i=Pt(i,this.array),s=Pt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Gt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new hl(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const lu=new k,cu=new Dt,uu=new Dt,kv=new k,fu=new mt,Nr=new k,Po=new fi;class Hv extends on{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new mt,this.bindMatrixInverse=new mt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new ui),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)Nr.fromBufferAttribute(t,n),this.applyBoneTransform(n,Nr),this.boundingBox.expandByPoint(Nr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new fi),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)Nr.fromBufferAttribute(t,n),this.applyBoneTransform(n,Nr),this.boundingSphere.expandByPoint(Nr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}raycast(e,t){this.boundingSphere===null&&this.computeBoundingSphere(),Po.copy(this.boundingSphere),Po.applyMatrix4(this.matrixWorld),e.ray.intersectsSphere(Po)!==!1&&this._computeIntersections(e,t)}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Dt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;cu.fromBufferAttribute(i.attributes.skinIndex,e),uu.fromBufferAttribute(i.attributes.skinWeight,e),lu.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=uu.getComponent(s);if(o!==0){const l=cu.getComponent(s);fu.multiplyMatrices(n.bones[l].matrixWorld,n.boneInverses[l]),t.addScaledVector(kv.copy(lu).applyMatrix4(fu),o)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}}class Tf extends Bt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Gv extends ln{constructor(e=null,t=1,n=1,i,s,o,l,f,u=Jt,p=Jt,m,v){super(null,o,l,f,u,p,i,s,m,v),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const hu=new mt,Vv=new mt;class dl{constructor(e=[],t=[]){this.uuid=ri(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new mt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new mt;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const l=e[s]?e[s].matrixWorld:Vv;hu.multiplyMatrices(l,t[s]),hu.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new dl(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=rf(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Gv(t,e,e,Un,Hi);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new Tf),this.bones.push(o),this.boneInverses.push(new mt().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const o=t[i];e.bones.push(o.uuid);const l=n[i];e.boneInverses.push(l.toArray())}return e}}class Hn extends Gt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ur=new mt,du=new mt,pa=[],pu=new ui,Wv=new mt,vs=new on,xs=new fi;class Xv extends on{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Hn(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Wv)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ui),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ur),pu.copy(e.boundingBox).applyMatrix4(Ur),this.boundingBox.union(pu)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new fi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ur),xs.copy(e.boundingSphere).applyMatrix4(Ur),this.boundingSphere.union(xs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(vs.geometry=this.geometry,vs.material=this.material,vs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),xs.copy(this.boundingSphere),xs.applyMatrix4(n),e.ray.intersectsSphere(xs)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Ur),du.multiplyMatrices(n,Ur),vs.matrixWorld=du,vs.raycast(e,pa);for(let o=0,l=pa.length;o<l;o++){const f=pa[o];f.instanceId=s,f.object=this,t.push(f)}pa.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Hn(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Ef extends jn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Qe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const mu=new k,gu=new k,_u=new mt,Do=new Ua,ma=new fi;class pl extends Bt{constructor(e=new pn,t=new Ef){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)mu.fromBufferAttribute(t,i-1),gu.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=mu.distanceTo(gu);e.setAttribute("lineDistance",new Qt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ma.copy(n.boundingSphere),ma.applyMatrix4(i),ma.radius+=s,e.ray.intersectsSphere(ma)===!1)return;_u.copy(i).invert(),Do.copy(e.ray).applyMatrix4(_u);const l=s/((this.scale.x+this.scale.y+this.scale.z)/3),f=l*l,u=new k,p=new k,m=new k,v=new k,x=this.isLineSegments?2:1,T=n.index,y=n.attributes.position;if(T!==null){const g=Math.max(0,o.start),C=Math.min(T.count,o.start+o.count);for(let A=g,L=C-1;A<L;A+=x){const I=T.getX(A),h=T.getX(A+1);if(u.fromBufferAttribute(y,I),p.fromBufferAttribute(y,h),Do.distanceSqToSegment(u,p,v,m)>f)continue;v.applyMatrix4(this.matrixWorld);const Y=e.ray.origin.distanceTo(v);Y<e.near||Y>e.far||t.push({distance:Y,point:m.clone().applyMatrix4(this.matrixWorld),index:A,face:null,faceIndex:null,object:this})}}else{const g=Math.max(0,o.start),C=Math.min(y.count,o.start+o.count);for(let A=g,L=C-1;A<L;A+=x){if(u.fromBufferAttribute(y,A),p.fromBufferAttribute(y,A+1),Do.distanceSqToSegment(u,p,v,m)>f)continue;v.applyMatrix4(this.matrixWorld);const h=e.ray.origin.distanceTo(v);h<e.near||h>e.far||t.push({distance:h,point:m.clone().applyMatrix4(this.matrixWorld),index:A,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const l=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}}const vu=new k,xu=new k;class qv extends pl{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)vu.fromBufferAttribute(t,i),xu.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+vu.distanceTo(xu);e.setAttribute("lineDistance",new Qt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class jv extends pl{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class ml extends jn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Qe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const yu=new mt,Zo=new Ua,ga=new fi,_a=new k;class Jo extends Bt{constructor(e=new pn,t=new ml){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ga.copy(n.boundingSphere),ga.applyMatrix4(i),ga.radius+=s,e.ray.intersectsSphere(ga)===!1)return;yu.copy(i).invert(),Zo.copy(e.ray).applyMatrix4(yu);const l=s/((this.scale.x+this.scale.y+this.scale.z)/3),f=l*l,u=n.index,m=n.attributes.position;if(u!==null){const v=Math.max(0,o.start),x=Math.min(u.count,o.start+o.count);for(let T=v,E=x;T<E;T++){const y=u.getX(T);_a.fromBufferAttribute(m,y),Mu(_a,y,f,i,e,t,this)}}else{const v=Math.max(0,o.start),x=Math.min(m.count,o.start+o.count);for(let T=v,E=x;T<E;T++)_a.fromBufferAttribute(m,T),Mu(_a,T,f,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const l=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}}function Mu(r,e,t,n,i,s,o){const l=Zo.distanceSqToPoint(r);if(l<t){const f=new k;Zo.closestPointToPoint(r,f),f.applyMatrix4(n);const u=i.ray.origin.distanceTo(f);if(u<i.near||u>i.far)return;s.push({distance:u,distanceToRay:Math.sqrt(l),point:f,index:e,face:null,object:o})}}class gl extends pn{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const s=[],o=[];l(i),u(n),p(),this.setAttribute("position",new Qt(s,3)),this.setAttribute("normal",new Qt(s.slice(),3)),this.setAttribute("uv",new Qt(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function l(C){const A=new k,L=new k,I=new k;for(let h=0;h<t.length;h+=3)x(t[h+0],A),x(t[h+1],L),x(t[h+2],I),f(A,L,I,C)}function f(C,A,L,I){const h=I+1,H=[];for(let Y=0;Y<=h;Y++){H[Y]=[];const w=C.clone().lerp(L,Y/h),U=A.clone().lerp(L,Y/h),fe=h-Y;for(let Q=0;Q<=fe;Q++)Q===0&&Y===h?H[Y][Q]=w:H[Y][Q]=w.clone().lerp(U,Q/fe)}for(let Y=0;Y<h;Y++)for(let w=0;w<2*(h-Y)-1;w++){const U=Math.floor(w/2);w%2===0?(v(H[Y][U+1]),v(H[Y+1][U]),v(H[Y][U])):(v(H[Y][U+1]),v(H[Y+1][U+1]),v(H[Y+1][U]))}}function u(C){const A=new k;for(let L=0;L<s.length;L+=3)A.x=s[L+0],A.y=s[L+1],A.z=s[L+2],A.normalize().multiplyScalar(C),s[L+0]=A.x,s[L+1]=A.y,s[L+2]=A.z}function p(){const C=new k;for(let A=0;A<s.length;A+=3){C.x=s[A+0],C.y=s[A+1],C.z=s[A+2];const L=y(C)/2/Math.PI+.5,I=g(C)/Math.PI+.5;o.push(L,1-I)}T(),m()}function m(){for(let C=0;C<o.length;C+=6){const A=o[C+0],L=o[C+2],I=o[C+4],h=Math.max(A,L,I),H=Math.min(A,L,I);h>.9&&H<.1&&(A<.2&&(o[C+0]+=1),L<.2&&(o[C+2]+=1),I<.2&&(o[C+4]+=1))}}function v(C){s.push(C.x,C.y,C.z)}function x(C,A){const L=C*3;A.x=e[L+0],A.y=e[L+1],A.z=e[L+2]}function T(){const C=new k,A=new k,L=new k,I=new k,h=new ct,H=new ct,Y=new ct;for(let w=0,U=0;w<s.length;w+=9,U+=6){C.set(s[w+0],s[w+1],s[w+2]),A.set(s[w+3],s[w+4],s[w+5]),L.set(s[w+6],s[w+7],s[w+8]),h.set(o[U+0],o[U+1]),H.set(o[U+2],o[U+3]),Y.set(o[U+4],o[U+5]),I.copy(C).add(A).add(L).divideScalar(3);const fe=y(I);E(h,U+0,C,fe),E(H,U+2,A,fe),E(Y,U+4,L,fe)}}function E(C,A,L,I){I<0&&C.x===1&&(o[A]=C.x-1),L.x===0&&L.z===0&&(o[A]=I/2/Math.PI+.5)}function y(C){return Math.atan2(C.z,-C.x)}function g(C){return Math.atan2(-C.y,Math.sqrt(C.x*C.x+C.z*C.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gl(e.vertices,e.indices,e.radius,e.details)}}class _l extends gl{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new _l(e.radius,e.detail)}}class vl extends pn{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,o=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:l},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const f=Math.min(o+l,Math.PI);let u=0;const p=[],m=new k,v=new k,x=[],T=[],E=[],y=[];for(let g=0;g<=n;g++){const C=[],A=g/n;let L=0;g===0&&o===0?L=.5/t:g===n&&f===Math.PI&&(L=-.5/t);for(let I=0;I<=t;I++){const h=I/t;m.x=-e*Math.cos(i+h*s)*Math.sin(o+A*l),m.y=e*Math.cos(o+A*l),m.z=e*Math.sin(i+h*s)*Math.sin(o+A*l),T.push(m.x,m.y,m.z),v.copy(m).normalize(),E.push(v.x,v.y,v.z),y.push(h+L,1-A),C.push(u++)}p.push(C)}for(let g=0;g<n;g++)for(let C=0;C<t;C++){const A=p[g][C+1],L=p[g][C],I=p[g+1][C],h=p[g+1][C+1];(g!==0||o>0)&&x.push(A,L,h),(g!==n-1||f<Math.PI)&&x.push(L,I,h)}this.setIndex(x),this.setAttribute("position",new Qt(T,3)),this.setAttribute("normal",new Qt(E,3)),this.setAttribute("uv",new Qt(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vl(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Io extends Fn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class xl extends jn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Na,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class pr extends xl{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ct(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return dn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Qe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Qe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Qe(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Su extends jn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Qe(16777215),this.specular=new Qe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Na,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Da,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class No extends jn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Na,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Da,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}function Oi(r,e,t){return bf(r)?new r.constructor(r.subarray(e,t!==void 0?t:r.length)):r.slice(e,t)}function va(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function bf(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Yv(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Tu(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){const l=t[s]*e;for(let f=0;f!==e;++f)i[o++]=r[l+f]}return i}function Af(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=r[i++];while(s!==void 0)}class Fs{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let l=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===l)break;if(s=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=s)){const l=t[1];e<l&&(n=2,s=l);for(let f=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===f)break;if(i=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){const l=n+o>>>1;e<t[l]?o=l:n=l+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Kv extends Fs{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:yc,endingEnd:yc}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,o=e+1,l=i[s],f=i[o];if(l===void 0)switch(this.getSettings_().endingStart){case Mc:s=e,l=2*t-n;break;case Sc:s=i.length-2,l=t+i[s]-i[s+1];break;default:s=e,l=n}if(f===void 0)switch(this.getSettings_().endingEnd){case Mc:o=e,f=2*n-t;break;case Sc:o=1,f=n+i[1]-i[0];break;default:o=e-1,f=t}const u=(n-t)*.5,p=this.valueSize;this._weightPrev=u/(t-l),this._weightNext=u/(f-n),this._offsetPrev=s*p,this._offsetNext=o*p}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,l=this.valueSize,f=e*l,u=f-l,p=this._offsetPrev,m=this._offsetNext,v=this._weightPrev,x=this._weightNext,T=(n-t)/(i-t),E=T*T,y=E*T,g=-v*y+2*v*E-v*T,C=(1+v)*y+(-1.5-2*v)*E+(-.5+v)*T+1,A=(-1-x)*y+(1.5+x)*E+.5*T,L=x*y-x*E;for(let I=0;I!==l;++I)s[I]=g*o[p+I]+C*o[u+I]+A*o[f+I]+L*o[m+I];return s}}class $v extends Fs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,l=this.valueSize,f=e*l,u=f-l,p=(n-t)/(i-t),m=1-p;for(let v=0;v!==l;++v)s[v]=o[u+v]*m+o[f+v]*p;return s}}class Zv extends Fs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class hi{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=va(t,this.TimeBufferType),this.values=va(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:va(e.times,Array),values:va(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Zv(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new $v(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Kv(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ps:t=this.InterpolantFactoryMethodDiscrete;break;case jr:t=this.InterpolantFactoryMethodLinear;break;case oo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ps;case this.InterpolantFactoryMethodLinear:return jr;case this.InterpolantFactoryMethodSmooth:return oo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);const l=this.getValueSize();this.times=Oi(n,s,o),this.values=Oi(this.values,s*l,o*l)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let l=0;l!==s;l++){const f=n[l];if(typeof f=="number"&&isNaN(f)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,l,f),e=!1;break}if(o!==null&&o>f){console.error("THREE.KeyframeTrack: Out of order keys.",this,l,f,o),e=!1;break}o=f}if(i!==void 0&&bf(i))for(let l=0,f=i.length;l!==f;++l){const u=i[l];if(isNaN(u)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,l,u),e=!1;break}}return e}optimize(){const e=Oi(this.times),t=Oi(this.values),n=this.getValueSize(),i=this.getInterpolation()===oo,s=e.length-1;let o=1;for(let l=1;l<s;++l){let f=!1;const u=e[l],p=e[l+1];if(u!==p&&(l!==1||u!==e[0]))if(i)f=!0;else{const m=l*n,v=m-n,x=m+n;for(let T=0;T!==n;++T){const E=t[m+T];if(E!==t[v+T]||E!==t[x+T]){f=!0;break}}}if(f){if(l!==o){e[o]=e[l];const m=l*n,v=o*n;for(let x=0;x!==n;++x)t[v+x]=t[m+x]}++o}}if(s>0){e[o]=e[s];for(let l=s*n,f=o*n,u=0;u!==n;++u)t[f+u]=t[l+u];++o}return o!==e.length?(this.times=Oi(e,0,o),this.values=Oi(t,0,o*n)):(this.times=e,this.values=t),this}clone(){const e=Oi(this.times,0),t=Oi(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}hi.prototype.TimeBufferType=Float32Array;hi.prototype.ValueBufferType=Float32Array;hi.prototype.DefaultInterpolation=jr;class es extends hi{}es.prototype.ValueTypeName="bool";es.prototype.ValueBufferType=Array;es.prototype.DefaultInterpolation=Ps;es.prototype.InterpolantFactoryMethodLinear=void 0;es.prototype.InterpolantFactoryMethodSmooth=void 0;class wf extends hi{}wf.prototype.ValueTypeName="color";class Is extends hi{}Is.prototype.ValueTypeName="number";class Jv extends Fs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,l=this.valueSize,f=(n-t)/(i-t);let u=e*l;for(let p=u+l;u!==p;u+=4)si.slerpFlat(s,0,o,u-l,o,u,f);return s}}class dr extends hi{InterpolantFactoryMethodLinear(e){return new Jv(this.times,this.values,this.getValueSize(),e)}}dr.prototype.ValueTypeName="quaternion";dr.prototype.DefaultInterpolation=jr;dr.prototype.InterpolantFactoryMethodSmooth=void 0;class ts extends hi{}ts.prototype.ValueTypeName="string";ts.prototype.ValueBufferType=Array;ts.prototype.DefaultInterpolation=Ps;ts.prototype.InterpolantFactoryMethodLinear=void 0;ts.prototype.InterpolantFactoryMethodSmooth=void 0;class Ns extends hi{}Ns.prototype.ValueTypeName="vector";class Qv{constructor(e,t=-1,n,i=vd){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=ri(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,l=n.length;o!==l;++o)t.push(tx(n[o]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=n.length;s!==o;++s)t.push(hi.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,o=[];for(let l=0;l<s;l++){let f=[],u=[];f.push((l+s-1)%s,l,(l+1)%s),u.push(0,1,0);const p=Yv(f);f=Tu(f,1,p),u=Tu(u,1,p),!i&&f[0]===0&&(f.push(s),u.push(u[0])),o.push(new Is(".morphTargetInfluences["+t[l].name+"]",f,u).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let l=0,f=e.length;l<f;l++){const u=e[l],p=u.name.match(s);if(p&&p.length>1){const m=p[1];let v=i[m];v||(i[m]=v=[]),v.push(u)}}const o=[];for(const l in i)o.push(this.CreateFromMorphTargetSequence(l,i[l],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(m,v,x,T,E){if(x.length!==0){const y=[],g=[];Af(x,y,g,T),y.length!==0&&E.push(new m(v,y,g))}},i=[],s=e.name||"default",o=e.fps||30,l=e.blendMode;let f=e.length||-1;const u=e.hierarchy||[];for(let m=0;m<u.length;m++){const v=u[m].keys;if(!(!v||v.length===0))if(v[0].morphTargets){const x={};let T;for(T=0;T<v.length;T++)if(v[T].morphTargets)for(let E=0;E<v[T].morphTargets.length;E++)x[v[T].morphTargets[E]]=-1;for(const E in x){const y=[],g=[];for(let C=0;C!==v[T].morphTargets.length;++C){const A=v[T];y.push(A.time),g.push(A.morphTarget===E?1:0)}i.push(new Is(".morphTargetInfluence["+E+"]",y,g))}f=x.length*o}else{const x=".bones["+t[m].name+"]";n(Ns,x+".position",v,"pos",i),n(dr,x+".quaternion",v,"rot",i),n(Ns,x+".scale",v,"scl",i)}}return i.length===0?null:new this(s,f,i,l)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function ex(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Is;case"vector":case"vector2":case"vector3":case"vector4":return Ns;case"color":return wf;case"quaternion":return dr;case"bool":case"boolean":return es;case"string":return ts}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function tx(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=ex(r.type);if(r.times===void 0){const t=[],n=[];Af(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const Zr={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class nx{constructor(e,t,n){const i=this;let s=!1,o=0,l=0,f;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(p){l++,s===!1&&i.onStart!==void 0&&i.onStart(p,o,l),s=!0},this.itemEnd=function(p){o++,i.onProgress!==void 0&&i.onProgress(p,o,l),o===l&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(p){i.onError!==void 0&&i.onError(p)},this.resolveURL=function(p){return f?f(p):p},this.setURLModifier=function(p){return f=p,this},this.addHandler=function(p,m){return u.push(p,m),this},this.removeHandler=function(p){const m=u.indexOf(p);return m!==-1&&u.splice(m,2),this},this.getHandler=function(p){for(let m=0,v=u.length;m<v;m+=2){const x=u[m],T=u[m+1];if(x.global&&(x.lastIndex=0),x.test(p))return T}return null}}}const ix=new nx;class Os{constructor(e){this.manager=e!==void 0?e:ix,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const Si={};class rx extends Error{constructor(e,t){super(e),this.response=t}}class Rf extends Os{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Zr.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Si[e]!==void 0){Si[e].push({onLoad:t,onProgress:n,onError:i});return}Si[e]=[],Si[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),l=this.mimeType,f=this.responseType;fetch(o).then(u=>{if(u.status===200||u.status===0){if(u.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||u.body===void 0||u.body.getReader===void 0)return u;const p=Si[e],m=u.body.getReader(),v=u.headers.get("Content-Length")||u.headers.get("X-File-Size"),x=v?parseInt(v):0,T=x!==0;let E=0;const y=new ReadableStream({start(g){C();function C(){m.read().then(({done:A,value:L})=>{if(A)g.close();else{E+=L.byteLength;const I=new ProgressEvent("progress",{lengthComputable:T,loaded:E,total:x});for(let h=0,H=p.length;h<H;h++){const Y=p[h];Y.onProgress&&Y.onProgress(I)}g.enqueue(L),C()}})}}});return new Response(y)}else throw new rx(`fetch for "${u.url}" responded with ${u.status}: ${u.statusText}`,u)}).then(u=>{switch(f){case"arraybuffer":return u.arrayBuffer();case"blob":return u.blob();case"document":return u.text().then(p=>new DOMParser().parseFromString(p,l));case"json":return u.json();default:if(l===void 0)return u.text();{const m=/charset="?([^;"\s]*)"?/i.exec(l),v=m&&m[1]?m[1].toLowerCase():void 0,x=new TextDecoder(v);return u.arrayBuffer().then(T=>x.decode(T))}}}).then(u=>{Zr.add(e,u);const p=Si[e];delete Si[e];for(let m=0,v=p.length;m<v;m++){const x=p[m];x.onLoad&&x.onLoad(u)}}).catch(u=>{const p=Si[e];if(p===void 0)throw this.manager.itemError(e),u;delete Si[e];for(let m=0,v=p.length;m<v;m++){const x=p[m];x.onError&&x.onError(u)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class sx extends Os{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Zr.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const l=Ds("img");function f(){p(),Zr.add(e,this),t&&t(this),s.manager.itemEnd(e)}function u(m){p(),i&&i(m),s.manager.itemError(e),s.manager.itemEnd(e)}function p(){l.removeEventListener("load",f,!1),l.removeEventListener("error",u,!1)}return l.addEventListener("load",f,!1),l.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(l.crossOrigin=this.crossOrigin),s.manager.itemStart(e),l.src=e,l}}class La extends Os{constructor(e){super(e)}load(e,t,n,i){const s=new ln,o=new sx(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(l){s.image=l,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class Ba extends Bt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Qe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Uo=new mt,Eu=new k,bu=new k;class yl{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ct(512,512),this.map=null,this.mapPass=null,this.matrix=new mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new cl,this._frameExtents=new ct(1,1),this._viewportCount=1,this._viewports=[new Dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Eu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Eu),bu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(bu),t.updateMatrixWorld(),Uo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Uo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Uo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class ax extends yl{constructor(){super(new _n(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Yr*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class ox extends Ba{constructor(e,t,n=0,i=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Bt.DEFAULT_UP),this.updateMatrix(),this.target=new Bt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new ax}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Au=new mt,ys=new k,Fo=new k;class lx extends yl{constructor(){super(new _n(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ct(4,2),this._viewportCount=6,this._viewports=[new Dt(2,1,1,1),new Dt(0,1,1,1),new Dt(3,1,1,1),new Dt(1,1,1,1),new Dt(3,0,1,1),new Dt(1,0,1,1)],this._cubeDirections=[new k(1,0,0),new k(-1,0,0),new k(0,0,1),new k(0,0,-1),new k(0,1,0),new k(0,-1,0)],this._cubeUps=[new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,0,1),new k(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),ys.setFromMatrixPosition(e.matrixWorld),n.position.copy(ys),Fo.copy(n.position),Fo.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Fo),n.updateMatrixWorld(),i.makeTranslation(-ys.x,-ys.y,-ys.z),Au.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Au)}}class wa extends Ba{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new lx}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class cx extends yl{constructor(){super(new Fa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ux extends Ba{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Bt.DEFAULT_UP),this.updateMatrix(),this.target=new Bt,this.shadow=new cx}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class wu extends Ba{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Qo{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Oo extends pn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class fx extends Os{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Zr.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const l={};l.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",l.headers=this.requestHeader,fetch(e,l).then(function(f){return f.blob()}).then(function(f){return createImageBitmap(f,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(f){Zr.add(e,f),t&&t(f),s.manager.itemEnd(e)}).catch(function(f){i&&i(f),s.manager.itemError(e),s.manager.itemEnd(e)}),s.manager.itemStart(e)}}class Cf{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ru(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Ru();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Ru(){return(typeof performance>"u"?Date:performance).now()}const Ml="\\[\\]\\.:\\/",hx=new RegExp("["+Ml+"]","g"),Sl="[^"+Ml+"]",dx="[^"+Ml.replace("\\.","")+"]",px=/((?:WC+[\/:])*)/.source.replace("WC",Sl),mx=/(WCOD+)?/.source.replace("WCOD",dx),gx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Sl),_x=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Sl),vx=new RegExp("^"+px+mx+gx+_x+"$"),xx=["material","materials","bones","map"];class yx{constructor(e,t,n){const i=n||wt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class wt{constructor(e,t,n){this.path=t,this.parsedPath=n||wt.parseTrackName(t),this.node=wt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new wt.Composite(e,t,n):new wt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(hx,"")}static parseTrackName(e){const t=vx.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);xx.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const l=s[o];if(l.name===t||l.uuid===t)return l;const f=n(l.children);if(f)return f}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=wt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let u=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let p=0;p<e.length;p++)if(e[p].name===u){u=p;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(u!==void 0){if(e[u]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[u]}}const o=e[i];if(o===void 0){const u=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+u+"."+i+" but it wasn't found.",e);return}let l=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?l=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let f=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}f=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(f=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(f=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[f],this.setValue=this.SetterByBindingTypeAndVersioning[f][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}wt.Composite=yx;wt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};wt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};wt.prototype.GetterByBindingType=[wt.prototype._getValue_direct,wt.prototype._getValue_array,wt.prototype._getValue_arrayElement,wt.prototype._getValue_toArray];wt.prototype.SetterByBindingTypeAndVersioning=[[wt.prototype._setValue_direct,wt.prototype._setValue_direct_setNeedsUpdate,wt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_array,wt.prototype._setValue_array_setNeedsUpdate,wt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_arrayElement,wt.prototype._setValue_arrayElement_setNeedsUpdate,wt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_fromArray,wt.prototype._setValue_fromArray_setNeedsUpdate,wt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Mx{constructor(e,t,n=0,i=1/0){this.ray=new Ua(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new ol,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return el(e,this,n,t),n.sort(Cu),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)el(e[i],this,n,t);return n.sort(Cu),n}}function Cu(r,e){return r.distance-e.distance}function el(r,e,t,n){if(r.layers.test(e.layers)&&r.raycast(e,t),n===!0){const i=r.children;for(let s=0,o=i.length;s<o;s++)el(i[s],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:sl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=sl);function Sx(r,e=1e-4){e=Math.max(e,Number.EPSILON);const t={},n=r.getIndex(),i=r.getAttribute("position"),s=n?n.count:i.count;let o=0;const l=Object.keys(r.attributes),f={},u={},p=[],m=["getX","getY","getZ","getW"],v=["setX","setY","setZ","setW"];for(let y=0,g=l.length;y<g;y++){const C=l[y],A=r.attributes[C];f[C]=new Gt(new A.array.constructor(A.count*A.itemSize),A.itemSize,A.normalized);const L=r.morphAttributes[C];L&&(u[C]=new Gt(new L.array.constructor(L.count*L.itemSize),L.itemSize,L.normalized))}const x=Math.log10(1/e),T=Math.pow(10,x);for(let y=0;y<s;y++){const g=n?n.getX(y):y;let C="";for(let A=0,L=l.length;A<L;A++){const I=l[A],h=r.getAttribute(I),H=h.itemSize;for(let Y=0;Y<H;Y++)C+=`${~~(h[m[Y]](g)*T)},`}if(C in t)p.push(t[C]);else{for(let A=0,L=l.length;A<L;A++){const I=l[A],h=r.getAttribute(I),H=r.morphAttributes[I],Y=h.itemSize,w=f[I],U=u[I];for(let fe=0;fe<Y;fe++){const Q=m[fe],q=v[fe];if(w[q](o,h[Q](g)),H)for(let te=0,ee=H.length;te<ee;te++)U[te][q](o,H[te][Q](g))}}t[C]=o,p.push(o),o++}}const E=r.clone();for(const y in r.attributes){const g=f[y];if(E.setAttribute(y,new Gt(g.array.slice(0,o*g.itemSize),g.itemSize,g.normalized)),y in u)for(let C=0;C<u[y].length;C++){const A=u[y][C];E.morphAttributes[y][C]=new Gt(A.array.slice(0,o*A.itemSize),A.itemSize,A.normalized)}}return E.setIndex(p),E}function Lu(r,e){if(e===xd)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===qo||e===ef){let t=r.getIndex();if(t===null){const o=[],l=r.getAttribute("position");if(l!==void 0){for(let f=0;f<l.count;f++)o.push(f);r.setIndex(o),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(e===qo)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}class Tx extends Os{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Rx(t)}),this.register(function(t){return new Ux(t)}),this.register(function(t){return new Fx(t)}),this.register(function(t){return new Ox(t)}),this.register(function(t){return new Lx(t)}),this.register(function(t){return new Px(t)}),this.register(function(t){return new Dx(t)}),this.register(function(t){return new Ix(t)}),this.register(function(t){return new wx(t)}),this.register(function(t){return new Nx(t)}),this.register(function(t){return new Cx(t)}),this.register(function(t){return new bx(t)}),this.register(function(t){return new Bx(t)}),this.register(function(t){return new zx(t)})}load(e,t,n,i){const s=this;let o;this.resourcePath!==""?o=this.resourcePath:this.path!==""?o=this.path:o=Qo.extractUrlBase(e),this.manager.itemStart(e);const l=function(u){i?i(u):console.error(u),s.manager.itemError(e),s.manager.itemEnd(e)},f=new Rf(this.manager);f.setPath(this.path),f.setResponseType("arraybuffer"),f.setRequestHeader(this.requestHeader),f.setWithCredentials(this.withCredentials),f.load(e,function(u){try{s.parse(u,o,function(p){t(p),s.manager.itemEnd(e)},l)}catch(p){l(p)}},n,l)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const o={},l={},f=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(f.decode(new Uint8Array(e,0,4))===Lf){try{o[vt.KHR_BINARY_GLTF]=new kx(e)}catch(m){i&&i(m);return}s=JSON.parse(o[vt.KHR_BINARY_GLTF].content)}else s=JSON.parse(f.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const u=new Qx(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});u.fileLoader.setRequestHeader(this.requestHeader);for(let p=0;p<this.pluginCallbacks.length;p++){const m=this.pluginCallbacks[p](u);l[m.name]=m,o[m.name]=!0}if(s.extensionsUsed)for(let p=0;p<s.extensionsUsed.length;++p){const m=s.extensionsUsed[p],v=s.extensionsRequired||[];switch(m){case vt.KHR_MATERIALS_UNLIT:o[m]=new Ax;break;case vt.KHR_DRACO_MESH_COMPRESSION:o[m]=new Hx(s,this.dracoLoader);break;case vt.KHR_TEXTURE_TRANSFORM:o[m]=new Gx;break;case vt.KHR_MESH_QUANTIZATION:o[m]=new Vx;break;default:v.indexOf(m)>=0&&l[m]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+m+'".')}}u.setExtensions(o),u.setPlugins(l),u.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function Ex(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const vt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class bx{constructor(e){this.parser=e,this.name=vt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,f=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let u;const p=new Qe(16777215);f.color!==void 0&&p.fromArray(f.color);const m=f.range!==void 0?f.range:0;switch(f.type){case"directional":u=new ux(p),u.target.position.set(0,0,-1),u.add(u.target);break;case"point":u=new wa(p),u.distance=m;break;case"spot":u=new ox(p),u.distance=m,f.spot=f.spot||{},f.spot.innerConeAngle=f.spot.innerConeAngle!==void 0?f.spot.innerConeAngle:0,f.spot.outerConeAngle=f.spot.outerConeAngle!==void 0?f.spot.outerConeAngle:Math.PI/4,u.angle=f.spot.outerConeAngle,u.penumbra=1-f.spot.innerConeAngle/f.spot.outerConeAngle,u.target.position.set(0,0,-1),u.add(u.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+f.type)}return u.position.set(0,0,0),u.decay=2,zi(u,f),f.intensity!==void 0&&(u.intensity=f.intensity),u.name=t.createUniqueName(f.name||"light_"+e),i=Promise.resolve(u),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],l=(s.extensions&&s.extensions[this.name]||{}).light;return l===void 0?null:this._loadLight(l).then(function(f){return n._getNodeRef(t.cache,l,f)})}}class Ax{constructor(){this.name=vt.KHR_MATERIALS_UNLIT}getMaterialType(){return sr}extendParams(e,t,n){const i=[];e.color=new Qe(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.fromArray(o),e.opacity=o[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,it))}return Promise.all(i)}}class wx{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class Rx{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:pr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const l=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ct(l,l)}return Promise.all(s)}}class Cx{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:pr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class Lx{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:pr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Qe(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];return o.sheenColorFactor!==void 0&&t.sheenColor.fromArray(o.sheenColorFactor),o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,it)),o.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class Px{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:pr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class Dx{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:pr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const l=o.attenuationColor||[1,1,1];return t.attenuationColor=new Qe(l[0],l[1],l[2]),Promise.all(s)}}class Ix{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:pr}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class Nx{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:pr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const l=o.specularColorFactor||[1,1,1];return t.specularColor=new Qe(l[0],l[1],l[2]),o.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,it)),Promise.all(s)}}class Ux{constructor(e){this.parser=e,this.name=vt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class Fx{constructor(e){this.parser=e,this.name=vt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],l=i.images[o.source];let f=n.textureLoader;if(l.uri){const u=n.options.manager.getHandler(l.uri);u!==null&&(f=u)}return this.detectSupport().then(function(u){if(u)return n.loadTextureImage(e,o.source,f);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Ox{constructor(e){this.parser=e,this.name=vt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],l=i.images[o.source];let f=n.textureLoader;if(l.uri){const u=n.options.manager.getHandler(l.uri);u!==null&&(f=u)}return this.detectSupport().then(function(u){if(u)return n.loadTextureImage(e,o.source,f);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Bx{constructor(e){this.name=vt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(l){const f=i.byteOffset||0,u=i.byteLength||0,p=i.count,m=i.byteStride,v=new Uint8Array(l,f,u);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(p,m,v,i.mode,i.filter).then(function(x){return x.buffer}):o.ready.then(function(){const x=new ArrayBuffer(p*m);return o.decodeGltfBuffer(new Uint8Array(x),p,m,v,i.mode,i.filter),x})})}else return null}}class zx{constructor(e){this.name=vt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const u of i.primitives)if(u.mode!==Gn.TRIANGLES&&u.mode!==Gn.TRIANGLE_STRIP&&u.mode!==Gn.TRIANGLE_FAN&&u.mode!==void 0)return null;const o=n.extensions[this.name].attributes,l=[],f={};for(const u in o)l.push(this.parser.getDependency("accessor",o[u]).then(p=>(f[u]=p,f[u])));return l.length<1?null:(l.push(this.parser.createNodeMesh(e)),Promise.all(l).then(u=>{const p=u.pop(),m=p.isGroup?p.children:[p],v=u[0].count,x=[];for(const T of m){const E=new mt,y=new k,g=new si,C=new k(1,1,1),A=new Xv(T.geometry,T.material,v);for(let L=0;L<v;L++)f.TRANSLATION&&y.fromBufferAttribute(f.TRANSLATION,L),f.ROTATION&&g.fromBufferAttribute(f.ROTATION,L),f.SCALE&&C.fromBufferAttribute(f.SCALE,L),A.setMatrixAt(L,E.compose(y,g,C));for(const L in f)L!=="TRANSLATION"&&L!=="ROTATION"&&L!=="SCALE"&&T.geometry.setAttribute(L,f[L]);Bt.prototype.copy.call(A,T),this.parser.assignFinalMaterial(A),x.push(A)}return p.isGroup?(p.clear(),p.add(...x),p):x[0]}))}}const Lf="glTF",Ms=12,Pu={JSON:1313821514,BIN:5130562};class kx{constructor(e){this.name=vt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Ms),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Lf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Ms,s=new DataView(e,Ms);let o=0;for(;o<i;){const l=s.getUint32(o,!0);o+=4;const f=s.getUint32(o,!0);if(o+=4,f===Pu.JSON){const u=new Uint8Array(e,Ms+o,l);this.content=n.decode(u)}else if(f===Pu.BIN){const u=Ms+o;this.body=e.slice(u,u+l)}o+=l}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Hx{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=vt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,l={},f={},u={};for(const p in o){const m=tl[p]||p.toLowerCase();l[m]=o[p]}for(const p in e.attributes){const m=tl[p]||p.toLowerCase();if(o[p]!==void 0){const v=n.accessors[e.attributes[p]],x=Vr[v.componentType];u[m]=x.name,f[m]=v.normalized===!0}}return t.getDependency("bufferView",s).then(function(p){return new Promise(function(m){i.decodeDracoFile(p,function(v){for(const x in v.attributes){const T=v.attributes[x],E=f[x];E!==void 0&&(T.normalized=E)}m(v)},l,u)})})}}class Gx{constructor(){this.name=vt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Vx{constructor(){this.name=vt.KHR_MESH_QUANTIZATION}}class Pf extends Fs{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[s+o];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,l=this.valueSize,f=l*2,u=l*3,p=i-t,m=(n-t)/p,v=m*m,x=v*m,T=e*u,E=T-u,y=-2*x+3*v,g=x-v,C=1-y,A=g-v+m;for(let L=0;L!==l;L++){const I=o[E+L+l],h=o[E+L+f]*p,H=o[T+L+l],Y=o[T+L]*p;s[L]=C*I+A*h+y*H+g*Y}return s}}const Wx=new si;class Xx extends Pf{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return Wx.fromArray(s).normalize().toArray(s),s}}const Gn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Vr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Du={9728:Jt,9729:hn,9984:Xo,9985:Ju,9986:ba,9987:fr},Iu={33071:qn,33648:Ca,10497:Vi},Bo={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},tl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Bi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},qx={CUBICSPLINE:void 0,LINEAR:jr,STEP:Ps},zo={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function jx(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new xl({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ci})),r.DefaultMaterial}function Ss(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function zi(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Yx(r,e,t){let n=!1,i=!1,s=!1;for(let u=0,p=e.length;u<p;u++){const m=e[u];if(m.POSITION!==void 0&&(n=!0),m.NORMAL!==void 0&&(i=!0),m.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const o=[],l=[],f=[];for(let u=0,p=e.length;u<p;u++){const m=e[u];if(n){const v=m.POSITION!==void 0?t.getDependency("accessor",m.POSITION):r.attributes.position;o.push(v)}if(i){const v=m.NORMAL!==void 0?t.getDependency("accessor",m.NORMAL):r.attributes.normal;l.push(v)}if(s){const v=m.COLOR_0!==void 0?t.getDependency("accessor",m.COLOR_0):r.attributes.color;f.push(v)}}return Promise.all([Promise.all(o),Promise.all(l),Promise.all(f)]).then(function(u){const p=u[0],m=u[1],v=u[2];return n&&(r.morphAttributes.position=p),i&&(r.morphAttributes.normal=m),s&&(r.morphAttributes.color=v),r.morphTargetsRelative=!0,r})}function Kx(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function $x(r){const e=r.extensions&&r.extensions[vt.KHR_DRACO_MESH_COMPRESSION];let t;return e?t="draco:"+e.bufferView+":"+e.indices+":"+Nu(e.attributes):t=r.indices+":"+Nu(r.attributes)+":"+r.mode,t}function Nu(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function nl(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Zx(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const Jx=new mt;class Qx{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Ex,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,s=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,s=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&s<98?this.textureLoader=new La(this.options.manager):this.textureLoader=new fx(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Rf(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const l={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};Ss(s,l,i),zi(l,i),Promise.all(n._invokeAll(function(f){return f.afterRoot&&f.afterRoot(l)})).then(function(){e(l)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const o=t[i].joints;for(let l=0,f=o.length;l<f;l++)e[o[l]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(o,l)=>{const f=this.associations.get(o);f!=null&&this.associations.set(l,f);for(const[u,p]of o.children.entries())s(p,l.children[u])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[vt.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,o){n.load(Qo.resolveURL(t.uri,i.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=Bo[i.type],l=Vr[i.componentType],f=i.normalized===!0,u=new l(i.count*o);return Promise.resolve(new Gt(u,o,f))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(o){const l=o[0],f=Bo[i.type],u=Vr[i.componentType],p=u.BYTES_PER_ELEMENT,m=p*f,v=i.byteOffset||0,x=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,T=i.normalized===!0;let E,y;if(x&&x!==m){const g=Math.floor(v/x),C="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+g+":"+i.count;let A=t.cache.get(C);A||(E=new u(l,g*x,i.count*x/p),A=new zv(E,x/p),t.cache.add(C,A)),y=new hl(A,f,v%x/p,T)}else l===null?E=new u(i.count*f):E=new u(l,v,i.count*f),y=new Gt(E,f,T);if(i.sparse!==void 0){const g=Bo.SCALAR,C=Vr[i.sparse.indices.componentType],A=i.sparse.indices.byteOffset||0,L=i.sparse.values.byteOffset||0,I=new C(o[1],A,i.sparse.count*g),h=new u(o[2],L,i.sparse.count*f);l!==null&&(y=new Gt(y.array.slice(),y.itemSize,y.normalized));for(let H=0,Y=I.length;H<Y;H++){const w=I[H];if(y.setX(w,h[H*f]),f>=2&&y.setY(w,h[H*f+1]),f>=3&&y.setZ(w,h[H*f+2]),f>=4&&y.setW(w,h[H*f+3]),f>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return y})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,o=t.images[s];let l=this.textureLoader;if(o.uri){const f=n.manager.getHandler(o.uri);f!==null&&(l=f)}return this.loadTextureImage(e,s,l)}loadTextureImage(e,t,n){const i=this,s=this.json,o=s.textures[e],l=s.images[t],f=(l.uri||l.bufferView)+":"+o.sampler;if(this.textureCache[f])return this.textureCache[f];const u=this.loadImageSource(t,n).then(function(p){p.flipY=!1,p.name=o.name||l.name||"",p.name===""&&typeof l.uri=="string"&&l.uri.startsWith("data:image/")===!1&&(p.name=l.uri);const v=(s.samplers||{})[o.sampler]||{};return p.magFilter=Du[v.magFilter]||hn,p.minFilter=Du[v.minFilter]||fr,p.wrapS=Iu[v.wrapS]||Vi,p.wrapT=Iu[v.wrapT]||Vi,i.associations.set(p,{textures:e}),p}).catch(function(){return null});return this.textureCache[f]=u,u}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(m=>m.clone());const o=i.images[e],l=self.URL||self.webkitURL;let f=o.uri||"",u=!1;if(o.bufferView!==void 0)f=n.getDependency("bufferView",o.bufferView).then(function(m){u=!0;const v=new Blob([m],{type:o.mimeType});return f=l.createObjectURL(v),f});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const p=Promise.resolve(f).then(function(m){return new Promise(function(v,x){let T=v;t.isImageBitmapLoader===!0&&(T=function(E){const y=new ln(E);y.needsUpdate=!0,v(y)}),t.load(Qo.resolveURL(m,s.path),T,void 0,x)})}).then(function(m){return u===!0&&l.revokeObjectURL(f),m.userData.mimeType=o.mimeType||Zx(o.uri),m}).catch(function(m){throw console.error("THREE.GLTFLoader: Couldn't load texture",f),m});return this.sourceCache[e]=p,p}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[vt.KHR_TEXTURE_TRANSFORM]){const l=n.extensions!==void 0?n.extensions[vt.KHR_TEXTURE_TRANSFORM]:void 0;if(l){const f=s.associations.get(o);o=s.extensions[vt.KHR_TEXTURE_TRANSFORM].extendTexture(o,l),s.associations.set(o,f)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const l="PointsMaterial:"+n.uuid;let f=this.cache.get(l);f||(f=new ml,jn.prototype.copy.call(f,n),f.color.copy(n.color),f.map=n.map,f.sizeAttenuation=!1,this.cache.add(l,f)),n=f}else if(e.isLine){const l="LineBasicMaterial:"+n.uuid;let f=this.cache.get(l);f||(f=new Ef,jn.prototype.copy.call(f,n),f.color.copy(n.color),f.map=n.map,this.cache.add(l,f)),n=f}if(i||s||o){let l="ClonedMaterial:"+n.uuid+":";i&&(l+="derivative-tangents:"),s&&(l+="vertex-colors:"),o&&(l+="flat-shading:");let f=this.cache.get(l);f||(f=n.clone(),s&&(f.vertexColors=!0),o&&(f.flatShading=!0),i&&(f.normalScale&&(f.normalScale.y*=-1),f.clearcoatNormalScale&&(f.clearcoatNormalScale.y*=-1)),this.cache.add(l,f),this.associations.set(f,this.associations.get(n))),n=f}e.material=n}getMaterialType(){return xl}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let o;const l={},f=s.extensions||{},u=[];if(f[vt.KHR_MATERIALS_UNLIT]){const m=i[vt.KHR_MATERIALS_UNLIT];o=m.getMaterialType(),u.push(m.extendParams(l,s,t))}else{const m=s.pbrMetallicRoughness||{};if(l.color=new Qe(1,1,1),l.opacity=1,Array.isArray(m.baseColorFactor)){const v=m.baseColorFactor;l.color.fromArray(v),l.opacity=v[3]}m.baseColorTexture!==void 0&&u.push(t.assignTexture(l,"map",m.baseColorTexture,it)),l.metalness=m.metallicFactor!==void 0?m.metallicFactor:1,l.roughness=m.roughnessFactor!==void 0?m.roughnessFactor:1,m.metallicRoughnessTexture!==void 0&&(u.push(t.assignTexture(l,"metalnessMap",m.metallicRoughnessTexture)),u.push(t.assignTexture(l,"roughnessMap",m.metallicRoughnessTexture))),o=this._invokeOne(function(v){return v.getMaterialType&&v.getMaterialType(e)}),u.push(Promise.all(this._invokeAll(function(v){return v.extendMaterialParams&&v.extendMaterialParams(e,l)})))}s.doubleSided===!0&&(l.side=Xn);const p=s.alphaMode||zo.OPAQUE;if(p===zo.BLEND?(l.transparent=!0,l.depthWrite=!1):(l.transparent=!1,p===zo.MASK&&(l.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==sr&&(u.push(t.assignTexture(l,"normalMap",s.normalTexture)),l.normalScale=new ct(1,1),s.normalTexture.scale!==void 0)){const m=s.normalTexture.scale;l.normalScale.set(m,m)}return s.occlusionTexture!==void 0&&o!==sr&&(u.push(t.assignTexture(l,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(l.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==sr&&(l.emissive=new Qe().fromArray(s.emissiveFactor)),s.emissiveTexture!==void 0&&o!==sr&&u.push(t.assignTexture(l,"emissiveMap",s.emissiveTexture,it)),Promise.all(u).then(function(){const m=new o(l);return s.name&&(m.name=s.name),zi(m,s),t.associations.set(m,{materials:e}),s.extensions&&Ss(i,m,s),m})}createUniqueName(e){const t=wt.sanitizeNodeName(e||"");let n=t;for(let i=1;this.nodeNamesUsed[n];++i)n=t+"_"+i;return this.nodeNamesUsed[n]=!0,n}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(l){return n[vt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(l,t).then(function(f){return Uu(f,l,t)})}const o=[];for(let l=0,f=e.length;l<f;l++){const u=e[l],p=$x(u),m=i[p];if(m)o.push(m.promise);else{let v;u.extensions&&u.extensions[vt.KHR_DRACO_MESH_COMPRESSION]?v=s(u):v=Uu(new pn,u,t),i[p]={primitive:u,promise:v},o.push(v)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],o=s.primitives,l=[];for(let f=0,u=o.length;f<u;f++){const p=o[f].material===void 0?jx(this.cache):this.getDependency("material",o[f].material);l.push(p)}return l.push(t.loadGeometries(o)),Promise.all(l).then(function(f){const u=f.slice(0,f.length-1),p=f[f.length-1],m=[];for(let x=0,T=p.length;x<T;x++){const E=p[x],y=o[x];let g;const C=u[x];if(y.mode===Gn.TRIANGLES||y.mode===Gn.TRIANGLE_STRIP||y.mode===Gn.TRIANGLE_FAN||y.mode===void 0)g=s.isSkinnedMesh===!0?new Hv(E,C):new on(E,C),g.isSkinnedMesh===!0&&g.normalizeSkinWeights(),y.mode===Gn.TRIANGLE_STRIP?g.geometry=Lu(g.geometry,ef):y.mode===Gn.TRIANGLE_FAN&&(g.geometry=Lu(g.geometry,qo));else if(y.mode===Gn.LINES)g=new qv(E,C);else if(y.mode===Gn.LINE_STRIP)g=new pl(E,C);else if(y.mode===Gn.LINE_LOOP)g=new jv(E,C);else if(y.mode===Gn.POINTS)g=new Jo(E,C);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+y.mode);Object.keys(g.geometry.morphAttributes).length>0&&Kx(g,s),g.name=t.createUniqueName(s.name||"mesh_"+e),zi(g,s),y.extensions&&Ss(i,g,y),t.assignFinalMaterial(g),m.push(g)}for(let x=0,T=m.length;x<T;x++)t.associations.set(m[x],{meshes:e,primitives:x});if(m.length===1)return m[0];const v=new ar;t.associations.set(v,{meshes:e});for(let x=0,T=m.length;x<T;x++)v.add(m[x]);return v})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new _n(Od.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Fa(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),zi(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),o=i,l=[],f=[];for(let u=0,p=o.length;u<p;u++){const m=o[u];if(m){l.push(m);const v=new mt;s!==null&&v.fromArray(s.array,u*16),f.push(v)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[u])}return new dl(l,f)})}loadAnimation(e){const n=this.json.animations[e],i=n.name?n.name:"animation_"+e,s=[],o=[],l=[],f=[],u=[];for(let p=0,m=n.channels.length;p<m;p++){const v=n.channels[p],x=n.samplers[v.sampler],T=v.target,E=T.node,y=n.parameters!==void 0?n.parameters[x.input]:x.input,g=n.parameters!==void 0?n.parameters[x.output]:x.output;T.node!==void 0&&(s.push(this.getDependency("node",E)),o.push(this.getDependency("accessor",y)),l.push(this.getDependency("accessor",g)),f.push(x),u.push(T))}return Promise.all([Promise.all(s),Promise.all(o),Promise.all(l),Promise.all(f),Promise.all(u)]).then(function(p){const m=p[0],v=p[1],x=p[2],T=p[3],E=p[4],y=[];for(let g=0,C=m.length;g<C;g++){const A=m[g],L=v[g],I=x[g],h=T[g],H=E[g];if(A===void 0)continue;A.updateMatrix();let Y;switch(Bi[H.path]){case Bi.weights:Y=Is;break;case Bi.rotation:Y=dr;break;case Bi.position:case Bi.scale:default:Y=Ns;break}const w=A.name?A.name:A.uuid,U=h.interpolation!==void 0?qx[h.interpolation]:jr,fe=[];Bi[H.path]===Bi.weights?A.traverse(function(q){q.morphTargetInfluences&&fe.push(q.name?q.name:q.uuid)}):fe.push(w);let Q=I.array;if(I.normalized){const q=nl(Q.constructor),te=new Float32Array(Q.length);for(let ee=0,ye=Q.length;ee<ye;ee++)te[ee]=Q[ee]*q;Q=te}for(let q=0,te=fe.length;q<te;q++){const ee=new Y(fe[q]+"."+Bi[H.path],L.array,Q,U);h.interpolation==="CUBICSPLINE"&&(ee.createInterpolant=function(ue){const de=this instanceof dr?Xx:Pf;return new de(this.times,this.values,this.getValueSize()/3,ue)},ee.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),y.push(ee)}}return new Qv(i,void 0,y)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const o=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&o.traverse(function(l){if(l.isMesh)for(let f=0,u=i.weights.length;f<u;f++)l.morphTargetInfluences[f]=i.weights[f]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),o=[],l=i.children||[];for(let u=0,p=l.length;u<p;u++)o.push(n.getDependency("node",l[u]));const f=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(o),f]).then(function(u){const p=u[0],m=u[1],v=u[2];v!==null&&p.traverse(function(x){x.isSkinnedMesh&&x.bind(v,Jx)});for(let x=0,T=m.length;x<T;x++)p.add(m[x]);return p})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?i.createUniqueName(s.name):"",l=[],f=i._invokeOne(function(u){return u.createNodeMesh&&u.createNodeMesh(e)});return f&&l.push(f),s.camera!==void 0&&l.push(i.getDependency("camera",s.camera).then(function(u){return i._getNodeRef(i.cameraCache,s.camera,u)})),i._invokeAll(function(u){return u.createNodeAttachment&&u.createNodeAttachment(e)}).forEach(function(u){l.push(u)}),this.nodeCache[e]=Promise.all(l).then(function(u){let p;if(s.isBone===!0?p=new Tf:u.length>1?p=new ar:u.length===1?p=u[0]:p=new Bt,p!==u[0])for(let m=0,v=u.length;m<v;m++)p.add(u[m]);if(s.name&&(p.userData.name=s.name,p.name=o),zi(p,s),s.extensions&&Ss(n,p,s),s.matrix!==void 0){const m=new mt;m.fromArray(s.matrix),p.applyMatrix4(m)}else s.translation!==void 0&&p.position.fromArray(s.translation),s.rotation!==void 0&&p.quaternion.fromArray(s.rotation),s.scale!==void 0&&p.scale.fromArray(s.scale);return i.associations.has(p)||i.associations.set(p,{}),i.associations.get(p).nodes=e,p}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new ar;n.name&&(s.name=i.createUniqueName(n.name)),zi(s,n),n.extensions&&Ss(t,s,n);const o=n.nodes||[],l=[];for(let f=0,u=o.length;f<u;f++)l.push(i.getDependency("node",o[f]));return Promise.all(l).then(function(f){for(let p=0,m=f.length;p<m;p++)s.add(f[p]);const u=p=>{const m=new Map;for(const[v,x]of i.associations)(v instanceof jn||v instanceof ln)&&m.set(v,x);return p.traverse(v=>{const x=i.associations.get(v);x!=null&&m.set(v,x)}),m};return i.associations=u(s),s})}}function e0(r,e,t){const n=e.attributes,i=new ui;if(n.POSITION!==void 0){const l=t.json.accessors[n.POSITION],f=l.min,u=l.max;if(f!==void 0&&u!==void 0){if(i.set(new k(f[0],f[1],f[2]),new k(u[0],u[1],u[2])),l.normalized){const p=nl(Vr[l.componentType]);i.min.multiplyScalar(p),i.max.multiplyScalar(p)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const l=new k,f=new k;for(let u=0,p=s.length;u<p;u++){const m=s[u];if(m.POSITION!==void 0){const v=t.json.accessors[m.POSITION],x=v.min,T=v.max;if(x!==void 0&&T!==void 0){if(f.setX(Math.max(Math.abs(x[0]),Math.abs(T[0]))),f.setY(Math.max(Math.abs(x[1]),Math.abs(T[1]))),f.setZ(Math.max(Math.abs(x[2]),Math.abs(T[2]))),v.normalized){const E=nl(Vr[v.componentType]);f.multiplyScalar(E)}l.max(f)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(l)}r.boundingBox=i;const o=new fi;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=o}function Uu(r,e,t){const n=e.attributes,i=[];function s(o,l){return t.getDependency("accessor",o).then(function(f){r.setAttribute(l,f)})}for(const o in n){const l=tl[o]||o.toLowerCase();l in r.attributes||i.push(s(n[o],l))}if(e.indices!==void 0&&!r.index){const o=t.getDependency("accessor",e.indices).then(function(l){r.setIndex(l)});i.push(o)}return zi(r,e),e0(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Yx(r,e.targets,t):r})}const Df={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );
			gl_FragColor.a *= opacity;


		}`};class Bs{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const t0=new Fa(-1,1,1,-1,0,1),Tl=new pn;Tl.setAttribute("position",new Qt([-1,3,0,-1,-1,0,3,-1,0],3));Tl.setAttribute("uv",new Qt([0,2,0,0,2,0],2));class If{constructor(e){this._mesh=new on(Tl,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,t0)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Nf extends Bs{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Fn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=ll.clone(e.uniforms),this.material=new Fn({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new If(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Fu extends Bs{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,l;this.inverse?(o=0,l=1):(o=1,l=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),s.buffers.stencil.setClear(l),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class n0 extends Bs{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class i0{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new ct);this._width=n.width,this._height=n.height,t=new Li(this._width*this._pixelRatio,this._height*this._pixelRatio),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Nf(Df),this.clock=new Cf}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,s=this.passes.length;i<s;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const l=this.renderer.getContext(),f=this.renderer.state.buffers.stencil;f.setFunc(l.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),f.setFunc(l.EQUAL,1,4294967295)}this.swapBuffers()}Fu!==void 0&&(o instanceof Fu?n=!0:o instanceof n0&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new ct);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Uf extends Bs{constructor(e,t,n,i,s){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s!==void 0?s:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Qe}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==void 0&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),s=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,s),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=o),e.autoClear=i}}const r0={uniforms:{tDiffuse:{value:null},tSize:{value:new ct(256,256)},center:{value:new ct(.5,.5)},angle:{value:1.57},scale:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform vec2 center;
		uniform float angle;
		uniform float scale;
		uniform vec2 tSize;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		float pattern() {

			float s = sin( angle ), c = cos( angle );

			vec2 tex = vUv * tSize - center;
			vec2 point = vec2( c * tex.x - s * tex.y, s * tex.x + c * tex.y ) * scale;

			return ( sin( point.x ) * sin( point.y ) ) * 4.0;

		}

		void main() {

			vec4 color = texture2D( tDiffuse, vUv );

			float average = ( color.r + color.g + color.b ) / 3.0;

			gl_FragColor = vec4( vec3( average * 10.0 - 5.0 + pattern() ), color.a );

		}`};class s0 extends Bs{constructor(e,t,n){super();const i=r0;this.uniforms=ll.clone(i.uniforms),e!==void 0&&this.uniforms.center.value.copy(e),t!==void 0&&(this.uniforms.angle.value=t),n!==void 0&&(this.uniforms.scale.value=n),this.material=new Fn({uniforms:this.uniforms,vertexShader:i.vertexShader,fragmentShader:i.fragmentShader}),this.fsQuad=new If(this.material)}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.tSize.value.set(n.width,n.height),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const a0={uniforms:{lineWidth:{value:.5},color:{value:new Qe(13158600).toArray().concat(1)}},extensions:{derivatives:!0},vertexShader:`
        precision highp float;

        attribute vec3 center;

        varying vec3 vCenter;

        void main()
        {
            vCenter = center;
            gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
        }
    `,fragmentShader:`
        precision lowp float;

        uniform float lineWidth;
        uniform vec4 color;

        varying vec3 vCenter;

        float edgeFactorTri()
        { 
            vec3 d = fwidth(vCenter.xyz); 
            vec3 a3 = smoothstep(vec3(0.0), d * lineWidth, vCenter.xyz); 
            return min(min(a3.x, a3.y), a3.z);
        }
        void main()
        {
            float factor = edgeFactorTri();
            if (factor > 0.8)
                discard;
            gl_FragColor.rgb = color.rgb;
            gl_FragColor.a = mix(color.a, 0.0, factor);
        }
    `},o0={uniforms:{texMask:{value:null},uvOffset:{value:[0,0]},rippleOriginsOS:{value:[]},rippleTimes:{value:[]}},transparent:!0,vertexShader:`
        precision highp float;

        attribute vec3 triangleCenterPosOS;

        uniform vec3 rippleOriginsOS[5];
        uniform float rippleTimes[5];
        uniform vec2 uvOffset;

        varying float vVertAlpha;
        varying vec2 vUV;

        // https://www.shadertoy.com/view/tdc3DS
        float modF(float a, float b)
        {
            float m = a - floor((a + 0.5) / b) * b;
            return m + 0.5;
        }

        void main()
        {
            //vec4 triangleCenterPosWS = projectionMatrix * modelViewMatrix * vec4( triangleCenterPosOS, 1.0 );
            
            float rippleSpeed = 20.0;
            float rippleWidth = 2.5;

            float distToRippleOrig = 0.0;
            float a = 0.0;
            float aValues[] = float[](0.5, 0.6, 0.75, 0.4, 0.8);
            
            #pragma unroll_loop_start 
            for (int i = 0; i < 5; i++)
            {
                distToRippleOrig = distance(triangleCenterPosOS.xyz, rippleOriginsOS[i]);
                a = modF(rippleTimes[i] * rippleSpeed - distToRippleOrig, 100.0 + rippleWidth);
                vVertAlpha += a < rippleWidth ? aValues[i] : 0.0;
            }
            #pragma unroll_loop_end

            vVertAlpha = clamp(vVertAlpha, 0.0, 1.0);
            vUV = uv + uvOffset;
            
            vec4 posWS = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
            gl_Position = posWS;
        }
    `,fragmentShader:`
        precision lowp float;

        uniform sampler2D texMask;

        varying float vVertAlpha;
        varying vec2 vUV;

        void main()
        {
            vec3 baseCol = vec3(1.0);

            gl_FragColor.rgb = baseCol;
            gl_FragColor.a = clamp(vVertAlpha + texture2D(texMask, vUV).r, 0.0, 1.0);
        }
    `},xa={uniforms:{color:{value:[1,1,1,1]},fadeMinBounds:{value:[]},fadeMaxBounds:{value:[]},fadeDistance:{value:1}},vertexShader:`
        precision highp float;

        uniform mat4 modelMatrix;
        uniform mat4 modelViewMatrix;
        uniform mat4 projectionMatrix;
        
        attribute vec3 position;
        attribute vec3 translation;
        attribute vec3 scale;
        attribute float fadeScaler;
        attribute vec3 instanceColor;

        uniform vec3 fadeMinBounds;
        uniform vec3 fadeMaxBounds;
        uniform float fadeDistance;

        varying float v_fade_a;
        varying vec3 instance_color;
        
        // transforms the 'blueprint' geometry with instance attributes
        vec3 transform( inout vec3 position, vec3 T, vec3 S )
        {
            position *= S;
            position += T;
            return position;
        }

        float inside_bounds_smooth(vec3 p, vec3 bottom_left, vec3 top_right, float fade_distance)
        {
            vec3 sMin = smoothstep(bottom_left, bottom_left + vec3(fade_distance), p) - smoothstep(top_right - vec3(fade_distance), top_right, p);
            vec3 sMax = smoothstep(top_right - vec3(fade_distance), top_right, p) + smoothstep(bottom_left, bottom_left + vec3(fade_distance), p);
            return (min(sMin.x, sMax.x) * min(sMin.y, sMax.y) * min(sMin.z, sMax.z));
        }
        
        void main()
        {
            vec3 origin = position;
            vec3 worldPos = vec3(modelMatrix * vec4(translation, 1.0));

            v_fade_a = inside_bounds_smooth(worldPos, fadeMinBounds, fadeMaxBounds, fadeDistance * fadeScaler);
            instance_color = instanceColor;

            transform(origin, translation, mix(vec3(0.0), scale, v_fade_a));
            gl_Position = projectionMatrix * modelViewMatrix * vec4(origin, 1.0);
        }
    `,fragmentShader:`
        precision lowp float;

        uniform vec4 color;

        varying float v_fade_a;
        varying vec3 instance_color;

        void main()
        {
            if (v_fade_a <= 0.0)
                discard;
            
            gl_FragColor = color + vec4(instance_color, 1.0);
        }
    `},l0={uniforms:{texture:{value:null},fadeMinBounds:{value:[]},fadeMaxBounds:{value:[]},fadeDistance:{value:1},modelMatrix_inv:{value:null},cursorPosOverSphere:{value:null}},vertexShader:`
        precision highp float;

        uniform mat4 modelMatrix;
        uniform mat4 modelMatrix_inv;
        uniform mat4 modelViewMatrix;
        uniform mat4 projectionMatrix;
        
        attribute vec3 position;
        attribute vec3 translation;
        attribute vec3 scale;
        attribute float fadeScaler;
        attribute vec3 instanceColor;

        uniform vec3 fadeMinBounds;
        uniform vec3 fadeMaxBounds;
        uniform float fadeDistance;
        uniform vec3 cursorPosOverSphere;

        varying float v_fade_a;
        varying vec3 instance_color;
        
        vec3 CartesianToSpherical(vec3 cartCoords)
        {
            float _radius, _azimuth, _elevation;

            if (cartCoords.x == 0.0)
                cartCoords.x = 0.0001;

            _radius = sqrt((cartCoords.x * cartCoords.x)
            + (cartCoords.y * cartCoords.y)
            + (cartCoords.z * cartCoords.z));

            _azimuth = atan(cartCoords.z / cartCoords.x);

            if (cartCoords.x < 0.0)
                _azimuth += 3.1415926538;
            _elevation = asin(cartCoords.y / _radius);

            return vec3(_radius, _azimuth, _elevation);
        }
        vec3 SphericalToCartesian(float radius, float azimuth, float elevation)
        {
            float a = radius * cos(elevation);
        
            vec3 result;
            result.x = a * cos(azimuth);
            result.y = radius * sin(elevation);
            result.z = a * sin(azimuth);

            return result;
        }
        vec3 SphericalToCartesian(vec3 sphericalCoords)
        {
            return SphericalToCartesian(sphericalCoords.x, sphericalCoords.y, sphericalCoords.z);
        }
        
        // transforms the 'blueprint' geometry with instance attributes
        vec3 transform( inout vec3 position, vec3 T, vec3 S )
        {
            /*T = CartesianToSpherical(T);
            T.x = 20.0;
            T = SphericalToCartesian(T);*/

            //vec3 worldPos = vec3(modelMatrix * vec4(T, 1.0));

            /*vec3 dist = normalize(cursorPosOverSphere - T);
            float distMag = sqrt((dist.x * dist.x) + (dist.y * dist.y) + (dist.z * dist.z)) / 32.0;
            
            vec3 power = vec3(T.x - (dist.x / distMag) * 0.1 / distMag,
                                T.y - (dist.y / distMag) * 0.1 / distMag,
                                T.z - (dist.z / distMag) * 0.1 / distMag);*/

            //float dist = clamp(length(T - cursorPosOverSphere), 0.0, 5.0);
            vec3 distToCursor = normalize(T - cursorPosOverSphere) * 1.2;
            vec3 repelV = distToCursor * 1.0;
            
            //vec3 force = T / 2.0 / 10.1;

            position *= S;
            position += T;
            position += repelV;

            return position;
        }

        float inside_bounds_smooth(vec3 p, vec3 bottom_left, vec3 top_right, float fade_distance)
        {
            vec3 sMin = smoothstep(bottom_left, bottom_left + vec3(fade_distance), p) - smoothstep(top_right - vec3(fade_distance), top_right, p);
            vec3 sMax = smoothstep(top_right - vec3(fade_distance), top_right, p) + smoothstep(bottom_left, bottom_left + vec3(fade_distance), p);
            return (min(sMin.x, sMax.x) * min(sMin.y, sMax.y) * min(sMin.z, sMax.z));
        }
        
        void main()
        {
            vec3 pos = position;
            vec3 worldPos = vec3(modelMatrix * vec4(translation, 1.0));

            v_fade_a = inside_bounds_smooth(worldPos, fadeMinBounds, fadeMaxBounds, fadeDistance * fadeScaler);
            vec3 mixedScale = mix(vec3(0.0), scale, v_fade_a);
            instance_color = instanceColor;

            transform(pos, translation, mixedScale);

            gl_PointSize = mixedScale.x * 100.0;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
    `,fragmentShader:`
        precision lowp float;

        uniform vec4 color;
        uniform sampler2D texture;

        varying float v_fade_a;
        varying vec3 instance_color;

        void main()
        {
            if (v_fade_a <= 0.0)
                discard;

            vec2 uv = vec2(gl_PointCoord.x, 1.0 - gl_PointCoord.y);
            vec4 texColor = texture2D(texture, uv);

            if (texColor.a < .5)
                discard;

            gl_FragColor = (color + vec4(instance_color, 1.0)) * texColor;
        }
    `};var Ff=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Of(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Bf={exports:{}};(function(r,e){(function(t,n){r.exports=n()})(Ff,function(){var t=function(){function n(x){return o.appendChild(x.dom),x}function i(x){for(var T=0;T<o.children.length;T++)o.children[T].style.display=T===x?"block":"none";s=x}var s=0,o=document.createElement("div");o.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",o.addEventListener("click",function(x){x.preventDefault(),i(++s%o.children.length)},!1);var l=(performance||Date).now(),f=l,u=0,p=n(new t.Panel("FPS","#0ff","#002")),m=n(new t.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var v=n(new t.Panel("MB","#f08","#201"));return i(0),{REVISION:16,dom:o,addPanel:n,showPanel:i,begin:function(){l=(performance||Date).now()},end:function(){u++;var x=(performance||Date).now();if(m.update(x-l,200),x>f+1e3&&(p.update(1e3*u/(x-f),100),f=x,u=0,v)){var T=performance.memory;v.update(T.usedJSHeapSize/1048576,T.jsHeapSizeLimit/1048576)}return x},update:function(){l=this.end()},domElement:o,setMode:i}};return t.Panel=function(n,i,s){var o=1/0,l=0,f=Math.round,u=f(window.devicePixelRatio||1),p=80*u,m=48*u,v=3*u,x=2*u,T=3*u,E=15*u,y=74*u,g=30*u,C=document.createElement("canvas");C.width=p,C.height=m,C.style.cssText="width:80px;height:48px";var A=C.getContext("2d");return A.font="bold "+9*u+"px Helvetica,Arial,sans-serif",A.textBaseline="top",A.fillStyle=s,A.fillRect(0,0,p,m),A.fillStyle=i,A.fillText(n,v,x),A.fillRect(T,E,y,g),A.fillStyle=s,A.globalAlpha=.9,A.fillRect(T,E,y,g),{dom:C,update:function(L,I){o=Math.min(o,L),l=Math.max(l,L),A.fillStyle=s,A.globalAlpha=1,A.fillRect(0,0,p,E),A.fillStyle=i,A.fillText(f(L)+" "+n+" ("+f(o)+"-"+f(l)+")",v,x),A.drawImage(C,T+u,E,y-u,g,T,E,y-u,g),A.fillRect(T+y-u,E,u,g),A.fillStyle=s,A.globalAlpha=.9,A.fillRect(T+y-u,E,u,f((1-L/I)*g))}}},t})})(Bf);var c0=Bf.exports;const u0=Of(c0);var zf={exports:{}};/*!
 * jQuery JavaScript Library v3.6.4
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2023-03-08T15:28Z
 */(function(r){(function(e,t){r.exports=e.document?t(e,!0):function(n){if(!n.document)throw new Error("jQuery requires a window with a document");return t(n)}})(typeof window<"u"?window:Ff,function(e,t){var n=[],i=Object.getPrototypeOf,s=n.slice,o=n.flat?function(a){return n.flat.call(a)}:function(a){return n.concat.apply([],a)},l=n.push,f=n.indexOf,u={},p=u.toString,m=u.hasOwnProperty,v=m.toString,x=v.call(Object),T={},E=function(c){return typeof c=="function"&&typeof c.nodeType!="number"&&typeof c.item!="function"},y=function(c){return c!=null&&c===c.window},g=e.document,C={type:!0,src:!0,nonce:!0,noModule:!0};function A(a,c,d){d=d||g;var _,M,S=d.createElement("script");if(S.text=a,c)for(_ in C)M=c[_]||c.getAttribute&&c.getAttribute(_),M&&S.setAttribute(_,M);d.head.appendChild(S).parentNode.removeChild(S)}function L(a){return a==null?a+"":typeof a=="object"||typeof a=="function"?u[p.call(a)]||"object":typeof a}var I="3.6.4",h=function(a,c){return new h.fn.init(a,c)};h.fn=h.prototype={jquery:I,constructor:h,length:0,toArray:function(){return s.call(this)},get:function(a){return a==null?s.call(this):a<0?this[a+this.length]:this[a]},pushStack:function(a){var c=h.merge(this.constructor(),a);return c.prevObject=this,c},each:function(a){return h.each(this,a)},map:function(a){return this.pushStack(h.map(this,function(c,d){return a.call(c,d,c)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(h.grep(this,function(a,c){return(c+1)%2}))},odd:function(){return this.pushStack(h.grep(this,function(a,c){return c%2}))},eq:function(a){var c=this.length,d=+a+(a<0?c:0);return this.pushStack(d>=0&&d<c?[this[d]]:[])},end:function(){return this.prevObject||this.constructor()},push:l,sort:n.sort,splice:n.splice},h.extend=h.fn.extend=function(){var a,c,d,_,M,S,b=arguments[0]||{},z=1,O=arguments.length,X=!1;for(typeof b=="boolean"&&(X=b,b=arguments[z]||{},z++),typeof b!="object"&&!E(b)&&(b={}),z===O&&(b=this,z--);z<O;z++)if((a=arguments[z])!=null)for(c in a)_=a[c],!(c==="__proto__"||b===_)&&(X&&_&&(h.isPlainObject(_)||(M=Array.isArray(_)))?(d=b[c],M&&!Array.isArray(d)?S=[]:!M&&!h.isPlainObject(d)?S={}:S=d,M=!1,b[c]=h.extend(X,S,_)):_!==void 0&&(b[c]=_));return b},h.extend({expando:"jQuery"+(I+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isPlainObject:function(a){var c,d;return!a||p.call(a)!=="[object Object]"?!1:(c=i(a),c?(d=m.call(c,"constructor")&&c.constructor,typeof d=="function"&&v.call(d)===x):!0)},isEmptyObject:function(a){var c;for(c in a)return!1;return!0},globalEval:function(a,c,d){A(a,{nonce:c&&c.nonce},d)},each:function(a,c){var d,_=0;if(H(a))for(d=a.length;_<d&&c.call(a[_],_,a[_])!==!1;_++);else for(_ in a)if(c.call(a[_],_,a[_])===!1)break;return a},makeArray:function(a,c){var d=c||[];return a!=null&&(H(Object(a))?h.merge(d,typeof a=="string"?[a]:a):l.call(d,a)),d},inArray:function(a,c,d){return c==null?-1:f.call(c,a,d)},merge:function(a,c){for(var d=+c.length,_=0,M=a.length;_<d;_++)a[M++]=c[_];return a.length=M,a},grep:function(a,c,d){for(var _,M=[],S=0,b=a.length,z=!d;S<b;S++)_=!c(a[S],S),_!==z&&M.push(a[S]);return M},map:function(a,c,d){var _,M,S=0,b=[];if(H(a))for(_=a.length;S<_;S++)M=c(a[S],S,d),M!=null&&b.push(M);else for(S in a)M=c(a[S],S,d),M!=null&&b.push(M);return o(b)},guid:1,support:T}),typeof Symbol=="function"&&(h.fn[Symbol.iterator]=n[Symbol.iterator]),h.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,c){u["[object "+c+"]"]=c.toLowerCase()});function H(a){var c=!!a&&"length"in a&&a.length,d=L(a);return E(a)||y(a)?!1:d==="array"||c===0||typeof c=="number"&&c>0&&c-1 in a}var Y=function(a){var c,d,_,M,S,b,z,O,X,J,_e,$,re,Ve,rt,He,$t,Yt,Cn,Rt="sizzle"+1*new Date,nt=a.document,yn=0,yt=0,kt=Ws(),us=Ws(),Hs=Ws(),Ln=Ws(),ji=function(R,B){return R===B&&(_e=!0),0},Yi={}.hasOwnProperty,Mn=[],Pi=Mn.pop,Bn=Mn.push,Di=Mn.push,Fl=Mn.slice,Ki=function(R,B){for(var G=0,oe=R.length;G<oe;G++)if(R[G]===B)return G;return-1},Ya="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",Et="[\\x20\\t\\r\\n\\f]",$i="(?:\\\\[\\da-fA-F]{1,6}"+Et+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",Ol="\\["+Et+"*("+$i+")(?:"+Et+"*([*^$|!~]?=)"+Et+`*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(`+$i+"))|)"+Et+"*\\]",Ka=":("+$i+`)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|`+Ol+")*)|.*)\\)|)",ph=new RegExp(Et+"+","g"),Gs=new RegExp("^"+Et+"+|((?:^|[^\\\\])(?:\\\\.)*)"+Et+"+$","g"),mh=new RegExp("^"+Et+"*,"+Et+"*"),Bl=new RegExp("^"+Et+"*([>+~]|"+Et+")"+Et+"*"),gh=new RegExp(Et+"|>"),_h=new RegExp(Ka),vh=new RegExp("^"+$i+"$"),Vs={ID:new RegExp("^#("+$i+")"),CLASS:new RegExp("^\\.("+$i+")"),TAG:new RegExp("^("+$i+"|[*])"),ATTR:new RegExp("^"+Ol),PSEUDO:new RegExp("^"+Ka),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+Et+"*(even|odd|(([+-]|)(\\d*)n|)"+Et+"*(?:([+-]|)"+Et+"*(\\d+)|))"+Et+"*\\)|)","i"),bool:new RegExp("^(?:"+Ya+")$","i"),needsContext:new RegExp("^"+Et+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+Et+"*((?:-\\d)?\\d*)"+Et+"*\\)|)(?=[^-]|$)","i")},xh=/HTML$/i,yh=/^(?:input|select|textarea|button)$/i,Mh=/^h\d$/i,fs=/^[^{]+\{\s*\[native \w/,Sh=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$a=/[+~]/,pi=new RegExp("\\\\[\\da-fA-F]{1,6}"+Et+"?|\\\\([^\\r\\n\\f])","g"),mi=function(R,B){var G="0x"+R.slice(1)-65536;return B||(G<0?String.fromCharCode(G+65536):String.fromCharCode(G>>10|55296,G&1023|56320))},zl=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,kl=function(R,B){return B?R==="\0"?"�":R.slice(0,-1)+"\\"+R.charCodeAt(R.length-1).toString(16)+" ":"\\"+R},Hl=function(){$()},Th=qs(function(R){return R.disabled===!0&&R.nodeName.toLowerCase()==="fieldset"},{dir:"parentNode",next:"legend"});try{Di.apply(Mn=Fl.call(nt.childNodes),nt.childNodes),Mn[nt.childNodes.length].nodeType}catch{Di={apply:Mn.length?function(B,G){Bn.apply(B,Fl.call(G))}:function(B,G){for(var oe=B.length,W=0;B[oe++]=G[W++];);B.length=oe-1}}}function Ct(R,B,G,oe){var W,he,ve,we,Le,$e,je,Je=B&&B.ownerDocument,pt=B?B.nodeType:9;if(G=G||[],typeof R!="string"||!R||pt!==1&&pt!==9&&pt!==11)return G;if(!oe&&($(B),B=B||re,rt)){if(pt!==11&&(Le=Sh.exec(R)))if(W=Le[1]){if(pt===9)if(ve=B.getElementById(W)){if(ve.id===W)return G.push(ve),G}else return G;else if(Je&&(ve=Je.getElementById(W))&&Cn(B,ve)&&ve.id===W)return G.push(ve),G}else{if(Le[2])return Di.apply(G,B.getElementsByTagName(R)),G;if((W=Le[3])&&d.getElementsByClassName&&B.getElementsByClassName)return Di.apply(G,B.getElementsByClassName(W)),G}if(d.qsa&&!Ln[R+" "]&&(!He||!He.test(R))&&(pt!==1||B.nodeName.toLowerCase()!=="object")){if(je=R,Je=B,pt===1&&(gh.test(R)||Bl.test(R))){for(Je=$a.test(R)&&Ja(B.parentNode)||B,(Je!==B||!d.scope)&&((we=B.getAttribute("id"))?we=we.replace(zl,kl):B.setAttribute("id",we=Rt)),$e=b(R),he=$e.length;he--;)$e[he]=(we?"#"+we:":scope")+" "+Xs($e[he]);je=$e.join(",")}try{return Di.apply(G,Je.querySelectorAll(je)),G}catch{Ln(R,!0)}finally{we===Rt&&B.removeAttribute("id")}}}return O(R.replace(Gs,"$1"),B,G,oe)}function Ws(){var R=[];function B(G,oe){return R.push(G+" ")>_.cacheLength&&delete B[R.shift()],B[G+" "]=oe}return B}function Zn(R){return R[Rt]=!0,R}function zn(R){var B=re.createElement("fieldset");try{return!!R(B)}catch{return!1}finally{B.parentNode&&B.parentNode.removeChild(B),B=null}}function Za(R,B){for(var G=R.split("|"),oe=G.length;oe--;)_.attrHandle[G[oe]]=B}function Gl(R,B){var G=B&&R,oe=G&&R.nodeType===1&&B.nodeType===1&&R.sourceIndex-B.sourceIndex;if(oe)return oe;if(G){for(;G=G.nextSibling;)if(G===B)return-1}return R?1:-1}function Eh(R){return function(B){var G=B.nodeName.toLowerCase();return G==="input"&&B.type===R}}function bh(R){return function(B){var G=B.nodeName.toLowerCase();return(G==="input"||G==="button")&&B.type===R}}function Vl(R){return function(B){return"form"in B?B.parentNode&&B.disabled===!1?"label"in B?"label"in B.parentNode?B.parentNode.disabled===R:B.disabled===R:B.isDisabled===R||B.isDisabled!==!R&&Th(B)===R:B.disabled===R:"label"in B?B.disabled===R:!1}}function Zi(R){return Zn(function(B){return B=+B,Zn(function(G,oe){for(var W,he=R([],G.length,B),ve=he.length;ve--;)G[W=he[ve]]&&(G[W]=!(oe[W]=G[W]))})})}function Ja(R){return R&&typeof R.getElementsByTagName<"u"&&R}d=Ct.support={},S=Ct.isXML=function(R){var B=R&&R.namespaceURI,G=R&&(R.ownerDocument||R).documentElement;return!xh.test(B||G&&G.nodeName||"HTML")},$=Ct.setDocument=function(R){var B,G,oe=R?R.ownerDocument||R:nt;return oe==re||oe.nodeType!==9||!oe.documentElement||(re=oe,Ve=re.documentElement,rt=!S(re),nt!=re&&(G=re.defaultView)&&G.top!==G&&(G.addEventListener?G.addEventListener("unload",Hl,!1):G.attachEvent&&G.attachEvent("onunload",Hl)),d.scope=zn(function(W){return Ve.appendChild(W).appendChild(re.createElement("div")),typeof W.querySelectorAll<"u"&&!W.querySelectorAll(":scope fieldset div").length}),d.cssHas=zn(function(){try{return re.querySelector(":has(*,:jqfake)"),!1}catch{return!0}}),d.attributes=zn(function(W){return W.className="i",!W.getAttribute("className")}),d.getElementsByTagName=zn(function(W){return W.appendChild(re.createComment("")),!W.getElementsByTagName("*").length}),d.getElementsByClassName=fs.test(re.getElementsByClassName),d.getById=zn(function(W){return Ve.appendChild(W).id=Rt,!re.getElementsByName||!re.getElementsByName(Rt).length}),d.getById?(_.filter.ID=function(W){var he=W.replace(pi,mi);return function(ve){return ve.getAttribute("id")===he}},_.find.ID=function(W,he){if(typeof he.getElementById<"u"&&rt){var ve=he.getElementById(W);return ve?[ve]:[]}}):(_.filter.ID=function(W){var he=W.replace(pi,mi);return function(ve){var we=typeof ve.getAttributeNode<"u"&&ve.getAttributeNode("id");return we&&we.value===he}},_.find.ID=function(W,he){if(typeof he.getElementById<"u"&&rt){var ve,we,Le,$e=he.getElementById(W);if($e){if(ve=$e.getAttributeNode("id"),ve&&ve.value===W)return[$e];for(Le=he.getElementsByName(W),we=0;$e=Le[we++];)if(ve=$e.getAttributeNode("id"),ve&&ve.value===W)return[$e]}return[]}}),_.find.TAG=d.getElementsByTagName?function(W,he){if(typeof he.getElementsByTagName<"u")return he.getElementsByTagName(W);if(d.qsa)return he.querySelectorAll(W)}:function(W,he){var ve,we=[],Le=0,$e=he.getElementsByTagName(W);if(W==="*"){for(;ve=$e[Le++];)ve.nodeType===1&&we.push(ve);return we}return $e},_.find.CLASS=d.getElementsByClassName&&function(W,he){if(typeof he.getElementsByClassName<"u"&&rt)return he.getElementsByClassName(W)},$t=[],He=[],(d.qsa=fs.test(re.querySelectorAll))&&(zn(function(W){var he;Ve.appendChild(W).innerHTML="<a id='"+Rt+"'></a><select id='"+Rt+"-\r\\' msallowcapture=''><option selected=''></option></select>",W.querySelectorAll("[msallowcapture^='']").length&&He.push("[*^$]="+Et+`*(?:''|"")`),W.querySelectorAll("[selected]").length||He.push("\\["+Et+"*(?:value|"+Ya+")"),W.querySelectorAll("[id~="+Rt+"-]").length||He.push("~="),he=re.createElement("input"),he.setAttribute("name",""),W.appendChild(he),W.querySelectorAll("[name='']").length||He.push("\\["+Et+"*name"+Et+"*="+Et+`*(?:''|"")`),W.querySelectorAll(":checked").length||He.push(":checked"),W.querySelectorAll("a#"+Rt+"+*").length||He.push(".#.+[+~]"),W.querySelectorAll("\\\f"),He.push("[\\r\\n\\f]")}),zn(function(W){W.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var he=re.createElement("input");he.setAttribute("type","hidden"),W.appendChild(he).setAttribute("name","D"),W.querySelectorAll("[name=d]").length&&He.push("name"+Et+"*[*^$|!~]?="),W.querySelectorAll(":enabled").length!==2&&He.push(":enabled",":disabled"),Ve.appendChild(W).disabled=!0,W.querySelectorAll(":disabled").length!==2&&He.push(":enabled",":disabled"),W.querySelectorAll("*,:x"),He.push(",.*:")})),(d.matchesSelector=fs.test(Yt=Ve.matches||Ve.webkitMatchesSelector||Ve.mozMatchesSelector||Ve.oMatchesSelector||Ve.msMatchesSelector))&&zn(function(W){d.disconnectedMatch=Yt.call(W,"*"),Yt.call(W,"[s!='']:x"),$t.push("!=",Ka)}),d.cssHas||He.push(":has"),He=He.length&&new RegExp(He.join("|")),$t=$t.length&&new RegExp($t.join("|")),B=fs.test(Ve.compareDocumentPosition),Cn=B||fs.test(Ve.contains)?function(W,he){var ve=W.nodeType===9&&W.documentElement||W,we=he&&he.parentNode;return W===we||!!(we&&we.nodeType===1&&(ve.contains?ve.contains(we):W.compareDocumentPosition&&W.compareDocumentPosition(we)&16))}:function(W,he){if(he){for(;he=he.parentNode;)if(he===W)return!0}return!1},ji=B?function(W,he){if(W===he)return _e=!0,0;var ve=!W.compareDocumentPosition-!he.compareDocumentPosition;return ve||(ve=(W.ownerDocument||W)==(he.ownerDocument||he)?W.compareDocumentPosition(he):1,ve&1||!d.sortDetached&&he.compareDocumentPosition(W)===ve?W==re||W.ownerDocument==nt&&Cn(nt,W)?-1:he==re||he.ownerDocument==nt&&Cn(nt,he)?1:J?Ki(J,W)-Ki(J,he):0:ve&4?-1:1)}:function(W,he){if(W===he)return _e=!0,0;var ve,we=0,Le=W.parentNode,$e=he.parentNode,je=[W],Je=[he];if(!Le||!$e)return W==re?-1:he==re?1:Le?-1:$e?1:J?Ki(J,W)-Ki(J,he):0;if(Le===$e)return Gl(W,he);for(ve=W;ve=ve.parentNode;)je.unshift(ve);for(ve=he;ve=ve.parentNode;)Je.unshift(ve);for(;je[we]===Je[we];)we++;return we?Gl(je[we],Je[we]):je[we]==nt?-1:Je[we]==nt?1:0}),re},Ct.matches=function(R,B){return Ct(R,null,null,B)},Ct.matchesSelector=function(R,B){if($(R),d.matchesSelector&&rt&&!Ln[B+" "]&&(!$t||!$t.test(B))&&(!He||!He.test(B)))try{var G=Yt.call(R,B);if(G||d.disconnectedMatch||R.document&&R.document.nodeType!==11)return G}catch{Ln(B,!0)}return Ct(B,re,null,[R]).length>0},Ct.contains=function(R,B){return(R.ownerDocument||R)!=re&&$(R),Cn(R,B)},Ct.attr=function(R,B){(R.ownerDocument||R)!=re&&$(R);var G=_.attrHandle[B.toLowerCase()],oe=G&&Yi.call(_.attrHandle,B.toLowerCase())?G(R,B,!rt):void 0;return oe!==void 0?oe:d.attributes||!rt?R.getAttribute(B):(oe=R.getAttributeNode(B))&&oe.specified?oe.value:null},Ct.escape=function(R){return(R+"").replace(zl,kl)},Ct.error=function(R){throw new Error("Syntax error, unrecognized expression: "+R)},Ct.uniqueSort=function(R){var B,G=[],oe=0,W=0;if(_e=!d.detectDuplicates,J=!d.sortStable&&R.slice(0),R.sort(ji),_e){for(;B=R[W++];)B===R[W]&&(oe=G.push(W));for(;oe--;)R.splice(G[oe],1)}return J=null,R},M=Ct.getText=function(R){var B,G="",oe=0,W=R.nodeType;if(W){if(W===1||W===9||W===11){if(typeof R.textContent=="string")return R.textContent;for(R=R.firstChild;R;R=R.nextSibling)G+=M(R)}else if(W===3||W===4)return R.nodeValue}else for(;B=R[oe++];)G+=M(B);return G},_=Ct.selectors={cacheLength:50,createPseudo:Zn,match:Vs,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(R){return R[1]=R[1].replace(pi,mi),R[3]=(R[3]||R[4]||R[5]||"").replace(pi,mi),R[2]==="~="&&(R[3]=" "+R[3]+" "),R.slice(0,4)},CHILD:function(R){return R[1]=R[1].toLowerCase(),R[1].slice(0,3)==="nth"?(R[3]||Ct.error(R[0]),R[4]=+(R[4]?R[5]+(R[6]||1):2*(R[3]==="even"||R[3]==="odd")),R[5]=+(R[7]+R[8]||R[3]==="odd")):R[3]&&Ct.error(R[0]),R},PSEUDO:function(R){var B,G=!R[6]&&R[2];return Vs.CHILD.test(R[0])?null:(R[3]?R[2]=R[4]||R[5]||"":G&&_h.test(G)&&(B=b(G,!0))&&(B=G.indexOf(")",G.length-B)-G.length)&&(R[0]=R[0].slice(0,B),R[2]=G.slice(0,B)),R.slice(0,3))}},filter:{TAG:function(R){var B=R.replace(pi,mi).toLowerCase();return R==="*"?function(){return!0}:function(G){return G.nodeName&&G.nodeName.toLowerCase()===B}},CLASS:function(R){var B=kt[R+" "];return B||(B=new RegExp("(^|"+Et+")"+R+"("+Et+"|$)"))&&kt(R,function(G){return B.test(typeof G.className=="string"&&G.className||typeof G.getAttribute<"u"&&G.getAttribute("class")||"")})},ATTR:function(R,B,G){return function(oe){var W=Ct.attr(oe,R);return W==null?B==="!=":B?(W+="",B==="="?W===G:B==="!="?W!==G:B==="^="?G&&W.indexOf(G)===0:B==="*="?G&&W.indexOf(G)>-1:B==="$="?G&&W.slice(-G.length)===G:B==="~="?(" "+W.replace(ph," ")+" ").indexOf(G)>-1:B==="|="?W===G||W.slice(0,G.length+1)===G+"-":!1):!0}},CHILD:function(R,B,G,oe,W){var he=R.slice(0,3)!=="nth",ve=R.slice(-4)!=="last",we=B==="of-type";return oe===1&&W===0?function(Le){return!!Le.parentNode}:function(Le,$e,je){var Je,pt,Lt,Ze,Zt,cn,Pn=he!==ve?"nextSibling":"previousSibling",Ft=Le.parentNode,hs=we&&Le.nodeName.toLowerCase(),ds=!je&&!we,Dn=!1;if(Ft){if(he){for(;Pn;){for(Ze=Le;Ze=Ze[Pn];)if(we?Ze.nodeName.toLowerCase()===hs:Ze.nodeType===1)return!1;cn=Pn=R==="only"&&!cn&&"nextSibling"}return!0}if(cn=[ve?Ft.firstChild:Ft.lastChild],ve&&ds){for(Ze=Ft,Lt=Ze[Rt]||(Ze[Rt]={}),pt=Lt[Ze.uniqueID]||(Lt[Ze.uniqueID]={}),Je=pt[R]||[],Zt=Je[0]===yn&&Je[1],Dn=Zt&&Je[2],Ze=Zt&&Ft.childNodes[Zt];Ze=++Zt&&Ze&&Ze[Pn]||(Dn=Zt=0)||cn.pop();)if(Ze.nodeType===1&&++Dn&&Ze===Le){pt[R]=[yn,Zt,Dn];break}}else if(ds&&(Ze=Le,Lt=Ze[Rt]||(Ze[Rt]={}),pt=Lt[Ze.uniqueID]||(Lt[Ze.uniqueID]={}),Je=pt[R]||[],Zt=Je[0]===yn&&Je[1],Dn=Zt),Dn===!1)for(;(Ze=++Zt&&Ze&&Ze[Pn]||(Dn=Zt=0)||cn.pop())&&!((we?Ze.nodeName.toLowerCase()===hs:Ze.nodeType===1)&&++Dn&&(ds&&(Lt=Ze[Rt]||(Ze[Rt]={}),pt=Lt[Ze.uniqueID]||(Lt[Ze.uniqueID]={}),pt[R]=[yn,Dn]),Ze===Le)););return Dn-=W,Dn===oe||Dn%oe===0&&Dn/oe>=0}}},PSEUDO:function(R,B){var G,oe=_.pseudos[R]||_.setFilters[R.toLowerCase()]||Ct.error("unsupported pseudo: "+R);return oe[Rt]?oe(B):oe.length>1?(G=[R,R,"",B],_.setFilters.hasOwnProperty(R.toLowerCase())?Zn(function(W,he){for(var ve,we=oe(W,B),Le=we.length;Le--;)ve=Ki(W,we[Le]),W[ve]=!(he[ve]=we[Le])}):function(W){return oe(W,0,G)}):oe}},pseudos:{not:Zn(function(R){var B=[],G=[],oe=z(R.replace(Gs,"$1"));return oe[Rt]?Zn(function(W,he,ve,we){for(var Le,$e=oe(W,null,we,[]),je=W.length;je--;)(Le=$e[je])&&(W[je]=!(he[je]=Le))}):function(W,he,ve){return B[0]=W,oe(B,null,ve,G),B[0]=null,!G.pop()}}),has:Zn(function(R){return function(B){return Ct(R,B).length>0}}),contains:Zn(function(R){return R=R.replace(pi,mi),function(B){return(B.textContent||M(B)).indexOf(R)>-1}}),lang:Zn(function(R){return vh.test(R||"")||Ct.error("unsupported lang: "+R),R=R.replace(pi,mi).toLowerCase(),function(B){var G;do if(G=rt?B.lang:B.getAttribute("xml:lang")||B.getAttribute("lang"))return G=G.toLowerCase(),G===R||G.indexOf(R+"-")===0;while((B=B.parentNode)&&B.nodeType===1);return!1}}),target:function(R){var B=a.location&&a.location.hash;return B&&B.slice(1)===R.id},root:function(R){return R===Ve},focus:function(R){return R===re.activeElement&&(!re.hasFocus||re.hasFocus())&&!!(R.type||R.href||~R.tabIndex)},enabled:Vl(!1),disabled:Vl(!0),checked:function(R){var B=R.nodeName.toLowerCase();return B==="input"&&!!R.checked||B==="option"&&!!R.selected},selected:function(R){return R.parentNode&&R.parentNode.selectedIndex,R.selected===!0},empty:function(R){for(R=R.firstChild;R;R=R.nextSibling)if(R.nodeType<6)return!1;return!0},parent:function(R){return!_.pseudos.empty(R)},header:function(R){return Mh.test(R.nodeName)},input:function(R){return yh.test(R.nodeName)},button:function(R){var B=R.nodeName.toLowerCase();return B==="input"&&R.type==="button"||B==="button"},text:function(R){var B;return R.nodeName.toLowerCase()==="input"&&R.type==="text"&&((B=R.getAttribute("type"))==null||B.toLowerCase()==="text")},first:Zi(function(){return[0]}),last:Zi(function(R,B){return[B-1]}),eq:Zi(function(R,B,G){return[G<0?G+B:G]}),even:Zi(function(R,B){for(var G=0;G<B;G+=2)R.push(G);return R}),odd:Zi(function(R,B){for(var G=1;G<B;G+=2)R.push(G);return R}),lt:Zi(function(R,B,G){for(var oe=G<0?G+B:G>B?B:G;--oe>=0;)R.push(oe);return R}),gt:Zi(function(R,B,G){for(var oe=G<0?G+B:G;++oe<B;)R.push(oe);return R})}},_.pseudos.nth=_.pseudos.eq;for(c in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})_.pseudos[c]=Eh(c);for(c in{submit:!0,reset:!0})_.pseudos[c]=bh(c);function Wl(){}Wl.prototype=_.filters=_.pseudos,_.setFilters=new Wl,b=Ct.tokenize=function(R,B){var G,oe,W,he,ve,we,Le,$e=us[R+" "];if($e)return B?0:$e.slice(0);for(ve=R,we=[],Le=_.preFilter;ve;){(!G||(oe=mh.exec(ve)))&&(oe&&(ve=ve.slice(oe[0].length)||ve),we.push(W=[])),G=!1,(oe=Bl.exec(ve))&&(G=oe.shift(),W.push({value:G,type:oe[0].replace(Gs," ")}),ve=ve.slice(G.length));for(he in _.filter)(oe=Vs[he].exec(ve))&&(!Le[he]||(oe=Le[he](oe)))&&(G=oe.shift(),W.push({value:G,type:he,matches:oe}),ve=ve.slice(G.length));if(!G)break}return B?ve.length:ve?Ct.error(R):us(R,we).slice(0)};function Xs(R){for(var B=0,G=R.length,oe="";B<G;B++)oe+=R[B].value;return oe}function qs(R,B,G){var oe=B.dir,W=B.next,he=W||oe,ve=G&&he==="parentNode",we=yt++;return B.first?function(Le,$e,je){for(;Le=Le[oe];)if(Le.nodeType===1||ve)return R(Le,$e,je);return!1}:function(Le,$e,je){var Je,pt,Lt,Ze=[yn,we];if(je){for(;Le=Le[oe];)if((Le.nodeType===1||ve)&&R(Le,$e,je))return!0}else for(;Le=Le[oe];)if(Le.nodeType===1||ve)if(Lt=Le[Rt]||(Le[Rt]={}),pt=Lt[Le.uniqueID]||(Lt[Le.uniqueID]={}),W&&W===Le.nodeName.toLowerCase())Le=Le[oe]||Le;else{if((Je=pt[he])&&Je[0]===yn&&Je[1]===we)return Ze[2]=Je[2];if(pt[he]=Ze,Ze[2]=R(Le,$e,je))return!0}return!1}}function Qa(R){return R.length>1?function(B,G,oe){for(var W=R.length;W--;)if(!R[W](B,G,oe))return!1;return!0}:R[0]}function Ah(R,B,G){for(var oe=0,W=B.length;oe<W;oe++)Ct(R,B[oe],G);return G}function js(R,B,G,oe,W){for(var he,ve=[],we=0,Le=R.length,$e=B!=null;we<Le;we++)(he=R[we])&&(!G||G(he,oe,W))&&(ve.push(he),$e&&B.push(we));return ve}function eo(R,B,G,oe,W,he){return oe&&!oe[Rt]&&(oe=eo(oe)),W&&!W[Rt]&&(W=eo(W,he)),Zn(function(ve,we,Le,$e){var je,Je,pt,Lt=[],Ze=[],Zt=we.length,cn=ve||Ah(B||"*",Le.nodeType?[Le]:Le,[]),Pn=R&&(ve||!B)?js(cn,Lt,R,Le,$e):cn,Ft=G?W||(ve?R:Zt||oe)?[]:we:Pn;if(G&&G(Pn,Ft,Le,$e),oe)for(je=js(Ft,Ze),oe(je,[],Le,$e),Je=je.length;Je--;)(pt=je[Je])&&(Ft[Ze[Je]]=!(Pn[Ze[Je]]=pt));if(ve){if(W||R){if(W){for(je=[],Je=Ft.length;Je--;)(pt=Ft[Je])&&je.push(Pn[Je]=pt);W(null,Ft=[],je,$e)}for(Je=Ft.length;Je--;)(pt=Ft[Je])&&(je=W?Ki(ve,pt):Lt[Je])>-1&&(ve[je]=!(we[je]=pt))}}else Ft=js(Ft===we?Ft.splice(Zt,Ft.length):Ft),W?W(null,we,Ft,$e):Di.apply(we,Ft)})}function to(R){for(var B,G,oe,W=R.length,he=_.relative[R[0].type],ve=he||_.relative[" "],we=he?1:0,Le=qs(function(Je){return Je===B},ve,!0),$e=qs(function(Je){return Ki(B,Je)>-1},ve,!0),je=[function(Je,pt,Lt){var Ze=!he&&(Lt||pt!==X)||((B=pt).nodeType?Le(Je,pt,Lt):$e(Je,pt,Lt));return B=null,Ze}];we<W;we++)if(G=_.relative[R[we].type])je=[qs(Qa(je),G)];else{if(G=_.filter[R[we].type].apply(null,R[we].matches),G[Rt]){for(oe=++we;oe<W&&!_.relative[R[oe].type];oe++);return eo(we>1&&Qa(je),we>1&&Xs(R.slice(0,we-1).concat({value:R[we-2].type===" "?"*":""})).replace(Gs,"$1"),G,we<oe&&to(R.slice(we,oe)),oe<W&&to(R=R.slice(oe)),oe<W&&Xs(R))}je.push(G)}return Qa(je)}function wh(R,B){var G=B.length>0,oe=R.length>0,W=function(he,ve,we,Le,$e){var je,Je,pt,Lt=0,Ze="0",Zt=he&&[],cn=[],Pn=X,Ft=he||oe&&_.find.TAG("*",$e),hs=yn+=Pn==null?1:Math.random()||.1,ds=Ft.length;for($e&&(X=ve==re||ve||$e);Ze!==ds&&(je=Ft[Ze])!=null;Ze++){if(oe&&je){for(Je=0,!ve&&je.ownerDocument!=re&&($(je),we=!rt);pt=R[Je++];)if(pt(je,ve||re,we)){Le.push(je);break}$e&&(yn=hs)}G&&((je=!pt&&je)&&Lt--,he&&Zt.push(je))}if(Lt+=Ze,G&&Ze!==Lt){for(Je=0;pt=B[Je++];)pt(Zt,cn,ve,we);if(he){if(Lt>0)for(;Ze--;)Zt[Ze]||cn[Ze]||(cn[Ze]=Pi.call(Le));cn=js(cn)}Di.apply(Le,cn),$e&&!he&&cn.length>0&&Lt+B.length>1&&Ct.uniqueSort(Le)}return $e&&(yn=hs,X=Pn),Zt};return G?Zn(W):W}return z=Ct.compile=function(R,B){var G,oe=[],W=[],he=Hs[R+" "];if(!he){for(B||(B=b(R)),G=B.length;G--;)he=to(B[G]),he[Rt]?oe.push(he):W.push(he);he=Hs(R,wh(W,oe)),he.selector=R}return he},O=Ct.select=function(R,B,G,oe){var W,he,ve,we,Le,$e=typeof R=="function"&&R,je=!oe&&b(R=$e.selector||R);if(G=G||[],je.length===1){if(he=je[0]=je[0].slice(0),he.length>2&&(ve=he[0]).type==="ID"&&B.nodeType===9&&rt&&_.relative[he[1].type]){if(B=(_.find.ID(ve.matches[0].replace(pi,mi),B)||[])[0],B)$e&&(B=B.parentNode);else return G;R=R.slice(he.shift().value.length)}for(W=Vs.needsContext.test(R)?0:he.length;W--&&(ve=he[W],!_.relative[we=ve.type]);)if((Le=_.find[we])&&(oe=Le(ve.matches[0].replace(pi,mi),$a.test(he[0].type)&&Ja(B.parentNode)||B))){if(he.splice(W,1),R=oe.length&&Xs(he),!R)return Di.apply(G,oe),G;break}}return($e||z(R,je))(oe,B,!rt,G,!B||$a.test(R)&&Ja(B.parentNode)||B),G},d.sortStable=Rt.split("").sort(ji).join("")===Rt,d.detectDuplicates=!!_e,$(),d.sortDetached=zn(function(R){return R.compareDocumentPosition(re.createElement("fieldset"))&1}),zn(function(R){return R.innerHTML="<a href='#'></a>",R.firstChild.getAttribute("href")==="#"})||Za("type|href|height|width",function(R,B,G){if(!G)return R.getAttribute(B,B.toLowerCase()==="type"?1:2)}),(!d.attributes||!zn(function(R){return R.innerHTML="<input/>",R.firstChild.setAttribute("value",""),R.firstChild.getAttribute("value")===""}))&&Za("value",function(R,B,G){if(!G&&R.nodeName.toLowerCase()==="input")return R.defaultValue}),zn(function(R){return R.getAttribute("disabled")==null})||Za(Ya,function(R,B,G){var oe;if(!G)return R[B]===!0?B.toLowerCase():(oe=R.getAttributeNode(B))&&oe.specified?oe.value:null}),Ct}(e);h.find=Y,h.expr=Y.selectors,h.expr[":"]=h.expr.pseudos,h.uniqueSort=h.unique=Y.uniqueSort,h.text=Y.getText,h.isXMLDoc=Y.isXML,h.contains=Y.contains,h.escapeSelector=Y.escape;var w=function(a,c,d){for(var _=[],M=d!==void 0;(a=a[c])&&a.nodeType!==9;)if(a.nodeType===1){if(M&&h(a).is(d))break;_.push(a)}return _},U=function(a,c){for(var d=[];a;a=a.nextSibling)a.nodeType===1&&a!==c&&d.push(a);return d},fe=h.expr.match.needsContext;function Q(a,c){return a.nodeName&&a.nodeName.toLowerCase()===c.toLowerCase()}var q=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function te(a,c,d){return E(c)?h.grep(a,function(_,M){return!!c.call(_,M,_)!==d}):c.nodeType?h.grep(a,function(_){return _===c!==d}):typeof c!="string"?h.grep(a,function(_){return f.call(c,_)>-1!==d}):h.filter(c,a,d)}h.filter=function(a,c,d){var _=c[0];return d&&(a=":not("+a+")"),c.length===1&&_.nodeType===1?h.find.matchesSelector(_,a)?[_]:[]:h.find.matches(a,h.grep(c,function(M){return M.nodeType===1}))},h.fn.extend({find:function(a){var c,d,_=this.length,M=this;if(typeof a!="string")return this.pushStack(h(a).filter(function(){for(c=0;c<_;c++)if(h.contains(M[c],this))return!0}));for(d=this.pushStack([]),c=0;c<_;c++)h.find(a,M[c],d);return _>1?h.uniqueSort(d):d},filter:function(a){return this.pushStack(te(this,a||[],!1))},not:function(a){return this.pushStack(te(this,a||[],!0))},is:function(a){return!!te(this,typeof a=="string"&&fe.test(a)?h(a):a||[],!1).length}});var ee,ye=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,ue=h.fn.init=function(a,c,d){var _,M;if(!a)return this;if(d=d||ee,typeof a=="string")if(a[0]==="<"&&a[a.length-1]===">"&&a.length>=3?_=[null,a,null]:_=ye.exec(a),_&&(_[1]||!c))if(_[1]){if(c=c instanceof h?c[0]:c,h.merge(this,h.parseHTML(_[1],c&&c.nodeType?c.ownerDocument||c:g,!0)),q.test(_[1])&&h.isPlainObject(c))for(_ in c)E(this[_])?this[_](c[_]):this.attr(_,c[_]);return this}else return M=g.getElementById(_[2]),M&&(this[0]=M,this.length=1),this;else return!c||c.jquery?(c||d).find(a):this.constructor(c).find(a);else{if(a.nodeType)return this[0]=a,this.length=1,this;if(E(a))return d.ready!==void 0?d.ready(a):a(h)}return h.makeArray(a,this)};ue.prototype=h.fn,ee=h(g);var de=/^(?:parents|prev(?:Until|All))/,Me={children:!0,contents:!0,next:!0,prev:!0};h.fn.extend({has:function(a){var c=h(a,this),d=c.length;return this.filter(function(){for(var _=0;_<d;_++)if(h.contains(this,c[_]))return!0})},closest:function(a,c){var d,_=0,M=this.length,S=[],b=typeof a!="string"&&h(a);if(!fe.test(a)){for(;_<M;_++)for(d=this[_];d&&d!==c;d=d.parentNode)if(d.nodeType<11&&(b?b.index(d)>-1:d.nodeType===1&&h.find.matchesSelector(d,a))){S.push(d);break}}return this.pushStack(S.length>1?h.uniqueSort(S):S)},index:function(a){return a?typeof a=="string"?f.call(h(a),this[0]):f.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,c){return this.pushStack(h.uniqueSort(h.merge(this.get(),h(a,c))))},addBack:function(a){return this.add(a==null?this.prevObject:this.prevObject.filter(a))}});function ge(a,c){for(;(a=a[c])&&a.nodeType!==1;);return a}h.each({parent:function(a){var c=a.parentNode;return c&&c.nodeType!==11?c:null},parents:function(a){return w(a,"parentNode")},parentsUntil:function(a,c,d){return w(a,"parentNode",d)},next:function(a){return ge(a,"nextSibling")},prev:function(a){return ge(a,"previousSibling")},nextAll:function(a){return w(a,"nextSibling")},prevAll:function(a){return w(a,"previousSibling")},nextUntil:function(a,c,d){return w(a,"nextSibling",d)},prevUntil:function(a,c,d){return w(a,"previousSibling",d)},siblings:function(a){return U((a.parentNode||{}).firstChild,a)},children:function(a){return U(a.firstChild)},contents:function(a){return a.contentDocument!=null&&i(a.contentDocument)?a.contentDocument:(Q(a,"template")&&(a=a.content||a),h.merge([],a.childNodes))}},function(a,c){h.fn[a]=function(d,_){var M=h.map(this,c,d);return a.slice(-5)!=="Until"&&(_=d),_&&typeof _=="string"&&(M=h.filter(_,M)),this.length>1&&(Me[a]||h.uniqueSort(M),de.test(a)&&M.reverse()),this.pushStack(M)}});var Ne=/[^\x20\t\r\n\f]+/g;function Ae(a){var c={};return h.each(a.match(Ne)||[],function(d,_){c[_]=!0}),c}h.Callbacks=function(a){a=typeof a=="string"?Ae(a):h.extend({},a);var c,d,_,M,S=[],b=[],z=-1,O=function(){for(M=M||a.once,_=c=!0;b.length;z=-1)for(d=b.shift();++z<S.length;)S[z].apply(d[0],d[1])===!1&&a.stopOnFalse&&(z=S.length,d=!1);a.memory||(d=!1),c=!1,M&&(d?S=[]:S="")},X={add:function(){return S&&(d&&!c&&(z=S.length-1,b.push(d)),function J(_e){h.each(_e,function($,re){E(re)?(!a.unique||!X.has(re))&&S.push(re):re&&re.length&&L(re)!=="string"&&J(re)})}(arguments),d&&!c&&O()),this},remove:function(){return h.each(arguments,function(J,_e){for(var $;($=h.inArray(_e,S,$))>-1;)S.splice($,1),$<=z&&z--}),this},has:function(J){return J?h.inArray(J,S)>-1:S.length>0},empty:function(){return S&&(S=[]),this},disable:function(){return M=b=[],S=d="",this},disabled:function(){return!S},lock:function(){return M=b=[],!d&&!c&&(S=d=""),this},locked:function(){return!!M},fireWith:function(J,_e){return M||(_e=_e||[],_e=[J,_e.slice?_e.slice():_e],b.push(_e),c||O()),this},fire:function(){return X.fireWith(this,arguments),this},fired:function(){return!!_}};return X};function ie(a){return a}function pe(a){throw a}function Z(a,c,d,_){var M;try{a&&E(M=a.promise)?M.call(a).done(c).fail(d):a&&E(M=a.then)?M.call(a,c,d):c.apply(void 0,[a].slice(_))}catch(S){d.apply(void 0,[S])}}h.extend({Deferred:function(a){var c=[["notify","progress",h.Callbacks("memory"),h.Callbacks("memory"),2],["resolve","done",h.Callbacks("once memory"),h.Callbacks("once memory"),0,"resolved"],["reject","fail",h.Callbacks("once memory"),h.Callbacks("once memory"),1,"rejected"]],d="pending",_={state:function(){return d},always:function(){return M.done(arguments).fail(arguments),this},catch:function(S){return _.then(null,S)},pipe:function(){var S=arguments;return h.Deferred(function(b){h.each(c,function(z,O){var X=E(S[O[4]])&&S[O[4]];M[O[1]](function(){var J=X&&X.apply(this,arguments);J&&E(J.promise)?J.promise().progress(b.notify).done(b.resolve).fail(b.reject):b[O[0]+"With"](this,X?[J]:arguments)})}),S=null}).promise()},then:function(S,b,z){var O=0;function X(J,_e,$,re){return function(){var Ve=this,rt=arguments,He=function(){var Yt,Cn;if(!(J<O)){if(Yt=$.apply(Ve,rt),Yt===_e.promise())throw new TypeError("Thenable self-resolution");Cn=Yt&&(typeof Yt=="object"||typeof Yt=="function")&&Yt.then,E(Cn)?re?Cn.call(Yt,X(O,_e,ie,re),X(O,_e,pe,re)):(O++,Cn.call(Yt,X(O,_e,ie,re),X(O,_e,pe,re),X(O,_e,ie,_e.notifyWith))):($!==ie&&(Ve=void 0,rt=[Yt]),(re||_e.resolveWith)(Ve,rt))}},$t=re?He:function(){try{He()}catch(Yt){h.Deferred.exceptionHook&&h.Deferred.exceptionHook(Yt,$t.stackTrace),J+1>=O&&($!==pe&&(Ve=void 0,rt=[Yt]),_e.rejectWith(Ve,rt))}};J?$t():(h.Deferred.getStackHook&&($t.stackTrace=h.Deferred.getStackHook()),e.setTimeout($t))}}return h.Deferred(function(J){c[0][3].add(X(0,J,E(z)?z:ie,J.notifyWith)),c[1][3].add(X(0,J,E(S)?S:ie)),c[2][3].add(X(0,J,E(b)?b:pe))}).promise()},promise:function(S){return S!=null?h.extend(S,_):_}},M={};return h.each(c,function(S,b){var z=b[2],O=b[5];_[b[1]]=z.add,O&&z.add(function(){d=O},c[3-S][2].disable,c[3-S][3].disable,c[0][2].lock,c[0][3].lock),z.add(b[3].fire),M[b[0]]=function(){return M[b[0]+"With"](this===M?void 0:this,arguments),this},M[b[0]+"With"]=z.fireWith}),_.promise(M),a&&a.call(M,M),M},when:function(a){var c=arguments.length,d=c,_=Array(d),M=s.call(arguments),S=h.Deferred(),b=function(z){return function(O){_[z]=this,M[z]=arguments.length>1?s.call(arguments):O,--c||S.resolveWith(_,M)}};if(c<=1&&(Z(a,S.done(b(d)).resolve,S.reject,!c),S.state()==="pending"||E(M[d]&&M[d].then)))return S.then();for(;d--;)Z(M[d],b(d),S.reject);return S.promise()}});var me=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;h.Deferred.exceptionHook=function(a,c){e.console&&e.console.warn&&a&&me.test(a.name)&&e.console.warn("jQuery.Deferred exception: "+a.message,a.stack,c)},h.readyException=function(a){e.setTimeout(function(){throw a})};var F=h.Deferred();h.fn.ready=function(a){return F.then(a).catch(function(c){h.readyException(c)}),this},h.extend({isReady:!1,readyWait:1,ready:function(a){(a===!0?--h.readyWait:h.isReady)||(h.isReady=!0,!(a!==!0&&--h.readyWait>0)&&F.resolveWith(g,[h]))}}),h.ready.then=F.then;function Ee(){g.removeEventListener("DOMContentLoaded",Ee),e.removeEventListener("load",Ee),h.ready()}g.readyState==="complete"||g.readyState!=="loading"&&!g.documentElement.doScroll?e.setTimeout(h.ready):(g.addEventListener("DOMContentLoaded",Ee),e.addEventListener("load",Ee));var De=function(a,c,d,_,M,S,b){var z=0,O=a.length,X=d==null;if(L(d)==="object"){M=!0;for(z in d)De(a,c,z,d[z],!0,S,b)}else if(_!==void 0&&(M=!0,E(_)||(b=!0),X&&(b?(c.call(a,_),c=null):(X=c,c=function(J,_e,$){return X.call(h(J),$)})),c))for(;z<O;z++)c(a[z],d,b?_:_.call(a[z],z,c(a[z],d)));return M?a:X?c.call(a):O?c(a[0],d):S},be=/^-ms-/,qe=/-([a-z])/g;function Mt(a,c){return c.toUpperCase()}function Oe(a){return a.replace(be,"ms-").replace(qe,Mt)}var ot=function(a){return a.nodeType===1||a.nodeType===9||!+a.nodeType};function Nt(){this.expando=h.expando+Nt.uid++}Nt.uid=1,Nt.prototype={cache:function(a){var c=a[this.expando];return c||(c={},ot(a)&&(a.nodeType?a[this.expando]=c:Object.defineProperty(a,this.expando,{value:c,configurable:!0}))),c},set:function(a,c,d){var _,M=this.cache(a);if(typeof c=="string")M[Oe(c)]=d;else for(_ in c)M[Oe(_)]=c[_];return M},get:function(a,c){return c===void 0?this.cache(a):a[this.expando]&&a[this.expando][Oe(c)]},access:function(a,c,d){return c===void 0||c&&typeof c=="string"&&d===void 0?this.get(a,c):(this.set(a,c,d),d!==void 0?d:c)},remove:function(a,c){var d,_=a[this.expando];if(_!==void 0){if(c!==void 0)for(Array.isArray(c)?c=c.map(Oe):(c=Oe(c),c=c in _?[c]:c.match(Ne)||[]),d=c.length;d--;)delete _[c[d]];(c===void 0||h.isEmptyObject(_))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var c=a[this.expando];return c!==void 0&&!h.isEmptyObject(c)}};var Ie=new Nt,xt=new Nt,Vt=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,St=/[A-Z]/g;function Ut(a){return a==="true"?!0:a==="false"?!1:a==="null"?null:a===+a+""?+a:Vt.test(a)?JSON.parse(a):a}function sn(a,c,d){var _;if(d===void 0&&a.nodeType===1)if(_="data-"+c.replace(St,"-$&").toLowerCase(),d=a.getAttribute(_),typeof d=="string"){try{d=Ut(d)}catch{}xt.set(a,c,d)}else d=void 0;return d}h.extend({hasData:function(a){return xt.hasData(a)||Ie.hasData(a)},data:function(a,c,d){return xt.access(a,c,d)},removeData:function(a,c){xt.remove(a,c)},_data:function(a,c,d){return Ie.access(a,c,d)},_removeData:function(a,c){Ie.remove(a,c)}}),h.fn.extend({data:function(a,c){var d,_,M,S=this[0],b=S&&S.attributes;if(a===void 0){if(this.length&&(M=xt.get(S),S.nodeType===1&&!Ie.get(S,"hasDataAttrs"))){for(d=b.length;d--;)b[d]&&(_=b[d].name,_.indexOf("data-")===0&&(_=Oe(_.slice(5)),sn(S,_,M[_])));Ie.set(S,"hasDataAttrs",!0)}return M}return typeof a=="object"?this.each(function(){xt.set(this,a)}):De(this,function(z){var O;if(S&&z===void 0)return O=xt.get(S,a),O!==void 0||(O=sn(S,a),O!==void 0)?O:void 0;this.each(function(){xt.set(this,a,z)})},null,c,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){xt.remove(this,a)})}}),h.extend({queue:function(a,c,d){var _;if(a)return c=(c||"fx")+"queue",_=Ie.get(a,c),d&&(!_||Array.isArray(d)?_=Ie.access(a,c,h.makeArray(d)):_.push(d)),_||[]},dequeue:function(a,c){c=c||"fx";var d=h.queue(a,c),_=d.length,M=d.shift(),S=h._queueHooks(a,c),b=function(){h.dequeue(a,c)};M==="inprogress"&&(M=d.shift(),_--),M&&(c==="fx"&&d.unshift("inprogress"),delete S.stop,M.call(a,b,S)),!_&&S&&S.empty.fire()},_queueHooks:function(a,c){var d=c+"queueHooks";return Ie.get(a,d)||Ie.access(a,d,{empty:h.Callbacks("once memory").add(function(){Ie.remove(a,[c+"queue",d])})})}}),h.fn.extend({queue:function(a,c){var d=2;return typeof a!="string"&&(c=a,a="fx",d--),arguments.length<d?h.queue(this[0],a):c===void 0?this:this.each(function(){var _=h.queue(this,a,c);h._queueHooks(this,a),a==="fx"&&_[0]!=="inprogress"&&h.dequeue(this,a)})},dequeue:function(a){return this.each(function(){h.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){var d,_=1,M=h.Deferred(),S=this,b=this.length,z=function(){--_||M.resolveWith(S,[S])};for(typeof a!="string"&&(c=a,a=void 0),a=a||"fx";b--;)d=Ie.get(S[b],a+"queueHooks"),d&&d.empty&&(_++,d.empty.add(z));return z(),M.promise(c)}});var N=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,P=new RegExp("^(?:([+-])=|)("+N+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],xe=g.documentElement,Te=function(a){return h.contains(a.ownerDocument,a)},Pe={composed:!0};xe.getRootNode&&(Te=function(a){return h.contains(a.ownerDocument,a)||a.getRootNode(Pe)===a.ownerDocument});var Ye=function(a,c){return a=c||a,a.style.display==="none"||a.style.display===""&&Te(a)&&h.css(a,"display")==="none"};function Fe(a,c,d,_){var M,S,b=20,z=_?function(){return _.cur()}:function(){return h.css(a,c,"")},O=z(),X=d&&d[3]||(h.cssNumber[c]?"":"px"),J=a.nodeType&&(h.cssNumber[c]||X!=="px"&&+O)&&P.exec(h.css(a,c));if(J&&J[3]!==X){for(O=O/2,X=X||J[3],J=+O||1;b--;)h.style(a,c,J+X),(1-S)*(1-(S=z()/O||.5))<=0&&(b=0),J=J/S;J=J*2,h.style(a,c,J+X),d=d||[]}return d&&(J=+J||+O||0,M=d[1]?J+(d[1]+1)*d[2]:+d[2],_&&(_.unit=X,_.start=J,_.end=M)),M}var ce={};function Ge(a){var c,d=a.ownerDocument,_=a.nodeName,M=ce[_];return M||(c=d.body.appendChild(d.createElement(_)),M=h.css(c,"display"),c.parentNode.removeChild(c),M==="none"&&(M="block"),ce[_]=M,M)}function ze(a,c){for(var d,_,M=[],S=0,b=a.length;S<b;S++)_=a[S],_.style&&(d=_.style.display,c?(d==="none"&&(M[S]=Ie.get(_,"display")||null,M[S]||(_.style.display="")),_.style.display===""&&Ye(_)&&(M[S]=Ge(_))):d!=="none"&&(M[S]="none",Ie.set(_,"display",d)));for(S=0;S<b;S++)M[S]!=null&&(a[S].style.display=M[S]);return a}h.fn.extend({show:function(){return ze(this,!0)},hide:function(){return ze(this)},toggle:function(a){return typeof a=="boolean"?a?this.show():this.hide():this.each(function(){Ye(this)?h(this).show():h(this).hide()})}});var We=/^(?:checkbox|radio)$/i,Ue=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,ke=/^$|^module$|\/(?:java|ecma)script/i;(function(){var a=g.createDocumentFragment(),c=a.appendChild(g.createElement("div")),d=g.createElement("input");d.setAttribute("type","radio"),d.setAttribute("checked","checked"),d.setAttribute("name","t"),c.appendChild(d),T.checkClone=c.cloneNode(!0).cloneNode(!0).lastChild.checked,c.innerHTML="<textarea>x</textarea>",T.noCloneChecked=!!c.cloneNode(!0).lastChild.defaultValue,c.innerHTML="<option></option>",T.option=!!c.lastChild})();var et={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};et.tbody=et.tfoot=et.colgroup=et.caption=et.thead,et.th=et.td,T.option||(et.optgroup=et.option=[1,"<select multiple='multiple'>","</select>"]);function st(a,c){var d;return typeof a.getElementsByTagName<"u"?d=a.getElementsByTagName(c||"*"):typeof a.querySelectorAll<"u"?d=a.querySelectorAll(c||"*"):d=[],c===void 0||c&&Q(a,c)?h.merge([a],d):d}function It(a,c){for(var d=0,_=a.length;d<_;d++)Ie.set(a[d],"globalEval",!c||Ie.get(c[d],"globalEval"))}var V=/<|&#?\w+;/;function ae(a,c,d,_,M){for(var S,b,z,O,X,J,_e=c.createDocumentFragment(),$=[],re=0,Ve=a.length;re<Ve;re++)if(S=a[re],S||S===0)if(L(S)==="object")h.merge($,S.nodeType?[S]:S);else if(!V.test(S))$.push(c.createTextNode(S));else{for(b=b||_e.appendChild(c.createElement("div")),z=(Ue.exec(S)||["",""])[1].toLowerCase(),O=et[z]||et._default,b.innerHTML=O[1]+h.htmlPrefilter(S)+O[2],J=O[0];J--;)b=b.lastChild;h.merge($,b.childNodes),b=_e.firstChild,b.textContent=""}for(_e.textContent="",re=0;S=$[re++];){if(_&&h.inArray(S,_)>-1){M&&M.push(S);continue}if(X=Te(S),b=st(_e.appendChild(S),"script"),X&&It(b),d)for(J=0;S=b[J++];)ke.test(S.type||"")&&d.push(S)}return _e}var Se=/^([^.]*)(?:\.(.+)|)/;function Ce(){return!0}function Be(){return!1}function bt(a,c){return a===At()==(c==="focus")}function At(){try{return g.activeElement}catch{}}function Xt(a,c,d,_,M,S){var b,z;if(typeof c=="object"){typeof d!="string"&&(_=_||d,d=void 0);for(z in c)Xt(a,z,d,_,c[z],S);return a}if(_==null&&M==null?(M=d,_=d=void 0):M==null&&(typeof d=="string"?(M=_,_=void 0):(M=_,_=d,d=void 0)),M===!1)M=Be;else if(!M)return a;return S===1&&(b=M,M=function(O){return h().off(O),b.apply(this,arguments)},M.guid=b.guid||(b.guid=h.guid++)),a.each(function(){h.event.add(this,c,M,_,d)})}h.event={global:{},add:function(a,c,d,_,M){var S,b,z,O,X,J,_e,$,re,Ve,rt,He=Ie.get(a);if(ot(a))for(d.handler&&(S=d,d=S.handler,M=S.selector),M&&h.find.matchesSelector(xe,M),d.guid||(d.guid=h.guid++),(O=He.events)||(O=He.events=Object.create(null)),(b=He.handle)||(b=He.handle=function($t){return typeof h<"u"&&h.event.triggered!==$t.type?h.event.dispatch.apply(a,arguments):void 0}),c=(c||"").match(Ne)||[""],X=c.length;X--;)z=Se.exec(c[X])||[],re=rt=z[1],Ve=(z[2]||"").split(".").sort(),re&&(_e=h.event.special[re]||{},re=(M?_e.delegateType:_e.bindType)||re,_e=h.event.special[re]||{},J=h.extend({type:re,origType:rt,data:_,handler:d,guid:d.guid,selector:M,needsContext:M&&h.expr.match.needsContext.test(M),namespace:Ve.join(".")},S),($=O[re])||($=O[re]=[],$.delegateCount=0,(!_e.setup||_e.setup.call(a,_,Ve,b)===!1)&&a.addEventListener&&a.addEventListener(re,b)),_e.add&&(_e.add.call(a,J),J.handler.guid||(J.handler.guid=d.guid)),M?$.splice($.delegateCount++,0,J):$.push(J),h.event.global[re]=!0)},remove:function(a,c,d,_,M){var S,b,z,O,X,J,_e,$,re,Ve,rt,He=Ie.hasData(a)&&Ie.get(a);if(!(!He||!(O=He.events))){for(c=(c||"").match(Ne)||[""],X=c.length;X--;){if(z=Se.exec(c[X])||[],re=rt=z[1],Ve=(z[2]||"").split(".").sort(),!re){for(re in O)h.event.remove(a,re+c[X],d,_,!0);continue}for(_e=h.event.special[re]||{},re=(_?_e.delegateType:_e.bindType)||re,$=O[re]||[],z=z[2]&&new RegExp("(^|\\.)"+Ve.join("\\.(?:.*\\.|)")+"(\\.|$)"),b=S=$.length;S--;)J=$[S],(M||rt===J.origType)&&(!d||d.guid===J.guid)&&(!z||z.test(J.namespace))&&(!_||_===J.selector||_==="**"&&J.selector)&&($.splice(S,1),J.selector&&$.delegateCount--,_e.remove&&_e.remove.call(a,J));b&&!$.length&&((!_e.teardown||_e.teardown.call(a,Ve,He.handle)===!1)&&h.removeEvent(a,re,He.handle),delete O[re])}h.isEmptyObject(O)&&Ie.remove(a,"handle events")}},dispatch:function(a){var c,d,_,M,S,b,z=new Array(arguments.length),O=h.event.fix(a),X=(Ie.get(this,"events")||Object.create(null))[O.type]||[],J=h.event.special[O.type]||{};for(z[0]=O,c=1;c<arguments.length;c++)z[c]=arguments[c];if(O.delegateTarget=this,!(J.preDispatch&&J.preDispatch.call(this,O)===!1)){for(b=h.event.handlers.call(this,O,X),c=0;(M=b[c++])&&!O.isPropagationStopped();)for(O.currentTarget=M.elem,d=0;(S=M.handlers[d++])&&!O.isImmediatePropagationStopped();)(!O.rnamespace||S.namespace===!1||O.rnamespace.test(S.namespace))&&(O.handleObj=S,O.data=S.data,_=((h.event.special[S.origType]||{}).handle||S.handler).apply(M.elem,z),_!==void 0&&(O.result=_)===!1&&(O.preventDefault(),O.stopPropagation()));return J.postDispatch&&J.postDispatch.call(this,O),O.result}},handlers:function(a,c){var d,_,M,S,b,z=[],O=c.delegateCount,X=a.target;if(O&&X.nodeType&&!(a.type==="click"&&a.button>=1)){for(;X!==this;X=X.parentNode||this)if(X.nodeType===1&&!(a.type==="click"&&X.disabled===!0)){for(S=[],b={},d=0;d<O;d++)_=c[d],M=_.selector+" ",b[M]===void 0&&(b[M]=_.needsContext?h(M,this).index(X)>-1:h.find(M,this,null,[X]).length),b[M]&&S.push(_);S.length&&z.push({elem:X,handlers:S})}}return X=this,O<c.length&&z.push({elem:X,handlers:c.slice(O)}),z},addProp:function(a,c){Object.defineProperty(h.Event.prototype,a,{enumerable:!0,configurable:!0,get:E(c)?function(){if(this.originalEvent)return c(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[a]},set:function(d){Object.defineProperty(this,a,{enumerable:!0,configurable:!0,writable:!0,value:d})}})},fix:function(a){return a[h.expando]?a:new h.Event(a)},special:{load:{noBubble:!0},click:{setup:function(a){var c=this||a;return We.test(c.type)&&c.click&&Q(c,"input")&&wn(c,"click",Ce),!1},trigger:function(a){var c=this||a;return We.test(c.type)&&c.click&&Q(c,"input")&&wn(c,"click"),!0},_default:function(a){var c=a.target;return We.test(c.type)&&c.click&&Q(c,"input")&&Ie.get(c,"click")||Q(c,"a")}},beforeunload:{postDispatch:function(a){a.result!==void 0&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}};function wn(a,c,d){if(!d){Ie.get(a,c)===void 0&&h.event.add(a,c,Ce);return}Ie.set(a,c,!1),h.event.add(a,c,{namespace:!1,handler:function(_){var M,S,b=Ie.get(this,c);if(_.isTrigger&1&&this[c]){if(b.length)(h.event.special[c]||{}).delegateType&&_.stopPropagation();else if(b=s.call(arguments),Ie.set(this,c,b),M=d(this,c),this[c](),S=Ie.get(this,c),b!==S||M?Ie.set(this,c,!1):S={},b!==S)return _.stopImmediatePropagation(),_.preventDefault(),S&&S.value}else b.length&&(Ie.set(this,c,{value:h.event.trigger(h.extend(b[0],h.Event.prototype),b.slice(1),this)}),_.stopImmediatePropagation())}})}h.removeEvent=function(a,c,d){a.removeEventListener&&a.removeEventListener(c,d)},h.Event=function(a,c){if(!(this instanceof h.Event))return new h.Event(a,c);a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.defaultPrevented===void 0&&a.returnValue===!1?Ce:Be,this.target=a.target&&a.target.nodeType===3?a.target.parentNode:a.target,this.currentTarget=a.currentTarget,this.relatedTarget=a.relatedTarget):this.type=a,c&&h.extend(this,c),this.timeStamp=a&&a.timeStamp||Date.now(),this[h.expando]=!0},h.Event.prototype={constructor:h.Event,isDefaultPrevented:Be,isPropagationStopped:Be,isImmediatePropagationStopped:Be,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Ce,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Ce,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Ce,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},h.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},h.event.addProp),h.each({focus:"focusin",blur:"focusout"},function(a,c){h.event.special[a]={setup:function(){return wn(this,a,bt),!1},trigger:function(){return wn(this,a),!0},_default:function(d){return Ie.get(d.target,a)},delegateType:c}}),h.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,c){h.event.special[a]={delegateType:c,bindType:c,handle:function(d){var _,M=this,S=d.relatedTarget,b=d.handleObj;return(!S||S!==M&&!h.contains(M,S))&&(d.type=b.origType,_=b.handler.apply(this,arguments),d.type=c),_}}}),h.fn.extend({on:function(a,c,d,_){return Xt(this,a,c,d,_)},one:function(a,c,d,_){return Xt(this,a,c,d,_,1)},off:function(a,c,d){var _,M;if(a&&a.preventDefault&&a.handleObj)return _=a.handleObj,h(a.delegateTarget).off(_.namespace?_.origType+"."+_.namespace:_.origType,_.selector,_.handler),this;if(typeof a=="object"){for(M in a)this.off(M,c,a[M]);return this}return(c===!1||typeof c=="function")&&(d=c,c=void 0),d===!1&&(d=Be),this.each(function(){h.event.remove(this,a,d,c)})}});var zt=/<script|<style|<link/i,xn=/checked\s*(?:[^=]|=\s*.checked.)/i,On=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function Wi(a,c){return Q(a,"table")&&Q(c.nodeType!==11?c:c.firstChild,"tr")&&h(a).children("tbody")[0]||a}function zs(a){return a.type=(a.getAttribute("type")!==null)+"/"+a.type,a}function za(a){return(a.type||"").slice(0,5)==="true/"?a.type=a.type.slice(5):a.removeAttribute("type"),a}function ks(a,c){var d,_,M,S,b,z,O;if(c.nodeType===1){if(Ie.hasData(a)&&(S=Ie.get(a),O=S.events,O)){Ie.remove(c,"handle events");for(M in O)for(d=0,_=O[M].length;d<_;d++)h.event.add(c,M,O[M][d])}xt.hasData(a)&&(b=xt.access(a),z=h.extend({},b),xt.set(c,z))}}function ka(a,c){var d=c.nodeName.toLowerCase();d==="input"&&We.test(a.type)?c.checked=a.checked:(d==="input"||d==="textarea")&&(c.defaultValue=a.defaultValue)}function D(a,c,d,_){c=o(c);var M,S,b,z,O,X,J=0,_e=a.length,$=_e-1,re=c[0],Ve=E(re);if(Ve||_e>1&&typeof re=="string"&&!T.checkClone&&xn.test(re))return a.each(function(rt){var He=a.eq(rt);Ve&&(c[0]=re.call(this,rt,He.html())),D(He,c,d,_)});if(_e&&(M=ae(c,a[0].ownerDocument,!1,a,_),S=M.firstChild,M.childNodes.length===1&&(M=S),S||_)){for(b=h.map(st(M,"script"),zs),z=b.length;J<_e;J++)O=M,J!==$&&(O=h.clone(O,!0,!0),z&&h.merge(b,st(O,"script"))),d.call(a[J],O,J);if(z)for(X=b[b.length-1].ownerDocument,h.map(b,za),J=0;J<z;J++)O=b[J],ke.test(O.type||"")&&!Ie.access(O,"globalEval")&&h.contains(X,O)&&(O.src&&(O.type||"").toLowerCase()!=="module"?h._evalUrl&&!O.noModule&&h._evalUrl(O.src,{nonce:O.nonce||O.getAttribute("nonce")},X):A(O.textContent.replace(On,""),O,X))}return a}function K(a,c,d){for(var _,M=c?h.filter(c,a):a,S=0;(_=M[S])!=null;S++)!d&&_.nodeType===1&&h.cleanData(st(_)),_.parentNode&&(d&&Te(_)&&It(st(_,"script")),_.parentNode.removeChild(_));return a}h.extend({htmlPrefilter:function(a){return a},clone:function(a,c,d){var _,M,S,b,z=a.cloneNode(!0),O=Te(a);if(!T.noCloneChecked&&(a.nodeType===1||a.nodeType===11)&&!h.isXMLDoc(a))for(b=st(z),S=st(a),_=0,M=S.length;_<M;_++)ka(S[_],b[_]);if(c)if(d)for(S=S||st(a),b=b||st(z),_=0,M=S.length;_<M;_++)ks(S[_],b[_]);else ks(a,z);return b=st(z,"script"),b.length>0&&It(b,!O&&st(a,"script")),z},cleanData:function(a){for(var c,d,_,M=h.event.special,S=0;(d=a[S])!==void 0;S++)if(ot(d)){if(c=d[Ie.expando]){if(c.events)for(_ in c.events)M[_]?h.event.remove(d,_):h.removeEvent(d,_,c.handle);d[Ie.expando]=void 0}d[xt.expando]&&(d[xt.expando]=void 0)}}}),h.fn.extend({detach:function(a){return K(this,a,!0)},remove:function(a){return K(this,a)},text:function(a){return De(this,function(c){return c===void 0?h.text(this):this.empty().each(function(){(this.nodeType===1||this.nodeType===11||this.nodeType===9)&&(this.textContent=c)})},null,a,arguments.length)},append:function(){return D(this,arguments,function(a){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var c=Wi(this,a);c.appendChild(a)}})},prepend:function(){return D(this,arguments,function(a){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var c=Wi(this,a);c.insertBefore(a,c.firstChild)}})},before:function(){return D(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return D(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,c=0;(a=this[c])!=null;c++)a.nodeType===1&&(h.cleanData(st(a,!1)),a.textContent="");return this},clone:function(a,c){return a=a??!1,c=c??a,this.map(function(){return h.clone(this,a,c)})},html:function(a){return De(this,function(c){var d=this[0]||{},_=0,M=this.length;if(c===void 0&&d.nodeType===1)return d.innerHTML;if(typeof c=="string"&&!zt.test(c)&&!et[(Ue.exec(c)||["",""])[1].toLowerCase()]){c=h.htmlPrefilter(c);try{for(;_<M;_++)d=this[_]||{},d.nodeType===1&&(h.cleanData(st(d,!1)),d.innerHTML=c);d=0}catch{}}d&&this.empty().append(c)},null,a,arguments.length)},replaceWith:function(){var a=[];return D(this,arguments,function(c){var d=this.parentNode;h.inArray(this,a)<0&&(h.cleanData(st(this)),d&&d.replaceChild(c,this))},a)}}),h.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,c){h.fn[a]=function(d){for(var _,M=[],S=h(d),b=S.length-1,z=0;z<=b;z++)_=z===b?this:this.clone(!0),h(S[z])[c](_),l.apply(M,_.get());return this.pushStack(M)}});var se=new RegExp("^("+N+")(?!px)[a-z%]+$","i"),j=/^--/,le=function(a){var c=a.ownerDocument.defaultView;return(!c||!c.opener)&&(c=e),c.getComputedStyle(a)},Xe=function(a,c,d){var _,M,S={};for(M in c)S[M]=a.style[M],a.style[M]=c[M];_=d.call(a);for(M in c)a.style[M]=S[M];return _},Ke=new RegExp(ne.join("|"),"i"),tt="[\\x20\\t\\r\\n\\f]",ut=new RegExp("^"+tt+"+|((?:^|[^\\\\])(?:\\\\.)*)"+tt+"+$","g");(function(){function a(){if(X){O.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",X.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",xe.appendChild(O).appendChild(X);var J=e.getComputedStyle(X);d=J.top!=="1%",z=c(J.marginLeft)===12,X.style.right="60%",S=c(J.right)===36,_=c(J.width)===36,X.style.position="absolute",M=c(X.offsetWidth/3)===12,xe.removeChild(O),X=null}}function c(J){return Math.round(parseFloat(J))}var d,_,M,S,b,z,O=g.createElement("div"),X=g.createElement("div");X.style&&(X.style.backgroundClip="content-box",X.cloneNode(!0).style.backgroundClip="",T.clearCloneStyle=X.style.backgroundClip==="content-box",h.extend(T,{boxSizingReliable:function(){return a(),_},pixelBoxStyles:function(){return a(),S},pixelPosition:function(){return a(),d},reliableMarginLeft:function(){return a(),z},scrollboxSize:function(){return a(),M},reliableTrDimensions:function(){var J,_e,$,re;return b==null&&(J=g.createElement("table"),_e=g.createElement("tr"),$=g.createElement("div"),J.style.cssText="position:absolute;left:-11111px;border-collapse:separate",_e.style.cssText="border:1px solid",_e.style.height="1px",$.style.height="9px",$.style.display="block",xe.appendChild(J).appendChild(_e).appendChild($),re=e.getComputedStyle(_e),b=parseInt(re.height,10)+parseInt(re.borderTopWidth,10)+parseInt(re.borderBottomWidth,10)===_e.offsetHeight,xe.removeChild(J)),b}}))})();function at(a,c,d){var _,M,S,b,z=j.test(c),O=a.style;return d=d||le(a),d&&(b=d.getPropertyValue(c)||d[c],z&&b&&(b=b.replace(ut,"$1")||void 0),b===""&&!Te(a)&&(b=h.style(a,c)),!T.pixelBoxStyles()&&se.test(b)&&Ke.test(c)&&(_=O.width,M=O.minWidth,S=O.maxWidth,O.minWidth=O.maxWidth=O.width=b,b=d.width,O.width=_,O.minWidth=M,O.maxWidth=S)),b!==void 0?b+"":b}function ft(a,c){return{get:function(){if(a()){delete this.get;return}return(this.get=c).apply(this,arguments)}}}var ht=["Webkit","Moz","ms"],Tt=g.createElement("div").style,nn={};function Rn(a){for(var c=a[0].toUpperCase()+a.slice(1),d=ht.length;d--;)if(a=ht[d]+c,a in Tt)return a}function Yn(a){var c=h.cssProps[a]||nn[a];return c||(a in Tt?a:nn[a]=Rn(a)||a)}var Ht=/^(none|table(?!-c[ea]).+)/,gt={position:"absolute",visibility:"hidden",display:"block"},mr={letterSpacing:"0",fontWeight:"400"};function Wt(a,c,d){var _=P.exec(c);return _?Math.max(0,_[2]-(d||0))+(_[3]||"px"):c}function Kn(a,c,d,_,M,S){var b=c==="width"?1:0,z=0,O=0;if(d===(_?"border":"content"))return 0;for(;b<4;b+=2)d==="margin"&&(O+=h.css(a,d+ne[b],!0,M)),_?(d==="content"&&(O-=h.css(a,"padding"+ne[b],!0,M)),d!=="margin"&&(O-=h.css(a,"border"+ne[b]+"Width",!0,M))):(O+=h.css(a,"padding"+ne[b],!0,M),d!=="padding"?O+=h.css(a,"border"+ne[b]+"Width",!0,M):z+=h.css(a,"border"+ne[b]+"Width",!0,M));return!_&&S>=0&&(O+=Math.max(0,Math.ceil(a["offset"+c[0].toUpperCase()+c.slice(1)]-S-O-z-.5))||0),O}function rs(a,c,d){var _=le(a),M=!T.boxSizingReliable()||d,S=M&&h.css(a,"boxSizing",!1,_)==="border-box",b=S,z=at(a,c,_),O="offset"+c[0].toUpperCase()+c.slice(1);if(se.test(z)){if(!d)return z;z="auto"}return(!T.boxSizingReliable()&&S||!T.reliableTrDimensions()&&Q(a,"tr")||z==="auto"||!parseFloat(z)&&h.css(a,"display",!1,_)==="inline")&&a.getClientRects().length&&(S=h.css(a,"boxSizing",!1,_)==="border-box",b=O in a,b&&(z=a[O])),z=parseFloat(z)||0,z+Kn(a,c,d||(S?"border":"content"),b,_,z)+"px"}h.extend({cssHooks:{opacity:{get:function(a,c){if(c){var d=at(a,"opacity");return d===""?"1":d}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(a,c,d,_){if(!(!a||a.nodeType===3||a.nodeType===8||!a.style)){var M,S,b,z=Oe(c),O=j.test(c),X=a.style;if(O||(c=Yn(z)),b=h.cssHooks[c]||h.cssHooks[z],d!==void 0){if(S=typeof d,S==="string"&&(M=P.exec(d))&&M[1]&&(d=Fe(a,c,M),S="number"),d==null||d!==d)return;S==="number"&&!O&&(d+=M&&M[3]||(h.cssNumber[z]?"":"px")),!T.clearCloneStyle&&d===""&&c.indexOf("background")===0&&(X[c]="inherit"),(!b||!("set"in b)||(d=b.set(a,d,_))!==void 0)&&(O?X.setProperty(c,d):X[c]=d)}else return b&&"get"in b&&(M=b.get(a,!1,_))!==void 0?M:X[c]}},css:function(a,c,d,_){var M,S,b,z=Oe(c),O=j.test(c);return O||(c=Yn(z)),b=h.cssHooks[c]||h.cssHooks[z],b&&"get"in b&&(M=b.get(a,!0,d)),M===void 0&&(M=at(a,c,_)),M==="normal"&&c in mr&&(M=mr[c]),d===""||d?(S=parseFloat(M),d===!0||isFinite(S)?S||0:M):M}}),h.each(["height","width"],function(a,c){h.cssHooks[c]={get:function(d,_,M){if(_)return Ht.test(h.css(d,"display"))&&(!d.getClientRects().length||!d.getBoundingClientRect().width)?Xe(d,gt,function(){return rs(d,c,M)}):rs(d,c,M)},set:function(d,_,M){var S,b=le(d),z=!T.scrollboxSize()&&b.position==="absolute",O=z||M,X=O&&h.css(d,"boxSizing",!1,b)==="border-box",J=M?Kn(d,c,M,X,b):0;return X&&z&&(J-=Math.ceil(d["offset"+c[0].toUpperCase()+c.slice(1)]-parseFloat(b[c])-Kn(d,c,"border",!1,b)-.5)),J&&(S=P.exec(_))&&(S[3]||"px")!=="px"&&(d.style[c]=_,_=h.css(d,c)),Wt(d,_,J)}}}),h.cssHooks.marginLeft=ft(T.reliableMarginLeft,function(a,c){if(c)return(parseFloat(at(a,"marginLeft"))||a.getBoundingClientRect().left-Xe(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px"}),h.each({margin:"",padding:"",border:"Width"},function(a,c){h.cssHooks[a+c]={expand:function(d){for(var _=0,M={},S=typeof d=="string"?d.split(" "):[d];_<4;_++)M[a+ne[_]+c]=S[_]||S[_-2]||S[0];return M}},a!=="margin"&&(h.cssHooks[a+c].set=Wt)}),h.fn.extend({css:function(a,c){return De(this,function(d,_,M){var S,b,z={},O=0;if(Array.isArray(_)){for(S=le(d),b=_.length;O<b;O++)z[_[O]]=h.css(d,_[O],!1,S);return z}return M!==void 0?h.style(d,_,M):h.css(d,_)},a,c,arguments.length>1)}});function qt(a,c,d,_,M){return new qt.prototype.init(a,c,d,_,M)}h.Tween=qt,qt.prototype={constructor:qt,init:function(a,c,d,_,M,S){this.elem=a,this.prop=d,this.easing=M||h.easing._default,this.options=c,this.start=this.now=this.cur(),this.end=_,this.unit=S||(h.cssNumber[d]?"":"px")},cur:function(){var a=qt.propHooks[this.prop];return a&&a.get?a.get(this):qt.propHooks._default.get(this)},run:function(a){var c,d=qt.propHooks[this.prop];return this.options.duration?this.pos=c=h.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=c=a,this.now=(this.end-this.start)*c+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),d&&d.set?d.set(this):qt.propHooks._default.set(this),this}},qt.prototype.init.prototype=qt.prototype,qt.propHooks={_default:{get:function(a){var c;return a.elem.nodeType!==1||a.elem[a.prop]!=null&&a.elem.style[a.prop]==null?a.elem[a.prop]:(c=h.css(a.elem,a.prop,""),!c||c==="auto"?0:c)},set:function(a){h.fx.step[a.prop]?h.fx.step[a.prop](a):a.elem.nodeType===1&&(h.cssHooks[a.prop]||a.elem.style[Yn(a.prop)]!=null)?h.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},qt.propHooks.scrollTop=qt.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},h.easing={linear:function(a){return a},swing:function(a){return .5-Math.cos(a*Math.PI)/2},_default:"swing"},h.fx=qt.prototype.init,h.fx.step={};var ai,jt,di=/^(?:toggle|show|hide)$/,ss=/queueHooks$/;function an(){jt&&(g.hidden===!1&&e.requestAnimationFrame?e.requestAnimationFrame(an):e.setTimeout(an,h.fx.interval),h.fx.tick())}function gr(){return e.setTimeout(function(){ai=void 0}),ai=Date.now()}function _r(a,c){var d,_=0,M={height:a};for(c=c?1:0;_<4;_+=2-c)d=ne[_],M["margin"+d]=M["padding"+d]=a;return c&&(M.opacity=M.width=a),M}function as(a,c,d){for(var _,M=($n.tweeners[c]||[]).concat($n.tweeners["*"]),S=0,b=M.length;S<b;S++)if(_=M[S].call(d,c,a))return _}function jf(a,c,d){var _,M,S,b,z,O,X,J,_e="width"in c||"height"in c,$=this,re={},Ve=a.style,rt=a.nodeType&&Ye(a),He=Ie.get(a,"fxshow");d.queue||(b=h._queueHooks(a,"fx"),b.unqueued==null&&(b.unqueued=0,z=b.empty.fire,b.empty.fire=function(){b.unqueued||z()}),b.unqueued++,$.always(function(){$.always(function(){b.unqueued--,h.queue(a,"fx").length||b.empty.fire()})}));for(_ in c)if(M=c[_],di.test(M)){if(delete c[_],S=S||M==="toggle",M===(rt?"hide":"show"))if(M==="show"&&He&&He[_]!==void 0)rt=!0;else continue;re[_]=He&&He[_]||h.style(a,_)}if(O=!h.isEmptyObject(c),!(!O&&h.isEmptyObject(re))){_e&&a.nodeType===1&&(d.overflow=[Ve.overflow,Ve.overflowX,Ve.overflowY],X=He&&He.display,X==null&&(X=Ie.get(a,"display")),J=h.css(a,"display"),J==="none"&&(X?J=X:(ze([a],!0),X=a.style.display||X,J=h.css(a,"display"),ze([a]))),(J==="inline"||J==="inline-block"&&X!=null)&&h.css(a,"float")==="none"&&(O||($.done(function(){Ve.display=X}),X==null&&(J=Ve.display,X=J==="none"?"":J)),Ve.display="inline-block")),d.overflow&&(Ve.overflow="hidden",$.always(function(){Ve.overflow=d.overflow[0],Ve.overflowX=d.overflow[1],Ve.overflowY=d.overflow[2]})),O=!1;for(_ in re)O||(He?"hidden"in He&&(rt=He.hidden):He=Ie.access(a,"fxshow",{display:X}),S&&(He.hidden=!rt),rt&&ze([a],!0),$.done(function(){rt||ze([a]),Ie.remove(a,"fxshow");for(_ in re)h.style(a,_,re[_])})),O=as(rt?He[_]:0,_,$),_ in He||(He[_]=O.start,rt&&(O.end=O.start,O.start=0))}}function Yf(a,c){var d,_,M,S,b;for(d in a)if(_=Oe(d),M=c[_],S=a[d],Array.isArray(S)&&(M=S[1],S=a[d]=S[0]),d!==_&&(a[_]=S,delete a[d]),b=h.cssHooks[_],b&&"expand"in b){S=b.expand(S),delete a[_];for(d in S)d in a||(a[d]=S[d],c[d]=M)}else c[_]=M}function $n(a,c,d){var _,M,S=0,b=$n.prefilters.length,z=h.Deferred().always(function(){delete O.elem}),O=function(){if(M)return!1;for(var _e=ai||gr(),$=Math.max(0,X.startTime+X.duration-_e),re=$/X.duration||0,Ve=1-re,rt=0,He=X.tweens.length;rt<He;rt++)X.tweens[rt].run(Ve);return z.notifyWith(a,[X,Ve,$]),Ve<1&&He?$:(He||z.notifyWith(a,[X,1,0]),z.resolveWith(a,[X]),!1)},X=z.promise({elem:a,props:h.extend({},c),opts:h.extend(!0,{specialEasing:{},easing:h.easing._default},d),originalProperties:c,originalOptions:d,startTime:ai||gr(),duration:d.duration,tweens:[],createTween:function(_e,$){var re=h.Tween(a,X.opts,_e,$,X.opts.specialEasing[_e]||X.opts.easing);return X.tweens.push(re),re},stop:function(_e){var $=0,re=_e?X.tweens.length:0;if(M)return this;for(M=!0;$<re;$++)X.tweens[$].run(1);return _e?(z.notifyWith(a,[X,1,0]),z.resolveWith(a,[X,_e])):z.rejectWith(a,[X,_e]),this}}),J=X.props;for(Yf(J,X.opts.specialEasing);S<b;S++)if(_=$n.prefilters[S].call(X,a,J,X.opts),_)return E(_.stop)&&(h._queueHooks(X.elem,X.opts.queue).stop=_.stop.bind(_)),_;return h.map(J,as,X),E(X.opts.start)&&X.opts.start.call(a,X),X.progress(X.opts.progress).done(X.opts.done,X.opts.complete).fail(X.opts.fail).always(X.opts.always),h.fx.timer(h.extend(O,{elem:a,anim:X,queue:X.opts.queue})),X}h.Animation=h.extend($n,{tweeners:{"*":[function(a,c){var d=this.createTween(a,c);return Fe(d.elem,a,P.exec(c),d),d}]},tweener:function(a,c){E(a)?(c=a,a=["*"]):a=a.match(Ne);for(var d,_=0,M=a.length;_<M;_++)d=a[_],$n.tweeners[d]=$n.tweeners[d]||[],$n.tweeners[d].unshift(c)},prefilters:[jf],prefilter:function(a,c){c?$n.prefilters.unshift(a):$n.prefilters.push(a)}}),h.speed=function(a,c,d){var _=a&&typeof a=="object"?h.extend({},a):{complete:d||!d&&c||E(a)&&a,duration:a,easing:d&&c||c&&!E(c)&&c};return h.fx.off?_.duration=0:typeof _.duration!="number"&&(_.duration in h.fx.speeds?_.duration=h.fx.speeds[_.duration]:_.duration=h.fx.speeds._default),(_.queue==null||_.queue===!0)&&(_.queue="fx"),_.old=_.complete,_.complete=function(){E(_.old)&&_.old.call(this),_.queue&&h.dequeue(this,_.queue)},_},h.fn.extend({fadeTo:function(a,c,d,_){return this.filter(Ye).css("opacity",0).show().end().animate({opacity:c},a,d,_)},animate:function(a,c,d,_){var M=h.isEmptyObject(a),S=h.speed(c,d,_),b=function(){var z=$n(this,h.extend({},a),S);(M||Ie.get(this,"finish"))&&z.stop(!0)};return b.finish=b,M||S.queue===!1?this.each(b):this.queue(S.queue,b)},stop:function(a,c,d){var _=function(M){var S=M.stop;delete M.stop,S(d)};return typeof a!="string"&&(d=c,c=a,a=void 0),c&&this.queue(a||"fx",[]),this.each(function(){var M=!0,S=a!=null&&a+"queueHooks",b=h.timers,z=Ie.get(this);if(S)z[S]&&z[S].stop&&_(z[S]);else for(S in z)z[S]&&z[S].stop&&ss.test(S)&&_(z[S]);for(S=b.length;S--;)b[S].elem===this&&(a==null||b[S].queue===a)&&(b[S].anim.stop(d),M=!1,b.splice(S,1));(M||!d)&&h.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var c,d=Ie.get(this),_=d[a+"queue"],M=d[a+"queueHooks"],S=h.timers,b=_?_.length:0;for(d.finish=!0,h.queue(this,a,[]),M&&M.stop&&M.stop.call(this,!0),c=S.length;c--;)S[c].elem===this&&S[c].queue===a&&(S[c].anim.stop(!0),S.splice(c,1));for(c=0;c<b;c++)_[c]&&_[c].finish&&_[c].finish.call(this);delete d.finish})}}),h.each(["toggle","show","hide"],function(a,c){var d=h.fn[c];h.fn[c]=function(_,M,S){return _==null||typeof _=="boolean"?d.apply(this,arguments):this.animate(_r(c,!0),_,M,S)}}),h.each({slideDown:_r("show"),slideUp:_r("hide"),slideToggle:_r("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,c){h.fn[a]=function(d,_,M){return this.animate(c,d,_,M)}}),h.timers=[],h.fx.tick=function(){var a,c=0,d=h.timers;for(ai=Date.now();c<d.length;c++)a=d[c],!a()&&d[c]===a&&d.splice(c--,1);d.length||h.fx.stop(),ai=void 0},h.fx.timer=function(a){h.timers.push(a),h.fx.start()},h.fx.interval=13,h.fx.start=function(){jt||(jt=!0,an())},h.fx.stop=function(){jt=null},h.fx.speeds={slow:600,fast:200,_default:400},h.fn.delay=function(a,c){return a=h.fx&&h.fx.speeds[a]||a,c=c||"fx",this.queue(c,function(d,_){var M=e.setTimeout(d,a);_.stop=function(){e.clearTimeout(M)}})},function(){var a=g.createElement("input"),c=g.createElement("select"),d=c.appendChild(g.createElement("option"));a.type="checkbox",T.checkOn=a.value!=="",T.optSelected=d.selected,a=g.createElement("input"),a.value="t",a.type="radio",T.radioValue=a.value==="t"}();var Al,os=h.expr.attrHandle;h.fn.extend({attr:function(a,c){return De(this,h.attr,a,c,arguments.length>1)},removeAttr:function(a){return this.each(function(){h.removeAttr(this,a)})}}),h.extend({attr:function(a,c,d){var _,M,S=a.nodeType;if(!(S===3||S===8||S===2)){if(typeof a.getAttribute>"u")return h.prop(a,c,d);if((S!==1||!h.isXMLDoc(a))&&(M=h.attrHooks[c.toLowerCase()]||(h.expr.match.bool.test(c)?Al:void 0)),d!==void 0){if(d===null){h.removeAttr(a,c);return}return M&&"set"in M&&(_=M.set(a,d,c))!==void 0?_:(a.setAttribute(c,d+""),d)}return M&&"get"in M&&(_=M.get(a,c))!==null?_:(_=h.find.attr(a,c),_??void 0)}},attrHooks:{type:{set:function(a,c){if(!T.radioValue&&c==="radio"&&Q(a,"input")){var d=a.value;return a.setAttribute("type",c),d&&(a.value=d),c}}}},removeAttr:function(a,c){var d,_=0,M=c&&c.match(Ne);if(M&&a.nodeType===1)for(;d=M[_++];)a.removeAttribute(d)}}),Al={set:function(a,c,d){return c===!1?h.removeAttr(a,d):a.setAttribute(d,d),d}},h.each(h.expr.match.bool.source.match(/\w+/g),function(a,c){var d=os[c]||h.find.attr;os[c]=function(_,M,S){var b,z,O=M.toLowerCase();return S||(z=os[O],os[O]=b,b=d(_,M,S)!=null?O:null,os[O]=z),b}});var Kf=/^(?:input|select|textarea|button)$/i,$f=/^(?:a|area)$/i;h.fn.extend({prop:function(a,c){return De(this,h.prop,a,c,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[h.propFix[a]||a]})}}),h.extend({prop:function(a,c,d){var _,M,S=a.nodeType;if(!(S===3||S===8||S===2))return(S!==1||!h.isXMLDoc(a))&&(c=h.propFix[c]||c,M=h.propHooks[c]),d!==void 0?M&&"set"in M&&(_=M.set(a,d,c))!==void 0?_:a[c]=d:M&&"get"in M&&(_=M.get(a,c))!==null?_:a[c]},propHooks:{tabIndex:{get:function(a){var c=h.find.attr(a,"tabindex");return c?parseInt(c,10):Kf.test(a.nodeName)||$f.test(a.nodeName)&&a.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),T.optSelected||(h.propHooks.selected={get:function(a){var c=a.parentNode;return c&&c.parentNode&&c.parentNode.selectedIndex,null},set:function(a){var c=a.parentNode;c&&(c.selectedIndex,c.parentNode&&c.parentNode.selectedIndex)}}),h.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){h.propFix[this.toLowerCase()]=this});function Xi(a){var c=a.match(Ne)||[];return c.join(" ")}function qi(a){return a.getAttribute&&a.getAttribute("class")||""}function Ha(a){return Array.isArray(a)?a:typeof a=="string"?a.match(Ne)||[]:[]}h.fn.extend({addClass:function(a){var c,d,_,M,S,b;return E(a)?this.each(function(z){h(this).addClass(a.call(this,z,qi(this)))}):(c=Ha(a),c.length?this.each(function(){if(_=qi(this),d=this.nodeType===1&&" "+Xi(_)+" ",d){for(S=0;S<c.length;S++)M=c[S],d.indexOf(" "+M+" ")<0&&(d+=M+" ");b=Xi(d),_!==b&&this.setAttribute("class",b)}}):this)},removeClass:function(a){var c,d,_,M,S,b;return E(a)?this.each(function(z){h(this).removeClass(a.call(this,z,qi(this)))}):arguments.length?(c=Ha(a),c.length?this.each(function(){if(_=qi(this),d=this.nodeType===1&&" "+Xi(_)+" ",d){for(S=0;S<c.length;S++)for(M=c[S];d.indexOf(" "+M+" ")>-1;)d=d.replace(" "+M+" "," ");b=Xi(d),_!==b&&this.setAttribute("class",b)}}):this):this.attr("class","")},toggleClass:function(a,c){var d,_,M,S,b=typeof a,z=b==="string"||Array.isArray(a);return E(a)?this.each(function(O){h(this).toggleClass(a.call(this,O,qi(this),c),c)}):typeof c=="boolean"&&z?c?this.addClass(a):this.removeClass(a):(d=Ha(a),this.each(function(){if(z)for(S=h(this),M=0;M<d.length;M++)_=d[M],S.hasClass(_)?S.removeClass(_):S.addClass(_);else(a===void 0||b==="boolean")&&(_=qi(this),_&&Ie.set(this,"__className__",_),this.setAttribute&&this.setAttribute("class",_||a===!1?"":Ie.get(this,"__className__")||""))}))},hasClass:function(a){var c,d,_=0;for(c=" "+a+" ";d=this[_++];)if(d.nodeType===1&&(" "+Xi(qi(d))+" ").indexOf(c)>-1)return!0;return!1}});var Zf=/\r/g;h.fn.extend({val:function(a){var c,d,_,M=this[0];return arguments.length?(_=E(a),this.each(function(S){var b;this.nodeType===1&&(_?b=a.call(this,S,h(this).val()):b=a,b==null?b="":typeof b=="number"?b+="":Array.isArray(b)&&(b=h.map(b,function(z){return z==null?"":z+""})),c=h.valHooks[this.type]||h.valHooks[this.nodeName.toLowerCase()],(!c||!("set"in c)||c.set(this,b,"value")===void 0)&&(this.value=b))})):M?(c=h.valHooks[M.type]||h.valHooks[M.nodeName.toLowerCase()],c&&"get"in c&&(d=c.get(M,"value"))!==void 0?d:(d=M.value,typeof d=="string"?d.replace(Zf,""):d??"")):void 0}}),h.extend({valHooks:{option:{get:function(a){var c=h.find.attr(a,"value");return c??Xi(h.text(a))}},select:{get:function(a){var c,d,_,M=a.options,S=a.selectedIndex,b=a.type==="select-one",z=b?null:[],O=b?S+1:M.length;for(S<0?_=O:_=b?S:0;_<O;_++)if(d=M[_],(d.selected||_===S)&&!d.disabled&&(!d.parentNode.disabled||!Q(d.parentNode,"optgroup"))){if(c=h(d).val(),b)return c;z.push(c)}return z},set:function(a,c){for(var d,_,M=a.options,S=h.makeArray(c),b=M.length;b--;)_=M[b],(_.selected=h.inArray(h.valHooks.option.get(_),S)>-1)&&(d=!0);return d||(a.selectedIndex=-1),S}}}}),h.each(["radio","checkbox"],function(){h.valHooks[this]={set:function(a,c){if(Array.isArray(c))return a.checked=h.inArray(h(a).val(),c)>-1}},T.checkOn||(h.valHooks[this].get=function(a){return a.getAttribute("value")===null?"on":a.value})}),T.focusin="onfocusin"in e;var wl=/^(?:focusinfocus|focusoutblur)$/,Rl=function(a){a.stopPropagation()};h.extend(h.event,{trigger:function(a,c,d,_){var M,S,b,z,O,X,J,_e,$=[d||g],re=m.call(a,"type")?a.type:a,Ve=m.call(a,"namespace")?a.namespace.split("."):[];if(S=_e=b=d=d||g,!(d.nodeType===3||d.nodeType===8)&&!wl.test(re+h.event.triggered)&&(re.indexOf(".")>-1&&(Ve=re.split("."),re=Ve.shift(),Ve.sort()),O=re.indexOf(":")<0&&"on"+re,a=a[h.expando]?a:new h.Event(re,typeof a=="object"&&a),a.isTrigger=_?2:3,a.namespace=Ve.join("."),a.rnamespace=a.namespace?new RegExp("(^|\\.)"+Ve.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,a.result=void 0,a.target||(a.target=d),c=c==null?[a]:h.makeArray(c,[a]),J=h.event.special[re]||{},!(!_&&J.trigger&&J.trigger.apply(d,c)===!1))){if(!_&&!J.noBubble&&!y(d)){for(z=J.delegateType||re,wl.test(z+re)||(S=S.parentNode);S;S=S.parentNode)$.push(S),b=S;b===(d.ownerDocument||g)&&$.push(b.defaultView||b.parentWindow||e)}for(M=0;(S=$[M++])&&!a.isPropagationStopped();)_e=S,a.type=M>1?z:J.bindType||re,X=(Ie.get(S,"events")||Object.create(null))[a.type]&&Ie.get(S,"handle"),X&&X.apply(S,c),X=O&&S[O],X&&X.apply&&ot(S)&&(a.result=X.apply(S,c),a.result===!1&&a.preventDefault());return a.type=re,!_&&!a.isDefaultPrevented()&&(!J._default||J._default.apply($.pop(),c)===!1)&&ot(d)&&O&&E(d[re])&&!y(d)&&(b=d[O],b&&(d[O]=null),h.event.triggered=re,a.isPropagationStopped()&&_e.addEventListener(re,Rl),d[re](),a.isPropagationStopped()&&_e.removeEventListener(re,Rl),h.event.triggered=void 0,b&&(d[O]=b)),a.result}},simulate:function(a,c,d){var _=h.extend(new h.Event,d,{type:a,isSimulated:!0});h.event.trigger(_,null,c)}}),h.fn.extend({trigger:function(a,c){return this.each(function(){h.event.trigger(a,c,this)})},triggerHandler:function(a,c){var d=this[0];if(d)return h.event.trigger(a,c,d,!0)}}),T.focusin||h.each({focus:"focusin",blur:"focusout"},function(a,c){var d=function(_){h.event.simulate(c,_.target,h.event.fix(_))};h.event.special[c]={setup:function(){var _=this.ownerDocument||this.document||this,M=Ie.access(_,c);M||_.addEventListener(a,d,!0),Ie.access(_,c,(M||0)+1)},teardown:function(){var _=this.ownerDocument||this.document||this,M=Ie.access(_,c)-1;M?Ie.access(_,c,M):(_.removeEventListener(a,d,!0),Ie.remove(_,c))}}});var ls=e.location,Cl={guid:Date.now()},Ga=/\?/;h.parseXML=function(a){var c,d;if(!a||typeof a!="string")return null;try{c=new e.DOMParser().parseFromString(a,"text/xml")}catch{}return d=c&&c.getElementsByTagName("parsererror")[0],(!c||d)&&h.error("Invalid XML: "+(d?h.map(d.childNodes,function(_){return _.textContent}).join(`
`):a)),c};var Jf=/\[\]$/,Ll=/\r?\n/g,Qf=/^(?:submit|button|image|reset|file)$/i,eh=/^(?:input|select|textarea|keygen)/i;function Va(a,c,d,_){var M;if(Array.isArray(c))h.each(c,function(S,b){d||Jf.test(a)?_(a,b):Va(a+"["+(typeof b=="object"&&b!=null?S:"")+"]",b,d,_)});else if(!d&&L(c)==="object")for(M in c)Va(a+"["+M+"]",c[M],d,_);else _(a,c)}h.param=function(a,c){var d,_=[],M=function(S,b){var z=E(b)?b():b;_[_.length]=encodeURIComponent(S)+"="+encodeURIComponent(z??"")};if(a==null)return"";if(Array.isArray(a)||a.jquery&&!h.isPlainObject(a))h.each(a,function(){M(this.name,this.value)});else for(d in a)Va(d,a[d],c,M);return _.join("&")},h.fn.extend({serialize:function(){return h.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=h.prop(this,"elements");return a?h.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!h(this).is(":disabled")&&eh.test(this.nodeName)&&!Qf.test(a)&&(this.checked||!We.test(a))}).map(function(a,c){var d=h(this).val();return d==null?null:Array.isArray(d)?h.map(d,function(_){return{name:c.name,value:_.replace(Ll,`\r
`)}}):{name:c.name,value:d.replace(Ll,`\r
`)}}).get()}});var th=/%20/g,nh=/#.*$/,ih=/([?&])_=[^&]*/,rh=/^(.*?):[ \t]*([^\r\n]*)$/mg,sh=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,ah=/^(?:GET|HEAD)$/,oh=/^\/\//,Pl={},Wa={},Dl="*/".concat("*"),Xa=g.createElement("a");Xa.href=ls.href;function Il(a){return function(c,d){typeof c!="string"&&(d=c,c="*");var _,M=0,S=c.toLowerCase().match(Ne)||[];if(E(d))for(;_=S[M++];)_[0]==="+"?(_=_.slice(1)||"*",(a[_]=a[_]||[]).unshift(d)):(a[_]=a[_]||[]).push(d)}}function Nl(a,c,d,_){var M={},S=a===Wa;function b(z){var O;return M[z]=!0,h.each(a[z]||[],function(X,J){var _e=J(c,d,_);if(typeof _e=="string"&&!S&&!M[_e])return c.dataTypes.unshift(_e),b(_e),!1;if(S)return!(O=_e)}),O}return b(c.dataTypes[0])||!M["*"]&&b("*")}function qa(a,c){var d,_,M=h.ajaxSettings.flatOptions||{};for(d in c)c[d]!==void 0&&((M[d]?a:_||(_={}))[d]=c[d]);return _&&h.extend(!0,a,_),a}function lh(a,c,d){for(var _,M,S,b,z=a.contents,O=a.dataTypes;O[0]==="*";)O.shift(),_===void 0&&(_=a.mimeType||c.getResponseHeader("Content-Type"));if(_){for(M in z)if(z[M]&&z[M].test(_)){O.unshift(M);break}}if(O[0]in d)S=O[0];else{for(M in d){if(!O[0]||a.converters[M+" "+O[0]]){S=M;break}b||(b=M)}S=S||b}if(S)return S!==O[0]&&O.unshift(S),d[S]}function ch(a,c,d,_){var M,S,b,z,O,X={},J=a.dataTypes.slice();if(J[1])for(b in a.converters)X[b.toLowerCase()]=a.converters[b];for(S=J.shift();S;)if(a.responseFields[S]&&(d[a.responseFields[S]]=c),!O&&_&&a.dataFilter&&(c=a.dataFilter(c,a.dataType)),O=S,S=J.shift(),S){if(S==="*")S=O;else if(O!=="*"&&O!==S){if(b=X[O+" "+S]||X["* "+S],!b){for(M in X)if(z=M.split(" "),z[1]===S&&(b=X[O+" "+z[0]]||X["* "+z[0]],b)){b===!0?b=X[M]:X[M]!==!0&&(S=z[0],J.unshift(z[1]));break}}if(b!==!0)if(b&&a.throws)c=b(c);else try{c=b(c)}catch(_e){return{state:"parsererror",error:b?_e:"No conversion from "+O+" to "+S}}}}return{state:"success",data:c}}h.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:ls.href,type:"GET",isLocal:sh.test(ls.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Dl,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":h.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,c){return c?qa(qa(a,h.ajaxSettings),c):qa(h.ajaxSettings,a)},ajaxPrefilter:Il(Pl),ajaxTransport:Il(Wa),ajax:function(a,c){typeof a=="object"&&(c=a,a=void 0),c=c||{};var d,_,M,S,b,z,O,X,J,_e,$=h.ajaxSetup({},c),re=$.context||$,Ve=$.context&&(re.nodeType||re.jquery)?h(re):h.event,rt=h.Deferred(),He=h.Callbacks("once memory"),$t=$.statusCode||{},Yt={},Cn={},Rt="canceled",nt={readyState:0,getResponseHeader:function(yt){var kt;if(O){if(!S)for(S={};kt=rh.exec(M);)S[kt[1].toLowerCase()+" "]=(S[kt[1].toLowerCase()+" "]||[]).concat(kt[2]);kt=S[yt.toLowerCase()+" "]}return kt==null?null:kt.join(", ")},getAllResponseHeaders:function(){return O?M:null},setRequestHeader:function(yt,kt){return O==null&&(yt=Cn[yt.toLowerCase()]=Cn[yt.toLowerCase()]||yt,Yt[yt]=kt),this},overrideMimeType:function(yt){return O==null&&($.mimeType=yt),this},statusCode:function(yt){var kt;if(yt)if(O)nt.always(yt[nt.status]);else for(kt in yt)$t[kt]=[$t[kt],yt[kt]];return this},abort:function(yt){var kt=yt||Rt;return d&&d.abort(kt),yn(0,kt),this}};if(rt.promise(nt),$.url=((a||$.url||ls.href)+"").replace(oh,ls.protocol+"//"),$.type=c.method||c.type||$.method||$.type,$.dataTypes=($.dataType||"*").toLowerCase().match(Ne)||[""],$.crossDomain==null){z=g.createElement("a");try{z.href=$.url,z.href=z.href,$.crossDomain=Xa.protocol+"//"+Xa.host!=z.protocol+"//"+z.host}catch{$.crossDomain=!0}}if($.data&&$.processData&&typeof $.data!="string"&&($.data=h.param($.data,$.traditional)),Nl(Pl,$,c,nt),O)return nt;X=h.event&&$.global,X&&h.active++===0&&h.event.trigger("ajaxStart"),$.type=$.type.toUpperCase(),$.hasContent=!ah.test($.type),_=$.url.replace(nh,""),$.hasContent?$.data&&$.processData&&($.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&($.data=$.data.replace(th,"+")):(_e=$.url.slice(_.length),$.data&&($.processData||typeof $.data=="string")&&(_+=(Ga.test(_)?"&":"?")+$.data,delete $.data),$.cache===!1&&(_=_.replace(ih,"$1"),_e=(Ga.test(_)?"&":"?")+"_="+Cl.guid+++_e),$.url=_+_e),$.ifModified&&(h.lastModified[_]&&nt.setRequestHeader("If-Modified-Since",h.lastModified[_]),h.etag[_]&&nt.setRequestHeader("If-None-Match",h.etag[_])),($.data&&$.hasContent&&$.contentType!==!1||c.contentType)&&nt.setRequestHeader("Content-Type",$.contentType),nt.setRequestHeader("Accept",$.dataTypes[0]&&$.accepts[$.dataTypes[0]]?$.accepts[$.dataTypes[0]]+($.dataTypes[0]!=="*"?", "+Dl+"; q=0.01":""):$.accepts["*"]);for(J in $.headers)nt.setRequestHeader(J,$.headers[J]);if($.beforeSend&&($.beforeSend.call(re,nt,$)===!1||O))return nt.abort();if(Rt="abort",He.add($.complete),nt.done($.success),nt.fail($.error),d=Nl(Wa,$,c,nt),!d)yn(-1,"No Transport");else{if(nt.readyState=1,X&&Ve.trigger("ajaxSend",[nt,$]),O)return nt;$.async&&$.timeout>0&&(b=e.setTimeout(function(){nt.abort("timeout")},$.timeout));try{O=!1,d.send(Yt,yn)}catch(yt){if(O)throw yt;yn(-1,yt)}}function yn(yt,kt,us,Hs){var Ln,ji,Yi,Mn,Pi,Bn=kt;O||(O=!0,b&&e.clearTimeout(b),d=void 0,M=Hs||"",nt.readyState=yt>0?4:0,Ln=yt>=200&&yt<300||yt===304,us&&(Mn=lh($,nt,us)),!Ln&&h.inArray("script",$.dataTypes)>-1&&h.inArray("json",$.dataTypes)<0&&($.converters["text script"]=function(){}),Mn=ch($,Mn,nt,Ln),Ln?($.ifModified&&(Pi=nt.getResponseHeader("Last-Modified"),Pi&&(h.lastModified[_]=Pi),Pi=nt.getResponseHeader("etag"),Pi&&(h.etag[_]=Pi)),yt===204||$.type==="HEAD"?Bn="nocontent":yt===304?Bn="notmodified":(Bn=Mn.state,ji=Mn.data,Yi=Mn.error,Ln=!Yi)):(Yi=Bn,(yt||!Bn)&&(Bn="error",yt<0&&(yt=0))),nt.status=yt,nt.statusText=(kt||Bn)+"",Ln?rt.resolveWith(re,[ji,Bn,nt]):rt.rejectWith(re,[nt,Bn,Yi]),nt.statusCode($t),$t=void 0,X&&Ve.trigger(Ln?"ajaxSuccess":"ajaxError",[nt,$,Ln?ji:Yi]),He.fireWith(re,[nt,Bn]),X&&(Ve.trigger("ajaxComplete",[nt,$]),--h.active||h.event.trigger("ajaxStop")))}return nt},getJSON:function(a,c,d){return h.get(a,c,d,"json")},getScript:function(a,c){return h.get(a,void 0,c,"script")}}),h.each(["get","post"],function(a,c){h[c]=function(d,_,M,S){return E(_)&&(S=S||M,M=_,_=void 0),h.ajax(h.extend({url:d,type:c,dataType:S,data:_,success:M},h.isPlainObject(d)&&d))}}),h.ajaxPrefilter(function(a){var c;for(c in a.headers)c.toLowerCase()==="content-type"&&(a.contentType=a.headers[c]||"")}),h._evalUrl=function(a,c,d){return h.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(_){h.globalEval(_,c,d)}})},h.fn.extend({wrapAll:function(a){var c;return this[0]&&(E(a)&&(a=a.call(this[0])),c=h(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&c.insertBefore(this[0]),c.map(function(){for(var d=this;d.firstElementChild;)d=d.firstElementChild;return d}).append(this)),this},wrapInner:function(a){return E(a)?this.each(function(c){h(this).wrapInner(a.call(this,c))}):this.each(function(){var c=h(this),d=c.contents();d.length?d.wrapAll(a):c.append(a)})},wrap:function(a){var c=E(a);return this.each(function(d){h(this).wrapAll(c?a.call(this,d):a)})},unwrap:function(a){return this.parent(a).not("body").each(function(){h(this).replaceWith(this.childNodes)}),this}}),h.expr.pseudos.hidden=function(a){return!h.expr.pseudos.visible(a)},h.expr.pseudos.visible=function(a){return!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)},h.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch{}};var uh={0:200,1223:204},cs=h.ajaxSettings.xhr();T.cors=!!cs&&"withCredentials"in cs,T.ajax=cs=!!cs,h.ajaxTransport(function(a){var c,d;if(T.cors||cs&&!a.crossDomain)return{send:function(_,M){var S,b=a.xhr();if(b.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(S in a.xhrFields)b[S]=a.xhrFields[S];a.mimeType&&b.overrideMimeType&&b.overrideMimeType(a.mimeType),!a.crossDomain&&!_["X-Requested-With"]&&(_["X-Requested-With"]="XMLHttpRequest");for(S in _)b.setRequestHeader(S,_[S]);c=function(z){return function(){c&&(c=d=b.onload=b.onerror=b.onabort=b.ontimeout=b.onreadystatechange=null,z==="abort"?b.abort():z==="error"?typeof b.status!="number"?M(0,"error"):M(b.status,b.statusText):M(uh[b.status]||b.status,b.statusText,(b.responseType||"text")!=="text"||typeof b.responseText!="string"?{binary:b.response}:{text:b.responseText},b.getAllResponseHeaders()))}},b.onload=c(),d=b.onerror=b.ontimeout=c("error"),b.onabort!==void 0?b.onabort=d:b.onreadystatechange=function(){b.readyState===4&&e.setTimeout(function(){c&&d()})},c=c("abort");try{b.send(a.hasContent&&a.data||null)}catch(z){if(c)throw z}},abort:function(){c&&c()}}}),h.ajaxPrefilter(function(a){a.crossDomain&&(a.contents.script=!1)}),h.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return h.globalEval(a),a}}}),h.ajaxPrefilter("script",function(a){a.cache===void 0&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),h.ajaxTransport("script",function(a){if(a.crossDomain||a.scriptAttrs){var c,d;return{send:function(_,M){c=h("<script>").attr(a.scriptAttrs||{}).prop({charset:a.scriptCharset,src:a.url}).on("load error",d=function(S){c.remove(),d=null,S&&M(S.type==="error"?404:200,S.type)}),g.head.appendChild(c[0])},abort:function(){d&&d()}}}});var Ul=[],ja=/(=)\?(?=&|$)|\?\?/;h.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Ul.pop()||h.expando+"_"+Cl.guid++;return this[a]=!0,a}}),h.ajaxPrefilter("json jsonp",function(a,c,d){var _,M,S,b=a.jsonp!==!1&&(ja.test(a.url)?"url":typeof a.data=="string"&&(a.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&ja.test(a.data)&&"data");if(b||a.dataTypes[0]==="jsonp")return _=a.jsonpCallback=E(a.jsonpCallback)?a.jsonpCallback():a.jsonpCallback,b?a[b]=a[b].replace(ja,"$1"+_):a.jsonp!==!1&&(a.url+=(Ga.test(a.url)?"&":"?")+a.jsonp+"="+_),a.converters["script json"]=function(){return S||h.error(_+" was not called"),S[0]},a.dataTypes[0]="json",M=e[_],e[_]=function(){S=arguments},d.always(function(){M===void 0?h(e).removeProp(_):e[_]=M,a[_]&&(a.jsonpCallback=c.jsonpCallback,Ul.push(_)),S&&E(M)&&M(S[0]),S=M=void 0}),"script"}),T.createHTMLDocument=function(){var a=g.implementation.createHTMLDocument("").body;return a.innerHTML="<form></form><form></form>",a.childNodes.length===2}(),h.parseHTML=function(a,c,d){if(typeof a!="string")return[];typeof c=="boolean"&&(d=c,c=!1);var _,M,S;return c||(T.createHTMLDocument?(c=g.implementation.createHTMLDocument(""),_=c.createElement("base"),_.href=g.location.href,c.head.appendChild(_)):c=g),M=q.exec(a),S=!d&&[],M?[c.createElement(M[1])]:(M=ae([a],c,S),S&&S.length&&h(S).remove(),h.merge([],M.childNodes))},h.fn.load=function(a,c,d){var _,M,S,b=this,z=a.indexOf(" ");return z>-1&&(_=Xi(a.slice(z)),a=a.slice(0,z)),E(c)?(d=c,c=void 0):c&&typeof c=="object"&&(M="POST"),b.length>0&&h.ajax({url:a,type:M||"GET",dataType:"html",data:c}).done(function(O){S=arguments,b.html(_?h("<div>").append(h.parseHTML(O)).find(_):O)}).always(d&&function(O,X){b.each(function(){d.apply(this,S||[O.responseText,X,O])})}),this},h.expr.pseudos.animated=function(a){return h.grep(h.timers,function(c){return a===c.elem}).length},h.offset={setOffset:function(a,c,d){var _,M,S,b,z,O,X,J=h.css(a,"position"),_e=h(a),$={};J==="static"&&(a.style.position="relative"),z=_e.offset(),S=h.css(a,"top"),O=h.css(a,"left"),X=(J==="absolute"||J==="fixed")&&(S+O).indexOf("auto")>-1,X?(_=_e.position(),b=_.top,M=_.left):(b=parseFloat(S)||0,M=parseFloat(O)||0),E(c)&&(c=c.call(a,d,h.extend({},z))),c.top!=null&&($.top=c.top-z.top+b),c.left!=null&&($.left=c.left-z.left+M),"using"in c?c.using.call(a,$):_e.css($)}},h.fn.extend({offset:function(a){if(arguments.length)return a===void 0?this:this.each(function(M){h.offset.setOffset(this,a,M)});var c,d,_=this[0];if(_)return _.getClientRects().length?(c=_.getBoundingClientRect(),d=_.ownerDocument.defaultView,{top:c.top+d.pageYOffset,left:c.left+d.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var a,c,d,_=this[0],M={top:0,left:0};if(h.css(_,"position")==="fixed")c=_.getBoundingClientRect();else{for(c=this.offset(),d=_.ownerDocument,a=_.offsetParent||d.documentElement;a&&(a===d.body||a===d.documentElement)&&h.css(a,"position")==="static";)a=a.parentNode;a&&a!==_&&a.nodeType===1&&(M=h(a).offset(),M.top+=h.css(a,"borderTopWidth",!0),M.left+=h.css(a,"borderLeftWidth",!0))}return{top:c.top-M.top-h.css(_,"marginTop",!0),left:c.left-M.left-h.css(_,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var a=this.offsetParent;a&&h.css(a,"position")==="static";)a=a.offsetParent;return a||xe})}}),h.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,c){var d=c==="pageYOffset";h.fn[a]=function(_){return De(this,function(M,S,b){var z;if(y(M)?z=M:M.nodeType===9&&(z=M.defaultView),b===void 0)return z?z[c]:M[S];z?z.scrollTo(d?z.pageXOffset:b,d?b:z.pageYOffset):M[S]=b},a,_,arguments.length)}}),h.each(["top","left"],function(a,c){h.cssHooks[c]=ft(T.pixelPosition,function(d,_){if(_)return _=at(d,c),se.test(_)?h(d).position()[c]+"px":_})}),h.each({Height:"height",Width:"width"},function(a,c){h.each({padding:"inner"+a,content:c,"":"outer"+a},function(d,_){h.fn[_]=function(M,S){var b=arguments.length&&(d||typeof M!="boolean"),z=d||(M===!0||S===!0?"margin":"border");return De(this,function(O,X,J){var _e;return y(O)?_.indexOf("outer")===0?O["inner"+a]:O.document.documentElement["client"+a]:O.nodeType===9?(_e=O.documentElement,Math.max(O.body["scroll"+a],_e["scroll"+a],O.body["offset"+a],_e["offset"+a],_e["client"+a])):J===void 0?h.css(O,X,z):h.style(O,X,J,z)},c,b?M:void 0,b)}})}),h.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,c){h.fn[c]=function(d){return this.on(c,d)}}),h.fn.extend({bind:function(a,c,d){return this.on(a,null,c,d)},unbind:function(a,c){return this.off(a,null,c)},delegate:function(a,c,d,_){return this.on(c,a,d,_)},undelegate:function(a,c,d){return arguments.length===1?this.off(a,"**"):this.off(c,a||"**",d)},hover:function(a,c){return this.mouseenter(a).mouseleave(c||a)}}),h.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(a,c){h.fn[c]=function(d,_){return arguments.length>0?this.on(c,null,d,_):this.trigger(c)}});var fh=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;h.proxy=function(a,c){var d,_,M;if(typeof c=="string"&&(d=a[c],c=a,a=d),!!E(a))return _=s.call(arguments,2),M=function(){return a.apply(c||this,_.concat(s.call(arguments)))},M.guid=a.guid=a.guid||h.guid++,M},h.holdReady=function(a){a?h.readyWait++:h.ready(!0)},h.isArray=Array.isArray,h.parseJSON=JSON.parse,h.nodeName=Q,h.isFunction=E,h.isWindow=y,h.camelCase=Oe,h.type=L,h.now=Date.now,h.isNumeric=function(a){var c=h.type(a);return(c==="number"||c==="string")&&!isNaN(a-parseFloat(a))},h.trim=function(a){return a==null?"":(a+"").replace(fh,"$1")};var hh=e.jQuery,dh=e.$;return h.noConflict=function(a){return e.$===h&&(e.$=dh),a&&e.jQuery===h&&(e.jQuery=hh),h},typeof t>"u"&&(e.jQuery=e.$=h),h})})(zf);var f0=zf.exports;const ii=Of(f0);new u0;ii("#stats_info")[0];window.onload=function(){ii("#stats").remove(),ii(".link").hover(()=>{ii("html").css("background","white"),ii("#scene").addClass("inverted")},()=>{ii("html").css("background","black"),ii("#scene").removeClass("inverted")}),Wf(),m0(),qf()};window.onresize=Wf;const Es=new Sf,bs=new Sf,ya=new Tx,h0=new La,Ou=new Mx,il=new Cf,ns=new Mf({alpha:!0,antialias:!1}),kf=ii("#scene");let Fr,Or,Pa;kf.append(ns.domElement);ns.autoClear=!1;ns.info.autoReset=!1;const An=new _n(14,0,1,44),Bu=[new k(-22,0,44),new k(0,0,60)],d0={minFilter:hn,magFilter:hn,format:Un,stencilBuffer:!1},Hf=new Li(0,0,d0),is=new i0(ns,Hf),p0=new Uf(bs,An),Gf=new Uf(Es,An);Gf.clear=!1;is.addPass(p0);is.addPass(Gf);const El=new s0;El.uniforms.angle.value=.5;El.uniforms.scale.value=1;is.addPass(El);const Vf=new Nf(Df);Vf.renderToScreen=!0;is.addPass(Vf);function Wf(){Fr=window.innerWidth,Or=window.innerHeight,Pa=Fr/Or;let r=Fr>Or;An.aspect=Pa;let e=r?Bu[0]:Bu[1];An.position.set(e.x,e.y,e.z);let t=2;An.position.z=e.z*t,An.far=An.position.z,An.fov=r?16:14,An.updateProjectionMatrix(),ns.setSize(Fr,Or),Hf.setSize(Fr,Or),is.setSize(Fr,Or)}let Ra=!1,zu=2,Ot={x1:0,y1:0,x2:0,y2:0},Ma={x:0,y:0};new k;let bl=new k,ku=new k;const Xf=3;let rl=[0,0,0],or=[];for(let r=0;r<5;r++)or[r]=Xf;let Sa=0;kf.on("touchstart mousedown",r=>{r.preventDefault();let e=Xu(r),t=qu(e.x,e.y),n=Wu(t,Wn);if(n!=0){let i=n.point;Wn.worldToLocal(i).toArray(rl,Sa*3),or[Sa]=0,Sa=(Sa+1)%5,Ai.uniforms.rippleOriginsOS.value=rl,r.type==="mousedown"&&(Ra=!0)}Ma={x:e.x,y:e.y},ju(t)}).on("touchmove mousemove",r=>{r.preventDefault();let e=r.type==="mousemove",t=Xu(r),n=qu(t.x,t.y),i=Wu(n,Wn);if(i!=0){let s=i.point;bl=bi.worldToLocal(s.clone()),e||(Ra=!0)}e&&(i!=0?ii("canvas").css("cursor","all-scroll"):ii("canvas").css("cursor","default")),Ra&&(Ot.x1=Ot.x2=(t.x-Ma.x)*Math.max(1,window.innerHeight/window.innerWidth)*zu,Ot.y1=Ot.y2=(t.y-Ma.y)*zu),Ma={x:t.x,y:t.y},ju(n)});ii(document).on("touchend mouseup",r=>{Ra=!1,r.type=="touchend"&&bl.set(0,0,0)});let Vn,Wn,Ei,bi,Hu,Sn,Tn,En,bn,ki;function m0(){const r=[new wu(0),new wu(6579300)],e=[];e[0]=new wa(16777215,3,300),e[0].position.set(0,0,60),e[1]=new wa(16777215,3,600),e[1].position.set(30,40,20),e[2]=new wa(8445183,1.5,0),e[2].position.set(-40,60,40),Es.add(r[0]),Es.add(e[0]),bs.add(r[1]),bs.add(e[1]),bs.add(e[2]),Vn=new ui,Vn.setFromCenterAndSize(new k(0,0,15),new k(80,40,20));const t=new _l(20,7);t.computeVertexNormals();const n=[];let i=t.getAttribute("position");for(let Z=0;Z<i.count;Z++)n.push(new k().fromBufferAttribute(i,Z));let s=Sx(t,1);const o=[];i=s.getAttribute("position");for(let Z=0;Z<i.count;Z++)o.push(new k().fromBufferAttribute(i,Z));let l=[new k(1,0,0),new k(0,1,0),new k(0,0,1)],f=t.attributes.position,u=new Float32Array(f.count*3);for(let Z=0,me=f.count;Z<me;Z++)l[Z%3].toArray(u,Z*3);t.setAttribute("center",new Gt(u,3)),Wn=new on(t,new Fn(a0)),Wn.rotation.x+=90,Es.add(Wn);const p=new pn;var m=[];for(let Z=0;Z<o.length;Z++)m.push(o[Z].x,o[Z].y,o[Z].z);p.setAttribute("position",new Qt(m,3));var v=new ml({size:3,sizeAttenuation:!0,map:new La().load("images/dot.png"),alphaTest:.5,transparent:!1});const x=new Jo(p,v);x.frustumCulled=!1,Wn.add(x);const T=new Oo;T.setAttribute("position",new Qt([0,0,0],3));var L=[],I=[],H=[],E=[];for(let Z=0;Z<o.length;Z++){if(Math.random()>.5)continue;let me=o[Z],F=me.clone().subScalar(2),Ee=me.clone().addScalar(2);L.push(lt(F.x,Ee.x),lt(F.y,Ee.y),lt(F.z,Ee.z));let De=lt(.2,.5);I.push(De,De,De),H.push(lt(.15,3));let be=v0(lt(180,280),lt(20,60),lt(60,90)),qe=new Qe(parseInt("0x"+ko(be.r)+ko(be.g)+ko(be.b)));E.push(qe.r,qe.g,qe.b)}T.setAttribute("translation",new Hn(new Float32Array(L),3)),T.setAttribute("scale",new Hn(new Float32Array(I),3)),T.setAttribute("fadeScaler",new Hn(new Float32Array(H),1)),T.setAttribute("instanceColor",new Hn(new Float32Array(E),3));const y=new Io(l0);y.uniforms.texture.value=new La().load("images/dot.png"),y.uniforms.fadeMinBounds.value=Vn.min.toArray(),y.uniforms.fadeMaxBounds.value=Vn.max.toArray(),bi=new Jo(T,y),bi.frustumCulled=!1,bi.onBeforeRender=(Z,me,F,Ee,De,be)=>{ku.lerp(bl,Cs*8),De.uniforms.modelMatrix_inv.value=bi.matrix,De.uniforms.cursorPosOverSphere.value=ku.toArray(),De.uniformsNeedUpdate=!0},Es.add(bi);const g=new Oo,C=new Oo,A=new vl(1,12,8);g.index=A.index,g.attributes.position=A.attributes.position,C.index=A.index,C.attributes.position=A.attributes.position;var L=[],I=[],h=[],H=[];for(let Z=0;Z<o.length;Z++){if(Math.random()>.4)continue;let me=o[Z];L.push(lt(me.x-1,me.x+1),lt(me.y-1,me.y+1),lt(me.z-1,me.z+1));let F=lt(.12,.5),Ee=F*1.125;I.push(F,F,F),h.push(Ee,Ee,Ee),H.push(lt(.1,3))}g.setAttribute("translation",new Hn(new Float32Array(L),3)),g.setAttribute("scale",new Hn(new Float32Array(I),3)),g.setAttribute("fadeScaler",new Hn(new Float32Array(H),1)),C.setAttribute("translation",new Hn(new Float32Array(L),3)),C.setAttribute("scale",new Hn(new Float32Array(h),3)),C.setAttribute("fadeScaler",new Hn(new Float32Array(H),1));const Y=new on(g,new Io({vertexShader:xa.vertexShader,fragmentShader:xa.fragmentShader,uniforms:{color:{value:new Qe(0).toArray().concat(1)},fadeMinBounds:{value:Vn.min.toArray()},fadeMaxBounds:{value:Vn.max.toArray()},fadeDistance:{value:1}}}));Y.frustumCulled=!1;const w=new on(C,new Io({vertexShader:xa.vertexShader,fragmentShader:xa.fragmentShader,uniforms:{color:{value:new Qe(13158600).toArray().concat(1)},fadeMinBounds:{value:Vn.min.toArray()},fadeMaxBounds:{value:Vn.max.toArray()},fadeDistance:{value:1}},side:vn}));w.frustumCulled=!1,Y.add(w),Wn.add(Y),Ei=new Bt,bs.add(Ei),Sn=[];const U=[[-4,18.6,10,1.2],[4,8,-19,.8],[-12,-6,-14,.6],[-16,2,12,1],[9,-14,12,1.1],[-3,-20,3,1.4],[19,9,2,.9],[1,7,21,1.6],[3,16.7,-6,.4],[5.3,-7.8,-15.7,1.2],[1,7,-21,1]],fe=new No({color:11842740,emissive:2105376,transparent:!0,opacity:.9,side:Xn});ya.load("geom/detailsphere_a.glb",Z=>{let me=Z.scene.children[0];me.material=fe;for(let F=0;F<U.length;F++){let Ee=me.clone();Ee.position.set(U[F][0],U[F][1],U[F][2]),Ee.rotation.setFromVector3(new k(lt(0,360),lt(0,360),lt(0,360))),Ei.add(Ee),Ee._scale=new k(U[F][3],U[F][3],U[F][3]),Ee._randomScaleDistFactor=lt(1,4),Ee._randomRotationFactor=[lt(-.005,.005),lt(-.005,.005),lt(-.005,.005)],Sn.push(Ee)}}),Tn=[];const Q=[[-1,21,.5,.5],[1,17,13,.4],[11,16,3,.2],[1,11,-16,.6],[17,12,-5,.3],[15,0,-12,.2],[17,-8,-2,.7],[-13,-7,-7,.6],[2,-17,-6,.4],[0,-7,16,.3],[-20,-6,-2,.3],[-9,7,-16,.2],[-15,-10,9,.4],[14,-3,17,.5]],q=new No({color:5530724,emissive:9868950}),te=new No({color:9481396,emissive:2105376});ya.load("geom/detailsphere_b.glb",Z=>{let me=Z.scene.children[0];me.scale.multiplyScalar(.01),me.material=q,me.children[0].material=te;for(let F=0;F<Q.length;F++){let Ee=me.clone();Ee.position.set(Q[F][0],Q[F][1],Q[F][2]),Ee.rotation.setFromVector3(new k(lt(0,360),lt(0,360),lt(0,360))),Ei.add(Ee),Ee._scale=new k(Q[F][3],Q[F][3],Q[F][3]),Ee._randomScaleDistFactor=lt(1,3),Ee._randomRotationFactor=[lt(-.002,.002),lt(-.002,.002),lt(-.002,.002)],Tn.push(Ee)}}),En=[];const ee=[[5.4,21,5.4,.8],[-14,13,5,1.1],[-19,6,-6,1],[-14,0,11,.8],[20,-6,1,1.4],[10,-9,-16,1.2],[2,4,-16,1.1],[-7,6,-15,.9]],ye=new Su({color:9478304});ya.load("geom/detailsphere_c.glb",Z=>{let me=Z.scene.children[0];me.material=ye;for(let F=0;F<ee.length;F++){let Ee=me.clone();Ee.position.set(ee[F][0],ee[F][1],ee[F][2]),Ee.rotation.setFromVector3(new k(lt(0,360),lt(0,360),lt(0,360))),Ei.add(Ee),Ee._scale=new k(ee[F][3],ee[F][3],ee[F][3]),Ee._randomScaleDistFactor=lt(1,4),Ee._randomRotationFactor=[lt(-.002,.002),lt(-.002,.002),lt(-.002,.002)],En.push(Ee)}}),bn=[];const ue=[[-6,21,1,1.2],[-13,-2,-17,1.1],[5,-21,-1,.9],[3,14,-11,1.4],[10,12,14,1],[1,9,17,.8],[-19,-3,10,1.2]],de=new Su({color:5537920,emissive:6579300,shininess:50,side:Xn,flatShading:!0});ya.load("geom/detailsphere_d.glb",Z=>{let me=Z.scene.children[0];me.material=de;for(let F=0;F<ue.length;F++){let Ee=me.clone();Ee.position.set(ue[F][0],ue[F][1],ue[F][2]),Ee.rotation.setFromVector3(new k(lt(0,360),lt(0,360),lt(0,360))),Ei.add(Ee),Ee._scale=new k(ue[F][3],ue[F][3],ue[F][3]),Ee._randomScaleDistFactor=lt(1,4),Ee._randomRotationFactor=[lt(-.003,.003),lt(-.003,.003),lt(-.003,.003)],bn.push(Ee)}});let Me=[],ge=new Float32Array(n.length*3),Ne=new Float32Array(n.length*2),Ae=t.getAttribute("normal"),ie=t.getAttribute("uv");for(let Z=0;Z<n.length;Z+=3){let me=n[Z+0].clone().multiplyScalar(.8),F=n[Z+1].clone().multiplyScalar(.8),Ee=n[Z+2].clone().multiplyScalar(.8),De=new k().fromArray(Ae.array,Z*3).multiplyScalar(4);me.add(De),F.add(De),Ee.add(De),Me.push(me),Me.push(F),Me.push(Ee)}for(let Z=0;Z<Me.length;Z+=3){let me=Me[Z+0].clone(),F=Me[Z+1],Ee=Me[Z+2],De=me.add(F).add(Ee).divideScalar(3);for(let be=0;be<9;be+=3)ge[Z*3+be+0]=De.x,ge[Z*3+be+1]=De.y,ge[Z*3+be+2]=De.z}for(let Z=0;Z<n.length*2;Z+=6){let me=ie.array[Z+0],F=ie.array[Z+1];Ne[Z+0]=me,Ne[Z+1]=F,Ne[Z+2]=me,Ne[Z+3]=F,Ne[Z+4]=me,Ne[Z+5]=F}const pe=new pn;pe.setFromPoints(Me),pe.setAttribute("normal",Ae),pe.setAttribute("triangleCenterPosOS",new Gt(ge,3)),pe.setAttribute("uv",new Gt(Ne,2)),ki=h0.load("images/triangles_alpha.png"),ki.wrapS=Vi,ki.wrapT=Vi,ki.magFilter=Jt,Ai=new Fn(o0),Ai.uniforms.texMask.value=ki,Ai.uniforms.rippleOriginsOS.value=rl,Ai.uniforms.rippleTimes.value=or,Hu=new on(pe,Ai),Wn.add(Hu)}let Ai=null;const g0=.025,Ta=.02;let Gu=0;const Vu=new si;function _0(){for(let i=0;i<or.length;i++)or[i]<Xf&&(or[i]+=Cs);Ai.uniforms.rippleTimes.value=or;let r=g0*Cs;Wn.rotation.x+=r,Ei.rotation.z-=r,bi.rotation.x+=r,Ot.x1*=.95,Ot.y1*=.95,Ot.x2*=.956,Ot.y2*=.956;let e=new si().setFromEuler(new Kr(Ea(Ot.y1*Ta),Ea(Ot.x1*Ta*Pa),0,"XYZ")),t=new si().setFromEuler(new Kr(Ea(Ot.y2*Ta),Ea(Ot.x2*Ta*Pa),0,"XYZ"));Wn.quaternion.multiplyQuaternions(e,Wn.quaternion),Ei.quaternion.multiplyQuaternions(e,Ei.quaternion),Vu.slerp(t,Cs*4),bi.quaternion.multiplyQuaternions(Vu,bi.quaternion);let n;for(let i=0;i<Sn.length;i++)Sn[i].rotation.x+=Sn[i]._randomRotationFactor[0]*((Ot.x1+Ot.y1)/2),Sn[i].rotation.y+=Sn[i]._randomRotationFactor[1]*((Ot.x1+Ot.y1)/2),Sn[i].rotation.z+=Sn[i]._randomRotationFactor[2]*((Ot.x1+Ot.y1)/2),n=Vn.distanceToPoint(new k().setFromMatrixPosition(Sn[i].matrixWorld)),Sn[i].scale.lerpVectors(Sn[i]._scale,new k(.001,.001,.001),n<Sn[i]._randomScaleDistFactor?n/Sn[i]._randomScaleDistFactor:1);for(let i=0;i<Tn.length;i++)Tn[i].children[0].rotation.x+=Tn[i]._randomRotationFactor[0],Tn[i].children[0].rotation.y+=Tn[i]._randomRotationFactor[1],Tn[i].children[0].rotation.z+=Tn[i]._randomRotationFactor[2],n=Vn.distanceToPoint(new k().setFromMatrixPosition(Tn[i].matrixWorld)),Tn[i].scale.lerpVectors(Tn[i]._scale,new k(.001,.001,.001),n<Tn[i]._randomScaleDistFactor?n/Tn[i]._randomScaleDistFactor:1);for(let i=0;i<En.length;i++)En[i].rotation.x+=En[i]._randomRotationFactor[0]*((Ot.x1+Ot.y1)/2),En[i].rotation.y+=En[i]._randomRotationFactor[1]*((Ot.x1+Ot.y1)/2),En[i].rotation.z+=En[i]._randomRotationFactor[2]*((Ot.x1+Ot.y1)/2),n=Vn.distanceToPoint(new k().setFromMatrixPosition(En[i].matrixWorld)),En[i].scale.lerpVectors(En[i]._scale,new k(.001,.001,.001),n<En[i]._randomScaleDistFactor?n/En[i]._randomScaleDistFactor:1);for(let i=0;i<bn.length;i++)bn[i].rotation.x+=bn[i]._randomRotationFactor[0],bn[i].rotation.y+=bn[i]._randomRotationFactor[1],bn[i].rotation.z+=bn[i]._randomRotationFactor[2],n=Vn.distanceToPoint(new k().setFromMatrixPosition(bn[i].matrixWorld)),bn[i].scale.lerpVectors(bn[i]._scale,new k(.001,.001,.001),n<bn[i]._randomScaleDistFactor?n/bn[i]._randomScaleDistFactor:1);il.getElapsedTime()>Gu&&(ki.offset.x=Math.random(),ki.offset.y=Math.random(),Ai.uniforms.uvOffset.value=ki.offset,Ai.uniformsNeedUpdate=!0,Gu=il.getElapsedTime()+lt(0,.1))}let Cs=0;function qf(){Cs=il.getDelta(),_0(),ns.clear(),is.render(),requestAnimationFrame(qf)}function Wu(r,e){Ou.setFromCamera(r,An);let t=Ou.intersectObject(e),n=0;return t.length>0&&(n=t[0]),n}function Xu(r){let e={x:0,y:0};return r.type==="touchstart"||r.type==="touchmove"?(e.x=r.originalEvent.targetTouches[0].clientX,e.y=r.originalEvent.targetTouches[0].clientY):(r.type==="click"||r.type==="mousedown"||r.type==="mousemove")&&(e.x=r.clientX,e.y=r.clientY),e}function qu(r,e){let t=new ct;return t.x=r/window.innerWidth*2-1,t.y=-(e/window.innerHeight)*2+1,t}function ju(r){let e=new k;e.set(r.x,r.y,.5),e.unproject(An);let t=e.sub(An.position).normalize(),n=-An.position.z/t.z;return An.position.clone().add(t.multiplyScalar(n))}function lt(r,e){return Math.random()*(e-r)+r}function ko(r){let e=r.toString(16);return e.length==1?"0"+e:e}function Ea(r){return r*(Math.PI/180)}function v0(r,e,t){let n,i,s,o,l,f;return e/=100,t/=100,e==0?o=l=f=t*255:(t<=.5?i=t*(e+1):i=t+e-t*e,n=t*2-i,s=r/360,o=Math.round(Ho(n,i,s+1/3)),l=Math.round(Ho(n,i,s)),f=Math.round(Ho(n,i,s-1/3))),{r:o,g:l,b:f}}function Ho(r,e,t){let n;return t<0?t+=1:t>1&&(t-=1),6*t<1?n=r+(e-r)*t*6:2*t<1?n=e:3*t<2?n=r+(e-r)*(2/3-t)*6:n=r,255*n}
