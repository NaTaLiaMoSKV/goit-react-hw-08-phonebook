import { useDispatch } from "react-redux"
import { update } from "redux/filter/slice"
// import css from './Filter.module.css'
import { FilterContainer, FilterInput, FilterText } from "./FilterStyles";

export default function Filter() {
    const dispatch = useDispatch();

    const handleInputChange = e => {
        const filterString = e.currentTarget.value;
        dispatch(update(filterString));
    }
    
    return (
        <FilterContainer>
            <FilterText> Find contact by name </FilterText>
            <FilterInput name="filter" onChange={handleInputChange} />
        </FilterContainer>
    )
}