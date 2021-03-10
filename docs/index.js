// ひらがな,カタカナ,半角カタカナの変換コード借用 http://code.google.com/p/kanaxs/
String.prototype.toHankakuCase = function () {
  var e,
    d = this.length,
    b = [];
  while (d--) {
    e = b[d] = this.charCodeAt(d);
    switch (true) {
      case 65281 <= e && e <= 65374:
        b[d] -= 65248;
        break;
      case e == 12288:
        b[d] = 32;
        break;
    }
  }
  return String.fromCharCode.apply(null, b);
};
(function () {
  var b = {
    12449: 65383,
    12451: 65384,
    12453: 65385,
    12455: 65386,
    12457: 65387,
    12540: 65392,
    12450: 65393,
    12452: 65394,
    12454: 65395,
    12456: 65396,
    12458: 65397,
    12459: 65398,
    12461: 65399,
    12463: 65400,
    12465: 65401,
    12467: 65402,
    12469: 65403,
    12471: 65404,
    12473: 65405,
    12475: 65406,
    12477: 65407,
    12479: 65408,
    12481: 65409,
    12484: 65410,
    12486: 65411,
    12488: 65412,
    12490: 65413,
    12491: 65414,
    12492: 65415,
    12493: 65416,
    12494: 65417,
    12495: 65418,
    12498: 65419,
    12501: 65420,
    12504: 65421,
    12507: 65422,
    12510: 65423,
    12511: 65424,
    12512: 65425,
    12513: 65426,
    12514: 65427,
    12515: 65388,
    12516: 65428,
    12517: 65389,
    12518: 65429,
    12519: 65390,
    12520: 65430,
    12521: 65431,
    12522: 65432,
    12523: 65433,
    12524: 65434,
    12525: 65435,
    12527: 65436,
    12530: 65382,
    12531: 65437,
    12483: 65391,
  };
  var a = { 12532: 65395, 12535: 65436, 12538: 65382 };
  String.prototype.toHankanaCase = function () {
    var h,
      j,
      l,
      g = [],
      d = b,
      k = a;
    for (h = 0, j = this.length; h < j; ) {
      l = this.charCodeAt(h++);
      switch (true) {
        case l in d:
          g.push(d[l]);
          break;
        case l in k:
          g.push(k[l], 65438);
          break;
        case 12459 <= l && l <= 12489:
          g.push(d[l - 1], 65438);
          break;
        case 12495 <= l && l <= 12509:
          g.push(d[l - (l % 3)], [65438, 65439][(l % 3) - 1]);
          break;
        default:
          g.push(l);
          break;
      }
    }
    return String.fromCharCode.apply(null, g);
  };
})();
String.prototype.toHiraganaCase = function () {
  var e,
    d = this.length,
    b = [];
  while (d--) {
    e = this.charCodeAt(d);
    b[d] = 12449 <= e && e <= 12534 ? e - 96 : e;
  }
  return String.fromCharCode.apply(null, b);
};
String.prototype.toKatakanaCase = function () {
  var e,
    d = this.length,
    b = [];
  while (d--) {
    e = this.charCodeAt(d);
    b[d] = 12353 <= e && e <= 12438 ? e + 96 : e;
  }
  return String.fromCharCode.apply(null, b);
};
String.prototype.toPaddingCase = function () {
  var d,
    g,
    e,
    b = [];
  for (d = 0, e = this.length; d < e; d++) {
    g = this.charCodeAt(d);
    switch (true) {
      case 12363 <= g && g <= 12386 && g % 2 == 1:
      case 12459 <= g && g <= 12482 && g % 2 == 1:
      case 12388 <= g && g <= 12393 && g % 2 == 0:
      case 12484 <= g && g <= 12489 && g % 2 == 0:
        b.push(g + ({ 12443: 1 }[this.charCodeAt(d + 1)] || 0));
        if (b[b.length - 1] != g) {
          d++;
        }
        break;
      case 12399 <= g && g <= 12413 && g % 3 == 0:
      case 12495 <= g && g <= 12509 && g % 3 == 0:
        b.push(g + ({ 12443: 1, 12444: 2 }[this.charCodeAt(d + 1)] || 0));
        if (b[b.length - 1] != g) {
          d++;
        }
        break;
      default:
        b.push(g);
        break;
    }
  }
  return String.fromCharCode.apply(null, b);
};
String.prototype.toZenkakuCase = function () {
  var e,
    d = this.length,
    b = [];
  while (d--) {
    e = b[d] = this.charCodeAt(d);
    switch (true) {
      case e <= 126 && 33 <= e:
        b[d] += 65248;
        break;
      case e == 32:
        b[d] = 12288;
        break;
    }
  }
  return String.fromCharCode.apply(null, b);
};
(function () {
  var a = {
    65382: 12530,
    65383: 12449,
    65384: 12451,
    65385: 12453,
    65386: 12455,
    65387: 12457,
    65388: 12515,
    65389: 12517,
    65390: 12519,
    65391: 12483,
    65392: 12540,
    65393: 12450,
    65394: 12452,
    65395: 12454,
    65396: 12456,
    65397: 12458,
    65398: 12459,
    65399: 12461,
    65400: 12463,
    65401: 12465,
    65402: 12467,
    65403: 12469,
    65404: 12471,
    65405: 12473,
    65406: 12475,
    65407: 12477,
    65408: 12479,
    65409: 12481,
    65410: 12484,
    65411: 12486,
    65412: 12488,
    65413: 12490,
    65414: 12491,
    65415: 12492,
    65416: 12493,
    65417: 12494,
    65418: 12495,
    65419: 12498,
    65420: 12501,
    65421: 12504,
    65422: 12507,
    65423: 12510,
    65424: 12511,
    65425: 12512,
    65426: 12513,
    65427: 12514,
    65428: 12516,
    65429: 12518,
    65430: 12520,
    65431: 12521,
    65432: 12522,
    65433: 12523,
    65434: 12524,
    65435: 12525,
    65436: 12527,
    65437: 12531,
    65438: 12443,
    65439: 12444,
  };
  String.prototype.toZenkanaCase = function () {
    var e,
      g,
      h,
      d = [],
      b = a;
    for (e = 0, g = this.length; e < g; e++) {
      h = this.charCodeAt(e);
      d.push(b[h] || h);
    }
    return String.fromCharCode.apply(null, d);
  };
})();

