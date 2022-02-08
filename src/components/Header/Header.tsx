import { Navbar, NavbarBrand } from 'reactstrap';
import './Header.scss';

import AdyenLogo from '../../assets/adyen-header-logo-green.svg';

const Header = () => {
    return (
        <div id="header">
            <Navbar color="dark" dark expand="md">
                <NavbarBrand href="/" id="adyen-logo">
                    <img width="150px" height="auto" src={AdyenLogo} alt="logo" />
                </NavbarBrand>
            </Navbar>
        </div>
    );
};

export default Header;
