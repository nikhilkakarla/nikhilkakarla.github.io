const diagram = document.querySelector(".diagram");
const playerPositions = {};
let currentJSONIndex = 0;

// Placeholder list of matching plays
const matchingPlays = [1500, 1000, 785, 35]; // Replace with your logic

// Function to update "Matching plays" text
function updateMatchingPlays() {
  const matchingPlaysText = document.getElementById("matching-plays");
  const matchingCount = matchingPlays[currentJSONIndex]; // Get matching count for the current JSON index
  matchingPlaysText.textContent = `Matching plays: ${matchingCount}`;
}

// Function to update player positions in memory
function updatePlayerPosition(playerId, x, y) {
  playerPositions[playerId] = { x, y };
}

// Drag and Drop functionality
function enableDragAndDrop(player) {
  player.addEventListener("mousedown", () => {
    player.style.cursor = "grabbing";
  });

  player.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("text/plain", player.id);
    e.dataTransfer.setDragImage(new Image(), 0, 0);
  });

  diagram.addEventListener("dragover", (e) => {
    e.preventDefault();
  });

  diagram.addEventListener("drop", (e) => {
    e.preventDefault();
    const playerId = e.dataTransfer.getData("text/plain");
    const player = document.getElementById(playerId);

    const rect = diagram.getBoundingClientRect();
    const x = e.clientX - rect.left - player.offsetWidth / 2;
    const y = e.clientY - rect.top - player.offsetHeight / 2;

    player.style.left = `${x}px`;
    player.style.top = `${y}px`;

    updatePlayerPosition(playerId, x, y);
  });
}

// Function to load player positions from a JSON string
function loadPlayerPositions(jsonString) {
  try {
    const positions = JSON.parse(jsonString);

    // Clear existing players
    diagram.innerHTML = "";

    // Add players from JSON
    Object.entries(positions).forEach(([playerId, { x, y }]) => {
      const player = document.createElement("div");
      player.classList.add("player");
      player.id = playerId;
      player.draggable = true;
      player.textContent = playerId.split("-")[1] || "P";
      player.style.position = "absolute";
      player.style.left = `${x}px`;
      player.style.top = `${y}px`;

      // Enable drag and drop functionality
      enableDragAndDrop(player);

      // Enable click to show popup
      enablePlayerClick(player);

      // Add player to the diagram
      diagram.appendChild(player);

      // Update player position in memory
      updatePlayerPosition(playerId, x, y);
    });

    // Update the matching plays count
    updateMatchingPlays();
  } catch (error) {
    console.error("Error loading player positions:", error);
  }
}

function enablePlayerClick(player) {
  player.addEventListener("click", () => {
    createPopup(player);
  });
}

function createPopup(player) {
  // Remove any existing popups
  const existingPopup = document.querySelector(".player-popup");
  if (existingPopup) existingPopup.remove();

  // Get the specific HTML for the player
  const htmlContent = playerHTMLContent[player.id] || `
    <h4>${player.id}</h4>
    <ul>
      <li><a href="#">Option 1</a></li>
      <li><a href="#">Option 2</a></li>
      <li><a href="#">Option 3</a></li>
      <li><a href="#">Option 4</a></li>
    </ul>
  `; // Default content if player ID not found

  // Create the popup container
  const popup = document.createElement("div");
  popup.classList.add("player-popup");

  // Add close button
  popup.innerHTML = `
    <button class="close-popup">&times;</button>
    ${htmlContent}
  `;

  // Position the popup above the player icon
  const rect = player.getBoundingClientRect();
  popup.style.position = "absolute";
  popup.style.left = `${rect.left + window.scrollX}px`;
  popup.style.top = `${rect.top + window.scrollY - 100}px`;

  // Append the popup to the document body
  document.body.appendChild(popup);

  // Add event listener to close button
  const closeButton = popup.querySelector(".close-popup");
  closeButton.addEventListener("click", () => {
    popup.remove();
  });

  // Close the popup when clicking outside
  document.addEventListener(
    "click",
    (e) => {
      if (!popup.contains(e.target) && e.target !== player) {
        popup.remove();
      }
    },
    { once: true }
  );
}

