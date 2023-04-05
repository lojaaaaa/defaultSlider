const slider = document.querySelector('#slider')
const sliderItems = Array.from(document.querySelectorAll('.slider__slide'))
const nextSlideBtn = document.querySelector('.next')
const prevSlideBtn = document.querySelector('.prev')

sliderItems.forEach(function(slide, index){
    if (index !== 0){
        slide.classList.add('hidden')
    }

    sliderItems[0].setAttribute('data-active','')
    
})

nextSlideBtn.onclick = function(){
    showNextSlide('next')
}
prevSlideBtn.onclick = function(){
    showNextSlide('prev')
}



function showNextSlide(text){
    const currentSlide = document.querySelector('[data-active]')
    const currentSlideIndex = +currentSlide.dataset.index

    currentSlide.removeAttribute('data-active')
    currentSlide.classList.add('hidden')


    let nextSlideIndex
    if (text === 'next'){
       if(currentSlideIndex + 1 === sliderItems.length){
        nextSlideIndex = 0;
       }
       else{
        nextSlideIndex = currentSlideIndex + 1
       }
    }
    else if(text == 'prev'){
        if(currentSlideIndex  === 0){
            nextSlideIndex = sliderItems.length - 1;
           }
           else{
            nextSlideIndex = currentSlideIndex - 1
           }
    }
    console.log(nextSlideIndex)

    const nextSlide = sliderItems[nextSlideIndex]
    nextSlide.classList.remove('hidden')
    nextSlide.setAttribute('data-active', '')

}
