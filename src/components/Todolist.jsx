import { AgGridReact } from "ag-grid-react";
import { useState } from "react";
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-material.css"; // Optional Theme applied to the Data Grid

function Todolist() {
    const [todo, setTodo] = useState({description: "", duedate: "", priority: ""});
    const [todos, setTodos] = useState([]);

    const handleAdd = () => {
        if(!todo.description || todos.duedate){
            alert("Type something...")
        }
        else{

            setTodos([todo, ...todos]);
            setTodo({description: "", duedate: "", priority: ""})
        }
    }

    const [colDefs, setColDefs] = useState([
        {field: "description"},
        {field: "priority"},
        {field: "duedate"},
    ])

    
    return (
        <>
        <h3>My Todos</h3>
        <input
            placeholder='Description'
            value={todo.description}
            onChange={event => setTodo({...todo, description: event.target.value})} 
        />
        <input
            placeholder='Priority'
            value={todo.priority}
            onChange={event => setTodo({...todo, priority: event.target.value})} 
        />
        <input
            type="date"
            placeholder='Due date'
            value={todo.duedate}
            onChange={event => setTodo({...todo, duedate: event.target.value})} 
        />
        <button onClick={handleAdd}>Add Todo</button>
        <div 
            className="ag-theme-material" 
            style={{height: 500, width: '110%'}}
            >
                <AgGridReact
                    rowData={todos}
                    columnDefs={colDefs}
                />
            </div>

        </>
    );
}

export default Todolist;