// Load the first JSON string on page load
document.addEventListener("DOMContentLoaded", () => {
  // Populate dropdowns
  setupPassingConceptDropdowns();

  // Load the diagram
  loadPlayerPositions(jsonStrings[currentJSONIndex]);
});

// Increment JSON index and load the next JSON string when dropdown changes
document.querySelectorAll("select").forEach((dropdown) => {
  dropdown.addEventListener("change", () => {
    currentJSONIndex = (currentJSONIndex + 1) % jsonStrings.length; // Increment and loop back if needed
    loadPlayerPositions(jsonStrings[currentJSONIndex]);
  });
});

// Export player positions on button click
// document.getElementById("create-cutup").addEventListener("click", () => {
//   const jsonData = JSON.stringify(playerPositions, null, 2);
//   const blob = new Blob([jsonData], { type: "application/json" });
//   const link = document.createElement("a");
//   link.href = URL.createObjectURL(blob);
//   link.download = "player_positions.json";
//   link.click();
// });

// Passing Concept Dropdown Setup
function setupPassingConceptDropdowns() {
  const leftDropdown = document.getElementById("left-passing-concept");
  const rightDropdown = document.getElementById("right-passing-concept");

  const passingConcepts = [
    "Slant",
    "Out",
    "In",
    "Comeback",
    "Corner",
    "Post",
    "Go",
    "Flat",
    "Screen",
    "Wheel",
  ];

  // Populate left and right dropdowns
  passingConcepts.forEach((concept) => {
    const leftOption = document.createElement("option");
    leftOption.textContent = concept;
    leftOption.value = concept.toLowerCase();
    leftDropdown.appendChild(leftOption);

    const rightOption = document.createElement("option");
    rightOption.textContent = concept;
    rightOption.value = concept.toLowerCase();
    rightDropdown.appendChild(rightOption);
  });

  // Event listeners to log or handle the selection
  leftDropdown.addEventListener("change", () => {
    console.log(`Left Side Passing Concept Selected: ${leftDropdown.value}`);
  });

  rightDropdown.addEventListener("change", () => {
    console.log(`Right Side Passing Concept Selected: ${rightDropdown.value}`);
  });
}

