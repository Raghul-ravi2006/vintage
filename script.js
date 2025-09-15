// Submit button handler
document.getElementById('submitComment').addEventListener('click', () => {
  const comment = document.getElementById('comment').value.trim();
  if(comment) {
    alert('Thank you for your comment:\n"' + comment + '"');
    document.getElementById('comment').value = ''; // clear textarea
  } else {
    alert('Please enter a comment before submitting.');
  }
});
