const getFullDate = require('./fullDate')

let pets = [
  {
    nome: "Pluto",
    tipo: "cão",
    raca: "vira-lata",
    idade: 5,
    genero: "M",
    vacinado: false,
    servicos: ["banho", "tosa"],
    id: `5ac1${Math.random() * 10000}de`,
    date: getFullDate()
  },
  {
    nome: "Bolt",
    tipo: "cão",
    raca: "vira-lata",
    idade: 10,
    genero: "M",
    vacinado: true,
    servicos: ["banho"],
    id: `5ac${Math.random() * 10000}de`,
    date: getFullDate()
  },
  {
    nome: "Scooby",
    tipo: "cão",
    raca: "Dogue Alemão",
    idade: 51,
    genero: "M",
    vacinado: false,
    servicos: ["banho", "tosa"],
    id: `5ac${Math.random() * 10000}de`,
    date: getFullDate()
  },
  {
    nome: "Tom",
    tipo: "gato",
    raca: "poodle",
    idade: 5,
    genero: "M",
    vacinado: false,
    servicos: ["corte de unha"],
    id: `5ac${Math.random() * 10000}de`,
    date: getFullDate()
  },
  {
    nome: "Ada",
    tipo: "iguana",
    raca: "albina",
    idade: 5,
    genero: "F",
    vacinado: true,
    servicos: ["banho"],
    id: `5ac${Math.random() * 10000}de`,
    date: getFullDate()
  }
];


module.exports = {
  pets
};
