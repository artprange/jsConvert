const USD = 5.23;
const EUR = 6.19;
const GBP = 7.23;
const CLP = 0.0070;


const form = document.querySelector('form');
const amount = document.getElementById('amount');
const currency = document.getElementById('currency');
const footer = document.querySelector('main footer');
const description = document.getElementById('description');
const result = document.getElementById('result');


//validadtion for amount - numbers only
amount.addEventListener('input',() => {
    const hasNumbers = /\D+/g;
    amount.value = amount.value.replace(hasNumbers, "");
});


//catching the submit event
form.onsubmit = (event) => {
    event.preventDefault();

    switch(currency.value){
        case "USD":
            currencyConverter(amount.value, USD, '$');
            break;
        case "EUR":
            currencyConverter(amount.value, EUR, '€');
            break;
        case "GBP":
            currencyConverter(amount.value, GBP, '£');
            break;
            case "CLP":
            currencyConverter(amount.value, CLP, '$');
            break;
        }
    };


function currencyConverter(amount, quotation, symbol){
    try{
        //updating
        description.textContent = `${symbol}1 = ${currencyFormatterToBRL(quotation)}`

        let total = (amount * quotation);


        result.textContent = total ;

        if(isNaN(total)){
            return alert('Please, insert a valid number');
        }

        //adds the class that will show the result on the footer
        footer.classList.add('show-result');

    } catch(error){
      
         //removes the class that will show the result on the footer
         footer.classList.remove('show-result');
        alert('Something broke :( Please try again later.');
        console.error(error);
    }

}

currencyFormatterToBRL = (value) =>{
    //converts to number to apply the toLocaleString so then we can format to BRL
    return(
        Number(value).toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        })
    );
}