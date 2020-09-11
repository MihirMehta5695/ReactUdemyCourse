// This code won't work in node js unless you use Babel js
import { name } from './3export.'
// You may import one stuff at a time
import { baseOfNumber, multiply } from './3export.'
// you can also choose an alias in case of non-default imports, for eg
import { name as NAME } from './3export'
// Or Maybe multiple imports in one line from the same js file
// In case of export keyword, you need to specify the exact name of the things you want to import

// In case you want to import everything, use the '*' keyword
import * as bundled from './3export'

import Person from './3person_default_export.'
import prs from './3person_default_export.'
// In case of default export, you can assign any name to the imported variable

console.log(name);
console.log(NAME);
console.log(baseOfNumber);
console.log(multiply(5, 3));
console.log(Person);
console.error(prs);
console.log(bundled);