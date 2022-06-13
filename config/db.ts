import mongoose from 'mongoose'
import config from 'config'
import Logger from './logger'

async function connect() {
  const dbUri: string = config.get<string>('dbUri')

  try {
    await mongoose.connect(dbUri)
    Logger.info('Conectado com sucesso')
  } catch(err) {
    Logger.error('Nao foi possivel conectar. ', err);
    process.exit(1);
  }
}

export default connect