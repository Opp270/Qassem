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
        }
        oneTime = false
    }
  }
  
  document.querySelector('.vid').addEventListener('load', ()=>{
      // document.querySelector('video').play()
      
      //    alert("odss")
      // if(oneTime){
        // oneTime = false
        setTimeout(()=>{
            if(typeWriter(text, document.querySelector('.type'), 70)){
                
            }
            document.querySelector('.content').style.display = 'grid'
    }, 7000)
// }
    // setTimeout(()=>{
    //     document.querySelector('.vid').src = 'Qassem_Over_View.png'
    // }, 9800)
})

