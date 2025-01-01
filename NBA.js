const playerRarities = {
    common: { range: [65, 68], chance: 2 },
    uncommon: { range: [69, 73], chance: 8 },
    rare: { range: [74, 76], chance: 16 },
    epic: { range: [77, 79], chance: 64 },
    legendary: { range: [80, 82], chance: 256 },
    mythical: { range: [83, 86], chance: 5768 },
    demonic: { range: [87, 92], chance: 164782 },
    disastrous: { range: [93, 95], chance: 256e15 },
    godly: { range: [95, 98], chance: 8e17 },
    beyondGodly: { range: [99, 100], chance: 999999999999999999 }
};

// Expanded player list with OVR
const players = {
    common: [
        { name: "Bruce Bowen", ovr: 67 }, { name: "Chris Dudley", ovr: 66 }, 
        { name: "Zaza Pachulia", ovr: 67 }, { name: "Kendrick Perkins", ovr: 68 }, 
        { name: "Jason Kapono", ovr: 68 }, { name: "Mario Chalmers", ovr: 67 },
        { name: "Ramon Sessions", ovr: 66 }, { name: "Tyler Hansbrough", ovr: 67 },
        { name: "Kyle Singler", ovr: 65 }, { name: "Norris Cole", ovr: 68 }
    ],
    uncommon: [
        { name: "Kyle Korver", ovr: 71 }, { name: "J.R. Smith", ovr: 70 }, 
        { name: "Terrence Ross", ovr: 69 }, { name: "Michael Beasley", ovr: 70 }, 
        { name: "Ersan Ilyasova", ovr: 72 }, { name: "Channing Frye", ovr: 73 },
        { name: "Jason Smith", ovr: 69 }, { name: "Wesley Matthews", ovr: 72 },
        { name: "Bojan Bogdanovic", ovr: 71 }, { name: "C.J. McCollum", ovr: 73 }
    ],
    rare: [
        { name: "DeAndre Jordan", ovr: 75 }, { name: "Jamal Crawford", ovr: 74 }, 
        { name: "Robert Horry", ovr: 75 }, { name: "Andrei Kirilenko", ovr: 75 }, 
        { name: "Toni Kukoc", ovr: 76 }, { name: "Kevin Love", ovr: 76 },
        { name: "Larry Nance Jr.", ovr: 74 }, { name: "Josh Smith", ovr: 75 },
        { name: "Marvin Williams", ovr: 75 }, { name: "Nene Hilario", ovr: 76 }
    ],
    epic: [
        { name: "Alonzo Mourning", ovr: 78 }, { name: "Chris Webber", ovr: 77 }, 
        { name: "Paul George", ovr: 79 }, { name: "Vince Carter", ovr: 78 }, 
        { name: "Larry Bird", ovr: 85 }, { name: "David West", ovr: 78 },
        { name: "Carmelo Anthony", ovr: 79 }, { name: "Chris Bosh", ovr: 78 },
        { name: "Klay Thompson", ovr: 79 }, { name: "DeMar DeRozan", ovr: 78 }
    ],
    legendary: [
        { name: "Paul Pierce", ovr: 81 }, { name: "Clyde Drexler", ovr: 80 }, 
        { name: "Steve Nash", ovr: 82 }, { name: "Isiah Thomas", ovr: 81 }, 
        { name: "Kevin McHale", ovr: 80 }, { name: "Reggie Miller", ovr: 81 },
        { name: "Gary Payton", ovr: 80 }, { name: "Walt Frazier", ovr: 81 },
        { name: "Scottie Pippen", ovr: 82 }, { name: "Alonzo Mourning", ovr: 81 }
    ],
    mythical: [
        { name: "Kevin Durant", ovr: 85 }, { name: "Scottie Pippen", ovr: 84 }, 
        { name: "Shaquille O'Neal", ovr: 86 }, { name: "Larry Bird", ovr: 85 }, 
        { name: "Dirk Nowitzki", ovr: 84 }, { name: "Dwyane Wade", ovr: 85 },
        { name: "Kawhi Leonard", ovr: 85 }, { name: "Tim Duncan", ovr: 84 },
        { name: "James Harden", ovr: 85 }, { name: "Anthony Davis", ovr: 84 }
    ],
    demonic: [
        { name: "Kobe Bryant", ovr: 91 }, { name: "Magic Johnson", ovr: 90 }, 
        { name: "Bill Russell", ovr: 89 }, { name: "Wilt Chamberlain", ovr: 92 }, 
        { name: "Larry Bird", ovr: 90 }, { name: "Oscar Robertson", ovr: 91 },
        { name: "Kevin Garnett", ovr: 90 }, { name: "Shaquille O'Neal", ovr: 91 },
        { name: "Jerry West", ovr: 90 }, { name: "Paul Arizin", ovr: 89 }
    ],
    disastrous: [
        { name: "Michael Jordan", ovr: 96 }, { name: "LeBron James", ovr: 97 }, 
        { name: "Kareem Abdul-Jabbar", ovr: 95 }, { name: "Bill Walton", ovr: 94 }, 
        { name: "Hakeem Olajuwon", ovr: 93 }, { name: "Kevin Durant", ovr: 95 },
        { name: "Tim Duncan", ovr: 94 }, { name: "David Robinson", ovr: 93 },
        { name: "Stephen Curry", ovr: 94 }, { name: "Charles Barkley", ovr: 95 }
    ],
    godly: [
        { name: "Kevin Garnett", ovr: 94 }, { name: "Tim Duncan", ovr: 95 }, 
        { name: "Shaquille O'Neal", ovr: 93 }, { name: "Stephen Curry", ovr: 92 }, 
        { name: "Allen Iverson", ovr: 91 }, { name: "Chris Paul", ovr: 92 },
        { name: "James Harden", ovr: 93 }, { name: "Kawhi Leonard", ovr: 91 },
        { name: "Paul George", ovr: 92 }, { name: "Russell Westbrook", ovr: 92 }
    ],
    beyondGodly: [
        { name: "Michael Jordan", ovr: 100 }, { name: "Wilt Chamberlain", ovr: 100 },
        { name: "LeBron James", ovr: 100 }, { name: "Kareem Abdul-Jabbar", ovr: 100 }
    ]
};

