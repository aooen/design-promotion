var Banner = new function () {
	this.order = 0;
	this.$element = $(".banner-element");
	this.max = this.$element.length;
	this.set = function (i) {
		this.$element.eq(this.order).hide().animate({opacity: 0}, 500);
		this.$element.eq(i).show().animate({opacity: 1}, 500);
		this.order = i;
	};
	this.next = function (increment) {
		if (increment === undefined) increment = 1;
		var next = this.order + increment;
		if (next >= this.max) next = 0;
		this.set(next);
	};
};

$(document).ready(function () {
	setInterval(function () {
		Banner.next();
	}, 5000);

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