import react, { Component } from 'react';

class FormComponent extends Component {
      state = {
        value: 'Add todo'
      };
  
    handleChange = this.handleChange.bind(this);
    handleSubmit = this.handleSubmit.bind(this);
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('An essay was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
            <input value={this.state.value} onChange={this.handleChange} />
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

  export default FormComponent;