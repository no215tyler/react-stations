// @ts-check

export const BreedsSelect = props => {
  const handleChange = e => {
    props.onBreedChange(e.target.value)
  }
  return (
    <>
      <label className="dropdown_label">Select Breed ▶︎</label>
      <select
        id="dropdown_list"
        onChange={handleChange}
        value={props.selectedBreed}
      >
        {props.breeds.map((item, index) => {
          return (
            <option key={index} value={item}>
              {item}
            </option>
          )
        })}
      </select>
    </>
  )
}

export default BreedsSelect
