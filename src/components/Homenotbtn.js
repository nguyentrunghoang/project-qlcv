import React, { Component } from 'react';

class Homenotbtn extends Component {

    showStatusElement(){
        return (
            <span
                className={ this.props.task.status ? 'label label-danger' : 'label label-info' }
                onClick={ this.onUpdateStatus }
            >{ this.props.task.status === true ? 'Kích Hoạt' : 'ẩn' }</span>
        );
    }

    onUpdateStatus = () => {
        this.props.onUpdateStatus(this.props.task.id);
    }

    onDeleteItem = () => {
        this.props.onDeleteTask(this.props.task.id);
    }

    onSelectedItem = () => {
        this.props.onSelectedItem(this.props.task);
    }

    render() {
        return (
            <tr>
                <td>{ this.props.index }</td>
                <td>{ this.props.task.name }</td>
                <td>{ this.props.task.name_people }</td>
                <td>{ this.props.task.title }</td>
                <td>{ this.props.task.time}</td>
                <td className="text-center">
                    { this.showStatusElement() }
                </td>
                
            </tr>
        );
    }
}

export default Homenotbtn;
