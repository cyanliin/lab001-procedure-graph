export default function() {
    return {
        name: 'Circle',
        p5: (p) => {
            p.setup = function() {
                let w = p.windowWidth;
                if (p.windowWidth > p.windowHeight) {
                    w = p.windowHeight;
                }
                p.createCanvas(w, w);
                p.strokeWeight(w * 0.01);
                p.stroke(255);
                p.noFill();
                p.noLoop();
            }
            p.draw = function() {
                let w = p.width;
                const radius = w / 3;
                p.circle(w / 2, w / 2, radius, radius);
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