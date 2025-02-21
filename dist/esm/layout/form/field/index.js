import "../../../node_modules/.pnpm/@estarlincito_utils@2.4.2/node_modules/@estarlincito/utils/dist/is-dev.js";
import { formZed as g } from "../../../node_modules/.pnpm/@estarlincito_utils@2.4.2/node_modules/@estarlincito/utils/dist/form-zed.js";
import { Control as E, Field as u, Label as f, Message as x } from "../../../node_modules/.pnpm/@radix-ui_react-form@0.1.2_@types_react-dom@19.0.4_@types_react@19.0.10__@types_react@1_88e9a3c9406868ec897bc495d961c840/node_modules/@radix-ui/react-form/dist/index.js";
import { InfoCircledIcon as r } from "../../../node_modules/.pnpm/@radix-ui_react-icons@1.3.2_react@19.0.0/node_modules/@radix-ui/react-icons/dist/react-icons.esm.js";
import { Box as h, Flex as a, TextArea as F, TextField as v } from "@radix-ui/themes";
import e from "react";
import n from "../../../node_modules/.pnpm/styled-components@6.1.15_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/styled-components/dist/styled-components.browser.esm.js";
const C = n(u)`
  display: grid;
  margin-bottom: 10px;
`, L = n(f)`
  font-size: 15px;
  font-weight: 500;
  line-height: 35px;
`, l = n(x)`
  color: red;
  font-size: 13px;
  margin-left: 10px;
  opacity: 0.8;
`, q = (c) => {
  const { name: o, textarea: s, register: p, required: d } = c, i = g(o), t = i.title, m = {
    ...p(o),
    ...i,
    required: !!d
  };
  return /* @__PURE__ */ e.createElement(C, { name: o }, /* @__PURE__ */ e.createElement(h, null, /* @__PURE__ */ e.createElement(L, null, t), /* @__PURE__ */ e.createElement(l, { match: "valueMissing" }, /* @__PURE__ */ e.createElement(a, { align: "center", gapX: "1" }, /* @__PURE__ */ e.createElement(r, null), `Please enter your ${t.toLowerCase()}`)), /* @__PURE__ */ e.createElement(l, { match: "typeMismatch" }, /* @__PURE__ */ e.createElement(a, { align: "center", gapX: "1" }, /* @__PURE__ */ e.createElement(r, null), `Please provide a valid ${t.toLowerCase()}`)), /* @__PURE__ */ e.createElement(l, { match: "tooLong" }, /* @__PURE__ */ e.createElement(a, { align: "center", gapX: "1" }, /* @__PURE__ */ e.createElement(r, null), `Please provide a valid ${t.toLowerCase()}`)), /* @__PURE__ */ e.createElement(l, { match: "tooShort" }, /* @__PURE__ */ e.createElement(a, { align: "center", gapX: "1" }, /* @__PURE__ */ e.createElement(r, null), `Please provide a valid ${t.toLowerCase()}`))), /* @__PURE__ */ e.createElement(E, { asChild: !0 }, s === !0 ? /* @__PURE__ */ e.createElement(F, { ...m, radius: "large" }) : /* @__PURE__ */ e.createElement(v.Root, { ...m })));
};
export {
  q as default
};