// List of JSON strings (instead of file URLs)
const jsonStrings = [
  `{
  "player-C1": {
    "x": 1037.5,
    "y": 132.7265625
  },
  "player-C2": {
    "x": 319.5,
    "y": 113.7265625
  },
  "player-FS": {
    "x": 550.5,
    "y": 57.7265625
  },
  "player-SS": {
    "x": 828,
    "y": 53.7265625
  },
  "player-W": {
    "x": 599.5,
    "y": 117.7265625
  },
  "player-M": {
    "x": 785,
    "y": 118.7265625
  },
  "player-J": {
    "x": 702.5,
    "y": 118.7265625
  },
  "player-NS": {
    "x": 915.5,
    "y": 121.7265625
  },
  "player-E1": {
    "x": 550.5,
    "y": 170.7265625
  },
  "player-E2": {
    "x": 805.5,
    "y": 171.7265625
  },
  "player-N": {
    "x": 672.5,
    "y": 163.7265625
  },
  "player-RT": {
    "x": 754,
    "y": 203.7265625
  },
  "player-RG": {
    "x": 708,
    "y": 199.7265625
  },
  "player-C": {
    "x": 662,
    "y": 197.7265625
  },
  "player-LG": {
    "x": 614,
    "y": 200.7265625
  },
  "player-LT": {
    "x": 567,
    "y": 203.7265625
  },
  "player-Q": {
    "x": 663,
    "y": 241.7265625
  },
  "player-H": {
    "x": 662,
    "y": 329.7265625
  },
  "player-F": {
    "x": 731,
    "y": 292.7265625
  },
  "player-X": {
    "x": 312,
    "y": 209.7265625
  },
  "player-Y": {
    "x": 800,
    "y": 206.7265625
  },
  "player-Z": {
    "x": 1029,
    "y": 232.7265625
  }
}`,


`{
  "player-C1": {
    "x": 1037.5,
    "y": 132.7265625
  },
  "player-C2": {
    "x": 319.5,
    "y": 113.7265625
  },
  "player-FS": {
    "x": 611.5,
    "y": 12.7265625
  },
  "player-SS": {
    "x": 812,
    "y": 92.7265625
  },
  "player-W": {
    "x": 534.5,
    "y": 168.7265625
  },
  "player-M": {
    "x": 718,
    "y": 120.7265625
  },
  "player-J": {
    "x": 623.5,
    "y": 119.7265625
  },
  "player-S": {
    "x": 838,
    "y": 168.7265625
  },
  "player-E1": {
    "x": 573.5,
    "y": 169.7265625
  },
  "player-E2": {
    "x": 760.5,
    "y": 167.7265625
  },
  "player-N": {
    "x": 672.5,
    "y": 163.7265625
  },
  "player-RT": {
    "x": 754,
    "y": 203.7265625
  },
  "player-RG": {
    "x": 708,
    "y": 199.7265625
  },
  "player-C": {
    "x": 662,
    "y": 197.7265625
  },
  "player-LG": {
    "x": 614,
    "y": 200.7265625
  },
  "player-LT": {
    "x": 567,
    "y": 203.7265625
  },
  "player-Q": {
    "x": 663,
    "y": 241.7265625
  },
  "player-H": {
    "x": 662,
    "y": 329.7265625
  },
  "player-F": {
    "x": 731,
    "y": 292.7265625
  },
  "player-X": {
    "x": 312,
    "y": 209.7265625
  },
  "player-Y": {
    "x": 800,
    "y": 206.7265625
  },
  "player-Z": {
    "x": 1029,
    "y": 232.7265625
  }
}`,


`{
  "player-C1": {
    "x": 1037.5,
    "y": 132.7265625
  },
  "player-C2": {
    "x": 319.5,
    "y": 113.7265625
  },
  "player-FS": {
    "x": 595.5,
    "y": 8.7265625
  },
  "player-SS": {
    "x": 833,
    "y": 19.7265625
  },
  "player-W": {
    "x": 534.5,
    "y": 168.7265625
  },
  "player-M": {
    "x": 697,
    "y": 119.7265625
  },
  "player-J": {
    "x": 576.5,
    "y": 120.7265625
  },
  "player-S": {
    "x": 849,
    "y": 168.7265625
  },
  "player-E1": {
    "x": 602.5,
    "y": 168.7265625
  },
  "player-E2": {
    "x": 785.5,
    "y": 167.7265625
  },
  "player-N": {
    "x": 716.5,
    "y": 164.7265625
  },
  "player-RT": {
    "x": 754,
    "y": 203.7265625
  },
  "player-RG": {
    "x": 708,
    "y": 199.7265625
  },
  "player-C": {
    "x": 662,
    "y": 197.7265625
  },
  "player-LG": {
    "x": 614,
    "y": 200.7265625
  },
  "player-LT": {
    "x": 567,
    "y": 203.7265625
  },
  "player-Q": {
    "x": 663,
    "y": 241.7265625
  },
  "player-H": {
    "x": 662,
    "y": 329.7265625
  },
  "player-F": {
    "x": 731,
    "y": 292.7265625
  },
  "player-X": {
    "x": 312,
    "y": 209.7265625
  },
  "player-Y": {
    "x": 800,
    "y": 206.7265625
  },
  "player-Z": {
    "x": 1029,
    "y": 232.7265625
  }
}`,

`{
  "player-C1": {
    "x": 1037.5,
    "y": 132.7265625
  },
  "player-C2": {
    "x": 319.5,
    "y": 113.7265625
  },
  "player-FS": {
    "x": 595.5,
    "y": 8.7265625
  },
  "player-SS": {
    "x": 833,
    "y": 19.7265625
  },
  "player-W": {
    "x": 534.5,
    "y": 168.7265625
  },
  "player-M": {
    "x": 697,
    "y": 119.7265625
  },
  "player-J": {
    "x": 576.5,
    "y": 120.7265625
  },
  "player-S": {
    "x": 849,
    "y": 168.7265625
  },
  "player-E1": {
    "x": 602.5,
    "y": 168.7265625
  },
  "player-E2": {
    "x": 785.5,
    "y": 167.7265625
  },
  "player-N": {
    "x": 716.5,
    "y": 164.7265625
  },
  "player-RT": {
    "x": 754,
    "y": 203.7265625
  },
  "player-RG": {
    "x": 708,
    "y": 199.7265625
  },
  "player-C": {
    "x": 662,
    "y": 197.7265625
  },
  "player-LG": {
    "x": 614,
    "y": 200.7265625
  },
  "player-LT": {
    "x": 567,
    "y": 203.7265625
  },
  "player-Q": {
    "x": 666,
    "y": 294.7265625
  },
  "player-H": {
    "x": 611,
    "y": 292.7265625
  },
  "player-F": {
    "x": 915,
    "y": 231.7265625
  },
  "player-X": {
    "x": 312,
    "y": 209.7265625
  },
  "player-Y": {
    "x": 800,
    "y": 206.7265625
  },
  "player-Z": {
    "x": 1029,
    "y": 232.7265625
  }
}`
  // Add more JSON strings here
];

