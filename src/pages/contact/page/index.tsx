import { Container } from '@radix-ui/themes';
import { Wrapper } from '@/layouts/wrapper.js';
import ContactForm from './form.js';

export const ContactPage = () => {
  return (
    <Container size='3'>
      <Wrapper align='center'>
        <ContactForm />
      </Wrapper>
    </Container>
  );
};
