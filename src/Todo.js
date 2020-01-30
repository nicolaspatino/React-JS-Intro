import React from 'react';

export class Todo extends React.Component {

    render() {
        return (  
          <div>
            <b>TODO:</b> {this.props.text}
            <br/>
            <b>Priority:</b> {this.props.priority}
            <br/>
            <b>Due date:</b> {this.props.dueDate.toString()}
          </div>
        );
    }

} 