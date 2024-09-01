const ListTodo = () => {
    const currDate = new Date() ;
    const targetDate = new Date (currDate.getFullYear() + 12  , currDate.getMonth()+1 , currDate.getDay())

    const todoList = [{ id: 1, description: "Learn Azure" ,done: false , targetDate: targetDate}]
    return (

        <div className="todoTableContainer">
            <div className="todoTable">
                <table>
                    <thead>
                        <tr>
                            <td>id</td>
                            <td>description</td>
                            <td>Is Done</td>
                            <td>Completion date</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todoList.map(
                                (eachTodo) => {
                                    <tr key={eachTodo.id}>
                                    <td>{eachTodo.id}</td>
                                    <td>{eachTodo.description}</td>
                                    <td>{eachTodo.done}</td>
                                    <td>{eachTodo.targetDate}</td>
                                </tr>
                                }
                            )
                        }
                       
                    </tbody>
                </table>

            </div>

        </div>

    )

}

export default ListTodo ;