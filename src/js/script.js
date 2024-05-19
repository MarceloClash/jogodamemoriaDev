

//array de icones
const icones = [
    '<i class="bi bi-controller"></i>',
    '<i class="bi bi-controller"></i>',
    '<i class="bi bi-github"></i>',
    '<i class="bi bi-github"></i>',
    '<i class="bi bi-pc-display-horizontal"></i>',
    '<i class="bi bi-pc-display-horizontal"></i>',
    '<i class="bi bi-wifi"></i>',
    '<i class="bi bi-wifi"></i>',
    '<i class="bi bi-code-slash"></i>',
    '<i class="bi bi-code-slash"></i>',
    '<i class="bi bi-database-check"></i>',
    '<i class="bi bi-database-check"></i>',
    '<i class="bi bi-cpu-fill"></i>',
    '<i class="bi bi-cpu-fill"></i>',
    '<i class="bi bi-floppy"></i>',
    '<i class="bi bi-floppy"></i>'
];


let shyffleIcones = icones.sort(()=> (Math.random()> .5) ? 2: -1);


for(let i=0; i<icones.length; i++){
    let box = document.createElement('div');
    box.classList.add('item');

    box.onclick =(e)=>{
        e.target.classList.add('boxOpen');
        setTimeout(()=>{
            if(document.querySelectorAll('.boxOpen').length > 1){
                if(document.querySelectorAll('.boxOpen')[0].innerHTML == document.querySelectorAll('.boxOpen')[1].innerHTML){
                    document.querySelectorAll('.boxOpen')[0].classList.add('boxMatch');
                    document.querySelectorAll('.boxOpen')[1].classList.add('boxMatch');

                    document.querySelectorAll('.boxOpen')[1].classList.remove('boxOpen');
                    document.querySelectorAll('.boxOpen')[0].classList.remove('boxOpen');

                    if(document.querySelectorAll('.boxMatch').length == icones.length){
                        alert('Parabéns, você venceu!');
                        window.location.reload();
                    }
                }else{
                    document.querySelectorAll('.boxOpen')[1].classList.remove('boxOpen');
                    document.querySelectorAll('.boxOpen')[0].classList.remove('boxOpen');
                }
            }
        },500)
    }
    box.innerHTML = shyffleIcones[i];
    document.querySelector('.container .game').appendChild(box);
}