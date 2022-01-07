/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

interface Artist {
  name: string,
  image: string | null,
  albums: Album[],
  songs: Songs[],
  length: number
}

interface Album {
  name: string,
  thumbnail?: string | null, // ? means optional variable. Its value is undefined when not used.
  artist: Artist,
  songs: Song[],
  length: number
}

interface Song {
  title: string,
  artist: Artist,
  album: Album,
  liked: boolean,
  length: number
}
