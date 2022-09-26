let p = ["john", "joe", "james"];
console.log( p );
// p = p.map( s => s[0].toUpperCase() + s.substr(1));
p = p.map( (s : string) : string => s[0].toUpperCase() + s.substr(1));
console.log( p );
