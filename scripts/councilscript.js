function toggleNav() {
    const navBar = document.querySelector('.nav-bar');
    navBar.classList.toggle('active');
}

fetch('./Data/faculty-section.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to fetch JSON data');
    }
    return response.json();
  })
  .then(data => {
    const cardContainer = document.getElementById('card-container');
    const cardTemplate = document.getElementById('card-template');

    data.forEach((item, index) => {
      const card = cardTemplate.cloneNode(true);
      const img = card.querySelector('.card-image');
      img.src = `/Images/Members/${item['Image-src']}`;
      img.alt = item.Name;

      const name = card.querySelector('.card-name');
      name.textContent = item.Name;

      const post1 = card.querySelector('.card-post1');
      post1.textContent = item.Post1;

      const post2 = card.querySelector('.card-post2');
      post2.textContent = item.Post2;
      cardContainer.appendChild(card);
    });
    cardTemplate.style.display = 'none';
})

.catch(error => {
    console.error('Error:', error);
});
