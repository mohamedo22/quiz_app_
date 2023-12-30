let page = 0;
let i = "";
let result = 0;
let qustions_array = [ {
    "qustion":"What does HTML stand for?",
    "Answer1" : "A)Hyper Text Markup Language",
    "Answer2" : "B) High-Level Text Management Language",
    "Answer3" : "C) Hyperlink and Text Markup Language",
    "Answer4" : "D) High-Level Markup Language",
    "right_answer": 1,
},{
    "qustion":"How can you apply inline CSS to an HTML element?",
    "Answer1" : "A) Using the <style> tag",
    "Answer2" : "B) Using the `class` attribute",
    "Answer3" : "C)Using the `style` attribute",
    "Answer4" : "D) Using the `link` tag",
    "right_answer":3,
},{
    "qustion":"Which CSS selector is used to select elements with a specific class?",
    "Answer1" : "A) #",
    "Answer2" : "B) .",
    "Answer3" : "C) :",
    "Answer4" : "D) /",
    "right_answer":2,
}];
function getanswer(j)
{
  i = j;
  if(j == qustions_array[page-1].right_answer)
  {
    ++result;
  }
  if(j == 1)
  {
    document.getElementById("ana").style.backgroundColor = "purple";
    document.getElementById("anb").style.backgroundColor = "";
    document.getElementById("anc").style.backgroundColor = "";
    document.getElementById("and").style.backgroundColor = "";
  }
  if(j == 2)
  {
    document.getElementById("ana").style.backgroundColor = "";
    document.getElementById("anb").style.backgroundColor = "purple";
    document.getElementById("anc").style.backgroundColor = "";
    document.getElementById("and").style.backgroundColor = "";
  }
  if(j == 3)
  {
    document.getElementById("ana").style.backgroundColor = "";
    document.getElementById("anb").style.backgroundColor = "";
    document.getElementById("anc").style.backgroundColor = "purple";
    document.getElementById("and").style.backgroundColor = "";
  }
  if(j == 4)
  {
    document.getElementById("ana").style.backgroundColor = "";
    document.getElementById("anb").style.backgroundColor = "";
    document.getElementById("anc").style.backgroundColor = "";
    document.getElementById("and").style.backgroundColor = "purple";
  }
}
let q = document.getElementById("qus");
let answera = document.getElementById("ana");
let answerb = document.getElementById("anb");
let answerc = document.getElementById("anc");
let answerd = document.getElementById("and");
    q.style.opacity = "0";
    answera.style.opacity = "0";
    answerb.style.opacity = "0";
    answerc.style.opacity = "0";
    answerd.style.opacity = "0";
function submit()
{
    q.style.opacity = "0";
    answera.style.opacity = "0";
    answerb.style.opacity = "0";
    answerc.style.opacity = "0";
    answerd.style.opacity = "0";
    ++page;
    console.log(qustions_array.length)
    if(page > qustions_array.length)
    {
        document.getElementById("resultp").style.opacity = "1";
        document.getElementById("resultp").textContent = `Your result is ${result}`;
        q.style.opacity = "0";
        answera.style.opacity = "0";
        answerb.style.opacity = "0";
        answerc.style.opacity = "0";
        answerd.style.opacity = "0";
        document.getElementById("cont_of_q").removeChild(document.getElementById("cont_of_cr"));
    }
    document.getElementById("ana").style.backgroundColor = "";
    document.getElementById("anb").style.backgroundColor = "";
    document.getElementById("anc").style.backgroundColor = "";
    document.getElementById("and").style.backgroundColor = "";
    document.getElementById("start-btn").style.opacity = "0";
    document.getElementById(`cont_of_cr`).innerHTML += `<div class="circle"></div>`;
    setTimeout(()=>{
    q.textContent = qustions_array[page-1].qustion;
    answera.textContent = qustions_array[page-1].Answer1;
    answerb.textContent = qustions_array[page-1].Answer2;
    answerc.textContent = qustions_array[page-1].Answer3;
    answerd.textContent = qustions_array[page-1].Answer4;
    q.style.opacity = "1";
    answera.style.opacity = "1";
    answerb.style.opacity = "1";
    answerc.style.opacity = "1";
    answerd.style.opacity = "1";
    },1500);
}
function start()
{
    setTimeout(submit , 800);
}