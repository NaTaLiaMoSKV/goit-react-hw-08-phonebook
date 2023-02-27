import React, { Component } from "react";

class Filter extends Component {
    render() {
        const { filter, onChange } = this.props;
        
        return (
            <div className="filter">
                <label> Find contact by name </label>
                <input className="filter__input" name="filter" value={filter} onChange={onChange} />
            </div>
        )
    }
}

export default Filter;