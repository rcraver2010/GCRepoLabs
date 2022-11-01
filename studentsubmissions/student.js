let submissions = [{ name: "Jane", score: 95, date: "2020-01-24", passed: true}, 
                    {name: "Joe", score: 77, date: "2018-05-14", passed: true}, 
                    {name: "Jack", score: 59, date: "2019-07-05", passed: false}, 
                    {name: "Jill", score: 88, date: "2020-04-22", passed: true}];

// // function addSubmission(array, newName, newScore, newDate) {
// //     let addScore = {
// //         name: newName,
// //         score: newScore,
// //         date: newDate,
// //         passed: newScore >= 60,
// //     }
// //     array.push(addScore);
// //     console.log(submissions);
// // }
// // addSubmission(submissions, "Jessica", 75, "2020-01=01");


// // function deleteSubmissionByIndex (array, name) {
// //     array.splice(0,1);
// //     console.log(submissions);
// // }
// // deleteSubmissionByIndex(submissions, "Jane");

// function deleteSubmissionByName(array, name) {
//    let index = array.findIndex((item) {
//     return item.name === name;
//    } )
// }

// function editSubmissions(array, index, score) {
//     array[index.score] = score;
//     array[index].passed = score >= 60;
// };
// editSubmissions(submissions, 85, 50);
// console.log(submissions);

// function findSubmissionsByName(array, name) {
//     const found = array.find(array => array.name === name);
// }
// console.log(submissions, "jill");

// function findLowestScore(array) {
//     let lowScore = array[0];
//     array.foreach((item) => {
//         if (item.score < newScore) {
//             newScore = item
//         }
//     })
//     return newScore;
// }
// console.log(findLowestScore, submissions);

function findAveragescore(array) {

}
console.log();

// function filterPass(array) {

// }
// console.log();

// function filter90AndAbove(array) {
//     return array.filter(item) = {
//         return item.score >= 90;
//     }
// }
// console.log();