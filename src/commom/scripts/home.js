let currentIndex = 0; // Índice da vaga atual

function next() {
  const jobListing = document.getElementById("jobListing");
  currentIndex = (currentIndex + 1) % jobListing.children.length;
  updateVisibility();
}

function prev() {
  const jobListing = document.getElementById("jobListing");
  currentIndex =
    (currentIndex - 1 + jobListing.children.length) %
    jobListing.children.length;
  updateVisibility();
}

function updateVisibility() {
  const jobListing = document.getElementById("jobListing");
  const width = jobListing.clientWidth;
  jobListing.style.transform = `translateX(-${width * currentIndex}px)`;
}
