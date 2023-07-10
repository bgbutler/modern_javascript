
// listen for submit

document.getElementById('loan-form').addEventListener('submit', function(e){
  // hide results
  document.getElementById('results').style.display = 'none';


  // show Loader
  document.getElementById('loading').style.display = 'block';

  setTimeout(calculateResults, 2000);


  e.preventDefault();
})

// calculate function
function calculateResults(e) {

  // get inputs
  const amount = document.getElementById('amount');
  const interest = document.getElementById('interest');
  const years = document.getElementById('years');

  const monthlyPayment = document.getElementById('monthly-payment');
  const totalPayment = document.getElementById('total-payment');
  const totalInterest = document.getElementById('total-interest');

  const principal = parseFloat(amount.value);
  const calculatedInterest = parseFloat(interest.value)/100/12;
  const calculatedPayments = parseFloat(years.value) * 12;

  // compute monthly payment
  const p = Math.pow(1+calculatedInterest, calculatedPayments);
  const monthly = (principal * p * calculatedInterest)/(p - 1);

  if(isFinite(monthly)){
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatedPayments).toFixed(2);
    totalInterest.value = ((monthly * calculatedPayments)-principal).toFixed(2);

    // show results
    document.getElementById('results').style.display = 'block';
    // hide the loader
    document.getElementById('loading').style.display = 'none';

  } else {
    showError('Please check your numbers');
  }




}


// error function
function showError(error) {
  // hide the loader
  document.getElementById('loading').style.display = 'none';

  // hide the results
  // hide the loader
  document.getElementById('results').style.display = 'none';

  // create a div
  const errorDiv = document.createElement('div');

  // get elements
  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading')

  // add the class
  errorDiv.className = 'alert alert-danger';

  // create the text for the error
  errorDiv.appendChild(document.createTextNode(error));

  // insert error above heading
  card.insertBefore(errorDiv, heading);

  // clear error after 3 seconds
  setTimeout(clearError, 3000);

}


function clearError() {
  document.querySelector('.alert').remove();
}