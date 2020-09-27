import React from 'react';

import './FilterBar.css';

class FilterBar extends React.Component {
  
  renderFilterOptions() {
    return Object.keys(this.props.filters).map(filterOption => {
      const filterOptionValue = this.props.filters[filterOption];
      return (
        <li
          onClick={this.props.changeFilter.bind(this, filterOptionValue)}
          className={this.props.getFilter(filterOptionValue)}
          key={filterOptionValue}
        >
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
