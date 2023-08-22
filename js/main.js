import { collapse } from "./modules/collapse.js";
collapse("trigger");
import "./modules/sliders.js";
$(document).ready(function () {
	$("#tabs-example a").click(function (e) {
		e.preventDefault();
		$(this).tab("show");
	});
});
