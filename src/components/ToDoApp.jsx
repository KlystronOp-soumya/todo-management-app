import '../styles/ToDoApp.css'
import Login from './Login';
import Welcome from './Welcome';
import Error from './Error';
import ListTodo from './ListTodo';
//Add the react router
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { useAuth } from '../Authentication/AuthProvider';

const AuthenticatedRoute = ({ children }) => {
    console.log("Authenticating the routes");
    
    const authContext = useAuth();
    if (authContext.isAuthenticated)
        return children;

    return <Navigate to="/" />
}

const ToDoApp = () => {

    return (
        <div className="toDoAppContainer">
            <label>ToDo Management Application</label>
            {/* <Login/>
            <Welcome/> */}
            <BrowserRouter>
                <Header />{/* Header component */}
                <Routes>
                    <Route path='/' element={<Login />} />
                    
                    <Route path='/login' element={
                    <AuthenticatedRoute>    
                        <Login />
                    </AuthenticatedRoute>
                    } />

                    {/* Added named parameter */}
                   
                        <Route path='/welcome/:userName' element={
                             <AuthenticatedRoute >
                                <Welcome />
                            </AuthenticatedRoute> 
                        } />
                   
                    <Route path='/todos' element={
                         <AuthenticatedRoute >
                        <ListTodo />
                        </AuthenticatedRoute>
                        
                        } />
                    <Route path='/error' element={<Error />} />
                </Routes>
                <Footer /> {/* Footer component */}
            </BrowserRouter>
        </div>
    )

}

export default ToDoApp;