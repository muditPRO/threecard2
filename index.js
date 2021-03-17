// // alert("hello");
// $("button").on("click",dothis);
// function dothis()
// {

//     $("h1").toggle();
//     // alert("hello");
// }

$("button").on("click",dothis);
var scorea=0;
var scoreb=0;
var pointA = 100;
    var pointB = 100;
    
function dothis()
{
    
     document.getElementById('img').style.fontSize="200 px";
    var i=Math.random();
    i=i*13;
    i=Math.floor(i)+1;
    console.log(i);
    var j=Math.random();
    var t;
    j=j*4;
    j=Math.floor(j)+1;
    if(j===1)
    {
        t='C';
    }
    else if(j===2)
    {
        t='D';
    }
    else if(j===3)
    {
        t='H';
    }
    else
     {
         t='S'
     }
     var a1=i;
    //  console.log(t);
    var x="/cards/"+i+t+".png"
    console.log(x);

    document.getElementById('img').src=x;
    

    var m=Math.random();
    m=m*13;
    m=Math.floor(m)+1;
    console.log(i);
    var j=Math.random();
    var t;
    j=j*4;
    j=Math.floor(j)+1;
    if(j===1)
    {
        t='C';
    }
    else if(j===2)
    {
        t='D';
    }
    else if(j===3)
    {
        t='H';
    }
    else
     {
         t='S'
     }
     var a2=m;
    //  console.log(t);
    var x="/cards/"+m+t+".png"
    console.log(x);

    document.getElementById('img2').src=x;
    var m=Math.random();
    m=m*13;
    m=Math.floor(m)+1;
    console.log(i);
    var j=Math.random();
    var t;
    j=j*4;
    j=Math.floor(j)+1;
    if(j===1)
    {
        t='C';
    }
    else if(j===2)
    {
        t='D';
    }
    else if(j===3)
    {
        t='H';
    }
    else
     {
         t='S'
     }
     var a3=m;
    //  console.log(t);
    var x="/cards/"+m+t+".png"
    console.log(x);

    document.getElementById('img3').src=x;







    var i=Math.random();
    i=i*13;
    i=Math.floor(i)+1;
    console.log(i);
    var j=Math.random();
    var t;
    j=j*4;
    j=Math.floor(j)+1;
    if(j===1)
    {
        t='C';
    }
    else if(j===2)
    {
        t='D';
    }
    else if(j===3)
    {
        t='H';
    }
    else
     {
         t='S'
     }
     var b1=i;
    //  console.log(t);
    var x="/cards/"+i+t+".png"
    console.log(x);

    document.getElementById('Bimg').src=x;
    

    var m=Math.random();
    m=m*13;
    m=Math.floor(m)+1;
    console.log(i);
    var j=Math.random();
    var t;
    j=j*4;
    j=Math.floor(j)+1;
    if(j===1)
    {
        t='C';
    }
    else if(j===2)
    {
        t='D';
    }
    else if(j===3)
    {
        t='H';
    }
    else
     {
         t='S'
     }
     var b2=m;
    //  console.log(t);
    var x="/cards/"+m+t+".png"
    console.log(x);

    document.getElementById('Bimg2').src=x;
    var m=Math.random();
    m=m*13;
    m=Math.floor(m)+1;
    console.log(i);
    var j=Math.random();
    var t;
    j=j*4;
    j=Math.floor(j)+1;
    if(j===1)
    {
        t='C';
    }
    else if(j===2)
    {
        t='D';
    }
    else if(j===3)
    {
        t='H';
    }
    else
     {
         t='S'
     }
     var b3=m;
    //  console.log(t);
    var x="/cards/"+m+t+".png"
    console.log(x);

    document.getElementById('Bimg3').src=x;
    var ca=0;
    var cb=0;
    if(a1>b1)
    {
         ca+=1;
    }
    else if(b1>a1)
    {
        cb+=1;
    }
    else
    {
        ca+=0;
    }
    if(a2>b2)
    {
         ca+=1;
    }
    else if(b2>a2)
    {
        cb+=1;
    }
    else
    {
        ca+=0;
    }
   

    if(a3>b3)
    {
         ca+=1;
    }
    else if(b3>a3)
    {
        cb+=1;
    }
    else
    {
        ca+=0;
    }
    
    // total points of bets
    
    var bet1 =document.getElementById('beta').value;
    var bet2 =document.getElementById('betb').value;
    // console.log(bet1);
    

    if(ca>cb)
    {
        var ans="player 1 wins";
        pointA+=Number(bet1);
        pointB-=Number(bet1);

        scorea+=1;
    }
    if(cb>ca)
    {
        var ans="player 2 wins";
        pointB+=Number(bet2);
        pointA-=Number(bet2);
        scoreb+=1;
    }
    
    if(ca==cb)
    {
        var ans="OH IT IS A TIE";
    }
    if(pointB<0)
    {
        var result="PLAYER 1 IS THE ULTIMATE WINNER";
        console.log(result);
        document.getElementById('whowonthisround').textContent=result;
    
        

    }
    if(pointA<0)
    {
        var result="PLAYER 2 IS THE ULTIMATE WINNER";
        console.log(result);
        document.getElementById('whowonthisround').textContent=result;
        
      

    }
    console.log(ans);
    document.getElementById('whowonthisround').textContent=ans;
    // document.getElementById('A').textContent="SCORE OF A  =      "+scorea;
    document.getElementById('A').textContent="Points of A :" + pointA;

    // document.getElementById('bscore').textContent="SCORE OF B  =     "+scoreb;
    document.getElementById('B').textContent="Points of B:" + pointB;


     


 

}