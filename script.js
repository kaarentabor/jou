// DOM element references
const catButton = document.querySelector("#nupp");
const catImage = document.querySelector("#appi");

/**
 * Fetches a random cat image from The Cat API
 * @returns {Promise<string>} URL of the cat image
 */
async function fetchCatImage() {
  try {
    const response = await fetch('https://api.thecatapi.com/v1/images/search');

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data[0].url;
  } catch (error) {
    console.error('Failed to fetch cat image:', error);
    throw error;
  }
}

/**
 * Handles the button click event to display a new cat image
 */
async function handleCatButtonClick() {
  try {
    // Disable button during fetch to prevent multiple clicks
    catButton.disabled = true;
    catButton.textContent = 'Loading...';

    const imageUrl = await fetchCatImage();
    catImage.src = imageUrl;
    catImage.alt = 'Random cat image';
  } catch (error) {
    alert('Failed to load cat image. Please try again.');
  } finally {
    // Re-enable button
    catButton.disabled = false;
    catButton.textContent = 'Kiisu';
  }
}

// Event listener
catButton.addEventListener("click", handleCatButtonClick);
