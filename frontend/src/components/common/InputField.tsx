import React from 'react';
import styles from './InputField.module.scss';

type InputFieldProps = {
  type: string;
  name: string;
  label: string;
  value: string;
  error?: string;
  touched?: boolean;
  disabled?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
};

const InputField = ({
  type,
  name,
  label,
  value,
  error,
  touched,
  disabled,
  onChange,
  onBlur,
}: InputFieldProps) => {
  return (
    <div className={styles.inputField}>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        disabled={disabled}
      />
      {error && touched && <div style={{ color: 'black' }}>{error}</div>}
    </div>
  );
};

export default InputField;
