// function submitData(project){
//     project.
// preventDefault()
// }

// let projectname = document.getElementById("input-projectname").value
// let startdate = document.getElementById("input-stardate").value
// let endate = document.getElementById("inpt-endate").value
// let message = document.getElementById("input-message").value
// let techno = document.getElementById("input-techno").value
// let image = document.getElementById("input-image").files

// if (projectname === ""){
//     return alert ('Nama Projectnya apa brooo???')
// }else if ( startdate === ""){
//     return alert ('Ini Project Dibuatnya Mulai Kapaan??')
// } else if (endate === ""){
//     return alert ('Ini project sampai kapan broo?')
// } else if (message === "")
// {return alert ('Gaada Pesan pesan gituh??')
// } else if (techno === ""){
//     return alert ('seengaknya pilih salah satu teknologi apa?')
// } else if(image === ""){
//     return alert('Harus ada Gambarnya ya...')
// }

let dataproject = []

const addproject = (event) =>{
    event.preventDefault()

    const projectname = document.getElementById("input-projectname").value
    const startdate = document.getElementById("input-startdate").value
    const endate = document.getElementById("input-endate").value
    const message = document.getElementById("input-message").value
    const techno = document.getElementById("input-techno").value
    const image = document.getElementById("input-image").value

    image = URL.createObjectURL(image[0]);

    const project = {
        projectname,
        startdate,
        endate,
        message,
        techno,
        image,
    }

    dataproject.push(project)
    renderproject()

    console.log(dataproject)
}

function renderproject(){
    document.getElementById("projects").innerHTML = ''

    for(let index = 0; index < dataproject.length; index++){
        document.getElementById("projects").innerHTML +=` 
        <div class="blog-list-item">
            <div class="blog-image">
            <img src="${dataproject[index].image}" alt="" />
            </div>
            <div class="blog-content">
            <div class="btn-group">
                <button class="btn-edit">Edit Post</button>
                <button class="btn-post">Delete Post</button>
            </div>
            <h1>
                <a href="blog-detail.html" target="_blank">${dataproject[index].projectname}</a>
            </h1>
            <div class="detail-blog-content">
                ${projectname[index].startdate} | ${projectname[index].endate}
            </div>
            <p>
                ${projectname[index].message}
            </p>
            </div>
        </div>
        `
    }
}



// const projectName = document.querySelector("#project-name");
// const startDate = document.querySelector("#start-date");
// const endDate = document.querySelector("#end-date");
// const description = document.querySelector("#description");
// const file = document.querySelector("#input-blog-image");

// const form = document.querySelector("#form");


// let blogData = [];

// form.addEventListener("submit", (e)=>{
//     e.preventDefault();

    
//     const valueProjectName = projectName.value;
//     const valueStardate = startDate.value;
//     const valueEndDate = endDate.value;
//     const valueDescription = description.value;
//     let files = file.files;
   
//    files = URL.createObjectURL(files[0]);

//    const iconNodeJS = '<img src="./img/myProject/node-js.svg" alt="nodejs">';
//    const iconNextJS = '<img src="./img/myProject/nextjs.png" alt="nextjs">';
//    const iconReactJS = '<img src="./img/myProject/react.svg" alt="reactjs">';
//    const icontTypescript = '<img src="./img/myProject/typescript.png" alt="typescript">';

   
//    // pengambilan data dari checkbox
//    let checkNodeJS = document.querySelector("#nodejs").checked ? iconNodeJS : "";
//    let checkNextJS = document.querySelector("#nextjs").checked ? iconNextJS : "";
//    let checkReactJS = document.querySelector("#reactjs").checked ? iconReactJS : "";
//    let checkTypescript = document.querySelector("#typescript").checked ? icontTypescript : "";
    
    
//     let schema = {
//         valueProjectName,
//         valueStardate,
//         valueEndDate,
//         valueDescription,
//         files,
//     }
    
    
    
//     let parent = document.querySelector("#wrapper-myproject");
//     let h1 = document.createElement("li");
    
 
//     h1.innerHTML = `<div class="item-card">
//     <img src="${files}" alt="">
//     <div class="text">
//         <h3>${valueProjectName}</h3>
//         <p>${valueDescription}</p>
//     </div>
//     <div class="wrapper-checkbox">
        
//         <div class="checkbox-item">
//         ${checkNodeJS}
//         ${checkNextJS}
//         ${checkReactJS}
//         ${checkTypescript}
//         </div>
//     </div>
//  </div>`
 

//     parent.append(h1);

//    console.log(schema);
     
    
   
// })

