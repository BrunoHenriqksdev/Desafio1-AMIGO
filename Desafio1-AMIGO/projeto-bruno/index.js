const express = require('express');
const server = express();
server.use(express.json());
const Guide = require('./models/Guide.js');
const Patient = require('./models/Patient.js');
const Insurance = require('./models/Insurance.js');

// const insurances = [
// new Insurance(3322, 'Amil')
// , new Insurance(3293, 'Bradesco')
// , new Insurance(99231, 'Hapvida')
// , new Insurance(1322, 'CASSI')
// , new Insurance(23111, 'Sulamérica')
// ];

//Mockando outputs
const guides = mockOutputs();

server.get('/guides/:type', (req, res) => {
    return res.json(guides);
});

server.get('/guides/:param/:type', (req, res) => {
    console.log(req.params);
    const {param} = req.params
    const {type} = req.params
    let result = [];
    result = guides;
    if(param !== null){
        guides.filter(guide => 
            type == 0 ? guide.number.includes(param) || guide.patient.name.includes(param) : 
            guide.insurance_id == type && (guide.number.includes(param) || guide.patient.name.includes(param))
            )
    }
    return res.json(result);
});




function mockOutputs(){
    const guides = [
    new Guide(
        "3210998321", "2021-04-23T19:18:47.210Z", 
    new Patient(9321123, "Augusto Ferreira", "https://imgsapp2.correiobraziliense.com.br/app/noticia_127983242361/2019/10/04/794834/20191004154953157610i.jpg"),
    1322,
    new Insurance(1322, "CASSI", false),
    5567.2
    ),
    new Guide(
        "287312832", "2021-04-23T19:18:47.210Z", 
        new Patient(93229123, "Caio Carneiro", "http://3.bp.blogspot.com/-XG5bGlqGnJw/T9lIcssnybI/AAAAAAAADTA/B23ezXOkx8Y/s1600/Aang.jpg"),
        1322,
        new Insurance(1322, "CASSI", false),
        213.3
    ),
    new Guide(
        "213122388", "2021-04-22T19:18:47.210Z", 
        new Patient(213122388, "Luciano José", "https://i.ytimg.com/vi/yUXd-enstO8/maxresdefault.jpg"),
        3293,
        new Insurance(3293, "Bradesco", true),
        88.99
    ),
    new Guide(
        "009090321938", "2021-04-20T19:18:47.210Z", 
        new Patient(3367263, "Felício Santos", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPSxlYabmRlKk43uvsBMIqjA7Rw_YCwK4TyA&usqp=CAU"),
        3293,
        new Insurance(3293, "Bradesco", true),
        828.99
    ),
    new Guide(
        "8787128731", "2021-04-01T19:18:47.210Z", 
        new Patient(777882, "Fernando Raposo", null),
        3322,
        new Insurance(3322, "Amil", false),
        772
    ) ,
    new Guide(
        "12929321", "2021-04-02T19:18:47.210Z", 
        new Patient(221, "Paciente com nome grante pra colocar text ellipsis testando nome com paciente grande", null),
        3322,
        new Insurance(3322, "Amil", false),
        221
    ) 
];
    return guides;
}

// server.post('/insurances', (req, res) => {
//     console.log(req.body);
//     insurances.push(req.body);
//     return res.json(insurances);
// });

// server.put('/insurances/:id', (req, res) => {
//     const {id} = req.params;
//     const index = insurances.findIndex(ins => ins.id == id);
//     insurances[index] = req.body;
//     return res.json(insurances);
// });

// server.delete('/insurances/:id', (req, res) => {
//     const {id} = req.params;
//     const index = insurances.findIndex(ins => ins.id == id);
//     insurances.splice(index, 1)
//     return res.json(insurances);
// });

server.listen(4000);