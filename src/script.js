const seats = document.querySelectorAll("#seats button");

console.log(seats);

seats.forEach(seat => {
    seat.addEventListener("click", (e)=>{
        e.target.classList.toggle("btn-active")
        console.log(e.target);
        
    })
})
