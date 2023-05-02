const input = document.getElementById("input");

const button = document.getElementById("button");

button.addEventListener("click", (e)=>{
    e.preventDefault();
    if(!input.value){
        alert("Please enter or paste url");
        return;
    }
    button.innerHTML = "Downloading..."
    fetchURL(input.value);
})

async function fetchURL(url){
    try{
        const data = await fetch(url);
        const blob = await data.blob();
        const fileUrl = URL.createObjectURL(blob);
        const aTagEl = document.createElement("a");
        aTagEl.href = fileUrl;
        aTagEl.download = "YourFile";
        document.body.appendChild(aTagEl);
        aTagEl.click();
        button.innerHTML = "Download";
        URL.revokeObjectURL(fileUrl);
        aTagEl.remove();

    }
    catch{
        alert("failed to download...!");
        button.innerHTML = "Download";
    }
}