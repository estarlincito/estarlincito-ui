import { Flex as t } from "@radix-ui/themes";
import r from "react";
const a = (e) => /* @__PURE__ */ r.createElement(
  t,
  {
    direction: "column",
    gap: "5",
    p: "5",
    align: e.align,
    justify: "center",
    minHeight: "90vh"
  },
  e.children
);
export {
  a as Wrapper
};
