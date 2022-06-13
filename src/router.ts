import { Router, Request, Response } from 'express'
import { createMovie, findMovieById, getAllMovies, removeMovie, updateMovie } from './controllers/movieControllers'

import { validate } from './middleware/handleValidation'
import { createMovieValidation } from './middleware/movieValidation'

const router = Router()

export default router
  .get('/test', (req: Request, res: Response) => {
    res.status(200).send("Its working")
  })
  .post('/movie', createMovieValidation(), validate, createMovie)
  .get('/movie/:id', findMovieById)
  .get('/movie', getAllMovies)
  .delete('/movie/:id', removeMovie)
  .patch('/movie/:id', createMovieValidation(), validate, updateMovie)