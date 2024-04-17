const a= {
    "tittle": "The Dark Knight",
    "year": 2008,
    "director": "Christopher Nolan"
};

const b = {
    // ...a,
    "tittle": "The Dark Knight Rises",
    "year": 2012
};

// spread operator
const c = {
    ...a,
    ...b
};

console.log(c);