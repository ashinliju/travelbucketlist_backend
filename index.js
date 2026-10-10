const jsonServer=require('json-server')
const server=jsonServer.create()
const router=jsonServer.router('db.json')
const middleware=jsonServer.defaults()
const port=3001
server.use(middleware)
server.use(router)
server.listen(port,()=>{
    console.log('json server listening on port 3001');
    
})