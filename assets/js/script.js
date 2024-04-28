const dataTable = document.querySelector('.table');
const kucukler = document.querySelector('.kucukler');
const inappropriateBtn = document.querySelector('.inappropriateBtn');
const appropriateBtn = document.querySelector('.appropriateBtn');

async function getData() {
  const response = await fetch('/assets/json/data.json');
  const data = await response.json();
  return data;
}

const date = new Date();

async function listData() {
  const data = await getData();
  console.log(data);
  data.forEach((student) => {
    student.age = date.getFullYear() - student.dogumTarihi;

    dataTable.innerHTML += `
        <tr>
            <td>${student.ad}</td>
            <td>${student.soyad}</td>
            <td>${student.age}</td>
            <td>${student.sehir}</td>
        </tr>

        `;
  });

  const age = data.map((student) => date.getFullYear() - student.dogumTarihi);
  const inappropriates = age.filter((studeAge) => studeAge < 20);
  const appropriates = age.filter((studeAge) => studeAge > 20);

  appropriateBtn.addEventListener('click', function (e) {
    e.preventDefault();
    dataTable.innerHTML = '';
    data.forEach((student) => {
      student.age = date.getFullYear() - student.dogumTarihi;
      if (student.age > 20) {
        dataTable.innerHTML += `
        <tr>
            <td>${student.ad}</td>
            <td>${student.soyad}</td>
            <td>${student.age}</td>
            <td>${student.sehir}</td>
        </tr>

        `;
      }
    });
  });

  inappropriateBtn.addEventListener('click', function (e) {
    e.preventDefault();
    dataTable.innerHTML = '';
    data.forEach((student) => {
      student.age = date.getFullYear() - student.dogumTarihi;
      if (student.age < 20) {
        dataTable.innerHTML += `
        <tr>
            <td>${student.ad}</td>
            <td>${student.soyad}</td>
            <td>${student.age}</td>
            <td>${student.sehir}</td>
        </tr>

        `;
      }
    });
  });
}
listData();
