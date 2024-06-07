import "dotenv/config"

const env = {
  MONGODB_URI: process.env.MONGODB_URI,
  DATABASE_NAME: process.env.DATABASE_NAME,
  AUTHOR: process.env.AUTHOR,

  BUILD_MODE: process.env.BUILD_MODE,

  HOST: process.env.HOST,
  PORT: process.env.PORT,
}

export default env
