const photo = document.querySelector('#file')


function crearUrl() {
    const reader = new FileReader();

    reader.addEventListener('load', () => {
        localStorage.setItem('recent-image', reader.result)
    })

    reader.readAsDataURL(this.files[0])

    document.querySelector('#previewImage').setAttribute("src", localStorage.getItem('recent-image'))
}

photo.addEventListener('change', crearUrl)

// document.addEventListener('DOMContentLoaded', insertarArchivo)

// function insertarArchivo(){
//     const recentImageDataUrl = localStorage.getItem('recent-image')

//     if (recentImageDataUrl) {
//         document.querySelector('#previewImage').setAttribute("src", recentImageDataUrl)
//     }
// }