const express = require('express')
const app = express()

app.use(express.json());

let veiculosCadastrados = []
let motoristas = [];
let reservas = []


// Criar um novo Veiculo
app.post('/veiculo', (req, res) => {
    const veiculo = req.body;

    let veiculoCadastrado = veiculosCadastrados.find(v => v.placa == veiculo.placa)
    if(veiculoCadastrado){
        return res.json({ message: "Esse veículo já foi cadastrado"});
    }
    
    veiculo.id = veiculosCadastrados.length
    veiculosCadastrados.push(veiculo);

    return res.json(veiculosCadastrados);
});

// Atualizar um veiculo
app.put('/veiculos/:id', (req, res) =>{
    const { id } = req.params;
    
    for (var i = 0; i < veiculosCadastrados.length; i++) {
        var veiculo = veiculosCadastrados[i]
        if (veiculo.id == id) {
            veiculo.placa = req.body.placa
            veiculo.cor = req.body.cor
            veiculo.marca = req.body.marca
            break;
        }
      }

    return res.json(veiculosCadastrados);
});

// Excluir um veiculo
app.delete('/veiculos/:id', (req, res) =>{
    const { id } = req.params;

    veiculosCadastrados = veiculosCadastrados.filter(veiculo => veiculo.id != id)

    return res.json({ message: "O veículo foi deletado"});
})

app.get('/veiculos/:id', (req, res) => {
    const { id } = req.params;

    let veiculo = veiculosCadastrados.find(v => v.id == id)

    return res.json(veiculo);
})

app.get('/veiculos', (req, res) => {
    const cor = req.query.cor
    const marca = req.query.marca

    if(cor){
        const veiculosFiltradosPorCor = veiculosCadastrados.filter(veiculo => veiculo.cor === cor)
        return res.json(veiculosFiltradosPorCor)
    }else if(marca){
        const veiculosFiltradosPorMarca = veiculosCadastrados.filter(veiculo => veiculo.marca === marca)
        return res.json(veiculosFiltradosPorMarca)
    }else{
        return res.json(veiculosCadastrados);
    }
})



// Motorista
// Criar um novo motorista
app.post('/motoristas', (req, res) => {
    const { nome } = req.body;

    const motorista = {
        "id": motoristas.length,
        "nome": nome
    }
    
    motoristas.push(motorista);

    return res.json(motoristas);
});


// Atualizar um motorista
app.put('/motoristas/:id', (req, res) =>{
    const { id } = req.params;
    const { nome } = req.body;

    motoristas[id].nome = nome;

    return res.json(motoristas);
});

// Deletar um motorista
app.delete('/motoristas/:id', (req, res) => {
    const { id } = req.params;

    motoristas.splice(id, 1);
    return res.json({ message: "O motorista foi deletado"});
});


// Retorna um motorista
app.get('/motoristas/:id',(req, res) => {
    const {id} = req.params;

    return res.json(motoristas[id]);
});

// Retornar todos os motoristas
app.get('/motoristas', (req, res) => {
    const nome = req.query.nome

    if(nome){
        var motoristasPorNome = motoristas.find(m => m.nome == nome)

        return res.json(motoristasPorNome);
    }

    return res.json(motoristas);
});




// --------------------------------------------------------------------
// RESERVAS
// Criar o início de uma reserva
app.post('/reserva/inicio/', (req, res) => {
    const { placa } = req.body;
    const { nome } = req.body;

    const automovel = veiculosCadastrados.find(veiculo => veiculo.placa === placa)
    if(!automovel){
        return res.json({ message: "automovel não identificado"});
    }

    var motorista = motoristas.find(m => m.nome == nome);
    
    if(!motorista){
        return res.json({ message: "motorista não identificado"});
    }

    const automovelEstaOcupado = reservas.find(r => (r.carro.placa === automovel.placa && !r.finalDaReserva) )
    const motoristaEstaOcupado = reservas.find(r => (r.motorista === motorista && !r.finalDaReserva) )

    if(automovelEstaOcupado ){
        return res.json({ message: "Automovel já esta reservado para essa data"});
    }

    if(motoristaEstaOcupado ){
        return res.json({ message: "Motorista já esta reservado para essa data"});
    }


    const reserva = {
        "id": reservas.length,
        "automovel": automovel,
        "motorista": motorista,
        "inicioDaReserva": new Date()
    }

    reservas.push(reserva)

    return res.json(reservas);
})

// Criar o fechamento de uma reserva
app.post('/reserva/:id/final', (req, res) => {
    const { id } = req.params;

    let reserva = reservas.find(r => r.id == id && !r.finalDaReserva)
    
    if(!reserva){
        return res.json({ message: "Nenhuma reserva ativa para esse motorista"});
    }

    reserva.finalDaReserva = new Date()

    return res.json(reservas);

})


// Listar os registro de utilização
app.get('/reservas', (req, res) => {
    return res.json(reservas);
})




app.listen(3000, function(){
    console.log("listen on port 3000")
})