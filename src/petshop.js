/*Coloquei a propriedade id para ficar mais específico
(poderia ter gerado um hash).
*/
const {pets} = require("./pets");

const listarPets = pets => {
  let dados = "";

  for (let pet of pets) {
    dados += `
      ------------------------
      Nome: ${pet.nome}
      Tipo: ${pet.tipo}
      Raça: ${pet.raca}
      Idade: ${pet.idade} anos
      Genero: ${pet.genero == "F" ? "femea" : "macho"}
      Vacinado: ${pet.vacinado ? "sim" : "não"}
      Serviços: ${pet.servicos}
      ID:${pet.id}
      Date:${pet.date}
      ------------------------
      `;
  }

  return dados;
};

const vacinarPet = id => {
  const petBuscado = pets.filter(pet => pet.id === id)[0];
  if (petBuscado) {
    return !petBuscado.vacinado
      ? ((petBuscado.vacinado = true),
        `Pet ${petBuscado.nome} vacinado com sucesso!\n
        ${buscarPet(id)}`)
      : `Pet ${petBuscado.nome} já está vacinado `;
  } else "Esse Pet não existe";
};

const buscarPet = id => {
  const petBuscado = pets.filter(pet => pet.id === id);
  return !petBuscado
    ? "Esse pet não existe!"
    : listarPets(petBuscado)
};

const campanhaVacina = () => {
  let petsVacinadosCampanha = 0;
  let petsVacinados = [];
  for (let pet of pets) {
    if (!pet.vacinado) {
      petsVacinados.push(pet);
      vacinarPet(pet.id);
      petsVacinadosCampanha++;
    }
  }
  return `${petsVacinadosCampanha} pets foram vacinados nessa campanha

    ${listarPets(petsVacinados)}

    `;
};

const validarDados = pet => {
  return (
    typeof pet &&
    pet.nome &&
    pet.tipo &&
    pet.raca &&
    pet.idade &&
    pet.genero &&
    pet.genero
  );
};

const adicionarPet = pet => {
  pets.push({
    nome: pet.nome,
    tipo: pet.tipo,
    raca: pet.raca,
    idade: pet.idade,
    genero: pet.genero,
    vacinado: pet.vacinado == "true",
    servicos: [pet.servicos],
    id:`5ac1${Math.random() * 10000}de`,
    date: new Date
  });

  return `Pet ${pet.nome} adicionado com sucesso!`;
};

module.exports = {
  listarPets,
  adicionarPet,
  validarDados,
  buscarPet,
  vacinarPet,
  campanhaVacina
};
