class CoreModel {
    //
    #id;
    created_at;
    updated_at;

    constructor(obj) {
        this.id = obj.id;
        this.created_at = obj.created_at;
        this.updated_at = obj.updated_at;
    }

    // cet accesseur permet de lire la propriété privée #id en dehors de cette classe
    get id() {
        return this.#id;
    }

    // ce mutateur permet de modifier la propriété privée #id en dehors de cette classe
    set id(newId) {
        this.#id = newId;
    }
    //
}

export { CoreModel };
