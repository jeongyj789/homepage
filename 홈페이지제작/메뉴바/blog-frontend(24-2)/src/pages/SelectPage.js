import React from 'react';

class SelectPage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: 'coconut'};
    }
    handleChange = (event) => {
      this.setState({value: event.target.value});
    }
    // 클릭 했을 때
    handleSubmit = (event) => {
      alert('Your favorite flavor is: ' + this.state.value);
      event.preventDefault();
    }
    render() {
      return (
        <form onSubmit={this.handleSubmit}>

            <select value={this.state.value} onChange={this.handleChange}>
              <option value="grapefruit">서울특별시</option>
            </select>

            <select value={this.state.value} onChange={this.handleChange}>
              <option value="grapefruit">영등포구</option>
            </select>

            <select value={this.state.value} onChange={this.handleChange}>
              <option value="grapefruit">신길동</option>
            </select>

          <input type="submit" value="검색" />
        </form>
      );
    }
  }

  export default SelectPage;