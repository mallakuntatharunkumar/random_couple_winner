let couples=[
    {
        bf:"Tharun",
        gf:"Anupamma"
    },

    {
        bf:"Prasanth",
        gf:"Kathirna"
    },

    {
        bf:"Deepu",
        gf:"Damini"
    },
    
    {
        bf:"Punith",
        gf:"Rashmi"
    },
    {
        bf:"Manoj",
        gf:"Anushka"
    },
    {
        bf:"Hemanth",
        gf:"Hasini"
    },
    {
        bf:"Harsha",
        gf:"Harshith"
    },
    {
        bf:"Kishore",
        gf:"Spandhana"
    },
    {
        bf:"Bhargava",
        gf:"Indu"
    }
];

function winnerOne(){
    let randomNumber=Math.floor(Math.random()*couples.length);
    let result=document.getElementById("output");
    result.innerHTML=couples[randomNumber].bf + "💞" + couples[randomNumber].gf;
}

function winnerTwo(){
    let randomNumber=Math.floor(Math.random()*couples.length);
    let result=document.getElementById("output");
    result.innerHTML=couples[randomNumber].bf + "💞" + couples[randomNumber].gf;
}

function winnerThree(){
    let randomNumber=Math.floor(Math.random()*couples.length);
    let result=document.getElementById("output");
    result.innerHTML=couples[randomNumber].bf + "💞" + couples[randomNumber].gf;
}
