const msgerFormAnik = get(".msger-inputareaAnik");
const msgerInputAnik = get(".msger-inputAnik");
const msgerChatAnik = get(".msger-chatAnik");

const msgerFormBhabin = get(".msger-inputareaBhabin");
const msgerInputBhabin = get(".msger-inputBhabin");
const msgerChatBhabin = get(".msger-chatBhabin");

const msgerFormJohn = get(".msger-inputareaJohn");
const msgerInputJohn = get(".msger-inputJohn");
const msgerChatJohn = get(".msger-chatJohn");
let USER_ARRAYJohn = [];
let USER_ARRAYAnik = [];
let USER_ARRAYBhabin = [];
let personArrayJohn = [];
let personArrayAnik = [];
let personArrayBhabin = [];

const  rob_MSGS = [];
const rob_IMG = "";
const PERSON_IMG = "";
const rob_NAME = "Alexa";

function openCity(evt, v1) {
  let i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(v1).style.display = "block";
  if(v1=="John"){
    personArrayJohn.push(v1) ;
    USER_ARRAYJohn.push(v1) ;
  }
  else if(v1=="Anik"){
    USER_ARRAYJohn.push(v1) ;
    personArrayAnik.push(v1) ;
    
  }
  else if(v1=="Bhabin"){
    personArrayBhabin.push(v1) ;
    USER_ARRAYJohn.push(v1) ;
  }
  
  
  evt.currentTarget.className += " active";
  
}
document.getElementById("defaultOpen").click();


msgerFormJohn.addEventListener("submit", event => {
  event.preventDefault();

  var msgTextJohn = msgerInputJohn.value;
  var myFileJohn = document.getElementById("myFileJohn").value;
  let substringJohn = myFileJohn.substring(12);

    if( USER_ARRAYJohn[0]=="John"){
    appendMessageJohn(USER_ARRAYJohn[USER_ARRAYJohn.length-1], PERSON_IMG, "right", msgTextJohn, substringJohn);
    msgerInputJohn.value = "";
    USER_ARRAYJohn[0] = "Alexa";
    } else{
        rob_MSGS.push(msgTextJohn);

        robResponse(personArrayJohn[0]);
       
    }
   document.getElementById("notify-id-p").innerHTML = "${USER_ARRAYJohn[0]} has sent a message.";
      
});

msgerFormAnik.addEventListener("submit", event => {
  event.preventDefault();

  var msgTextAnik = msgerInputAnik.value;
  var myFileAnik = document.getElementById("myFileAnik").value;
  let substringAnik = myFileAnik.substring(12);
  //if (msgText) return;
    if(USER_ARRAYAnik[0]=="Anik"){
    appendMessageAnik(USER_ARRAYAnik[USER_ARRAYAnik.length-1], PERSON_IMG, "right", msgTextAnik,substringAnik);
    msgerInputAnik.value = "";
    USER_ARRAYAnik[0] = "Alexa";
    } else{
        rob_MSGS.push(msgTextAnik);

        robResponse(personArrayAnik[0]);
       
    }
    document.getElementById("notify-id-p").innerHTML = "${USER_ARRAYAnik[0]} has sent a messsage.";
      
});

msgerFormBhabin.addEventListener("submit", event => {
  event.preventDefault();

  let msgTextBhabin = msgerInputBhabin.value;
  let myFileBhabin = document.getElementById("myFileBhabin").value;
  let substringBhabin = myFileBhabin.substring(12);
  
    if(USER_ARRAYBhabin[0]=="Bhabin"){
    appendMessageBhabin(USER_ARRAYBhabin[USER_ARRAYBhabin.length-1], PERSON_IMG, "right", msgTextBhabin,substringBhabin);
    msgerInputBhabin.value = "";
    USER_ARRAYBhabin[0] = "Alexa";
    } else{
        rob_MSGS.push(msgTextBhabin)
        robResponse(personArrayBhabin[0]);
       
    }
  });

function appendMessageJohn(name, img, side, text, image) {

  document.getElementById("johnNotify").innerHTML = "John has sent a messsage.";
  //   Simple solution for small apps
  const msgHTMLJohn = `
    <div class="msgJohn ${side}-msg">
      <div class="msg-img" style="background-image: url(${img})"></div>

      <div class="msg-bubbleJohn">
        <div class="msg-infoJohn">
          <div class="msg-info-nameJohn">${name}</div>
          <div class="msg-info-timeJohn">${formatDate(new Date())}</div>
        </div>
        <div class="msg-textJohn">${text}
        </div>
      </div>
    </div>
  `;
  const msgHTMLJohnImage = `
  <div class="msgJohn ${side}-msg">
    <div class="msg-img" style="background-image: url(${img})"></div>

    <div class="msg-bubbleJohn">
      <div class="msg-infoJohn">
        <div class="msg-info-nameJohn">${name}</div>
        <div class="msg-info-timeJohn">${formatDate(new Date())}</div>
      </div>
      <div class="msg-textJohn">
      <h1>${text}</h1>
      <img src="images/${image}"  width="200" height="200">

      </div>
    </div>
  </div>
`;
 
  if(image === "" || image === undefined){
    msgerChatJohn.insertAdjacentHTML("beforeend", msgHTMLJohn);
    msgerChatJohn.scrollTop += 500;
  }
  else{
    msgerChatJohn.insertAdjacentHTML("beforeend", msgHTMLJohnImage);
    msgerChatJohn.scrollTop += 500;
  }
    
      
 
}

