const gallery = document.querySelector('.pictures');

/**
 * @type {HTMLTemplateElement}
 */
const miniatureTemplate = document.querySelector('#picture');

/**
 * @param {Array<Picture>} data
 */
function initGallery(data) {
  // TODO: Сортировка
  // TODO: Полноразмерный просмотр
  renderMiniatures(data);
}

/**
 * @param {Array<Picture>} data
 */
function renderMiniatures(data) {
  gallery.querySelectorAll('.picture').forEach((it) => it.remove());
  gallery.append(...data.map(createMiniature));
}

/**
 * @param {Picture} data
 * @returns {HTMLAnchorElement}
 */
function createMiniature(data) {
  const miniature = /**@type {HTMLAnchorElement} */ (
    miniatureTemplate.content.querySelector('.picture').cloneNode(true)
  );

  miniature.querySelector('.picture__img').setAttribute('src', data.url);
  miniature.querySelector('.picture__img').setAttribute('alt', data.description);
  miniature.querySelector('.picture__comments').textContent = String(data.comments.length);
  miniature.querySelector('.picture__likes').textContent = String(data.likes);

  return miniature;
}

export default initGallery;
