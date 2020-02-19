const http = require("http");
const url = require("url");

const pets = require("./pets");
const petshop = require("./petshop");

const porta = 3000;
const server = http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain; charset=UTF-8" });

    let urlLocal = url.parse(req.url, true);
    let rota = urlLocal.pathname;
    let queryUrl = urlLocal.query;

    switch (rota) {
      case "/pets":
        if(pets.pets.length!==0)
        res.write(petshop.listarPets(pets.pets));
        else res.write('Não há pets cadastrados!')
        break;
      case "/pets/adicionar":
        if (petshop.validarDados(queryUrl)) {
          res.write(petshop.adicionarPet(queryUrl));
          res.write(petshop.listarPets(pets.pets));
        } else {
          res.write("Algo deu errado!");
        }
        break;
      case "/pets/buscar":
        res.write(petshop.buscarPet(queryUrl.id));
        break;
      case "/pets/vacinar":
        res.write(petshop.vacinarPet(queryUrl.id));
        break;
      case "/pets/campanha":
        res.write(
          `Bem vindos a campanha de vacinção ${new Date().getFullYear()}!\n`
        );
        res.write(petshop.campanhaVacina());
        break;
        default:
            res.write('**PetShop-DH**')
    }

    res.end();
  })
  .listen(porta, "localhost", () => {
    console.log(`Servidor funcionando na porta ${porta}!`);
  });
