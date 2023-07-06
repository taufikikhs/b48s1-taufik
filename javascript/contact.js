
function submitData(contact) {
    contact.preventDefault()

let nama = document.getElementById("input-nama").value
let email = document.getElementById("input-email").value
let phone = document.getElementById("input-phone").value
let subject = document.getElementById("input-subject").value
let message = document.getElementById("input-message").value


if (nama === ""){
    return alert('Nama Harus Di Isi !!!')
} else if (email === "") {
    return alert ('Email harus Di Isi !!!')
} 
 else if (phone === "") {
    return alert ('Nomer Telepon harus Di Isi !!!')
} 
else if (subject === "") {
    return alert ('Subject harus Di Isi !!!')
} 
 else if (message === "") {
    return alert ('Pesan harus Di Isi !!!')
} 

const emailReceiver ="ikhsanit449@gmail.com"

let a = document.createElement('a')
    a.href = `mailto:${emailReceiver}?subject=${subject}&body=Hai kak Nama Saya ${nama},\n${message}, Silahkan Kontak Saya Segera di Nomor ini ${phone}`
    a.click()
}
