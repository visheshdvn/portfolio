import slugify from "slugify";

//
// generate random string of length n -> default 6
//
export function getRandomCharacters(n = 6) {
  var result = "";
  var characters = "abcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;

  for (var i = 0; i < n; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}

//
// slugify string
//
export function getSlugifiedString(str: string) {
  return slugify(str, {
    lower: true,
    strict: true,
    trim: true,
    // remove: /[^A-Za-z0-9]/g,
  });
}

//
// convert hex color to RGB
//
export function hexToRGB(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}
