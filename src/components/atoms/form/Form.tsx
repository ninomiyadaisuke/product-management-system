import { ReactNode, useEffect } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, UseFormReturn, SubmitHandler, UseFormProps, FieldValues } from 'react-hook-form';
import type { AnyObjectSchema } from 'yup';

type FormProps<TFormValues extends FieldValues, Schema> = {
  className?: string;
  onSubmit: SubmitHandler<TFormValues>;
  children: (methods: UseFormReturn<TFormValues>) => ReactNode;
  options?: UseFormProps<TFormValues>;
  id?: string;
  schema?: Schema;
};

const Form = <TFormValues extends Record<string, unknown>, Schema extends AnyObjectSchema>(
  props: FormProps<TFormValues, Schema>,
) => {
  const { onSubmit, children, className, options, id, schema } = props;
  const methods = useForm<TFormValues>({ ...options, resolver: schema && yupResolver(schema) });

  const {
    reset,
    formState: { isSubmitSuccessful },
  } = methods;

  useEffect(() => {
    if (!isSubmitSuccessful) return;
    reset();
  }, [isSubmitSuccessful, reset]);

  return (
    <form className={className} onSubmit={methods.handleSubmit(onSubmit)} id={id}>
      {children(methods)}
    </form>
  );
};

export default Form;
