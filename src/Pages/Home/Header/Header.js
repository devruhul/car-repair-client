import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import useAuth from '../../../hooks/useAuth';

const Header = () => {

    const { users, LogOut } = useAuth()

    return (
        <>
            <Navbar className="sticky-top" collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>  <Nav.Link as={HashLink}
                        to="/" style={{ color: "white" }}>Car Repair</Nav.Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto ">
                            <Nav.Link as={HashLink} className='text-decoration-none'
                                to="services">
                                Services
                            </Nav.Link>
                            <Nav.Link as={HashLink} className='text-decoration-none'
                                to="experts">
                                Experts
                            </Nav.Link>

                            <Navbar.Text>
                                {users?.email ?
                                    <> <h2> {users?.displayName}
                                    </h2>
                                    <button onClick={LogOut}> Signout </button>
                                    </>
                                    :
                                    <Nav.Link as={Link} className='text-decoration-none'
                                        to="login">
                                        Login
                                    </Nav.Link>

                                }
                            </Navbar.Text>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;