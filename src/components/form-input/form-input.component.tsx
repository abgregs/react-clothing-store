import { FC, ChangeEvent } from 'react';

import './form-input.styles.scss';

export type InputOptions = {
  type?: string;
  required?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  value?: string | number;
};

export type FormInputProps = {
  label: string;
  inputOptions?: InputOptions;
}

const FormInput: FC<FormInputProps> = ({
  label,
  inputOptions
}) => {
  return (
    <div className='group'>
      <input className='form-input' {...inputOptions} />
      {label && (
        <label
          className={`${
            inputOptions && inputOptions.value &&
            typeof inputOptions.value === 'string' &&
            inputOptions.value.length
              ? 'shrink'
              : ''
          } form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
