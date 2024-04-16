import axios from "axios";
import { useState } from "react";
import { Alert } from "react-bootstrap";

function ThirdExercise(){
    let [cep, setCep] = useState();
    let [endereco, setEndereco] = useState([]);
    let [status, setStatus]     = useState({
        "variant": "",
        "message": ""
    });
    
    function changeCep(value){
        setCep(value.target.value);
    }

    function  buscarCep() {
        //axios.get("https://viacep.com.br/ws/"+ cep +"/json").then(function (response) {
        axios.get(`https://viacep.com.br/ws/${cep}/json`).then(function (response) {

            setStatus({
                "variant": "success",
                "message": "Deu tudo certo (:"
            });
            
            console.log(response.data);
            setEndereco(response.data)
        }).catch(function (error) {
            console.log(error);

            setStatus({
                "variant": "danger",
                "message": "Deu tudo errado ):"
            });
        });

    }

    return (
        <>
            <div className="container pt-2">

                <div className="card p-2">
                    <input onChange={changeCep} className="form-control mb-2" type="number" maxLength={8} placeholder="Insira seu CEP"></input>
                    <button onClick={buscarCep} className="btn btn-success"> Buscar Cep</button>    
                </div>

                <Alert variant={status.variant} className="mt-2">
                    {status.message}
                </Alert>

                <div className="row">
                    <div className="col-12">
                        Rua: {endereco.logradouro}
                    </div>
                </div>

                
            </div>
        </>
    
    );
}

export default ThirdExercise;