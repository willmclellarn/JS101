PROBLEM
input/output: string -> variety of chars (number, alphabetic, punctuation)
              string -> always 26 chars long! numbers/digits
                     ->  0-9 will be the digits

Rules:
  - only count lowercase characters
    - ignore anything that isn't a lowercase alphabetical char


EXAMPLES/TEST CASES
  - place a 0 for any index in which there are no match for that character
    - looking in alphabetical order

DATA STRUCTURES
  - how might we track the # of appearances of each letter
    - key/value pairs
  - might need to hold the data that is the alphabet
  - store 0 as the default beginning value for any given characters

ALGO
  - start by creating empty data storage for the character / character count key/value pair
  - set a default value for the character count of 0;
  - create a data reference to the alphabet, specifically the lower case alphabet
  - create a loop to iterate across each letter of the lower case alphabet
  - using each character from the above loop, compare it to all characters in the
  input string
  - if the alphabet character matches a character in the input string, increment
  the character count value
  - once the entire input string has been traversed, add the alphabet character &
  it's count as a key/value pair to the empty data storage
  - repeat for the 2nd character of the alphabet until the entire alphabet is done
  - turn the char/char count storage data into a 26 character string
  - return that string
*/
