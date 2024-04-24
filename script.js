function changeImage(src) {
    var mainImage = document.getElementById('main-image');
    if (mainImage) {
        mainImage.src = src;
    } else {
        console.error('Main image element not found');
    }
}
