document.querySelector('video').addEventListener('playing', ()=>{
    // document.querySelector('video').play()

//    alert("odss")
    setTimeout(()=>{
        document.querySelector('.content').style.display = 'grid'
    }, 7000)
})