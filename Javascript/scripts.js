const $hideButtom = document.getElementById (`hide-modal`) ;
const $overlayModal = document.getElementById (`overlayModal`) ;
const $modal = document.getElementById (`modal`) ;
const $schedule = document.getElementById (`schedule`) ;
 

$hideButtom.addEventListener (`click`, () => {
    // console.log(event)
    $modal.style.animation = `animationOut .8s forwards`;
    $overlayModal.classList.remove(`active`)
})

$schedule.addEventListener (`click`, () => {
    $modal.style.animation = `animationIn .8s forwards`;
    overlayModal.classList.add(`active`)
})