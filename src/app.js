let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let domain = [".com", ".net", ".us", ".io"];

for (const pronouns of pronoun) {
  for (const abjs of abj) {
    for (const nouns of noun) {
      for (const domains of domain) {
        console.log(pronouns + abjs + nouns + domains);
      }
    }
  }
}
