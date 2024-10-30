import { Request, Response } from "express"
 
type Tinstrutores = {
     id: number, nome: string,  email: string }

const instrutores: Tinstrutores[] = [
     {id: 1, nome: 'guido', email:'guido@email.com'},
     {id: 2, nome: 'maria', email:'maria@email.com'},
     {id: 3, nome: 'joao', email:'joao@email.com'}]


export function listarInstrutores (req: Request, res:Response) {
     res.status(200).json(instrutores)
}