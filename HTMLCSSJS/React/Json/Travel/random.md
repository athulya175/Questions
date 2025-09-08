ok why we are using setAttribute
Ex=-1
    consider out lists contains
        <li class="lists" dataType="beach">Beach</li>
        <li class="lists" dataType="mountain">Mountain</li>

    li.addEventlistner("click",()=>{
        console.log(li.getAttribute("dataType))
    })
    if i click beatch it prints beach
    if i click mountain it print mountain


Ex-2 (filtering)
    [
        {
            "type":"beach",
            "name":"GOA"
        },
        {
            "type":"mountain",
            "name":"Manali"
        },
        {
            "type":"beach"
            "name":"Maldives"
        }
    ]

    li.addEventListener("click",()=>{
        let selectedType=li.getAttribute("dataType")
        let filterData=data.filter(item=>item.type===selectedType)
        console.log(filterData)
    })

    when we click beaches only beaches will shows only beach
    when we pass like this the data needs to be passed as argument inside the function and when we call