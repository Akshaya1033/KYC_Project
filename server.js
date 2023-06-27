const http=require('http')
const server=http.createServer((req,res)=>{
   // console.log(req)
res.write('Hello');
res.end();
});
//localhost 5000
const PORT=5000;
server.listen(PORT,()=>console.log(`Server running on port ${PORT}`));