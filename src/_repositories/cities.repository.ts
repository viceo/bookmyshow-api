import { getConnection } from '../_factories/dbConnection.factory'

export const getCities = async () => {
    const conn = getConnection()

    //? Por motivo de DEMO no se crea un catálogo de ciudades
    //? y se consultan las ciudades como fueron registradas en los shows
    const query = `SELECT DISTINCT city from tb_shows`
    const rows  = await conn.query(query)
    return rows[0]
}