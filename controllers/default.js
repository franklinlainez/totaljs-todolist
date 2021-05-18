const Todo = require("../models/todo.model");

exports.install = function () {
  ROUTE("/test", handle_form_submit, ["get"]);
};

async function handle_form_submit() {
  const self = this;

  const todo = new Todo(self.body);

  try {
    await todo.save();
    self.json({ message: "todo bien" });
  } catch (err) {
    return self.json(err);
  }
}
