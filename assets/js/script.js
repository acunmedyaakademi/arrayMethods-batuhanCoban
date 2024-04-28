const dataTable = document.querySelector(".table")
const kucukler = document.querySelector(".kucukler")
const inappropriateBtn = document.querySelector(".inappropriateBtn")
const appropriateBtn = document.querySelector(".appropriate")

async function getData(){
    const response = await fetch("/assets/json/data.json")
    const data = await response.json();
    return data
}

const date = new Date();

async function listData(){
    const data = await getData();
    data.forEach(student => {
        dataTable.innerHTML += `
        <tr>
            <td>${student.ad}</td>
            <td>${student.soyad}</td>
            <td>${date.getFullYear() - student.dogumTarihi}</td>
            <td>${student.sehir}</td>
        </tr>

        `

        
        
    });
    
    const age = data.map(student => date.getFullYear() - student.dogumTarihi)
    const inappropriates = age.filter(studeAge => studeAge < 20)
    const appropriates = age.filter(studeAge => studeAge > 20)

    inappropriateBtn.addEventListener("click", function(e){
        e.preventDefault();
        kucukler.innerHTML = ""
        inappropriates.forEach(inappropriate => {
            kucukler.innerHTML += `
            <h2>${inappropriate}</h2>
            `
        })

    })



}
listData();

