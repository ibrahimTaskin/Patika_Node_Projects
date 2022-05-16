const Koa = require('koa');
const app = new Koa();

// response
app.use(ctx => {
    const url = ctx.url;
    if(url === '/'){
        ctx.response.status = 200;
        ctx.body = "<h2>Index sayfasına hoşgeldiniz</h2>"
    }
    else if(url === '/hakkimda'){
        ctx.response.status = 200;
        ctx.body = "<h2>Hakkımda sayfasına hoşgeldiniz</h2>"
    }
    else if(url === '/iletisim'){
        ctx.response.status = 200;
        ctx.body = "<h2>Iletisim sayfasına hoşgeldiniz</h2>"
    }
    else{
        ctx.response.status = 404;
        ctx.body = "<h2>404</h2>"
    }
});

const port = 3000;

app.listen(port,()=> {
    console.log(`${port} nolu port başlatıldı.`);
});