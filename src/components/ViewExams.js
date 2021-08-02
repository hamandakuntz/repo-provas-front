import { Container } from "./Home"
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function ViewExams() {


    return (
        <Container>
            <div>Visualizar provas por:</div>
            <Button>
                <Link to="/teachers">
                    Professor
                </Link>
            </Button>
            <Button>
            <Link to="/subjects">
                Disciplina
            </Link>
            </Button>
        </Container>
        
    )
}


const Button = styled.button`
    margin-top: 20px;    
    font-size: 20px;
    opacity: 0.9;
    transition: 0.3s;
    cursor: pointer;
    margin-left: 10px;

    .a {
        text-decoration: none;
    }
`;