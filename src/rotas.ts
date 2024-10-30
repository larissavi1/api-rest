import { Router } from "express"; 
import { cadastrar, detalhar,editar,excluir,listar,} from "./controladores/instrutores";

const rotas = Router()

// listar todos os instrutores
rotas.get  ('/instrutores',listar)

// detalhar as info de um instrutor
rotas.get('/instrutores/:id', detalhar)

// cadastrar um instrutor
rotas.post ('/cadastrar-instrutor',cadastrar)

// editar um instrutor
rotas.put('/editar-instrutor/:id', editar ) //ver o erro depois

// excluir um instrutor
rotas.delete('/deletar-instrutor/:id',excluir)

//cadastrar uma aula a um instrutor


//excluir a aula para um instrutor







export default rotas