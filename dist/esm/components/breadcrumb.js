import { Flex as o, Link as r, Strong as t, Text as m, Box as u } from "@radix-ui/themes";
import e from "react";
import E from "../node_modules/.pnpm/styled-components@6.1.15_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/styled-components/dist/styled-components.browser.esm.js";
const g = E(u)`
  text-overflow: 'ellipsis';
  white-space: 'nowrap';
`, p = ({ slug: s, color: l }) => {
  const c = "", [n, a, i] = s;
  return /* @__PURE__ */ e.createElement(o, { align: "center", gap: "1" }, /* @__PURE__ */ e.createElement(r, { size: "2", href: "/", target: "_self" }, /* @__PURE__ */ e.createElement(t, null, "Home")), /* @__PURE__ */ e.createElement(m, { color: l || "indigo", size: "2", as: "span" }, /* @__PURE__ */ e.createElement(t, null, "/")), /* @__PURE__ */ e.createElement(
    r,
    {
      size: "2",
      href: n.route,
      target: "_self",
      underline: c === n.route ? "always" : "hover"
    },
    /* @__PURE__ */ e.createElement(t, null, n.title)
  ), a && /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(m, { color: l || "indigo", size: "2", as: "span" }, /* @__PURE__ */ e.createElement(t, null, "/")), /* @__PURE__ */ e.createElement(r, { size: "2", href: a.route, target: "_self" }, /* @__PURE__ */ e.createElement(t, null, a.title))), i && /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(m, { color: l || "indigo", size: "2", as: "span" }, /* @__PURE__ */ e.createElement(t, null, "/")), /* @__PURE__ */ e.createElement(
    g,
    {
      asChild: !0,
      maxWidth: {
        initial: "5.625rem",
        md: "12.5rem"
      },
      overflow: "hidden"
    },
    /* @__PURE__ */ e.createElement(r, { size: "2", href: i.route, target: "_self" }, /* @__PURE__ */ e.createElement(t, null, i.title))
  )));
};
export {
  p as Breadcrumb
};
