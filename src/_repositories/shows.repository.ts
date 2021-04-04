import { getConnection } from '../_factories/dbConnection.factory'

export const getShows = async () => {
    const conn = getConnection()

    const query = `SELECT t1.pk_show, t2.title, t2.poster_url, t2.duration, t2.format, 
    t1.city, t1.start_time, t1.price 
    FROM tb_shows t1 inner join tb_movies t2 on t1.fk_movie = t2.pk_movie`
    const rows  = await conn.query(query)
    return rows[0]
}