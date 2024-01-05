function getExchange() {
    let purchaseCurrency = document.getElementById("coin-selector").value;
    
    let currencies = [`USD-${purchaseCurrency},`, `EUR-${purchaseCurrency},`,`GBP-${purchaseCurrency},`, `ARS-${purchaseCurrency},`, `JPY-${purchaseCurrency},`, `CNY-${purchaseCurrency},`,  `CAD-${purchaseCurrency},`, `AUD-${purchaseCurrency},`, `CHF-${purchaseCurrency},`, `BRL-${purchaseCurrency}` ]

    // Building the API strings
    let currecies_requests
    let flag = 0
    for(let elem of currencies){
        
        if (elem.includes(purchaseCurrency + '-')){
            continue
        } 

        if (flag === 0){
            currecies_requests = elem
            flag = 1
        } 
        else {
            currecies_requests = currecies_requests + elem
        }   
    }

    if (currecies_requests.slice(-1) === ',') {
        currecies_requests = currecies_requests.slice(0, -1);
    }

    const apiUrl = `https://economia.awesomeapi.com.br/json/last/USD-GBP,ARS-GBP`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const pricesElements = document.getElementsByClassName("prices")
            console.log(pricesElements)
            // const resultElement = document.getElementById("result");
            // resultElement.innerHTML = `A taxa de câmbio de ${baseCurrency} para ${targetCurrency} é: ${exchangeRate.toFixed(2)}`;
        })
        .catch(error => {
            console.error('Erro ao obter dados da API', error);
            // const resultElement = document.getElementById("result");
            // resultElement.innerHTML = 'Erro ao obter dados da API. Verifique o console para mais informações.';
        });
}
// setInterval(getExchange, 2000);

document.getElementById("coin-selector").addEventListener("change", function() {
    getExchange()})