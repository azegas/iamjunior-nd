import styles from './InputField.module.scss';

const InputField = ({
  label,
  type,
  id,
  value,
  name,
  onChange,
  required,
  error,
  errorMessage,
}) => {
  return (
    <div className={styles.inputField}>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        value={value}
        name={name}
        onChange={onChange}
        required={required}
      />
      {error && <div style={{ color: 'red' }}>{errorMessage}</div>}
    </div>
  );
};

export default InputField;
