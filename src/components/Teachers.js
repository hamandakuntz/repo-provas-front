import { Container } from "./Home"
import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import axios from 'axios';
import { useHistory } from "react-router-dom";

export default function Teachers() {
    const [teachers, setTeachers] = useState([]);
    let history = useHistory();

    useEffect(() => {
        getTeachersList();        
    }, []);
      
    function getTeachersList() {       
        const request = axios.get(`${process.env.REACT_APP_API_BASE_URL}/teachers`);

        request.then((resp) => {
            setTeachers(resp.data)
        });            
            
        request.catch((error) => {console.log(error); alert("Ocorreu um erro ao carregar a lista de professores, tente novamente")});        
    }  
    
    return (
        <Container>
            <TeachersCard>{teachers.length !== 0 ?                       
                teachers.map((p, i) => <div className="list" key={i}>{p.name}</div>) : <div>Carregando</div>}
            </TeachersCard>
        </Container>
    )
}

const TeachersCard = styled.div`
    display: flex;
    flex-direction: column;

    .list {
        margin-bottom: 10px;
    }

`