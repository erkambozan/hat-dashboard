import React, {useState} from 'react';
import { MDBDataTableV5, MDBCloseIcon } from 'mdbreact';
import {
    Flex,
    Button,
    Text,
} from "@chakra-ui/react";
import EditEarnModal from "./EditEarnModal";

export default function WithSortingComponent(props) {
    const {data, dataColumns, deleteEarnWithdraw} = props;
    const [modalShow, setModalShow] = useState(false);

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