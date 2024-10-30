// editar um instrutor
// excluir um instrutor
//cadastrar uma aula a um instrutor
//excluir a aula para um instrutor
import { Router } from "express"; 
import { cadastrar, detalhar,listar,} from "./controladores/instrutores";

const rotas = Router()

// listar todos os instrutores
rotas.get  ('/instrutores',listar)

// detalhar as info de um instrutor
rotas.get('/instrutores/:id', detalhar)

// cadastrar um instrutor
rotas.post ('/cadastrar-instrutor',cadastrar)

















export default rotas