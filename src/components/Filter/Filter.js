import React, { Component, PropTypes } from 'react';
import s from './index.scss';

class Filter extends Component {

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleFilterSelect = this.handleFilterSelect.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.state = {
      open: false
    };
  }

  handleClick() {
    this.setState({
      open: true
    });
  }

  handleFilterSelect(e) {
    const {action} = this.props;
    this.setState({
      open: false
    });
    e.preventDefault();
    action(e.currentTarget.id);
  }

  handleClear(e) {
    const {action} = this.props;
    this.setState({
      open: false
    });
    e.preventDefault();
    action('');
  }

  render() {
    const { open } = this.state;
    const { options, selected, name } = this.props;
    return (
      <div className={s.filter}>
        <div className={s.name}>{name}</div>
        <div className={s.select}>
          <div className={s.text}>
            { selected ? <span><span className={s.clear} onClick={this.handleClear}>&#10005;</span> {selected}</span> : <span onClick={this.handleClick}>Apply filter</span> }</div>
          {open && <div className={s.filterOptions}>
            {options && options.map((o,i)=>{
              return <div key={i} onClick={this.handleFilterSelect} id={o} className={s.filterOption}>{o}</div>
            })}
          </div>}
        </div>
      </div>
    );
  }
}

Filter.propTypes = {
  options: PropTypes.array,
  action: PropTypes.func,
  selected: PropTypes.string,
  name: PropTypes.string.isRequired
};

export default Filter;

