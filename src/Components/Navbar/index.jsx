import React, { useState } from 'react';
import {
    Collapse,
    Nav,
    NavItem,
    NavLink,
    Navbar,
    NavbarBrand,
    NavbarText
} from 'reactstrap';
import logo from '../../assets/logo.png';
import gitLogo from '../../assets/github.svg'
import styles from './navBar.module.scss';

function NavBar(args) {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar {...args} color='dark' dark expand='sm'>
                <NavbarBrand href="/">reactstrap</NavbarBrand>
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="me-auto" navbar>
                        <NavItem>
                            <img src={logo} alt='Logo' className={styles.logo} />
                        </NavItem>
                    </Nav>
                    <NavItem>
                        <NavLink href="https://github.com/PagaNiz">
                            <img src={gitLogo}/>
                        </NavLink>
                        <NavLink href="https://www.linkedin.com/in/paganilukz/">
                            Linkedin
                        </NavLink>
                    </NavItem>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default NavBar;