const a = "hello world"
const b = "Hello World"
console.log({a,b})

const c = true

//Immutability const
//c = false  //tidak bisa

//variabel 
let d = "a"
console.log({d})
d = true //bisa
console.log({d})

const arg1 = "Gilbert";

const arg2 = "Vincenta";

function myFunction(){
    myFunction2();
    console.log("name run");  
}
function myFunction2(){
    console.log("name2 run");
}

function printName(firstName, lastName){
    console.log('Print Name: ' , {firstName, lastName});
}

function printName2({firstName, lastName}){
    console.log('Print Name 2: ' , {firstName, lastName});
}


const asyncExample = async () => {
    try{
        //coba lakukan ini, bisa gagal bisa tidak: 
        const request = new Request('https://pokeapi.co/api/v2/pokemon?limit=1&offset=0',{
            method: 'GET',
            
        });
        //ambil response
        const response = await fetch(request);
        //jadikan JSON
        const responseJSON = await response.json(); 
        //print
        console.log({response, responseJSON});
    }
    catch (e){ //kalau gagal, print error
        alert(e);
        console.log(e);
        throw e; 
    }
    finally{
        //gagal atau tidak, tetap lakukan ini...
    }

}

const syncExample =  () => {
    const request = new Request('https://pokeapi.co/api/v2/pokemon?limit=1&offset=0',{
            method: 'GET', 
    });
    fetch(request)
    .then((response) => response.json())
    .then((responseJSON) => { 
        console.log({ responseJSON});
    }).catch((e) => {//kalau gagal, print error
        alert(e);
        console.log(e);
        throw e; 
    })
}



function sampleDeclarativeProgramming(){
    const buah = ['apel', 'jeruk', 'pisang'];
    const sayur = ['tomat', 'sawi', 'bayam' ];
    const keranjang = ['apel', 'tomat' ];


    const semua = keranjang.every(v => buah.includes(v));

    const beberapa = keranjang.some(v => buah.includes(v));

    const buahAja = keranjang.filter(v => buah.includes(v));
    const sayurAja = keranjang.filter(v => sayur.includes(v));

    const integer = [1,2,3,4];
    const integerDiatas3 = integer.filter(v => v > 3);


    const daftarKelas = {
        murid: ['Andre', 'Bambang', "Sukinah"],
        guru: ['Jamil', 'Ryan']
    } //daftar dalam sebuah kelas

    const absen = ['Andre', 'Jamil', 'Ryan', 'Sukinah'];  //absensi hari ini

    //ubah nama -> murid / guru
    const muridGuru = absen.map((v) => {
        if (daftarKelas.murid.includes(v) ) {
            return 'murid';
        }
        return 'guru';
    })


    //shortcut
    const muridGuruShorthand = absen.map((v) => daftarKelas.murid.includes(v) ? 'murid': 'guru');

    //hitung ada berapa murid & guru yg datang hari ini? 
    const muridGuruCounter = muridGuru.reduce( (akumulasi, muridAtauGuru) => {
        let newCounter = akumulasi;
        switch (muridAtauGuru){
            case 'murid':
                newCounter.murid += 1;
                return newCounter;
            case 'guru':
                newCounter.guru += 1;
                return newCounter;
        }
    }, {
        murid: 0,
        guru: 0
    });

    //hitung total integer dalam sebuah array.
    const simpleCounter = [1,2,3,4,5].reduce((akumulasi, current)=> akumulasi+current, 0);


    //harga setiap item  = $20, berapa total harga keranjang? 
    const totalKeranjang = keranjang.reduce( (akumulasi, nilaiSekarang) => {
        //TODO: ubah menjadi: harga buah : $10, harga sayur : $15
        return akumulasi + 20;
    }, 0 );
    

    console.log({semua, beberapa, buahAja, sayurAja, integerDiatas3, totalKeranjang, muridGuruCounter, muridGuruShorthand, muridGuru, simpleCounter });
}
//define a function, (string) => boolean, where input is a string, 
//output: true if it's a palindrome , false if it's not
const palindrome = (text) => {
    for (let i = 0, j = text.length - 1 ; i < text.length / 2; i++, j-- ){
        if (text[i] !== text[j]){
            // alert(`${text} is not a palindrome`);
            console.log(`${text} is not a palindrome`);
            return false;
        }
    }

    //TODO: convert into while loop!
    // alert(`${text} is a palindrome`);
    console.log(`${text} is a palindrome`);
    return true; 
}
const anagram = ({text1, text2}) => {
    if (text1.length !== text2.length){
        console.log(`${text2} is not an anagram of ${text1}`);
    }
    const text1Lookup = {};
    const text2Lookup = {};
    pangramHelper({lookup: text1Lookup, text: text1});
    pangramHelper({lookup: text2Lookup,text:  text2});
    console.log({text1Lookup, text1, text2Lookup, text2});

    return Object.entries(text1Lookup).every(
      ( [letter, counter]) =>  text2Lookup[letter] === counter
     );



}

const pangram = (text) => {
    const englishAlhabets = 'abcdefghijklmnopqrstuvwxyz';
    const englishAlhabetsLookup = {};
    const textLookup = {};
    pangramHelper({lookup: englishAlhabetsLookup, text: englishAlhabets});
    pangramHelper({lookup: textLookup, text});
    const check =  Object.entries(englishAlhabetsLookup).every(
        ( [letter, minCounter]) =>  textLookup[letter] >= minCounter
       );
    check ? console.log(`${text} is a pangram`) :  console.log(`${text} is not a pangram`) 
    return check;
  

}

const pangramHelper = ({lookup, text}) => {
    for (let i = 0; i < text.length ; i++){
        const currentCharacter = text[i];
        if (! lookup[currentCharacter.toLowerCase()] ){
            lookup[currentCharacter.toLowerCase()] = 1;
        }
        else {
            lookup[currentCharacter.toLowerCase()] += 1;
        }
    }
}

myFunction();

//TODO: ganti pakai shorthand notation.
printName2({firstName: arg1, lastName: arg2});
printName( arg1,arg2);

sampleDeclarativeProgramming();

asyncExample();
//syncExample();
palindrome('baba');
console.log('anagram', anagram({
    text1: 'ababc', text2:'bab'
}))
console.log('pangram', pangram("The quick brown fox jumps over the lazy do"))
console.log('pangram', pangram("Two driven jocks help fax my big quiz"))