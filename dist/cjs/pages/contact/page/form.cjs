'use client';
'use strict';

const themes = require('@radix-ui/themes');
const index_esm = require('../../../node_modules/.pnpm/react-hook-form@7.54.2_react@19.0.0/node_modules/react-hook-form/dist/index.esm.cjs');
const components_breadcrumb = require('../../../components/breadcrumb.cjs');
const components_summary = require('../../../components/summary.cjs');
const components_title = require('../../../components/title.cjs');
const layouts_form_index = require('../../../layouts/form/index.cjs');
const pages_contact_page_submit = require('./submit.cjs');
const jsxRuntime = require('react/jsx-runtime');

const ContactForm = () => {
  const {
    register,
    handleSubmit
  } = index_esm.useForm();
  return /* @__PURE__ */ jsxRuntime.jsxs(layouts_form_index.Form, {
    onSubmit: (e) => {
      void handleSubmit(pages_contact_page_submit)(e);
    },
    children: [/* @__PURE__ */ jsxRuntime.jsxs(themes.Box, {
      mb: "5",
      children: [/* @__PURE__ */ jsxRuntime.jsx(components_title.Title, {
        children: "Get in touch"
      }), /* @__PURE__ */ jsxRuntime.jsx(components_breadcrumb.Breadcrumb, {
        slug: [{
          route: "/contact",
          title: "Contact "
        }]
      }), /* @__PURE__ */ jsxRuntime.jsx(components_summary.Summary, {
        summary: "Seeks collaboration on building something impactful and sustainable!"
      })]
    }), /* @__PURE__ */ jsxRuntime.jsxs(themes.Flex, {
      justify: "between",
      gapX: "2",
      direction: {
        initial: "column",
        md: "row"
      },
      children: [/* @__PURE__ */ jsxRuntime.jsx(themes.Box, {
        minWidth: "270px",
        children: /* @__PURE__ */ jsxRuntime.jsx(layouts_form_index.Form.Field, {
          name: "first-name",
          register,
          required: true
        })
      }), /* @__PURE__ */ jsxRuntime.jsx(themes.Box, {
        minWidth: "270px",
        children: /* @__PURE__ */ jsxRuntime.jsx(layouts_form_index.Form.Field, {
          name: "last-name",
          register,
          required: true
        })
      })]
    }), /* @__PURE__ */ jsxRuntime.jsx(layouts_form_index.Form.Field, {
      name: "company",
      register
    }), /* @__PURE__ */ jsxRuntime.jsx(layouts_form_index.Form.Field, {
      name: "phone-number",
      register
    }), /* @__PURE__ */ jsxRuntime.jsx(layouts_form_index.Form.Field, {
      name: "email",
      register,
      required: true
    }), /* @__PURE__ */ jsxRuntime.jsx(layouts_form_index.Form.Field, {
      name: "message",
      register,
      textarea: true,
      required: true
    }), /* @__PURE__ */ jsxRuntime.jsx(layouts_form_index.Form.Button, {
      label: "Send message"
    })]
  });
};

module.exports = ContactForm;
