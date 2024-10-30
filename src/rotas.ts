// detalhar as info de um instrutor
// cadastrar um instrutor
// editar um instrutor
// excluir um instrutor
//cadastrar uma aula a um instrutor
//excluir a aula para um instrutor

import { Router } from "express"; 
import { listarInstrutores } from "./controladores/instrutores";

// listar todos os instrutores
const rotas = Router()
rotas.get  ('/instrutores',listarInstrutores)



















export default rotas