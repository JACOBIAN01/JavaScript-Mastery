document.getElementById("convert").addEventListener("click", ConvertCurrency);

async function ConvertCurrency() {
  const apiKey = "cde46ebc7be64d6cb47802c72973c358";
  const amount = document.getElementById("amount").value;
  const fromCurrency = document.getElementById("fromCurrency").value;
  const toCurrency = document.getElementById("toCurrency").value;

  if (!amount) {
    alert("Please enter an amount");
    return;
  }

  const url = `https://openexchangerates.org/api/latest.json?app_id=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (response.ok) {

      const fromRate = data.rates[fromCurrency];
      const toRate = data.rates[toCurrency];

      const convertedAmount = ((amount / fromRate) * toRate).toFixed(2);

      document.getElementById(
        "result"
      ).innerText = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
    } else {
      document.getElementById("result").innerText =
        "Error fetching exchange rates.";
    }
  } catch (error) {
    document.getElementById("result").innerText = "Error: " + error.message;
  }
}
