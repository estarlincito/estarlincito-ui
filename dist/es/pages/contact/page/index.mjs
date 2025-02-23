import { Container } from '@radix-ui/themes';
import { Wrapper } from '../../../layouts/wrapper.mjs';
import ContactForm from './form.mjs';
import { jsx } from 'react/jsx-runtime';

const ContactPage = () => {
  return /* @__PURE__ */ jsx(Container, {
    size: "3",
    children: /* @__PURE__ */ jsx(Wrapper, {
      align: "center",
      children: /* @__PURE__ */ jsx(ContactForm, {})
    })
  });
};

export { ContactPage };
