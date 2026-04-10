const koleksiBuku=[{id:1,judul:"Belajar HTML",penulis:"Arif",stok:5},
    {id:2,judul:"Desain Web UI/UX",penulis:"Nadia",stok:3},
    {id:3,judul:"Logika Algoritma",penulis:"Nauval",stok:7},
    {id:4,judul:"Sistem dan Jaringan",penulis:"Firman",stok:5}
];

const container = document.getElementById('product-container');

function displayBooks(){
    container.innerHTML="";
    koleksiBuku.forEach((buku,index)=>{
        const card = document.createElement('div');
        card.className='card';
        card.innerHTML =`
        <h3>${buku.judul}</h3>
        <p>Penulis:${buku.penulis}</p>
        <p>Stok:${buku.stok}</p>
        <button onclick="hapusBuku(${index})">Hapus</button>`;

        container.appendChild(card);
    });
}
function hapusBuku(index){
    koleksiBuku.splice(index,1);
    displayBooks();
}
const loanForm=document.getElementById('loanForm');

loanForm.addEventListener('submit',function(e){
    e.preventDefault();
    let isValid=true;

    const nama =document.getElementById('nama');
    const email =document.getElementById('email');
    const telepon =document.getElementById('telepon');

    document.querySelectorAll('.error').forEach(el => el.innerText = "");

    if(nama.value.trim() === ""){
        document.getElementById('err-nama').innerText="Nama wajib diisi!!!";
        isValid=false;
    }

    const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailPattern.test(email.value)){
        document.getElementById('err-email').innerText="Format email tidak valid";
        isValid=false;
    }

    if(telepon.value.length <10){
        document.getElementById('err-telepon').innerText="Minimal 10 angka!!!"
        isValid=false;
    }

    if(isValid){
        alert("Berhasil Meminjam Buku!");
        loanForm.reset();
    }
});

displayBooks();