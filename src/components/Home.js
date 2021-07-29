import styled from "styled-components";
import { Link } from "react-router-dom";


export default function Home() {
    return (
        <Container>
            <Logo>RepoProvas</Logo>
            <div className="title">Filtrar por:</div>
            <Wrapper>
                <Button>
                    <Link to="/view">
                        Visualizar provas
                    </Link>
                </Button>
                <Button> 
                    <Link to="/send">
                        Enviar provas
                    </Link>
                </Button>
            </Wrapper>
        </Container>

    )
}

const Container = styled.div`
    display: flex;
    height: 100vh;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #0093E9;
    background-image: linear-gradient(160deg, #0093E9 0%, #80D0C7 100%);
    width: 50vw;
    margin: 0 auto;           
    font-family: 'Raleway', sans-serif;   
    border: 10px solid transparent;  
    
    .title {
        font-size: 20px;
        margin-bottom: 30px;
    }
`;

const Logo = styled.div`
    font-family: 'Raleway', sans-serif;
    font-size: 100px;
    font-weight: bold;
    margin-bottom: 50px;      
`;

const Wrapper = styled.div`
    display:flex;
    justify-content: space-between;
    width: 10vw;   
`;

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

export { Container };
