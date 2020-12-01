import React from 'react';
import Projects from '../../molecules/Projects/Projects';
import SectionHeader from '../../atoms/SectionHeader/SectionHeader';
import FilterBar from '../../molecules/FilterBar/FilterBar';
import './Portfolio.css';

class Portfolio extends React.Component{
  constructor(props) {
    super(props);
    
    this.state = {
      term: '',
      location: '',
      filter: 'all',
    };

    this.filters = {
      All: 'all',
      Coded: 'coded',
      Designed: 'designed',
    };
  }

  getFilterClass = (filterOption) => {
    if (filterOption === this.state.filter) {
      return 'active';
    }
    return '';
  }

  handleFilterChange = (filterOption) => {
    this.setState({
      filter: filterOption,
    }, function () {
      console.log(this.state.filter); 
  });
  }

  render(){
    return(
      <div className="portfolio">
        <div className="portfolio__header">
          <SectionHeader>PORTFOLIO</SectionHeader>
        </div>
        <FilterBar filters={this.filters} changeFilter={this.handleFilterChange} getFilter={this.getFilterClass} />
        <Projects filter={this.state.filter}/> {/* przekazać tablicę z projektami */}

        <span className="portfolio__footer">And many more to come! 😊</span>
      </div>

    )

  }
}

export default Portfolio;
