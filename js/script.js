function calcTrig(){
    let catetops =  Number(document.getElementById("catetop").value)
    let catetoads =  Number(document.getElementById("catetoad").value)
    const hip = ((catetops**2 + catetoads**2) **0.5)
    const seno = (catetops/hip)
    const cos = (catetoads/hip)
    const tang = (catetops/catetoads)
    document.getElementById("paragraf").innerText = ` Hipotenusa ${hip}`
    document.getElementById("paragrafsen").innerText = `Seno:${seno}`
    document.getElementById("paragrafcos").innerText = `Coseno: ${cos}`
    document.getElementById("paragraftang").innerText = `Tangente: ${tang}`
}

