'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const themes = require('@radix-ui/themes');
const layouts_wrapper = require('../../layouts/wrapper.cjs');
const jsxRuntime = require('react/jsx-runtime');

const ErrorPage = ({
  error,
  reset
}) => {
  return /* @__PURE__ */ jsxRuntime.jsx(themes.Container, {
    size: "1",
    children: /* @__PURE__ */ jsxRuntime.jsx(layouts_wrapper.Wrapper, {
      align: "center",
      children: /* @__PURE__ */ jsxRuntime.jsxs(themes.Flex, {
        direction: "column",
        gap: "2",
        children: [/* @__PURE__ */ jsxRuntime.jsx(themes.Heading, {
          size: "9",
          mb: "2",
          children: "Oops!"
        }), /* @__PURE__ */ jsxRuntime.jsx(themes.Heading, {
          size: "5",
          children: error.message
        }), /* @__PURE__ */ jsxRuntime.jsx(themes.Text, {
          children: "Please try again or if the problem persists, feel free to contact support for assistance. We apologize for the inconvenience."
        }), /* @__PURE__ */ jsxRuntime.jsxs(themes.Flex, {
          justify: "between",
          width: "9.375rem",
          mt: "2",
          children: [/* @__PURE__ */ jsxRuntime.jsx(themes.Button, {
            variant: "ghost",
            onClick: reset,
            size: "3",
            className: "--cursor-button",
            children: /* @__PURE__ */ jsxRuntime.jsx(themes.Strong, {
              children: "Try again"
            })
          }), /* @__PURE__ */ jsxRuntime.jsx(themes.Link, {
            target: "_self",
            href: "/contact",
            children: /* @__PURE__ */ jsxRuntime.jsx(themes.IconButton, {
              variant: "ghost",
              children: /* @__PURE__ */ jsxRuntime.jsx(themes.Strong, {
                children: "Contact"
              })
            })
          })]
        })]
      })
    })
  });
};

exports.ErrorPage = ErrorPage;
