import React from 'react';
import { Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

const ListCompleted = ({columns, data}) => {
	return (
			<Box
				m='20px 0 0'
				height='60vh'
				sx={{
					'& .MuiDataGrid-root': {
						border: 'none',
					},
					'& .MuiDataGrid-cell': {
						borderBottom: 'none',
					},
					'& .name-column--cell': {
						// color: colors.greenAccent[300],
					},
					'& .MuiDataGrid-columnHeaders': {
						// backgroundColor: colors.blueAccent[700],
						borderBottom: 'none',
					},
					'& .MuiDataGrid-virtualScroller': {
						// backgroundColor: colors.primary[400],
					},
					'& .MuiDataGrid-footerContainer': {
						borderTop: 'none',
						// backgroundColor: colors.blueAccent[700],
					},
					'& .MuiCheckbox-root': {
						// color: `${colors.greenAccent[200]} !important`,
					},
				}}
			>
				<DataGrid 
					columns={columns} 
					rows={data} 
				/>
			</Box>
	);
};

export default ListCompleted;
