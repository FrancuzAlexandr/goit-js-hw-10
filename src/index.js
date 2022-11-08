import './css/styles.css';
import debounce from 'lodash.debounce';
import {fetchCountries} from "./fetchCountries";
import { markupAll } from "./markup"

const DEBOUNCE_DELAY = 300;

const seachBoxEl = document.querySelector("#search-box");
export const counryListEl = document.querySelector(".country-list");
export const counryinfoEl = document.querySelector(".country-info");

seachBoxEl.addEventListener("input", debounce(handleInput, DEBOUNCE_DELAY));

function handleInput(event) {
    const inputToFind = event.target.value.trim();
    counryListEl.innerHTML = '';
    counryinfoEl.innerHTML = '';
    
    if (inputToFind.length !== 0) {
        fetchCountries(inputToFind).then(data => markupAll(data))
    }
    if (inputToFind.length === 0) {
    }
}