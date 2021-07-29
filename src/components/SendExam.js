import { Container } from "./Home"
import styled from "styled-components";
import { useContext, useEffect, useState } from "react";

export default function SendExam() {
    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [subject, setSubject] = useState("");
    const [teacher, setTeacher] = useState("");
    const [examLink, setExamLink] = useState("");

    function sendExam () {
        console.log("oi")
    }


    return (
        <Container>
            <div className="title">Enviar prova:</div>
            <Form onSubmit={sendExam} id="examform">
                        <label htmlFor="name" className="name">Nome:</label>
                        <select className="select" value={name} onChange={(e) => setName(e.target.value)} id="name" name="examname" form="examform" required>
                                <option value="2020.1">2020.1</option>
                                <option value="2020.2">2020.2</option>
                                <option value="2021.1">2021.1</option>
                            </select>
                        <label htmlFor="category" className="category">Categorias:</label>
                        <select className="select" value={category} onChange={(e) => setCategory(e.target.value)} id="category" name="categoryexam" form="examform" required>
                                <option value="P1">P1</option>
                                <option value="P2">P2</option>
                                <option value="P3">P3</option>
                                <option value="2ch">2ch</option>
                                <option value="Outras">Outras</option>
                            </select>
                            <label htmlFor="subject" className="subject">Disciplina:</label>
                        <select className="select" value={subject} onChange={(e) => setSubject(e.target.value)} id="subject" name="subjectexam" form="examform" required>
                                <option value="Cálculo I">Cálculo I</option>
                                <option value="Cálculo II">Cálculo II</option>
                                <option value="Cálculo III">Cálculo III</option>                            
                            </select>
                            <label htmlFor="teacher" className="teacher">Professor:</label>
                        <select className="select" value={teacher} onChange={(e) => setTeacher(e.target.value)} id="teacher" name="teacherexam" form="examform" required>
                                <option value="Fulano">Fulano</option>
                                <option value="Fulana">Fulana</option>
                                <option value="Ciclano">Ciclano</option>                            
                            </select>
                            <label htmlFor="exam" className="exam">Link da prova (PDF):</label>
                        <input id="exam" type="text" className="examInput" value={examLink} onChange={(e) => setExamLink(e.target.value)} required/>     
                       

            </Form>
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

const Form = styled.form`  
  display: flex;
  flex-direction: column;
  justify-content: center;
   
    .select {
        margin-top: 10px;
        margin-bottom: 10px;
        font-size: 18px;
        border: 1px solid #FFF;
        border-radius: 5px;
        background-color: white;

        @media (max-width: 640px) {
            width: 60vw;              
        }

        :focus {
            box-shadow: 0 0 0.5em #FFF;
            outline: 0;
        }

        .input {
            border: 1px solid #B3E283;
            border-radius: 10px;
            font-size: 15px;
            margin-top: 5px;
        }
    }
`;