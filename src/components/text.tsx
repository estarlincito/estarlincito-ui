import { Text as RadixText, type TextProps } from '@radix-ui/themes';
import React from 'react';

export const Text = (props: TextProps) => {
  return <RadixText {...props} size={props.size ? props.size : '5'} />;
};
