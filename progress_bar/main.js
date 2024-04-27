const span= document.querySelectorAll('.progress-bar span')

span.forEach((span)=> {
    span.style.width = span.dataset.width;
    span.innerHTML=span.dataset.width;
});