const form = document.getElementById('form');

form.addEventListener('submit', (e)=>{
  e.preventDefault();
  let email = document.getElementById('email').value;
  let data = {
    email,
  }
  let convertData = JSON.stringify(email);

  localStorage.setItem('lead', convertData);
  console.log(convertData);
})

