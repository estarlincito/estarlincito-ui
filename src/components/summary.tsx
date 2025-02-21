import { Blockquote } from '@radix-ui/themes';
import React from 'react';

interface Props {
  summary: string;
}

export const Summary = ({ summary }: Props) => {
  return <Blockquote>{summary}</Blockquote>;
};
