import axios from "axios";
import { useState } from "react";

function ConvertPairs(){
    let [value, setValue] = useState();
    let [pair1, setPair1] = useState();
    let [pair2, setPair2] = useState();

    function changeValue(value){
        setValue(value.target.value);
    }

    function chanePairOne(value){
        setPair1(value.target.value);
    }

    function chanePairTwo(value){
        setPair2(value.target.value);
    }

    function submitConvert()
    {
        axios.get(`https://economia.awesomeapi.com.br/json/last/${pair1}-${pair2}`).then(function(response){
            console.log(valor * response.data[`${pair1}${pair2}`].bid)
        })
        
    }

    return (
        <div className="p-2 mt-2">
            <select onChange={chanePairOne} class="form-select mb-2">
                <option selected>Selecione o par 1</option>
                <option value="BRL">BRL</option>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
            </select>
            
            <select onChange={chanePairTwo} class="form-select mb-2">
                <option selected>Selecione o par 2</option>
                <option value="BRL">BRL</option>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
            </select>
            <input className="form-control" type="number" onChange={changeValue} ></input>
            <button onClick={submitConvert} className="btn btn-primary w-100 mt-2">Converter</button>
        </div>
    );
}

export default ConvertPairs;