import './Button.scss'

interface ButtonProps {
    aim: string;
    content: string;
    form?: string;
    type?: 'button' | 'submit' | 'reset';
}

function Button({ aim, content, form, type = "button" }: ButtonProps) {
  return (
    <button form={form} type={type} className={`button ${aim}__button`}>
      {content}
    </button>
  );
}

export default Button;