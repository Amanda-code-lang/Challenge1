function getQuote() {
  fetch("https://api.quotable.io/random")
    .then(response => response.json())
    .then(data => {
      document.getElementById("quote").innerText = `"${data.content}"`;
      document.getElementById("author").innerText = `– ${data.author}`;
    })
    .catch(error => {
      console.error("Error fetching quote:", error);
    });
}

let button = document.getElementById("new-quote");
button.addEventListener("click", getQuote);

// Optional: load one quote when page opens
getQuote();
