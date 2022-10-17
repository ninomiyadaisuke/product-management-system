import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

type Props = {
  type?: React.HTMLInputTypeAttribute;
  className?: string;
  registration: UseFormRegisterReturn;
};

const TextFeildInput = (props: Props) => {
  const { type = 'text', className, registration } = props;
  return (
    <div>
      <input type={type} className={className} placeholder="fds" {...registration} />
    </div>
  );
};

export default TextFeildInput;
