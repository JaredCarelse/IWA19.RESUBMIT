// Import necessary modules if needed
import {
    books,
    authors,
    genres,
    BOOKS_PER_PAGE
} from './data.js';

// Define DOM elements
const dataListItems = document.querySelector('[data-list-items]');
const dataSearchGenres = document.querySelector('[data-search-genres]');
const dataSearchAuthors = document.querySelector('[data-search-authors]');
const dataSettingsTheme = document.querySelector('[data-settings-theme]');
const dataListButton = document.querySelector('[data-list-button]');
const dataSearchCancel = document.querySelector('[data-search-cancel]');
const dataSettingsCancel = document.querySelector('[data-settings-cancel]');
const dataSettingsForm = document.querySelector('[data-settings-form]');
const dataListClose = document.querySelector('[data-list-close]');
const dataHeaderSearch = document.querySelector('[data-header-search]');
const dataSearchOverlay = document.querySelector('[data-search-overlay]');
const dataSearchTitle = document.querySelector('[data-search-title]');
const dataSearchForm = document.querySelector('[data-search-form]');
const dataSettingsOverlay = document.querySelector('[data-settings-overlay]');
const dataListMessage = document.querySelector('[data-list-message]');
const dataListActive = document.querySelector('[data-list-active]');
const dataListBlur = document.querySelector('[data-list-blur]');
const dataListImage = document.querySelector('[data-list-image]');
const dataListTitle = document.querySelector('[data-list-title]');
const dataListSubtitle = document.querySelector('[data-list-subtitle]');
const dataListDescription = document.querySelector('[data-list-description]');

// Export variables
export {
    dataListItems,
    dataSearchGenres,
    dataSearchAuthors,
    dataSettingsTheme,
    dataListButton,
    dataSearchCancel,
    dataSettingsCancel,
    dataSettingsForm,
    dataListClose,
    dataHeaderSearch,
    dataSearchOverlay,
    dataSearchTitle,
    dataSearchForm,
    dataSettingsOverlay,
    dataListMessage,
    dataListActive,
    dataListBlur,
    dataListImage,
    dataListTitle,
    dataListSubtitle,
    dataListDescription
};
