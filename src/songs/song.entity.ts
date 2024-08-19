import { Playlist } from "src/playlists/playlist.entity";
import { Artist } from "src/artists/artist.entity";
import {
  Column,
  Entity,
  ManyToMany,
  JoinTable,
  ManyToOne,
  PrimaryGeneratedColumn
} from 'typeorm';

@Entity('songs')
export class Song {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('date')
  releasedDate: Date;

  @Column('time')
  duration: Date;

  @Column('text')
  lyrics: string;

  @ManyToMany(() => Artist, (artist) => artist.songs)
  @JoinTable({ name: 'songs_artists'})
  artists: Artist[];

  @ManyToOne(() => Playlist, (playlist) => playlist.songs)
  playList: Playlist;
}