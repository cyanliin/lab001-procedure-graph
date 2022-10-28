function formatCode(raw) {	
    // break each line into array
    const rawLines = raw.toString().split('\n');
    
    // remove first & last line
    rawLines.shift();
    rawLines.pop();

    const lines = [];
    rawLines.forEach((rawLine) => {
        let rl = rawLine;
        rl = rl.replaceAll(' p.', ' ');
        rl = rl.replaceAll('(p.', '(');
        rl = rl.replaceAll('            ', '');
        rl = rl.replaceAll('setup = function', 'function setup');
        rl = rl.replaceAll('draw = function', 'function draw');
        rl = rl.replaceAll('    ', '<span class=\'code-tab\'></span>');
        lines.push(`<div>${rl}</div>`);
    })
    return lines.join('');
}