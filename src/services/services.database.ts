import mysql from 'mysql2';
import databaseConfig from '../config/config.db';

export const pool = mysql.createPool(databaseConfig).promise();
