document.getElementById('generateBtn').addEventListener('click', function() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const address = document.getElementById('address').value;
  const skills = document.getElementById('skills').value.split(',').map(skill => skill.trim());
  const experience = document.getElementById('experience').value;
  const education = document.getElementById('education').value;

  if (!name || !email || !phone) {
    alert('Please fill in all required fields.');
    return;
  }

  const resumeHTML = `
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Address:</strong> ${address}</p>
    <p><strong>Skills:</strong></p>
    <ul>${skills.map(skill => `<li>${skill}</li>`).join('')}</ul>
    <p><strong>Experience:</strong></p>
    <p>${experience}</p>
    <p><strong>Education:</strong></p>
    <p>${education}</p>
  `;

  document.getElementById('resume').innerHTML = resumeHTML;
  document.getElementById('resumeContainer').classList.remove('hidden');
});

document.getElementById('printBtn').addEventListener('click', function() {
  window.print();
});
