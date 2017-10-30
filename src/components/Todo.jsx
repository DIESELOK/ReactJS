import React from "react";

import Checkbox from "./Checkbox";
import Button from "./Button";

class Todo extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      editing: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleSubmit(event){
    event.preventDefault();
  }


  render(){
    return ( this.state.editing ?
      <form className = "todo-edit-form" onSubmit={this.handleSubmit} >
        <input type="text" ref="title" defaultValue={this.props.title} />
        <Button className="save icon" icon="save" type="submit"/>
      </form>
      :
      <div className={`todo${this.props.completed ? " completed" : ""}`}>
        <Checkbox checked={this.props.completed} onChange={()=> this.props.onStatusChange(this.props.id)}/>

        <span className="todo-title">{this.props.title}</span>

        <Button className="edit icon" icon="edit" onClick={()=> this.setState({editing:true})}/>
        <Button className="delete icon" icon="delete" onClick={()=> this.props.onDelete(this.props.id)}/>
      </div>
    )
  }
}

Todo.propTypes = {
    title: React.PropTypes.string.isRequired,
    completed: React.PropTypes.bool.isRequired,
    onStatusChange: React.PropTypes.func.isRequired,
    onDelete: React.PropTypes.func.isRequired
};

export default Todo;