export interface Song {
    song_name: string;
    src_img: string;
    artist_name: string;
    album_name: string;
    favorite: boolean;
}

export interface User {
    username: string;
    token: string;
}

export const user = {
    username: 'Sergio',
    token: 'XAZGHSDJSYD55sdfGIKJK'
}

export const play_list_data: Song[] = [
    {
        song_name: 'Callaita',
        src_img: 'https://m.media-amazon.com/images/I/91z4elDbREL._SS500_.jpg',
        artist_name: 'Bad Bunny',
        album_name: 'Unknown',
        favorite: false
    },
    {
        song_name: 'Andrea',
        src_img: 'https://www.lahiguera.net/musicalia/artistas/bad_bunny/disco/12153/bad_bunny_un_verano_sin_ti-portada.jpg',
        artist_name: 'Bad Bunny',
        album_name: 'Un verano sin ti',
        favorite: false
    },
    {
        song_name: 'Knee Socks',
        src_img: 'https://www.hoyesarte.com/constelac10n/files/2020/02/059.jpg',
        artist_name: 'Arctic Monkeys',
        album_name: 'Unknown',
        favorite: true
    },
];