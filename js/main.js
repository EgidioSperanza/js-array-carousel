const articleTitle = document.querySelector("article h1");
const article = document.querySelector("article p");
const articleImage = document.querySelector("article img.article_img");
const articleDiv = document.querySelector("section");
const prew = document.querySelector(".slide.prew");
const next = document.querySelector(".slide.next");
const prewTop = document.querySelector(".mobile_slide.top > .prew");
const nextTop = document.querySelector(".mobile_slide.top > .next");
const prewBottom = document.querySelector(".mobile_slide.bottom > .prew");
const nextBottom = document.querySelector(".mobile_slide.bottom > .next");

const titles = [
  "Ventole, l'importanza di raffreddare il PC: tipologie e dove montarle",
  "Log4Shell fa paura: vulnerabilità estremamente diffusa e facile da sfruttare. Il tempo stringe",
  "Apple rilascia iOS 15.2 in versione stabile: ecco tutte le novità per gli utenti",
  "Sapphire Pulse RX 6600 8GB, piccolissima ma con ciò che serve per giocare in Full HD",
];

const articles = [
  "Le ventole sono un componente fondamentale dei PC gaming e non solo. Servono per raffreddare i singoli componenti, ma soprattutto per permettere all'aria calda di fuoriuscire dal case. Scopriamo quindi quali sono le tecnologie alla base delle ventole, tra cuscinetti, connettori e alcuni consigli generali.",
  "La vulnerabilità CVE-2021-44228 recentemente scoperta ha un livello di gravità elevatissimo e può essere sfruttata con facilità per compiere svariate tipologie di attacco ",
  "Nel corso della serata di ieri Apple ha rilasciato iOS 15.2, nuova major release che introduce su iPhone e iPad (con iPadOS 15.2) funzionalità inedite. Il nuovo aggiornamento segue il rilascio di iOS 15.1 dello scorso mese di ottobre, che implementava fra le novità FaceTime SharePlay e supporto ProRes su iPhone. Fra le novità principali di iOS 15.2 abbiamo il nuovo App Privacy Report, e il nuovo Apple Music Voice Plan." +
    "iOS 15.2 può essere scaricato sui dispositivi compatibili attraverso le Impostazioni, nella pagina Aggiornamento software presente nel menu Generale. L'utente può forzare il download del pacchetto di installazione per poi eseguire l'aggiornamento, con l'operazione che richiede un riavvio. Alla fine della procedura l'iPhone verrà avviato con iOS 15.2.",
  "AMD porta sul mercato una nuova scheda video destinata al gaming Full HD basata sull'architettura RDNA 2. La nuova Radeon RX 6600 si presenta con un prezzo di 329 dollari, shortage permettendo, e compete con la RTX 3060 di NVIDIA. Abbiamo provato il modello Sapphire Pulse RX 6600 8GB.",
];

const images = [
  "./img/ventole.jpg",
  "./img/log4shell.jpg",
  "./img/apple.jpg",
  "./img/pulserx.jpg",
];

let currentIndex = 0;

displayArticle();

towardNext(next);
towardNext(prew);

towardNext(nextTop);
towardNext(prewTop);
towardNext(nextBottom);
towardNext(prewBottom);

function towardNext(btn) {
  btn.addEventListener("click", () => {
    currentIndex++;
    if (currentIndex >= titles.length) {
      currentIndex = 0;
      articleClass(articleDiv);
      displayArticle();
    }
    articleClass(articleDiv);
    displayArticle();
  });
}

function towardprew(btn) {
  btn.addEventListener("click", () => {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = titles.length - 1;
      articleClass(articleDiv);
      displayArticle();
    }
    articleClass(articleDiv);
    displayArticle();
  });
}

function displayArticle() {
  articleTitle.textContent = titles[currentIndex];
  article.textContent = articles[currentIndex];
  articleImage.src = images[currentIndex];
}

function articleClass(e) {
  currentIndex % 2 === 0
    ? e.classList.remove("article_transition")
    : e.classList.add("article_transition");
}
