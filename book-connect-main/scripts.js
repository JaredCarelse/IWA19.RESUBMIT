// Import necessary modules from './data.js'
import { books, authors, genres, BOOKS_PER_PAGE } from './data.js';

// Define DOM elements
const dataListItems = document.querySelector('[data-list-items]');
const dataHeaderSearch = document.querySelector('[data-header-search]');
const dataSearchOverlay = document.querySelector('[data-search-overlay]');
const dataSearchForm = document.querySelector('[data-search-form]');
const dataSearchTitle = document.querySelector('[data-search-title]');
const dataListMessage = document.querySelector('[data-list-message]');
const dataListActive = document.querySelector('[data-list-active]');
const dataListBlur = document.querySelector('[data-list-blur]');
const dataListTitle = document.querySelector('[data-list-title]');
const dataListSubtitle = document.querySelector('[data-list-subtitle]');
const dataListDescription = document.querySelector('[data-list-description]');

// Define functions
function createPreview(book) {
    const { author, title, image } = book;
    const preview = document.createElement('button');
    preview.classList.add('preview');
    preview.setAttribute('data-preview', book.id);
    preview.innerHTML = `
        <img class="preview__image" src="${image}" />
        <div class="preview__info">
            <h3 class="preview__title">${title}</h3>
            <div class="preview__author">${authors[author]}</div>
        </div>
    `;
    return preview;
}

function renderBookPreviews(bookList) {
    const fragment = document.createDocumentFragment();
    bookList.forEach(book => {
        const preview = createPreview(book);
        fragment.appendChild(preview);
    });
    dataListItems.innerHTML = '';
    dataListItems.appendChild(fragment);
}

function updateBookDetails(book) {
    dataListActive.open = true;
    dataListBlur.src = book.image;
    dataListTitle.textContent = book.title;
    const authorName = authors[book.author];
    const publishedYear = new Date(book.published).getFullYear();
    dataListSubtitle.textContent = `${authorName} (${publishedYear})`;
    dataListDescription.textContent = book.description;
}

// Handle click on book previews
dataListItems.addEventListener('click', event => {
    const preview = event.target.closest('.preview');
    if (!preview) return;
    const previewId = preview.dataset.preview;
    const activeBook = books.find(book => book.id === previewId);
    if (!activeBook) return;
    updateBookDetails(activeBook);
});

// Handle search form submission
dataHeaderSearch.addEventListener('click', () => {
    dataSearchOverlay.open = true;
    dataSearchTitle.focus();
});

dataSearchForm.addEventListener('submit', event => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const filters = Object.fromEntries(formData);
    const filteredBooks = books.filter(book => {
        const titleMatch = !filters.title.trim() || book.title.toLowerCase().includes(filters.title.toLowerCase());
        const authorMatch = filters.author === 'any' || book.author === filters.author;
        const genreMatch = filters.genre === 'any' || book.genres.includes(filters.genre);
        return titleMatch && authorMatch && genreMatch;
    });
    renderBookPreviews(filteredBooks);
    dataListMessage.classList.toggle('list__message_show', filteredBooks.length === 0);
});

// Create options for authors filter
const authorsFilter = document.createDocumentFragment();
const allAuthorsOption = document.createElement('option');
allAuthorsOption.value = 'any';
allAuthorsOption.textContent = 'All Authors';
authorsFilter.appendChild(allAuthorsOption);
for (const author of Object.keys(authors)) {
    const option = document.createElement('option');
    option.value = author;
    option.textContent = author;
    authorsFilter.appendChild(option);
}
dataSearchAuthors.appendChild(authorsFilter);

// Create options for genres filter
const genresFilter = document.createDocumentFragment();
const allGenresOption = document.createElement('option');
allGenresOption.value = 'any';
allGenresOption.textContent = 'All Genres';
genresFilter.appendChild(allGenresOption);
for (const genre of Object.keys(genres)) {
    const option = document.createElement('option');
    option.value = genre;
    option.textContent = genre;
    genresFilter.appendChild(option);
}
dataSearchGenres.appendChild(genresFilter);

// As a user, I want to toggle between dark and light modes so that I can use the app comfortably at night.
// Define day and night theme colors
const dayTheme = { dark: '#000', light: '#fff' };
const nightTheme = { dark: '#333', light: '#ddd' };

// Handle settings form submission
dataSettingsForm.addEventListener('submit', event => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const result = Object.fromEntries(formData);
    const theme = result.theme;
    const { dark: dayDark, light: dayLight } = dayTheme;
    const { dark: nightDark, light: nightLight } = nightTheme;
    document.documentElement.style.setProperty('--color-dark', theme === 'night' ? nightDark : dayDark);
    document.documentElement.style.setProperty('--color-light', theme === 'night' ? nightLight : dayLight);
    dataSettingsOverlay.open = false;
});

// As a user, I want to find books based on specific text phrases so that I don’t need to remember the entire title of a book.
// As a user, I want to filter books by genre so that I can find books to read in genres that I enjoy.
// As a user, I want to filter books by author so that I can find books to read by authors that I enjoy.
// As a user, I want to have the option of reading a summary of the book so that I can decide whether I want to read it.
// As a user, I want to have the option of seeing the date that a book was published so that I can determine how easy it is to obtain second-hand.

// Additional functionalities and user stories can be implemented here as needed.
