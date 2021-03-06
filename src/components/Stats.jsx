import React from 'react';

function Stats(props){
  let total = props.todos.length;
  let completed = props.todos.filter( todo=> todo.completed).length;
  let notCompleted = total - completed;
  return(
    <table>
      <tbody>
      <tr>
        <th>Total tasks:</th>
        <td>{total}</td>
      </tr>
      <tr>
        <th>Done:</th>
        <td>{completed}</td>
      </tr>
      <tr>
        <th>Remaining tasks:</th>
        <td>{notCompleted}</td>
      </tr>
      </tbody>
    </table>
  );
}

export default Stats;