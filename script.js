document.getElementById('calculate-button').addEventListener('click', function() {
    var width = document.getElementById('width').value;
    var height = document.getElementById('height').value;

    if (width > 0 && height > 0) {
        var gcd = function gcd(a, b) {
            return b ? gcd(b, a % b) : a;
        };

        var ratio = gcd(width, height);
        document.getElementById('result').textContent = 'Aspect Ratio: ' + width/ratio + ':' + height/ratio;
    } else {
        document.getElementById('result').textContent = 'Please enter a valid width and height';
    }
});