// ↓ここから自前実装↓

// 京急語変換
String.prototype.toKeikyuCase = function () {
  var phonemeMap = {
    あ: "a",
    い: "i",
    う: "u",
    え: "e",
    お: "o",
    か: "ka",
    き: "ki",
    く: "ku",
    け: "ke",
    こ: "ko",
    さ: "sa",
    し: "si",
    す: "su",
    せ: "se",
    そ: "so",
    た: "ta",
    ち: "ti",
    つ: "tu",
    て: "te",
    と: "to",
    な: "na",
    に: "ni",
    ぬ: "nu",
    ね: "ne",
    の: "no",
    は: "ha",
    ひ: "hi",
    ふ: "hu",
    へ: "he",
    ほ: "ho",
    ま: "ma",
    み: "mi",
    む: "mu",
    め: "me",
    も: "mo",
    や: "ya",
    ゆ: "yu",
    よ: "yo",
    ら: "ra",
    り: "ri",
    る: "ru",
    れ: "re",
    ろ: "ro",
    わ: "wa",
    ゐ: "i",
    ゑ: "e",
    を: "wo",
    ん: "",
    が: "ga",
    ぎ: "gi",
    ぐ: "gu",
    げ: "ge",
    ご: "go",
    ざ: "za",
    じ: "zi",
    ず: "zu",
    ぜ: "ze",
    ぞ: "zo",
    だ: "da",
    ぢ: "di",
    づ: "du",
    で: "de",
    ど: "do",
    ば: "ba",
    び: "bi",
    ぶ: "bu",
    べ: "be",
    ぼ: "bo",
    ぱ: "pa",
    ぴ: "pi",
    ぷ: "pu",
    ぺ: "pe",
    ぽ: "po",
    ぁ: "a",
    ぃ: "i",
    ぅ: "u",
    ぇ: "e",
    ぉ: "o",
    ゃ: "lya",
    ゅ: "lyu",
    ょ: "lyo",
    ゎ: "wa",
    っ: "_",
  };

  var convertMap = {
    asu: "ｪｨｽ",
    aa: "ｧ",
    la: "ｪｨ",
    li: "ｨ",
    lu: "ｩ",
    le: "ｪ",
    lo: "ｫ",
    lya: "ｬ",
    lyi: "ｨ",
    lyu: "ｭ",
    lye: "ｪ",
    lyo: "ｮ",
    _: "ｯ",
    ka: "ｶ",
    ki: "ｷ",
    ku: "ｸ",
    ke: "ｹ",
    ko: "ｺ",
    sa: "ｻ",
    si: "ｼ",
    su: "ｽ",
    se: "ｾ",
    so: "ｿ",
    ta: "ﾀ",
    ti: "ﾁ",
    tu: "ﾂ",
    te: "ﾃ",
    to: "ﾄ",
    na: "ﾅ",
    ni: "ﾆ",
    nu: "ﾇ",
    ne: "ﾈ",
    no: "ﾉ",
    ha: "ﾊ",
    hi: "ﾋ",
    hu: "ﾌ",
    he: "ﾍ",
    ho: "ﾎ",
    ma: "ﾏ",
    mi: "ﾐ",
    mu: "ﾑ",
    me: "ﾒ",
    mo: "ﾓ",
    ya: "ﾔ",
    yi: "ｲｨ",
    yu: "ﾕ",
    ye: "ｲｪ",
    yo: "ﾖ",
    ra: "ﾗ",
    ri: "ﾘ",
    ru: "ﾙ",
    re: "ﾚ",
    ro: "ﾛ",
    wa: "ﾜ",
    wi: "ｳｨ",
    wu: "ｳ",
    we: "ｳｪ",
    wo: "ｦ",
    ga: "ｶﾞ",
    gi: "ｷﾞ",
    gu: "ｸﾞ",
    ge: "ｹﾞ",
    go: "ｺﾞ",
    za: "ｻﾞ",
    zi: "ｼﾞ",
    zu: "ｽﾞ",
    ze: "ｾﾞ",
    zo: "ｿﾞ",
    da: "ﾀﾞ",
    di: "ﾁﾞ",
    du: "ﾂﾞ",
    de: "ﾃﾞ",
    do: "ﾄﾞ",
    ba: "ﾊﾞ",
    bi: "ﾋﾞ",
    bu: "ﾌﾞ",
    be: "ﾍﾞ",
    bo: "ﾎﾞ",
    pa: "ﾊﾟ",
    pi: "ﾋﾟ",
    pu: "ﾌﾟ",
    pe: "ﾍﾟ",
    po: "ﾎﾟ",
    a: "ｪ",
    i: "ｲ",
    u: "ｳ",
    e: "ｴ",
    o: "ｵ",
  };

  var text = this;

  text = text.toZenkanaCase();
  text = text.toHiraganaCase();

  var array = text.split(/([^あ-んぁ-ぉゃ-ょ]+)/),
    result = "";
  for (var i = 0, s = array.length; i < s; i++) {
    var str = array[i];
    if (str === "") {
      // splitのゴミなので無視
    } else if (/[あ-んぁ-ぉゃ-ょ]/.test(str.substr(0, 1))) {
      // ひらがな(変換対象)の文字列
      str = replaceWithMap(str, phonemeMap); // 音韻へ変換
      str = fusionVowel(str); // 母音融合
      str = dropNasal(str); // 鼻音脱落
      str = replaceWithMap(str, convertMap); // 半角カタカナへ変換
      result += str;
    } else {
      result += str;
    }
  }

  // 長音記号を半角に変換
  result = result.replace(/ー/g, "-");

  return result;

  // 鼻音脱落
  function dropNasal(str) {
    return str.replace(/[nm]/g, "");
  }

  // 母音融合
  function fusionVowel(str) {
    // 前にくる音韻がiの時だけ除外してる
    str = str.replace(/[aueo]([aiueo])/g, "$1$1");
    // aの場合、音韻が引きずられる筈
    str = str.replace(/((a)a)/g, "$1$2");
    return str;
  }

  // 変換表で置換
  function replaceWithMap(str, map) {
    var after = "";
    for (var i = 0, s = str.length; i < s; i++) {
      var added = false;
      for (var key in map) {
        var len = key.length,
          sub = str.substr(i, len);
        if (key === sub) {
          after += map[key];
          i += len - 1;
          added = true;
          break;
        }
      }
      if (!added) {
        after += str[i];
      }
    }
    return after;
  }
};

var d = document,
  jpArea = d.getElementById("jp_area"),
  kqArea = d.getElementById("kq_area"),
  btn = d.getElementById("btn");
btn.addEventListener(
  "click",
  function () {
    kqArea.value = (jpArea.value || "").toKeikyuCase();
  },
  false
);
