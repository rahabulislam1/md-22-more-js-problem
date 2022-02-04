function removeDuplicate(names) {
    const unique = [];
    for (const element of names) {
        console.log(element);
        if (unique.indexOf(element) == -1) {
            unique.push(element);
        }
    }
    return unique;


    // for (let i = 0; i < names.length; i++) {
    //     if (unique.indexOf(names[i]) == -1) {
    //         unique.push(names[i]);
    //     }
    // }
    // return unique;
}

const names = ['raha', 'tashu', 'sadee', 'tashu', 'sadee', 'razib', 'tashu', 'belal', 'rahabul', 'razib', 'sadee', 'misbah', 'tamim'];

const uniqueNames = removeDuplicate(names);
console.log(uniqueNames);
