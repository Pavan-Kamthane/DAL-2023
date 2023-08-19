 // Get the modal and image elements
 const modal = document.querySelector('.modal');
 const modalImage = document.getElementById('modal-image');
 const closeBtn = document.querySelector('.close-modal');

 // Get all the gallery items
 const galleryItems = document.querySelectorAll('.gallery-item');

 // Attach click event listeners to each gallery item
 galleryItems.forEach(item => {
     item.addEventListener('click', () => {
         // Get the source of the clicked image
         const imageSrc = item.querySelector('img').getAttribute('src');

         // Set the source of the modal image
         modalImage.setAttribute('src', imageSrc);

         // Show the modal
         modal.style.display = 'flex';
     });
 });

 // Close the modal when close button is clicked
 closeBtn.addEventListener('click', () => {
     modal.style.display = 'none';
 });