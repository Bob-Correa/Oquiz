import { CoreModel } from './CoreModel.js';

class Quiz extends CoreModel {
    //
    title;
    description;
    user_id;

    constructor(obj) {
        super(obj);

        this.title = obj.title;
        this.description = obj.description;
        this.user_id = obj.user_id;
    }
    //
}

export { Quiz };
