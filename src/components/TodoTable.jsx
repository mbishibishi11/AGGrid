function TodoTable(props) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Description</th>
                    <th>Due date</th>
                    <th> Delete </th>
                </tr>
            </thead>
            <tbody>
                {
                    props.todos.map((todo, index) => (
                        <tr key={index}>
                            <td>{todo.description}</td>
                            <td>{todo.duedate}</td>
                            <button onClick={() => props.handleDelete(index)}>Delete</button>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    );
}
 
export default TodoTable;