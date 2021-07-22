import react, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodoAction } from '../actions/postActions';
import '../Form.css';

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
    }
  
    render() {
      return (
        <form className="input-container" onSubmit={this.handleSubmit}>
            <input className="input-field" value={this.state.value} onChange={this.handleChange} />
          <input className="submit" type="submit" value="Submit" />
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