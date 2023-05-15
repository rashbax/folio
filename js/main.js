let link = document.getElementById('theme');
let dark = document.querySelector('.dark');
let light = document.querySelector('.day');

dark.addEventListener("click",()=>{
   localStorage.setItem('theme', 'dark')
   changeTheme()
})
light.addEventListener("click",()=>{
   localStorage.removeItem('theme')
   changeTheme()
})

function changeTheme(){
   if(localStorage.getItem('theme') === 'dark'){
      link.href = "./style/dark.css"
      light.classList.remove('theme__active')
      dark.classList.add('theme__active')
   }else{
      link.href = "./style/style.css"
      dark.classList.remove('theme__active')
      light.classList.add('theme__active')
   }
   
}

changeTheme()




 jQuery(document).ready(function(){
    $('.burger_menu').click(function(){
        $('.collapse').addClass('burger__show')
        $('body').addClass('shadow')

    })
    $('.collapse__close').click(function(){
        $('.collapse').removeClass('burger__show')
        $('body').removeClass('shadow')

        
    })
    $('.theme__button').click(()=>{
      $('.theme').toggleClass('theme__show')
     })

    // $('.str').click(function(e){
    //     console.log(e.target);
    //     let tr = e.target.nextElementSibling.nextElementSibling;
    //     // tr.toggleClass('dshow')
    //     console.log(tr);
    //     $('.dropdown').toggleClass("dshow")
    //  })

})

// let str = document.querySelector('.str');
// str.parentElement.addEventListener('mouseover',function(e){
//     const tar = e.target
//     // console.log(tar);
//     document.querySelector('.dropdown').classList.add('dshow')
// })

// str.nextElementSibling.addEventListener('mouseover',function(e){
//     const tar = e.target
//     // console.log(tar);
//     document.querySelector('.dropdown').classList.add('dshow')
// })

// str.parentElement.addEventListener('mouseout',function(e){
//     document.querySelector('.dropdown').classList.remove('dshow')
// })

let crd = document.querySelector('#crd')
let pgs = document.querySelector('#pgs')

crd.addEventListener('click',e=>{
   let bbb= e.target.nextElementSibling.nextElementSibling;
   let bb = e.target.nextElementSibling;
    bbb.classList.toggle('dshow')
    if (bbb.matches('.dshow')) {
        bb.classList.add('rotate')
     } else {
        bb.classList.remove('rotate')
     }

     if (pgs.nextElementSibling.nextElementSibling.matches('.dshow')) {
        pgs.nextElementSibling.nextElementSibling.classList.remove('dshow')
        pgs.nextElementSibling.classList.remove('rotate')
     }
})

pgs.addEventListener('click',e=>{

    let bbb= e.target.nextElementSibling.nextElementSibling;
    let bb = e.target.nextElementSibling;
     bbb.classList.toggle('dshow')
     if (bbb.matches('.dshow')) {
        bb.classList.add('rotate')
     } else {
        bb.classList.remove('rotate')
     }

     if (crd.nextElementSibling.nextElementSibling.matches('.dshow')) {
        crd.nextElementSibling.nextElementSibling.classList.remove('dshow')
        crd.nextElementSibling.classList.remove('rotate')
     }
 })


//  small screen

function smallScreen(){
   if(window.matchMedia('(max-width:990px)').matches){
      crd.addEventListener('click',e=>{
         e.target.nextElementSibling.nextElementSibling.classList.toggle('smalShow')
        e.target.parentElement.classList.toggle('bbottom')
        
      })

      pgs.addEventListener('click',e=>{
         e.target.nextElementSibling.nextElementSibling.classList.toggle('smalShow')
         e.target.parentElement.classList.toggle('bbottom')
      })
   }
   
   window.addEventListener('resize',()=>{
      if(window.matchMedia('(min-width:990px)').matches){
         document.querySelector('body').classList.remove('shadow')
      }
   })

}
smallScreen()


// scroll

let header = document.querySelector('.header');

window.addEventListener('scroll',()=>{
   if (this.scrollY > 50 ) {
      header.classList.add('headHide')
      // console.log(this.scrollY);
   } else{
      header.classList.remove('headHide')
   }
   if (this.scrollY > 300 ){
      header.classList.remove('headHide')
      header.classList.add('headShadow')
   }else{
      header.classList.remove('headShadow')
   }
})
