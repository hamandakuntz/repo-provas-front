import { Container } from "./Home"
import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import axios from 'axios';
import { useHistory, useParams } from "react-router-dom";


export default function SubjectPage() {
  const [subjects, setSubjects] = useState([]);
  const history = useHistory();
  let params = useParams();
  const id = params.id;


    useEffect(() => {
      getSubjectsList();        
  }, []);
  
  function getSubjectsList() {
    
      const request = axios.get(`${process.env.REACT_APP_API_BASE_URL}/subject/${id}`);

      request.then((resp) => {
          setSubjects(resp.data)
      });            
          
      request.catch((error) => {console.log(error); alert("Ocorreu um erro ao carregar a lista de disciplinas, tente novamente")});        
  }  


  return (
    <Container>
    <TeachersCard>{subjects.length !== 0 ?                       
        subjects.map((p, i) => <div onClick={() => history.push(`/subject/${p.id}`)} className="list" key={i}>{p.name} - {p.link}</div>) : <div>Carregando</div>}
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