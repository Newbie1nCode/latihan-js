// ini adalah cara untuk menampilkan atau memunculkan allert
const button = document.getElementById('btn')
button.addEventListener('click', () => {
alert('cihuyy');
    }
)


// ini adalah cara merubah background button
// const tombol = document.getElementById('change')
// tombol.addEventListener('click', () => {
//     tombol.style.backgroundColor = 'blue'

// })


const berubah = document.getElementById('background')
const ubah = document.getElementById('merubah')

ubah.addEventListener('click', () => {
    berubah.style.backgroundColor = 'red'
})

berubah.addEventListener('mouseover', () => {
    berubah.style.backgroundColor = 'blue'
})