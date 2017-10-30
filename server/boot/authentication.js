module.exports=function(app){
    app.dataSources.mysqlDs.automigrate();
    console.log("Performed automigration.");
}