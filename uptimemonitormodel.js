import dotenv from 'dotenv';
import express from 'express';
import pg from 'pg'

dotenv.config();
const { Pool } = pg
const pool = new Pool({
  user: process.env.USER,
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.password,
  port: process.env.port,
});

////get all uptimemonitoring entries from our database
const getMonitoringURLs = async () => {
  try {
    return await new Promise(function (resolve, reject) {
      pool.query("SELECT * FROM uptimemonitoring", (error, results) => {
        if (error) {
          reject(error);
        }
        if (results && results.rows) {
          resolve(results.rows);
        } else {
          reject(new Error("No results found"));
        }
      });
    });
  } catch (error_1) {
    console.error(error_1);
    throw new Error("Internal server error");
  }
};


export default getMonitoringURLs;