const DomElement = function (selector, height, width, bg, fontSize) {
	this.selector = selector;
	this.height = height;
	this.width = width;
	this.backgroundColor = bg;
	this.fontSize = fontSize;
}

DomElement.prototype.createElem = function() {
	let elem = '';
	
	if(this.selector.substring(0, 1) === '.') { // создаем div c .class
		elem = document.createElement('div');
		elem.classList.add(this.selector.substring(1));
		elem.textContent = 'блок div с классом ' + `${this.selector}`;
	} else if (this.selector.substring(0, 1) === '#') { // создаем параграф с #id
		elem = document.createElement('p');
		elem.setAttribute('id', this.selector.substring(1));
		elem.textContent = 'параграф с id ' + `${this.selector}`;
	} else {
		// создасться пустой элемент
		elem = document.createElement('div');
		console.log('пустой ' + elem);
	}
// стили для нового элемента
	elem.style.cssText = `
		height: ${this.height}px;
		width: ${this.width}px;
		background: ${this.backgroundColor};
		font-size: ${this.fontSize}px;
	`
	return elem
} 

const newElem = new DomElement('.block', 100, 300, '#00ff00', 27);
document.body.appendChild(newElem.createElem());

const newElemGrey = new DomElement('#block', 100, 300, 'grey', 18);
document.body.appendChild(newElemGrey.createElem());



