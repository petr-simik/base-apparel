function isEmpty() {
    var emailInput = document.getElementById("emailInput").value;
    var errorMessage = document.getElementById("error-message");
    var emailContainer = document.querySelector('.emailContainer');
    
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (!emailInput.match(emailPattern)) {
      errorMessage.style.display = 'block';
      errorMessage.textContent = 'Please provide a valid email';
      emailContainer.classList.add('error');
      return false;
    } else {
      errorMessage.style.display = 'none';
      emailContainer.classList.remove('error');
      return true;
    }
  }
  