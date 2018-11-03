var Banner = new function () {
	this.order = 0;
	this.$element = $(".banner-element");
	this.max = this.$element.length;
	this.next = function () {
		var next = this.order + 1;
		if (next >= this.max) next = 0;
		this.set(next);
	};
	this.set = function (i) {
		this.$element.eq(this.order).animate({opacity: 0}, 500);
		this.$element.eq(i).animate({opacity: 1}, 500);
		this.order = i;
	};
};

$(document).ready(function () {
	setInterval(function () {
		Banner.next();
	}, 3000);
});