import { useState } from "react";
import { Button } from "react-bootstrap";

function PriceList(){

    let valor_a = 4;
    let valor_b = 123;
    let [total, setTotal] = useState(valor_a + valor_b);

    function acaoBotao(){
        setTotal(total + 1);
        console.log(total);
    }

    return (
        <>
            <table>
                <tbody>
                    <tr>
                        <th>Valor 1</th>
                        <th>Valor 2</th>
                        <th>Total</th>
                    </tr>
                    <tr>
                        <td>{valor_a}</td>
                        <td>{valor_b}</td>
                        <td>{total}</td>
                    </tr>
                </tbody>
            </table>
            <br />
            <Button onClick={acaoBotao} variant="success">Somar 1 no Total</Button>
        </>
    );
}

export default PriceList;