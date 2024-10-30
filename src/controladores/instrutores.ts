import { Request, Response } from "express"
import bancodedados from "../bancodedados"
import rotas from "../rotas"
 



// listar todos os instrutores
export function listar (req: Request, res:Response) {
      res.status(200).json(bancodedados.instrutores)}


// detalhar as info de um instrutor
 export function detalhar (req: Request, res:Response) {
    const { id } = req.params
         const instrutor = bancodedados.instrutores.find((item)=> {
         return item.id === Number(id)})

             if (!instrutor){
              res.status(404).json({
              mensagem: 'instrutor não encontrado(a)'})}
    res.status(200).json(instrutor)}

// cadastrar um instrutor
export function cadastrar (req: Request, res:Response) {
    console.log(req.body)
    const {nome, email} = req.body
    const novoinstrutor = {
        id: bancodedados.proximoIdentificador++, 
        nome,email}

    bancodedados.instrutores.push (novoinstrutor)
    res.status(201).json(novoinstrutor)}

// editar um instrutor
export function editar(req: Request, res: Response): any {
    const { id } = req.params;
    const { nome, email } = req.body;
    const instructor = bancodedados.instrutores.find((item) => {
        return item.id === Number(id)})

             if (!instructor) {res.status(404).json({
            mensagem: 'instrutor(a) não encontrado(a)'})
            return}
            
         instructor.nome = nome
         instructor.email = email
    res.status(204).send();
}
//
export function editaremail(req: Request, res: Response): any {
    const { id } = req.params;
    const { email } = req.body;
    const instructor = bancodedados.instrutores.find((item) => {
        return item.id === Number(id)})

             if (!instructor) {res.status(404).json({
            mensagem: 'instrutor(a) não encontrado(a)'})
            return}

    instructor.email = email 
    res.status(204).send()}

// excluir um instrutor
export function excluir(req: Request, res:Response) {
    const { id } = req.params
         const instrutorIndice = bancodedados.instrutores.findIndex((item)=> {
         return item.id === Number(id)})

             if (instrutorIndice === -1){
              res.status(404).json({
              mensagem: 'instrutor(a) não encontrado(a)'})}

bancodedados.instrutores.splice(instrutorIndice, 1)
         res.status(204).send()}

    