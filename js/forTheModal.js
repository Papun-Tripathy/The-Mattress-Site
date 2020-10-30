const modal = document.querySelector('.modal');
const previews = document.querySelectorAll('.gallery img');
const original = document.querySelector('.full-img');
const imgText = document.querySelector('.caption');

previews.forEach(preview => {
    preview.addEventListener('click',() => {
        modal.classList.add('open')
        original.classList.add('open');
        //  Dynamically changing Img and text
        const originalSrc = preview.getAttribute('data-original');
        original.src = './img/' + originalSrc;
        // const originalTxt = preview.getAttribute('alt');
        const originalTxt = preview.alt;
        imgText.innerHTML = originalTxt;
        setTimeout(() => {
            modal.classList.remove('open');
            original.classList.remove('open');
        }, 6000);
    })
});

modal.addEventListener('click',(e) => {
    if(e.target.classList.contains('modal')){
        modal.classList.remove('open');
        original.classList.remove('open');
    }
})