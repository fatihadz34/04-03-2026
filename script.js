document.getElementById("registform").addEventListener("submit", function(event){
    event.preventDefault();

    let fullname = document.getElementById("fullname").value.trim();
    let dob = document.getElementById("dob").value;
    let religion = document.getElementById("religion").value;
    let output = document.getElementById("output");

    let gender = "";
    let genders = document.getElementsByName("gender");
    for(let i = 0; i < genders.length; i++){
        if(genders[i].checked){
            gender = genders[i].value;
        }
    }

    let infos = document.querySelectorAll(".info:checked");
    let infoList = [];
    infos.forEach(function(item){
        infoList.push(item.value);
    });

    if(fullname === ""){
        output.innerHTML = "Full Name must be filled!";
        output.style.color = "red";
        return;
    }

    if(dob === ""){
        output.innerHTML = "Date of Birth must be filled!";
        output.style.color = "red";
        return;
    }

    if(gender === ""){
        output.innerHTML = "Please select your gender!";
        output.style.color = "red";
        return;
    }

    if(religion === ""){
        output.innerHTML = "Please select your religion!";
        output.style.color = "red";
        return;
    }

    if(infoList.length === 0){
        output.innerHTML = "Please select at least one information source!";
        output.style.color = "red";
        return;
    }

    output.innerHTML = `
        <b>Registration Successful</b><br><br>
        Full Name: ${fullname}<br>
        Date of Birth: ${dob}<br>
        Gender: ${gender}<br>
        Religion: ${religion}<br>
        Information Source: ${infoList.join(", ")}
    `;
    output.style.color = "green";
});
