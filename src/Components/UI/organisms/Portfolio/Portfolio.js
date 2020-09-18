import React from 'react';
import Projects from '../../molecules/Projects/Projects';
import SectionHeader from '../../atoms/SectionHeader/SectionHeader';
import FilterBar from '../../molecules/FilterBar/FilterBar';
import './Portfolio.css';


const Portfolio = props => (
  <div className="portfolio">
    <div className="portfolio__header">
      <SectionHeader>PORTFOLIO</SectionHeader>
    </div>
    <FilterBar />
    <Projects /> {/* przekazać tablicę z projektami */}
  </div>
);

export default Portfolio;
