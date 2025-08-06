interface FieldsetProps {
  label: string;
  type: string;
  placeholder?: string;
  name: string;
  className?: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Fieldset = ({
  label,
  type,
  placeholder,
  className,
  value,
  onChange,
  name,
}: FieldsetProps) => {
  return (
    <fieldset className="fieldset">
      <legend className="fieldset-legend capitalize">{label}</legend>
      <input
        type={type}
        className={`${className ? className : "input"} w-full`}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        {...(type !== "file" ? { value } : {})}
      />
    </fieldset>
  );
};

export default Fieldset;
