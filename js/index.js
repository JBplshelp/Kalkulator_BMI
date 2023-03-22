//variables untuk mengambil data dari html
const laki_laki = document.querySelector('#laki-laki');
const perempuan = document.querySelector('#perempuan');
const form  = document.querySelector('.form');
const answer = document.querySelector('.answer');
const hasil = document.querySelector('#hasil');
const info = document.querySelector('.info');
const pernyataan_1 = document.querySelector('#pernyataan-1');
const pernyataan_2 = document.querySelector('#pernyataan-2');
const pernyataan_3 = document.querySelector('#pernyataan-3');
const pernyataan_4 = document.querySelector('#pernyataan-4');
var body = document.querySelector('body');
var reset = document.querySelector('#reset');
var reuse = document.querySelector('#hitung_lagi');


//fungsi untuk mencari tau hasil hitung BMI serta menunjukan hasil tersebut 
form.addEventListener('submit', (event) => {
    event.preventDefault();
	var gender = form.elements['jenis-kelamin'].value;
    var kg = form.elements['berat-badan'].value;
    var cm = form.elements['tinggi-badan'].value;
	var m = cm/100;
    var jumlah = kg / (m * m);
    if (jumlah < 18.5) {
    	pernyataan_1.textContent = 'Berat Badan Kurang';
    	pernyataan_2.textContent = 'berat badan anda kurang';
		pernyataan_3.textContent = 'sebagai ' + gender + ' berat badan anda berada di kategori berat badan yang kurang';
		pernyataan_4.textContent = 'anda disarankan untuk mencoba untuk menaikkan berat badan anda.';
    }else if(jumlah >= 18.5 && jumlah < 25){
    	pernyataan_1.textContent = 'Normal (Ideal)';
    	pernyataan_2.textContent = 'berat badan anda ideal';
		pernyataan_3.textContent = 'sebagai ' + gender + ' anda memiliki berat badan yang ideal';
		pernyataan_4.textContent = 'berat badan anda sudah ideal jagalah terus berat badan anda agar tetap memiliki berat badan yang ideal.';
    }else if(jumlah >= 25 && jumlah < 30){
    	pernyataan_1.textContent = 'Berat Badan Berlebihan';
    	pernyataan_2.textContent = 'berat badan anda berlebihan';
		pernyataan_3.textContent = 'sebagai ' + gender + ' anda memiliki berat badan yang berlebihan';
		pernyataan_4.textContent = 'anda disarankan untuk olahraga dan menjaga pola makan agar dapat menurunkan berat badan.';
    }else{
    	pernyataan_1.textContent = 'Obesitas';
    	pernyataan_2.textContent = 'Anda menderita obesitas';
		pernyataan_3.textContent = 'sebagai ' + gender + ' anda menderia obesitas dan sangat disarankan untuk mengurangi berat badan';
		pernyataan_4.textContent = 'cobalah untuk mengurangi porsi makan dan memulai diet ,serta mulailah berolahraga dengan teratur.';
    }
    hasil.textContent = parseInt(jumlah);
	answer.style.display = "block";
	form.style.display = "none";
	info.style.display = "none";
});

//fungsi untuk mereset kembali data
reset.onclick = function(){
	laki_laki.checked = false;
	perempuan.checked = false;
	form.elements['berat-badan'].value = '';
	form.elements['tinggi-badan'].value = '';
	form.elements['usia'].value = '';
}

//fungsi untuk mengulang pengisian data
reuse.onclick = function(){
	laki_laki.checked = false;
	perempuan.checked = false;
	form.elements['berat-badan'].value = '';
	form.elements['tinggi-badan'].value = '';
	form.elements['usia'].value = '';
	pernyataan_1.textContent = '';
	hasil.textContent = '';
    pernyataan_2.textContent = '';
	pernyataan_3.textContent = '';
	pernyataan_4.textContent = '';
	answer.style.display = "none";
	form.style.display = "block";
	info.style.display = "block";
}


