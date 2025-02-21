import { default as React } from 'react';
interface Props {
    error: Error;
    reset: () => void;
}
export declare const Error: ({ error, reset }: Props) => React.JSX.Element;
export {};
