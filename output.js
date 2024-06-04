const queryStr = document.location.search;
const queries = new URLSearchParams(queryStr);

const firstName = queries.get("firstName");
const lastName = queries.get("lastName");
const starSign = queries.get("starSign");

const greeting = document.getElementById("welcome");

greeting.innerText = `Welcome ${firstName} ${lastName}! You are a ${starSign}`;

const pageImage = document.getElementById("horoscopeImage");
const pageText = document.getElementById("text");

const horoscopeData = {
  libra: {
    image: "https://media.4rgos.it/i/Argos/8147673_R_Z002A?w=750&h=440&qlt=70",
    text: "Librans are extroverted, cosy, and friendly people. Librans, like the Scales that symbolise the sign, are often concerned with attaining balance, harmony, peace, and justice in the world. With their vast stores of charm, intelligence, frankness, persuasion, and seamless connectivity, they are well-equipped to do so.5 Jul 2021",
  },
  pisces: {
    image:
      "https://i.pinimg.com/originals/6d/5d/c7/6d5dc7990e2514653a776a0fa1506582.gif",
    text: "A mutable sign, Pisces effortlessly adapts to their surroundings. These visionary fish have unparalleled access to the collective unconscious through their clairvoyance and make incredible artists and creatives. Kind and gentle, they're invigorated by shared experiences of music and romance.",
  },
  leo: {
    image:
      "https://i.pinimg.com/originals/c9/ae/68/c9ae68b734814ef4dd0bafbceb055a71.jpg",
    text: "Leo is represented by the lion, and these spirited fire signs are the kings and queens of the celestial jungle. They're delighted to embrace their royal status: Vivacious, theatrical, and passionate, Leos love to bask in the spotlight and celebrate themselves.",
  },
  gemini: {
    image: "./gemini.jpeg",
    text: "Playful and intellectually curious, Gemini is constantly juggling a variety of passions, hobbies, careers, and friend groups. They are the social butterflies of the zodiac: These quick-witted twins can talk to anyone about anything. Find them buzzing between happy hours, dinner parties, and dance floors.",
  },
  aquarius: {
    image:
      "https://files.slack.com/files-pri/T0EB87AN4-F04BTNJV6B0/17814817-0b91-4d43-bf93-e1d5247627ea-removebg-preview.png",
    text: "Aquarius, the 11th zodiac sign, is symbolised by the Water Bearer, a symbol of the Gods bringing essential nutrients to the Earth. Aquarius people are advanced, self-reliant, clever, exceptional, and optimistic. Air is their elemental sign. Aquarians, like air, lack a distinct form and appear to resist classification.",
  },
  aries: {
    image:
      "https://t4.ftcdn.net/jpg/01/77/47/67/360_F_177476718_VWfYMWCzK32bfPI308wZljGHvAUYSJcn.jpg",
    text: "Like their fellow fire signs, Leo and Sagittarius, Aries is a passionate, motivated, and confident leader who builds community with their cheerful disposition and relentless determination. Uncomplicated and direct in their approach, they often get frustrated by exhaustive details and unnecessary nuances",
  },
  taurus: {
    image:
      "https://files.slack.com/files-pri/T0EB87AN4-F04C0A0BAJE/4ee61e0fe684ada39303564cf3d972e0.jpeg",
    text: "Taurus is the second of the 12 astrological signs and is represented by the bull constellation. Of the four zodiac elements (air, earth, fire, and water), Taurus is an earth sign. Taureans, like the bull that represents them, are known to be intelligent, dependable, hardworking, dedicated, and stubborn.",
  },
  cancer: {
    image:
      "https://files.slack.com/files-pri/T0EB87AN4-F04BTNT4TJA/6b29b3ebd147b9452bbf020298d03bce--funny-wallpapers-crabs.jpeg",
    text: "Cancer is ruled by the moon, the celestial body that represents comfort, self-care, and maternal energies. Accordingly, Cancers tend to be domestically oriented. They love to create cozy, safe spaces that serve as their personal sanctuaries, then spend lots of time in them.",
  },
  capricorn: {
    image:
      "https://files.slack.com/files-pri/T0EB87AN4-F04CCUMNTH7/hqdefault.jpeg",
    text: "A rock-steady earth sign, you lend structure and stability to any project. You'll work tirelessly to ensure that there's food on your family's table and that the people you love enjoy the best the world has to offer. In fact, you show love by providing material comforts, rather than with grand displays of affection.",
  },
};

pageImage.src = horoscopeData[starSign].image;
pageText.innerText = horoscopeData[starSign].text;
