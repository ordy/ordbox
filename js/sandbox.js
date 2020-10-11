function stringFunctions() {
	const msg = 'abcdefgh ijklmnop';
	let res = 'length = ' + msg.length + '<br>';
	res += 'charAt(4) = ' + msg.charAt(4) + '<br>';
	res += 'match(/[a-f]/g) = ' + msg.match(/[a-f]/g) + '<br>';
	res += "padEnd(20, '-') = " + msg.padEnd(20, '-') + '<br>';
	res += "padStart(20, '*') = " + msg.padStart(20, '*') + '<br>';
	res += "replace('abcdefgh', 'aaa') = " + msg.replace('abcdefgh', 'aaa') + '<br>';
	res += 'search(/\\W/g) = ' + msg.search(/\W/g) + '<br>';
	res += 'slice(3,11) = ' + msg.slice(3, 11) + '<br>';
	res += "split(' ') = " + msg.split(' ') + '<br>';
	res += "startsWith('ijk', 9) = " + msg.startsWith('ijk', 9) + '<br>';
	res += 'substring(2,5) = ' + msg.substring(2, 5) + '<br>';
	res += "concat(' ', 'qrstuv') = " + msg.concat(' ', 'qrstuv') + '<br>';
	res += 'indexOf(ijk) = ' + msg.indexOf('ijk') + '<br>';
	return res;
}

