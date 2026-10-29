const products = [
  { id: 1, name: "iPhone 15", price: 800, discount: 10, stock: 5 },
  { id: 2, name: "Samsung S24", price: 950, discount: 15, stock: 12 },
  { id: 3, name: "Redmi Note 13", price: 250, discount: 5, stock: 0 },
  { id: 4, name: "MacBook Air", price: 1200, discount: 20, stock: 3 },
  { id: 5, name: "iPad Pro", price: 1000, discount: 10, stock: 8 },
  { id: 6, name: "AirPods Pro", price: 250, discount: 0, stock: 20 },
];

const students = [
  { id: 1, name: "Ali", age: 18, score: 85 },
  { id: 2, name: "Vali", age: 17, score: 52 },
  { id: 3, name: "Madina", age: 19, score: 95 },
  { id: 4, name: "Sardor", age: 18, score: 67 },
  { id: 5, name: "Aziza", age: 17, score: 43 },
  { id: 6, name: "Jasur", age: 20, score: 76 },
];

// 1-masala. Qimmat mahsulotlar
// Qiyinlik: 2/10
// products massivida narxi 800 dollardan yuqori bo‘lgan mahsulotlarni ajratib, yangi massiv qaytaring.
// filter() metodidan foydalaning. Asl massiv o‘zgarmasligi kerak

// function qimmatniTop(products) {
//   return products.filter((item) => item.price > 800);
// }
// console.log(qimmatniTop(products));

//=====================================================================

// 2-masala. Talabalar ro‘yxati
// Qiyinlik: 2/10
// students massividagi barcha talabalarni forEach() yordamida konsolga quyidagi ko‘rinishda chiqaring: Ali —
// 85 ball; Vali — 52 ball; Madina — 95 ball. Har bir talaba uchun ism va ball ko‘rsatilishi kerak.

// function talabaTartibla(students) {
//   students.forEach((item) => {
//     console.log(`${item.name} - ${item.score} ball`);
//   });
// }

// talabaTartibla(students);

//=======================================================================

// 3-masala. Chegirmali narxlar
// Qiyinlik: 3/10
// products massiviga asoslanib, har bir mahsulotning chegirmadan keyingi narxini hisoblang va yangi massiv
// yarating. Yangi obyektlarda name, price, discount va finalPrice maydonlari bo‘lsin. Formula: finalPrice =
// price - (price × discount / 100).
// map() metodidan foydalaning.

// function chegirmaHisobla(products) {
//   let new_price = products.map((item) => ({
//     name: item.name,
//     price: item.price,
//     discount: item.discount,
//     finalPrice: item.price - (item.price * item.discount) / 100,
//   }));
//   return new_price;
// }

// console.log(chegirmaHisobla(products));

//=======================================================================

// 4-masala. Talabani ID orqali topish
// Qiyinlik: 3/10
// students massivida id qiymati 4 ga teng bo‘lgan talabani toping. Topilgan talabaning ismi va ballini konsolga
// chiqaring. Agar talaba topilmasa, “Talaba topilmadi” xabarini chiqaring.
// find() metodidan foydalaning.

// function talabaTop(students, student_id) {
//   let student_top = students.find((item) => item.id === student_id);
//   return student_top
//     ? `${student_top.name}: ${student_top.score} ball`
//     : "Talaba topilmadi";
// }

// console.log(talabaTop(students, 4));

//=======================================================================

// 5-masala. Omborda mahsulot bormi?
// Qiyinlik: 4/10
// products massividagi kamida bitta mahsulotning stock qiymati 0 ga tengmi? Natija true yoki false bo‘lsin.
// Natijaga qarab “Omborda tugagan mahsulot bor” yoki “Barcha mahsulotlar mavjud” xabarini chiqaring.
// some() metodidan foydalaning.

// function bormi(products) {
//   let product_bormi = products.some((item) => item.stock == 0);
//   return product_bormi
//     ? "Omborda tugagan mahsulot bor"
//     : "Barcha mahsulotlar mavjud";
// }

// console.log(bormi(products));

//=======================================================================

// 6-masala. Barcha talabalar imtihondan o‘tganmi?
// Qiyinlik: 4/10
// Imtihondan o‘tish uchun talaba kamida 60 ball olishi kerak. Barcha talabalar 60 yoki undan yuqori ball
// olganini tekshiring. Natija true yoki false bo‘lsin va mos xabar chiqaring.
// every() metodidan foydalaning

// function otganmi(students) {
//   let talaba_otganmi = students.every((student) => student.score >= 60);

//   return talaba_otganmi ? `barcha talabalar o'tgan` : "O'tmagan talaba mavjud";
// }

// console.log(otganmi(students));

//=======================================================================

// 7-masala. Mahsulotlarni narx bo‘yicha saralash
// Qiyinlik: 5/10
// products massivini narxi bo‘yicha eng arzondan eng qimmatga qarab saralang. Mahsulot nomi va narxini
// chiqaring.
// sort() metodidan foydalaning. Eslatma: sort() massivni o‘z joyida o‘zgartiradi.

