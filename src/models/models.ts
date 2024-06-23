export type User = {
    id: string;
    name: string;
    username: string;
    email: string;
}

export type Album = {
    albumId: string;
    userId: string;
    title: string;
}

export type AlbumPhotos = {
    albumId: string;
    id: string;
    title: string;
    url: string;
}