import react, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodoAction } from '../actions/postActions';

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
      event.preventDefault();

      let id = Math.floor(Math.random() * 1000);

      let todo = {id, title: this.state.value};

      this.props.addTodo(todo);
      //alert('An essay was submitted: ' + this.state.value);
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

  const mapToAddTodo = (dispatch) => {
    return {
      addTodo: (todo) => {dispatch(addTodoAction(todo))}
    }
  }

  export default connect(null, mapToAddTodo)(FormComponent);