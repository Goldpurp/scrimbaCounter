let plusBtn = document.getElementById("count-el")

console.log(plusBtn)

let count = 0

function plus() {

    count = count + 1
    plusBtn.textContent = count
}

let entriesStr = document.getElementById("entries-el")

function save() {

 let entry = count + " - "
 
 entriesStr.textContent += entry
 
 plusBtn.textContent = 0

 count = 0

}


