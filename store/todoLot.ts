import { VuexModule, Module, Action, Mutation, getModule } from 'vuex-module-decorators'
import { $axios } from '~/utils/api'

type Todo = {
  userId: number,
  id: number,
  title: string,
  completed: boolean
}

@Module({ stateFactory: true, namespaced: true, name: 'todoLot' })
export default class TodoLot extends VuexModule {
  // state
  private todoList: Todo[] = []

  public get getTodos() {
    return this.todoList
  }

  public get getTodo() {
    return (id: number) => this.todoList.find((todo) => todo.id === id)
  }

  public get getTodoCount() {
    return this.todoList.length
  }

  @Mutation
  private set(todoList: Todo[]) {
    this.todoList = todoList
  }

  @Action({ rawError: true })
  public async fetchTodos() {
    const { data } = await $axios.get<Todo[]>('https://jsonplaceholder.typicode.com/todos');
    this.set(data)
  }

  @Action({ rawError: true })
  public async fetchTodo(id: number) {
    const { data } = await $axios.get<Todo[]>(`https://jsonplaceholder.typicode.com/todos/${id}`);
    let todoList: Todo[] = [...data];
    this.set(todoList);
  }



}