function arrayFunctions() {
	const _USERS = ['Marc', 'Jack', 'Eric', 'Bob', 'Michael'];
	let users = ['Marc', 'Jack', 'Eric', 'Bob', 'Michael'];
	let table = document.createElement('table');
	let row = document.createElement('tr');

	// Header
	row.appendChild(document.createElement('th'));
	row.cells[0].appendChild(document.createTextNode('Function'));
	row.appendChild(document.createElement('th'));
	row.cells[1].appendChild(document.createTextNode('Result'));
	table.appendChild(row);

	//Table rows
	row = document.createElement('tr');
	row.appendChild(document.createElement('td'));
	row.cells[0].appendChild(document.createTextNode('length'));
	row.appendChild(document.createElement('td'));
	row.cells[1].appendChild(document.createTextNode(users.length));
	table.appendChild(row);
	row = document.createElement('tr');
	row.appendChild(document.createElement('td'));
	row.cells[0].appendChild(document.createTextNode("Array.from('abdcef')"));
	row.appendChild(document.createElement('td'));
	row.cells[1].appendChild(document.createTextNode(Array.from('abdcef')));
	table.appendChild(row);
	row = document.createElement('tr');
	row.appendChild(document.createElement('td'));
	row.cells[0].appendChild(document.createTextNode('Array.isArray(users)'));
	row.appendChild(document.createElement('td'));
	row.cells[1].appendChild(document.createTextNode(Array.isArray(users)));
	table.appendChild(row);
	row = document.createElement('tr');
	row.appendChild(document.createElement('td'));
	row.cells[0].appendChild(document.createTextNode('Array(5)'));
	row.appendChild(document.createElement('td'));
	row.cells[1].appendChild(document.createTextNode('[' + Array(5) + ']'));
	table.appendChild(row);
	row = document.createElement('tr');
	row.appendChild(document.createElement('td'));
	row.cells[0].appendChild(document.createTextNode('Array.of(5)'));
	row.appendChild(document.createElement('td'));
	row.cells[1].appendChild(document.createTextNode('[' + Array.of(5) + ']'));
	table.appendChild(row);
	row = document.createElement('tr');
	row.appendChild(document.createElement('td'));
	row.cells[0].appendChild(document.createTextNode("users.concat(['David', 'Steve'])"));
	row.appendChild(document.createElement('td'));
	row.cells[1].appendChild(document.createTextNode(users.concat(['David', 'Steve'])));
	table.appendChild(row);
	row = document.createElement('tr');
	row.appendChild(document.createElement('td'));
	row.cells[0].appendChild(document.createTextNode('copyWithin(0,2,3)'));
	row.appendChild(document.createElement('td'));
	row.cells[1].appendChild(document.createTextNode(users.copyWithin(0, 2, 3)));
	table.appendChild(row);
	row = document.createElement('tr');
	row.appendChild(document.createElement('td'));
	row.cells[0].appendChild(document.createTextNode('users.every(x => x.length > 3)'));
	row.appendChild(document.createElement('td'));
	row.cells[1].appendChild(document.createTextNode(users.every(x => x.length > 3)));
	table.appendChild(row);
	row = document.createElement('tr');
	row.appendChild(document.createElement('td'));
	row.cells[0].appendChild(document.createTextNode("users.fill('User', 1, 3))"));
	row.appendChild(document.createElement('td'));
	row.cells[1].appendChild(document.createTextNode(users.fill('User', 1, 3)));
	table.appendChild(row);
	row = document.createElement('tr');
	row.appendChild(document.createElement('td'));
	row.cells[0].appendChild(document.createTextNode("users.fill('User')"));
	row.appendChild(document.createElement('td'));
	row.cells[1].appendChild(document.createTextNode(users.fill('User')));
	table.appendChild(row);
	users = [..._USERS];
	row = document.createElement('tr');
	row.appendChild(document.createElement('td'));
	row.cells[0].appendChild(document.createTextNode('users.filter(x => x.length > 3)'));
	row.appendChild(document.createElement('td'));
	row.cells[1].appendChild(document.createTextNode(users.filter(x => x.length > 3)));
	table.appendChild(row);
	row = document.createElement('tr');
	row.appendChild(document.createElement('td'));
	row.cells[0].appendChild(document.createTextNode('users.find(x => x.length > 5)'));
	row.appendChild(document.createElement('td'));
	row.cells[1].appendChild(document.createTextNode(users.find(x => x.length > 5)));
	table.appendChild(row);
	row = document.createElement('tr');
	row.appendChild(document.createElement('td'));
	row.cells[0].appendChild(document.createTextNode('users.findIndex(x => x.length > 5)'));
	row.appendChild(document.createElement('td'));
	row.cells[1].appendChild(document.createTextNode(users.findIndex(x => x.length > 5)));
	table.appendChild(row);
	row = document.createElement('tr');
	row.appendChild(document.createElement('td'));
	row.cells[0].appendChild(document.createTextNode('Array.of([1,2],3,[4,5]).flat()'));
	row.appendChild(document.createElement('td'));
	row.cells[1].appendChild(document.createTextNode(Array.of([1, 2], 3, [4, 5]).flat()));
	table.appendChild(row);
	row = document.createElement('tr');
	row.appendChild(document.createElement('td'));
	row.cells[0].appendChild(document.createTextNode('users.map(x => [x.toUpperCase()])'));
	row.appendChild(document.createElement('td'));
	row.cells[1].appendChild(document.createTextNode(users.map(x => '[' + x.toUpperCase() + ']')));
	table.appendChild(row);
	row = document.createElement('tr');
	row.appendChild(document.createElement('td'));
	row.cells[0].appendChild(document.createTextNode('users.flatMap(x => [x.toUpperCase()])'));
	row.appendChild(document.createElement('td'));
	row.cells[1].appendChild(document.createTextNode(users.flatMap(x => [x.toUpperCase()])));
	table.appendChild(row);
	row = document.createElement('tr');
	row.appendChild(document.createElement('td'));
	row.cells[0].appendChild(document.createTextNode('users.forEach(x => names.push(x))'));
	row.appendChild(document.createElement('td'));
	let names = [];
	users.forEach(x => names.push(x));
	row.cells[1].appendChild(document.createTextNode(names));
	table.appendChild(row);
	row = document.createElement('tr');
	row.appendChild(document.createElement('td'));
	row.cells[0].appendChild(document.createTextNode("users.includes('Bob')"));
	row.appendChild(document.createElement('td'));
	row.cells[1].appendChild(document.createTextNode(users.includes('Bob')));
	table.appendChild(row);
	row = document.createElement('tr');
	row.appendChild(document.createElement('td'));
	row.cells[0].appendChild(document.createTextNode("users.indexOf('Eric')"));
	row.appendChild(document.createElement('td'));
	row.cells[1].appendChild(document.createTextNode(users.indexOf('Eric')));
	table.appendChild(row);
	row = document.createElement('tr');
	row.appendChild(document.createElement('td'));
	row.cells[0].appendChild(document.createTextNode("users.join('')"));
	row.appendChild(document.createElement('td'));
	row.cells[1].appendChild(document.createTextNode(users.join('')));
	table.appendChild(row);
	row = document.createElement('tr');
	row.appendChild(document.createElement('td'));
	row.cells[0].appendChild(document.createTextNode("users.lastIndexOf('Eric')"));
	row.appendChild(document.createElement('td'));
	row.cells[1].appendChild(document.createTextNode(users.lastIndexOf('Eric')));
	table.appendChild(row);
	row = document.createElement('tr');
	row.appendChild(document.createElement('td'));
	row.cells[0].appendChild(document.createTextNode('users.pop()'));
	row.appendChild(document.createElement('td'));
	row.cells[1].appendChild(document.createTextNode(users.pop()));
	table.appendChild(row);
	row = document.createElement('tr');
	row.appendChild(document.createElement('td'));
	row.cells[0].appendChild(document.createTextNode("users.push('Michael')"));
	row.appendChild(document.createElement('td'));
	row.cells[1].appendChild(document.createTextNode(users.push('Michael')));
	table.appendChild(row);
	row = document.createElement('tr');
	row.appendChild(document.createElement('td'));
	row.cells[0].appendChild(document.createTextNode("users.reduce(reducer,'')"));
	row.appendChild(document.createElement('td'));
	const reducer = (accumulator, currentValue) => accumulator + currentValue;
	row.cells[1].appendChild(document.createTextNode(users.reduce(reducer, '')));
	table.appendChild(row);
	row = document.createElement('tr');
	row.appendChild(document.createElement('td'));
	row.cells[0].appendChild(document.createTextNode("users.reduceRight(reducer,'')"));
	row.appendChild(document.createElement('td'));
	row.cells[1].appendChild(document.createTextNode(users.reduceRight(reducer, '')));
	table.appendChild(row);
	row = document.createElement('tr');
	row.appendChild(document.createElement('td'));
	row.cells[0].appendChild(document.createTextNode('users.reverse()'));
	row.appendChild(document.createElement('td'));
	row.cells[1].appendChild(document.createTextNode(users.reverse()));
	table.appendChild(row);
	users.reverse();
	row = document.createElement('tr');
	row.appendChild(document.createElement('td'));
	row.cells[0].appendChild(document.createTextNode('users.shift()'));
	row.appendChild(document.createElement('td'));
	row.cells[1].appendChild(document.createTextNode(users.shift()));
	table.appendChild(row);
	users.unshift('Marc');
	row = document.createElement('tr');
	row.appendChild(document.createElement('td'));
	row.cells[0].appendChild(document.createTextNode('users.slice(1,3)'));
	row.appendChild(document.createElement('td'));
	row.cells[1].appendChild(document.createTextNode(users.slice(1, 3)));
	table.appendChild(row);
	row = document.createElement('tr');
	row.appendChild(document.createElement('td'));
	row.cells[0].appendChild(document.createTextNode('users.some(x => x.length == 5)'));
	row.appendChild(document.createElement('td'));
	row.cells[1].appendChild(document.createTextNode(users.some(x => x.length == 4)));
	table.appendChild(row);
	row = document.createElement('tr');
	row.appendChild(document.createElement('td'));
	row.cells[0].appendChild(document.createTextNode('users.sort()'));
	row.appendChild(document.createElement('td'));
	row.cells[1].appendChild(document.createTextNode(users.sort()));
	table.appendChild(row);
	row = document.createElement('tr');
	row.appendChild(document.createElement('td'));
	row.cells[0].appendChild(document.createTextNode("users.splice(1,2,'Joe')"));
	row.appendChild(document.createElement('td'));
	users = [..._USERS];
	users.splice(1, 2, 'Joe');
	row.cells[1].appendChild(document.createTextNode(users.toString()));
	table.appendChild(row);
	row = document.createElement('tr');
	row.appendChild(document.createElement('td'));
	users = [..._USERS];
	row.cells[0].appendChild(document.createTextNode('users.toString()'));
	row.appendChild(document.createElement('td'));
	row.cells[1].appendChild(document.createTextNode(users.toString()));
	table.appendChild(row);
	row = document.createElement('tr');
	row.appendChild(document.createElement('td'));
	row.cells[0].appendChild(document.createTextNode("users.unshift('Rick', 'Thomas')"));
	row.appendChild(document.createElement('td'));
	row.cells[1].appendChild(document.createTextNode(users.unshift('Rick', 'Thomas')));
	table.appendChild(row);

	return table;
}

