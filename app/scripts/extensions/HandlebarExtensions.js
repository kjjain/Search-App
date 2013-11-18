define([
	'handlebars'
], function(
	Handlebars
	) {
	return {
		extend: function() {
			Handlebars.getTemplate = function(name, callback) {
				if (typeof Handlebars.templates == 'undefined' || typeof Handlebars.templates[name] == 'undefined') {
					$.ajax({
						url: 'scripts/templates/' + name + '.html',
						success: function(data) {
							var template = Handlebars.compile(data);
							if (typeof Handlebars.templates == 'undefined') {
								Handlebars.templates = {};
							}
							Handlebars.templates[name] = template;
							callback(template);
						},
					});
				} else {
					callback(Handlebars.templates[name]);
				}
			};

			Handlebars.registerHelper("hasFeature", function(haystack, needle, options) {
				var length = haystack.length;
				for (var i = 0; i < length; i++) {
					if (haystack[i] == needle)
						return options.fn(this);
				}
				return options.inverse(this);
			});

			Handlebars.showContent = function(container, content, callback) {
				$(container)
					.hide()
					.html(content)
					.fadeIn(400, callback);
			};
		}
	};
});