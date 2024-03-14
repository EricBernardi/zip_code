import express, { Request, Response } from 'express';
import { consultarCEP } from '../utils/utils';
import NodeCache from 'node-cache';

const router = express.Router();

const cache = new NodeCache({ stdTTL: 300 });

router.post('/:cep', async (req: Request, res: Response) => {
  if (!req.params.cep) {
    return res
      .status(400)
      .send('É obrigatório informar um CEP ao final da url.');
  }

  const cepNumbers = /^\d{8}$/;
  if (!cepNumbers.test(req.params.cep)) {
    return res
      .status(400)
      .send('O campo "cep" deve conter exatamente 8 números.');
  }

  const cep = req.params.cep;

  const cacheKey = `cep:${cep}`;

  let dataCep = cache.get(cacheKey);

  if (!dataCep) {
    dataCep = await consultarCEP(cep);

    cache.set(cacheKey, dataCep, 300);

    res.status(200).send({
      dataCep,
      source: 'ViaCEP',
    });
  } else {
    res.status(200).send({
      dataCep,
      source: 'Cache',
    });
  }
});

export default router;
