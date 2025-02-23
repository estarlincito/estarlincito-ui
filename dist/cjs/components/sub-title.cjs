'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const themes = require('@radix-ui/themes');
const jsxRuntime = require('react/jsx-runtime');

const SubTitle = (props) => {
  return /* @__PURE__ */ jsxRuntime.jsx(themes.Heading, {
    weight: props.weight ? props.weight : "light",
    ...props,
    size: props.size ? props.size : {
      initial: "4",
      lg: "6"
    }
  });
};

exports.SubTitle = SubTitle;
