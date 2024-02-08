$(document).ready(function () {
	var messageField = $("#message");
	var buttonField = $("#button");

	var messages = [
		"I need you to answer a question for me, okay?",
		"Answer honestly, okay?",
		"I love you",
		"Will you be my valentine?",
	];

	var buttons = ["Okay", "Okay", "I love you too", "Omg yes"];

	var currentIndex = 0;

	function updateText() {
		messageField.text(messages[currentIndex]);
		buttonField.text(buttons[currentIndex]);
	}

	function fadeOut(callback) {
		messageField.add(buttonField).animate(
			{
				opacity: "0%",
			},
			500,
			function () {
				callback();
			}
		);
	}

	function fadeIn() {
		messageField.add(buttonField).animate(
			{
				opacity: "100%",
			},
			500,
			function () {}
		);
	}

	// Initial text setup
	updateText();

	// Button click event handler
	$("#button").on("click", function () {
		if (currentIndex < buttons.length - 1) {
			currentIndex++;
			fadeOut(function () {
				updateText();
				fadeIn();
			});
		} else {
			$(".message-container").animate(
				{
					opacity: "0%",
				},
				500,
				function () {}
			);

			setTimeout(function () {
				$(".message-container").css("display", "none");
				$(".valentines-card-container").css("display", "block");
			}, 500);

			$(".valentines-card-container").animate(
				{
					opacity: "100%",
				},
				500,
				function () {}
			);
		}
	});

	$(".container")
		.mouseenter(function () {
			$(".card").stop().animate(
				{
					top: "-90px",
				},
				"slow"
			);
		})
		.mouseleave(function () {
			$(".card").stop().animate(
				{
					top: 0,
				},
				"slow"
			);
		});
});
