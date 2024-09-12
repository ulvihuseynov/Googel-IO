const accordionItem=document.querySelectorAll(".accordion-item");
const faqContent=document.querySelectorAll(".faq-content")
const arrow=document.querySelectorAll(".arrow")
accordionItem.forEach((item,index)=>{
item.addEventListener("click",()=>{
    if ( faqContent[index].style.display==='block') {
         faqContent[index].style.display='none'
    } else {
        faqContent.forEach(content=>{
            content.style.display='none'
        })
          faqContent[index].style.display='block'
    }
   
    arrow.forEach((arrowItem,arrowIndex)=>{
        arrowItem.style.transform='rotate(0deg)'
    })
  
  arrow[index].style.transform='rotate(180deg)'
})
})

