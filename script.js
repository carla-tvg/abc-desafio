function getRandomColor() {
    const colors = ['green', 'blue', 'red'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }
  
  function applyRandomColors(event) {
    const colors = ['green', 'blue', 'red'];
    event.target.style.color = getRandomColor(); 
  }
  
  document.querySelectorAll('h5').forEach(h5 => {
    h5.addEventListener('click', applyRandomColors);
  });
  