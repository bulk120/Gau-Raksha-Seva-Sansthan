document.getElementById('year').textContent = new Date().getFullYear();
    // Smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(a=>{
      a.addEventListener('click',function(e){
        e.preventDefault();
        const t = document.querySelector(this.getAttribute('href'));
        if(t) t.scrollIntoView({behavior:'smooth',block:'start'});
      })
    })