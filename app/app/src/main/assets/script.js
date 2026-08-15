document.addEventListener("DOMContentLoaded", function () {

// ==========================================  
// DATA QUIZ  
// ==========================================  

const soal = [

    // ==========================================
    // ANIMALS — 20 SOAL
    // ==========================================

    {
        gambar: "cat.png",
        pertanyaan: "What animal is this?",
        jawaban: ["Cat", "Dog", "Fish", "Bird"],
        benar: 0
    },
    {
        gambar: "dog.png",
        pertanyaan: "What animal is this?",
        jawaban: ["Cat", "Bird", "Dog", "Fish"],
        benar: 2
    },
    {
        gambar: "bird.png",
        pertanyaan: "What animal can fly?",
        jawaban: ["Fish", "Bird", "Dog", "Cat"],
        benar: 1
    },
    {
        gambar: "fish.png",
        pertanyaan: "What animal lives in water?",
        jawaban: ["Cat", "Fish", "Dog", "Rabbit"],
        benar: 1
    },
    {
        gambar: "rabbit.png",
        pertanyaan: "Which animal has long ears?",
        jawaban: ["Rabbit", "Lion", "Fish", "Cow"],
        benar: 0
    },
    {
        gambar: "lion.png",
        pertanyaan: "Which animal is known as the king of the jungle?",
        jawaban: ["Dog", "Lion", "Fish", "Rabbit"],
        benar: 1
    },
    {
        gambar: "elephant.png",
        pertanyaan: "Which animal has a long trunk?",
        jawaban: ["Cat", "Elephant", "Bird", "Dog"],
        benar: 1
    },
    {
        gambar: "monkey.png",
        pertanyaan: "Which animal likes to climb trees?",
        jawaban: ["Fish", "Monkey", "Elephant", "Lion"],
        benar: 1
    },
    {
        gambar: "cow.png",
        pertanyaan: "Which animal gives us milk?",
        jawaban: ["Lion", "Cow", "Bird", "Fish"],
        benar: 1
    },
    {
        gambar: "chicken.png",
        pertanyaan: "Which animal lays eggs?",
        jawaban: ["Dog", "Cat", "Chicken", "Cow"],
        benar: 2
    },
    {
        gambar: "tiger.png",
        pertanyaan: "What animal has black and orange stripes?",
        jawaban: ["Tiger", "Cow", "Fish", "Rabbit"],
        benar: 0
    },
    {
        gambar: "giraffe.png",
        pertanyaan: "Which animal has a very long neck?",
        jawaban: ["Giraffe", "Lion", "Dog", "Fish"],
        benar: 0
    },
    {
        gambar: "horse.png",
        pertanyaan: "Which animal can people ride?",
        jawaban: ["Fish", "Horse", "Bird", "Cat"],
        benar: 1
    },
    {
        gambar: "penguin.png",
        pertanyaan: "Which animal cannot fly but can swim?",
        jawaban: ["Penguin", "Eagle", "Cat", "Horse"],
        benar: 0
    },
    {
        gambar: "turtle.png",
        pertanyaan: "Which animal has a shell?",
        jawaban: ["Dog", "Turtle", "Lion", "Bird"],
        benar: 1
    },
    {
        gambar: "frog.png",
        pertanyaan: "Which animal can jump and lives near water?",
        jawaban: ["Frog", "Cow", "Horse", "Tiger"],
        benar: 0
    },
    {
        gambar: "panda.png",
        pertanyaan: "Which animal likes to eat bamboo?",
        jawaban: ["Panda", "Lion", "Dog", "Fish"],
        benar: 0
    },
    {
        gambar: "bear.png",
        pertanyaan: "Which animal is big and has thick fur?",
        jawaban: ["Bear", "Bird", "Fish", "Chicken"],
        benar: 0
    },
    {
        gambar: "duck.png",
        pertanyaan: "Which animal can swim and says quack?",
        jawaban: ["Cat", "Duck", "Lion", "Horse"],
        benar: 1
    },
    {
        gambar: "butterfly.png",
        pertanyaan: "Which animal has colorful wings?",
        jawaban: ["Butterfly", "Fish", "Cow", "Dog"],
        benar: 0
    },


    // ==========================================
    // COLORS — 10 SOAL
    // ==========================================

    {
        pertanyaan: "What color is the sky on a clear day?",
        jawaban: ["Blue", "Green", "Red", "Black"],
        benar: 0
    },
    {
        pertanyaan: "What color is grass?",
        jawaban: ["Blue", "Green", "Purple", "Black"],
        benar: 1
    },
    {
        pertanyaan: "What color is a banana?",
        jawaban: ["Red", "Yellow", "Blue", "Black"],
        benar: 1
    },
    {
        pertanyaan: "What color is an apple usually?",
        jawaban: ["Red", "Blue", "Purple", "White"],
        benar: 0
    },
    {
        pertanyaan: "What color is snow?",
        jawaban: ["Black", "Brown", "White", "Green"],
        benar: 2
    },
    {
        pertanyaan: "What color is coal?",
        jawaban: ["White", "Pink", "Black", "Yellow"],
        benar: 2
    },
    {
        pertanyaan: "What color is an orange?",
        jawaban: ["Orange", "Blue", "Purple", "Black"],
        benar: 0
    },
    {
        pertanyaan: "Which one is a color?",
        jawaban: ["Purple", "Table", "Run", "Apple"],
        benar: 0
    },
    {
        pertanyaan: "What color are most leaves?",
        jawaban: ["Green", "Pink", "Blue", "Black"],
        benar: 0
    },
    {
        pertanyaan: "What color is a strawberry?",
        jawaban: ["Blue", "Red", "Green", "White"],
        benar: 1
    },


    // ==========================================
    // NUMBERS — 15 SOAL
    // ==========================================

    {
        pertanyaan: "What number comes after 5?",
        jawaban: ["4", "6", "7", "8"],
        benar: 1
    },
    {
        pertanyaan: "What number comes before 10?",
        jawaban: ["8", "9", "11", "12"],
        benar: 1
    },
    {
        pertanyaan: "How many days are there in a week?",
        jawaban: ["Five", "Six", "Seven", "Eight"],
        benar: 2
    },
    {
        pertanyaan: "How many months are there in a year?",
        jawaban: ["Ten", "Eleven", "Twelve", "Thirteen"],
        benar: 2
    },
    {
        pertanyaan: "What number comes after 19?",
        jawaban: ["18", "20", "21", "17"],
        benar: 1
    },
    {
        pertanyaan: "What number comes before 50?",
        jawaban: ["48", "47", "49", "51"],
        benar: 2
    },
    {
        pertanyaan: "Which word is a number?",
        jawaban: ["Seven", "Green", "Happy", "Chair"],
        benar: 0
    },
    {
        pertanyaan: "What number comes after 10?",
        jawaban: ["9", "11", "12", "8"],
        benar: 1
    },
    {
        pertanyaan: "What number comes before 20?",
        jawaban: ["18", "19", "21", "22"],
        benar: 1
    },
    {
        pertanyaan: "How many fingers are on one hand?",
        jawaban: ["Three", "Four", "Five", "Six"],
        benar: 2
    },
    {
        pertanyaan: "What number is after 29?",
        jawaban: ["28", "30", "31", "27"],
        benar: 1
    },
    {
        pertanyaan: "What number comes before 100?",
        jawaban: ["98", "97", "99", "101"],
        benar: 2
    },
    {
        pertanyaan: "Which number is the biggest?",
        jawaban: ["5", "12", "8", "3"],
        benar: 1
    },
    {
        pertanyaan: "Which number is the smallest?",
        jawaban: ["10", "2", "8", "5"],
        benar: 1
    },
    {
        pertanyaan: "How many hours are there in one day?",
        jawaban: ["12", "18", "24", "30"],
        benar: 2
    },


    // ==========================================
    // FOOD — 10 SOAL
    // ==========================================

    {
        gambar: "apple.png",
        pertanyaan: "What fruit is this?",
        jawaban: ["Apple", "Banana", "Orange", "Cake"],
        benar: 0
    },
    {
        gambar: "banana.png",
        pertanyaan: "What fruit is this?",
        jawaban: ["Apple", "Banana", "Grapes", "Pizza"],
        benar: 1
    },
    {
        gambar: "pizza.png",
        pertanyaan: "What food is this?",
        jawaban: ["Burger", "Pizza", "Cake", "Rice"],
        benar: 1
    },
    {
        gambar: "burger.png",
        pertanyaan: "What food is this?",
        jawaban: ["Burger", "Bread", "Donut", "Egg"],
        benar: 0
    },
    {
        gambar: "rice.png",
        pertanyaan: "What food is this?",
        jawaban: ["Corn", "Carrot", "Rice", "Bread"],
        benar: 1
    },
    {
        gambar: "icecream.png",
        pertanyaan: "What sweet food is this?",
        jawaban: ["Cake", "Donut", "Ice Cream", "Cookies"],
        benar: 2
    },
    {
        pertanyaan: "Which one is a fruit?",
        jawaban: ["Apple", "Carrot", "Rice", "Bread"],
        benar: 0
    },
    {
        pertanyaan: "Which one is a vegetable?",
        jawaban: ["Banana", "Apple", "Carrot", "Donut"],
        benar: 2
    },
    {
        pertanyaan: "Which food is round and often red?",
        jawaban: ["Apple", "Rice", "Bread", "Milk"],
        benar: 0
    },
    {
        pertanyaan: "Which food is usually cold and sweet?",
        jawaban: ["Soup", "Ice Cream", "Rice", "Bread"],
        benar: 1
    },


    // ==========================================
    // GRAMMAR / BASIC ENGLISH — 20 SOAL
    // ==========================================

    {
        pertanyaan: "What is the opposite of big?",
        jawaban: ["Tall", "Small", "Long", "Fast"],
        benar: 1
    },
    {
        pertanyaan: "What is the opposite of hot?",
        jawaban: ["Cold", "Warm", "Big", "Fast"],
        benar: 0
    },
    {
        pertanyaan: "What is the opposite of happy?",
        jawaban: ["Funny", "Sad", "Good", "Nice"],
        benar: 1
    },
    {
        pertanyaan: "What is the opposite of fast?",
        jawaban: ["Slow", "Quick", "Strong", "Big"],
        benar: 0
    },
    {
        pertanyaan: "What do we use to see?",
        jawaban: ["Eyes", "Ears", "Hands", "Feet"],
        benar: 0
    },
    {
        pertanyaan: "What do we use to hear?",
        jawaban: ["Eyes", "Nose", "Ears", "Mouth"],
        benar: 2
    },
    {
        pertanyaan: "What do we use to smell?",
        jawaban: ["Nose", "Eyes", "Hands", "Feet"],
        benar: 0
    },
    {
        pertanyaan: "What do we use to walk?",
        jawaban: ["Hands", "Feet", "Eyes", "Ears"],
        benar: 1
    },
    {
        pertanyaan: "Complete the sentence: I ___ a student.",
        jawaban: ["am", "is", "are", "be"],
        benar: 0
    },
    {
        pertanyaan: "Complete the sentence: She ___ happy.",
        jawaban: ["am", "are", "is", "be"],
        benar: 2
    },
    {
        pertanyaan: "Complete the sentence: They ___ friends.",
        jawaban: ["is", "am", "are", "be"],
        benar: 2
    },
    {
        pertanyaan: "Complete the sentence: He ___ my brother.",
        jawaban: ["am", "is", "are", "be"],
        benar: 1
    },
    {
        pertanyaan: "Complete the sentence: We ___ ready.",
        jawaban: ["am", "is", "are", "be"],
        benar: 2
    },
    {
        pertanyaan: "Complete the sentence: You ___ my friend.",
        jawaban: ["am", "is", "are", "be"],
        benar: 2
    },
    {
        pertanyaan: "Which sentence is correct?",
        jawaban: [
            "I is happy.",
            "I am happy.",
            "I are happy.",
            "I be happy."
        ],
        benar: 1
    },
    {
        pertanyaan: "Which word means 'besar'?",
        jawaban: ["Small", "Fast", "Big", "Cold"],
        benar: 2
    },
    {
        pertanyaan: "Which word means 'kecil'?",
        jawaban: ["Big", "Small", "Tall", "Long"],
        benar: 1
    },
    {
        pertanyaan: "Complete: He ___ a cat.",
        jawaban: ["have", "has", "are", "am"],
        benar: 1
    },
    {
        pertanyaan: "Complete: I ___ a dog.",
        jawaban: ["have", "has", "is", "are"],
        benar: 0
    },
    {
        pertanyaan: "Complete: She ___ English.",
        jawaban: ["speak", "speaks", "speaking", "am"],
        benar: 1
    }

];


// ==========================================  
// MATERI ANIMALS  
// ==========================================  

const materiAnimals = [  
{ gambar: "cat.png", english: "Cat", indonesia: "Kucing" },  
{ gambar: "dog.png", english: "Dog", indonesia: "Anjing" },  
{ gambar: "bird.png", english: "Bird", indonesia: "Burung" },  
{ gambar: "fish.png", english: "Fish", indonesia: "Ikan" },  
{ gambar: "rabbit.png", english: "Rabbit", indonesia: "Kelinci" },  
{ gambar: "lion.png", english: "Lion", indonesia: "Singa" },  
{ gambar: "elephant.png", english: "Elephant", indonesia: "Gajah" },  
{ gambar: "monkey.png", english: "Monkey", indonesia: "Monyet" },  
{ gambar: "cow.png", english: "Cow", indonesia: "Sapi" },  
{ gambar: "chicken.png", english: "Chicken", indonesia: "Ayam" },  

{ gambar: "horse.png", english: "Horse", indonesia: "Kuda" },  
{ gambar: "tiger.png", english: "Tiger", indonesia: "Harimau" },  
{ gambar: "bear.png", english: "Bear", indonesia: "Beruang" },  
{ gambar: "frog.png", english: "Frog", indonesia: "Katak" },  
{ gambar: "duck.png", english: "Duck", indonesia: "Bebek" },  
{ gambar: "sheep.png", english: "Sheep", indonesia: "Domba" },  
{ gambar: "goat.png", english: "Goat", indonesia: "Kambing" },  
{ gambar: "snake.png", english: "Snake", indonesia: "Ular" },  
{ gambar: "turtle.png", english: "Turtle", indonesia: "Kura-kura" },  
{ gambar: "zebra.png", english: "Zebra", indonesia: "Zebra" }

];

// ==========================================  
// MATERI COLORS  
// ==========================================  

const materiColors = [  
    { english: "Red", indonesia: "Merah", color: "#ef4444" },  
    { english: "Blue", indonesia: "Biru", color: "#3b82f6" },  
    { english: "Green", indonesia: "Hijau", color: "#22c55e" },  
    { english: "Yellow", indonesia: "Kuning", color: "#facc15" },  
    { english: "Orange", indonesia: "Oranye", color: "#f97316" },  
    { english: "Purple", indonesia: "Ungu", color: "#a855f7" },  
    { english: "Pink", indonesia: "Merah Muda", color: "#ec4899" },  
    { english: "Black", indonesia: "Hitam", color: "#111827" },  
    { english: "White", indonesia: "Putih", color: "#ffffff" },  
    { english: "Brown", indonesia: "Cokelat", color: "#92400e" }  
];  


// ==========================================  
// MATERI NUMBERS  
// ==========================================  

const materiNumbers = [  
{ english: "One", indonesia: "Satu", number: 1 },  
{ english: "Two", indonesia: "Dua", number: 2 },  
{ english: "Three", indonesia: "Tiga", number: 3 },  
{ english: "Four", indonesia: "Empat", number: 4 },  
{ english: "Five", indonesia: "Lima", number: 5 },  
{ english: "Six", indonesia: "Enam", number: 6 },  
{ english: "Seven", indonesia: "Tujuh", number: 7 },  
{ english: "Eight", indonesia: "Delapan", number: 8 },  
{ english: "Nine", indonesia: "Sembilan", number: 9 },  
{ english: "Ten", indonesia: "Sepuluh", number: 10 },  

{ english: "Eleven", indonesia: "Sebelas", number: 11 },  
{ english: "Twelve", indonesia: "Dua Belas", number: 12 },  
{ english: "Thirteen", indonesia: "Tiga Belas", number: 13 },  
{ english: "Fourteen", indonesia: "Empat Belas", number: 14 },  
{ english: "Fifteen", indonesia: "Lima Belas", number: 15 },  
{ english: "Sixteen", indonesia: "Enam Belas", number: 16 },  
{ english: "Seventeen", indonesia: "Tujuh Belas", number: 17 },  
{ english: "Eighteen", indonesia: "Delapan Belas", number: 18 },  
{ english: "Nineteen", indonesia: "Sembilan Belas", number: 19 },  
{ english: "Twenty", indonesia: "Dua Puluh", number: 20 },  

{ english: "Twenty-one", indonesia: "Dua Puluh Satu", number: 21 },  
{ english: "Twenty-two", indonesia: "Dua Puluh Dua", number: 22 },  
{ english: "Twenty-three", indonesia: "Dua Puluh Tiga", number: 23 },  
{ english: "Twenty-four", indonesia: "Dua Puluh Empat", number: 24 },  
{ english: "Twenty-five", indonesia: "Dua Puluh Lima", number: 25 },  
{ english: "Twenty-six", indonesia: "Dua Puluh Enam", number: 26 },  
{ english: "Twenty-seven", indonesia: "Dua Puluh Tujuh", number: 27 },  
{ english: "Twenty-eight", indonesia: "Dua Puluh Delapan", number: 28 },  
{ english: "Twenty-nine", indonesia: "Dua Puluh Sembilan", number: 29 },  
{ english: "Thirty", indonesia: "Tiga Puluh", number: 30 },  

{ english: "Thirty-one", indonesia: "Tiga Puluh Satu", number: 31 },  
{ english: "Thirty-two", indonesia: "Tiga Puluh Dua", number: 32 },  
{ english: "Thirty-three", indonesia: "Tiga Puluh Tiga", number: 33 },  
{ english: "Thirty-four", indonesia: "Tiga Puluh Empat", number: 34 },  
{ english: "Thirty-five", indonesia: "Tiga Puluh Lima", number: 35 },  
{ english: "Thirty-six", indonesia: "Tiga Puluh Enam", number: 36 },  
{ english: "Thirty-seven", indonesia: "Tiga Puluh Tujuh", number: 37 },  
{ english: "Thirty-eight", indonesia: "Tiga Puluh Delapan", number: 38 },  
{ english: "Thirty-nine", indonesia: "Tiga Puluh Sembilan", number: 39 },  
{ english: "Forty", indonesia: "Empat Puluh", number: 40 },  

{ english: "Forty-one", indonesia: "Empat Puluh Satu", number: 41 },  
{ english: "Forty-two", indonesia: "Empat Puluh Dua", number: 42 },  
{ english: "Forty-three", indonesia: "Empat Puluh Tiga", number: 43 },  
{ english: "Forty-four", indonesia: "Empat Puluh Empat", number: 44 },  
{ english: "Forty-five", indonesia: "Empat Puluh Lima", number: 45 },  
{ english: "Forty-six", indonesia: "Empat Puluh Enam", number: 46 },  
{ english: "Forty-seven", indonesia: "Empat Puluh Tujuh", number: 47 },  
{ english: "Forty-eight", indonesia: "Empat Puluh Delapan", number: 48 },  
{ english: "Forty-nine", indonesia: "Empat Puluh Sembilan", number: 49 },  
{ english: "Fifty", indonesia: "Lima Puluh", number: 50 }

];

// ==========================================  
// MATERI FOOD  
// ==========================================  

const materiFood = [  
{ gambar: "apple.png", english: "Apple", indonesia: "Apel" },  
{ gambar: "banana.png", english: "Banana", indonesia: "Pisang" },  
{ gambar: "orange.png", english: "Orange", indonesia: "Jeruk" },  
{ gambar: "strawberry.png", english: "Strawberry", indonesia: "Stroberi" },  
{ gambar: "watermelon.png", english: "Watermelon", indonesia: "Semangka" },  
{ gambar: "grapes.png", english: "Grapes", indonesia: "Anggur" },  
{ gambar: "pizza.png", english: "Pizza", indonesia: "Pizza" },  
{ gambar: "burger.png", english: "Burger", indonesia: "Burger" },  
{ gambar: "rice.png", english: "Rice", indonesia: "Nasi" },  
{ gambar: "bread.png", english: "Bread", indonesia: "Roti" },  

{ gambar: "cake.png", english: "Cake", indonesia: "Kue" },  
{ gambar: "donut.png", english: "Donut", indonesia: "Donat" },  
{ gambar: "egg.png", english: "Egg", indonesia: "Telur" },  
{ gambar: "cheese.png", english: "Cheese", indonesia: "Keju" },  
{ gambar: "milk.png", english: "Milk", indonesia: "Susu" },  
{ gambar: "icecream.png", english: "Ice Cream", indonesia: "Es Krim" },  
{ gambar: "noodles.png", english: "Noodles", indonesia: "Mie" },  
{ gambar: "chickenfood.png", english: "Chicken", indonesia: "Ayam" },  
{ gambar: "sandwich.png", english: "Sandwich", indonesia: "Roti Lapis" },  
{ gambar: "soup.png", english: "Soup", indonesia: "Sup" }

];

// ==========================================  
// 50 MATERI GRAMMAR  
// ==========================================  

const materiGrammar = [  

    { english: "I am", indonesia: "Digunakan untuk mengatakan 'Saya adalah'.", contoh: "I am happy. = Saya senang." },  
    { english: "You are", indonesia: "Digunakan untuk mengatakan 'Kamu adalah'.", contoh: "You are my friend. = Kamu adalah temanku." },  
    { english: "He is", indonesia: "Digunakan untuk laki-laki.", contoh: "He is tall. = Dia tinggi." },  
    { english: "She is", indonesia: "Digunakan untuk perempuan.", contoh: "She is happy. = Dia senang." },  
    { english: "It is", indonesia: "Digunakan untuk benda atau hewan.", contoh: "It is a cat. = Itu adalah seekor kucing." },  
    { english: "We are", indonesia: "Digunakan untuk kami atau kita.", contoh: "We are students. = Kami adalah murid." },  
    { english: "They are", indonesia: "Digunakan untuk banyak orang atau benda.", contoh: "They are friends. = Mereka berteman." },  
    { english: "I am not", indonesia: "Bentuk negatif dari I am.", contoh: "I am not sad. = Saya tidak sedih." },  
    { english: "He is not", indonesia: "Bentuk negatif dari He is.", contoh: "He is not angry. = Dia tidak marah." },  
    { english: "They are not", indonesia: "Bentuk negatif dari They are.", contoh: "They are not ready. = Mereka belum siap." },  

    { english: "What is your name?", indonesia: "Digunakan untuk menanyakan nama.", contoh: "What is your name? = Siapa namamu?" },  
    { english: "My name is...", indonesia: "Digunakan untuk memperkenalkan nama.", contoh: "My name is John. = Nama saya John." },  
    { english: "Who is he?", indonesia: "Digunakan untuk menanyakan laki-laki.", contoh: "Who is he? = Siapa dia?" },  
    { english: "Who is she?", indonesia: "Digunakan untuk menanyakan perempuan.", contoh: "Who is she? = Siapa dia?" },  
    { english: "This is", indonesia: "Digunakan untuk sesuatu yang dekat.", contoh: "This is a book. = Ini adalah buku." },  
    { english: "That is", indonesia: "Digunakan untuk sesuatu yang jauh.", contoh: "That is a car. = Itu adalah mobil." },  
    { english: "These are", indonesia: "Digunakan untuk banyak benda yang dekat.", contoh: "These are books. = Ini adalah buku-buku." },  
    { english: "Those are", indonesia: "Digunakan untuk banyak benda yang jauh.", contoh: "Those are cars. = Itu adalah mobil-mobil." },  

    { english: "A", indonesia: "Digunakan sebelum kata benda tunggal dengan bunyi konsonan.", contoh: "a cat, a dog, a book" },  
    { english: "An", indonesia: "Digunakan sebelum kata benda tunggal dengan bunyi vokal.", contoh: "an apple, an egg" },  
    { english: "The", indonesia: "Digunakan untuk benda yang sudah diketahui.", contoh: "The cat is sleeping." },  

    { english: "I have", indonesia: "Berarti saya mempunyai.", contoh: "I have a cat. = Saya mempunyai seekor kucing." },  
    { english: "He has", indonesia: "Untuk he, she, atau it gunakan has.", contoh: "He has a dog." },  
    { english: "Do", indonesia: "Digunakan dengan I, you, we, they.", contoh: "Do you like pizza?" },  
    { english: "Does", indonesia: "Digunakan dengan he, she, it.", contoh: "Does she like cats?" },  
    { english: "Don't", indonesia: "Bentuk negatif untuk I, you, we, they.", contoh: "I don't like coffee." },  
    { english: "Doesn't", indonesia: "Bentuk negatif untuk he, she, it.", contoh: "He doesn't like milk." },  

    { english: "Simple Present", indonesia: "Digunakan untuk kebiasaan atau fakta.", contoh: "I eat breakfast every day." },  
    { english: "I play", indonesia: "Kata kerja dasar digunakan dengan I.", contoh: "I play football." },  
    { english: "He plays", indonesia: "Untuk he, she, it kata kerja biasanya mendapat s/es.", contoh: "He plays football." },  
    { english: "She likes", indonesia: "Untuk she, kata kerja biasanya mendapat s.", contoh: "She likes ice cream." },  

    { english: "Present Continuous", indonesia: "Digunakan untuk sesuatu yang sedang terjadi.", contoh: "I am eating." },  
    { english: "I am + verb-ing", indonesia: "Digunakan untuk I.", contoh: "I am studying." },  
    { english: "He is + verb-ing", indonesia: "Digunakan untuk he.", contoh: "He is running." },  
    { english: "They are + verb-ing", indonesia: "Digunakan untuk they.", contoh: "They are playing." },  

    { english: "Can", indonesia: "Berarti bisa atau dapat.", contoh: "I can swim. = Saya bisa berenang." },  
    { english: "Can't", indonesia: "Bentuk negatif dari can.", contoh: "I can't fly." },  
    { english: "Can you...?", indonesia: "Digunakan untuk menanyakan kemampuan.", contoh: "Can you swim?" },  

    { english: "Like", indonesia: "Berarti suka.", contoh: "I like pizza." },  
    { english: "Love", indonesia: "Berarti sangat suka.", contoh: "I love animals." },  
    { english: "Want", indonesia: "Berarti ingin.", contoh: "I want water." },  
    { english: "Need", indonesia: "Berarti membutuhkan.", contoh: "I need help." },  

    { english: "Big / Small", indonesia: "Big berarti besar, Small berarti kecil.", contoh: "The elephant is big." },  
    { english: "Hot / Cold", indonesia: "Hot berarti panas, Cold berarti dingin.", contoh: "The ice is cold." },  
    { english: "Fast / Slow", indonesia: "Fast berarti cepat, Slow berarti lambat.", contoh: "The car is fast." },  
    { english: "Happy / Sad", indonesia: "Happy berarti senang, Sad berarti sedih.", contoh: "She is happy." },  

    { english: "In", indonesia: "Berarti di dalam.", contoh: "The cat is in the box." },  
    { english: "On", indonesia: "Berarti di atas.", contoh: "The book is on the table." },  
    { english: "Under", indonesia: "Berarti di bawah.", contoh: "The cat is under the chair." },  
    { english: "Next to", indonesia: "Berarti di sebelah.", contoh: "The bag is next to the chair." }  
    
];

// ==========================================
// DAILY QUEST — 50 SOAL SULIT
// ==========================================

const dailySoal = [

    {
        pertanyaan: "Choose the correct sentence.",
        jawaban: [
            "She don't like apples.",
            "She doesn't likes apples.",
            "She doesn't like apples.",
            "She not like apples."
        ],
        benar: 2
    },

    {
        pertanyaan: "Complete the sentence: If I ___ enough money, I would buy a new phone.",
        jawaban: [
            "have",
            "had",
            "will have",
            "having"
        ],
        benar: 1
    },

    {
        pertanyaan: "Which sentence is grammatically correct?",
        jawaban: [
            "He has went home.",
            "He has gone home.",
            "He have gone home.",
            "He is gone home."
        ],
        benar: 1
    },

    {
        pertanyaan: "Complete the sentence: She ___ English for three years.",
        jawaban: [
            "studies",
            "studied",
            "has studied",
            "is study"
        ],
        benar: 2
    },

    {
        pertanyaan: "What is the past tense of 'teach'?",
        jawaban: [
            "Teached",
            "Taught",
            "Teach",
            "Teaching"
        ],
        benar: 1
    },

    {
        pertanyaan: "Choose the correct word: I am interested ___ learning English.",
        jawaban: [
            "on",
            "at",
            "in",
            "with"
        ],
        benar: 2
    },

    {
        pertanyaan: "Complete: Neither John nor his friends ___ ready.",
        jawaban: [
            "is",
            "are",
            "was",
            "be"
        ],
        benar: 1
    },

    {
        pertanyaan: "Which sentence uses the comparative form correctly?",
        jawaban: [
            "This book is more interesting than that one.",
            "This book is interestinger than that one.",
            "This book is most interesting than that one.",
            "This book more interesting that one."
        ],
        benar: 0
    },

    {
        pertanyaan: "Complete: By the time we arrived, the movie ___.",
        jawaban: [
            "started",
            "has started",
            "had started",
            "starts"
        ],
        benar: 2
    },

    {
        pertanyaan: "What does 'generous' mean?",
        jawaban: [
            "Willing to give or share",
            "Always angry",
            "Very lazy",
            "Unable to speak"
        ],
        benar: 0
    },

    {
        pertanyaan: "Complete: I wish I ___ how to swim.",
        jawaban: [
            "know",
            "knew",
            "will know",
            "knowing"
        ],
        benar: 1
    },

    {
        pertanyaan: "Choose the correct sentence.",
        jawaban: [
            "There is too many people.",
            "There are too many people.",
            "There are too much people.",
            "There is too much people."
        ],
        benar: 1
    },

    {
        pertanyaan: "Complete: She asked me where I ___.",
        jawaban: [
            "live",
            "lived",
            "am living",
            "will live"
        ],
        benar: 1
    },

    {
        pertanyaan: "What is the synonym of 'rapid'?",
        jawaban: [
            "Slow",
            "Quick",
            "Weak",
            "Quiet"
        ],
        benar: 1
    },

    {
        pertanyaan: "Complete: He is the ___ student in the class.",
        jawaban: [
            "smart",
            "smarter",
            "smartest",
            "more smart"
        ],
        benar: 2
    },

    {
        pertanyaan: "Choose the correct sentence.",
        jawaban: [
            "I have seen him yesterday.",
            "I saw him yesterday.",
            "I have saw him yesterday.",
            "I see him yesterday."
        ],
        benar: 1
    },

    {
        pertanyaan: "Complete: If it ___ tomorrow, we will stay at home.",
        jawaban: [
            "rain",
            "rains",
            "rained",
            "raining"
        ],
        benar: 1
    },

    {
        pertanyaan: "What does 'borrow' mean?",
        jawaban: [
            "To give something permanently",
            "To take something temporarily",
            "To destroy something",
            "To buy something expensive"
        ],
        benar: 1
    },

    {
        pertanyaan: "Complete: I have lived here ___ 2020.",
        jawaban: [
            "for",
            "since",
            "from",
            "during"
        ],
        benar: 1
    },

    {
        pertanyaan: "Choose the correct sentence.",
        jawaban: [
            "She is good in math.",
            "She is good at math.",
            "She is good on math.",
            "She good at math."
        ],
        benar: 1
    },

    {
        pertanyaan: "Complete: The homework ___ by the students yesterday.",
        jawaban: [
            "completed",
            "was completed",
            "is completed",
            "has complete"
        ],
        benar: 1
    },

    {
        pertanyaan: "What is the opposite of 'ancient'?",
        jawaban: [
            "Old",
            "Modern",
            "Historical",
            "Traditional"
        ],
        benar: 1
    },

    {
        pertanyaan: "Complete: She speaks English ___ than I do.",
        jawaban: [
            "good",
            "better",
            "best",
            "well"
        ],
        benar: 1
    },

    {
        pertanyaan: "Choose the correct sentence.",
        jawaban: [
            "He suggested to go home.",
            "He suggested going home.",
            "He suggested go home.",
            "He suggest going home."
        ],
        benar: 1
    },

    {
        pertanyaan: "Complete: I ___ dinner when the phone rang.",
        jawaban: [
            "cook",
            "was cooking",
            "have cooked",
            "will cook"
        ],
        benar: 1
    },

    {
        pertanyaan: "What does 'reliable' mean?",
        jawaban: [
            "Can be trusted",
            "Always late",
            "Very expensive",
            "Hard to understand"
        ],
        benar: 0
    },

    {
        pertanyaan: "Complete: This is the first time I ___ this movie.",
        jawaban: [
            "watch",
            "watched",
            "have watched",
            "am watching"
        ],
        benar: 2
    },

    {
        pertanyaan: "Choose the correct question.",
        jawaban: [
            "Where you are going?",
            "Where are you going?",
            "Where going you?",
            "Where you going are?"
        ],
        benar: 1
    },

    {
        pertanyaan: "Complete: He apologized ___ being late.",
        jawaban: [
            "to",
            "for",
            "with",
            "at"
        ],
        benar: 1
    },

    {
        pertanyaan: "What is the plural form of 'child'?",
        jawaban: [
            "Childs",
            "Childes",
            "Children",
            "Childrens"
        ],
        benar: 2
    },

    {
        pertanyaan: "Complete: She ___ already finished her homework.",
        jawaban: [
            "have",
            "has",
            "had been",
            "is"
        ],
        benar: 1
    },

    {
        pertanyaan: "Choose the correct sentence.",
        jawaban: [
            "I am looking forward to meet you.",
            "I look forward meet you.",
            "I am looking forward to meeting you.",
            "I am looking forward meeting you."
        ],
        benar: 2
    },

    {
        pertanyaan: "What does 'exhausted' mean?",
        jawaban: [
            "Very tired",
            "Very happy",
            "Very hungry",
            "Very confused"
        ],
        benar: 0
    },

    {
        pertanyaan: "Complete: If she ___ earlier, she would have caught the bus.",
        jawaban: [
            "left",
            "had left",
            "leaves",
            "has left"
        ],
        benar: 1
    },

    {
        pertanyaan: "Choose the correct sentence.",
        jawaban: [
            "There isn't no problem.",
            "There aren't no problem.",
            "There isn't any problem.",
            "There isn't some problem."
        ],
        benar: 2
    },

    {
        pertanyaan: "Complete: My brother is afraid ___ spiders.",
        jawaban: [
            "from",
            "of",
            "at",
            "with"
        ],
        benar: 1
    },

    {
        pertanyaan: "What is the synonym of 'purchase'?",
        jawaban: [
            "Buy",
            "Sell",
            "Lose",
            "Break"
        ],
        benar: 0
    },

    {
        pertanyaan: "Complete: She has been working here ___ five years.",
        jawaban: [
            "since",
            "for",
            "during",
            "from"
        ],
        benar: 1
    },

    {
        pertanyaan: "Choose the correct sentence.",
        jawaban: [
            "The news are interesting.",
            "The news is interesting.",
            "The news were interesting.",
            "The news be interesting."
        ],
        benar: 1
    },

    {
        pertanyaan: "Complete: You ___ smoke here. It is forbidden.",
        jawaban: [
            "must",
            "mustn't",
            "should",
            "can"
        ],
        benar: 1
    },

    {
        pertanyaan: "What does 'achievement' mean?",
        jawaban: [
            "Something successfully completed",
            "A serious problem",
            "A type of food",
            "A person who teaches"
        ],
        benar: 0
    },

    {
        pertanyaan: "Complete: I would rather ___ at home.",
        jawaban: [
            "stay",
            "staying",
            "to stay",
            "stayed"
        ],
        benar: 0
    },

    {
        pertanyaan: "Choose the correct sentence.",
        jawaban: [
            "She is married with John.",
            "She is married to John.",
            "She married to John.",
            "She is marry to John."
        ],
        benar: 1
    },

    {
        pertanyaan: "Complete: He ___ to Jakarta three times.",
        jawaban: [
            "has been",
            "has gone",
            "was going",
            "goes"
        ],
        benar: 0
    },

    {
        pertanyaan: "What does 'despite' mean?",
        jawaban: [
            "Because of",
            "Although something happens",
            "Before",
            "Instead of"
        ],
        benar: 1
    },

    {
        pertanyaan: "Complete: The teacher told us ___ quietly.",
        jawaban: [
            "sit",
            "to sit",
            "sitting",
            "sat"
        ],
        benar: 1
    },

    {
        pertanyaan: "Choose the correct sentence.",
        jawaban: [
            "I didn't went there.",
            "I don't went there.",
            "I didn't go there.",
            "I wasn't go there."
        ],
        benar: 2
    },

    {
        pertanyaan: "Complete: The book ___ on the table belongs to me.",
        jawaban: [
            "lying",
            "lie",
            "lies",
            "laid"
        ],
        benar: 0
    },

    {
        pertanyaan: "What does 'fortunately' mean?",
        jawaban: [
            "Luckily",
            "Sadly",
            "Angrily",
            "Slowly"
        ],
        benar: 0
    },

    {
        pertanyaan: "Complete: Not only Tom but also his friends ___ coming.",
        jawaban: [
            "is",
            "are",
            "was",
            "be"
        ],
        benar: 1
    }

];

// ==========================================
// STATUS GAME
// ==========================================

let nomor = 0;
let skor = 0;
let nyawa = 3;
let sudahMenjawab = false;

let modeQuiz = "main";

let learnIndex = 0;
let kategoriBelajar = "animals";


// ==========================================
// HIGH SCORE
// ==========================================

let highScore =
    Number(localStorage.getItem("englishKidsHighScore")) || 0;


// ==========================================
// XP SYSTEM
// ==========================================

let totalXP =
    Number(localStorage.getItem("englishKidsXP")) || 0;


// ==========================================
// RANK DATA
// ==========================================

const ranks = [
    {
        name: "🌱 Beginner",
        minXP: 0
    },
    {
        name: "📘 Learner",
        minXP: 500
    },
    {
        name: "⭐ Explorer",
        minXP: 2500
    },
    {
        name: "🔥 Skilled",
        minXP: 5500
    },
    {
        name: "💎 Advanced",
        minXP: 12000
    },
    {
        name: "👑 English Master",
        minXP: 25000
    }
];


// ==========================================
// DAILY QUEST
// ==========================================

const DAILY_COOLDOWN =
    24 * 60 * 60 * 1000;


// ==========================================
// WAKTU
// ==========================================

function waktuSekarang() {

    return Date.now();

}


// ==========================================
// AMBIL DAILY LOCK
// ==========================================

function ambilDailyLock() {

    return Number(
        localStorage.getItem(
            "englishKidsDailyLockUntil"
        )
    ) || 0;

}


// ==========================================
// DAILY TERKUNCI?
// ==========================================

function dailySedangTerkunci() {

    return (
        ambilDailyLock() >
        waktuSekarang()
    );

}


// ==========================================
// SISA WAKTU DAILY
// ==========================================

function sisaWaktuDaily() {

    const lockUntil =
        ambilDailyLock();

    const sisa =
        lockUntil -
        waktuSekarang();


    if (sisa <= 0) {

        return null;

    }


    const totalDetik =
        Math.ceil(
            sisa / 1000
        );


    const jam =
        Math.floor(
            totalDetik / 3600
        );


    const menit =
        Math.floor(
            (totalDetik % 3600) / 60
        );


    const detik =
        totalDetik % 60;


    return {
        jam: jam,
        menit: menit,
        detik: detik
    };

}


// ==========================================
// FORMAT COUNTDOWN
// ==========================================

function formatWaktuDaily() {

    const waktu =
        sisaWaktuDaily();


    if (!waktu) {

        return null;

    }


    const jam =
        String(
            waktu.jam
        ).padStart(2, "0");


    const menit =
        String(
            waktu.menit
        ).padStart(2, "0");


    const detik =
        String(
            waktu.detik
        ).padStart(2, "0");


    return (
        jam +
        " jam " +
        menit +
        " menit " +
        detik +
        " detik"
    );

}


// ==========================================
// KUNCI DAILY 24 JAM
// ==========================================

function kunciDaily24Jam() {

    const waktuBukaLagi =
        waktuSekarang() +
        DAILY_COOLDOWN;


    localStorage.setItem(
        "englishKidsDailyLockUntil",
        waktuBukaLagi
    );


    updateDailyStatus();

}


// ==========================================
// NOMOR HARI
// ==========================================

function dapatkanNomorHari() {

    const sekarang =
        new Date();


    const awalTahun =
        new Date(
            sekarang.getFullYear(),
            0,
            0
        );


    const selisih =
        sekarang -
        awalTahun;


    const satuHari =
        1000 *
        60 *
        60 *
        24;


    return Math.floor(
        selisih /
        satuHari
    );

}


// ==========================================
// DAILY SOAL HARI INI
// ==========================================

function dapatkanDailySoalHariIni() {

    if (
        typeof dailySoal === "undefined" ||
        !Array.isArray(dailySoal)
    ) {

        console.error(
            "dailySoal tidak ditemukan!"
        );

        return null;

    }


    if (
        dailySoal.length === 0
    ) {

        console.error(
            "dailySoal kosong!"
        );

        return null;

    }


    const nomorHari =
        dapatkanNomorHari();


    const index =
        nomorHari %
        dailySoal.length;


    return dailySoal[index];

}


// ==========================================
// ELEMENT
// ==========================================

const gambar =
    document.getElementById("gambar");

const pertanyaan =
    document.getElementById("pertanyaan");

const hasil =
    document.getElementById("hasil");

const bar =
    document.getElementById("bar");

const skorText =
    document.getElementById("skor");

const nyawaTampil =
    document.getElementById("nyawa");

const nomorSoal =
    document.getElementById("nomorSoal");

const highScoreText =
    document.getElementById("highScore");

const homeHighScore =
    document.getElementById("homeHighScore");

const hasilBox =
    document.getElementById("hasilBox");

const hasilSkor =
    document.getElementById("hasilSkor");

const hasilPesan =
    document.getElementById("hasilPesan");

const ulangBtn =
    document.getElementById("ulangBtn");

const homeBtn =
    document.getElementById("homeBtn");

const quizHomeBtn =
    document.getElementById("quizHomeBtn");


// ==========================================
// JAWABAN
// ==========================================

const pilihan1 =
    document.getElementById("pilihan1");

const pilihan2 =
    document.getElementById("pilihan2");

const pilihan3 =
    document.getElementById("pilihan3");

const pilihan4 =
    document.getElementById("pilihan4");


const tombolJawaban = [
    pilihan1,
    pilihan2,
    pilihan3,
    pilihan4
].filter(Boolean);


// ==========================================
// XP ELEMENT
// ==========================================

const rankText =
    document.getElementById("rankText");

const xpText =
    document.getElementById("xpText");

const xpBar =
    document.getElementById("xpBar");


// ==========================================
// DAILY ELEMENT
// ==========================================

const dailyBtn =
    document.getElementById("dailyBtn");

const dailyStatus =
    document.getElementById("dailyStatus");


// ==========================================
// SCREEN
// ==========================================

const startScreen =
    document.getElementById("startScreen");

const quizScreen =
    document.getElementById("quizScreen");

const learnMenu =
    document.getElementById("learnMenu");

const learnScreen =
    document.getElementById("learnScreen");


// ==========================================
// BUTTON
// ==========================================

const startBtn =
    document.getElementById("startBtn");

const learnBtn =
    document.getElementById("learnBtn");

const learnBackBtn =
    document.getElementById("learnBackBtn");

const learnHomeBtn =
    document.getElementById("learnHomeBtn");

const prevLearnBtn =
    document.getElementById("prevLearnBtn");

const nextLearnBtn =
    document.getElementById("nextLearnBtn");

const speakBtn =
    document.getElementById("speakBtn");


// ==========================================
// LEARN ELEMENT
// ==========================================

const learnImage =
    document.getElementById("learnImage");

const colorBox =
    document.getElementById("colorBox");

const learnWord =
    document.getElementById("learnWord");

const learnMeaning =
    document.getElementById("learnMeaning");

const learnNumber =
    document.getElementById("learnNumber");


// ==========================================
// AUDIO
// ==========================================

const suaraBenar =
    new Audio("correct.mp3");

const suaraSalah =
    new Audio("wrong.mp3");

const suaraSelesai =
    new Audio("finish.mp3");

const musik =
    new Audio("bgmusic.mp3");

const suaraKlik =
    new Audio("click.wav");


suaraBenar.volume = 0.5;
suaraSalah.volume = 0.5;
suaraSelesai.volume = 0.6;
suaraKlik.volume = 0.35;
musik.volume = 0.12;

musik.loop = true;


// ==========================================
// AUDIO STATE
// ==========================================

let musikSedangDipakai = false;

let musikSedangBerjalan =
    false;

let musikSebelumKeluar =
    false;


// ==========================================
// PRELOAD AUDIO
// ==========================================

suaraBenar.preload = "auto";
suaraSalah.preload = "auto";
suaraSelesai.preload = "auto";
suaraKlik.preload = "auto";
musik.preload = "auto";


// ==========================================
// MAIN AUDIO
// ==========================================

function mainkanAudio(audio) {

    if (!audio) {
        return;
    }


    try {

        audio.currentTime = 0;

    } catch (error) {

        console.log(
            "Tidak bisa reset audio:",
            error
        );

    }


    const hasilPlay =
        audio.play();


    if (
        hasilPlay &&
        typeof hasilPlay.catch === "function"
    ) {

        hasilPlay.catch(
            function (error) {

                console.log(
                    "Audio tidak dapat dimainkan:",
                    error
                );

            }
        );

    }

}


// ==========================================
// MULAI MUSIK
// ==========================================

function mulaiMusik() {

    if (
        document.hidden
    ) {

        return;

    }


    musik
        .play()
        .then(
            function () {

                musikSedangBerjalan =
                    true;

                musikSedangDipakai =
                    true;

            }
        )
        .catch(
            function (error) {

                console.log(
                    "BGM menunggu interaksi pengguna:",
                    error
                );

            }
        );

}


// ==========================================
// HENTIKAN MUSIK
// ==========================================

function hentikanMusik() {

    if (
        !musik.paused
    ) {

        musik.pause();

    }


    musikSedangBerjalan =
        false;

}


// ==========================================
// SAAT KELUAR DARI CHROME / TAB
// ==========================================

document.addEventListener(
    "visibilitychange",
    function () {

        if (
            document.hidden
        ) {

            musikSebelumKeluar =
                !musik.paused;


            hentikanMusik();

        }

        else {

            if (
                musikSebelumKeluar
            ) {

                // Jangan langsung memaksa play.
                // Browser mobile bisa memblokir autoplay.
                musikSedangDipakai =
                    true;

            }

        }

    }
);


// ==========================================
// SAAT HALAMAN DITUTUP
// ==========================================

window.addEventListener(
    "pagehide",
    function () {

        hentikanMusik();

    }
);


// ==========================================
// DETEKSI INTERAKSI USER
// ==========================================

document.addEventListener(
    "click",
    function (event) {

        const tombol =
            event.target.closest(
                "button"
            );


        if (!tombol) {
            return;
        }
        
        // Speak ditangani sendiri oleh event listener-nya.
if (tombol.id === "speakBtn") {
    return;
}

        // Semua tombol menjadi user gesture.
        mulaiMusik();


        // Tombol jawaban tidak memakai
        // click sound supaya tidak bertabrakan
        // dengan suara benar/salah.

        if (
            tombol.id === "pilihan1" ||
            tombol.id === "pilihan2" ||
            tombol.id === "pilihan3" ||
            tombol.id === "pilihan4"
        ) {

            return;

        }


        // Tombol speak juga tidak diberi
        // click sound karena akan menjalankan TTS.

        if (
            tombol.id === "speakBtn"
        ) {

            return;

        }


        mainkanAudio(
            suaraKlik
        );

    },
    true
);


// ==========================================
// TEXT TO SPEECH - VERSI STABIL ANDROID
// ==========================================

let speechVoices = [];
let speechSiap = false;


// ------------------------------------------
// LOAD VOICE
// ------------------------------------------

function loadSpeechVoices() {

    if (
        !("speechSynthesis" in window)
    ) {
        return;
    }

    speechVoices =
        window.speechSynthesis.getVoices();

    if (
        speechVoices.length > 0
    ) {
        speechSiap = true;
    }

}


// Browser biasanya mengisi voice
// beberapa saat setelah halaman dibuka.

loadSpeechVoices();


// Jalankan lagi ketika voice sudah tersedia.

if (
    "speechSynthesis" in window &&
    "onvoiceschanged" in window.speechSynthesis
) {

    window.speechSynthesis.onvoiceschanged =
        function () {

            loadSpeechVoices();

        };

}


// ------------------------------------------
// UCAPKAN KATA
// ------------------------------------------

function ucapkanKata(teks) {

    if (
        !teks
    ) {
        return;
    }


    if (
        !("speechSynthesis" in window)
    ) {

        alert(
            "Browser kamu tidak mendukung fitur suara."
        );

        return;

    }


    // Pastikan voice sudah dimuat.

    loadSpeechVoices();


    // Hentikan suara sebelumnya.

    window.speechSynthesis.cancel();


    // Buat suara baru.

    const suara =
        new SpeechSynthesisUtterance(
            teks
        );


    suara.lang =
        "en-US";


    suara.rate =
        0.8;


    suara.pitch =
        1;


    suara.volume =
        1;


    // Cari voice bahasa Inggris.

    if (
        speechVoices.length > 0
    ) {

        const voiceEnglish =
            speechVoices.find(
                function (voice) {

                    return (
                        voice.lang
                            .toLowerCase()
                            .startsWith("en")
                    );

                }
            );


        if (
            voiceEnglish
        ) {

            suara.voice =
                voiceEnglish;

        }

    }


    // --------------------------------------
    // PLAY
    // --------------------------------------

    window.speechSynthesis.speak(
        suara
    );


    // --------------------------------------
    // FIX CHROME ANDROID
    // --------------------------------------

    // Pada beberapa Chrome Android,
    // speech bisa berhenti sendiri.
    // Resume setelah sedikit waktu.

    setTimeout(
        function () {

            if (
                window.speechSynthesis
            ) {

                window.speechSynthesis.resume();

            }

        },
        100
    );

}


// ------------------------------------------
// TOMBOL SPEAK
// ------------------------------------------

if (
    speakBtn
) {

    speakBtn.addEventListener(
        "click",
        function (event) {

            // Jangan biarkan event ini
            // dianggap sebagai klik lain.

            event.stopPropagation();


            const daftarMateri =
                ambilDataMateri();


            if (
                !daftarMateri ||
                daftarMateri.length === 0
            ) {

                return;

            }


            const materiSekarang =
                daftarMateri[
                    learnIndex
                ];


            if (
                !materiSekarang
            ) {

                return;

            }


            const kata =
                materiSekarang.english;


            if (
                !kata
            ) {

                return;

            }


            // Pastikan SpeechSynthesis aktif
            // sebelum membacakan.

            loadSpeechVoices();


            ucapkanKata(
                kata
            );

        }
    );

}


// ==========================================
// ACAK ARRAY
// ==========================================

function acak(array) {

    for (
        let i =
            array.length - 1;
        i > 0;
        i--
    ) {

        const j =
            Math.floor(
                Math.random() *
                (i + 1)
            );


        [
            array[i],
            array[j]
        ] =
        [
            array[j],
            array[i]
        ];

    }


    return array;

}


// ==========================================
// XP + RANK
// ==========================================

function dapatkanRankSekarang() {

    let rankSekarang =
        ranks[0];


    for (
        let i = 0;
        i < ranks.length;
        i++
    ) {

        if (
            totalXP >=
            ranks[i].minXP
        ) {

            rankSekarang =
                ranks[i];

        }

    }


    return rankSekarang;

}


function dapatkanRankBerikutnya() {

    for (
        let i = 0;
        i < ranks.length;
        i++
    ) {

        if (
            totalXP <
            ranks[i].minXP
        ) {

            return ranks[i];

        }

    }


    return null;

}


// ==========================================
// UPDATE XP UI
// ==========================================

function updateXPUI() {

    const rankSekarang =
        dapatkanRankSekarang();


    const rankBerikutnya =
        dapatkanRankBerikutnya();


    if (rankText) {

        rankText.innerHTML =
            rankSekarang.name;

    }


    if (xpText) {

        if (rankBerikutnya) {

            xpText.innerHTML =
                totalXP +
                " / " +
                rankBerikutnya.minXP +
                " XP";

        }

        else {

            xpText.innerHTML =
                totalXP +
                " XP MAX";

        }

    }


    if (xpBar) {

        if (rankBerikutnya) {

            const progress =
                (
                    (
                        totalXP -
                        rankSekarang.minXP
                    ) /
                    (
                        rankBerikutnya.minXP -
                        rankSekarang.minXP
                    )
                ) *
                100;


            xpBar.style.width =
                Math.max(
                    0,
                    Math.min(
                        progress,
                        100
                    )
                ) +
                "%";

        }

        else {

            xpBar.style.width =
                "100%";

        }

    }

}


// ==========================================
// TAMBAH XP
// ==========================================

function tambahXP(jumlah) {

    totalXP += jumlah;


    localStorage.setItem(
        "englishKidsXP",
        totalXP
    );


    updateXPUI();

}


// ==========================================
// UPDATE NYAWA
// ==========================================

function updateNyawa() {

    if (!nyawaTampil) {
        return;
    }


    const maxNyawa =
        modeQuiz === "daily"
            ? 1
            : 3;


    nyawaTampil.innerHTML =
        "❤️".repeat(
            Math.max(
                0,
                nyawa
            )
        ) +
        "🖤".repeat(
            Math.max(
                0,
                maxNyawa - nyawa
            )
        );

}


// ==========================================
// UPDATE SCORE
// ==========================================

function updateSkor() {

    if (!skorText) {
        return;
    }


    // DAILY TIDAK MEMILIKI SCORE

    if (
        modeQuiz === "daily"
    ) {

        skorText.style.display =
            "none";

        return;

    }


    skorText.style.display =
        "";


    skorText.innerHTML =
        "Score : " +
        skor;

}


// ==========================================
// UPDATE HIGH SCORE
// ==========================================

function updateHighScore() {

    if (highScoreText) {

        highScoreText.innerHTML =
            "🏆 High Score: " +
            highScore;

    }


    if (homeHighScore) {

        homeHighScore.innerHTML =
            highScore;

    }

}


// ==========================================
// SOAL AKTIF
// ==========================================

function getSoalAktif() {

    if (
        modeQuiz === "daily"
    ) {

        const soalHariIni =
            dapatkanDailySoalHariIni();


        if (soalHariIni) {

            return [
                soalHariIni
            ];

        }


        return [];

    }


    if (
        typeof soal === "undefined" ||
        !Array.isArray(soal)
    ) {

        console.error(
            "Data soal tidak ditemukan!"
        );

        return [];

    }


    return soal;

}


// ==========================================
// PROGRESS
// ==========================================

function updateProgress() {

    if (!bar) {
        return;
    }


    const daftarSoal =
        getSoalAktif();


    if (
        daftarSoal.length === 0
    ) {

        bar.style.width =
            "0%";

        return;

    }


    bar.style.width =
        (
            nomor /
            daftarSoal.length *
            100
        ) +
        "%";

}


// ==========================================
// TOMBOL AKTIF
// ==========================================

function setTombolAktif(status) {

    tombolJawaban.forEach(
        function (tombol) {

            tombol.disabled =
                !status;

        }
    );

}


// ==========================================
// DAILY STATUS
// ==========================================

function updateDailyStatus() {

    if (!dailyStatus) {
        return;
    }


    if (
        dailySedangTerkunci()
    ) {

        if (dailyBtn) {

            dailyBtn.disabled =
                true;

        }


        const waktu =
            formatWaktuDaily();


        dailyStatus.innerHTML =
            "⏳ Daily Quiz terkunci<br>" +
            "Tersedia lagi dalam: " +
            "<strong>" +
            waktu +
            "</strong>";


        return;

    }


    if (dailyBtn) {

        dailyBtn.disabled =
            false;

    }


    dailyStatus.innerHTML =
        "";

}


// ==========================================
// DAILY COUNTDOWN
// ==========================================

setInterval(
    function () {

        updateDailyStatus();

    },
    1000
);


// ==========================================
// TAMPIL SOAL
// ==========================================

function tampilSoal() {

    const daftarSoal =
        getSoalAktif();


    if (
        nomor >=
        daftarSoal.length
    ) {

        return;

    }


    sudahMenjawab =
        false;


    setTombolAktif(
        true
    );


    const soalSekarang =
        daftarSoal[
            nomor
        ];


    // ======================================
    // NOMOR SOAL
    // ======================================

    if (nomorSoal) {

        if (
            modeQuiz === "daily"
        ) {

            nomorSoal.innerHTML =
                "🔥 Daily Quiz • HARD";

        }

        else {

            nomorSoal.innerHTML =
                "Question " +
                (nomor + 1) +
                " / " +
                daftarSoal.length;

        }

    }


    // ======================================
    // RESET TOMBOL
    // ======================================

    tombolJawaban.forEach(
        function (tombol) {

            tombol.classList.remove(
                "benar",
                "salah"
            );

        }
    );


    // ======================================
    // GAMBAR
    // ======================================

    if (gambar) {

        if (
            soalSekarang.gambar
        ) {

            gambar.src =
                soalSekarang.gambar;

            gambar.style.display =
                "block";

        }

        else {

            gambar.removeAttribute(
                "src"
            );

            gambar.style.display =
                "none";

        }

    }


    // ======================================
    // PERTANYAAN
    // ======================================

    if (pertanyaan) {

        pertanyaan.innerHTML =
            soalSekarang.pertanyaan;

    }


    // ======================================
    // ACAK JAWABAN
    // ======================================

    const jawabanAcak =
        soalSekarang.jawaban.map(
            function (
                teks,
                index
            ) {

                return {
                    teks: teks,
                    asli: index
                };

            }
        );


    acak(
        jawabanAcak
    );


    tombolJawaban.forEach(
        function (
            tombol,
            index
        ) {

            if (
                jawabanAcak[index]
            ) {

                tombol.innerHTML =
                    jawabanAcak[
                        index
                    ].teks;


                tombol.dataset.jawaban =
                    jawabanAcak[
                        index
                    ].asli;

            }

        }
    );

}


// ==========================================
// EFEK XP
// ==========================================

function tampilXP(
    tombol,
    jumlah
) {

    // Daily tetap mendapat XP,
    // tetapi efek XP tetap boleh muncul.

    const efek =
        document.createElement(
            "div"
        );


    efek.className =
        "plusXP";


    efek.innerHTML =
        "⭐ +" +
        jumlah +
        " XP";


    const posisi =
        tombol.getBoundingClientRect();


    efek.style.left =
        (
            posisi.left +
            posisi.width / 2 -
            40
        ) +
        "px";


    efek.style.top =
        (
            posisi.top -
            10
        ) +
        "px";


    document.body.appendChild(
        efek
    );


    setTimeout(
        function () {

            efek.remove();

        },
        1000
    );

}


// ==========================================
// CEK JAWABAN
// ==========================================

function cekJawaban(
    pilihan,
    tombol
) {

    const daftarSoal =
        getSoalAktif();


    if (
        sudahMenjawab
    ) {

        return;

    }


    if (
        nomor >=
        daftarSoal.length
    ) {

        return;

    }


    sudahMenjawab =
        true;


    setTombolAktif(
        false
    );


    const soalSekarang =
        daftarSoal[
            nomor
        ];


    const jawabanBenar =
        Number(pilihan) ===
        soalSekarang.benar;


    // ======================================
    // BENAR
    // ======================================

    if (jawabanBenar) {

        tombol.classList.add(
            "benar"
        );


        // ==================================
        // MAIN QUIZ
        // ==================================

        if (
            modeQuiz === "main"
        ) {

            skor += 2;

            updateSkor();

        }


        // ==================================
        // XP
        // ==================================

        const xpDidapat =
            modeQuiz === "daily"
                ? 100
                : 10;


        tambahXP(
            xpDidapat
        );


        tampilXP(
            tombol,
            xpDidapat
        );


        if (hasil) {

            if (
                modeQuiz === "daily"
            ) {

                hasil.innerHTML =
                    "Correct! 🎉";

            }

            else {

                hasil.innerHTML =
                    "Correct! 🎉 +" +
                    xpDidapat +
                    " XP";

            }

        }


        mainkanAudio(
            suaraBenar
        );


        nomor++;


        updateProgress();


        // ==================================
        // DAILY BERHASIL
        // ==================================

        if (
            modeQuiz === "daily"
        ) {

            setTimeout(
                function () {

                    ledakanConfetti();


                    selesaiQuiz(
                        "🎉 Daily Quiz selesai!<br><br>" +
                        "Jawabanmu benar!<br>" +
                        "Kamu mendapatkan <strong>+100 XP</strong>.<br><br>" +
                        "⏳ Daily Quiz berikutnya tersedia lagi dalam <strong>24 jam</strong>.",
                        true
                    );

                },
                1000
            );


            return;

        }


        // ==================================
        // MAIN SELESAI
        // ==================================

        if (
            nomor >=
            daftarSoal.length
        ) {

            setTimeout(
                function () {

                    ledakanConfetti();


                    selesaiQuiz(
                        "🎉 Semua " +
                        daftarSoal.length +
                        " soal selesai!<br><br>" +
                        "Kamu mendapatkan bonus <strong>+1000 XP</strong>!",
                        true
                    );

                },
                1000
            );


            return;

        }

    }


    // ======================================
    // SALAH
    // ======================================

    else {

        tombol.classList.add(
            "salah"
        );


        nyawa--;


        updateNyawa();


        if (hasil) {

            hasil.innerHTML =
                "Wrong! ❌";

        }


        mainkanAudio(
            suaraSalah
        );


        nomor++;


        updateProgress();


        // ==================================
        // DAILY SALAH
        // ==================================

        if (
            modeQuiz === "daily"
        ) {

            setTimeout(
                function () {

                    selesaiQuiz(
                        "❌ Jawabanmu salah.<br><br>" +
                        "Daily Quiz hari ini selesai.<br><br>" +
                        "⏳ Coba lagi dalam <strong>24 jam</strong>.",
                        false
                    );

                },
                1000
            );


            return;

        }


        // ==================================
        // MAIN NYAWA HABIS
        // ==================================

        if (
            nyawa <= 0
        ) {

            setTimeout(
                function () {

                    selesaiQuiz(
                        "Game Over! 💔<br><br>" +
                        "Nyawamu sudah habis.",
                        false
                    );

                },
                1000
            );


            return;

        }

    }


    // ======================================
    // LANJUT MAIN QUIZ
    // ======================================

    if (
        modeQuiz === "main"
    ) {

        if (
            nomor <
            daftarSoal.length
        ) {

            setTimeout(
                function () {

                    if (hasil) {

                        hasil.innerHTML =
                            "";

                    }


                    tampilSoal();

                },
                1000
            );

        }

    }

}


// ==========================================
// QUIZ SELESAI
// ==========================================

function selesaiQuiz(
    pesanAkhir,
    quizBerhasil
) {

    setTombolAktif(
        false
    );


    const daftarSoal =
        getSoalAktif();


    // ======================================
    // BONUS MAIN QUIZ
    // ======================================

    if (
        quizBerhasil &&
        modeQuiz === "main"
    ) {

        tambahXP(
            1000
        );

    }


    // ======================================
    // DAILY LOCK
    // ======================================

    if (
        modeQuiz === "daily"
    ) {

        kunciDaily24Jam();

    }


    // ======================================
    // HIGH SCORE
    // ======================================

    // PENTING:
    // DAILY TIDAK BOLEH MENYENTUH HIGH SCORE.

    if (
        modeQuiz === "main"
    ) {

        if (
            skor >
            highScore
        ) {

            highScore =
                skor;


            localStorage.setItem(
                "englishKidsHighScore",
                highScore
            );


            updateHighScore();

        }

    }


    // ======================================
    // AUDIO SELESAI
    // ======================================

    mainkanAudio(
        suaraSelesai
    );


    // ======================================
    // RESET HASIL
    // ======================================

    if (hasil) {

        hasil.innerHTML =
            "";

    }


    // ======================================
    // HILANGKAN SOAL
    // ======================================

    if (gambar) {

        gambar.style.display =
            "none";

    }


    if (pertanyaan) {

        pertanyaan.style.display =
            "none";

    }


    if (nomorSoal) {

        nomorSoal.style.display =
            "none";

    }


    const progress =
        document.querySelector(
            ".progress"
        );


    if (progress) {

        progress.style.display =
            "none";

    }


    tombolJawaban.forEach(
        function (tombol) {

            tombol.style.display =
                "none";

        }
    );


    // ======================================
    // HASIL BOX
    // ======================================

    if (hasilBox) {

        hasilBox.style.display =
            "block";

    }


    // ======================================
    // HASIL SCORE
    // ======================================

    if (hasilSkor) {

        if (
            modeQuiz === "daily"
        ) {

            // DAILY TIDAK ADA SCORE

            hasilSkor.innerHTML =
                "";

            hasilSkor.style.display =
                "none";

        }

        else {

            hasilSkor.style.display =
                "";


            hasilSkor.innerHTML =
                skor +
                " / " +
                (
                    daftarSoal.length *
                    2
                );

        }

    }


    // ======================================
    // PESAN
    // ======================================

    if (hasilPesan) {

        hasilPesan.innerHTML =
            pesanAkhir;

    }


    updateXPUI();

    updateHighScore();

    updateDailyStatus();

}


// ==========================================
// EVENT JAWABAN
// ==========================================

tombolJawaban.forEach(
    function (tombol) {

        tombol.addEventListener(
            "click",
            function () {

                cekJawaban(
                    this.dataset.jawaban,
                    this
                );

            }
        );

    }
);


// ==========================================
// CONFETTI
// ==========================================

function ledakanConfetti() {

    if (
        typeof confetti ===
        "function"
    ) {

        confetti({

            particleCount:
                150,

            spread:
                90,

            startVelocity:
                45,

            origin: {
                y: 0.6
            }

        });

    }

}


// ==========================================
// AMBIL DATA MATERI
// ==========================================

function ambilDataMateri() {

    if (
        kategoriBelajar === "animals"
    ) {

        return materiAnimals;

    }


    if (
        kategoriBelajar === "colors"
    ) {

        return materiColors;

    }


    if (
        kategoriBelajar === "numbers"
    ) {

        return materiNumbers;

    }


    if (
        kategoriBelajar === "food"
    ) {

        return materiFood;

    }


    if (
        kategoriBelajar === "grammar"
    ) {

        return materiGrammar;

    }


    return materiAnimals;

}


// ==========================================
// TAMPIL MATERI
// ==========================================

function tampilMateri() {

    const daftarMateri =
        ambilDataMateri();


    const materiSekarang =
        daftarMateri[
            learnIndex
        ];


    const totalMateri =
        daftarMateri.length;


    if (!materiSekarang) {
        return;
    }


    // ======================================
    // ANIMALS / FOOD
    // ======================================

    if (
        kategoriBelajar === "animals" ||
        kategoriBelajar === "food"
    ) {

        if (learnImage) {

            learnImage.style.display =
                "block";

            learnImage.src =
                materiSekarang.gambar;

        }


        if (colorBox) {

            colorBox.style.display =
                "none";

        }

    }


    // ======================================
    // COLORS
    // ======================================

    else if (
        kategoriBelajar === "colors"
    ) {

        if (learnImage) {

            learnImage.style.display =
                "none";

        }


        if (colorBox) {

            colorBox.style.display =
                "block";

            colorBox.style.background =
                materiSekarang.color;

            colorBox.innerHTML =
                "";

        }

    }


    // ======================================
    // NUMBERS
    // ======================================

    else if (
        kategoriBelajar === "numbers"
    ) {

        if (learnImage) {

            learnImage.style.display =
                "none";

        }


        if (colorBox) {

            colorBox.style.display =
                "flex";

            colorBox.style.background =
                "#ffffff";

            colorBox.style.color =
                "#4f46e5";

            colorBox.style.alignItems =
                "center";

            colorBox.style.justifyContent =
                "center";

            colorBox.style.fontSize =
                "90px";

            colorBox.style.fontWeight =
                "bold";

            colorBox.innerHTML =
                materiSekarang.number;

        }

    }


    // ======================================
    // GRAMMAR
    // ======================================

    else if (
        kategoriBelajar === "grammar"
    ) {

        if (learnImage) {

            learnImage.style.display =
                "none";

        }


        if (colorBox) {

            colorBox.style.display =
                "flex";

            colorBox.style.background =
                "#eef2ff";

            colorBox.style.color =
                "#4f46e5";

            colorBox.style.alignItems =
                "center";

            colorBox.style.justifyContent =
                "center";

            colorBox.style.fontSize =
                "22px";

            colorBox.style.fontWeight =
                "bold";

            colorBox.style.padding =
                "20px";

            colorBox.style.textAlign =
                "center";

            colorBox.innerHTML =
                materiSekarang.contoh;

        }

    }


    // ======================================
    // TEXT
    // ======================================

    if (learnWord) {

        learnWord.innerHTML =
            materiSekarang.english;

    }


    if (learnMeaning) {

        learnMeaning.innerHTML =
            materiSekarang.indonesia;

    }


    if (learnNumber) {

        learnNumber.innerHTML =
            (
                learnIndex + 1
            ) +
            " / " +
            totalMateri;

    }


    // ======================================
    // PREVIOUS
    // ======================================

    if (prevLearnBtn) {

        prevLearnBtn.disabled =
            learnIndex === 0;

    }


    // ======================================
    // NEXT
    // ======================================

    if (nextLearnBtn) {

        if (
            learnIndex ===
            totalMateri - 1
        ) {

            nextLearnBtn.innerHTML =
                "Finish 🎉";

        }

        else {

            nextLearnBtn.innerHTML =
                "Next →";

        }

    }

}


// ==========================================
// BUKA KATEGORI
// ==========================================

function bukaKategori(
    kategori
) {

    if (learnMenu) {

        learnMenu.style.display =
            "none";

    }


    if (learnScreen) {

        learnScreen.style.display =
            "flex";

    }


    kategoriBelajar =
        kategori;


    learnIndex =
        0;


    tampilMateri();

}


// ==========================================
// LEARN MENU
// ==========================================

if (learnBtn) {

    learnBtn.addEventListener(
        "click",
        function () {

            if (startScreen) {

                startScreen.style.display =
                    "none";

            }


            if (learnMenu) {

                learnMenu.style.display =
                    "flex";

            }

        }
    );

}


// ==========================================
// LEARN BACK
// ==========================================

if (learnBackBtn) {

    learnBackBtn.addEventListener(
        "click",
        function () {

            if (learnMenu) {

                learnMenu.style.display =
                    "none";

            }


            if (startScreen) {

                startScreen.style.display =
                    "flex";

            }

        }
    );

}


// ==========================================
// LEARN HOME
// ==========================================

if (learnHomeBtn) {

    learnHomeBtn.addEventListener(
        "click",
        function () {

            if (learnScreen) {

                learnScreen.style.display =
                    "none";

            }


            if (startScreen) {

                startScreen.style.display =
                    "flex";

            }


            learnIndex =
                0;


            kategoriBelajar =
                "animals";

        }
    );

}


// ==========================================
// CATEGORY BUTTON
// ==========================================

document
    .querySelectorAll(
        ".categoryBtn[data-category]"
    )
    .forEach(
        function (tombol) {

            tombol.addEventListener(
                "click",
                function () {

                    bukaKategori(
                        this.dataset.category
                    );

                }
            );

        }
    );


// ==========================================
// NEXT LEARN
// ==========================================

if (nextLearnBtn) {

    nextLearnBtn.addEventListener(
        "click",
        function () {

            const daftarMateri =
                ambilDataMateri();


            const totalMateri =
                daftarMateri.length;


            if (
                learnIndex <
                totalMateri - 1
            ) {

                learnIndex++;


                tampilMateri();

            }

            else {

                if (learnScreen) {

                    learnScreen.style.display =
                        "none";

                }


                if (learnMenu) {

                    learnMenu.style.display =
                        "flex";

                }


                learnIndex =
                    0;

            }

        }
    );

}


// ==========================================
// PREVIOUS LEARN
// ==========================================

if (prevLearnBtn) {

    prevLearnBtn.addEventListener(
        "click",
        function () {

            if (
                learnIndex > 0
            ) {

                learnIndex--;


                tampilMateri();

            }

        }
    );

}


// ==========================================
// RESET TAMPILAN QUIZ
// ==========================================

function resetTampilanQuiz() {

    if (hasilBox) {

        hasilBox.style.display =
            "none";

    }


    if (hasil) {

        hasil.innerHTML =
            "";

    }


    if (pertanyaan) {

        pertanyaan.style.display =
            "block";

    }


    if (nomorSoal) {

        nomorSoal.style.display =
            "block";

    }


    const progress =
        document.querySelector(
            ".progress"
        );


    if (progress) {

        progress.style.display =
            "block";

    }


    tombolJawaban.forEach(
        function (tombol) {

            tombol.style.display =
                "block";


            tombol.classList.remove(
                "benar",
                "salah"
            );

        }
    );


    // ======================================
    // DAILY SCORE HIDDEN
    // ======================================

    if (
        modeQuiz === "daily"
    ) {

        if (skorText) {

            skorText.style.display =
                "none";

        }


        if (hasilSkor) {

            hasilSkor.style.display =
                "none";

        }

    }

    else {

        if (skorText) {

            skorText.style.display =
                "";

        }


        if (hasilSkor) {

            hasilSkor.style.display =
                "";

        }

    }

}


// ==========================================
// MULAI QUIZ UTAMA
// ==========================================

function mulaiQuiz() {

    modeQuiz =
        "main";


    if (startScreen) {

        startScreen.style.display =
            "none";

    }


    if (quizScreen) {

        quizScreen.style.display =
            "block";

    }


    if (nyawaTampil) {

        nyawaTampil.style.display =
            "block";

    }


    nomor =
        0;


    skor =
        0;


    nyawa =
        3;


    sudahMenjawab =
        false;


    resetTampilanQuiz();


    if (
        typeof soal !== "undefined" &&
        Array.isArray(soal)
    ) {

        acak(soal);

    }


    updateSkor();

    updateNyawa();

    updateHighScore();

    updateXPUI();


    if (bar) {

        bar.style.width =
            "0%";

    }


    tampilSoal();

}


// ==========================================
// MULAI DAILY QUIZ
// ==========================================

function mulaiDailyQuiz() {

    // ======================================
    // CEK COOLDOWN
    // ======================================

    if (
        dailySedangTerkunci()
    ) {

        updateDailyStatus();


        alert(
            "⏳ Daily Quiz masih terkunci!\n\n" +
            "Tersedia lagi dalam:\n" +
            formatWaktuDaily()
        );


        return;

    }


    // ======================================
    // AMBIL SOAL
    // ======================================

    const soalHariIni =
        dapatkanDailySoalHariIni();


    if (!soalHariIni) {

        alert(
            "Daily Quiz belum memiliki soal."
        );


        return;

    }


    // ======================================
    // MODE DAILY
    // ======================================

    modeQuiz =
        "daily";


    if (startScreen) {

        startScreen.style.display =
            "none";

    }


    if (quizScreen) {

        quizScreen.style.display =
            "block";

    }


    if (nyawaTampil) {

        nyawaTampil.style.display =
            "block";

    }


    // ======================================
    // RESET DAILY
    // ======================================

    nomor =
        0;


    // Daily tidak memakai score.
    skor =
        0;


    nyawa =
        1;


    sudahMenjawab =
        false;


    resetTampilanQuiz();


    updateSkor();

    updateNyawa();

    updateXPUI();


    if (bar) {

        bar.style.width =
            "0%";

    }


    tampilSoal();

}


// ==========================================
// START BUTTON
// ==========================================

if (startBtn) {

    startBtn.addEventListener(
        "click",
        mulaiQuiz
    );

}


// ==========================================
// DAILY BUTTON
// ==========================================

if (dailyBtn) {

    dailyBtn.addEventListener(
        "click",
        mulaiDailyQuiz
    );

}


// ==========================================
// PLAY AGAIN
// ==========================================

if (ulangBtn) {

    ulangBtn.addEventListener(
        "click",
        function () {

            if (
                modeQuiz === "daily"
            ) {

                mulaiDailyQuiz();

            }

            else {

                mulaiQuiz();

            }

        }
    );

}


// ==========================================
// KEMBALI KE HOME
// ==========================================

function kembaliKeHomeQuiz() {

    if (quizScreen) {

        quizScreen.style.display =
            "none";

    }


    if (startScreen) {

        startScreen.style.display =
            "flex";

    }


    if (nyawaTampil) {

        nyawaTampil.style.display =
            "none";

    }


    nomor =
        0;


    skor =
        0;


    nyawa =
        3;


    sudahMenjawab =
        false;


    modeQuiz =
        "main";


    updateSkor();

    updateNyawa();

    updateXPUI();

    updateHighScore();

    updateDailyStatus();


    if (bar) {

        bar.style.width =
            "0%";

    }


    resetTampilanQuiz();

}


// ==========================================
// HOME BUTTON
// ==========================================

if (homeBtn) {

    homeBtn.addEventListener(
        "click",
        kembaliKeHomeQuiz
    );

}


// ==========================================
// QUIZ HOME BUTTON
// ==========================================

if (quizHomeBtn) {

    quizHomeBtn.addEventListener(
        "click",
        kembaliKeHomeQuiz
    );

}


// ==========================================
// AWAL
// ==========================================

updateHighScore();

updateXPUI();

updateDailyStatus();


if (nyawaTampil) {

    nyawaTampil.style.display =
        "none";

}

document.addEventListener("DOMContentLoaded", function () {

    const startButton =
        document.getElementById("startLearning");

    const welcomeScreen =
        document.getElementById("welcomeScreen");


    if (startButton && welcomeScreen) {

        startButton.addEventListener(
            "click",
            function () {

                welcomeScreen.style.display =
                    "none";

            }
        );

    }
    
});

});