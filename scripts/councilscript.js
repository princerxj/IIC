function toggleNav() {
    const navBar = document.querySelector('.nav-bar');
    navBar.classList.toggle('active');
}

fetch('/IIC/Data/faculty-section.json')
  .then(response => {
    console.log('Fetching URL:', response.url); 
    if (!response.ok) {
      throw new Error(`Failed to fetch JSON data: ${response.statusText}`);
    }
    return response.json();
  })

  .then(data => {
    const cardContainer = document.getElementById('card-container');
    const cardTemplate = document.getElementById('card-template');

    data.forEach((item, index) => {
      const card = cardTemplate.cloneNode(true);
      const img = card.querySelector('.card-image');
      img.src = `/IIC/Images/Members/${item['Image-src']}`;
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

fetch('/IIC/Data/student-members.json')
  .then(response => {
    console.log('Fetching URL:', response.url); 
    if (!response.ok) {
      throw new Error(`Failed to fetch JSON data: ${response.statusText}`);
    }
    return response.json();
  })

  .then(data => {
    const cardContainer = document.getElementById('card-container-student');
    const cardTemplate = document.getElementById('card-template-student');

    data.forEach((item, index) => {
      const card = cardTemplate.cloneNode(true);
      const img = card.querySelector('.card-image-student');
      img.src = `/IIC/Images/Members/${item['Image-src']}`;
      img.alt = item.Name;

      const name = card.querySelector('.card-name-student');
      name.textContent = item.Name;

      const post1 = card.querySelector('.card-branch');
      post1.textContent = item.Branch;

      const post2 = card.querySelector('.card-role');
      post2.textContent = item.Role;
      cardContainer.appendChild(card);
    });
    cardTemplate.style.display = 'none';
})

.catch(error => {
    console.error('Error:', error);
});