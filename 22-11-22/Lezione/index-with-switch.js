// nel terminare fare npm install os poi questo
const os = require("os");
//console.log(os.userInfo());
//console.log(os.arch());

//creare un server
//utilizzando il modulo http
const http = require("http");
//req è la richiesta che ricevo dal browser
//res è la risposta alla chiamata
const server = http.createServer((req, res) => {
  const my_url = req.url;
  switch (my_url) {
    case "/home":
      res.write("Bella raga, benvenuti nella mia nuova Buenohome");
      break;
    case "/calcolatrice":
      res.write("Grande! Ora sei nella home della mia calcolatrice");
    default:
      res.write(
        "<h1>Ahi ahi ahi</h1><p>La pagina non esiste, torna alla <a href='/home'>Buenohome<a></p>"
      );
  }
  res.end();
});

//in ascolto sulla porta 3000
server.listen(3000);
// sul terminale: node index.js
// sul browser -> localhost:3000
//ctrl+c per interrompere il server

/*SE ci sono ancora problemi è questione di cache. Chiudere il browser, chiudere il server con ctlr+c da terminale, aprire browser incognito e riavviare il server con node nomefile.js*/
