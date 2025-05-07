 
  function filterRecipes() {
    const searchInput = document.getElementById('recipe-search').value.toLowerCase();
    const recipeCards = document.querySelectorAll('.recipe-card');
    
    recipeCards.forEach(card => {
      const title = card.querySelector('h3').textContent.toLowerCase();
      if (title.includes(searchInput)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  }

  
  function addToFavorites(event) {
  
    
    const button = event.target;
    button.style.color = button.style.color === 'red' ? '' : 'red';

   
  }


  document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      alert("Enter key pressed");
    }
  });

  // Get the button
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Show the button when scrolling down
window.onscroll = function() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollToTopBtn.style.display = "block"; // Show button
  } else {
    scrollToTopBtn.style.display = "none"; // Hide button
  }
};

// Scroll to the top when the button is clicked
scrollToTopBtn.onclick = function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};




