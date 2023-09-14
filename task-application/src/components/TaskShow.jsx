function TaskShow({ task }) {
  console.log(task);
  return (
    <div className="task-show">
      <h3 className="task-title">Göreviniz</h3>
      <p>{task.title}</p>
      <h3 className="task-title">Yapılacaklar</h3>
      <p>{task.taskDesc}</p>
      <div>
        <button className="delete-button">Sil</button>
        <button className="update-button">Güncelle</button>
      </div>
    </div>
  );
}
export default TaskShow;
