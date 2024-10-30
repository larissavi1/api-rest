import { Request, Response } from "express"
import bancodedados from "../bancodedados"
import rotas from "../rotas"


export function cadastraraula(req: Request, res:Response){
    const {id} = req.params
    const {nome} = req.body

    const instrutor = bancodedados.instrutores.find((item)=> {
        return item.id === Number(id)})

            if (!instrutor){
             res.status(404).json({
             mensagem: 'instrutor não encontrado(a)'})}

        const novaAula = {
            id: bancodedados.proximoIdentificadoraula++,
            nome}
     
            if (instrutor?.aulas) {instrutor.aulas.push(novaAula)
             res.status(201).json(novaAula)}
        
        instrutor.aulas = [novaAula]     
         res.status(201).json(novaAula);
}