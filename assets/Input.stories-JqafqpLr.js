import{j as t}from"./jsx-runtime-z8MfsBtr.js";import"./index-C9rmetsa.js";const n=({title:o,placeholder:p,className:d,maxWidth:c="max-w-[429px]",centerize:u=!1,variant:e="primary",type:m="text",...f})=>{const r={primary:{border:"#1A604E",placeholder:"#1A604EBA",focusRing:"#1A604E"},warning:{border:"#D85562",placeholder:"#D85562BA",focusRing:"#D85562"}};return t.jsxs("div",{className:`flex flex-col items-end gap-1.5 relative w-72 ${c} mx-auto`,children:[t.jsx("div",{className:"inline-flex items-center justify-start gap-2.5 p-2.5 relative flex-[0_0_auto] z-[1] w-full",children:t.jsx("div",{className:`relative w-fit mt-[-1.00px] [font-family:'Pelak-Medium',Helvetica] font-medium text-[${r[e].border}] text-lg tracking-[0] leading-[normal] [direction:rtl]`,children:o})}),t.jsx("input",{...f,type:m,placeholder:p||"متن مورد نظر را وارد کنید",className:`
          w-full h-[50px] px-4 py-2.5 rounded-[5px] border-[2px] border-solid
          [font-family:'Pelak-Regular',Helvetica] text-lg 
          focus:outline-none focus:ring-2 focus:border-transparent
          [direction:rtl] max-w-72 ${d}
          border-[${r[e].border}]
          text-[${r[e].border}]
          shadow-[inset_-1px_1px_4px_#00000040,_-1px_1px_4px_#ffffff]
          placeholder:text-[${r[e].placeholder}]
          ${u?"text-center placeholder:text-center":"text-right placeholder:text-right"}
          focus:ring-[${r[e].focusRing}]
        `})]})};n.__docgenInfo={description:"",methods:[],displayName:"Input",props:{title:{required:!0,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},maxWidth:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"max-w-[429px]"',computed:!1}},centerize:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'warning'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'warning'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},type:{defaultValue:{value:"'text'",computed:!1},required:!1}},composes:["InputHTMLAttributes"]};const y={component:n,title:"Base/Input",tags:["autodocs"]},a={args:{title:"نام و نام خانوادگی",placeholder:"متن مورد نظر را وارد کنید",centerize:!1,variant:"primary"}};var l,s,i;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    title: 'نام و نام خانوادگی',
    placeholder: 'متن مورد نظر را وارد کنید',
    centerize: false,
    variant: 'primary'
  }
}`,...(i=(s=a.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const h=["Sample"];export{a as Sample,h as __namedExportsOrder,y as default};
