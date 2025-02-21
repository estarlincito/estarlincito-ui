import { Heading, type HeadingProps } from '@radix-ui/themes';
import React from 'react';

export const Title = (props: HeadingProps) => {
  return (
    <Heading
      {...props}
      size={props.size ? props.size : { initial: '6', lg: '8' }}
    >
      {props.children}
    </Heading>
  );
};
