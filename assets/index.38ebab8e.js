(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))f(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&f(l)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function f(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();function w(i){return i.sort(()=>.5-Math.random())}const x="Testa dina matematikkunskaper!",u=document.querySelector(".gameDescription"),L=document.querySelector(".questionText"),d=document.querySelector(".answer1"),y=document.querySelector(".answer2"),m=document.querySelector(".answer3"),T=document.querySelector(".next");u&&(u.innerHTML=x);document.querySelector(".startGameBtn").addEventListener("click",k);document.querySelector(".restartGameBtn").addEventListener("click",S);d.addEventListener("click",p);y.addEventListener("click",p);m.addEventListener("click",p);d.addEventListener("click",o);y.addEventListener("click",o);m.addEventListener("click",o);T.addEventListener("click",o);let n=0,c=0,q="";const r=[{questionText:"Vad \xE4r 11 x 11?",answerOptions:["121","111","112"],correctAnswer:"111"},{questionText:"Vad \xE4r pi?",answerOptions:["3.14","100","4,10"],correctAnswer:"3.14"},{questionText:"Vilket tal \xE4r minst?",answerOptions:["2,9","2,89","2,889"],correctAnswer:"2,889"},{questionText:"Vad blir 2*3+5?",answerOptions:["16","11","10"],correctAnswer:"11"},{questionText:"Vilket tal \xE4r X? 6+x=12",answerOptions:["6","2","5"],correctAnswer:"6"},{questionText:"Ber\xE4kna 0,5*20?",answerOptions:["11","10","12"],correctAnswer:"10"},{questionText:"Ber\xE4kna 7*7?",answerOptions:["50","51","49"],correctAnswer:"49"},{questionText:"Vad \xE4r roten ur 36?",answerOptions:["7","6","8"],correctAnswer:"6"},{questionText:"Ber\xE4kna 100/4?",answerOptions:["25","20","22"],correctAnswer:"25"},{questionText:"Vad blir X? 100=20*x",answerOptions:["5","4","6"],correctAnswer:"5"}];function k(){q=document.querySelector("#playerNameInput").value,u.style.display="none",document.querySelector(".playerDetails").classList.add("hidden"),document.querySelector(".startGameBtn").classList.add("hidden"),document.querySelector("#nextWrapper").style.display="block",document.querySelector("#questionContainer").style.display="flex",o()}function p(i){const s=i.currentTarget.innerHTML,a=r[n-1].correctAnswer;s===a?c++:c>0&&c--}function o(){if(n>=w(r).length){O();return}L.innerHTML=r[n].questionText,d.innerHTML=r[n].answerOptions[0],y.innerHTML=r[n].answerOptions[1],m.innerHTML=r[n].answerOptions[2],n++}function S(){document.querySelector("#gameOver").style.display="none",document.querySelector("#questionContainer").classList.remove("hidden"),document.querySelector("#nextWrapper").style.display="block",document.querySelector("#questionContainer").style.display="flex",n=0,c=0,o()}function O(){document.querySelector("#gameOver").style.display="block",document.querySelector("#questionContainer").style.display="none",document.querySelector(".pointsContainer").innerHTML=`Du, ${q}, fick ${c} po\xE4ng.`,document.querySelector("#nextWrapper").style.display="none"}
