import { useState } from "react";

function SecondExercise() {
    let [nome, setNome]         = useState();
    let [salario, setSalario]   = useState();
    let [reajuste, setReajuste] = useState();
    let [salario_reajustado, setSalarioReajustado]  = useState();

    function alterarNome(elemento){ setNome(elemento.target.value) }
    function alterarSalario(elemento){ setSalario(elemento.target.value) }
    function alterarReajuste(elemento){ 
        setReajuste(elemento.target.value) 
    }

    function calcularSalario(){
        console.log(parseFloat(salario), parseFloat(reajuste), (parseFloat(reajuste) / 10))

        let resultado = parseFloat(salario) + (parseFloat(salario) * (parseFloat(reajuste) / 100));

        setSalarioReajustado(resultado)
    }
    return(
        <>
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h4>{nome ?? 'Não Informado'}</h4>
                        <h6>Salário reajustado: R$ {salario_reajustado ?? '0,00'}</h6>
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-3">
                        <label class="label-control">Nome:</label>
                        <input class="form-control" onInput={alterarNome}></input>
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-3">
                        <label>Salário:</label>
                        <input type="text" class="form-control" onInput={alterarSalario}></input>
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-3">
                        <label>% Reajuste:</label>
                        <input type="text" class="form-control" onInput={alterarReajuste}></input>
                    </div>
                    <div class="col-12 mt-2">
                        <button class="btn  w-100 block btn-primary" onClick={calcularSalario}>Calcular Salário</button>
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-3">
                        <label>Resultado: {salario_reajustado}</label>
                       
                    </div>
                </div>
            </div>
            
        
        </>
    );
}

export default SecondExercise;