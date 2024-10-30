import 'dotenv/config'
import Express from "express";
import rotas from './rotas';


 const app = Express()

app.use(Express.json())
app.use(rotas)

app.listen(process.env.PORT)


export default app