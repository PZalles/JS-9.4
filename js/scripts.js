var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';

var dinosaur = 'triceratops';

var dinosaurUpperCased = dinosaur.toUpperCase();

var textReplaced = text.replace('Velociraptor', dinosaurUpperCased);

var half = Math.ceil(textReplaced.length/2);

var firstHalf = textReplaced.slice(0, half);

console.log(firstHalf);