// https://restcountries.com/v3.1/all  //all countries
// https://restcountries.com/v3.1/name/{name} // by country name

const getCountries = (name) =>{
    const API_URL = `https://restcountries.com/v3.1/name/${name}`;

        fetch(API_URL)
        .then(res => res.json)
        .then(data => {
            console.log(data);
        })
        .catch((err)=>{

        console.error('Failed to fetch country : ',err);
    })

}
getCountries('kenya');
// getCountries();



// fetch('https://restcountries.com/v3.1/all')
//   .then(response => response.json())
//   .then(data => {
//     console.log(data)
//   })
//   .catch(error => {
//     console.log(error)
//   })