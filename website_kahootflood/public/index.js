
let music = document.getElementById("Music")
window.addEventListener("DOMContentLoaded", event => {
    const audio = music;
    audio.play();
  });

function send() {
	var pin = document.querySelector('#pin')
    var _name = document.querySelector("#name")
    var _amount = document.querySelector("#amount")

		var invalid = (isNaN(pin.value) || pin.value === '' || pin.value < 0 || pin.value != Math.round(pin.value)) ? true : _name.value == undefined || _name.value == ""
	var invalid2 = (isNaN(_amount.value) || _amount.value === '' || _amount.value < 0 || _amount.value != Math.round(_amount.value)) ? true : _name.value == undefined || _name.value == ""
    var invalid3 = (isNaN(_amount.value) || _amount.value === '' || _amount.value > 500 || _amount.value != Math.round(_amount.value)) ? true : _name.value == undefined || _name.value == ""

    if (invalid) {
			pin.value = ''
			alert('invalid pin!')
		} else if(invalid2) {
      pin.value = ''
			alert('invalid pin!')
    } else if(invalid3){
		alert("you can't do more than 500 bots")
	}else {
			var data = JSON.stringify({
				"gamePin": pin.value,
        "name": _name.value,
        "amount": _amount.value
		});

			var xhr = new XMLHttpRequest();
			xhr.withCredentials = true;

			xhr.addEventListener("readystatechange", function () {
			if (this.readyState === 4) {
				console.log(this.responseText);
			}
			});

			xhr.open("POST", window.location.href+"start");
			xhr.setRequestHeader("content-type", "application/json");
			xhr.setRequestHeader("cache-control", "no-cache");

			xhr.send(data);
			alert('Started attack. Bots are joining now!')
		}
	}