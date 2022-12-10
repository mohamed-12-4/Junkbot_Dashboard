import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];
/*
function TableComponent() {
  return (
    <>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 10 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}

export default TableComponent; 
*/ 
export default function TableComponent() {
  return (
      <div className="flex flex-col">
          <div className="overflow-x-auto">
              <div className="p-1.5 w-50 inline-block align-middle">
                  <div className="overflow-hidden border rounded-lg">
                      <table className="min-w-full divide-y divide-gray-200">
                          <thead className="bg-gray-50">
                              <tr>
                                  <th
                                      scope="col"
                                      className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                  >
                                      ID
                                  </th>
                                  <th
                                      scope="col"
                                      className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                  >
                                      Name
                                  </th>
                                  <th
                                      scope="col"
                                      className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                  >
                                      Email
                                  </th>
                                  <th
                                      scope="col"
                                      className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                                  >
                                      Edit
                                  </th>
                                  <th
                                      scope="col"
                                      className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                                  >
                                      Delete
                                  </th>
                              </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-200">
                              <tr>
                                  <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                      1
                                  </td>
                                  <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                      Jone Doe
                                  </td>
                                  <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                      jonne62@gmail.com
                                  </td>
                                  <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                      <a
                                          className="text-green-500 hover:text-green-700"
                                          href="#"
                                      >
                                          Edit
                                      </a>
                                  </td>
                                  <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                      <a
                                          className="text-red-500 hover:text-red-700"
                                          href="#"
                                      >
                                          Delete
                                      </a>
                                  </td>
                              </tr>
                              <tr>
                                  <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                      2
                                  </td>
                                  <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                      Jone Doe
                                  </td>
                                  <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                      jonne62@gmail.com
                                  </td>
                                  <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                      <a
                                          className="text-green-500 hover:text-green-700"
                                          href="#"
                                      >
                                          Edit
                                      </a>
                                  </td>
                                  <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                      <a
                                          className="text-red-500 hover:text-red-700"
                                          href="#"
                                      >
                                          Delete
                                      </a>
                                  </td>
                              </tr>
                              <tr>
                                  <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                      3
                                  </td>
                                  <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                      Jone Doe
                                  </td>
                                  <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                      jonne62@gmail.com
                                  </td>
                                  <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                      <a
                                          className="text-green-500 hover:text-green-700"
                                          href="#"
                                      >
                                          Edit
                                      </a>
                                  </td>
                                  <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                      <a
                                          className="text-red-500 hover:text-red-700"
                                          href="#"
                                      >
                                          Delete
                                      </a>
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                  </div>
              </div>
          </div>
      </div>
  );
}