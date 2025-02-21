import { Root as a } from "../../node_modules/.pnpm/@radix-ui_react-form@0.1.2_@types_react-dom@19.0.4_@types_react@19.0.10__@types_react@1_88e9a3c9406868ec897bc495d961c840/node_modules/@radix-ui/react-form/dist/index.js";
import { Flex as d } from "@radix-ui/themes";
import r from "react";
import l from "./button.js";
import n from "./field/index.js";
const t = ({
  children: o,
  action: e,
  onSubmit: i,
  height: m
}) => /* @__PURE__ */ r.createElement(
  d,
  {
    height: m,
    asChild: !0,
    direction: "column",
    p: "5",
    gapY: "1",
    justify: "center",
    width: { initial: "400px", md: "600px" },
    style: {
      backgroundColor: "var(--gray-1)",
      border: "1px solid var(--gray-5)",
      borderRadius: "0.625rem"
    }
  },
  /* @__PURE__ */ r.createElement(a, { action: e, onSubmit: i }, o)
);
t.Button = l;
t.Field = n;
export {
  t as Form
};
