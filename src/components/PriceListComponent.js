import { useState } from "react";
import { Button, Col, Row, Table } from "react-bootstrap";

function PriceList() {
    //let [total, setTotal] = useState(valor_a + valor_b);

    //function acaoBotao() {
    //    setTotal(total + 1);
    //    console.log(total);
    //}

    let id_produto_1   = 3;
    let nome_produto_1           = "Produto Lindo 1";
    let categoria_produto_1      = "Categoria 1";
    let qtde_produto_1           = 5;
    let valor_unitario_produto_1 = 48.90;
    let total_produto_1          = qtde_produto_1 * valor_unitario_produto_1;
    
    let id_produto_2   = 2;
    let nome_produto_2           = "Produto Lindo 2";
    let categoria_produto_2      = "Categoria 2";
    let qtde_produto_2           = 4;
    let valor_unitario_produto_2 = 35.50;
    let total_produto_2          = qtde_produto_2 * valor_unitario_produto_2;

    return (
        <>
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th colspan="7" className="text-center"><h5>Tabela de Vendas</h5></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>#</th><th>Produto</th><th>Categoria</th><th>Qtde</th><th>Valor Unitário</th><th>Total</th>
                    </tr>
                    <tr>
                        <td>{id_produto_1}</td><td>{nome_produto_1}</td><td>{categoria_produto_1}</td><td>{qtde_produto_1}</td><td>R$ {valor_unitario_produto_1}</td><td>R$ {total_produto_1}</td>
                    </tr>
                    <tr>
                        <td>{id_produto_2}</td><td>{nome_produto_2}</td><td>{categoria_produto_2}</td><td>{qtde_produto_2}</td><td>R$ {valor_unitario_produto_2}</td><td>R$ {total_produto_2}</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <th colspan="3"></th>
                        <th className="text-right">{ qtde_produto_1 + qtde_produto_2}</th>
                        <th className="text-right">{ valor_unitario_produto_1 + valor_unitario_produto_2}</th>
                        <th className="text-right">{ total_produto_1 + total_produto_2}</th>
                    </tr>
                </tfoot>
            </Table>
        </>
    );
}

export default PriceList;