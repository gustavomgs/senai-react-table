import axios from "axios";
import { useState } from "react";
import { Alert } from "react-bootstrap";
import { Player, Controls } from '@lottiefiles/react-lottie-player';

function ThirdExercise(){
    let [cep, setCep] = useState();
    let [endereco, setEndereco] = useState([]);
    let [status, setStatus]     = useState({
        "variant": "",
        "message": ""
    });
    let [loading, setLoading] = useState(false);
    
    function changeCep(value){
        setCep(value.target.value);
    }

    function  buscarCep() {
        setLoading(true);
        //axios.get("https://viacep.com.br/ws/"+ cep +"/json").then(function (response) {
        axios.get(`https://viacep.com.br/ws/${cep}/json`).then(function (response) {

            setStatus({
                "variant": "success",
                "message": "Deu tudo certo (:"
            });
            
            console.log(response.data);
            setEndereco(response.data);
            setLoading(false);
        }).catch(function (error) {
            console.log(error);
            setStatus({
                "variant": "danger",
                "message": "Deu tudo errado ):"
            });
            setLoading(false);
        })

    }

    return (
        <>
            {loading && (
                <div className="container pt-2">
                <Player
                        autoplay
                        loop
                        src="https://lottie.host/d7e624da-d07c-4583-9a37-c14c24d98823/xPwfOHtUqF.json"
                        style={{ height: '300px', width: '300px' }}
                        >
                    </Player>
                </div>
            )}
             {!loading && (
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
                        <table className="table border table-bordered table-hovered">
                            <tr>
                                <th>CEP</th>
                                <td>{endereco.cep}</td>
                            </tr>
                            <tr>
                                <th>Rua</th>
                                <td>{endereco.logradouro}</td>
                            </tr>
                            <tr>
                                <th>Complemento</th>
                                <td>{endereco.complemento}</td>
                            </tr>
                            <tr>
                                <th>Bairro</th>
                                <td>{endereco.bairro}</td>
                            </tr>
                            <tr>
                                <th>UF</th>
                                <td>{endereco.uf}</td>
                            </tr>
                            <tr>
                                <th>IBGE</th>
                                <td>{endereco.ibge}</td>
                            </tr>
                            <tr>
                                <th>GIA</th>
                                <td>{endereco.gia}</td>
                            </tr>
                            <tr>
                                <th>DDD</th>
                                <td>{endereco.ddd}</td>
                            </tr>
                            <tr>
                                <th>SIAFI</th>
                                <td>{endereco.siafi}</td>
                            </tr>
                        </table>
                    </div>
                </div>

                
            </div>
             )}
        
            
        </>
    
    );
}

export default ThirdExercise;