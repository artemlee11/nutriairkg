
const SelectField = (props) => {
  const { label, handleChange, name } = props;
  return (
    <div className="mb-5">
      <label className="text-gray-500 text-sm" htmlFor={name}>{label}</label>
      <select onChange={handleChange} defaultValue="role" name={name} className="w-full border-b-2 py-2 outline-none">
        <option value="role" disabled>Нажмите для выбора</option>
        <option value="Energy" className="py-1">Energy</option>
        <option value="Diet" className="py-1">Diet</option>
        <option value="Relax" className="py-1">Relax</option>
        <option value="Sleep" className="py-1">Sleep</option>
        <option value="Sweetmelon" className="py-1">Sweetmelon</option>
        <option value="Perfomax" className="py-1">Perfomax</option>
      </select>
    </div>
  )
}

export default SelectField
