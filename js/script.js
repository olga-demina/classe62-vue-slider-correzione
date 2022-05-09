const app = new Vue(
    {
        el: '#root',
        data: {
            activeImage: 0,
            timer: null,
            images: [
                {
                    image: 'img/01.jpg',
                    title: 'Svezia',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.'
                },
                {
                    image: 'img/02.jpg',
                    title: 'Svizzera',
                    text: 'Lorem ipsum.'
                },
                {
                    image: 'img/03.jpg',
                    title: 'Gran Bretagna',
                    text: 'Lorem ipsum, dolor sit amet consectetur.'
                },
                {
                    image: 'img/04.jpg',
                    title: 'Germania',
                    text: 'Lorem ipsum, dolor sit amet '
                },
                {
                    image: 'img/05.jpg',
                    title: 'Paradise',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit.'
                }
            ],
        },
        methods: {
            showPrev: function() {
                // Se actie image è uguale a 0, allora ripartartiamo dall'ultimo indice
                // altrimenti decrementa
                if (this.activeImage === 0) {
                    this.activeImage = this.images.length - 1;
                } else {
                    this.activeImage--;
                }
                this.resetTimer();
            },
            showNextAlClick: function() {
                this.showNext();
                this.resetTimer();
            },
            showNext: function() {
                // Se active image è uguale al'ultimo indice, allora lo portiamo a 0
                // altrimenti incrementa
                if (this.activeImage >= (this.images.length - 1)) {
                    this.activeImage = 0;
                } else {
                    this.activeImage++;
                }
            },
            showImage: function(index) {
                console.log('show me', index);
                this.activeImage = index;
                this.resetTimer();
            },
            stopTimer: function() {
                clearInterval(this.timer);
                this.timer = null;
            },
            startTimer: function() {
                this.timer = setInterval(this.showNext, 3000);
                console.log(this.timer);
            },
            resetTimer() {
                this.stopTimer();
                this.startTimer();
            }
        },
        created() {
            this.startTimer();
        }
    }
);  

