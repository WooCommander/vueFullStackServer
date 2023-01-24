import express, { Express, Request, Response } from 'express';
export default (app: Express) => {
  app.post('/register', (req: Request, res: Response) => {
    res.send({
      message: `Hello ${req.body.email}! Пользователь зарегистрирован!`
    })
  });
}