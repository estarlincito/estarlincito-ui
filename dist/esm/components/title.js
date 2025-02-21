import { Heading as i } from "@radix-ui/themes";
import t from "react";
const r = (e) => /* @__PURE__ */ t.createElement(
  i,
  {
    ...e,
    size: e.size ? e.size : { initial: "6", lg: "8" }
  },
  e.children
);
export {
  r as Title
};
