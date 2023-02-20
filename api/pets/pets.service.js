

const gPets=[
    {
        _id:'sdf09',
     name:'Rex',
     age:4,
     type:'dog',
     color:'black'
    },
    {
        _id:'sdf877654',
        name:'Kitzi',
        age:7,
        type:'cat',
        color:'black'
       },
       {
        _id:'sd76',
        name:'Sky',
        age:9,
        type:'dog',
        color:'white'
       },
       {
        _id:'sdf8776',
        name:'Mack',
        age:4,
        type:'horse',
        color:'black'
       },
]

function query() {
    return Promise.resolve(gPets)
}

async function save(pet) {
    gPets.unshift(pet)
    return pet
  }

module.exports = {
    query,
    save
}

