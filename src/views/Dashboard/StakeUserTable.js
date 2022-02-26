import React from 'react';
import { MDBDataTableV5, MDBBadge } from 'mdbreact';

export default function WithSortingComponent() {
  const [datatable, setDatatable] = React.useState({
    columns: [
      {
        label: 'Started Stake Amount',
        field: 'name',
        width: 150,
        attributes: {
          'aria-controls': 'DataTable',
          'aria-label': 'Name',
        },
      },
      {
        label: 'Expiry Stake Amount',
        field: 'position',
        width: 270,
      },
      {
        label: 'Expiry Stake Day ',
        field: 'office',
        width: 200,
      },
      {
        label: 'Stake PercentageStake Percentage',
        field: 'age',
        sort: 'asc',
        width: 100,
      },
      {
        label: 'Start date',
        field: 'date',
        sort: 'disabled',
        width: 150,
      },
      {
        label: 'End Date',
        field: 'salary',
        sort: 'disabled',
        width: 100,
      },
    ],
    rows: [
      
    ]
  });

  const badgesData = {
    columns: [
      {
        field: 'badge',
      },
      ...datatable.columns,
    ],
    rows: [
      ...datatable.rows.map((row, order) => ({
        ...row,
        badge: (
          <MDBBadge pill color='danger' className='p-1 px-2' key={order} searchvalue={order}>
          </MDBBadge>
        ),
      })),
    ],
  };

  return <MDBDataTableV5 hover entriesOptions={[5, 20, 25]} entries={5} pagesAmount={4} data={badgesData} sortRows={['badge']} />;
}