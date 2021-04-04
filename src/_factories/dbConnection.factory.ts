import { createPool } from 'mysql2/promise'

let pool = null

export const setConnection = () => {
    pool = createPool({
        host: process.env.BMS_DB_HOST,
        port: parseInt(process.env.BMS_DB_PORT),
        user: process.env.BMS_DB_USER,
        password: process.env.BMS_DB_PASSWORD,
        database: process.env.BMS_DB_DATABASE
    })
}

export const getConnection = () => {
    return pool
}