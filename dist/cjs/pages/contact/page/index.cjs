'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const themes = require('@radix-ui/themes');
const layouts_wrapper = require('../../../layouts/wrapper.cjs');
const pages_contact_page_form = require('./form.cjs');
const jsxRuntime = require('react/jsx-runtime');

const ContactPage = () => {
  return /* @__PURE__ */ jsxRuntime.jsx(themes.Container, {
    size: "3",
    children: /* @__PURE__ */ jsxRuntime.jsx(layouts_wrapper.Wrapper, {
      align: "center",
      children: /* @__PURE__ */ jsxRuntime.jsx(pages_contact_page_form, {})
    })
  });
};

exports.ContactPage = ContactPage;
