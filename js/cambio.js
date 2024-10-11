document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('currency-form').addEventListener('submit', function(event) {
        event.preventDefault();

        const amount = parseFloat(document.getElementById('amount').value);
        const fromCurrency = document.getElementById('from-currency').value;
        const toCurrency = document.getElementById('to-currency').value;

        const exchangeRates = {
            USD: { EUR: 0.85, BRL: 5.25 },
            EUR: { USD: 1.18, BRL: 6.18 },
            BRL: { USD: 0.19, EUR: 0.16 }
        };

        const resultDiv = document.getElementById('result');

        if (fromCurrency === toCurrency) {
            resultDiv.textContent = `Por favor, selecione moedas diferentes para a conversão.`;
            return;
        }

        if (exchangeRates[fromCurrency] && exchangeRates[fromCurrency][toCurrency]) {
            const rate = exchangeRates[fromCurrency][toCurrency];
            const convertedAmount = (amount * rate).toFixed(2);
            resultDiv.textContent = `${amount} ${fromCurrency} equivale a ${convertedAmount} ${toCurrency}`;
        } else {
            resultDiv.textContent = `A taxa de câmbio para ${fromCurrency} para ${toCurrency} não está disponível.`;
        }
    });
});
