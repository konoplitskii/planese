import './style.css';

export const Input = ({
    type = "text",
    name = "",
    containerClassName  = "",
    placeholder = "",
    onChange = ()=> null,
    error ="",
}) => {
  return (
      <div className={`containerIn ${containerClassName}`}>
        <input
            name={name}
            type={ type }
            placeholder={placeholder}
            className="input"
            onChange={onChange}
        />
        {error && <span>${error}</span>}
      </div>
  )
}