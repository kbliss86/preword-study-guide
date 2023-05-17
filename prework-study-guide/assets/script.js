var topics = ['HTML', 'CSS', 'Git', 'JavaScript'];

<<<<<<< HEAD
<<<<<<< HEAD
for (var x =  0; x < topics.length; x++) {
console.log(topics[x]);
}
/*
if (topic === 'HTML') {
    console.log("Let's Study HTML!");
} else if (topic === 'CSS') {
    console.loge("Let's study CSS!");
} else if (topic === 'Git') {
    console.log("Let's study Git!");
} else if (topic === "JavaScript!") {
    console.log("Let's study JavaScript!");
}
*/
=======
=======
>>>>>>> 1af735c12cda2c5dff79ccb93ee9d290bd166fe4
var randomTopic = topics[Math.floor(Math.random() * topics.length)];

function listTopics() {

    for (var x =  0; x < topics.length; x++) {
        console.log(topics[x]);
    }
}
function selectTopic() {
    if (randomTopic === 'HTML') {
        console.log("Let's Study HTML!");
    } else if (randomTopic === 'CSS') {
        console.log("Let's study CSS!");
    } else if (randomTopic === 'Git') {
        console.log("Let's study Git!");
    } else if (randomTopic === "JavaScript!") {
        console.log("Let's study JavaScript!");
    } else {
        console.log('Please try again!');
    }
}

console.log('Here are the topics we learned through prework:');

listTopics();

console.log('Which topic should we study first?');
<<<<<<< HEAD
selectTopic();
>>>>>>> 0b77ccca36f25e8de174e6ab4751bd3cd829bed6
=======
selectTopic();
>>>>>>> 1af735c12cda2c5dff79ccb93ee9d290bd166fe4