function objectFunctions() {
	let table = document.createElement('table');
	let row = document.createElement('tr');

	let PersonA = {
		name: 'Mike',
		age: 30,
		city: 'Brussels',
		active: true,
	};

	let PersonB = {};

	// Header
	row.appendChild(document.createElement('th'));
	row.cells[0].appendChild(document.createTextNode('Function'));
	row.appendChild(document.createElement('th'));
	row.cells[1].appendChild(document.createTextNode('Result'));
	table.appendChild(row);

	//Table rows
	row = document.createElement('tr');
	row.appendChild(document.createElement('td'));
	row.cells[0].appendChild(document.createTextNode("target = { a: 'AA', b: 'BB' }"));
	row.cells[0].appendChild(document.createElement('br'));
	row.cells[0].appendChild(document.createTextNode("source = { b: 'bb', c: 'cc' }"));
	row.cells[0].appendChild(document.createElement('br'));
	row.cells[0].appendChild(document.createTextNode('Object.assign(target, source)'));
	row.appendChild(document.createElement('td'));
	const target = { a: 'AA', b: 'BB' };
	const source = { b: 'bb', c: 'cc' };
	Object.assign(target, source);
	row.cells[1].appendChild(document.createTextNode(JSON.stringify(target).replace(/"([^"]+)":/g, '$1:')));
	table.appendChild(row);

	row = document.createElement('tr');
	row.appendChild(document.createElement('td'));
	row.cells[0].appendChild(document.createTextNode('new = Object.create(Person)'));
	row.cells[0].appendChild(document.createElement('br'));
	row.cells[0].appendChild(document.createTextNode("new.name = 'Paul'"));
	row.cells[0].appendChild(document.createElement('br'));
	row.cells[0].appendChild(document.createTextNode('new.age = 42'));
	row.cells[0].appendChild(document.createElement('br'));
	row.cells[0].appendChild(document.createTextNode("new.city = 'Paris'"));
	row.cells[0].appendChild(document.createElement('br'));
	row.cells[0].appendChild(document.createTextNode('new.active = false'));
	row.appendChild(document.createElement('td'));
	PersonB = Object.create(PersonA);
	PersonB.name = 'Paul';
	PersonB.age = 42;
	PersonB.city = 'Paris';
	PersonB.active = false;
	row.cells[1].appendChild(document.createTextNode(JSON.stringify(PersonB).replace(/"([^"]+)":/g, '$1:')));
	table.appendChild(row);

	row = document.createElement('tr');
	row.appendChild(document.createElement('td'));
	row.cells[0].appendChild(document.createTextNode('new = {}'));
	row.cells[0].appendChild(document.createElement('br'));
	row.cells[0].appendChild(document.createTextNode("Object.defineProperty(new, 'name', { value: 'Paul' })"));
	row.cells[0].appendChild(document.createElement('br'));
	row.cells[0].appendChild(document.createTextNode("Object.defineProperty(new, 'age', { value: 42 })"));
	row.cells[0].appendChild(document.createElement('br'));
	row.cells[0].appendChild(document.createTextNode("Object.defineProperty(new, 'city', { value: 'Paris' })"));
	row.cells[0].appendChild(document.createElement('br'));
	row.cells[0].appendChild(document.createTextNode("Object.defineProperty(new, 'active', { value: false })"));
	row.appendChild(document.createElement('td'));
	PersonB = {};
	Object.defineProperty(PersonB, 'name', { value: 'Paul', enumerable: true });
	Object.defineProperty(PersonB, 'age', { value: 42, enumerable: true });
	Object.defineProperty(PersonB, 'city', { value: 'Paris', enumerable: true });
	Object.defineProperty(PersonB, 'active', { value: false, enumerable: true });
	row.cells[1].appendChild(document.createTextNode(JSON.stringify(PersonB).replace(/"([^"]+)":/g, '$1:')));
	table.appendChild(row);

	row = document.createElement('tr');
	row.appendChild(document.createElement('td'));
	row.cells[0].appendChild(document.createTextNode('new = {}'));
	row.cells[0].appendChild(document.createElement('br'));
	row.cells[0].appendChild(document.createTextNode('Object.defineProperties(new, { '));
	row.cells[0].appendChild(document.createElement('br'));
	row.cells[0].appendChild(document.createTextNode("  name: { value: 'Paul' },"));
	row.cells[0].appendChild(document.createElement('br'));
	row.cells[0].appendChild(document.createTextNode('  age: { value: 42 },'));
	row.cells[0].appendChild(document.createElement('br'));
	row.cells[0].appendChild(document.createTextNode("  city: { value: 'Paris' },"));
	row.cells[0].appendChild(document.createElement('br'));
	row.cells[0].appendChild(document.createTextNode('  active: { value: false }})'));
	row.appendChild(document.createElement('td'));
	PersonB = {};
	Object.defineProperties(PersonB, {
		name: { value: 'Paul', enumerable: true },
		age: { value: 42, enumerable: true },
		city: { value: 'Paris', enumerable: true },
		active: { value: false, enumerable: true },
	});
	row.cells[1].appendChild(document.createTextNode(JSON.stringify(PersonB).replace(/"([^"]+)":/g, '$1:')));
	table.appendChild(row);

	row = document.createElement('tr');
	row.appendChild(document.createElement('td'));
	row.cells[0].appendChild(document.createTextNode('Object.freeze(Person)'));
	row.appendChild(document.createElement('td'));
	row.cells[1].appendChild(document.createTextNode('// Error in strict mode if trying to edit'));
	table.appendChild(row);

	row = document.createElement('tr');
	row.appendChild(document.createElement('td'));
	row.cells[0].appendChild(document.createTextNode("fruit = new Map([ ['name', 'apple'], ['color', 'red'] ])"));
	row.cells[0].appendChild(document.createElement('br'));
	row.cells[0].appendChild(document.createTextNode('Object.fromEntries(entries)'));
	row.appendChild(document.createElement('td'));
	const fruit = new Map([
		['name', 'apple'],
		['color', 'red'],
	]);
	const fruitObject = Object.fromEntries(fruit);
	row.cells[1].appendChild(document.createTextNode(JSON.stringify(fruitObject).replace(/"([^"]+)":/g, '$1:')));
	table.appendChild(row);

	row = document.createElement('tr');
	row.appendChild(document.createElement('td'));
	row.cells[0].appendChild(document.createTextNode('Object.getOwnPropertyDescriptors(Person)'));
	row.appendChild(document.createElement('td'));
	let descriptors = Object.getOwnPropertyDescriptors(PersonA);
	for (const [key, value] of Object.entries(descriptors)) {
		row.cells[1].appendChild(document.createTextNode(`${key}: ` + JSON.stringify(value)));
		row.cells[1].appendChild(document.createElement('br'));
	}
	// row.cells[1].lastChild.remove();
	table.appendChild(row);

	row = document.createElement('tr');
	row.appendChild(document.createElement('td'));
	row.cells[0].appendChild(document.createTextNode('Object.getOwnPropertyNames(Person)'));
	row.appendChild(document.createElement('td'));
	row.cells[1].appendChild(document.createTextNode(Object.getOwnPropertyNames(PersonA)));
	table.appendChild(row);

	row = document.createElement('tr');
	row.appendChild(document.createElement('td'));
	row.cells[0].appendChild(document.createTextNode('Object.getPrototypeOf(PersonA.age).constructor.name'));
	row.appendChild(document.createElement('td'));
	row.cells[1].appendChild(document.createTextNode(Object.getPrototypeOf(PersonA.age).constructor.name));
	table.appendChild(row);

	row = document.createElement('tr');
	row.appendChild(document.createElement('td'));
	row.cells[0].appendChild(document.createTextNode("obj = {a: 'blue', b: 'blue'}"));
	row.cells[0].appendChild(document.createElement('br'));
	row.cells[0].appendChild(document.createTextNode('Object.is(obj.a, obj.b)'));
	row.appendChild(document.createElement('td'));
	let obj = { a: 'blue', b: 'blue' };
	row.cells[1].appendChild(document.createTextNode(Object.is(obj.a, obj.b)));
	table.appendChild(row);

	row = document.createElement('tr');
	row.appendChild(document.createElement('td'));
	row.cells[0].appendChild(document.createTextNode('Object.keys(Person)'));
	row.appendChild(document.createElement('td'));
	row.cells[1].appendChild(document.createTextNode(Object.keys(PersonA)));
	table.appendChild(row);

	row = document.createElement('tr');
	row.appendChild(document.createElement('td'));
	row.cells[0].appendChild(document.createTextNode('Object.values(Person)'));
	row.appendChild(document.createElement('td'));
	row.cells[1].appendChild(document.createTextNode(Object.values(PersonA)));
	table.appendChild(row);

	row = document.createElement('tr');
	row.appendChild(document.createElement('td'));
	row.cells[0].appendChild(document.createTextNode("Person.hasOwnProperty('age')"));
	row.appendChild(document.createElement('td'));
	row.cells[1].appendChild(document.createTextNode(PersonA.hasOwnProperty('age')));
	table.appendChild(row);

	return table;
}

let arrayTable = document.getElementById('array-table');
arrayTable.appendChild(arrayFunctions());

let objectTable = document.getElementById('object-table');
objectTable.appendChild(objectFunctions());

document.getElementById('string-f').innerHTML += stringFunctions();
