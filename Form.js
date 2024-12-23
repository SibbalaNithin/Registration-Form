let Firstname=document.getElementById('firstname')
let Lastname=document.getElementById('lastname')
let gender=document.querySelectorAll('[name=gender]')
let qualification=document.querySelectorAll('[name=education]')
let state=document.getElementById('state')
let district=document.getElementById('district')
let form=document.getElementById('form')
// let Andhra=['Chittor', 'Tirupati', 'Guntur', 'Kadapa', 'Kurnool', 'Nellore']
// let Karnataka=['Manglore', 'Mysore', 'Hubbli', 'Ballari']
// let TamilNadu=['Salem','Trichy','Chennai','Namakal','KumaGonam','Thunalveli']
// let Kerla=['Kochi', 'Pondi', 'Selliampatty','Palakadu','Kochin']


// console.log(Firstname)
// console.log(Lastname)
// console.log(gender)
// console.log(qualification)
// console.log(state)
// console.log(district)
// let districtvalue=()=>{
//     if(state.value!=""){
//         if(state.value=="Andhra"){
//             district.innerHTML=""
//             Andhra.map((dst)=>{
//                 let option=document.createElement('option')
//                 option.innerHTML=dst
//                 district.appendChild(option)
//             })
//         }
//         if(state.value=="Karnataka"){
//             district.innerHTML=""
//             Karnataka.map((dst)=>{
//                 let option=document.createElement('option')
//                 option.innerHTML=dst
//                 district.appendChild(option)
//             })
//         }
//         if(state.value=="TamilNadu"){
//             district.innerHTML=""
//             TamilNadu.map((dst)=>{
//                 let option=document.createElement('option')
//                 option.innerHTML=dst
//                 district.appendChild(option)
//             })
//         }
//         if(state.value=="Kerla"){
//             district.innerHTML=""
//             Kerla.map((dst)=>{
//                 let option=document.createElement('option')
//                 option.innerHTML=dst
//                 district.appendChild(option)
//             })
//         }
//     }
// }


let district_values = {
    Andhra:['Chittor', 'Tirupati', 'Guntur', 'Kadapa', 'Kurnool', 'Nellore'],
    Karnataka:['Manglore', 'Mysore', 'Hubbli', 'Ballari'],
    TamilNadu:['Salem','Trichy','Chennai','Namakal','KumaGonam','Thunalveli'],
    Kerla:['Kochi', 'Pondi', 'Selliampatty','Palakadu','Kochin']

}

let districtvalue=()=>{
    if(state.value!=""){
        for(let keys in district_values){
            if(state.value==keys){
                district.innerHTML=""
                district_values[keys].map((dst)=>{
                    let option=document.createElement('option')
                    option.innerHTML=dst
                    district.appendChild(option)
                })
            }
        }
    }
}
let msg=document.getElementsByClassName('msg')

let formsubmit=(e)=>{
    // alert("button is clicked")
    e.preventDefault()
    if (firstname.value=="") {
        // let p=document.createElement('p')
        msg[0].innerHTML='Please Enter the First Name'
        msg[0].style.marginTop="-22px" 
        msg[0].style.color="red"
        // firstname.insertBefore(p)
    }
    if(Lastname.value==""){
        msg[1].innerHTML='Please Enter the Last Name'
        msg[1].style.marginTop="-22px" 
        msg[1].style.color="red"
    }
    let gendervalue=0;
    gender.forEach((data)=>{
        console.log(data.value, data.checked)
        if (data.checked){
            gendervalue+=1;
        }
    })
    if(gendervalue==0){
        msg[2].innerHTML='Please Select the Gender'
        msg[2].style.marginTop="-10px" 
        msg[2].style.color="red"
    }
    let qualificationvalue=0;
    qualification.forEach((data)=>{
        console.log(data.value, data.checked)
        if (data.checked){
            qualificationvalue+=1;
        }
    })
    if(qualificationvalue==0){
        msg[3].innerHTML='Please Select the Qualifiaction'
        msg[3].style.marginTop="-10px" 
        msg[3].style.color="red"
    }
    if (state.value==""){
        msg[4].innerHTML='Please Select the State'
        msg[4].style.marginTop="0px" 
        msg[4].style.color="red"
    }
    if (district.value==""){
        msg[5].innerHTML='Please Select the District'
        msg[5].style.marginTop="0px" 
        msg[5].style.color="red"
    }
}
form.addEventListener('submit',formsubmit)
