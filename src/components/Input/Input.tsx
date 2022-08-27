import React from 'react';

import classNames from 'classnames';

type InputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'onChange'
> & {
  value?: string;
  disabled?: boolean;
  className?: string;
  onChange?: (value: string) => void;
};

const Input: React.FC<InputProps> = ({
  value,
  disabled,
  className,
  onChange,
  ...args
}) => {
  const cn = classNames({
    [`${className}`]: className,
    input_disabled: disabled,
  });

  return (
    <input
      className={cn}
      type="text"
      value={value}
      disabled={disabled}
      {...args}
    />
  );
};

export default Input;
