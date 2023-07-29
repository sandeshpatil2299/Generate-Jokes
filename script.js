const jokes= document.querySelector("#jokeContent");
const btn= document.querySelector("#jokeBtn");

const getJokes= async() =>
{
   try
   {
         const setHeader=
      {
         headers:
         {
            Accept: "application/json"
         }
      }

      const res= await fetch("https://icanhazdadjoke.com/", setHeader);
      const data= await res.json();
      jokes.innerHTML= data.joke; 
   }catch(error)
   {
      console.log(`The error is ${error}`);
   }
}

btn.addEventListener("click", getJokes);
getJokes();