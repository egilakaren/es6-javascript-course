const usuarios = [
  { nome: "Diego", idade: 23, empresa: "Rocketseat" },
  { nome: "Gabriel", idade: 15, empresa: "Rocketseat" },
  { nome: "Lucas", idade: 30, empresa: "Facebook" }
];

// 2.1 Utilizando o map
const getIdade = usuarios.map(function(item) {
 return item.idade;
});
console.log(getIdade);

// 2.2 Utilizando o filter
const getUsuarioTrabalhaRocketseatMaior18 = usuarios.filter(function(item) {
   if(item.empresa === "Rocketseat" && item.idade > 18) {
       return item;
   }
});
console.log(getUsuarioTrabalhaRocketseatMaior18);

// 2.3 Utilizando o find
const getUsuarioGoogle = usuarios.find(function(item) {
   if(item.empresa === "Google") {
       return item.empresa;
   }
});
console.log(getUsuarioGoogle);

// 2.4 Unindo operações
const calculo = usuarios.map(function(item) {
   return item.idade * 2;
}).filter(function(usuario) {
    if(usuario > 50)  {
        return usuario;
    }
 });
console.log(calculo);