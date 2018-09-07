class _Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
    }

    enqueue(data) {
        const node = new _Node(data);

        if (this.first === null) {
            this.first = node;
        }

        if (this.last) {
            node.next = this.last;
            this.last.prev = node;
        }

        this.last = node;
    }

    dequeue() {
        if (this.first === null) {
            return;
        }

        const node = this.first;
        this.first = node.prev;

        if (node === this.last) {
            this.last = null;
        }

        return node.value;
    }
    peek() {
        return this.first.value;
    }
}

const fluffy = {
    imageURL: 'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg',
    imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
    name: 'Fluffy',
    sex: 'Female',
    age: 2,
    breed: 'Bengal',
    story: 'Thrown on the street',
    species: 'cat'
}
const skittles = {
    imageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg',
    imageDescription: 'yellow and green cat.',
    name: 'Skittles',
    sex: 'Female',
    age: 2,
    breed: 'tabby',
    story: 'Thrown on the street',
    species: 'cat'
}
const felix = {
    imageURL: 'https://r.hswstatic.com/w_907/gif/tesla-cat.jpg',
    imageDescription: 'siamese',
    name: 'felix',
    sex: 'Female',
    age: 5,
    breed: 'siamese',
    story: 'Thrown on the street',
    species: 'cat'
}
const bowser = {
    imageURL: 'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
    imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
    name: 'bowser',
    sex: 'Male',
    age: 3,
    breed: 'Golden Retriever',
    story: 'Owner Passed away',
    species: 'dog'
}
const bandit = {
    imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsJ81ExajuASG5hIET3Wm2U_cnoACEKXLP7TDxf4TKZkvEXLCI',
    imageDescription: 'old pug.',
    name: 'bandit',
    sex: 'Male',
    age: 3,
    breed: 'pug',
    story: 'Owner Passed away',
    species: 'dog'
}
const wrigley = {
    imageURL: 'https://hips.hearstapps.com/ghk.h-cdn.co/assets/18/12/beagle.jpg',
    imageDescription: 'friendly buddy',
    name: 'wrigley',
    sex: 'Male',
    age: 3,
    breed: 'weiner dog',
    story: 'Owner Passed away',
    species: 'dog'
}


let dogQueue = new Queue();
dogQueue.enqueue(bowser);
dogQueue.enqueue(bandit);
dogQueue.enqueue(wrigley);

let catQueue = new Queue();
catQueue.enqueue(fluffy);
catQueue.enqueue(skittles);
catQueue.enqueue(felix);


module.exports = {Queue, dogQueue, catQueue};

