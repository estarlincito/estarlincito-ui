'use client';
import { Box, Flex } from '@radix-ui/themes';
import React from 'react';
import { useForm } from 'react-hook-form';

import { Breadcrumb } from '@/components/breadcrumb.js';
import { Summary } from '@/components/summary.js';
import { Title } from '@/components/title.js';
import { Form } from '@/layout/form/index.js';

import onSubmit from './submit.js';

export type InputContact = {
  'first-name': string;
  'last-name': string;
  company: string;
  'phone-number': string;
  email: string;
  message: string;
};

const ContactForm = () => {
  const { register, handleSubmit } = useForm<InputContact>();

  return (
    <Form
      onSubmit={(e) => {
        void handleSubmit(onSubmit)(e);
      }}
    >
      <Box mb='5'>
        <Title>Get in touch</Title>
        <Breadcrumb
          slug={[{ route: 'CONTACT.path', title: 'CONTACT.title ' }]}
        />
        <Summary summary={'CONTACT.description'} />
      </Box>

      <Flex
        justify='between'
        gapX='2'
        direction={{ initial: 'column', md: 'row' }}
      >
        <Box minWidth='270px'>
          <Form.Field name='first-name' register={register} required />
        </Box>
        <Box minWidth='270px'>
          <Form.Field name='last-name' register={register} required />
        </Box>
      </Flex>
      <Form.Field name='company' register={register} />
      <Form.Field name='phone-number' register={register} />
      <Form.Field name='email' register={register} required />
      <Form.Field name='message' register={register} textarea required />
      <Form.Button label='Send message' />
    </Form>
  );
};

export default ContactForm;
