function newImage(url) {
  let image = document.createElement("img");
  image.src = url;
  //   image.style.position = "fixed";
  //   image.style.left = left + "px";
  //   image.style.bottom = bottom + "px";
  document.body.append(image);
  return image;
}

// Define a new function named move
// function move(image, left, bottom) {
//   image.style.position = "fixed";
//   image.style.left = left + "px";
//   image.style.bottom = bottom + "px";
// }
// Next, copy and paste the positioning logic in the move function
// The move function should receive the image, left, and bottom as parameters for different images

// Next, pass the image that newImage returns into move
// let greenCharacter = newImage("assets/green-character.gif");
// move(greenCharacter, 100, 250);
// Next, separate move function and to function for coordinates
// move(greenCharacter).to(100, 250);
// Next, consolidate code to one line
move(newImage("assets/green-character.gif")).to(100, 250);
// newImage("assets/green-character.gif", 100, 250);

// Update all of the other images to be positioned with our move function
move(newImage("assets/tree.png")).to(200, 450);
move(newImage("assets/pillar.png")).to(350, 250);
move(newImage("assets/pine-tree.png")).to(450, 350);
move(newImage("assets/crate.png")).to(150, 350);
move(newImage("assets/well.png")).to(500, 575);
// newImage("assets/tree.png", 200, 450);
// newImage("assets/pillar.png", 350, 250);
// newImage("assets/pine-tree.png", 450, 350);
// newImage("assets/crate.png", 150, 350);
// newImage("assets/well.png", 500, 575);

// Define a new function to accept left and bottom parameters within the move function
function move(image) {
  image.style.position = "fixed";
  //   image.style.left = left + "px";
  //   image.style.bottom = bottom + "px";

  function moveToCoordinates(left, bottom) {
    image.style.left = left + "px";
    image.style.bottom = bottom + "px";
  }
  return {
    to: moveToCoordinates,
  };
}
// Next, move lines 3 and 4 where left and bottom are in scope
// Call moveToCoordinates, call it right after we call move, to provide the coordinates for moving the image

function newItem(url, left, bottom) {
  let item = newImage(url, left, bottom);
  item.addEventListener("click", () => {
    item.remove();
    let inventoryItem = document.createElement("img");
    inventoryItem.src = url;
    inventory.append(inventoryItem);
  });
  return item;
}

// Update all of the other items to be positioned with our move function
move(newItem("assets/sword.png")).to(500, 555);
move(newItem("assets/shield.png")).to(165, 335);
move(newItem("assets/staff.png")).to(600, 250);
// newItem("assets/sword.png", 500, 555);
// newItem("assets/shield.png", 165, 335);
// newItem("assets/staff.png", 600, 250);

function newInventory() {
  let inventory = document.createElement("div");
  inventory.style.position = "fixed";
  inventory.style.bottom = "0px";
  inventory.style.left = "0px";
  inventory.style.width = "100%";
  inventory.style.height = "100px";
  inventory.style.display = "flex";
  inventory.style.flexDirection = "row";
  inventory.style.alignItems = "center";
  inventory.style.justifyContent = "space-evenly";
  inventory.style.border = "2px solid black";
  inventory.style.backgroundColor = "brown";
  document.body.append(inventory);
  return inventory;
}

const inventory = newInventory();

// move(inventory).to(0, 0);
