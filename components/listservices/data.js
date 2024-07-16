import React from "react";
const columns = [
  {name: "Service", uid: "name"},
   
  {name: "STATUS", uid: "status"},
   
];

const users = [
  {
     
    id: 1,
    name: "Corporate Law",
    role: "CEO",
    team: "Management",
    status: "active",
    age: "29",
     
    
  },
  {
    id: 2,
    name: "Family Law",
     
    team: "Development",
    status: "paused",
     
   
  
  },
  {
    id: 3,
    name: "Intellectual Property",
     
     
    status: "active",
    age: "22",
 
     
  },
  {
    id: 4,
    name: "Real Estate Law",
    role: "Community Manager",
    team: "Marketing",
    status: "vacation",
    age: "28",
 
    
  },
  {
    id: 5,
    name: "Litigation",
    role: "Sales Manager",
    team: "Sales",
    status: "active",
    age: "24",
 
    
  },
];

export {columns, users};
