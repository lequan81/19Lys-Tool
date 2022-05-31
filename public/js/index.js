// javascript for index.html
const container = document.querySelector('.blogs');
const searchForm = document.querySelector('.search');

const renderPosts = async (term) => {
  console.log(term);
  let uri = '/imgs?_sort=id';
  if (term) {
    uri += `&q=${term}`
  }

  const res = await fetch(uri);
  const posts = await res.json();
  console.log(posts);

  let template = '';
  posts.forEach(post => {
    template += `
    <div class="text-center mt-6 mx-8 p-6 sm:py-6 rounded-lg shadow-xl bg-white">
      <h2 class="text-xl text-gray-700 font-bold mb-2">${post.url}</h2>
        <p class="text-lg text-gray-400 font-normal">${post.direction}</p>
        <a href="/details.html?id=${post.id}" class="text-green-500 no-underline font-semibold">
          Read more
        </a>
    </div>
    `
  });

  container.innerHTML = template;
}

// search
searchForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  renderPosts(searchForm.term.value.trim());
})

window.addEventListener('DOMContentLoaded', () => renderPosts());