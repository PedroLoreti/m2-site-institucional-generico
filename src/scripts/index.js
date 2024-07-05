function modalSite(){
    const button = document.querySelector(".header__button");
    const button__faq = document.querySelector("#button__faq")
    const modal__container = document.querySelector("#modal__controller");

    button.addEventListener("click", function () {
        modal__container.showModal()
        
        closeModal()
    })

    button__faq.addEventListener("click", function () {
        modal__container.showModal()
        
        closeModal()
    })
}

function closeModal(){
    const buttonClose = document.querySelector("#close__modal")
    const modal__container = document.querySelector("#modal__controller")

    buttonClose.addEventListener("click", function () {
        modal__container.close()
    })
}

modalSite()