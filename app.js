const myQuestions = [
    {
      question: "Q1: Who invented JavaScript?",
        a: "Douglas Crockford",
        b: "Sheryl Sandberg",
        c: "Dennis Ritchie",
        d: "Brendan Eich" ,
        ans: 'ans4'
    },

    {
      question: "Q2: Which one of these is a JavaScript package manager?",
        a: "npm",   
        b: "TypeScript",
        c: "Node.js",
        d: "React",
        ans: 'ans1'
    },

    {
      question: "Q3: Which tool can you use to ensure code quality?",
    
        a: "Angular",
        b: "jQuery",
        c: "RequireJS",
        d: "ESLint",
        ans: 'ans4'
  
    },

    {
		question: "Q4: What is 10/2?",
      a: '5',
			b: '3',
			c: '115',
      d: "105",
      ans: 'ans1'
	
	},	
  ];

// UI variable

const question=document.querySelector('.question-heading'),
      option1=document.querySelector('#option1'),
      option2=document.querySelector('#option2'),
      option3=document.querySelector('#option3'),
      option4=document.querySelector('#option4'),
      submit=document.querySelector('#submit'),
      answers=document.querySelectorAll('.answer'),
      showScore=document.querySelector('#showScore');


let questionCount=0;
let score=0;

//function declearing
const loadQuestion=()=>{
  const questionList=myQuestions[questionCount];
  
  question.innerHTML=questionList.question;

  option1.innerHTML=questionList.a;
  option2.innerHTML=questionList.b;
  option3.innerHTML=questionList.c;
  option4.innerHTML=questionList.d;
}      

// Function calling      
loadQuestion();


const getCheckAnwser = () =>{
  let answer;

  answers.forEach((currAnsElem) => {
    if(currAnsElem.checked){
      answer=currAnsElem.id;
    }
  
  });
  return answer;
}
const  deSelectAll=()=>{
  answers.forEach((currAnsElem)=> currAnsElem.checked=false);
}


// button eventListner
submit.addEventListener('click',() => {
  const checkedAnswer=getCheckAnwser();
  // console.log(checkedAnswer)
  if (checkedAnswer ===myQuestions[questionCount].ans) {
    score++;
    
  };
  questionCount++;

  deSelectAll();

  if (questionCount<myQuestions.length) {
    loadQuestion();
    
  }
  else{
    showScore.innerHTML=`
       <h3> You Scored ${score}/${myQuestions.length}</h3>
       <button class='btn' onclick='location.reload()'>Play Again</button>
    
    `;

      showScore.classList.remove('scoreArea');
  }


});