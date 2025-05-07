
let videos = ["Untitled design.mp4", "lunch.mp4", "snacks.mp4"];
let images = [
"https://www.yummytoddlerfood.com/wp-content/uploads/2022/04/Homemade-Lunch-1-horiz.jpg", // Lunch Image
"https://media.istockphoto.com/id/1337467754/photo/first-person-top-view-photo-of-womans-hands-holding-lunchbox-with-healthy-meal-nuts-and.jpg?s=612x612&w=0&k=20&c=uPvOOuSl2rAG7lYF52qDcU848vCSJ6ueuIzlgPOo3q8=" // Snacks Image
];
let labels = ["Breakfast", "Lunch", "Snacks"];
let currentIndex = 0;


function changeMeal(direction) { //video 
if (direction === 'prev') {
  currentIndex = (currentIndex - 1 + videos.length) % videos.length;
} else {
  currentIndex = (currentIndex + 1) % videos.length;
}


let videoElement = document.getElementById("hero-video");
let imageElement = document.getElementById("hero-image");
let labelElement = document.getElementById("video-label");


if (currentIndex === 0) { // Breakfast
  videoElement.src = videos[0];
  imageElement.classList.add('hidden');
  videoElement.classList.remove('hidden');
} else { // Lunch or Snacks
  imageElement.src = images[currentIndex - 1]; 
  imageElement.classList.remove('hidden');
  videoElement.classList.add('hidden');
}

videoElement.load(); 
labelElement.innerText = labels[currentIndex];
}
