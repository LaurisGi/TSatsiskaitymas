const numbers: number[] = [1, 2, -2, 6, -5, 9, 1.02, 45, -69, 77, -12, 2, 8, -2, -4, 59, 7, -3];
const words: string[] = ["pirmadienis", "antradienis", "trečiadienis", "ketvirtadienis", "penktadienis", "šeštadienis", "sekmadienis"];

console.group('1. Parašykite funkciją, kuri atspausdina paskutinio masyvo elemento indeksą');
{
  function solution1(arr: any[]): void {
    console.log(arr.length - 1);
  }

  console.log(numbers);
  solution1(numbers);

  console.log(words);
  solution1(words);
}
console.groupEnd();

console.group('2. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus eilutėmis');
{
  function solution2(arr: any[]): void {
    for (let i = 0; i < arr.length; i++) console.log(i);
  }

  console.log(numbers);
  solution2(numbers);

  console.log(words);
  solution2(words);
}
console.groupEnd();

console.group('3. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes eilutėmis');
{
  function solution3(arr: any[]): void {
    for (let i = 0; i < arr.length; i++) console.log(arr[i]);
  }

  console.log(numbers);
  solution3(numbers);

  console.log(words);
  solution3(words);
}
console.groupEnd();

console.group('4. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras eilutėmis, tokiu formatu:  ');
// [0] => reikšmė
// [1] => reikšmė
// [2] => reikšmė
{
  function solution4(arr: any[]): void {
    for (let i = 0; i < arr.length; i++) console.log(`[${i}] => ${arr[i]}`);
  }

  console.log(numbers);
  solution4(numbers);

  console.log(words);
  solution4(words);
}
console.groupEnd();

console.group('5. Parašykite funkciją, kuri atspausdina masyvo elementus atbuline tvarka eilutėmis, iš galo.');
{
  function solution5(arr: any[]): void {
    for (let i = arr.length - 1; i >= 0; i--) console.log(arr[i]);
  }

  console.log(numbers);
  solution5(numbers);

  console.log(words);
  solution5(words);
}
console.groupEnd();

console.group('6. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus vienoje eilutėje: 0 1 2 3 ...');
{
  function solution6(arr: any[]): void {
    const res = arr.map((_, i) => i).join(' ');
    console.log(res);
    // console.log(...arr.map((_, i) => i));
  }

  console.log(numbers);
  solution6(numbers);

  console.log(words);
  solution6(words);
}
console.groupEnd();

console.group('7. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes vienoje eilutėje: -111 2 -9 48 ...');
{
  function solution7(arr: any[]): void {
    const res = arr.join(' ');
    console.log(res);
    // console.log(...arr);
  }

  console.log(numbers);
  solution7(numbers);

  console.log(words);
  solution7(words);
}
console.groupEnd();

console.group('8. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras vienoje eilutėje, tokiu formatu:');
//  [0]=>17, [1]=>8, [2]=>88 ..
{
  function solution8(arr: any[]): void {
    const res = arr.map((x, i) => `[${i}]=>${x}`).join(', ');
    console.log(res);
    // console.log(...arr.map((x, i) => `[${i}]=>${x} `));
  }

  console.log(numbers);
  solution8(numbers);

  console.log(words);
  solution8(words);
}
console.groupEnd();

console.group('9. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo elementų padaugintų iš 2');
{
  function solution9(arr: number[]): number[] {
    return arr.map(x => x * 2);
  }

  const result = solution9(numbers);
  console.log(numbers);
  console.log(result);
}
console.groupEnd();

console.group('10. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo elementų pakeltų kvadratu');
{
  function solution10(arr: number[]): number[] {
    return arr.map(x => x ** 2);
  }

  const result = solution10(numbers);
  console.log(numbers);
  console.log(result);
}
console.groupEnd();

console.group('11. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo elementų ir jų indeksų sandaugos');
{
  function solution11(arr: number[]): number[] {
    return arr.map((x, i) => x * i);
  }

  const result = solution11(numbers);
  console.log(numbers);
  console.log(result);
}
console.groupEnd();

console.group('12. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo teigiamų elementų');
{
  function solution12(arr: number[]): number[] {
    return arr.filter((x) => x > 0);
  }

  const result = solution12(numbers);
  console.log(numbers);
  console.log(result);
}
console.groupEnd();

console.group('13. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo NE-teigiamų elementų');
{
  function solution13(arr: number[]): number[] {
    return arr.filter((x) => x <= 0);
  }

  const result = solution13(numbers);
  console.log(numbers);
  console.log(result);
}
console.groupEnd();

console.group('14. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo lyginių elementų');
{
  function solution14(arr: number[]): number[] {
    return arr.filter((x) => x % 2 === 0);
  }

  const result = solution14(numbers);
  console.log(numbers);
  console.log(result);
}
console.groupEnd();

console.group('15. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo nelyginių elementų');
{
  function solution15(arr: number[]): number[] {
    return arr.filter((x) => Math.abs(x) % 2 === 1);
  }

  const result = solution15(numbers);
  console.log(numbers);
  console.log(result);
}
console.groupEnd();

console.group('16. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo, paverstų teigiamais, elementų');
{
  function solution16(arr: number[]): number[] {
    return arr.map((x) => x < 0 ? x * -1 : x);
  }

  const result = solution16(numbers);
  console.log(numbers);
  console.log(result);
}
console.groupEnd();