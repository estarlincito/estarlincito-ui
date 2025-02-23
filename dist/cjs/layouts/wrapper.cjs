'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const themes = require('@radix-ui/themes');
const jsxRuntime = require('react/jsx-runtime');

const Wrapper = (props) => {
  return /* @__PURE__ */ jsxRuntime.jsx(themes.Flex, {
    direction: "column",
    gap: "5",
    p: "5",
    align: props.align,
    justify: "center",
    minHeight: "90vh",
    children: props.children
  });
};

exports.Wrapper = Wrapper;
