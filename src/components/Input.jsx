import '../styles/Input.css';

const Input = ({ label, error, ...props }) => (
  <div className="flex flex-col">
    <label className="mb-1">{label}</label>
    <input className="border p-2" {...props} />
    {error && <span className="text-red-500 text-sm">{error}</span>}
  </div>
);

export default Input;
