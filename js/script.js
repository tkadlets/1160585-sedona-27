 "use strict";

 var hotelSearchButton = document.querySelector(".hotel-search-button");
 var searchForm = document.querySelector(".search-form");
 var checkIn = searchForm.querySelector("[name=check-in-date]");
 var checkOut = searchForm.querySelector("[name=check-out-date]");
 var adultsNumber = searchForm.querySelector("[name=adults-number]");
 var kidsNumber = searchForm.querySelector("[name=kids-number]");
 var adultsStorage = localStorage.getItem("adultsStorage");
 var kidsStorage = localStorage.getItem("kidsStorage");
 var checkInStorage = localStorage.getItem("checkInStorage");
 var checkOutStorage = localStorage.getItem("checkOutStorage");

 searchForm.classList.remove("search-form-shown");

 hotelSearchButton.addEventListener("click", function (evt) {
 	evt.preventDefault();
 	searchForm.classList.toggle("search-form-shown");
 	if (adultsStorage) {
 		adultsNumber.value = adultsStorage;
 	}
 	if (kidsStorage) {
		kidsNumber.value = kidsStorage;
}
	if (checkInStorage) {
		checkIn.value = checkInStorage;
}
	if (checkOutStorage) {
		checkOut.value = checkOutStorage;
}
 });

searchForm.addEventListener("submit", function (evt) {
 if (!checkIn.value || !checkOut.value || !adultsNumber.value || !kidsNumber.value) {
 	evt.preventDefault();
 	console.log("Отсутствующее(-ие) значение(-я)");
 } else {
 		localStorage.setItem("checkInStorage", checkIn.value);
		localStorage.setItem("checkOutStorage", checkOut.value);
 }
 if (!checkIn.value) {
 	checkIn.style.border = "2px solid #d44848";
 } else {
 	checkIn.style.border = "";
 }
 if (!checkOut.value) {
 	checkOut.style.border = "2px solid #d44848";
 }	else {
 	checkOut.style.border = "";
 }
 if (!adultsNumber.value) {
 	adultsNumber.style.border = "2px solid #d44848";
 }	else {
 	adultsNumber.style.border = "";
 }
 if (!kidsNumber.value) {
 	kidsNumber.style.border = "2px solid #d44848";
 }	else {
 	kidsNumber.style.border = "";
 }
});

searchForm.addEventListener("submit", function (evt) {
 if (adultsNumber.value == 0 && kidsNumber.value == 0) {
	evt.preventDefault();
 	console.log("Неверное(-ые) значение(-я)");
 	searchForm.classList.add("search-form-incorrect");
	} else {
		localStorage.setItem("adultsStorage", adultsNumber.value);
		localStorage.setItem("kidsStorage", kidsNumber.value);
	}
});

function initMap() {
    var sedona = {lat: 34.869, lng: -111.761};
    var map = new google.maps.Map(
    document.getElementById('map'), {
    	zoom: 9,
    	center: sedona,
    	zoomControl: false,
    	streetViewControl: false
    });
    var marker = new google.maps.Marker({
    	position: sedona, map: map});
 }
