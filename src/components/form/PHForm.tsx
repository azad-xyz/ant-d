import { Form } from "antd";
import { ReactNode } from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";

type TFormProps = {
  onSubmit: SubmitHandler<FieldValues>;
  children: ReactNode;
};

const PHForm = ({ onSubmit, children }: TFormProps) => {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <Form
        layout="vertical"
        onFinish={methods.handleSubmit(onSubmit)}
        size="large"
      >
        {children}
      </Form>
    </FormProvider>
  );
};

export default PHForm;
