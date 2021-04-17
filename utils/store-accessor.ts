import { Store } from 'vuex';
import { getModule } from 'vuex-module-decorators';
import TodoLot from '~/store/todoLot';
import Todo from '~/store/todo';

let TodoLotModule: TodoLot;
let TodoModule: Todo;

function initialiseStores(store: Store<any>): void {
  TodoLotModule = getModule(TodoLot, store);
  TodoModule = getModule(Todo, store);
}

export { initialiseStores, TodoLotModule, TodoModule };
