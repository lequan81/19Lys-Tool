// javascript for create.html
const form = document.querySelector('form');

const createPost = async (e) => {
  e.preventDefault();

  const doc = {
    url: form.url.value,
    direction: form.direction.value,
  }

  await fetch('/imgs', {
    method: 'POST',
    body: JSON.stringify(doc),
    headers: { 'Content-Type': 'application/json' }
  })

  window.location.replace('/')
}

form.addEventListener('submit', createPost);