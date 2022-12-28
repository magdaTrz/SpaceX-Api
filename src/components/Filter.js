const Filter = (props) => (
    <div className="filter-wrapper">
        <select name="height" className="filter-height" onChange={props.onChange}>
            <option value="0"> Select Height </option>
            <option value="20"> More than 20m </option>
            <option value="50"> More than 50m </option>
            <option value="80"> More than 80m </option>
            <option value="100"> More than 100m </option>
        </select>
    </div>
);

export default Filter;