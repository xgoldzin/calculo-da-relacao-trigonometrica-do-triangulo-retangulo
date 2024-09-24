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

function calcVolBsk(){
    let valorA =  Number(document.getElementById("vlrA").value)
    let valorB =  Number(document.getElementById("vlrB").value)
    let valorC =  Number(document.getElementById("vlrC").value)
    const delta = ( (valorB ** 2) - 4 * valorA * valorC)
    const x1 = (((-1 *(valorB)) - (delta ** 0.5)) / (2 * valorA))
    const x2 =(((-1 *(valorB)) + (delta ** 0.5)) / (2 * valorA))

    document.getElementById("numx1").innerText = "X1: "+ x1
    document.getElementById("numx2").innerText = "X2: "+ x2
    document.getElementById("dtt").innerText = "Delta: "+ delta
}




