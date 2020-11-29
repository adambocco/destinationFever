
// let testButton = document.querySelector('#testButton');
// let countyDataArray = Object.values(countyData);
// countyDataArray.splice(3, 1); // Get rid of DC
// function compare(a, b) {
//     if (parseInt(a.population.countyPopulation) < parseInt(b.population.countyPopulation)) {
//         return -1;
//     }
//     if (parseInt(a.population.countyPopulation) > parseInt(b.population.countyPopulation)) {
//         return 1;
//     }
//     return 0;
// }

// let xx = countyDataArray.sort(compare);




// let min = parseInt(countyDataArray[0].population.countyPopulation);
// let max = parseInt(countyDataArray[countyDataArray.length - 1].population.countyPopulation);
// let maxZeroed = max - min;


// const createColorDivisions = function () {
//     let sqrtMax = Math.pow(max, 1 / 5);
//     let multiplier = 255 / sqrtMax;
//     let colorMap = countyDataArray.map((value) => {
//         let shade = Math.pow(value.population.countyPopulation, 1 / 5) * multiplier;
//         return shade;
//     })
//     return colorMap;
// }
// let colorMap = createColorDivisions();


// // testButton.addEventListener("click", () => {
// //     countyDataArray.forEach((value, ii) => {
// //         setTimeout(() => {
// //             try {
// //                 let shade = 255 - colorMap[ii];
// //                 simplemaps_countymap_mapdata.state_specific[value.fip].color = `rgb(${shade},${shade},${shade})`
// //                 simplemaps_countymap.refresh_state(value.fip);
// //             } catch (err) { console.log(err) }
// //         }, ii * 5)
// //     })
// // })

// const colorPop = function () {
//     Object.keys(popDataByCounty).forEach((v) => {
//         let shade = 255 - (((popDataByCounty[v][2] - min) / range) * 255)
//         simplemaps_countymap_mapdata.state_specific['10001'].color = `rgb(${shade},${shade},${shade})`
//         simplemaps_countymap.refresh_state(v);
//     })
// };