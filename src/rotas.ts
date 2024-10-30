// cadastrar um instrutor
// editar um instrutor
// excluir um instrutor
//cadastrar uma aula a um instrutor
//excluir a aula para um instrutor
import { Router } from "express"; 
import { detalhar,listar,} from "./controladores/instrutores";

const rotas = Router()

// listar todos os instrutores
rotas.get  ('/instrutores',listar)

// detalhar as info de um instrutor
rotas.get('/instrutores/:id', detalhar)


















export default rotas