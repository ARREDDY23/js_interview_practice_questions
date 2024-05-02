
document.querySelector("#category").addEventListener("click",
(e) => {
    console.log(e.target.id);
    window.location.href = "/"+e.target.id;
});

document.querySelector("#inputUppercase").addEventListener("keyup",
(e) => {
    console.log(e);
    if(e.target.dataset.uppercase !=undefined) e.target.value = e.target.value.toUpperCase();
    if(e.target.dataset.lowercase !=undefined) e.target.value = e.target.value.toLowerCase();
})

/**
 * event delegation exists because of event bubbling
 * saves memory
 * less code
 * ---limitations--
 * sone events like blur | focus are not bubbled bu
 */