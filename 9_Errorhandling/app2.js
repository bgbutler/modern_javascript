// regex part 2
let re;

re = /hello/;
re = /hello/i;

// meta cheracter symbols
// starts with
re = /^h/i;

// ends with
re = /d$/;

// combine starts and ends with hello
re = /^hello$/i;

// match any one character
re = /^h.llo/i;

// match one or any
re = /h*llo/i;

// optional character, could be neither
re = /gre?a?y/i;

// escape characters \
re = /gre?a?y\?/i;

// brackets [] character sets - either a or e
re = /gr[ae]y/i;

// must be G or F
re = /[GF]ray/i;

// match anything except G or F
// ^ inside [] means NOT
re = /[^GF]ray/i;

// any uppercase or lowercase
re = /[A-Z]|[a-z]ray/;
re = /[A-Za-z]ray/;

// [0-9] any digit
// this works since it's looking for 0ray
re = /[0-9]ray/;

// {} quantifiers occurs exactly {m} times
re = /Hel{2}o/i;

// range of number of times {m,} at least m times
re = /Hel{2,4}o/i;


// () for grouping - looking for group of (digitx) three times
re = /([0-9]x){3}/i;

// shorthand character classes
// word (alphanumeric) character or _
re = /\w/;

// + is for one or more
re = /\w+/;

// non word characters
re = /\W/;

// digit can do d+ for any number of times
re = /\d/;

// non-digit
re = /\D/;

// s for whitespace space or tab, S non-whitespace or tab
re = /\s/;

// word boundary
re = /Hell\b/i;

// assertions match x only if followed by =y or !y for not
re = /x(?=y)/;

// string to match
const str = 'xy';

// log results
const result = re.exec(str);
console.log(result);

function reTest(re, str){
  if (re.test(str)) {
    console.log(`${str} matches ${re.source}`);
  } else {
    console.log(`${str} does NOT match ${re.source}`);
  }
}

reTest(re, str)
