import React, { Component } from 'react';

class TaskItem extends Component {

  handleEditar(){
  	this.props.onClickItem(this.props.task);
  }
  handleDelete(){
  	this.props.onDelete(this.props.task);
  }


  render() {
    return (
      <li className="TaskItem list-group-item">
      		{this.props.task.category} -- {this.props.task.name}
      		&nbsp;&nbsp; <button className="btn btn-info" onClick={this.handleEditar.bind(this)} >Editar</button> &nbsp;&nbsp;
      		<button className="btn btn-danger mx-4" onClick={this.handleDelete.bind(this)} >Eliminar</button>
      </li>
    );
  }
}

export default TaskItem;