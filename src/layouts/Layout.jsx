
import Header from '../components/shared/Header';
import Footer from '../components/shared/Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>


    );
};

export default Layout;