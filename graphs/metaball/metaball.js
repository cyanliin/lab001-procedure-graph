export default function() {
    return {
        name: 'Metaball',
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
                const radius = w / 5;
                p.background(0);
                p.circle(w / 2, w / 2 - radius / 2, radius, radius);
                p.circle(w / 2, w / 2 + radius / 2, radius, radius);
                p.filter(p.BLUR, 10);
                p.filter(p.THRESHOLD);
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
                p.noStroke();
            }
              
            p.draw = function() {
                p.background(0);
                p.circle(250, 250, 100, 100);
                p.circle(p.mouseX, p.mouseY, 100, 100);
                p.filter(p.BLUR, 5);
                p.filter(p.THRESHOLD);
            }
        }
    }
}