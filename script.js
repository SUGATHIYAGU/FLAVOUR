document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');
    const navbarsec = document.getElementById('navbar');
    const recipedetail=document.getElementById('recipe-detail');
    const recipedetailcontent=document.querySelector('.recipe-detail-content');
    const closerecipe=document.querySelector('.close-recipe');

    menuIcon.addEventListener('click', () => {
        navbarsec.classList.add('navbar-active');
    });

    closeIcon.addEventListener('click', () => {
        navbarsec.classList.remove('navbar-active');
    });

    const showRecipeBtns = document.querySelectorAll('.show-recipe-btn');
    showRecipeBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            const recipeCard = btn.parentElement;
            const recipeContent = recipeCard.querySelector('.recipe-content').innerHTML;
            recipedetailcontent.innerHTML = recipeContent;
            recipedetail.style.display = 'flex';
        });
    });

    closerecipe.addEventListener('click', function () {
        recipedetail.style.display = 'none';
    });

    const scriptURL = 'https://script.google.com/macros/s/AKfycbxBSaTub_PPOvBrmiUsEPUXUNGU8SBhBatFPKy6igXe250hpyqXqVcOaSyOMsvZcc4kKw/exec'
    const form = document.forms['submit-to-google-sheet']
    const fmessage=document.getElementById("form-msg")
  
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            if(response.ok){
          fmessage.innerHTML="Sent Successfully!!!"
          setTimeout(function(){
              fmessage.innerHTML=""},2000)
              form.reset()
          }else{
            throw new Error("response was not accepted");
          }
          })
       
        .catch(error => console.error('Error!', error.message));
    });
});

    