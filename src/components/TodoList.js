import react, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteTodoAction } from '../actions/postActions';
import FormComponent from './FormComponent';

class TodoList extends Component {
    deleteTodo(id) {
        this.props.deleteTodo(id);
    }

    render() {
      console.log(this.props);
        const { list } = this.props;
        const todoList = list.length ? (
            list.map(l => {
                return (
                    <div className="todo-header">
                        <div>
                        <ul>
                            <li key={l.id}>
                            <p>{l.title}</p>
                            <button onClick={() => this.deleteTodo(l.id)}>X</button>
                            </li>
                        </ul>
                        </div>
                    </div>
                )
            })
        ) : (<h3>Nothing to do yet</h3>)
        return (
            <div>
            <h2>Todo List</h2>
            <FormComponent />
            {todoList}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        list: state.list
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteTodo: (id) => {dispatch(deleteTodoAction(id))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);