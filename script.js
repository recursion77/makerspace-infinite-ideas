
document.addEventListener('DOMContentLoaded', function() {
  // Get references to elements
  const cursor = document.getElementById('cursor');
  const selectableText = document.getElementById('selectable-text');
  const recursionPopup = document.getElementById('recursion-popup');
  
  // Animation sequence
  const startAnimation = async () => {
    if (!cursor || !selectableText || !recursionPopup) return;
    
    // Create a text selection element
    const selection = document.createElement('div');
    selection.className = 'text-selection';
    selectableText.parentNode.appendChild(selection);
    
    // Position cursor at the start of the paragraph
    const textRect = selectableText.getBoundingClientRect();
    const containerRect = selectableText.parentElement.getBoundingClientRect();
    
    // Set initial position of cursor
    cursor.style.opacity = '1';
    cursor.style.left = `${textRect.left}px`;
    cursor.style.top = `${textRect.top + 2}px`;
    
    // Wait before starting selection
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Start the selection
    selection.style.position = 'absolute';
    selection.style.left = `${textRect.left - containerRect.left}px`;
    selection.style.top = `${textRect.top - containerRect.top}px`;
    selection.style.height = `${textRect.height}px`;
    selection.style.width = '0';
    selection.style.zIndex = '0';
    
    // Animate cursor moving to the end of the paragraph
    cursor.style.transition = 'left 2s linear, top 0.5s ease-out';
    cursor.style.left = `${textRect.right - 3}px`;
    
    // Animate the selection width
    selection.style.transition = 'width 2s linear';
    selection.style.width = `${textRect.width}px`;
    
    // Show the popup after selection completes
    setTimeout(() => {
      recursionPopup.style.display = 'block';
      
      // Remove the cursor after selection is done
      setTimeout(() => {
        cursor.style.opacity = '0';
      }, 500);
    }, 2200);
  };
  
  // Start animation after a short delay
  setTimeout(startAnimation, 2000);
  
  // Handle smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Offset for fixed header
          behavior: 'smooth'
        });
      }
    });
  });
});
