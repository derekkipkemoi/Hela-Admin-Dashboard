import React, { Component } from 'react';

import Select from 'react-select';
import './dropdown.css'
const options = [
  { value: 'Users', label: 'Users' },
  { value: 'Loan Interest', label: 'Loan Interest' },
  { value: 'Loan Disbursed', label: 'Loan Disbursed' },
  { value: 'Advance Interest', label: 'Advance Interest' },
  { value: 'Salary Advance Received', label: 'Salary Advance Received' },
  { value: 'Salary Advance Disbursed', label: 'Salary Advance Disbursed' },
  { value: 'Overdue Loans', label: 'Overdue Loans' },

];
class SingleSelect extends Component {
    state = {
        selectedOption: null,
      };
      handleChange = (selectedOption) => {
        this.setState({ selectedOption }, () =>
          console.log(`Option selected:`, this.state.selectedOption)
        );
      };
      render() {
        const { selectedOption } = this.state;
    
        return (
          <Select
          className='chart-filter-dropdown'
            value={selectedOption}
            onChange={this.handleChange}
            options={options}
          />
        );
      }
}
 
export default SingleSelect;