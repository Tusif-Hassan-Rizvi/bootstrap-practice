let toggle=document.getElementById('flexSwitchCheckDefault')
let darkTheme=document.getElementById('dark-theme');
let labelText=document.getElementById('label-text');


toggle.addEventListener('click', ()=>{
 darkTheme.classList.forEach((element)=>{
    
    if(element.includes('navbar-light')){
        darkTheme.classList.remove('navbar-light', 'bg-light');
        darkTheme.classList.add('navbar-dark', 'bg-dark');
        labelText.classList.add('text-light')
        labelText.innerText='Dark Theme'
        
    }

    else if(element.includes('navbar-dark')){
        darkTheme.classList.remove('navbar-dark','bg-dark')
        darkTheme.classList.add('navbar-light', 'bg-light')
        labelText.classList.remove('text-light')
        labelText.innerText='Light Theme'
    }
 })
})


