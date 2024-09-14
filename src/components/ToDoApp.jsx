import '../styles/ToDoApp.css'
import Login from './Login' ;
import Welcome from './Welcome' ;
import Error from './Error';
import ListTodo from './ListTodo';
//Add the react router
import { BrowserRouter , Routes , Route } from 'react-router-dom';
const ToDoApp = ()=>{

    return(
        <div className="toDoAppContainer">
            <label>ToDo Management Application</label>
            {/* <Login/>
            <Welcome/> */}
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={ <Login /> } />
                    <Route path='/login' element={ <Login /> } />
                    {/* Added named parameter */}
                    <Route path='/welcome/:userName' element={ <Welcome/> } />
                    <Route path='/todos' element={ <ListTodo />} />
                    <Route path='/error' element={<Error/>} />
                </Routes>
            </BrowserRouter>
        </div>
    )

}

export default  ToDoApp ;