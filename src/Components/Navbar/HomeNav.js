import React from 'react'
import { Navbar, Form, Button, FormControl } from 'react-bootstrap';

export default function HomeNav() {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">Weather</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                {/* <Nav className="mr-auto">
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
                <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
                </Nav> */}
                <Form inline className="ml-auto">
                    <FormControl type="text" placeholder="Search a City" className="ml-auto" />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
