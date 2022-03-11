import React from 'react';
import { MDBDataTableV5, MDBCloseIcon } from 'mdbreact';

export default function WithSortingComponent(props) {
  const {data, dataColumns, deleteFunction} = props;
  
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
              <MDBCloseIcon bg="red" marginRight="10px" onClick={() => deleteFunction(row.id)}>
              </MDBCloseIcon>
        ),
      })),

    ],
  };

  return <MDBDataTableV5 bgColor="white" hover entriesOptions={[5, 20, 25]} entries={5} pagesAmount={4} data={badgesData} sortRows={['badge']} />;
}