import { Container } from '@radix-ui/themes';
import React from 'react';

import { Wrapper } from '@/layout/wrapper.js';

//import CONTACT from '@/constants/contact';
import ContactForm from './form.js';

//export const { metadata } = CONTACT;

export const ContactPage = () => {
  return (
    <Container size='3'>
      <Wrapper align='center'>
        <ContactForm />
      </Wrapper>
    </Container>
  );
};
