var calcTip = function() {
	// declare variables
	var billAmt = Number(document.getElementById('textBoxBill').value);
	var svcRating = Number(document.getElementById('selectRating').value);
	var numPeople = Number(document.getElementById('textBoxNumPeople').value);

	// validate input
	if (billAmt === '' || numPeople <= 0) {
			alert('Please enter values');
		return;
	}

	var $displayMsg = $('.message');
	$displayMsg.html('');
	var tipAmt = ((billAmt * svcRating) / numPeople).toFixed(2);

	var $tipTitle = $('<div class="tipTitle"></div>');
	var $tip = $('<div class="tip"></div>');
	
	$tipTitle.text('Tip Amount');
	$tip.text('$' + tipAmt);
	$tipTitle.appendTo($displayMsg);
	$tip.appendTo($displayMsg);
	if (numPeople > 1) {
		var $each = $('<div class="tipTitle"></div>');
		$each.text('each');
		$each.appendTo($displayMsg);
	}
}