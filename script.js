function ToggleMenu(){
    const button = document.getElementById('burger')
    const menu = document.getElementById('menu')

    button.classList.toggle('active')
    menu.classList.toggle('active')
}

function OpenGallery(val){

    switch(val) {
        case '1':
            if (document.getElementById('b1').style.display == "none") {
                document.getElementById('b1').style.display = "block";
            }
            else {
                document.getElementById('b1').style.display = "none";
            }
            break;
        case '2':
            if (document.getElementById('b2').style.display == "none") {
                document.getElementById('b2').style.display = "block";
            }
            else {
                document.getElementById('b2').style.display = "none";
            }
            break;
        case '3':
            if (document.getElementById('b3').style.display == "none") {
                document.getElementById('b3').style.display = "block";
            }
            else {
                document.getElementById('b3').style.display = "none";
            }
            break;
        case '4':
            if (document.getElementById('b4').style.display == "none") {
                document.getElementById('b4').style.display = "block";
            }
            else {
                document.getElementById('b4').style.display = "none";
            }
            break;
        case '5':
            if (document.getElementById('b5').style.display == "none") {
                document.getElementById('b5').style.display = "block";
            }
            else {
                document.getElementById('b5').style.display = "none";
            }
            break;
        case '6':
            if (document.getElementById('b6').style.display == "none") {
                document.getElementById('b6').style.display = "block";
            }
            else {
                document.getElementById('b6').style.display = "none";
            }
            break;
        case '7':
            if (document.getElementById('b7').style.display == "none") {
                document.getElementById('b7').style.display = "block";
            }
            else {
                document.getElementById('b7').style.display = "none";
            }
            break;
        case '8':
            if (document.getElementById('b8').style.display == "none") {
                document.getElementById('b8').style.display = "block";
            }
            else {
                document.getElementById('b8').style.display = "none";
            }
            break;
        case '9':
            if (document.getElementById('b9').style.display == "none") {
                document.getElementById('b9').style.display = "block";
            }
            else {
                document.getElementById('b9').style.display = "none";
            }
            break;
        case '10':
            if (document.getElementById('b10').style.display == "none") {
                document.getElementById('b10').style.display = "block";
            }
            else {
                document.getElementById('b10').style.display = "none";
            }
            break;
        case '11':
            if (document.getElementById('b11').style.display == "none") {
                document.getElementById('b11').style.display = "block";
            }
            else {
                document.getElementById('b11').style.display = "none";
            }
            break;
        case '12':
            if (document.getElementById('b12').style.display == "none") {
                document.getElementById('b12').style.display = "block";
            }
            else {
                document.getElementById('b12').style.display = "none";
            }
            break;
        case '13':
                if (document.getElementById('b13').style.display == "none") {
                    document.getElementById('b13').style.display = "block";
                }
                else {
                    document.getElementById('b13').style.display = "none";
                }
                break;
        case '14':
                if (document.getElementById('b14').style.display == "none") {
                    document.getElementById('b14').style.display = "block";
                }
                else {
                    document.getElementById('b14').style.display = "none";
                }
                break;
    }
}

const lightbox = document.createElement('div')
lightbox.id = 'lightbox'
document.body.appendChild(lightbox)

const images = document.querySelectorAll('img')
images.forEach(image => {
    image.addEventListener('click', e => {
        lightbox.classList.add('active')
        const img = document.createElement('img')
        img.src = image.src
        img.style.maxWidth = '80%'
        img.style.maxHeight = '80%'
        while (lightbox.firstChild){
            lightbox.removeChild(lightbox.firstChild)
        }
        lightbox.appendChild(img)
    })
})

lightbox.addEventListener('click', e => {
    if (e.target == e.currentTarget) return lightbox.classList.remove('active')
})
