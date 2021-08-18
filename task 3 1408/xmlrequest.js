//PRINT THE COUNTRY NAME AND POPULATION IN CONSOLE AS OBJECT.
//PRINT ONLY THE COUNTRY WHICH HAS POPULATION MORE THAN 100000000(10 CRORE).
const getcountries=() =>{
    const xhr= new XMLHttpRequest();
    xhr.open('GET','https://restcountries.eu/rest/v2/all');
    xhr.response='json';
    xhr.onload=()=>{
      const data=JSON.parse(xhr.response);
       // console.log(countries);
      for(let i=0;i<data.length;i++){
        if(data[i].population>=100000000){
          console.log({name:data[i].name,population:data[i].population});
        }
        // console.log(data[i].population);
      }
    }
  xhr.send();
  }
  getcountries();