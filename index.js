let musiciansContainer = document.getElementById("musiciansContainer");

for (let i = 0; i < musiciansData.length; i++) {
  let musicianDiv = document.createElement("div");
  musicianDiv.classList.add("musicianDiv");
  musiciansContainer.appendChild(musicianDiv);

  let nameDiv = document.createElement("div");
  nameDiv.innerHTML = musiciansData[i].name;
  musicianDiv.appendChild(nameDiv);

  let ageDiv = document.createElement("div");
  ageDiv.innerHTML = musiciansData[i].age;
  musicianDiv.appendChild(ageDiv);

  let bioDiv = document.createElement("div");
  bioDiv.innerHTML = musiciansData[i].bio;
  musicianDiv.appendChild(bioDiv);
}
