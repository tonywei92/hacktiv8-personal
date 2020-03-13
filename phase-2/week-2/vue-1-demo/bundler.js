

function bundler(inp, pipeline){
    for(let i = 0; i < pipeline.length; i++){
        inp = pipeline[i](inp)
    }
    return inp
}

function toUpperCase(text){
    return text.toUpperCase();
}

function reverse(text){
    return text.split("").reverse().join();
}

bundler("asd", [toUpperCase, reverse])