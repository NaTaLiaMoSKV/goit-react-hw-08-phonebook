import { useDispatch } from "react-redux"
import { update } from "redux/filter/slice"
import css from './Filter.module.css'

export default function Filter() {
    const dispatch = useDispatch();

    const handleInputChange = e => {
        const filterString = e.currentTarget.value;
        dispatch(update(filterString));
    }
    
    return (
        <div className={css.filter}>
            <label className={css.filter__text}> Find contact by name </label>
            <input className={css.filter__input} name="filter" onChange={handleInputChange} />
        </div>
    )
}