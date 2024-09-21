const seats = document.querySelectorAll("#seats button");
const removeCouponBtn = document.querySelectorAll(".removeCouponBtn");
const seatCount = document.getElementById("seatCount");
const seatLeftCount = document.getElementById("seatLeftCount");
const selectedSeatListing = document.getElementById("selectedSeatListing");
const totalPrice = document.getElementById("totalPrice");
const couponInput = document.getElementById("couponInput");
const couponBtn = document.getElementById("couponBtn");
const grandTotal = document.getElementById("grandTotal");
const couponDiv = document.getElementById("couponDiv");
const couponField = document.getElementById("couponField");
const new15CoupnApplied = document.getElementById("new15CoupnApplied");
const couple20CoupnApplied = document.getElementById("couple20CoupnApplied");
const submitBtn = document.getElementById("submitBtn");
const phoneNumber = document.getElementById("phoneNumber");
const modal = document.getElementById("modal");
const Continue = document.getElementById("Continue");
const menuBtn = document.getElementById("menuBtn");



menuBtn.addEventListener("click", ()=>{
    document.getElementById("line").classList.toggle("hidden");
    document.getElementById("cross").classList.toggle("hidden");
    document.getElementById("navItem").classList.toggle("menu-active");
})


console.log(seats);

let selectedSeats = [];

seats.forEach(seat => {
    seat.addEventListener("click", (e)=>{
       
        const noSeatSelectedEl = document.getElementById("noSeatSelectedEl");
        if(selectedSeats.length > 3 && !e.target.classList.contains("btn-active")){
            return alert("Maximum seat selected")
        }
        
        if (e.target.classList.contains("btn-active")) {
            e.target.classList.remove("btn-active");
            selectedSeats = selectedSeats.filter(item => item !== e.target.innerText)
            console.log(selectedSeats);
            seatCount.innerText= selectedSeats.length;
            seatLeftCount.innerText = 40 - selectedSeats.length;
            document.getElementById(`${e.target.innerText}InList`).remove(); 

            if (selectedSeats.length == 0) {
                selectedSeatListing.innerHTML = `
                            <div class="w-full text-center" id="noSeatSelectedEl">
                                <span class="text-xl text-red-500 font-medium ">No Seat Selected</span>
                            </div>
                `
            }
            totalPrice.innerText = selectedSeats.length * 550;

            if (selectedSeats.length < 4) {
                couponInput.setAttribute("disabled", "true");
                couponBtn.setAttribute("disabled", "true");
                couponInput.value = "";
                grandTotal.innerText = totalPrice.innerText;
                couponField.classList.remove("hidden");
                couponField.classList.add("flex");
                new15CoupnApplied.classList.remove("flex");
                new15CoupnApplied.classList.add("hidden");
                couple20CoupnApplied.classList.remove("flex");
                couple20CoupnApplied.classList.add("hidden")
            }
            
        }else if (!e.target.classList.contains("btn-active")) {
            selectedSeats.push(e.target.innerText);
            e.target.classList.add("btn-active")
            console.log(selectedSeats);
            seatCount.innerText= selectedSeats.length;
            seatLeftCount.innerText = 40 - selectedSeats.length;
            if(selectedSeats.length != 0){
                if (noSeatSelectedEl) {
                    noSeatSelectedEl.remove();
                }
                
            }

            selectedSeatListing.innerHTML += `<div class="flex justify-between text-dullText text-center" id="${e.target.innerText}InList"><span>${e.target.innerText}</span><span>Economy</span><span>550</span></div>`

            totalPrice.innerText = selectedSeats.length * 550;

            if (selectedSeats.length > 3) {
                couponInput.removeAttribute("disabled");
                couponBtn.removeAttribute("disabled");
            }
            grandTotal.innerText = totalPrice.innerText

            
        }
        
    })
})



couponBtn.addEventListener("click", ()=>{
    if (couponInput.value == "NEW15") {
        grandTotal.innerText = (selectedSeats.length * 550) - ((selectedSeats.length * 550) * .15);
        couponField.classList.remove("flex");
        couponField.classList.add("hidden");
        new15CoupnApplied.classList.remove("hidden");
        new15CoupnApplied.classList.add("flex")
        
    }else if (couponInput.value == "Couple 20") {
        grandTotal.innerText = (selectedSeats.length * 550) - ((selectedSeats.length * 550) * .2);
        couponField.classList.remove("flex");
        couponField.classList.add("hidden");
        couple20CoupnApplied.classList.remove("hidden");
        couple20CoupnApplied.classList.add("flex")
    }
})


removeCouponBtn.forEach((e)=>{

    e.addEventListener("click", ()=>{
        couponInput.value = "";
        grandTotal.innerText = totalPrice.innerText;
        couponField.classList.remove("hidden");
        couponField.classList.add("flex");
        new15CoupnApplied.classList.remove("flex");
        new15CoupnApplied.classList.add("hidden");
        couple20CoupnApplied.classList.remove("flex");
        couple20CoupnApplied.classList.add("hidden");
    })

    
})



submitBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    if (selectedSeats.length != 0 ) {
        modal.classList.remove("hidden");
        modal.classList.add("flex")
    }else if(selectedSeats.length == 0){
        return alert("Please select a seat")
    }
})

phoneNumber.addEventListener("input", (e)=>{
    if (e.target.value.length == 11) {
        submitBtn.removeAttribute("disabled")
    }else if (e.target.value.length <11 || e.target.value.length >11){
        submitBtn.setAttribute("disabled", "true")
    }
})

Continue.addEventListener("click", ()=>{
    location.reload();
})