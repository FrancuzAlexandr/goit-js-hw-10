import {counryListEl, counryinfoEl} from "./index.js"
import Notiflix from 'notiflix';
function markupAll(array) {
    counryListEl.innerHTML = '';
    counryinfoEl.innerHTML = '';
  if (array.length > 10) {
    Notiflix.Notify.info("Too many matches found. Please enter a more specific name.");
  } 
  if (!array.length) {
    Notiflix.Notify.failure("Oops, there is no country with that name");
  } 
  if (array.length === 1) {

    counryinfoEl.innerHTML = markupCard(array[0]);
  }
  if (array.length >= 2 && array.length <= 10) {

    counryListEl.innerHTML = markupList(array);
  } 
}


function markupList(array) {
  return array
    .map(({ name, flags: { svg: flag } }) => {
      return `
        <li class="country-list__item">
        <img src="${flag}" alt="Flag of ${name}"  width="80" height="40" />
        <p>${name.official}</p>
    </li>
    `;
    })
    .join('');
}

function markupCard(object) {
  const {
    name,
    flags: { svg: flag },
    capital,
    population,
    languages,
  } = object;
  console.log(object)
  return `
          <div class="country-info__title">
            <img src="${flag}" alt="Flag of ${name.official}"  width="80" height="40" />
            <h2>${name.official}</h2>
          </div>
          <ul class="counry-info__list">
              <li>
                  <p><b>Capital:</b> ${capital}</p>
              </li>
              <li>
                  <p><b>Population:</b> ${population}</p>
              </li>
              <li >
                  <p><b>Languages:</b> ${Object.values(languages)
                    .join(', ')}</p>
              </li>
          </ul>
      `;
}

export { markupAll };
