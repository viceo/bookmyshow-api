
import { Entity, Column, ManyToOne, PrimaryColumn, JoinColumn } from 'typeorm';
import { Movie } from './movie.entity';

@Entity("tb_shows")
export class Show {
  @PrimaryColumn({ name: 'pk_show' })
  id: number

  @Column({ name: 'fk_movie' })
  movieId: number

  @Column()
  city: string

  @Column({ name: 'start_time' })
  startTime: Date

  @Column()
  price: number

  @ManyToOne(() => Movie, movie => movie.shows)
  @JoinColumn({ name: 'fk_movie' })
  movie: Movie
}