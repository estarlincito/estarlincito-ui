import { Container, Box, Link, Strong } from '@radix-ui/themes';
import { Wrapper } from '../../layouts/wrapper.mjs';
import { Title } from '../../components/title.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';

const NotFoundPage = () => {
  return /* @__PURE__ */ jsx(Container, {
    size: "1",
    children: /* @__PURE__ */ jsxs(Wrapper, {
      align: "center",
      children: [/* @__PURE__ */ jsx(Title, {
        size: "8",
        children: "Oops!"
      }), /* @__PURE__ */ jsxs(Box, {
        children: ["Looks like that page took a little detour and doesn’t exist anymore. No worries! Head back to", " ", /* @__PURE__ */ jsx(Link, {
          href: "/",
          children: /* @__PURE__ */ jsx(Strong, {
            children: "Home"
          })
        }), " ", "and keep exploring!"]
      })]
    })
  });
};

export { NotFoundPage };
