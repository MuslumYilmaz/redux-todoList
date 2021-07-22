import react, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteTodoAction, updateTodoAction } from '../actions/postActions';
import FormComponent from './FormComponent';
import '../TodoList.css';

class TodoList extends Component {
    toggleClass(id) {
        this.props.updateTodo(id)
    };

    deleteTodo(id) {
        this.props.deleteTodo(id);
    }

    render() {
        const { list } = this.props;
        const todoList = list.length ? (
            list.map(l => {
                return (
                    <div className="container">
                        <ul>
                            <li className="todo-list" key={l.id}>
                            <p className={l.checked ? 'check-todo': null} onClick={() => this.toggleClass(l.id)}>{ l.title}</p>
                            <button onClick={() => this.deleteTodo(l.id)}>X</button>
                            </li>
                        </ul>
                    </div>
                )
            })
        ) : (<h3>Nothing to do yet</h3>)
        return (
            <div>
            <h2 className="header">Todo List</h2>
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
        deleteTodo: (id) => {dispatch(deleteTodoAction(id))},
        updateTodo: (id) => {dispatch(updateTodoAction(id))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);