class Article {
    //
    title;
    description;

    // /**
    //  *
    //  * @param {string} titre
    //  * @param {string} desc
    //  */
    // constructor(titre, desc) {
    //     this.title = titre;
    //     this.description = desc;
    // }

    // /**
    //  *
    //  * @param {object} articleData
    //  */
    // constructor(articleData) {
    //     this.title = articleData.titre;
    //     this.description = articleData.desc;
    // }

    /**
     *
     * @param {array} articleData
     */
    constructor(articleData) {
        this.title = articleData[0];
        this.description = articleData[1];
    }
    //
}

// const article = new Article('<h1>Un titre</h1>', '<p>la description</p>');

// const article = new Article({
//     titre: '<h1>Un titre</h1>',
//     desc: '<p>la description</p>',
// });

const article = new Article(['<h1>Un titre</h1>', '<p>la description</p>']);

console.log(article);

function addition(a, b) {
    return a + b;
}

function addition(numbersToSum) {
    return numbersToSum.a + numbersToSum.b;
}

function addition(numbersToSum) {
    return numbersToSum[0] + numbersToSum[1];
}
