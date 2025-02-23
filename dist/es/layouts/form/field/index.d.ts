import { FieldValues, Path, UseFormRegister } from 'react-hook-form';
type Props<T extends FieldValues> = {
    name: Path<T>;
    register: UseFormRegister<T>;
    required?: true;
    textarea?: true;
};
declare const Field: <T extends FieldValues>(props: Props<T>) => import("react/jsx-runtime").JSX.Element;
export default Field;
