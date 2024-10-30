type Tinstrutores = {
     id: number, nome: string,  email: string, aulas?: Taulas[] }

type Tidentificador = number

type Taulas = {id: number, nome: string}

type Tbancodedados = {proximoIdentificador: Tidentificador, instrutores: Tinstrutores[]}

 const bancodedados: Tbancodedados = {proximoIdentificador: 4,  instrutores:[
         {id: 1, nome: 'guido', email:'guido@email.com', aulas:[]},
         {id: 2, nome: 'maria', email:'maria@email.com', aulas:[]},
         {id: 3, nome: 'joao', email:'joao@email.com', aulas:[]}]}

export default bancodedados