// JavaScript Document

	// Function for Seb's Lies vs Varvara's Truths Voting
function voteLies() {
    const confirmation = confirm("You clicked? Want to see them?");
    if (confirmation) {
        window.location.href = "seb-lies.html"; // Redirect to the Seb Lies page
    }
}

// Function for Date Night Fail-o-Meter
function rateHangouts() {
    const confirmation = confirm("You clicked again? See my honest complaints then.");
	if (confirmation) {
        window.location.href = "date-night.html"; // Redirect to the Seb Lies page
    }
}

// Function for Bad Girl Complaints
function logBadGirlComplaints() {
    const confirmation = confirm("Let's see if u think i'm actually a bad girl.");
	if (confirmation) {
        window.location.href = "bad-girl.html"; // Redirect to the Seb Lies page
    }
}

// Function for Spicy Pics Tease
function showSpicyPicsTease() {
    const confirmation = confirm("You're expecting some spicy pics, huh? Let's see if u r ready for this!");
    if (confirmation) {
        window.location.href = "spicy-pics.html";
    }
}
