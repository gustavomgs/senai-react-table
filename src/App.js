import './App.css';

function App() {
  return (
    <div className="App">
      <table cellspacing="0">
        <thead>
            <tr class="dark">
                <th colspan="6">Vendas Alterado</th>
            </tr>
        </thead>
        <tbody>
            <tr class="dark">
                <th>#</th>
                <th>Produto</th>
                <th>Categoria</th>
                <th class="right">Qtde</th>
                <th class="right">Preço Unitário</th>
                <th class="right">Total</th>
            </tr>
            <tr class="light">
                <td>1</td>
                <td>Produto 1</td>
                <td>Categoria 1</td>
                <td class="right">2</td>
                <td class="right">R$ 10,00</td>
                <td class="right">R$ 20,00</td>
            </tr>
            <tr class="dark">
                <td>2</td>
                <td>Produto 2</td>
                <td>Categoria 2</td>
                <td class="right">3</td>
                <td class="right">R$ 10,00</td>
                <td class="right">R$ 30,00</td>
            </tr>
            <tr class="light">
                <td>3</td>
                <td>Produto 3</td>
                <td>Categoria 3</td>
                <td class="right">4</td>
                <td class="right">R$ 10,00</td>
                <td class="right">R$ 40,00</td>
            </tr>
        </tbody>
        <tfoot>
            <tr class="dark">
                <th colspan="3"></th>
                <th class="right">9</th>
                <th class="right">R$ 30,00</th>
                <th class="right">R$ 90,00</th>
            </tr>
        </tfoot>
    </table>
    </div>
  );
}

export default App;
