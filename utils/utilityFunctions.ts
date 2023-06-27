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
export function hexToRGB(hex: string) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

//
// check if url is valid
//
export function isValidURL(str: string) {
  // var pattern = new RegExp(
  //   "^(https?:\\/\\/)?" + // protocol
  //     "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
  //     "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
  //     "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
  //     "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
  //     "(\\#[-a-z\\d_]*)?$",
  //   "i"
  // ); // fragment locator
  // return !!pattern.test(str);
  try {
    return Boolean(new URL(str));
  } catch (e) {
    return false;
  }
}
