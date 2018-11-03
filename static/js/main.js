$(document).ready(function () {
	var Banner = new function () {
		this.order = 0;
		this.$element = $(".banner-element");
		this.max = this.$element.length;
		this.interval;
		this.setInterval = function () {
			if (this.interval !== undefined) {
				clearInterval(this.interval);
			}
			this.interval = setInterval((function () {
				this.next();
			}).bind(this), 5000);
		};
		this.set = function (i) {
			if (this.order == i) return;
			this.$element.eq(this.order).fadeOut(500);
			this.$element.eq(i).fadeIn(500);
			this.order = i;
			this.setInterval();
		};
		this.next = function (increment) {
			if (increment === undefined) increment = 1;
			var next = this.order + increment;
			if (next < 0) next = this.max - 1;
			else if (next >= this.max) next = 0;
			this.set(next);
		};
	};

	Banner.setInterval();

	$('.banner-left').click(function () {
		Banner.next(-1);
	});
	$('.banner-right').click(function () {
		Banner.next();
	});
	$('.banner-order-bullet').click(function () {
		Banner.set($(this).index());
	});
});