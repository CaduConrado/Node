const url = require("url");
const address = "http://www.mywebsite.com.br/catalog?products=desk";
const parseUrl = new url.URL(address);

console.log(parseUrl.host);
console.log(parseUrl.pathname);
console.log(parseUrl.search);
console.log(parseUrl.searchParams);
console.log(parseUrl.searchParams.get("products"));
