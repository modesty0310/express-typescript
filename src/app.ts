import express from 'express';
import config from 'config';
import logger from './utils/logger';
import connect from './utils/connect';

const port = config.get<number>('port');

const app = express();

app.listen(port, async () => {
    logger.info('app start');
    
    await connect();
})