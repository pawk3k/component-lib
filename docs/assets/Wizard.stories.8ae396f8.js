var A=Object.defineProperty,B=Object.defineProperties;var T=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var W=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;var S=(e,t,r)=>t in e?A(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t)=>{for(var r in t||(t={}))W.call(t,r)&&S(e,r,t[r]);if(p)for(var r of p(t))z.call(t,r)&&S(e,r,t[r]);return e},d=(e,t)=>B(e,T(t));var v=(e,t)=>{var r={};for(var a in e)W.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&p)for(var a of p(e))t.indexOf(a)<0&&z.call(e,a)&&(r[a]=e[a]);return r};import{r as l,R as x}from"./index.894ce06f.js";import{c as s,A as E,S as D,M as O}from"./Props.3c5c22dc.js";import"./iframe.5af1824f.js";import{j as n,a as f}from"./jsx-runtime.176622e1.js";import"./blocks.50effb10.js";import"./string.bf3fd91c.js";const h=l.exports.createContext({}),g=()=>{const e=x.useContext(h);if(!e)throw new Error("Component can not be used outside of Wizard");return e},R=({children:e})=>{const[t,r]=l.exports.useState(0),[a,u]=l.exports.useState(0),m=()=>r(P=>P+1),N=()=>r(P=>P-1);return n(h.Provider,{value:{activePage:t,goNextPage:m,goPrevPage:N,steps:a,setSteps:u},children:e})},b=e=>{const{activePage:t,setSteps:r}=g(),a=x.Children.toArray(e.children),u=x.Children.count(e.children),m=a[t];return l.exports.useEffect(()=>{r(u)},[u,r]),n("div",d(c({},e),{children:m}))},C=()=>{const{activePage:e,steps:t}=g();return f("div",{children:[e+1,"/",t]})},L=()=>{const{activePage:e,steps:t,goNextPage:r}=g();return e>=t-1?null:n("button",{onClick:r,children:"Next"})},X=()=>{const{activePage:e,goPrevPage:t}=g();return e<=0?null:n("button",{onClick:t,children:"Previous"})},o=()=>f(R,{children:[f(o.Pages,{children:[n("div",{children:"page1"}),n("div",{children:"page2"}),n("div",{children:"page3"}),n("div",{children:"page4"})]}),n(o.NextButton,{}),n(o.PrevButton,{}),n(C,{})]});o.Pages=b;o.NextButton=L;o.PrevButton=X;o.Progress=C;try{o.Pages.displayName="Wizard.Pages",o.Pages.__docgenInfo={description:"",displayName:"Wizard.Pages",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/molecules/Wizard.tsx#Wizard.Pages"]={docgenInfo:o.Pages.__docgenInfo,name:"Wizard.Pages",path:"src/molecules/Wizard.tsx#Wizard.Pages"})}catch{}const y=e=>s(o,d(c({},e),{mdxType:"Wizard"})),j={ManagedWizard:y},w="wrapper";function _(r){var a=r,{components:e}=a,t=v(a,["components"]);return s(w,d(c(c({},j),t),{components:e,mdxType:"MDXLayout"}),s(O,{title:"Wizard",component:o,mdxType:"Meta"}),s("h1",null,"Wizard"),s(D,{name:"Default",mdxType:"Story"}," ",y.bind({})))}_.isMDXComponent=!0;const M=y.bind({});M.storyName="Default";M.parameters={storySource:{source:"args => <Wizard {...args}></Wizard>"}};const i={title:"Wizard",component:o,includeStories:["defaultStory"]},I={Default:"defaultStory"};i.parameters=i.parameters||{};i.parameters.docs=d(c({},i.parameters.docs||{}),{page:()=>s(E,{mdxStoryNameToKey:I,mdxComponentAnnotations:i},s(_,null))});const J=["ManagedWizard","defaultStory"];export{y as ManagedWizard,J as __namedExportsOrder,i as default,M as defaultStory};
//# sourceMappingURL=Wizard.stories.8ae396f8.js.map