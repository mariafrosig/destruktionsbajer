window.addEventListener("load", showQuiz);


function showQuiz() {
    console.log("siden vises!");
    document.querySelector("#button_start").addEventListener("click", startQuiz);


}

function startQuiz() {
    console.log("quiz starter");

    document.querySelector("#button_start").classList.add("hide");

    document.querySelector("#question1").classList.remove("hide");



    document.querySelector("#YES1").addEventListener("click", question2);
    document.querySelector("#NO1").addEventListener("click", question2);


}


function question2() {
    console.log("question2");

    document.querySelector("#question1").classList.add("hide");
    document.querySelector("#question2").classList.remove("hide");


  document.querySelector("#YES2").addEventListener("click", question3);
    document.querySelector("#NO2").addEventListener("click", question3);

}


function question3() {
    console.log("question3");

    document.querySelector("#question2").classList.add("hide");
    document.querySelector("#question3").classList.remove("hide");


     document.querySelector("#YES3").addEventListener("click", result);
    document.querySelector("#NO3").addEventListener("click", result);


}


function result() {
    console.log("resultat");

    document.querySelector("#question3").classList.add("hide");
    document.querySelector("#result").classList.remove("hide");


    document.querySelector("#again").addEventListener("click", restart);


}

function restart() {

       document.querySelector("#result").classList.add("hide");

    startQuiz();

}


//
//    document.querySelector("#menu").classList.toggle("hidden");
//
// 	let erSkjult = document.querySelector("#menu").classList.contains("hidden");
//
// 	if (erSkjult == true) {
// 		//menuen er nu skjult - ændr menuknap til lll
// 		document.querySelector("#menuknap").textContent = "☰";
// 		document.querySelector(".grid-container").classList.remove("hidden");
// 		document.querySelector("#menuknap").classList.remove("menuknapned");
//
// 		// tilføje scroll igen
// 		document.querySelector("body").classList.remove("overflow")
// 		document.querySelector(".burgermenu").classList.remove("background");;
// 		document.querySelector("#menuknap").classList.remove("menuknapnormal");
//
// 		document.querySelector("#menuknap").classList.add("menuknapned");
//
//
// 	} else {
// 		//menuen er nu vist - ændr menuknap til x
// 		document.querySelector("#menuknap").textContent = "X"
// 		document.querySelector(".grid-container").classList.add("hidden");
//
// 		// fjerne muligheden for at scrolle
// 		document.querySelector("body").classList.add("overflow");
//
// 		document.querySelector(".burgermenu").classList.add("background");
// 		document.querySelector("#menuknap").classList.add("menuknapnormal");
// 		document.querySelector("#menuknap").classList.remove("menuknapned");
// 	}
//
