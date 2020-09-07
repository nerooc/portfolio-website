import React from 'react';

import './FilterBar.css';

class FilterBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            term: '',
            location: '',
            filter: 'show_all'
        };

        this.filters = {
            'Show All': 'show_all',
            'Coded': 'coded',
            'Designed': 'designed',
            'Coordinated': 'coordinated'
        };
    }

    getFilterClass(filterOption) {
		if (filterOption === this.state.filter) {
			return 'active';
		} else {
			return '';
		}
	}

    handleFilterChange(filterOption) {
		this.setState({
			filter: filterOption,
        });
	}

    renderFilterOptions() {
        return Object
            .keys(this.filters)
            .map((filterOption) => {
                let filterOptionValue = this.filters[filterOption];
                return (
                    <li
                        onClick={this
                        .handleFilterChange
                        .bind(this, filterOptionValue)}
                        className={this.getFilterClass(filterOptionValue)}
                        key={filterOptionValue}>
                        {filterOption}
                    </li>
                );
            });
    }

    render() {
        return (
            <div className="filter">
                <ul>{this.renderFilterOptions()}</ul>
            </div>
        );
    }
}

export default FilterBar;