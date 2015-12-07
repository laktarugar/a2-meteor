/**
 * Created by alexanderklimenko on 9/22/15.
 */
import {Component, View} from 'angular2/angular2';

@Component({
	selector: 'app'
})
@View({
	template: '<div>{{itenm name}}</div>'
})
class App {
	todos;
	constructor() {
		this.todos = ['item1', 'item2'];
	}
}


export default App;
