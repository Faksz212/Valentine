const pages = document.querySelectorAll(".page");
function showPage(id){
  pages.forEach(p=>p.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

/* ===== PAGE 1 ===== */

let noCount = 0;
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const noEscapeText = document.getElementById("noEscapeText");

const noMessages = [
  "Yakin nih? 🥺",
  "Masa sih gak mau? 😭",
  "Ayolahh 💔",
  "Please bangettt 🥹"
];

noBtn.addEventListener("click", ()=>{
  noCount++;
  yesBtn.style.transform = `scale(${1 + noCount * 0.2})`;

  noBtn.style.position = "absolute";
  noBtn.style.top = Math.random()*80 + "%";
  noBtn.style.left = Math.random()*80 + "%";

  if(noCount <= noMessages.length){
    noEscapeText.textContent = noMessages[noCount-1];
    noEscapeText.classList.remove("hidden");
  }
});

yesBtn.addEventListener("click", ()=>{
  showPage("page2");
});

/* ===== PAGE 2 ===== */

document.getElementById("nextToPage3")
.addEventListener("click",()=>showPage("page3"));

document.getElementById("backToPage1")
.addEventListener("click",()=>showPage("page1"));

/* ===== PAGE 3 ===== */

document.getElementById("takeBouquet")
.addEventListener("click",()=>{
  document.getElementById("bouquetMessage").classList.remove("hidden");
  document.getElementById("nextToPage4").classList.remove("hidden");
});

document.getElementById("nextToPage4")
.addEventListener("click",()=>showPage("page4"));

/* ===== PAGE 4 ===== */

document.getElementById("nextToPage5")
.addEventListener("click",()=>showPage("page5"));

/* ===== PAGE 5 Envelope ===== */

const envelope = document.getElementById("envelope");
const finalContent = document.getElementById("finalContent");

document.getElementById("envelopeWrapper")
.addEventListener("click",()=>{
  envelope.classList.add("open");
  setTimeout(()=>{
    finalContent.classList.remove("hidden");
    createConfetti();
  },600);
});

/* ===== Confetti ===== */

function createConfetti(){
  const container = document.getElementById("confettiContainer");
  for(let i=0;i<40;i++){
    const span=document.createElement("span");
    span.style.left=Math.random()*100+"vw";
    span.style.top="-10px";
    span.style.background=`hsl(${Math.random()*360},100%,70%)`;
    container.appendChild(span);
    setTimeout(()=>span.remove(),3000);
  }
}

/* ===== Copy Message ===== */

document.getElementById("copyBtn")
.addEventListener("click",()=>{
  const text=document.getElementById("finalMessage").innerText;
  navigator.clipboard.writeText(text);
  document.getElementById("copyNotif").classList.remove("hidden");
});

/* ===== Restart ===== */

document.getElementById("restartBtn")
.addEventListener("click",()=>location.reload());
