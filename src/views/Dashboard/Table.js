import React from 'react';
import { MDBDataTableV5, MDBBadge } from 'mdbreact';

export default function WithSortingComponent(props) {
  const {data, dataColumns} = props;
  
  const [datatable, setDatatable] = React.useState({
    columns: [
        ...dataColumns
    ],
    rows: [
      data
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
      ...data.map((row, order) => ({
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