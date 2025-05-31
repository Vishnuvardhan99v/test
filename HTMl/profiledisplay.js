document.addEventListener("DOMContentLoaded", function () {
  const form = document.forms['contactusForm'];

  const resultDiv = document.createElement('div');
  resultDiv.id = 'result';
  resultDiv.style.marginTop = '30px';
  resultDiv.style.borderTop = '2px solid #000';
  resultDiv.style.paddingTop = '15px';
  document.body.appendChild(resultDiv);

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = new FormData(form);
    let output = '<h2>Submitted Data:</h2><ul>';

    for (const [key, value] of formData.entries()) {
      output += `<li><strong>${key}</strong>: ${value}</li>`;
    }

    output += '</ul>';
    resultDiv.innerHTML = output;
  });
});

