/**
 * @param {object} HTMLEl Элемент
 */
function addCollapsedState(HTMLEl) {
	HTMLEl.classList.toggle("active");
	document.querySelector("header").classList.toggle("fixed");
}

/**
 * @param {string} idTrigger Значение атрибута data-type.
 */
export const collapse = (idTrigger) => {
	let trigger = document.querySelector(`[data-type = ${idTrigger}]`);
	trigger.addEventListener("click", (event) => {
		let targetId = trigger.getAttribute("data-target");
		let collapse = document.getElementById(targetId);
		event.preventDefault();
		addCollapsedState(collapse);
	});
};
