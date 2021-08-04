const quiz=[
    {
        question:"Q1 what is the full form of HTML",
        a:"hello to my land",
        b:"hey text markup language",
        c:"hyper text markup language",
        d:"none",
        ans:"ans3"
    },
    {
        question:"Q2 what is the full form of css",
        a:"cell shop scheme",
        b:"cascading style sheets",
        c:"car show share",
        d:"none",
        ans:"ans2"
    },
    {
        question:"Q3 what is the full form of HTTP",
        a:"h t t p",
        b:"hyper text transfer protocol",
        c:"all",
        d:"none",
        ans:"ans2"
    },
    {
        question:"Q4 what is the full form of js",
        a:"js",
        b:"javascript",
        c:"all",
        d:"none",
        ans:"ans2"
    }

];


const question=document.querySelector('.q');
const option1=document.querySelector(' #option1');
const option2=document.querySelector('#option2');
const option3=document.querySelector('#option3');
const option4=document.querySelector('#option4');
const submit=document.querySelector('#submit');
let a=document.querySelectorAll('.answer');
const showScore=document.querySelector('#showScore');
let quecont=0;
let score=0;
const loadQuestion=()=>{
    
//    console.log(quiz[0].question);
const ql=quiz[quecont];
question.innerText=ql.question;
option1.innerHTML=ql.a;
option2.innerHTML=ql.b;
option3.innerHTML=ql.c;
option4.innerHTML=ql.d;

}
loadQuestion();

const getCheckAns=()=>{
    let ans;
    a.forEach((curAnsElem)=>{
        if(curAnsElem.checked){
            ans=curAnsElem.id;
        }
    })
    return ans;


};
const deSelectAll=()=>{
    a.forEach(curAnsElem=>curAnsElem.checked=false);
};
submit.addEventListener('click',()=>{
    
  
    const chekans=getCheckAns();

    console.log(chekans);
    if(chekans==quiz[quecont].ans){
        score++;
    };
    deSelectAll();
    quecont++;
    if(quecont<quiz.length){
        loadQuestion();
    }
    else{
        showScore.innerHTML=`<h3>You scored ${score}/${quiz.length}</h3>
        <button class="btn" onclick="location.reload()">Play Again</button>`;
        showScore.classList.remove('scoreArea');
    }

});