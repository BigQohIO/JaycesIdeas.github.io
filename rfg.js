const facts = [
    { text: "The Earth is flat.", isTrue: false },
    { text: "Honey never spoils.", isTrue: true },
    { text: "Bananas grow on trees.", isTrue: false },
    { text: "A day on Venus is longer than a year on Venus.", isTrue: true },
    { text: "Octopuses have three hearts.", isTrue: true },
    { text: "Humans share 50% of their DNA with bananas.", isTrue: true },
    { text: "The Eiffel Tower can be 15 cm taller during the summer.", isTrue: true },
    { text: "Wombat poop is cube-shaped.", isTrue: true },
    { text: "A jiffy is an actual unit of time.", isTrue: true },
    { text: "Some cats are allergic to humans.", isTrue: true },
    { text: "Sharks are mammals.", isTrue: false },
    { text: "The longest wedding veil was longer than 63 football fields.", isTrue: true },
    { text: "Banging your head against a wall burns 150 calories an hour.", isTrue: true },
    { text: "A group of flamingos is called a 'flamboyance'.", isTrue: true },
    { text: "Humans can only breathe through their noses.", isTrue: false },
    { text: "The inventor of the Frisbee was turned into a Frisbee after he died.", isTrue: true },
    { text: "Cows have best friends.", isTrue: true },
    { text: "The shortest war in history lasted 38 minutes.", isTrue: true },
    { text: "The majority of your brain is fat.", isTrue: true },
    { text: "Sea otters hold hands when they sleep.", isTrue: true },
    { text: "Butterflies taste with their feet.", isTrue: true },
    { text: "Peanuts are not nuts; they are legumes.", isTrue: true },
    { text: "The world's largest desert is Antarctica.", isTrue: true },
    { text: "A snail can sleep for three years.", isTrue: true },
    { text: "Pineapple is a berry.", isTrue: true },
    { text: "Sloths can hold their breath longer than dolphins can.", isTrue: true },
    { text: "Polar bears have black skin under their white fur.", isTrue: true },
    { text: "Cheetahs can't roar like lions.", isTrue: true },
    { text: "The heart of a shrimp is located in its head.", isTrue: true },
    { text: "A bolt of lightning contains enough energy to toast 100,000 slices of bread.", isTrue: true },
    { text: "A group of crows is called a 'murder'.", isTrue: true },
    { text: "The world's smallest reptile was discovered in 2021.", isTrue: true },
    { text: "Some trees can grow 100 feet in just 10 years.", isTrue: true },
    { text: "Rats can laugh when they are tickled.", isTrue: true },
    { text: "Ostriches can run faster than horses.", isTrue: true },
    { text: "A day on Mercury is longer than a year on Mercury.", isTrue: true },
    { text: "There are more stars in the universe than grains of sand on Earth.", isTrue: true },
    { text: "Koalas have fingerprints that are almost indistinguishable from human fingerprints.", isTrue: true },
    { text: "The moon is moving away from the Earth at a rate of about 1.5 inches per year.", isTrue: true },
    { text: "Squirrels plant thousands of new trees each year simply by forgetting where they buried their acorns.", isTrue: true },
    { text: "The shortest commercial flight in the world is in Scotland, lasting just 57 seconds.", isTrue: true },
    { text: "Tigers have striped skin, not just striped fur.", isTrue: true },
    { text: "Wombats can run at 25 mph.", isTrue: true },
    { text: "A blue whale's heart is the size of a small car.", isTrue: true },
    { text: "Elephants are the only animals that can't jump.", isTrue: true },
    { text: "Cows have best friends and get stressed when separated.", isTrue: true },
    { text: "Dolphins have names for each other.", isTrue: true },
    { text: "Humans are the only animals that blush.", isTrue: true },
    { text: "There are more fake flamingos in the world than real ones.", isTrue: true },
    { text: "The word 'nerd' was first coined by Dr. Seuss in 'If I Ran the Zoo'.", isTrue: true },
    { text: "Mantis shrimp can see more colors than humans.", isTrue: true },
    { text: "The dot over the letters 'i' and 'j' is called a tittle.", isTrue: true },
    { text: "The inventor of the microwave oven was working on radar technology.", isTrue: true },
    { text: "Scotland's national animal is a unicorn.", isTrue: true },
    { text: "Some species of jellyfish are immortal.", isTrue: true },
    { text: "Kangaroos can't walk backward.", isTrue: true },
    { text: "Venus is the hottest planet in our solar system.", isTrue: true },
    { text: "The world's largest snowflake was recorded at 15 inches wide.", isTrue: true },
    { text: "The Great Wall of China is not visible from space without aid.", isTrue: true },

    // New false facts
    { text: "Goldfish have a three-second memory.", isTrue: false },
    { text: "Bats are blind.", isTrue: false },
    { text: "People swallow an average of eight spiders a year while sleeping.", isTrue: false },
    { text: "Cracking your knuckles causes arthritis.", isTrue: false },
    { text: "You can't hum while holding your nose closed.", isTrue: false },
    { text: "If you touch a baby bird, its mother will reject it.", isTrue: false },
    { text: "Humans only use 10% of their brains.", isTrue: false },
    { text: "Lightning never strikes the same place twice.", isTrue: false },
    { text: "The color red makes bulls angry.", isTrue: false },
    { text: "Sugar causes hyperactivity in children.", isTrue: false },
    { text: "Vikings wore horned helmets.", isTrue: false },
    { text: "Napoleon Bonaparte was extremely short.", isTrue: false },
    { text: "You can see the Great Wall of China from space.", isTrue: false },
    { text: "The Great Pyramid of Giza was built by slaves.", isTrue: false },
    { text: "Shaving makes hair grow back thicker.", isTrue: false },
    { text: "The majority of your brain is water.", isTrue: false },
    { text: "All swans are white.", isTrue: false },
    { text: "Mount Everest is the tallest mountain in the world.", isTrue: false },
    { text: "Chameleons change color to blend in with their surroundings.", isTrue: false },
    { text: "Bananas grow on trees.", isTrue: false },
    { text: "The human body has four lungs.", isTrue: false },
    { text: "Humans and dinosaurs coexisted.", isTrue: false },
    { text: "Eating carrots improves your eyesight.", isTrue: false },
    { text: "Dogs see in black and white.", isTrue: false },
    { text: "Coffee stunts your growth.", isTrue: false },
    { text: "A goldfish can live in a bowl forever.", isTrue: false },
    { text: "Pigeons are a type of bird that only live in cities.", isTrue: false },
    { text: "Waking sleepwalkers is dangerous.", isTrue: false },
    { text: "Dogs' mouths are cleaner than humans'.", isTrue: false },
    { text: "You can't get a sunburn on a cloudy day.", isTrue: false },
    { text: "Humans have more than five senses.", isTrue: false },
];

let currentFactIndex = 0;
let score = 0;

document.getElementById('next-button').addEventListener('click', nextFact);
document.getElementById('true-button').addEventListener('click', () => checkAnswer(true));
document.getElementById('false-button').addEventListener('click', () => checkAnswer(false));

function nextFact() {
    currentFactIndex = Math.floor(Math.random() * facts.length);
    document.getElementById('fact-display').innerText = facts[currentFactIndex].text;
    document.getElementById('message').innerText = "";
}

function checkAnswer(userAnswer) {
    if (userAnswer === facts[currentFactIndex].isTrue) {
        score++;
        document.getElementById('message').innerText = "Correct!";
    } else {
        document.getElementById('message').innerText = "Wrong!";
    }
    document.getElementById('score').innerText = "Score: " + score;
}

// Initialize with the first fact
nextFact();
