// Wait for the document to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Select all filter buttons and gallery items
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    // Add event listeners to the filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Remove the 'active' class from all buttons and add it to the clicked button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Get the category filter that was clicked
            const filterValue = button.getAttribute('data-filter');

            // Show or hide gallery items based on the clicked filter
            galleryItems.forEach(item => {
                if (filterValue === 'all') {
                    // If "All" is selected, show all items
                    item.style.display = 'block';
                } else if (item.classList.contains(filterValue)) {
                    // If the item's class matches the clicked filter, show the item
                    item.style.display = 'block';
                } else {
                    // Hide the item if it doesn't match the filter
                    item.style.display = 'none';
                }
            });
        });
    });
});
