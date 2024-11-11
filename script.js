// لاختصار استدعاء العنصر الواحد
function id(id){
    return document.querySelector(id)
}

// لاختصار استدعاء العناصر
function ids(id){
    return document.querySelectorAll(id)
}


var oneTime = true
var text = '" بناء الإنسان قبل بناء البنيان " لقد شهدت منطقة القصيم خلال الـ5 سنوات الماضية جهوداً كبيرة في هذا الجانب، ليكون بناء الإنسان وتنمية المكان أهم ركائز الرؤية التنموية للمنطقة'

function typeWriter(messageToShow, targetElement, timeBetween, currentPos = 0) {
    if (currentPos < messageToShow.length) {
      targetElement.innerHTML += messageToShow.charAt(currentPos);
      currentPos++;
      setTimeout(function() { typeWriter(messageToShow, targetElement, timeBetween, currentPos); }, timeBetween);
    }else{
        if(oneTime){
            typeWriter('د. فيصل بن مشعل بن سعود بن عبدالعزيز', document.querySelector('.speech h6'), 70)
            oneTime = false
        }
        
    }
  }


var oneTime2 = true

  
  document.querySelector('.vid').onplaying = ()=>{
      // document.querySelector('video').play()
      console.log("d")
      //    alert("odss")
      // if(oneTime){
        // oneTime = false
        setTimeout(()=>{
            document.querySelector('.content').style.display = 'grid'
            if(oneTime2){
                typeWriter(text, document.querySelector('.type'), 100)
                oneTime2 = false
            }
        }, 8000)
// }

}

// setTimeout(()=>{
//     // document.querySelector('.vid').src = 'Qassem_Over_View.png'
//     document.querySelector('.vid').setAttribute('autoplay', 'autoplay')
// }, 9800)

const provinces = ['one', 'four', 'five', 'six', 'seven', 'eight', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen']

const provinces_names = ['الاسياح', 'المذنب', 'عنيزة', 'الرس', 'عيون الجواء', 'البكيرية', 'البدائع', 'ابانات', 'ضرية', 'النبهانية', 'عقلة الصقور']

const herfs = [
    'https://www.alqassim.gov.sa/TAWAZON/home/Cityicons?cityId=3080',
    'https://www.alqassim.gov.sa/TAWAZON/home/Cityicons?cityId=2061',
    'https://www.alqassim.gov.sa/TAWAZON/home/Cityicons?cityId=1019',
    'https://www.alqassim.gov.sa/TAWAZON/Home/CityIcons?cityId=1021',
    'https://www.alqassim.gov.sa/TAWAZON/Home/CityIcons?cityId=3081',
    'https://www.alqassim.gov.sa/TAWAZON/Home/CityIcons?cityId=3072',
    'https://www.alqassim.gov.sa/TAWAZON/Home/CityIcons?cityId=3077',
    'https://www.alqassim.gov.sa/TAWAZON/Home/CityIcons?cityId=3153',
    'https://www.alqassim.gov.sa/TAWAZON/Home/CityIcons?cityId=4084',
    'https://www.alqassim.gov.sa/TAWAZON/Home/CityIcons?cityId=3078',
    'https://www.alqassim.gov.sa/TAWAZON/Home/CityIcons?cityId=3083'
]

provinces.forEach((e, i)=>{

    id(`.${e}`).addEventListener('click', ()=>{
        go(herfs[i])
    })

    id(`.${e}`).addEventListener('mouseover', ()=>{
        id(`.${e}`).classList.add('brighten') 
        id('#rect').setAttribute('width', 165) 
        changeText(provinces_names[i]) 
    })

    id(`.${e}`).addEventListener('mouseout', ()=>{
        id(`.${e}`).classList.remove('brighten') 
        changeText('')
        id('#rect').setAttribute('width', 0)   

    })

})

ids('.tow').forEach(ele=>{
    ele.addEventListener('click', ()=>{
        go('https://www.alqassim.gov.sa/TAWAZON/Home/CityIcons?cityId=1003')
    })
    ele.addEventListener('mouseover', ()=>{
        ids('.tow').forEach(e=>e.classList.add('brighten'))
        changeText('بريدة')
        id('#rect').setAttribute('width', 165)   
    })
    ele.addEventListener('mouseout', ()=>{
        ids('.tow').forEach(e=>e.classList.remove('brighten'))
        changeText('')
        id('#rect').setAttribute('width', 0)
    })
})

ids('.three').forEach(ele=>{
    ele.addEventListener('click', ()=>{
        go('https://www.alqassim.gov.sa/TAWAZON/Home/CityIcons?cityId=3082')
    })
    ele.addEventListener('mouseover', ()=>{
        ids('.three').forEach(e=>e.classList.add('brighten'))
        changeText('الشماسية')
        id('#rect').setAttribute('width', 165)  
    })
    ele.addEventListener('mouseout', ()=>{
        ids('.three').forEach(e=>e.classList.remove('brighten'))
        changeText('')
        id('#rect').setAttribute('width', 0)
    })
})

ids('.nine').forEach(ele=>{
    ele.addEventListener('click', ()=>{
        go('https://www.alqassim.gov.sa/TAWAZON/Home/CityIcons?cityId=3079')
    })
    ele.addEventListener('mouseover', ()=>{
        ids('.nine').forEach(e=>e.classList.add('brighten'))
        changeText('رياض الخبراء')
        id('#rect').setAttribute('width', 165)  
    })
    ele.addEventListener('mouseout', ()=>{
        ids('.nine').forEach(e=>e.classList.remove('brighten'))
        changeText('')
        id('#rect').setAttribute('width', 0)
    })
})

function changeText(text){
    id('#text').innerHTML = text
    let w = id('#text').getBBox().width / 2
    console.log(w)
    id('#text').setAttribute('x', (165/2)+w) 
}

function go(herf){ 
    window.location = herf
}

if(window.innerWidth <= 700){
    id('.vid').src = './Untitled video - Made with Clipchamp (4).mp4'
}








