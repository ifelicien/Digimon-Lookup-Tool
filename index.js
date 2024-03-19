fetchDigiData();

async function fetchDigiData() {
  try {
    const digimonName = "agumon";
    // const digimonApi = `https://digi-api.com/api/v1/digimon/289`;
    const digimonApi = `https://digi-api.com/api/v1/digimon/${digimonName}`;
    const response = await fetch(digimonApi);


    if (!response.ok) {
      throw new Error("could not fetch resource");
    }

    const data = await response.json();
    console.log(data);
    
    // digiNumber;
    const digiNumber = data.id;
    const number = document.getElementById("digi_Number");

    number.textContent = digiNumber;
    number.style.display = "block"; 

    // digiName;
    const digiName = data.name;
    const name = document.getElementById("digi_Name");

    name.textContent = digiName;
    name.style.display = "block";

    // digiSprite;
    // const digiSprite = data.images.image;
    // const sprite = document.getElementById("digi_Sprite");

    // sprite.src = digiSprite;
    // sprite.style.display = "block"; 

    // digiDescript;
    const digiDescript = data.descriptions[0].description;
    const description = document.getElementById("digi_descript");

    description.textContent = digiDescript;
    description.style.display = "block"; 

    // digiLevel;
    const digiLevel = data.levels[0].level;
    const level = document.getElementById("digi_Level");

    level.textContent = digiLevel;
    level.style.display = "block"; 

    // digiAttribute;
    const digiAttribute = data.attributes[0].attribute;
    const attributes = document.getElementById("digi_Attributes");

    attributes.textContent = digiAttribute;
    attributes.style.display = "block"; 

    // digiType;
    const digiType = data.types[0].type;
    const type = document.getElementById("digi_Type");

    type.textContent = digiType;
    type.style.display = "block"; 

  } catch (error) {
    console.error(error);
  }
}
