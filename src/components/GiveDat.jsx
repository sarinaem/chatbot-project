
// // const API_KEY = 'import.meta.env.REACT_APP_API_KEY';

// const GiveDat = async () => {
//     fetch("https://api.dictionaryapi.dev/api/v2/entries/en/<word>")
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();  
//       })
//       .then(data => {
//         console.log(data);
//         const definitions = data[0].meanings[0].definitions;
//         definitions.forEach(definition => {
//           console.log(definition.definition);  
//         });
//       })
//       .catch(error => {
//         console.error('There was a problem with the fetch operation:', error);
//       });
// };

// export default GiveDat;