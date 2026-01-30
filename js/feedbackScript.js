// Wait for the DOM to be fully loade
document.addEventListener('DOMContentLoaded', function() {
  // Get all form elements
  const form = document.querySelector('.contact__form');
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const dob = document.getElementById('dob');
  const howFound = document.getElementById('how_found');
  const experience = document.getElementById('experience');
  const favorite = document.getElementById('favorite');
  const improve = document.getElementById('improve');
  const design = document.getElementById('design');
  const find = document.getElementById('find');
  const issues = document.getElementById('issues');
  const features = document.getElementById('features');
  const recommend = document.getElementById('recommend');
  const mobileExperience = document.getElementById('mobile_experience');
  const additional = document.getElementById('additional');
  
  // Create error display container
  const errorContainer = document.createElement('div');
  errorContainer.id = 'errorbox';
  errorContainer.style.display = 'none';
  errorContainer.style.color = '#e74c3c';
  errorContainer.style.backgroundColor = '#fde8e6';
  errorContainer.style.padding = '1rem';
  errorContainer.style.borderRadius = '5px';
  errorContainer.style.marginBottom = '1.5rem';
  errorContainer.style.border = '1px solid #e74c3c';
  
  const errorElement = document.createElement('div');
  errorElement.id = 'error';
  errorContainer.appendChild(errorElement);
  
  // Create success message container
  const successContainer = document.createElement('div');
  successContainer.id = 'successbox';
  successContainer.style.display = 'none';
  successContainer.style.color = '#27ae60';
  successContainer.style.backgroundColor = '#e8f5e9';
  successContainer.style.padding = '1rem';
  successContainer.style.borderRadius = '5px';
  successContainer.style.marginBottom = '1.5rem';
  successContainer.style.border = '1px solid #27ae60';
  successContainer.innerHTML = '<p>Form validation successful! Click Submit to send your feedback.</p>';
  
  // Insert containers at the top of the form
  form.insertBefore(successContainer, form.firstChild);
  form.insertBefore(errorContainer, form.firstChild);
  
  // Add form validation on submit
  form.addEventListener('submit', function(e) {
    let messages = ['<ul>', '</ul>'];
    let isValid = true;
    
    // Required field validations
    if (name.value === '' || name.value == null) {
      messages.push('<li>Name is required</li>');
      isValid = false;
    } else if (!/^[A-Za-z\s]+$/.test(name.value.trim())) {
      messages.push('<li>Name should contain only letters</li>');
      isValid = false;
    }
    
    if (email.value === '' || email.value == null) {
      messages.push('<li>Email is required</li>');
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
      messages.push('<li>Please enter a valid email address</li>');
      isValid = false;
    }
    
    if (experience.value === '' || experience.value == null) {
      messages.push('<li>Experience rating is required</li>');
      isValid = false;
    }
    
    // Date of birth validation (if provided)
    if (dob.value) {
      const dobDate = new Date(dob.value);
      const today = new Date();
      const minDate = new Date();
      minDate.setFullYear(today.getFullYear() - 120);
      
      if (dobDate > today) {
        messages.push('<li>Date of birth cannot be in the future</li>');
        isValid = false;
      } else if (dobDate < minDate) {
        messages.push('<li>Please enter a reasonable date of birth</li>');
        isValid = false;
      }
    }
    
    // Textarea length check for substantive feedback
    if (improve.value.trim() !== '' && improve.value.trim().length < 10) {
      messages.push('<li>Please provide more detailed improvement feedback (at least 10 characters)</li>');
      isValid = false;
    }
    
    if (issues.value.trim() !== '' && issues.value.trim().length < 10) {
      messages.push('<li>Please provide more detailed information about issues (at least 10 characters)</li>');
      isValid = false;
    }
    
    // Construct error HTML
    const errorHTML = messages.join('');
    
    if (errorHTML !== '<ul></ul>') {
      // Prevent form submission and show errors
      e.preventDefault();
      errorElement.innerHTML = errorHTML;
      errorbox.style.display = 'block';
      successbox.style.display = 'none';
      
      // Scroll to error box
      errorbox.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else {
      // Show success message but still prevent default to allow the user to review
      e.preventDefault();
      errorbox.style.display = 'none';
      successbox.style.display = 'block';
      
      // Ask user to confirm submission
      if (confirm('Your feedback is ready to submit. Would you like to send it now?')) {
        form.submit();
      } else {
        successbox.innerHTML = '<p>You can review your feedback and submit when ready.</p>';
      }
    }
  });
  
  // Function to allow only numbers in specific fields (if needed)
  function numberOnly(element) {
    element.value = element.value.replace(/[^0-9]/gi, '');
  }
  
  // Real-time validation for important fields
  name.addEventListener('input', function() {
    this.value = this.value.replace(/[^A-Za-z\s]/gi, ''); // Only allow letters and spaces
  });
  
  // Add help text for design slider
  const designContainer = design.parentElement;
  const designValueDisplay = document.createElement('div');
  designValueDisplay.className = 'range-value';
  designValueDisplay.style.textAlign = 'center';
  designValueDisplay.style.fontSize = '0.9rem';
  designValueDisplay.style.marginTop = '5px';
  designValueDisplay.innerText = `Value: ${design.value} / 10`;
  
  designContainer.insertBefore(designValueDisplay, design.nextElementSibling);
  
  design.addEventListener('input', function() {
    designValueDisplay.innerText = `Value: ${this.value} / 10`;
  });
  
  // Add character counters for textareas
  const textAreas = [improve, issues, features, additional];
  
  textAreas.forEach(textarea => {
    if (!textarea) return;
    
    const counterDiv = document.createElement('div');
    counterDiv.className = 'char-counter';
    counterDiv.style.fontSize = '0.8rem';
    counterDiv.style.textAlign = 'right';
    counterDiv.style.color = '#777';
    counterDiv.style.marginTop = '5px';
    counterDiv.innerText = '0 characters';
    
    textarea.parentElement.insertBefore(counterDiv, textarea.nextElementSibling);
    
    textarea.addEventListener('input', function() {
      const count = this.value.length;
      counterDiv.innerText = `${count} character${count !== 1 ? 's' : ''}`;
      
      // Change counter color based on input length
      if (count > 0 && count < 10) {
        counterDiv.style.color = '#f39c12'; // Warning for short input
      } else if (count >= 10) {
        counterDiv.style.color = '#27ae60'; // Good length
      } else {
        counterDiv.style.color = '#777'; // Default
      }
    });
  });
  
  // Add CSS for form styling
  const style = document.createElement('style');
  style.textContent = `
    .contact__input:focus {
      border-color: var(--first-color);
      box-shadow: 0 0 5px rgba(0, 123, 255, 0.3);
    }
    .contact__input.error {
      border-color: #e74c3c;
    }
    #errorbox ul {
      margin: 0;
      padding-left: 1.5rem;
    }
    #errorbox li {
      margin-bottom: 0.3rem;
    }
    #successbox {
      animation: fadeIn 0.5s ease-in-out;
    }
    #errorbox {
      animation: shake 0.5s ease-in-out;
    }
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    @keyframes shake {
      0%, 100% { transform: translateX(0); }
      20%, 60% { transform: translateX(-5px); }
      40%, 80% { transform: translateX(5px); }
    }
  `;
  document.head.appendChild(style);
});