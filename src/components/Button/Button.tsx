import React from 'react';

import classNames from 'classnames';

import Loader from '../Loader/Loader';
import styles from './Button.module.scss';

enum ButtonColor {
  primary = 'primary',
  secondary = 'secondary',
}

type ButtonProps = React.PropsWithChildren<{
  loading?: boolean;
  color?: ButtonColor;
  className?: string;
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: React.MouseEventHandler;
}> &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({
  loading = false,
  color = ButtonColor.primary,
  className,
  disabled,
  children,
  onClick,
  ...args
}) => {
  const cn = classNames({
    [`${className}`]: className,
    [`button_color-${color}`]: color,
    [`button_disabled`]: loading || disabled,
    [`${styles.button}`]: true,
  });

  return (
    <>
      <button
        {...args}
        color={color}
        className={cn}
        onClick={onClick}
        disabled={disabled || loading}
      >
        {loading && <Loader />}
        {children}
      </button>
    </>
  );
};

export default Button;
