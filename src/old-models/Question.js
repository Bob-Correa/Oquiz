import { CoreModel } from './CoreModel.js';

class Question extends CoreModel {
    //
    description;
    wiki;
    anecdote;
    quiz_id;
    level_id;

    constructor(obj) {
        super(obj);

        this.description = obj.description;
        this.wiki = obj.wiki;
        this.anecdote = obj.anecdote;
        this.quiz_id = obj.quiz_id;
        this.level_id = obj.level_id;
    }
    //
}

export { Question };
