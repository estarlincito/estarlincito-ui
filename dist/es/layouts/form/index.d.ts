import { default as React } from 'react';
import { default as Button } from './button.js';
import { default as Field } from './field/index.js';
type FormState = {
    errors?: {
        name?: string[];
        email?: string[];
        password?: string[];
    };
    message?: string;
} | undefined;
interface FormProps {
    children: React.ReactNode;
    action?: string | ((formData: FormData, state?: FormState) => void | Promise<void>) | undefined;
    onSubmit?: React.FormEventHandler<HTMLFormElement> | undefined;
    height?: string;
}
type _Form = {
    ({ children, action, onSubmit, height }: FormProps): React.JSX.Element;
    Button: typeof Button;
    Field: typeof Field;
};
export declare const Form: _Form;
export {};
