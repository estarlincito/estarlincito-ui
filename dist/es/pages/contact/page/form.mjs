'use client';
import { Box, Flex } from '@radix-ui/themes';
import { useForm } from '../../../node_modules/.pnpm/react-hook-form@7.54.2_react@19.0.0/node_modules/react-hook-form/dist/index.esm.mjs';
import { Breadcrumb } from '../../../components/breadcrumb.mjs';
import { Summary } from '../../../components/summary.mjs';
import { Title } from '../../../components/title.mjs';
import { Form } from '../../../layouts/form/index.mjs';
import onSubmit from './submit.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';

const ContactForm = () => {
  const {
    register,
    handleSubmit
  } = useForm();
  return /* @__PURE__ */ jsxs(Form, {
    onSubmit: (e) => {
      void handleSubmit(onSubmit)(e);
    },
    children: [/* @__PURE__ */ jsxs(Box, {
      mb: "5",
      children: [/* @__PURE__ */ jsx(Title, {
        children: "Get in touch"
      }), /* @__PURE__ */ jsx(Breadcrumb, {
        slug: [{
          route: "/contact",
          title: "Contact "
        }]
      }), /* @__PURE__ */ jsx(Summary, {
        summary: "Seeks collaboration on building something impactful and sustainable!"
      })]
    }), /* @__PURE__ */ jsxs(Flex, {
      justify: "between",
      gapX: "2",
      direction: {
        initial: "column",
        md: "row"
      },
      children: [/* @__PURE__ */ jsx(Box, {
        minWidth: "270px",
        children: /* @__PURE__ */ jsx(Form.Field, {
          name: "first-name",
          register,
          required: true
        })
      }), /* @__PURE__ */ jsx(Box, {
        minWidth: "270px",
        children: /* @__PURE__ */ jsx(Form.Field, {
          name: "last-name",
          register,
          required: true
        })
      })]
    }), /* @__PURE__ */ jsx(Form.Field, {
      name: "company",
      register
    }), /* @__PURE__ */ jsx(Form.Field, {
      name: "phone-number",
      register
    }), /* @__PURE__ */ jsx(Form.Field, {
      name: "email",
      register,
      required: true
    }), /* @__PURE__ */ jsx(Form.Field, {
      name: "message",
      register,
      textarea: true,
      required: true
    }), /* @__PURE__ */ jsx(Form.Button, {
      label: "Send message"
    })]
  });
};

export { ContactForm as default };
