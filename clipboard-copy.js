// copy element to clipboard ( avoid restrictions )
     async function onMouseUp() {
         const url = document.location.href;
         const newUrl = url.split('?')[0];
         const title=document.querySelector("title").textContent.split('-')
         console.log(newUrl+"\n"+title[0]+"\n"+title[1]+"\n"+title[2]);
         navigator.clipboard.writeText(newUrl+"\n"+title[0]+"\n"+title[1]+"\n"+title[2]);
    }
    document.addEventListener('mouseup', onMouseUp, false);
