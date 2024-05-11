(async () => {
    const proceso = (arreglo)=>{

        const datos = arreglo[location.hash[1]]
        for (let i = 0; i < 3; i++) {
            document.querySelector(".a"+i).innerHTML = datos["a"+i]
        }
    }

    try {
        const res = await fetch("info.json"),
        json = await res.json();

        proceso(json)
        document.addEventListener("onhaschange", ()=>{
            proceso(json)
        })
    } catch (error) {

    }
})()