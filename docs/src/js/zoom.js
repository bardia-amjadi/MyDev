const imageModal = document.getElementById('imageModal');
  imageModal.addEventListener('show.bs.modal', function (event) {
    const trigger = event.relatedTarget;
    const imgSrc = trigger.getAttribute('data-img-src');
    const modalImg = imageModal.querySelector('#modalImage');
    modalImg.src = imgSrc;
  });