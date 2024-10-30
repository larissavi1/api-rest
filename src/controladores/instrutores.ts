import { Request, Response } from "express"
 
type Tinstrutores = {
     id: number, nome: string,  email: string }

const instrutores: Tinstrutores[] = [
     {id: 1, nome: 'guido', email:'guido@email.com'},
     {id: 2, nome: 'maria', email:'maria@email.com'},
     {id: 3, nome: 'joao', email:'joao@email.com'}]

// listar todos os instrutores
export function listar (req: Request, res:Response) {
      res.status(200).json(instrutores)}


// detalhar as info de um instrutor
 export function detalhar (req: Request, res:Response) {
    const { id } = req.params
         const instrutor = instrutores.find((item)=> {
         return item.id === Number(id)})

             if (!instrutor){
              res.status(404).json({
              mensagem: 'instrutor não encontrado(a)'})}

     res.status(200).json(instrutor)
}