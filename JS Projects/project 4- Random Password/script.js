const passwordBox=document.getElementById("password");
const button=document.getElementById("btn");
const copyButton=document.getElementById("copy");

const generatePassword = () => {
    const chars="0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let password= "";
    const lengthOfPassword=8;
    for(let i=0; i<lengthOfPassword; i++){
        
        password+= chars.charAt(Math.floor(Math.random() * chars.length))
        //console.log(password);

    }
    passwordBox.value=password;
}


button.addEventListener("click", generatePassword);

copyButton.addEventListener("click" , () =>{
    const passwordCopy= passwordBox.value.trim();
    if(!passwordCopy){
        alert("No password to copy! Please generate a password first.");
    return;
    }

    navigator.clipboard.writeText(passwordCopy).then(() => {
       alert("password copied to clipboard!");
    });
    
});
