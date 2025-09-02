const apiUrl = "https://sistema-caixa-hyyk.onrender.com/vendas"
const food = document.getElementById("food")


async function GetData() {
    
    const response = await fetch(apiUrl);
    console.log(response);

    const data = await response.json()
    console.log(data)


    if (data.length > 0) {

        let html = "<ul>";

        data.forEach(venda => {
            html +=`
                
            <li>
                    <strong>ID:</strong>${venda.id} <br>
                    <strong>Descrição:</strong>${venda.descricao} <br>
                    <strong>Valor:</strong>${venda.valorVenda} <br>
                    <strong>Forma de Pagamento:</strong>${venda.formaPagamento}  <br>
                    <strong>Data:</strong>${new Date(venda.datavenda).toLocaleString("pt-BR")} <br>
                </li>
                <hr>
            `
           
        })
        html += "</ul>"
        food.innerHTML = html
       
    } else {
        food.innerHTML= "nenhuma venda encontrada"
    }
    
}

GetData();

