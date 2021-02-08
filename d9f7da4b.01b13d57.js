(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{116:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(3),i=n(7),o=(n(0),n(132)),a={id:"version-checking",title:"Version checking"},s={unversionedId:"getting-started/version-checking",id:"version-26.5/getting-started/version-checking",isDocsHomePage:!1,title:"Version checking",description:"By default, ts-jest supports a range of versions for jest/typescript. One uses incompatible versions will receive a warning",source:"@site/versioned_docs/version-26.5/getting-started/version-checking.md",slug:"/getting-started/version-checking",permalink:"/ts-jest/docs/getting-started/version-checking",editUrl:"https://github.com/kulshekhar/ts-jest/edit/master/website/versioned_docs/version-26.5/getting-started/version-checking.md",version:"26.5",sidebar:"version-26.5-docs",previous:{title:"Paths mapping",permalink:"/ts-jest/docs/getting-started/paths-mapping"},next:{title:"Test helpers",permalink:"/ts-jest/docs/guides/test-helpers"}},c=[{value:"Note",id:"note",children:[]}],p={toc:c};function l(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"By default, ",Object(o.b)("inlineCode",{parentName:"p"},"ts-jest")," supports a range of versions for ",Object(o.b)("inlineCode",{parentName:"p"},"jest"),"/",Object(o.b)("inlineCode",{parentName:"p"},"typescript"),". One uses incompatible versions will receive a warning\nmessage while running tests. This warning message can be opt-out by setting environment variable ",Object(o.b)("inlineCode",{parentName:"p"},"TS_JEST_DISABLE_VER_CHECKER"),":"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Linux/MacOS")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"export TS_JEST_DISABLE_VER_CHECKER=true\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Windows")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"set TS_JEST_DISABLE_VER_CHECKER=true\n")),Object(o.b)("h3",{id:"note"},"Note"),Object(o.b)("p",null,"As long as the environment variable ",Object(o.b)("inlineCode",{parentName:"p"},"TS_JEST_DISABLE_VER_CHECKER")," stays, the warning message will no longer show.\nThis can lead to unexpected errors due to the usage of incompatible versions' dependencies. Use this environment variable with precautions."))}l.isMDXComponent=!0},132:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return g}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),l=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),d=r,g=u["".concat(a,".").concat(d)]||u[d]||b[d]||o;return n?i.a.createElement(g,s(s({ref:t},p),{},{components:n})):i.a.createElement(g,s({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var p=2;p<o;p++)a[p]=n[p];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);