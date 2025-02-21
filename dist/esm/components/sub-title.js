import { Heading as t } from "@radix-ui/themes";
import i from "react";
const a = (e) => /* @__PURE__ */ i.createElement(
  t,
  {
    weight: e.weight ? e.weight : "light",
    ...e,
    size: e.size ? e.size : { initial: "4", lg: "6" }
  }
);
export {
  a as SubTitle
};
