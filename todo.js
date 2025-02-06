let btn = document.querySelector("#btn");
let input = document.querySelector("#input");
let container = document.querySelector("#container");

btn.addEventListener('click',function(){
    const paragraph = document.createElement('p')
    paragraph.innerText = input.value;
    container.append(paragraph);
    input.value = "";
    paragraph.addEventListener('click',function(){
        paragraph.style.textDecoration = "line-through"; 
        
        
    })

    paragraph.addEventListener('dblclick',function(){
        container.removeChild(paragraph)
    })
    btn.addEventListener('click', function() {
        const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        button.style.backgroundColor = randomColor;
    });
})
