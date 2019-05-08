const forces = () => {
    return new Promise((resolve,reject)=>{
        fetch('https://data.police.uk/api/forces')
        .then((res)=> res.json())
        .then((res)=>{
            resolve(res)
        })
        .catch(e=>{
            reject({message:'Something went wrong..'})
        })
    })
}

const categories = () => {
    return new Promise((resolve,reject)=>{
        fetch('https://data.police.uk/api/crime-categories')
        .then((res)=> res.json())
        .then((res)=>{
            resolve(res)
        })
        .catch(e=>{
            reject({message:'Something went wrong..'})
        })
    })
}

const crimes = (forces,categories) => {
    
    return new Promise((resolve,reject)=>{
        fetch(` https://data.police.uk/api/crimes-no-location?category=${categories}&force=${forces}`)
        .then((res)=> res.json())
        .then((res)=>{
            resolve(res)
        })
        .catch(e=>{
            reject({message:'Something went wrong..'})
        })
    })
}

export {
    forces,
    categories,
    crimes
}