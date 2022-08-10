export interface Song {
    id_song: number;
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

const user = {
    username: 'Sergio',
    token: 'XAZGHSDJSYD55sdfGIKJK'
}

const play_list_data: Song[] = [
    {
        id_song: 1,
        song_name: 'Callaita',
        src_img: 'https://m.media-amazon.com/images/I/91z4elDbREL._SS500_.jpg',
        artist_name: 'Bad Bunny',
        album_name: 'Unknown',
        favorite: false
    },
    {
        id_song: 2,
        song_name: 'Andrea',
        src_img: 'https://www.lahiguera.net/musicalia/artistas/bad_bunny/disco/12153/bad_bunny_un_verano_sin_ti-portada.jpg',
        artist_name: 'Bad Bunny',
        album_name: 'Un verano sin ti',
        favorite: false
    },
    {
        id_song: 3,
        song_name: 'Knee Socks',
        src_img: 'https://www.hoyesarte.com/constelac10n/files/2020/02/059.jpg',
        artist_name: 'Arctic Monkeys',
        album_name: 'AM',
        favorite: true
    },
    {
        id_song: 4,
        song_name: "Baby I'm yours",
        src_img: 'https://m.media-amazon.com/images/I/61+pOZqJ7lL._SS500_.jpg',
        artist_name: 'Breakbot',
        album_name: 'Unknown',
        favorite: false
    },
    {
        id_song: 5,
        song_name: 'Dancin',
        src_img: 'https://pbs.twimg.com/media/B1Z6WCfCAAEr7CC.jpg',
        artist_name: 'Aaron Smith',
        album_name: 'Unknown',
        favorite: true
    },
    {
        id_song: 6,
        song_name: 'Imagination',
        src_img: 'https://lastfm.freetls.fastly.net/i/u/770x0/58f0bf04faf74375a74c45ac78dcc6d6.jpg',
        artist_name: 'Foster the People',
        album_name: 'Imagination',
        favorite: true
    },
];

export function getData(): Song[] {
    return play_list_data;
}

export function getUser(): User {
    return user;
}

export function modifyFavorite(id_song: number): void {
    let index = play_list_data.findIndex(s => s.id_song === id_song);
    play_list_data[index].favorite = !play_list_data[index].favorite;
}