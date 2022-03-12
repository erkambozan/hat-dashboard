import React from 'react';
import { MDBDataTableV5 } from 'mdbreact';

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
            })),

        ],
    };

    return <MDBDataTableV5 bgColor="white" hover entriesOptions={[5, 20, 25]} entries={5} pagesAmount={4} data={badgesData} sortRows={['badge']} />;
}