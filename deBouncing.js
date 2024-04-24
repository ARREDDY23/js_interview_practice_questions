let counter =0;

const getSuggestions = () => {

    console.log("called"+ counter++);
}


const doDebouncing = (fn, d) =>{
    let timer
    return function(){
        clearTimeout(timer);
        timer = setTimeout(() =>
            {
                fn.apply(this, arguments)
            }, d);
    }

}

const onSuggestionChange = doDebouncing(getSuggestions, 300)