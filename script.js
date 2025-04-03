// This function is for displaying a preview of the diaper image the user uploads.
function previewImage(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    
    reader.onload = function(e) {
        const imgElement = document.createElement('img');
        imgElement.src = e.target.result;
        imgElement.style.maxWidth = '200px';
        imgElement.style.marginTop = '10px';
        document.getElementById('image-preview').innerHTML = ''; // Clear previous preview
        document.getElementById('image-preview').appendChild(imgElement);
    }
    
    reader.readAsDataURL(file);
}