// function sarala(products) {
//   let sortla = products.sort((a, b) => a.price - b.price);
//   sortla.forEach((item) => {
//     console.log(`Name: ${item.name} | Price: ${item.price}`);
//   });
// }
// console.log(sarala(products));

//=======================================================================

// 8-masala. Yuqori ball olgan talabalar
// Qiyinlik: 5/10
// students massivida 70 va undan yuqori ball olgan talabalarni ajrating. Ularni ballari bo‘yicha kamayish
// tartibida saralang. Natijada faqat talabalarning ismi va balli bo‘lgan yangi massiv hosil qiling.
// filter(), sort() va map() metodlaridan foydalaning.

// function high_score(students) {
//   let yuqori_ball = students.filter((student) => {
//     return student.score >= 70;
//   });
//   let tartibla = yuqori_ball.sort((a, b) => b.score - a.score);
//   return tartibla.map((item) => {
//     return `${item.name}: ${item.score} ball`;
//   });
// }
// console.log(high_score(students));

//=======================================================================

// 9-masala. Chegirmali mahsulotlarni tekshirish
// Qiyinlik: 7/10
// products massividan chegirmasi 10% yoki undan yuqori bo‘lgan mahsulotlarni ajrating. Ularning
// chegirmadan keyingi narxini hisoblang. So‘ng chegirmadan keyingi narxi 800 dollardan yuqori bo‘lgan
// mahsulot bor-yo‘qligini tekshiring. Mahsulotlar ro‘yxati va tekshiruv natijasini chiqaring.
// filter(), map() va some() metodlaridan foydalaning.

// function chegirmaHisobla(products) {
//   let high_discount = products.filter((item) => item.discount >= 10);
//   console.log("1) 10% chegirmadan yuqori mahsulotlar:", high_discount);

//   let new_price = high_discount.map((item) => ({
//     name: item.name,
//     price: item.price,
//     discount: item.discount,
//     stock: item.stock,
//     finalPrice: item.price - (item.price * item.discount) / 100,
//   }));
//   console.log("2) Chegirmasi hisoblangan mahsulotlar: ", new_price);

//   let new_price_80 = new_price.some((item) => item.finalPrice >= 800);
//   console.log(
//     "3) Chegirmali 800 dollardan yuqori mahsulot bormi: ",
//     new_price_80,
//   );
// }

// chegirmaHisobla(products);

//=======================================================================

// 10-masala. Talabalar natijasi bo‘yicha tahlil
// Qiyinlik: 8/10
// students massivi bilan quyidagi ishlarni bajaring: 1) 60 yoki undan yuqori ball olgan talabalarni ajrating; 2)
// ularni ballari bo‘yicha kamayish tartibida saralang; 3) map() orqali ism va ballni yangi massivga o‘tkazing; 4)
// find() bilan 90 dan yuqori ball olgan birinchi talabani toping; 5) some() bilan kamida bitta talaba 90 dan
// yuqori ball olganini tekshiring; 6) every() bilan barcha talabalar 40 yoki undan yuqori ball olganini
// tekshiring; 7) forEach() yordamida har bir talabaning ismi va ballini alohida chiqaring.
// Qo‘shimcha shart: har bir metodning vazifasini tushuntirib bera olish kerak.
// Ustoz uchun tavsiya: 1–6-masalalarni mustaqil ishlashga, 7–8-masalalarni uy vazifasiga, 9–10-masalalarni esa
// kuchliroq o‘quvchilar uchun yakuniy amaliy topshiriq sifatida berish mumkin. Masalalar yechimlarsiz tuzilgan

function analyz(students) {
  let high_score = students.filter((student) => student.score >= 60);
  console.log("1) 60 balldan yuqori bo'lgan talabalar: ", high_score);

  let sort_score = high_score.sort((a, b) => b.score - a.score);
  console.log("2) Kamayish tartibidagi ro'yxat: ", sort_score);

  let pushJoinArr = sort_score.map((student) => ({
    name: student.name,
    score: student.score,
  }));
  console.log("3) Yangi massivedagi talabalar ro'yxati: ", pushJoinArr);

  let hihg_score_find = pushJoinArr.find((item) => item.score > 90);
  console.log("4) 90 ballda yuqori o'quvchilar: ", hihg_score_find);

  let bormi90 = students.some((item) => item.score >= 90);
  console.log("5) 90dan balldan yuqori balli o'quvchi bormi: ", bormi90);

  let hammasiBalandmi = students.every((item) => item.score >= 90);
  console.log("6) 40 balldan yuqorisi bormi: ", hammasiBalandmi);

  console.log("7) ism va ball chiqarilgan jadval: ");
  students.forEach((item) => {
    console.log(`Ism: ${item.name} ball: ${item.score}`);
  });
}

analyz(students);
