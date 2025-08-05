import './CustomInput.scss'

interface RadioButtonProps {
  name: string;
  value: string;
  checked: boolean;
  onChange: () => void;
  content: string;
}

function RadioButton({ name, value, checked, onChange, content}: RadioButtonProps) {

  return(
    <>
      <label className='label-radiobutton'>
        <input 
          type='radio'
          className='input-radiobutton' 
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
        />
        {content}
      </label>
    </>
  );
}

export default RadioButton;