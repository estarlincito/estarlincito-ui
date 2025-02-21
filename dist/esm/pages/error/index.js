import { Container as c, Flex as t, Heading as r, Text as l, Button as i, Strong as n, Link as m, IconButton as s } from "@radix-ui/themes";
import e from "react";
import { Wrapper as p } from "../../layout/wrapper.js";
const g = ({ error: a, reset: o }) => /* @__PURE__ */ e.createElement(c, { size: "1" }, /* @__PURE__ */ e.createElement(p, { align: "center" }, /* @__PURE__ */ e.createElement(t, { direction: "column", gap: "2" }, /* @__PURE__ */ e.createElement(r, { size: "9", mb: "2" }, "Oops!"), /* @__PURE__ */ e.createElement(r, { size: "5" }, a.message), /* @__PURE__ */ e.createElement(l, null, "Please try again or if the problem persists, feel free to contact support for assistance. We apologize for the inconvenience."), /* @__PURE__ */ e.createElement(t, { justify: "between", width: "9.375rem", mt: "2" }, /* @__PURE__ */ e.createElement(
  i,
  {
    variant: "ghost",
    onClick: o,
    size: "3",
    className: "--cursor-button"
  },
  /* @__PURE__ */ e.createElement(n, null, "Try again")
), /* @__PURE__ */ e.createElement(m, { target: "_self", href: "/contact" }, /* @__PURE__ */ e.createElement(s, { variant: "ghost" }, /* @__PURE__ */ e.createElement(n, null, "Contact")))))));
export {
  g as Error
};
