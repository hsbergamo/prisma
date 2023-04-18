var canvas = document.getElementById('canvas');

var ctx = canvas.getContext('2d');

const CANVAS_W = canvas.width = 600;
const CANVAS_H = canvas.height = 400;









function circulo(x, y, r, c) {


    this.x = (x === null) ? 100 : x;
    this.y = (y === null) ? 100 : y;
    this.r = (r === null) ? 100 : r;
    this.c = (c === null) ? "ffcc00" : c;

    this.speed_x = Math.random() * 5 - 2;
    this.speed_y = Math.random() * 5 - 2;

    if (this.speed_x == 0) this.speed_x = 2;
    if (this.speed_y == 0) this.speed_y = -2;


    console.log(this.speed_x)




    this.update = function () {



        this.x += this.speed_x;
        this.y += this.speed_y;

        if (this.x > CANVAS_W - this.r || this.x < 0 + this.r) {

            this.speed_x = -this.speed_x;
        }


        if (this.y > CANVAS_H - this.r || this.y < 0 + this.r) {

            this.speed_y = -this.speed_y;
        }






    }


    let par = true;

    this.fillCircle = function (ctx) {
        if (ctx !== null) {

            ctx.fillStyle = this.c;
            ctx.strokeStyle = this.c;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, true);
            ctx.closePath();
            ctx.fill();




            ctx.beginPath();

            if (shape >= 2) {

                ctx.moveTo(conj_circles[0].x, conj_circles[0].y);
                ctx.lineTo(conj_circles[1].x, conj_circles[1].y);

            }


            if (shape >= 3) {
                ctx.moveTo(conj_circles[1].x, conj_circles[1].y);
                ctx.lineTo(conj_circles[2].x, conj_circles[2].y);
                ctx.moveTo(conj_circles[2].x, conj_circles[2].y);
                ctx.lineTo(conj_circles[0].x, conj_circles[0].y);
            }


            if (shape >= 4) {
                ctx.moveTo(conj_circles[0].x, conj_circles[0].y);
                ctx.lineTo(conj_circles[1].x, conj_circles[1].y);
                ctx.moveTo(conj_circles[1].x, conj_circles[1].y);
                ctx.lineTo(conj_circles[2].x, conj_circles[2].y);
                ctx.moveTo(conj_circles[2].x, conj_circles[2].y);
                ctx.lineTo(conj_circles[3].x, conj_circles[3].y);

                ctx.moveTo(conj_circles[3].x, conj_circles[3].y);
                ctx.lineTo(conj_circles[0].x, conj_circles[0].y);
                ctx.moveTo(conj_circles[0].x, conj_circles[0].y);
                ctx.lineTo(conj_circles[2].x, conj_circles[2].y);
                ctx.moveTo(conj_circles[3].x, conj_circles[3].y);
                ctx.lineTo(conj_circles[1].x, conj_circles[1].y);
                ctx.moveTo(conj_circles[3].x, conj_circles[3].y);
                ctx.lineTo(conj_circles[2].x, conj_circles[2].y);


            }

            if (shape == 5) {



                ctx.moveTo(conj_circles[4].x, conj_circles[4].y);
                ctx.lineTo(conj_circles[0].x, conj_circles[0].y);
                ctx.moveTo(conj_circles[4].x, conj_circles[4].y);
                ctx.lineTo(conj_circles[1].x, conj_circles[1].y);
                ctx.moveTo(conj_circles[4].x, conj_circles[4].y);
                ctx.lineTo(conj_circles[2].x, conj_circles[2].y);
                ctx.moveTo(conj_circles[4].x, conj_circles[4].y);
                ctx.lineTo(conj_circles[3].x, conj_circles[3].y);


            }












            ctx.stroke();

            ctx.fill();

            ctx.closePath();





        }


    }


}



// teste = new circulo(300,200, 10,"#fff");

// // teste.fillCircle(ctx)



// conj_circles[0] = new circulo(300,300,30, '#f00')

// 

// conj_circles[0].fillCircle(ctx);



conj_circles = []
function gerador(n, min, max) {


    conj_circles = []

    this.n = (n === null) ? 10 : n;
    this.min = (min === null) ? 1 : min;
    this.max = (max === null) ? 10 : max;
 


    for (var i = 0; i < n; i++) {

        let pos_x = Math.floor(Math.random() * (CANVAS_W / 2)) + CANVAS_W / 4;

        let pos_y = Math.floor(Math.random() * (CANVAS_H / 2)) + CANVAS_H / 4;

        let tamanho = Math.floor(Math.random() * (max - min)) + min;

        let opacity = 1;

        let cor = "rgba(255,255,255," + opacity + ")"

        conj_circles[i] = new circulo(pos_x, pos_y, tamanho, cor)





    }

    console.log(conj_circles)

    animate();


}


function animate() {


    ctx.clearRect(0, 0, CANVAS_W, CANVAS_H)




    for (var i = 0; i < conj_circles.length; i++) {


        conj_circles[i].update();


        conj_circles[i].fillCircle(ctx)
    }

    requestAnimationFrame(animate);


}

function config(val) {



    gerador(val, 15, 15)


}


let shape = 4;

config(shape)


// window.addEventListener('click', () =>{

// shape +=1;

// if(shape >4) shape =2;

// gerador(shape, 15,15)



// })


