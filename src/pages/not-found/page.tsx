import { Box, Container, Heading, Link, Strong } from '@radix-ui/themes';

import { Wrapper } from '@/layouts/wrapper.js';
import { Title } from '@/components/title.js';

export const NotFoundPage = () => {
  return (
    <Container size='1'>
      <Wrapper align='center'>
        <Title size='8'>Oops!</Title>
        <Box>
          Looks like that page took a little detour and doesn’t exist anymore.
          No worries! Head back to{' '}
          <Link href='/'>
            <Strong>Home</Strong>
          </Link>{' '}
          and keep exploring!
        </Box>
      </Wrapper>
    </Container>
  );
};
