const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 3000;

// Middleware para servir arquivos estáticos da pasta "public"
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html')); 
});

app.post('/login', (req, res) => {
    const { email, senha } = req.body;
    console.log(`Email: ${email}, Senha: ${senha}`);
    
    res.redirect('/introducao');
});

app.get('/introducao', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'introducao.html')); 
});

app.post('/formulario', (req, res) => {
    console.log(req.body);
    
    res.redirect('/agradecimento');
});

app.get('/agradecimento', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'agradecimento.html')); 
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
