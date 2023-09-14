function TaskCreate() {
  return (
    <div className="task-create">
      <h3 className="add-task">Lütfen Task Ekleyiniz!</h3>
      <form className="task-form">
        <label className="task-label">Başlık</label>
        <input className="task-input" />
        <label className="task-label">Task Giriniz</label>
        <textarea className="task-input" rows={6} />
        <button className="task-button">Oluştur</button>
      </form>
    </div>
  );
}

export default TaskCreate;
