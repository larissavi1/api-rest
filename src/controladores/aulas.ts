import { Request, Response } from "express"
import bancodedados from "../bancodedados"
import rotas from "../rotas"


export function cadastraraula(req: Request, res:Response){
    const {id} = req.params
    const {nome} = req.body

    const instrutor = bancodedados.instrutores.find((item)=> {
        return item.id === Number(id)})

            if (!instrutor){
            return res.status(404).json({
             mensagem: 'instrutor não encontrado(a)'})}

        const novaAula = {
            id: bancodedados.proximoIdentificadoraula++,
            nome}
     
            if (instrutor?.aulas) {instrutor.aulas.push(novaAula)
            return res.status(201).json(novaAula)}
        
        instrutor.aulas = [novaAula]     
        res.status(201).json(novaAula);
}


export function excluiraula(req: Request, res:Response){
    const {id, idAula} = req.params

    const instrutor = bancodedados.instrutores.find((item)=> {
        return item.id === Number(id)})

            if (!instrutor){
             res.status(404).json({
             mensagem: 'instrutor não encontrado(a)'})}

             if (!instrutor?.aulas) {return res.status(404).json({
              mensagem: 'Aula não encontrada para o usuário informado'})}

    const aulaIndex = instrutor?.aulas.findIndex((item) =>{
        return item.id === Number(idAula)})

    if (aulaIndex === -1) {res.status(404).json({mensagem: 'Aula não encontrada para o usuário informado'})}

    instrutor?.aulas?.splice(aulaIndex, 1)
    res.status(204).send()
}