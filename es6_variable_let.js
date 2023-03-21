let company = "Rikkeisoft";
// Redeclare???--> NO, Reassign???
company = "Rikkei Academy";
{
    let company = "Rikkei";
    console.log("Company in block-->", company);//Result: Rikkei
}
console.log("Company outsite block--->", company);//Result: Rikkei Academy