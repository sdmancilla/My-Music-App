const song_list_container = document.getElementById('songs-list__section');
const n_items = 20;

const template = `
    <article class="song-list__item">
        <div class="song-list__item__component">
            <figure class="song__figure">
                <img class="song__img" src="../../img/album-image.png" alt="album image">
            </figure>
            <div class="song-info">
                <h3 class="song__name">Song name</h3>
                <div class="additional-info">
                    <p class="additional__detail song__artist">Artist</p>
                    <span class="additional__detail song__info-separator">|</span>
                    <p class="additional__detail song__album">Album</p>
                </div>
            </div>
        </div>
        <div class="song-list__item__component">
            <figure class="fav-action__figure">
                <svg class="fav-action__img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#207E3F"><path class="svg__path" d="M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z"/></svg>
            </figure>
        </div>
    </article>
`

const song_list_item = document.createElement('article');
song_list_item.innerHTML = template;

for (let i = 0; i < n_items; i++) {
    song_list_container.appendChild(song_list_item.cloneNode(true));
}