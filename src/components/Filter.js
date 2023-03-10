export default function Filter({filter, onChange}) {
    return (
        <div className="filter">
            <label> Find contact by name </label>
            <input className="filter__input" name="filter" value={filter} onChange={onChange} />
        </div>
    )
}