// javascript for create.html
const form = document.querySelector('form');
const message = document.getElementById('alert');

const Dismiss = (event) => {
  let element = event.target;
  while (element.nodeName !== "BUTTON") {
    element = element.parentNode;
  }
  element.parentNode.parentNode.removeChild(element.parentNode);
}

let template = '';

const createPost = async (e) => {
  e.preventDefault();

  const doc = {
    url: form.url.value,
    direction: form.direction.value,
  }

  let res = await fetch('/imgs', {
    method: 'POST',
    body: JSON.stringify(doc),
    headers: { 'Content-Type': 'application/json' }
  });

  if (res.ok) {
    console.log('ok');
    message.innerHTML = `
    <div
        class="flex p-4 bg-green-100 rounded-lg dark:bg-green-200"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="flex-shrink-0 w-5 h-5 text-green-700 dark:text-green-800"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clip-rule="evenodd"
          />
        </svg>
        <div
          class="ml-3 text-sm font-medium text-green-700 dark:text-green-800"
        >
          Data updated successfully!
        </div>
        <button
        type="button"
        class="ml-auto -mx-1.5 -my-1.5 bg-green-100 text-green-500 rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-200 inline-flex h-8 w-8 dark:bg-green-200 dark:text-green-600 dark:hover:bg-green-300"
        aria-label="Close"
        onclick="Dismiss(event)"
        >
          <span class="sr-only">Close</span>
          <svg
            class="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
    `;
  }
}

form.addEventListener('submit', createPost);