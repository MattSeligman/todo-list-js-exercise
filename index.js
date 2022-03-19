// Create a new task by adding to the arrays
// A new task will be created as incomplete
const newTask = (title, description) => {

  const task = {
    title: title,
    description: description,
    complete: false,
    logTaskState: ()=>{
      console.log(`${task.title} has${task.complete ? " " : " not "}been completed`);
    },
    toggleTask: (task)=>{
      if (task.complete === true) {
        task.complete = false;
      } else {
        task.complete = true;
      }
    }
  };

  return task;
}

// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box"); // task 0
const task2 = newTask("Do Laundry", "😨"); // task 1

const tasks = [task1, task2];


task1.logTaskState(task1); // Clean Cat Litter has not been completed
task1.toggleTask(task1);
task1.logTaskState(task1); // Clean Cat Litter has not been completed
task2.logTaskState(task2); // Clean Cat Litter has not been completed
task2.toggleTask(task2);
task2.logTaskState(task2); // Clean Cat Litter has not been completed
task2.toggleTask(task2);

console.log(task1.title);
console.log(tasks);
