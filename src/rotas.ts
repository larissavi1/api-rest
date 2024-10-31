import { Router } from "express"; 
import { cadastrar, detalhar,editar,editaremail,excluir,listar,} from "./controladores/instrutores";
import { cadastraraula, excluiraula } from "./controladores/aulas";

const rotas = Router()

// listar todos os instrutores
rotas.get  ('/instrutores',listar)

// detalhar as info de um instrutor
rotas.get('/instrutores/:id', detalhar)

// cadastrar um instrutor
rotas.post ('/cadastrar-instrutor',cadastrar)

// editar um instrutor
rotas.put('/editar-instrutor/:id', editar ) //ver o erro depois
rotas.patch('/editar-instrutor/:id/email',editaremail)

// excluir um instrutor
rotas.delete('/deletar-instrutor/:id',excluir)

//cadastrar uma aula a um instrutor
rotas.post('/instrutores/:id/aulas', cadastraraula)

//excluir a aula para um instrutor
rotas.delete('/intrutores/:id/aulas/idAula', excluiraula)






export default rotas