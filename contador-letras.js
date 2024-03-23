function contarL(texto) {
    let contador = {};
  
    
    for (let i = 0; i < texto.length; i++) {
      
      let letra = texto[i];
      
      if (letra.match(/[a-zA-Z]/)) {
       
        let letraMin = letra.toLowerCase();
       
        contador[letraMin] = (contador[letraMin] || 0) + 1;
      }
    }
  
    return contador;
  }
  
  
  let texto = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur"
  + "scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus";
  let resultado = contarL(texto);
  console.log("La cantidad de letras de cada una es:", resultado);
  