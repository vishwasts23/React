import { useSearchParams } from "react-router-dom";
import employees from "../data/employees";

export default function Employees() {
  const [searchParams, setSearchParams] = useSearchParams();

  const page = Number(searchParams.get("page")) || 1;

  const recordsPerPage = 5;

  const totalPages = Math.ceil(employees.length / recordsPerPage);

  const startIndex = (page - 1) * recordsPerPage;

  const currentEmployees = employees.slice(
    startIndex,
    startIndex + recordsPerPage
  );

  const nextPage = () => {
    if (page < totalPages) {
      setSearchParams({ page: page + 1 });
    }
  };

  const previousPage = () => {
    if (page > 1) {
      setSearchParams({ page: page - 1 });
    }
  };

  return (
    <div className="page">

      <h1>Employee Directory</h1>

      <table>

        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>City</th>
            <th>Role</th>
          </tr>
        </thead>

        <tbody>

          {currentEmployees.map((employee) => (

            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.email}</td>
              <td>{employee.city}</td>
              <td>{employee.role}</td>
            </tr>

          ))}

        </tbody>

      </table>

      <div className="pagination">

        <button
          onClick={previousPage}
          disabled={page === 1}
        >
          Previous
        </button>

        <span>
          Page {page} of {totalPages}
        </span>

        <button
          onClick={nextPage}
          disabled={page === totalPages}
        >
          Next
        </button>

      </div>

    </div>
  );
}