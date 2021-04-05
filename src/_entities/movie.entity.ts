import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { Show } from "./show.entity";

@Entity("tb_movies")
export class Movie {
    @PrimaryColumn({ name: 'pk_movie' })
    id: number

    @Column()
    title: string

    @Column({ name: 'poster_url' })
    posterUrl: string
    
    @Column()
    duration: string

    @Column()
    format: string

    @Column()
    description: string

    @OneToMany(() => Show, show => show.movie)
    shows: Show[]
}