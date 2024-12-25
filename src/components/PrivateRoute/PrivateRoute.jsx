
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { authContext } from '../AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {

    const {user , loading} = useContext(authContext)
    const location = useLocation()
    if(loading){
        return <h1>Loading...</h1>;
    }

    if(!user){
     return <Navigate state={{from:location.pathname}} to="/login"></Navigate>
  
    }
    return children
};

export default PrivateRoute;