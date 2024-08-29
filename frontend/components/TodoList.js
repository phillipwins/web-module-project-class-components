import React from 'react';
import Todo from './Todo';

export default class TodoList extends React.Component {
  
    

    render() {
      const { todos, toggleCompletion } = this.props
      const filtered = todos.filter(td => !td.completed || this.props.showAll)
      return (
        <div>
          {
            filtered.map((todo) => (<Todo key={todo.id} todo={todo} toggleCompletion={toggleCompletion} />))
          }
        
      </div>
    );
  }
}
