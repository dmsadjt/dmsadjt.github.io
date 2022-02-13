import { Container } from "react-bootstrap";

function SectionHeader({ title }) {
    return (
        <Container>
            <h1 className="title">{title}</h1>
        </Container>
    )
}

export default SectionHeader;