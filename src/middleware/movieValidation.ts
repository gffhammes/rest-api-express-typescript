import { body } from 'express-validator'

export const createMovieValidation = () => {
  return [
    body("title")
      .isString()
      .withMessage("O título é obrigatório"),
    body("rating")
      .isNumeric()
      .withMessage("A avaliação precisa ser um número")
      .custom((value: number) => {
        if (value < 0 || value > 10) throw new Error("A avaliação deve estar entre 0 e 10")
        return true
      }),    
    body("description")
      .isString()
      .withMessage("A descrição é obrigatória"),
    body("director")
      .isString()
      .withMessage("O diretor é obrigatório"),
    body("poster")
      .isURL()
      .withMessage("A imagem precisa ser uma URL"),
  ]
}