function appendMessageAnik(name, img, side, text, image) {
  document.getElementById("AnikNotify").innerHTML = "Anik has sent a messsage.";
  //   Simple solution for small apps
  const msgHTMLAnikImage = `
  <div class="msgJohn ${side}-msg">
    <div class="msg-img" style="background-image: url(${img})"></div>

    <div class="msg-bubbleJohn">
      <div class="msg-infoJohn">
        <div class="msg-info-nameJohn">${name}</div>
        <div class="msg-info-timeJohn">${formatDate(new Date())}</div>
      </div>
      <div class="msg-textJohn">
      <h1>${text}</h1>
      <img src="images/${image}"  width="200" height="200"></div>
    </div>
  </div>
`;

  const msgHTMLAnik = `
  <div class="msgAnik ${side}-msg">
    <div class="msg-img" style="background-image: url(${img})"></div>

    <div class="msg-bubbleAnik">
      <div class="msg-infoAnik">
        <div class="msg-info-nameAnik">${name}</div>
        <div class="msg-info-timeAnik">${formatDate(new Date())}</div>
      </div>

      <div class="msg-textAnik">${text}</div>
    </div>
  </div>
`;

if(image === "" || image === undefined){
  msgerChatAnik.insertAdjacentHTML("beforeend", msgHTMLAnik);
      msgerChatAnik.scrollTop += 500;
}
else{
  msgerChatAnik.insertAdjacentHTML("beforeend", msgHTMLAnikImage);
      msgerChatAnik.scrollTop += 500;
}
}

function appendMessageBhabin(name, img, side, text, image) {
  document.getElementById("BhabinNotify").innerHTML = "Bhabin has sent a message.";
  
  const msgHTMLBhabinImage = `
  <div class="msgJohn ${side}-msg">
    <div class="msg-img" style="background-image: url(${img})"></div>

    <div class="msg-bubbleJohn">
      <div class="msg-infoJohn">
        <div class="msg-info-nameJohn">${name}</div>
        <div class="msg-info-timeJohn">${formatDate(new Date())}</div>
      </div>

      <div class="msg-textJohn">
      <h1> ${text}</h1>
      <img src="images/${image}"  width="200" height="200">

      </div>
    </div>
  </div>
`;

const msgHTMLBhabin = `
<div class="msgBhabin ${side}-msg">
  <div class="msg-img" style="background-image: url(${img})"></div>

  <div class="msg-bubbleBhabin">
    <div class="msg-infoBhabin">
      <div class="msg-info-nameBhabin">${name}</div>
      <div class="msg-info-timeBhabin">${formatDate(new Date())}</div>
    </div>
    <div class="msg-textBhabin">
    ${text}</div>
  </div>
</div>
`;

if(image === "" || image === undefined){
  msgerChatBhabin.insertAdjacentHTML("beforeend", msgHTMLBhabin);
  msgerChatBhabin.scrollTop += 500;
}
else{
  msgerChatBhabin.insertAdjacentHTML("beforeend", msgHTMLBhabinImage);
      msgerChatBhabin.scrollTop += 500;
}
}
function get(selector, root = document) {
  return root.querySelector(selector);
}

function formatDate(date) {
  const h = "0" + date.getHours();
  const m = "0" + date.getMinutes();

  return `${h.slice(-2)}:${m.slice(-2)}`;
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function search() {
  let input = document.getElementById('searchbar').value
  input=input.toLowerCase();
  let x = document.getElementsByClassName('tablinks');
    
  for (i = 0; i < x.length; i++) { 
      if (!x[i].innerHTML.toLowerCase().includes(input)) {
          x[i].style.display="none";
      }
      else {
          x[i].style.display="list-item";                 
      }
  }
}


function robResponse(name) {
const r = rob_MSGS.length - 1;
  const msgText = rob_MSGS[r];
  const delay = msgText.split(" ").length * 100;
  if(name=="John"){
    var myFileJohn = document.getElementById("myFileJohn").value;
  let substringJohn = myFileJohn.substring(12);
    setTimeout(() => {
      appendMessageJohn(rob_NAME, rob_IMG, "left", msgText,substringJohn);
    }, delay);
    USER_ARRAYJohn[0] = personArrayJohn[0];
  } else if(name=="Anik"){
    var myFileAnik = document.getElementById("myFileAnik").value;
  let substringAnik = myFileAnik.substring(12);
    setTimeout(() => {
      appendMessageAnik(rob_NAME, rob_IMG, "left", msgText,substringAnik);
    }, delay);
    USER_ARRAYAnik[0] = personArrayAnik[0];
  }
  else if(name=="Bhabin"){
    var myFileBhabin = document.getElementById("myFileBhabin").value;
  let substringBhabin = myFileBhabin.substring(12);
    setTimeout(() => {
      appendMessageBhabin(rob_NAME, rob_IMG, "left", msgText,substringBhabin);
    }, delay);
    USER_ARRAYBhabin[0] = personArrayBhabin[0];
  }
}

