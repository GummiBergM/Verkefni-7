/**
 * Verkefni 7 í Vefforritun 1, 2024.
 * Notar jsdoc til að skrifa lýsingu á föllum, inntaki og úttaki.
 * Kveikið á `Check JS` í Visual Studio Code til að sjá mögulegar villur.
 * Notar `console.assert` til að athuga hvort föll virki rétt.
 */

//------------------------------------------------------------------------------
// Fastar

/** Íslenskir sérhljóðar */
const CONSONANTS = "bcdfghjklmnpqrstvwxz".split("");

/** Íslenskir samhljóðar */
const VOWELS = "aeiouyáéýúíóöæ".split("");

//------------------------------------------------------------------------------
// Hjálparföll

/**
 * Athuga hvort óþekkt gildi sé strengur eða ekki.
 * @param {unknown} str Óþekkt gildi sem athuga á hvort sé strengur.
 * @returns `true` ef `str` er strengur, annars `false`.
 */
// Skilgreinum anonymous fall og bindum við breytuna `isString`
const isString = (str) => typeof str === "string";

// Prófum fallið
console.assert(isString("hi") === true, "isString: skilar `true` fyrir streng");
console.assert(isString(42) === false, "isString: skilar `false` fyrir tölu");
console.assert(isString(null) === false, "isString: skilar `false` fyrir null");

/**
 * Öruggt fall sem skilar fylki af strengjum úr gefnum streng, skipt upp með
 * gefnum afmkarkara (separator).
 * @param {string} str Hugsanlegur strengur sem skal skipta.
 * @returns {string[]} Fylki af strengjum eða tóma fylkið ef afmarkari kom
 * ekki fram.
 */
function split(str, separator = " ") {
  if (!isString(str)) {
    return [];
  }

  return str.split(separator);
}

//------------------------------------------------------------------------------
// Grunnföll sem skilgreina á

function longest(str) {
  if (!isString(str) || str === "") return null;
  const words = str.split(" ");
  let longestWord = words[0];

  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}

function shortest(str) {
  if (!isString(str)) return null;
  if (str.trim() === "") return "";

  const words = str.split(" ");
  let shortestWord = words[0];

  for (const word of words) {
    if (word.length < shortestWord.length) {
      shortestWord = word;
    }
  }

  return shortestWord;
}

function reverse(str) {
  if (isString(str)) {
    const split = str.split("");
    const reversed = split.reverse();

    return reversed.join("");
  }
  return null;
}

console.assert(
  reverse("halló") === "óllah",
  "reverse: skilar réttu niðurstöðu"
);

console.assert(
  reverse(false) === null,
  "reverse: ef ekki strengur, skila null"
);

function vowels(str) {
  if (!isString(str)) return 0;

  let count = 0;
  for (const char of str.toLowerCase()) {
    if (VOWELS.includes(char)) {
      count++;
    }
  }
  return count;
}

function consonants(str) {
  if (!isString(str)) return 0;

  let count = 0;
  for (const char of str.toLowerCase()) {
    if (CONSONANTS.includes(char)) {
      count++;
    }
  }
  return count;
}

function palindrome(str) {
  if (!isString(str)) return false;

  const cleanStr = str.toLowerCase().replace(/\s+/g, '');
  return cleanStr === reverse(cleanStr);
}

//------------------------------------------------------------------------------
// Leiðbeint ferli

function start() {
  alert("Velkomin í strengjavinnslu! Þú munt slá inn streng og við greinum hann.");

  const userInput = prompt("Sláðu inn streng:");
  if (!isString(userInput) || userInput.trim() === "") return;

  const longestWord = longest(userInput);
  const shortestWord = shortest(userInput);
  const reversedString = reverse(userInput);
  const vowelCount = vowels(userInput);
  const consonantCount = consonants(userInput);
  const isPalindrome = palindrome(userInput);

  let resultMessage = `Lengsta orðið: ${longestWord}\n`;
  resultMessage += `Stysta orðið: ${shortestWord}\n`;
  resultMessage += `Öfug röð: ${reversedString}\n`;
  resultMessage += `Fjöldi sérhljóða: ${vowelCount}\n`;
  resultMessage += `Fjöldi samhljóða: ${consonantCount}\n`;
  resultMessage += `Er þetta samhverfa (palindrome)?: ${isPalindrome ? "Já" : "Nei"}`;

  alert(resultMessage);

  const again = confirm("Viltu prófa aftur?");
  if (again) {
    start();
  }
}
