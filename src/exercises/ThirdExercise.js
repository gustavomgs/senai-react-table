import { useState } from "react";

function ThirdExercise(){

    let [time_nome, setTimeNome] = useState();
    let [time_vitorias, setTimeVitorias] = useState();
    let [time_empates, setTimeEmpates]   = useState();
    let [class_btn, setClassBtn]   = useState("btn btn-primary mt-4");

    function changeName(value){
        setTimeNome(value.target.value);
        setClassBtn("btn btn-success mt-4")
    }

    function changeVictory(value){
        setTimeVitorias(value.target.value);
        console.log(time_vitorias);
    }

    function changeDraw(value){
        setTimeEmpates(value.target.value);
    }
    return (
        <>
            <div class="container pt-2">
                
                <div class="card">
                    
                    <div class="card-title p-2 border-bottom card-header">
                        <h5>Exercício 3</h5>
                    </div>
                    <div class="card-body">

                        <div class="row">

                            <div class="col-sm-12 col-md-3 col-lg-3">
                                <label class="label-control"><b>Nome do time:</b></label>
                                <input 
                                    class="form-control"
                                    type="text" 
                                    maxLength={50} 
                                    placeholder="Insira o nome do time" 
                                    onChange={changeName}
                                ></input>
                            </div>

                            <div class="col-sm-12 col-md-2 col-lg-2">
                                <label class="label-control"><b>Qtd Vitórias:</b></label>
                                <input
                                    class="form-control"
                                    placeholder="Nº Vitórias"
                                    type="number"
                                    onChange={changeVictory}
                                    disabled={!time_nome}
                                ></input>
                            </div>

                            <div class="col-sm-12 col-md-2 col-lg-2">
                                <label class="label-control"><b>Qtd Empates:</b></label>
                                <input
                                    class="form-control"
                                    placeholder="Nº Empates"
                                    type="number"
                                    disabled={!time_vitorias}
                                    onChange={changeDraw}
                                ></input>
                            </div>

                            <div class="col-sm-12 col-md-2 col-lg-2">
                                <button 
                                    disabled={!time_nome || !time_vitorias || !time_empates}
                                    className={class_btn}
                                > Calcular</button>                                
                            </div>
                        </div>

                    </div>
                </div>
                
            </div>
        </>
    
    
    );
}

export default ThirdExercise;