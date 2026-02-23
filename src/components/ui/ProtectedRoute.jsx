import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const isAuth = sessionStorage.getItem('mk_admin_auth') === 'true';
    return isAuth ? children : <Navigate to="/admin" replace />;
};

export default ProtectedRoute;
