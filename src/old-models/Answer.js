import { CoreModel } from './CoreModel.js';

class Answer extends CoreModel {
    //
    description;
    question_id;
    is_valid;

    constructor(obj) {
        super(obj);
        this.description = obj.description;
        this.question_id = obj.question_id;
        this.is_valid = obj.is_valid;
    }
    //
}

export { Answer };
