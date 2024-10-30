import { Request, Response } from "express"
import rotas from "../rotas"
 
type Tinstrutores = {
     id: number, nome: string,  email: string }

let proximoIdentificador = 4

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
    res.status(200).json(instrutor)}

// cadastrar um instrutor
export function cadastrar (req: Request, res:Response) {
    console.log(req.body)
    const {nome, email} = req.body
    const novoinstrutor = {
        id: proximoIdentificador++,
        nome,
        email}
    instrutores.push (novoinstrutor)
    res.status(201).json(novoinstrutor)}

// editar um instrutor
export function editar (req: Request, res:Response) {
    const { id } = req.params
    const {nome, email} = req.body
         const instrutor = instrutores.find((item)=> {
         return item.id === Number(id)})

             if (!instrutor){
              res.status(404).json({
              mensagem: 'instrutor(a) não encontrado(a)'})}

     //instrutor.nome = nome
     //instrutor.email = email
         res.status(204).send()}

// excluir um instrutor
export function excluir (req: Request, res:Response) {
    const { id } = req.params
         const instrutorIndice = instrutores.findIndex((item)=> {
         return item.id === Number(id)})

             if (instrutorIndice === -1){
              res.status(404).json({
              mensagem: 'instrutor(a) não encontrado(a)'})}

instrutores.splice(instrutorIndice, 1)
         res.status(204).send()}