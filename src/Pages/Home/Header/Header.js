import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Header = () => {


    const { users, LogOut } = useAuth()
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>  <Nav.Link as={Link}
                        to="/" style={{ color: "white" }}>Car Repair</Nav.Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto ">
                            <Nav.Link as={Link} className='text-decoration-none'
                                to="services">
                                Services
                            </Nav.Link>
                            <Nav.Link as={Link} className='text-decoration-none'
                                to="experts">
                                Experts
                            </Nav.Link>
                            <Nav.Link as={Link} className='text-decoration-none'
                                to="login">
                                Login
                            </Nav.Link>
                            <Navbar.Text>
                                {users.email ? <button onClick={LogOut}>Signout
                                    </button>
                                    : <h2> {users.displayName}
                                    </h2>}

                            </Navbar.Text>

                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;