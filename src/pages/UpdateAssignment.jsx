import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from 'react-helmet';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const UpdateAssignment = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [assignment, setAssignment] = useState({
    title: '',
    description: '',
    marks: '',
    difficulty: '',
    dueDate: '',
    thumbnail: '',
    createdBy: {
      email: '',
      name: '',
    },
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/assignments/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setAssignment({
          title: data.title,
          description: data.description,
          marks: data.marks,
          difficulty: data.difficulty,
          thumbnail: data.thumbnail,
          dueDate: data.dueDate ? new Date(data.dueDate) : new Date(), 
          createdBy: data.createdBy,
        });
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching assignment:", error);
        toast.error("Failed to load assignment details.");
      });
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();

    if (!assignment.title || !assignment.description || !assignment.marks || !assignment.difficulty) {
      Swal.fire('Error!', 'Please fill all fields.', 'error');
      return;
    }

    fetch(`http://localhost:5000/assignments/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(assignment),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          Swal.fire('Updated!', 'The assignment has been updated successfully.', 'success');
          navigate('/assignments');
        } else {
          Swal.fire('Error!', 'There was an error updating the assignment.', 'error');
        }
      })
      .catch((error) => {
        console.error('Error updating assignment:', error);
        Swal.fire('Error!', 'Failed to update the assignment.', 'error');
      });
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <Helmet>
        <title>Update Assignment</title>
        <meta name="description" content="Update assignment details" />
      </Helmet>

      <h2 className="text-center text-5xl font-semibold my-8">Live Preview</h2>

      <div className="bg-border mb-20 p-2 sm:p-5 border-2 w-11/12 sm:w-8/12 text-center mx-auto rounded-3xl backdrop-blur-md">
        <div className="card lg:card-side p-4 bg-base-100 shadow-xl gap-10">
          <div className="sm:w-5/12">
            <img
              className="w-full mx-auto rounded-3xl"
              src={assignment.thumbnail}
              alt="Assignment"
            />
          </div>
          <div className="card my-auto text-start gap-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-start">{assignment.title}</h2>
            <div className="badge badge-accent p-2 sm:mt-4 ">{assignment.difficulty}</div>
            <p className="text-gray-800 text-md sm:text-lg">{assignment.description}</p>

            <p className="text-md sm:text-xl font-bold text-gray-500">
              <span className="font-bold text-md text-black sm:text-xl">Marks:</span> {assignment.marks}
            </p>
            <p className="text-md sm:text-xl font-bold text-gray-500">
              <span className="font-bold text-md sm:text-xl text-black">Due Date:</span> {assignment.dueDate.toLocaleDateString()}
            </p>

            <div className="card-actions justify-start">
              <div className="flex gap-5">
                <button
                  onClick={() => navigate('/assignments')}
                  className="text-white btn btn-primary text-lg sm:text-2xl rounded-full flex"
                >
                  Back to All Assignments
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h1 className="text-3xl sm:text-5xl text-center font-bold my-5">Update Assignment</h1>

      <form onSubmit={handleUpdate} className="w-11/12 sm:max-w-3xl mx-auto p-6 border-2 bg-white border-gray-300 rounded-2xl mb-10 shadow-lg">
        <div className="mb-4">
          <label htmlFor="title" className="block text-lg sm:text-xl font-bold text-black">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={assignment.title}
            onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
            placeholder="Assignment Title"
            className="w-full p-3 border bg-gray-50 border-gray-300 rounded-3xl mt-2"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block text-lg sm:text-xl font-bold text-black">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={assignment.description}
            onChange={(e) => setAssignment({ ...assignment, description: e.target.value })}
            placeholder="Assignment Description"
            className="w-full p-3 border bg-gray-50 border-gray-300 rounded-3xl mt-2"
            rows="4"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="thumbnail" className="block text-lg sm:text-xl font-bold text-black">
            Thumbnail URL
          </label>
          <input
            type="url"
            id="thumbnail"
            name="thumbnail"
            value={assignment.thumbnail}
            onChange={(e) => setAssignment({ ...assignment, thumbnail: e.target.value })}
            placeholder="Thumbnail URL"
            className="w-full p-3 border bg-gray-50 border-gray-300 rounded-3xl mt-2"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="marks" className="block text-lg sm:text-xl font-bold text-black">
            Marks
          </label>
          <input
            type="number"
            id="marks"
            name="marks"
            value={assignment.marks}
            onChange={(e) => setAssignment({ ...assignment, marks: e.target.value })}
            placeholder="Marks"
            className="w-full p-3 border bg-gray-50 border-gray-300 rounded-3xl mt-2"
            min={0}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="difficulty" className="block text-lg sm:text-xl font-bold text-black">
            Difficulty Level
          </label>
          <select
            id="difficulty"
            name="difficulty"
            value={assignment.difficulty || ''}
            onChange={(e) => setAssignment({ ...assignment, difficulty: e.target.value })}
            className="w-full p-3 border bg-gray-50 border-gray-300 rounded-3xl mt-2"
            required
          >
            <option value="">Select Difficulty Level</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="dueDate" className="block text-lg sm:text-xl font-bold text-black">
            Due Date
          </label>
          <DatePicker
            selected={assignment.dueDate}
            onChange={(date) => setAssignment({ ...assignment, dueDate: date })}
            className="w-full p-3 border bg-gray-50 border-gray-300 rounded-3xl mt-2"
            minDate={new Date()}
            dateFormat="yyyy/MM/dd"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="createdBy" className="block text-lg sm:text-xl font-bold text-black">
            Created By
          </label>
          <input
            type="text"
            id="createdBy"
            name="createdBy"
            value={assignment.createdBy.name}
            disabled
            className="w-6/12 p-3 border bg-gray-50 border-gray-300 rounded-3xl mt-2"
          />
          <input
            type="email"
            id="createdByEmail"
            name="createdByEmail"
            value={assignment.createdBy.email}
            disabled
            className="w-6/12 p-3 border bg-gray-50 border-gray-300 rounded-3xl mt-2"
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="text-white w-6/12 sm:w-4/12 btn mx-auto btn-primary text-xl sm:text-2xl rounded-full flex"
          >
            Update
          </button>
        </div>
      </form>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default UpdateAssignment;
