"use strict";(self.webpackChunkts_jest_docs=self.webpackChunkts_jest_docs||[]).push([[8559],{4137:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),i=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=i(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=i(n),m=a,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||l;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var i=2;i<l;i++)o[i]=n[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},425:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(7294),a=n(6010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,o),hidden:n},t)}},3992:(e,t,n)=>{n.d(t,{Z:()=>w});var r=n(7462),a=n(7294),l=n(6010),o=n(2957),s=n(6775),u=n(5238),i=n(3609),c=n(2560);function p(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function d(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const r=(0,s.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,u._X)(l),(0,a.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,l=d(e),[o,s]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[u,i]=f({queryString:n,groupId:r}),[p,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,c.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:r}),y=(()=>{const e=u??p;return m({value:e,tabValues:l})?e:null})();(0,a.useLayoutEffect)((()=>{y&&s(y)}),[y]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);s(e),i(e),b(e)}),[i,b,l]),tabValues:l}}var y=n(1048);const k="tabList__CuJ",g="tabItem_LNqP";function h(e){let{className:t,block:n,selectedValue:s,selectValue:u,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),r=i[n].value;r!==s&&(p(t),u(r))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},i.map((e=>{let{value:t,label:n,attributes:o}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},o,{className:(0,l.Z)("tabs__item",g,o?.className,{"tabs__item--active":s===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:r}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function T(e){const t=b(e);return a.createElement("div",{className:(0,l.Z)("tabs-container",k)},a.createElement(h,(0,r.Z)({},e,t)),a.createElement(v,(0,r.Z)({},e,t)))}function w(e){const t=(0,y.Z)();return a.createElement(T,(0,r.Z)({key:String(t)},e))}},7059:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var r=n(7462),a=(n(7294),n(4137)),l=n(3992),o=n(425);const s={id:"mock-es6-class",title:"Mock ES6 class"},u=void 0,i={unversionedId:"guides/mock-es6-class",id:"guides/mock-es6-class",title:"Mock ES6 class",description:"TypeScript is transpiling your ts file and your module is likely being imported using ES2015s import.",source:"@site/docs/guides/mock-es6-class.md",sourceDirName:"guides",slug:"/guides/mock-es6-class",permalink:"/ts-jest/docs/next/guides/mock-es6-class",draft:!1,editUrl:"https://github.com/kulshekhar/ts-jest/edit/main/website/docs/guides/mock-es6-class.md",tags:[],version:"current",lastUpdatedBy:"Anh Pham",lastUpdatedAt:1701166389,formattedLastUpdatedAt:"Nov 28, 2023",frontMatter:{id:"mock-es6-class",title:"Mock ES6 class"},sidebar:"docs",previous:{title:"ESM Support",permalink:"/ts-jest/docs/next/guides/esm-support"},next:{title:"Using with React Native",permalink:"/ts-jest/docs/next/guides/react-native"}},c={},p=[],d={toc:p};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"TypeScript is transpiling your ts file and your module is likely being imported using ES2015s import.\n",(0,a.kt)("inlineCode",{parentName:"p"},"const soundPlayer = require('./sound-player')"),". Therefore creating an instance of the class that was exported as\na default will look like this: ",(0,a.kt)("inlineCode",{parentName:"p"},"new soundPlayer.default()"),". However if you are mocking the class as suggested by the documentation."),(0,a.kt)(l.Z,{groupId:"code-examples",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"tab",tab:!0},"jest.mock('./sound-player', () => {\n  return jest.fn().mockImplementation(() => {\n    return { playSoundFile: mockPlaySoundFile }\n  })\n})\n"))),(0,a.kt)(o.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"tab",tab:!0},"jest.mock('./sound-player', () => {\n  return jest.fn().mockImplementation(() => {\n    return { playSoundFile: mockPlaySoundFile }\n  })\n})\n")))),(0,a.kt)("p",null,"You will get the error"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"TypeError: sound_player_1.default is not a constructor\n")),(0,a.kt)("p",null,"because ",(0,a.kt)("inlineCode",{parentName:"p"},"soundPlayer.default")," does not point to a function. Your mock has to return an object which has a property default\nthat points to a function."),(0,a.kt)(l.Z,{groupId:"code-examples",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"tab",tab:!0},"jest.mock('./sound-player', () => {\n  return {\n    default: jest.fn().mockImplementation(() => {\n      return {\n        playSoundFile: mockPlaySoundFile,\n      }\n    }),\n  }\n})\n"))),(0,a.kt)(o.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"tab",tab:!0},"jest.mock('./sound-player', () => {\n  return {\n    default: jest.fn().mockImplementation(() => {\n      return {\n        playSoundFile: mockPlaySoundFile,\n      }\n    }),\n  }\n})\n")))),(0,a.kt)("p",null,"For named imports, like ",(0,a.kt)("inlineCode",{parentName:"p"},"import { OAuth2 } from './oauth'"),", replace ",(0,a.kt)("inlineCode",{parentName:"p"},"default")," with imported module name, ",(0,a.kt)("inlineCode",{parentName:"p"},"OAuth2")," in this example:"),(0,a.kt)(l.Z,{groupId:"code-examples",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"tab",tab:!0},"jest.mock('./oauth', () => {\n    return {\n        OAuth2: ... // mock here\n    }\n})\n"))),(0,a.kt)(o.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"tab",tab:!0},"jest.mock('./oauth', () => {\n    return {\n        OAuth2: ... // mock here\n    }\n})\n")))))}m.isMDXComponent=!0}}]);