// Dictionary to store HTML content for each player
const playerHTMLContent = {
  "player-E1": `
    <h4>Edge 1</h4>
    <div>
      <a href="#" class="select-player-link">Select Player</a>
    </div>
    <div>
      <label for="stunt-select">Stunt:</label>
      <select id="stunt-select">
        <option value="inside">Inside</option>
        <option value="outside">Outside</option>
      </select>
    </div>
    <div>
      <label for="pass-rush-move-select">Pass Rush Move:</label>
      <select id="pass-rush-move-select">
        <option value="speed">Speed</option>
        <option value="power">Power</option>
      </select>
    </div>
    <div>
      <label for="win-select">Win/Lose:</label>
      <select id="win-select">
        <option value="speed">Win</option>
        <option value="power">Lose</option>
      </select>
    </div>`,
    "player-E2": `
    <h4>Edge 2</h4>
    <div>
      <a href="#" class="select-player-link">Select Player</a>
    </div>
    <div>
      <label for="stunt-select">Stunt:</label>
      <select id="stunt-select">
        <option value="inside">Inside</option>
        <option value="outside">Outside</option>
      </select>
    </div>
    <div>
      <label for="pass-rush-move-select">Pass Rush Move:</label>
      <select id="pass-rush-move-select">
        <option value="speed">Speed</option>
        <option value="power">Power</option>
      </select>
    </div>
    <div>
      <label for="win-select">Win/Lose:</label>
      <select id="win-select">
        <option value="speed">Win</option>
        <option value="power">Lose</option>
      </select>
    </div>`,
    "player-C1": `
    <h4>Corner 1</h4>
    <div>
      <a href="#" class="select-player-link">Select Player</a>
    </div>
    <div>
      <label for="presnap-depth-c1">Presnap Depth:</label>
      <select id="presnap-depth-c1">
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="5">5</option>
      </select>
    </div>
    <div>
      <label for="presnap-leverage-c1">Presnap Leverage:</label>
      <select id="presnap-leverage-c1">
        <option value="inside">Inside</option>
        <option value="heads-up">Heads Up</option>
        <option value="outside">Outside</option>
      </select>
    </div>
  `,
  "player-NS": `
    <h4>Corner 1</h4>
    <div>
      <a href="#" class="select-player-link">Select Player</a>
    </div>
    <div>
      <label for="presnap-depth-c1">Presnap Depth:</label>
      <select id="presnap-depth-c1">
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="5">5</option>
      </select>
    </div>
    <div>
      <label for="presnap-leverage-c1">Presnap Leverage:</label>
      <select id="presnap-leverage-c1">
        <option value="inside">Inside</option>
        <option value="heads-up">Heads Up</option>
        <option value="outside">Outside</option>
      </select>
    </div>
  `,
  "player-C2": `
    <h4>Corner 2</h4>
    <div>
      <a href="#" class="select-player-link">Select Player</a>
    </div>
    <div>
      <label for="presnap-depth-c2">Presnap Depth:</label>
      <select id="presnap-depth-c2">
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="5">5</option>
      </select>
    </div>
    <div>
      <label for="presnap-leverage-c2">Presnap Leverage:</label>
      <select id="presnap-leverage-c2">
        <option value="inside">Inside</option>
        <option value="heads-up">Heads Up</option>
        <option value="outside">Outside</option>
      </select>
    </div>
  `,
  "player-N": `
    <h4>Nose Tackle</h4>
    <div>
      <a href="#" class="select-player-link">Select Player</a>
    </div>
    <div>
      <label for="technique-n">Technique:</label>
      <select id="technique-n">
        <option value="3-technique">3 Technique</option>
        <option value="4-technique">4 Technique</option>
      </select>
    </div>
    <div>
      <label for="pass-rush-move-n">Pass Rush Move:</label>
      <select id="pass-rush-move-n">
        <option value="bull-rush">Bull Rush</option>
        <option value="swim-move">Swim Move</option>
        <option value="rip-move">Rip Move</option>
      </select>
    </div>
  `,
  "player-Z": `
    <h4>Z Receiver</h4>
    <div>
      <a href="#" class="select-player-link">Select Player</a>
    </div>
    <div>
      <label for="split-z">Select Split:</label>
      <select id="split-z">
        <option value="H">H</option>
        <option value="H2">H2</option>
        <option value="A-">A-</option>
        <option value="A">A</option>
        <option value="A+">A+</option>
        <option value="-2">-2</option>
        <option value="IE">IE</option>
        <option value="#">#</option>
        <option value="#+2">#+2</option>
        <option value="#+4">#+4</option>
        <option value="M">M</option>
      </select>
    </div>
    <div>
      <label for="route-z">Select Route:</label>
      <select id="route-z">
        <option value="slant">Slant</option>
        <option value="post">Post</option>
        <option value="dig">Dig</option>
        <option value="out">Out</option>
        <option value="comeback">Comeback</option>
        <option value="go">Go</option>
      </select>
    </div>
  `,
  "player-H": `
    <h4>H Receiver</h4>
    <div>
      <a href="#" class="select-player-link">Select Player</a>
    </div>
    <div>
      <label for="split-h">Select Split:</label>
      <select id="split-h">
        <option value="H">H</option>
        <option value="H2">H2</option>
        <option value="A-">A-</option>
        <option value="A">A</option>
        <option value="A+">A+</option>
        <option value="-2">-2</option>
        <option value="IE">IE</option>
        <option value="#">#</option>
        <option value="#+2">#+2</option>
        <option value="#+4">#+4</option>
        <option value="M">M</option>
      </select>
    </div>
    <div>
      <label for="route-h">Select Route:</label>
      <select id="route-h">
        <option value="slant">Slant</option>
        <option value="post">Post</option>
        <option value="dig">Dig</option>
        <option value="out">Out</option>
        <option value="comeback">Comeback</option>
        <option value="go">Go</option>
      </select>
    </div>
    <div>
      <label for="blocking-h">Blocking:</label>
      <select id="blocking-h">
        <option value="protection">Protection</option>
        <option value="check-and-release">Check and Release</option>
        <option value="free-release">Free Release</option>
      </select>
    </div>
  `,
  "player-F": `
    <h4>F Receiver</h4>
    <div>
      <a href="#" class="select-player-link">Select Player</a>
    </div>
    <div>
      <label for="split-f">Select Split:</label>
      <select id="split-f">
        <option value="H">H</option>
        <option value="H2">H2</option>
        <option value="A-">A-</option>
        <option value="A">A</option>
        <option value="A+">A+</option>
        <option value="-2">-2</option>
        <option value="IE">IE</option>
        <option value="#">#</option>
        <option value="#+2">#+2</option>
        <option value="#+4">#+4</option>
        <option value="M">M</option>
      </select>
    </div>
    <div>
      <label for="route-f">Select Route:</label>
      <select id="route-f">
        <option value="slant">Slant</option>
        <option value="post">Post</option>
        <option value="dig">Dig</option>
        <option value="out">Out</option>
        <option value="comeback">Comeback</option>
        <option value="go">Go</option>
      </select>
    </div>
  `,
  "player-X": `
    <h4>X Receiver</h4>
    <div>
      <a href="#" class="select-player-link">Select Player</a>
    </div>
    <div>
      <label for="split-x">Select Split:</label>
      <select id="split-x">
        <option value="H">H</option>
        <option value="H2">H2</option>
        <option value="A-">A-</option>
        <option value="A">A</option>
        <option value="A+">A+</option>
        <option value="-2">-2</option>
        <option value="IE">IE</option>
        <option value="#">#</option>
        <option value="#+2">#+2</option>
        <option value="#+4">#+4</option>
        <option value="M">M</option>
      </select>
    </div>
    <div>
      <label for="route-x">Select Route:</label>
      <select id="route-x">
        <option value="slant">Slant</option>
        <option value="post">Post</option>
        <option value="dig">Dig</option>
        <option value="out">Out</option>
        <option value="comeback">Comeback</option>
        <option value="go">Go</option>
      </select>
    </div>
  `,
  "player-Y": `
    <h4>X Receiver</h4>
    <div>
      <a href="#" class="select-player-link">Select Player</a>
    </div>
    <div>
      <label for="split-x">Select Split:</label>
      <select id="split-x">
        <option value="H">H</option>
        <option value="H2">H2</option>
        <option value="A-">A-</option>
        <option value="A">A</option>
        <option value="A+">A+</option>
        <option value="-2">-2</option>
        <option value="IE">IE</option>
        <option value="#">#</option>
        <option value="#+2">#+2</option>
        <option value="#+4">#+4</option>
        <option value="M">M</option>
      </select>
    </div>
    <div>
      <label for="route-x">Select Route:</label>
      <select id="route-x">
        <option value="slant">Slant</option>
        <option value="post">Post</option>
        <option value="dig">Dig</option>
        <option value="out">Out</option>
        <option value="comeback">Comeback</option>
        <option value="go">Go</option>
      </select>
    </div>
    <div>
      <label for="blocking-h">Blocking:</label>
      <select id="blocking-h">
        <option value="protection">Protection</option>
        <option value="check-and-release">Check and Release</option>
        <option value="free-release">Free Release</option>
      </select>
    </div>
  `,
  "player-Q": `
    <h4>Quarterback</h4>
    <div>
      <label for="depth-q">Depth:</label>
      <select id="depth-q">
        <option value="under-center">Under Center</option>
        <option value="pistol">Pistol</option>
        <option value="shotgun">Shotgun</option>
      </select>
    </div>
    <div>
      <label for="cadence-q">Cadence:</label>
      <select id="cadence-q">
        <option value="on-1">On 1</option>
        <option value="on-2">On 2</option>
      </select>
    </div>
    <div>
      <label for="drop-q">Drop:</label>
      <select id="drop-q">
        <option value="3-step">3 Step</option>
        <option value="5-step">5 Step</option>
        <option value="7-step">7 Step</option>
      </select>
    </div>
  `,
  "player-LT": `
    <h4>Left Tackle</h4>
    <div>
      <a href="#" class="select-player-link">Select Player</a>
    </div>
    <div>
      <label for="run-block-lt">Select Run Block:</label>
      <select id="run-block-lt">
        <option value="drive">Drive</option>
        <option value="down">Down</option>
        <option value="reach">Reach</option>
        <option value="pull">Pull</option>
        <option value="trap">Trap</option>
        <option value="double-team">Double-Team</option>
        <option value="zone">Zone</option>
        <option value="cut">Cut</option>
        <option value="fold">Fold</option>
      </select>
    </div>
    <div>
      <label for="pass-block-lt">Select Pass Block:</label>
      <select id="pass-block-lt">
        <option value="vertical-set">Vertical Set</option>
        <option value="kick-step">Kick Step</option>
        <option value="slide-protection">Slide Protection</option>
        <option value="anchor">Anchor</option>
        <option value="screen">Screen</option>
        <option value="turnback">Turnback</option>
      </select>
    </div>
  `,
  "player-LG": `
    <h4>Left Guard</h4>
    <div>
      <a href="#" class="select-player-link">Select Player</a>
    </div>
    <div>
      <label for="run-block-lg">Select Run Block:</label>
      <select id="run-block-lg">
        <option value="drive">Drive</option>
        <option value="down">Down</option>
        <option value="reach">Reach</option>
        <option value="pull">Pull</option>
        <option value="trap">Trap</option>
        <option value="double-team">Double-Team</option>
        <option value="zone">Zone</option>
        <option value="cut">Cut</option>
        <option value="fold">Fold</option>
      </select>
    </div>
    <div>
      <label for="pass-block-lg">Select Pass Block:</label>
      <select id="pass-block-lg">
        <option value="vertical-set">Vertical Set</option>
        <option value="kick-step">Kick Step</option>
        <option value="slide-protection">Slide Protection</option>
        <option value="anchor">Anchor</option>
        <option value="screen">Screen</option>
        <option value="turnback">Turnback</option>
      </select>
    </div>
  `,
  "player-C": `
    <h4>Center</h4>
    <div>
      <a href="#" class="select-player-link">Select Player</a>
    </div>
    <div>
      <label for="run-block-c">Select Run Block:</label>
      <select id="run-block-c">
        <option value="drive">Drive</option>
        <option value="down">Down</option>
        <option value="reach">Reach</option>
        <option value="pull">Pull</option>
        <option value="trap">Trap</option>
        <option value="double-team">Double-Team</option>
        <option value="zone">Zone</option>
        <option value="cut">Cut</option>
        <option value="fold">Fold</option>
      </select>
    </div>
    <div>
      <label for="pass-block-c">Select Pass Block:</label>
      <select id="pass-block-c">
        <option value="vertical-set">Vertical Set</option>
        <option value="kick-step">Kick Step</option>
        <option value="slide-protection">Slide Protection</option>
        <option value="anchor">Anchor</option>
        <option value="screen">Screen</option>
        <option value="turnback">Turnback</option>
      </select>
    </div>
  `,
  "player-RG": `
    <h4>Right Guard</h4>
    <div>
      <a href="#" class="select-player-link">Select Player</a>
    </div>
    <div>
      <label for="run-block-rg">Select Run Block:</label>
      <select id="run-block-rg">
        <option value="drive">Drive</option>
        <option value="down">Down</option>
        <option value="reach">Reach</option>
        <option value="pull">Pull</option>
        <option value="trap">Trap</option>
        <option value="double-team">Double-Team</option>
        <option value="zone">Zone</option>
        <option value="cut">Cut</option>
        <option value="fold">Fold</option>
      </select>
    </div>
    <div>
      <label for="pass-block-rg">Select Pass Block:</label>
      <select id="pass-block-rg">
        <option value="vertical-set">Vertical Set</option>
        <option value="kick-step">Kick Step</option>
        <option value="slide-protection">Slide Protection</option>
        <option value="anchor">Anchor</option>
        <option value="screen">Screen</option>
        <option value="turnback">Turnback</option>
      </select>
    </div>
  `,
  "player-RT": `
    <h4>Right Tackle</h4>
    <div>
      <a href="#" class="select-player-link">Select Player</a>
    </div>
    <div>
      <label for="run-block-rt">Select Run Block:</label>
      <select id="run-block-rt">
        <option value="drive">Drive</option>
        <option value="down">Down</option>
        <option value="reach">Reach</option>
        <option value="pull">Pull</option>
        <option value="trap">Trap</option>
        <option value="double-team">Double-Team</option>
        <option value="zone">Zone</option>
        <option value="cut">Cut</option>
        <option value="fold">Fold</option>
      </select>
    </div>
    <div>
      <label for="pass-block-rt">Select Pass Block:</label>
      <select id="pass-block-rt">
        <option value="vertical-set">Vertical Set</option>
        <option value="kick-step">Kick Step</option>
        <option value="slide-protection">Slide Protection</option>
        <option value="anchor">Anchor</option>
        <option value="screen">Screen</option>
        <option value="turnback">Turnback</option>
      </select>
    </div>
  `,
};