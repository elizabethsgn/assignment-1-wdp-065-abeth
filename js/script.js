const btnEdit = document.getElementById('btn-edit');
const btnSubmit = document.getElementById('btn-submit')
const btnReset = document.getElementById('btn-reset')

let formBiodata = document.getElementById('form-biodata')
let inputNama = document.getElementById('input-nama')
let inputRole = document.getElementById('input-role')
let inputAvail = document.getElementById('input-avail')
let inputUsia = document.getElementById('input-usia')
let inputLokasi = document.getElementById('input-lokasi')
let inputPengalaman = document.getElementById('input-pengalaman')
let inputEmail = document.getElementById('input-email')
let textNama = document.getElementById('text-nama')
let textRole = document.getElementById('text-role')
let textAvail = document.getElementById('text-avail')
let textUsia = document.getElementById('text-usia')
let textLokasi = document.getElementById('text-lokasi')
let textPengalaman = document.getElementById('text-pengalaman')
let textEmail = document.getElementById('text-email')
let defaultNama = 'Elizabeth Siagian'
let defaultRole = 'Front End Designer'
let defaultAvail = 'Full Time'
let defaultUsia = '27'
let defaultLokasi = 'Jakarta, Indonesia'
let defaultPengalaman = '2'
let defaultEmail = 'siagian.elizabeth@gmail.com'
textNama.innerText = defaultNama
textRole.innerText = defaultRole
textAvail.innerText = defaultAvail
textUsia.innerText = defaultUsia
textLokasi.innerText = defaultLokasi
textPengalaman.innerText = defaultPengalaman
textEmail.innerText = defaultEmail

btnSubmit.addEventListener('click', function () {
    if (inputNama.value | inputRole.value | inputAvail.value | inputLokasi.value | inputPengalaman.value | !inputEmail.value) {
        if (confirm('Anda ingin melakukan perubahan?')) {
            textNama.innerText = inputNama.value;
            textRole.innerText = inputRole.value;
            textAvail.innerText = inputAvail.value;
            textUsia.innerText = inputUsia.value;
            textLokasi.innerText = inputLokasi.value;
            textPengalaman.innerText = inputPengalaman.value;
            textEmail.innerText = inputEmail.value;
            alert('Data berhasil disimpan');
            formBiodata.style.display = 'none'
            } else {
                alert('Data dibatalkan')
            }
    }
})

btnEdit.addEventListener('click', function() {
    console.log(formBiodata.style);
    if(formBiodata.style.display == 'none') {
        formBiodata.style.display = 'block'
        inputNama.value = textNama.innerText;
        inputRole.value = textRole.innerText;
        inputAvail.value = textAvail.innerText;
        inputUsia.value = textUsia.innerText;
        inputLokasi.value = textLokasi.innerText;
        inputPengalaman.value = textPengalaman.innerText;
        inputEmail.value = textEmail.innerText;
    } else {
        formBiodata.style.display = 'none'
    }
})

btnReset.addEventListener('click', function() {
    if (confirm('Data akan dikembalikan seperti semula?')) {
        inputNama.value = defaultNama;
        inputRole.value = defaultRole;
        inputAvail.value = defaultAvail;
        inputUsia.value = defaultUsia;
        inputLokasi.value = defaultLokasi;
        inputPengalaman.value = defaultPengalaman;
        inputEmail.value = defaultEmail;
        alert('Data berhasil dikembalikan');
        formBiodata.style.display == 'none'
        textNama.innerText = defaultNama;
        textRole.innerText = defaultRole;
        textAvail.innerText = defaultAvail;
        textUsia.innerText = defaultUsia;
        textLokasi.innerText = defaultLokasi;
        textPengalaman.innerText = defaultPengalaman;
        textEmail.innerText = defaultEmail;
    } else {
        
    }
} )
