// document.addEventListener(
//     'DOMContentLoaded', 

window.addEventListener(
    'load', 
    function() {
        function textSearch(textForSearch, limit) {
            const text = textForSearch.toLowerCase();
            const elements = document.querySelectorAll("*");
            for (const element of elements) {
                if (element.textContent.length<limit){
                    if (element.textContent.toLowerCase().includes(text)) {
                        console.log(`>>>`, element.textContent);
                    }
                }
            }            
        }        
        console.log("==========baujahr=========");
        textSearch("baujahr", 30);
        console.log("==========vermietet=========");
        textSearch("vermietet", 40);
        console.log("==========heizung=========");
        textSearch("heizung", 50);
        console.log("===================");
    }
);
  