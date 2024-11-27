import { CoreModel } from './CoreModel.js';

class Tag extends CoreModel {
    //
    name;

    constructor(obj) {
        super(obj);
        this.name = obj.name;
    }
    //
}

export { Tag };

// const monTag = new Tag({
//     id: 1,
//     name: 'un super tag',
//     created_at: new Date().toISOString(),
// });

// console.log(monTag);
