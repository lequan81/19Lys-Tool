// javascript for details.html
const id = new URLSearchParams(window.location.search).get('id');
const container = document.querySelector('.details');
const deleteBtn = document.querySelector('.delete');

const renderDetails = async () => {
  const res = await fetch('/imgs/' + id);
  if (!res.ok) {
    window.location.replace("/");
  }
  const post = await res.json();

  const template = `
    <h1>${post.url}</h1>
    <p>${post.direction}</p>
  `

  container.innerHTML = template;
}

deleteBtn.addEventListener('click', async () => {
  const res = await fetch('http://localhost:3001/imgs/' + id, {
    method: 'DELETE'
  });
  window.location.replace("/");
})

window.addEventListener('DOMContentLoaded', renderDetails);