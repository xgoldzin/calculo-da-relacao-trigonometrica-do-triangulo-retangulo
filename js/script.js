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

function calcMedia(){
    let nota1 = Number(document.getElementById("nt1").value)
    let nota2 = Number(document.getElementById("nt2").value)
    let nota3 = Number(document.getElementById("nt3").value)
    const media=((nota1 + nota2 + nota3) /3)
    if (media >= 7) {
        document.getElementById("resultmedia").innerText ="Aprovado"
    }
    else if (media<6){
        document.getElementById("resultmedia").innerText ="Reprovado"
    }

    else{
        document.getElementById("resultmedia").innerText ="Recuperação"
    }
}

function calcRenda(){
    let rendd = Number(document.getElementById("rendap").value)
    let quantid = Number(document.getElementById("qntdp").value)
    const percc = (rendd/quantid)
    if (percc <= 2118) {
        document.getElementById("resultrenda").innerText ="Renda Aprovada"
    }
    else{
        document.getElementById("resultrenda").innerText ="Renda Reprovada"
    }
}

function calcNuns(){
    let nm1 = Number(document.getElementById("num1").value)
    let nm2 = Number(document.getElementById("num2").value)
    const igual = nm1 * nm2
    const difer = nm1 / nm2
    if (nm1 == nm2) {
        document.getElementById("resultnuns").innerText = `${igual}`
    }
    else{
        document.getElementById("resultnuns").innerText =`${difer}`
    }
}

function calcImc(){
    let sexo = document.getElementById("sex").value.toLowerCase()
    let alt = Number(document.getElementById("altu").value)
    const calcmasc = (72.7 * alt) - 58
    const calcfem = ((62.1* alt) - 44.7)
    if (sexo == "m"){
        document.getElementById("resultimc").innerText = `Seu peso  masculino ideal é: ${calcmasc}`
    }
    else if (sexo == "f"){
        document.getElementById("resultimc").innerText = `Seu peso feminino ideal é:
        ${calcfem}`
    }
    
    else{
        document.getElementById("resultimc").innerText = `Sexo inválido`
    }
}
