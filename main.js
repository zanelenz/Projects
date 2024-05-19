"use strict";

let name0 = "Maxwell Wright";
let name1 = "Raja Villarreal";
let name2 = "Helen Richards";
let phone0 = "(0191) 719 6495";
let phone1 = "0866 398 2895";
let phone2 = "0800 1111";
let email0 = "Curabitur.egestas.nunc@nonummyac.co.uk";
let email1 = "posuere.volpatate@sed.com";
let email2 = "libero@convallis.edu";
//How to declare an object
let user0 = {
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
}
let user1 = {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.volpatate@sed.com",
}
let user2 = {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu",
}
let user3 = {
    name: "Maisie Haley",
    phone: "0913 531 3030",
    email: "risus.Quisque@urna.ca",
}
//Arrays declared like this
//Arrays can hold elements of many types
let arr = [user0, user1, user2];
arr.push(user3);

console.log(arr[0].name + "/" + arr[0].phone + "/" + arr[0].email)
console.log(arr[arr.length - 1].name + "/" + arr[arr.length - 1].phone + "/" + arr[arr.length - 1].email)