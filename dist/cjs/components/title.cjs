'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const themes = require('@radix-ui/themes');
const jsxRuntime = require('react/jsx-runtime');

const Title = (props) => {
  return /* @__PURE__ */ jsxRuntime.jsx(themes.Heading, {
    ...props,
    size: props.size ? props.size : {
      initial: "6",
      lg: "8"
    },
    children: props.children
  });
};

exports.Title = Title;