let team = [];
let inventory = [];
let lastRolledPlayer = null;
let rollCount = 0;

document.getElementById('roll-button').addEventListener('click', () => {
    const randomRoll = Math.floor(Math.random() * 256);
    let player;

    for (const [rarity, info] of Object.entries(playerRarities)) {
        if (randomRoll < info.chance) {
            const randomIndex = Math.floor(Math.random() * players[rarity].length);
            player = players[rarity][randomIndex];

            // Prevent back-to-back rolls of the same player
            if (player.name === lastRolledPlayer?.name) {
                return; // Allow a new roll
            }

            lastRolledPlayer = player;
            team.push(player);
            rollCount++;
            break;
        }
    }

    document.getElementById('result').innerText = `You rolled: ${player.name} (${player.ovr} OVR, ${getRarityName(player)})`;
    updateTeamList();

    // Move previous players to inventory after 2 rolls
    if (rollCount % 2 === 0) {
        inventory.push(...team.splice(0, team.length)); // Move all players to inventory
        updateInventory();
    }

    // Hide player name after 5 rolls
    if (rollCount >= 5) {
        document.getElementById('result').innerText = '';
        rollCount = 0; // Reset roll count
    }
});

function getRarityName(player) {
    for (const [rarity, playerList] of Object.entries(players)) {
        if (playerList.includes(player)) {
            return rarity.charAt(0).toUpperCase() + rarity.slice(1);
        }
    }
    return '';
}

function updateTeamList() {
    const teamList = document.getElementById('team-list');
    teamList.innerHTML = '';
    team.forEach(player => {
        teamList.innerHTML += `<li>${player.name} (${player.ovr} OVR, ${getRarityName(player)})</li>`;
    });
}

// Inventory Modal
const inventoryModal = document.getElementById("inventory-modal");
const inventoryButton = document.getElementById("inventory-button");
const closeModal = document.getElementsByClassName("close")[0];

inventoryButton.onclick = function() {
    updateInventory(); // Ensure inventory is updated before opening
    inventoryModal.style.display = "block";
}

closeModal.onclick = function() {
    inventoryModal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target === inventoryModal) {
        inventoryModal.style.display = "none";
    }
}

function updateInventory() {
    const inventoryList = document.getElementById('inventory-list');
    inventoryList.innerHTML = '';
    inventory.forEach(player => {
        inventoryList.innerHTML += `<li>${player.name} (${player.ovr} OVR, ${getRarityName(player)})</li>`;
    });
}
