'use client';
import { formZed, type Name } from '@estarlincito/utils';
import * as Form from '@radix-ui/react-form';
import { InfoCircledIcon } from '@radix-ui/react-icons';
import { Box, Flex, TextArea, TextField } from '@radix-ui/themes';
import React from 'react';
import {
  type FieldValues,
  type Path,
  type UseFormRegister,
} from 'react-hook-form';
import { styled } from 'styled-components';

const FormField = styled(Form.Field)`
  display: grid;
  margin-bottom: 10px;
`;

const FormLabel = styled(Form.Label)`
  font-size: 15px;
  font-weight: 500;
  line-height: 35px;
`;

const FormMessage = styled(Form.Message)`
  color: red;
  font-size: 13px;
  margin-left: 10px;
  opacity: 0.8;
`;

type Props<T extends FieldValues> = {
  name: Path<T>;
  register: UseFormRegister<T>;
  required?: true;
  textarea?: true;
};

const Field = <T extends FieldValues>(props: Props<T>) => {
  const { name, textarea, register, required } = props;
  const properties = formZed(name as Name)!;
  const title = properties.title;

  const options = {
    ...register(name),
    ...properties,
    required: required ? true : false,
  };

  return (
    <FormField name={name}>
      <Box>
        <FormLabel>{title}</FormLabel>
        <FormMessage match='valueMissing'>
          <Flex align='center' gapX='1'>
            <InfoCircledIcon />
            {`Please enter your ${title.toLowerCase()}`}
          </Flex>
        </FormMessage>
        <FormMessage match='typeMismatch'>
          <Flex align='center' gapX='1'>
            <InfoCircledIcon />
            {`Please provide a valid ${title.toLowerCase()}`}
          </Flex>
        </FormMessage>

        <FormMessage match='tooLong'>
          <Flex align='center' gapX='1'>
            <InfoCircledIcon />
            {`Please provide a valid ${title.toLowerCase()}`}
          </Flex>
        </FormMessage>

        <FormMessage match='tooShort'>
          <Flex align='center' gapX='1'>
            <InfoCircledIcon />
            {`Please provide a valid ${title.toLowerCase()}`}
          </Flex>
        </FormMessage>
      </Box>

      <Form.Control asChild>
        {textarea === true ? (
          <TextArea {...options} radius='large' />
        ) : (
          <TextField.Root {...options} />
        )}
      </Form.Control>
    </FormField>
  );
};

export default Field;
