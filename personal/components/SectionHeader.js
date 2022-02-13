import { Container } from "react-bootstrap";
import css from './SectionHeader.module.css';

function SectionHeader({ title }) {
    return (
        <>
            <h1 className={`pt-5 ${css.titleHead}`}>{title}</h1>
        </>
    )
}

export default SectionHeader;