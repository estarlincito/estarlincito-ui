'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const themes = require('@radix-ui/themes');
const layouts_wrapper = require('../../layouts/wrapper.cjs');
const components_title = require('../../components/title.cjs');
const jsxRuntime = require('react/jsx-runtime');

const NotFoundPage = () => {
  return /* @__PURE__ */ jsxRuntime.jsx(themes.Container, {
    size: "1",
    children: /* @__PURE__ */ jsxRuntime.jsxs(layouts_wrapper.Wrapper, {
      align: "center",
      children: [/* @__PURE__ */ jsxRuntime.jsx(components_title.Title, {
        size: "8",
        children: "Oops!"
      }), /* @__PURE__ */ jsxRuntime.jsxs(themes.Box, {
        children: ["Looks like that page took a little detour and doesn’t exist anymore. No worries! Head back to", " ", /* @__PURE__ */ jsxRuntime.jsx(themes.Link, {
          href: "/",
          children: /* @__PURE__ */ jsxRuntime.jsx(themes.Strong, {
            children: "Home"
          })
        }), " ", "and keep exploring!"]
      })]
    })
  });
};

exports.NotFoundPage = NotFoundPage;
