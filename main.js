const form = document.querySelector('#form');
const results = document.querySelector('.results').style.display = "none";
const loader = document.querySelector('.loading').style.display = "none";
form.addEventListener('submit', function(e) {
  const results = document.querySelector('.loading').style.display = "block";
  setTimeout(Calculate, 3000);
  e.preventDefault(); 
}) ;

function Calculate() {
  const ballfaced = document.querySelector('#ball-faced').value;
  const runsScored = document.querySelector('#Runs-scored').value;
  const strikeRate = document.querySelector('#StrikeRates');
  
  const results = document.querySelector('.loading').style.display = "none";
  const rate = parseFloat((runsScored/ballfaced)*100).toFixed(3);
  if (isFinite(rate)) {
    const results = document.querySelector('.results').style.display = "block";
    strikeRate.innerHTML = `  <p class = "StrikeRate" id = "StrikeRates">The StrikeRate of a batsman is <span> ${rate}</span></p>`
  }

  else {
    showError ();
  }

 form.reset();
} 

function showError(error) {
  const container = document.querySelector('.container');
  const main = document.querySelector('.main');
  const errordiv = document.createElement('div');
  errordiv.className = "error";
  errordiv.appendChild(document.createTextNode("Please enter the number"));
  
  container.insertBefore(errordiv, main)
  setTimeout(clearError, 2000);
}

function clearError() {
   document.querySelector('.error').remove()
}

