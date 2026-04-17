import React from 'react';

interface TableProps {
  headers: string[];
  data: React.ReactNode[][];
  className?: string;
  tableClassName?: string;
  headerClassName?: string;
  rowClassName?: string;
  cellClassName?: string;
}

export const Table: React.FC<TableProps> = ({
  headers,
  data,
  className = '',
  tableClassName = '',
  headerClassName = '',
  rowClassName = '',
  cellClassName = '',
}) => {
  return (
    <div className={`overflow-x-auto ${className}`}>
      <table className={`min-w-full bg-white border border-gray-300 ${tableClassName}`}>
        <thead>
          <tr className={`bg-gray-100 ${headerClassName}`}>
            {headers.map((header, index) => (
              <th key={index} className="px-4 py-2 border-b text-left">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className={`hover:bg-gray-50 ${rowClassName}`}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className={`px-4 py-2 border-b ${cellClassName}`}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
