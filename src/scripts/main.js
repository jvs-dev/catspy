let productPhoto1 = document.getElementById("productPhoto1")
let productPhoto2 = document.getElementById("productPhoto2")
let productPhoto3 = document.getElementById("productPhoto3")
let nextButton = document.getElementById("nextButton")
let prevButton = document.getElementById("prevButton")
let activeImageIndex = 1
let inAnimate = false

function desactiveAll(translate) {
    productPhoto1.style.transition = "1s ease"
    productPhoto1.style.transform = `translateX(${translate})`
    productPhoto1.style.opacity = "0"

    productPhoto2.style.transition = "1s ease"
    productPhoto2.style.transform = `translateX(${translate})`
    productPhoto2.style.opacity = "0"

    productPhoto3.style.transition = "1s ease"
    productPhoto3.style.transform = `translateX(${translate})`
    productPhoto3.style.opacity = "0"
    setTimeout(() => {
        productPhoto1.style.display = "none"
        productPhoto1.style.transition = ""
        productPhoto1.style.transform = ""
        productPhoto1.style.opacity = ""

        productPhoto2.style.display = "none"
        productPhoto2.style.transition = ""
        productPhoto2.style.transform = ""
        productPhoto2.style.opacity = ""

        productPhoto3.style.display = "none"
        productPhoto3.style.transition = ""
        productPhoto3.style.transform = ""
        productPhoto3.style.opacity = ""
    }, 1000);
}

function activeThis(element, translate) {
    element.style.position = "absolute"
    element.style.transition = "0s"
    element.style.opacity = "0"
    element.style.display = "flex"
    element.style.transform = `translateX(${translate})`
    setTimeout(() => {
        element.style.transition = "1s ease"
    }, 1);
    setTimeout(() => {
        element.style.transform = "translateX(0vw)"
        element.style.opacity = "1"
    }, 2);
    setTimeout(() => {
        element.style.position = ""
        element.style.transition = ""
        element.style.opacity = ""
        element.style.display = ""
        element.style.transform = ""
    }, 1000);
}

nextButton.onclick = function () {
    if (inAnimate == false) {
        inAnimate = true
        desactiveAll("-100vw")
        switch (activeImageIndex) {
            case 1:
                activeThis(productPhoto2, "100vw")
                activeImageIndex = 2
                break;
            case 2:
                activeThis(productPhoto3, "100vw")
                activeImageIndex = 3
                break;
            case 3:
                activeThis(productPhoto1, "100vw")
                activeImageIndex = 1
                break;
            default:
                break;
        }
        setTimeout(() => {
            inAnimate = false
        }, 1000);
    }
}

prevButton.onclick = function () {
    if (inAnimate == false) {
        inAnimate = true
        desactiveAll("100vw")
        switch (activeImageIndex) {
            case 1:
                activeThis(productPhoto3, "-100vw")
                activeImageIndex = 3
                break;
            case 2:
                activeThis(productPhoto1, "-100vw")
                activeImageIndex = 1
                break;
            case 3:
                activeThis(productPhoto2, "-100vw")
                activeImageIndex = 2
                break;
            default:
                break;
        }
        setTimeout(() => {
            inAnimate = false
        }, 1000);
    }
}

window.addEventListener('load', () => {
    setTimeout(() => {
        productPhoto1.classList.remove("load")
    }, 3001);
})