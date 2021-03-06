import React from 'react';
import Button from './Button'

class Form extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      title: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();

    let title = this.state.title;
    if(title){
     this.props.onAdd(title);
      this.setState({title: ''});
    }
  }

  handleChange(event){
    let title = event.target.value;

    this.setState({title});

  }

  render(){
    return (
      <form className="todo-form" onSubmit={this.handleSubmit}>
        <input ref="title" type="text" placeholder="What need to do?" value={this.state.title} onChange={this.handleChange}/>

        <Button type="submit">Add</Button>
      </form>
    )
  }
}

Form.propTypes = {
  onAdd: React.PropTypes.func.isRequired
};

export default Form;