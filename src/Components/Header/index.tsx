import { useState } from 'react';
import Menu from '../Menu';
import logo from './assets/logo.png'
import gitLogoWhite from './assets/githubWhite.svg'
import linkedinLogoWhite from './assets/linkedin.png'
import { LogoSocialStyled, LogoStyled } from './styles';
import { Collapse, Nav, NavItem, NavLink, Navbar, NavbarToggler } from 'reactstrap';

const Header = (args: any) => {

    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)

    return (
        <Navbar {...args} style={{ backgroundColor: '#000' }} dark expand='sm' fixed='top'>
            <NavbarToggler onClick={toggle} />
            <Menu />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="mx-auto" navbar>
                    <NavItem>
                        <LogoStyled src={logo} alt='Logo' />
                    </NavItem>
                </Nav>
                <NavItem className='d-flex gap-2'>
                    <NavLink href="https://github.com/PagaNiz">
                        <LogoSocialStyled src={gitLogoWhite} />
                    </NavLink>
                    <NavLink href="https://www.linkedin.com/in/paganilukz/">
                        <LogoSocialStyled src={linkedinLogoWhite} />
                    </NavLink>
                </NavItem>
            </Collapse>
        </Navbar>
    )
}

export default Header