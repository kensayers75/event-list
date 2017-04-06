import React, { Component, PropTypes } from 'react';
import s from './index.scss';

class Search extends Component {

  constructor(props) {
    super(props);
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.state = {
      active: false
    }
  }

  handleSearchChange(e){
    const {action} = this.props;
    const value = e.currentTarget.value || '';
    const {active} = this.state;
    e.preventDefault();

    if(value.length > 2){
      if(!active){
        this.setState({
          ...this.state,
          ...{active:true}
        });
        action(value);
      }
    }else{
      if(active){
        this.setState({
          ...this.state,
          ...{active:false}
        });
        action('');
      }
    }
  }

  render() {
    return (
      <div className={s.search}>
        <div className={s.magifyingGlass}></div>
        <input placeholder="Search" className={s.textInput} onChange={this.handleSearchChange} type="text"/>
      </div>
    );
  }
}

Search.propTypes = {
  action: PropTypes.func.isRequired
};

export default Search;
