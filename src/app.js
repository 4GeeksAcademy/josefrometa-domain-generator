let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let domain = [".com", ".net", ".us", ".io"];

for (let pronouns of pronoun) {
  for (let abjs of abj) {
    for (let nouns of noun) {
      for (let domains of domain) {
        console.log(pronouns + abjs + nouns + domains);
      }
    }
  }
}
