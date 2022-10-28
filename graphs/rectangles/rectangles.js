export default function() {
    return {
        name: 'Rectangles',
        p5: (p) => {
            p.setup = function() {
                let w = p.windowWidth;
                if (p.windowWidth > p.windowHeight) {
                    w = p.windowHeight;
                }
                p.createCanvas(w, w);
                p.noStroke();
                p.noLoop();
            }
            p.draw = function() {
                let w = p.width;
                const rw = w / 6;
                const offsetY = (w - rw * 4) / 2;
                p.fill(255, 30);
                p.rect((w - rw) / 2, offsetY, rw, rw);

                p.fill(255, 70);
                p.rect((w - rw) / 2, offsetY + rw * 1, rw, rw);

                p.fill(255, 170);
                p.rect((w - rw) / 2, offsetY + rw * 2, rw, rw);

                p.fill(255, 255);
                p.rect((w - rw) / 2, offsetY + rw * 3, rw, rw);
            }
            p.windowResized = function() {
                let w = p.windowWidth;
                if (p.windowWidth > p.windowHeight) {
                    w = p.windowHeight;
                }
                p.resizeCanvas(w, w);
            }
        },
        code: (p) => {
            p.setup = function() {
                p.createCanvas(500, 500);
                p.strokeWeight(5);
                p.stroke(255);
                p.noFill();
                p.noLoop();
            }
            p.draw = function() {
                p.circle(250, 250, 170, 170);
            }
        }
    }
}