import React, { Component } from 'react';
import '../App.css';
import Navbar from './Navbar';
import Homenotbtn from './Homenotbtn';
import Contronller from './Contronller';

class Admin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tasks : [],
            isDisplayForm : false,
            keyword : '',
            filterName : '',
            filterStatus : '-1',
            itemEditing : null,
            sortBy : 'name',
            sortValue : 1
        };
    }

    componentWillMount() {
        if(localStorage && localStorage.getItem('tasks')){
            var tasks = JSON.parse(localStorage.getItem('tasks'));
            this.setState({
                tasks : tasks
            });
        }
    }
 

    findIndex = (id) => {
        var { tasks } = this.state;
        var result = -1;
        tasks.forEach((task, index) => {
            if(task.id === id){
                result = index;
            }
        });
        return result;
    }

    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.onFilter(name === 'filterName' ? value : this.state.filterName, name === 'filterStatus' ? value : this.state.filterStatus);
        this.setState({
            [name] : value
        });
    }

    onToggleForm = () => {
        if(this.state.itemEditing !== null){
            this.setState({
                itemEditing : null
            });
        }else{
            this.setState({
                isDisplayForm : !this.state.isDisplayForm
            });
        }
    }

    onExitForm = () =>{
        this.setState({
            isDisplayForm : false,
            itemEditing : null
        });
    }

    onSearch = (keyword) => {
        this.setState({
            keyword : keyword
        });
    }

    onFilter = (filterName, filterStatus) => {
        this.setState({
            filterName : filterName,
            filterStatus : filterStatus
        });
    }

    onSort = (sortBy, sortValue) => {
        this.setState({
            sortBy : sortBy,
            sortValue : sortValue
        })
    }

    render() {
        var {
            tasks,
            keyword, filterName,
            filterStatus,
            sortBy,
            sortValue
        } = this.state;

        tasks = tasks.filter((task) => {
            return task.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
        });

        if(filterName){
            tasks = tasks.filter((task) => {
                return task.name.toLowerCase().indexOf(filterName.toLowerCase()) !== -1
            });
        }
        if(filterStatus){
            tasks = tasks.filter((task) => {
                if(filterStatus === '-1' || filterStatus === -1){
                    return task;
                }else{
                    return task.status === (parseInt(filterStatus, 10) === 1 ? true : false);
                }
            });
        }
        if(sortBy === 'name'){
            tasks.sort((a, b) => {
                if(a.name > b.name) return sortValue;
                else if(a.name < b.name) return -sortValue;
                else return 0;
            });
        }else{
            tasks.sort((a, b) => {
                if(a.status > b.status) return -sortValue;
                else if(a.status < b.status) return sortValue;
                else return 0;
            });
        }

                                                    var elmTasks = tasks.map((task, index) => {
                                                        return (
                                                            <Homenotbtn
                                                                key={task.id}
                                                                task={task}
                                                                index={index + 1}
                                                                onFilter={this.onFilter}

                                                            />
                                                        )
                                                    });
        return (
            
            <div className="container">
                <Navbar />
                
                <div className="text-center">
                    <h1>Danh Sách Công Việc</h1><hr/>
                </div>
                <div className="row">
                    <div className='col-xs-4 col-sm-4 col-md-4 col-lg-4'>
                        
                    </div>
                    <div className= 'col-xs-12 col-sm-12 col-md-12 col-lg-12'>
                        
                        <br/>
                        <Contronller
                            onSearch={this.onSearch}
                            onSort={this.onSort}
                            sortBy={sortBy}
                            sortValue={sortValue}
                        />
                        <table className="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th className="text-center">STT</th>
                                <th className="text-center">Tên Công Việc</th>
                                <th className="text-center">Tên Người Thực Hiện</th>
                                <th className="text-center">Chủ đề Công Việc</th>
                                <th className="text-center">Thời Gian Hoàn Thành</th>
                                <th className="text-center">Trạng Thái</th>
                                {/* <th className="text-center">Hành Động</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="filterName"
                                        onChange={ this.onChange }
                                        value={ this.state.filerName }
                                    />
                                </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>
                                    <select
                                        className="form-control"
                                        name="filterStatus"
                                        onChange={ this.onChange }
                                        value={ this.state.filerName }
                                    >
                                        <option value={-1}>Tất Cả</option>
                                        <option value={0}>Ẩn</option>
                                        <option value={1}>Kích Hoạt</option>
                                    </select>
                                </td>
                                <td></td>
                            </tr>
                            { elmTasks }
                        </tbody>
                    </table>
                    </div>
                    <div>
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default Admin;
