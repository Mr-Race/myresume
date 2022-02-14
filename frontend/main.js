window.addEventListener('DOMContentLoaded', (event) =>{
    getVisitCount();
})

const functionApiURl='https://getresumecounterach.azurewebsites.net/api/getResumeCounter?code=Nb4jm1v6rNusjk5pnO/N2zxx7w8tEMQT9WqasgTpBmwyIM28/vd0OA==';
const localfunctionApi = 'http://localhost:7071/api/getResumeCounter';

const getVisitCount = () => {
    let count = 30;
    fetch(functionApiURl).then(response => {
        return response.json()
    }).then(response => {
        console.log("Website called function API.");
        count = response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log(error);
    });
    return count;
}