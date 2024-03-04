function numberFormater(number) {
    if (Math.floor(number) !== 0) {
        // if the integer part of the number is different than 0, format it
        return number.toFixed(2).toString();
    } else {
        // if the integer part of the number is 0, just return it
        return number.toString();
    }
}

const currencySelector = document.getElementById("basecurrency-selector") 

let apiUrl

currencySelector.addEventListener("change", function () {
    
    let currencySelectorValue = currencySelector.value 
    let prices

    switch (currencySelectorValue) {
        case "USD":
            break

        case "EUR":
            break

        case "CAD":
            break

        case "CHF":
            break

        case "ARS":
            break

        case "BRL":
            apiUrl = 'https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,GBP-BRL,ARS-BRL,JPY-BRL,CNY-BRL,CAD-BRL,AUD-BRL,CHF-BRL';
        
            fetch(apiUrl)
              .then(response => {
                // Verifica se a resposta foi bem-sucedida (status code 2xx)
                if (!response.ok) {
                  throw new Error(`Erro na solicitação: ${response.statusText}`);
                }
                
                // Converte a resposta para JSON
                return response.json();
              })
              .then(data => {
                // Manipula os dados retornados
                console.log(data['USDBRL']['ask']);

                let currencies = apiUrl.replace("https://economia.awesomeapi.com.br/last/", "")
                console.log(currencies)

                currencies = currencies.replace(/-/g, "") //replacing all '-' occurrencies
                console.log(currencies)

                currencies = currencies.split(",")
                console.log(currencies)

                prices = document.getElementsByClassName("currency-price")

                for (var i = 0; i < prices.length; i++) {
                    if(i == 9){
                        prices[i].innerHTML = "1.00"
                        continue
                    }
                    prices[i].innerHTML = numberFormater(Number(data[currencies[i]]['ask']))
                }
                
              })
              .catch(error => {
                // Trata erros durante a solicitação
                console.error('Erro:', error);
            });
            break
        
    }
    
})

// Fazendo a solicitação usando fetch