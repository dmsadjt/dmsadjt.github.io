import { Navbar, NavbarBrand, Container } from "react-bootstrap";


function Navigation() {

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavbarBrand href="#">{' '}
                    dmsadjt
                </NavbarBrand>
            </Container>
        </Navbar>
    )
}

export default Navigation;