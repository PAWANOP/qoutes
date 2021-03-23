const changeq=()=>{
 
  let randomindex =[
    {
      qoute : "Life is too short and sweet to be spent by cribbing and complaining about things. Here are some random quotes about the most wonderful gift that we've got",

      author : "Life"
    },
    {
      qoute : "Humor is richly rewarding to the person who employs it. It has some value in gaining and holding attention. But it has no persuasive value at all" ,

      author : "John Kenneth Galbraith"
    },
    {
      qoute : "God save me from my friends. I can protect myself from my enemies." ,

      author : "Claude Louis Hector de Villars"
    },
    {
      qoute : "The price of anything is the amount of life you exchange for it." ,

      author : "David Thoreau"
    },
    {
      qoute : "Life is like a landscape. You live in the midst of it but can describe it only from the vantage point of distance." ,

      author : "Charles Lindbergh"
    },
    {
      qoute : "A critic is someone who never actually goes to the battle, yet who afterwards comes out shooting the wounded." ,

      author : "Tyne Daly"
    }

  ];

    let btn = document.getElementById('generate');

    btn.addEventListener('click',()=>{
      let random =Math.floor(Math.random()*randomindex.length)
      console.log(random);

      document.getElementById('qoutes').textContent=randomindex[random].qoute;
      document.getElementById('author').textContent=randomindex[random].author;
    })

}


changeq();