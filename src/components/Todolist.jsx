import { AgGridReact } from "ag-grid-react";
import { Fragment, useState } from "react";
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-material.css"; // Optional Theme applied to the Data Grid
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Todolist() {
    const [todo, setTodo] = useState({description: "", duedate: null, priority: ""});
    const [todos, setTodos] = useState([]);

    const handleAdd = () => {
        if(!todo.description || !todo.duedate){
            alert("Type something...")
        }
        else{

            setTodos([todo, ...todos]);
            setTodo({description: "", duedate: null, priority: ""});
        }
    }

    const [colDefs] = useState([
        {field: "description"},
        {field: "priority"},
        {field: "duedate"},
    ])

    
    return (
        <Fragment>
            <h3>My Todos</h3>
            <TextField
                label='Description'
                value={todo.description}
                onChange={event => setTodo({...todo, description: event.target.value})} 
                sx={{ paddingRight: '10px'}} 
            />
            <TextField
                label='Priority'
                variant="outlined"
                value={todo.priority}
                onChange={event => setTodo({...todo, priority: event.target.value})}
                sx={{ paddingRight: '10px'}} 
            />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                value={todo.duedate}
                onChange={newDate => setTodo({...todo, duedate: dayjs(newDate)})}
                renderInput={(params) => <TextField {...params} />}
                sx={{ paddingRight: '10px'}} 
                />
            </LocalizationProvider>
            <Button variant="contained" color="success" onClick={handleAdd}>Add Todo</Button>
            <div 
                className="ag-theme-material" 
                style={{height: 500, width: '110%'}}
                >
                    <AgGridReact
                        rowData={todos}
                        columnDefs={colDefs}
                    />
                </div>

        </Fragment>
    );
}

export default Todolist;