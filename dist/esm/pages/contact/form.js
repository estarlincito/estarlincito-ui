import { Box as m, Flex as i } from "@radix-ui/themes";
import e from "react";
import { useForm as l } from "../../node_modules/.pnpm/react-hook-form@7.54.2_react@19.0.0/node_modules/react-hook-form/dist/index.esm.js";
import { Breadcrumb as o } from "../../components/breadcrumb.js";
import { Summary as u } from "../../components/summary.js";
import { Title as c } from "../../components/title.js";
import { Form as t } from "../../layout/form/index.js";
import d from "./submit.js";
const h = () => {
  const { register: r, handleSubmit: n } = l();
  return /* @__PURE__ */ e.createElement(
    t,
    {
      onSubmit: (a) => {
        n(d)(a);
      }
    },
    /* @__PURE__ */ e.createElement(m, { mb: "5" }, /* @__PURE__ */ e.createElement(c, null, "Get in touch"), /* @__PURE__ */ e.createElement(
      o,
      {
        slug: [{ route: "CONTACT.path", title: "CONTACT.title " }]
      }
    ), /* @__PURE__ */ e.createElement(u, { summary: "CONTACT.description" })),
    /* @__PURE__ */ e.createElement(
      i,
      {
        justify: "between",
        gapX: "2",
        direction: { initial: "column", md: "row" }
      },
      /* @__PURE__ */ e.createElement(m, { minWidth: "270px" }, /* @__PURE__ */ e.createElement(t.Field, { name: "first-name", register: r, required: !0 })),
      /* @__PURE__ */ e.createElement(m, { minWidth: "270px" }, /* @__PURE__ */ e.createElement(t.Field, { name: "last-name", register: r, required: !0 }))
    ),
    /* @__PURE__ */ e.createElement(t.Field, { name: "company", register: r }),
    /* @__PURE__ */ e.createElement(t.Field, { name: "phone-number", register: r }),
    /* @__PURE__ */ e.createElement(t.Field, { name: "email", register: r, required: !0 }),
    /* @__PURE__ */ e.createElement(t.Field, { name: "message", register: r, textarea: !0, required: !0 }),
    /* @__PURE__ */ e.createElement(t.Button, { label: "Send message" })
  );
};
export {
  h as default
};
