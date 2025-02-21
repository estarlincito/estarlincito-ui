"use strict";require("../../../node_modules/.pnpm/@estarlincito_utils@2.4.2/node_modules/@estarlincito/utils/dist/is-dev.js");const p=require("../../../node_modules/.pnpm/@estarlincito_utils@2.4.2/node_modules/@estarlincito/utils/dist/form-zed.js"),o=require("../../../node_modules/.pnpm/@radix-ui_react-form@0.1.2_@types_react-dom@19.0.4_@types_react@19.0.10__@types_react@1_88e9a3c9406868ec897bc495d961c840/node_modules/@radix-ui/react-form/dist/index.js"),r=require("../../../node_modules/.pnpm/@radix-ui_react-icons@1.3.2_react@19.0.0/node_modules/@radix-ui/react-icons/dist/react-icons.esm.js"),t=require("@radix-ui/themes"),g=require("react"),s=require("../../../node_modules/.pnpm/styled-components@6.1.15_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/styled-components/dist/styled-components.browser.esm.js"),E=l=>l&&l.__esModule?l:{default:l},e=E(g),x=s.default(o.Field)`
  display: grid;
  margin-bottom: 10px;
`,h=s.default(o.Label)`
  font-size: 15px;
  font-weight: 500;
  line-height: 35px;
`,n=s.default(o.Message)`
  color: red;
  font-size: 13px;
  margin-left: 10px;
  opacity: 0.8;
`,C=l=>{const{name:c,textarea:u,register:m,required:f}=l,i=p.formZed(c),a=i.title,d={...m(c),...i,required:!!f};return e.default.createElement(x,{name:c},e.default.createElement(t.Box,null,e.default.createElement(h,null,a),e.default.createElement(n,{match:"valueMissing"},e.default.createElement(t.Flex,{align:"center",gapX:"1"},e.default.createElement(r.InfoCircledIcon,null),`Please enter your ${a.toLowerCase()}`)),e.default.createElement(n,{match:"typeMismatch"},e.default.createElement(t.Flex,{align:"center",gapX:"1"},e.default.createElement(r.InfoCircledIcon,null),`Please provide a valid ${a.toLowerCase()}`)),e.default.createElement(n,{match:"tooLong"},e.default.createElement(t.Flex,{align:"center",gapX:"1"},e.default.createElement(r.InfoCircledIcon,null),`Please provide a valid ${a.toLowerCase()}`)),e.default.createElement(n,{match:"tooShort"},e.default.createElement(t.Flex,{align:"center",gapX:"1"},e.default.createElement(r.InfoCircledIcon,null),`Please provide a valid ${a.toLowerCase()}`))),e.default.createElement(o.Control,{asChild:!0},u===!0?e.default.createElement(t.TextArea,{...d,radius:"large"}):e.default.createElement(t.TextField.Root,{...d})))};module.exports=C;
