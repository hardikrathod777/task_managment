import axios from "axios";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import toast from "react-hot-toast";
import { Navigate } from "react-router-dom";

const Dashboard = ({isAuthenticated}) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAllTasks();
  }, []);

  const fetchAllTasks = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/v1/task/all", { withCredentials: true });
      setTasks(response.data.tasks);
      setLoading(false);
    } catch (error) {
      toast.error("Error fetching tasks");
      console.error("Error fetching tasks:", error);
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }
  if (!isAuthenticated) {
    return <Navigate to={"/login"} />;
  }

  return (
    <div>
      <h2>All Users' Tasks</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Task Title</th>
            <th>Status</th>
            <th>Created By</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task._id}>
              <td>{task.title}</td>
              <td>{task.status}</td>
              <td>{task.createdBy}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Dashboard;
