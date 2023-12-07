async function get(){
    console.log("0get")
    const response = await fetch(
        "http://localhost:3000/historico",
        {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            }
        }
    )
    .then(res => res.json())

    response.forEach(e => {
        console.log(e)
    });

    console.log("1get")
    return response
}


async function create(value){
    console.log("0create")
    
    console.log("1create")
    return {v:value}
}

async function post(v){
    console.log("0post")

    let a = await create(v)

    const response = await fetch(
        "http://localhost:3000/historico",
        {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(a)
        }
    )
    .then(res => res.json())

    console.log(response)

    console.log("1post")
}

export {get, post, create}