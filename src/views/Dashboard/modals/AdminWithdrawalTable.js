import React, {useState} from 'react';
import { MDBDataTableV5, MDBCloseIcon } from 'mdbreact';
import EditEarnModal from "./EditEarnModal";
import {Button, Flex, Text} from "@chakra-ui/react";
import EditModalAdminWithdrawal from "./EditModalAdminWithdrawal";

export default function WithSortingComponent(props) {
    const {data, dataColumns, deleteWithdraw} = props;
    const [modalShow, setModalShow] = useState(false);
    const [selectedRow, setSelectedRow] = useState({});


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
                    <Flex>
                        <Button bg="red" marginRight="10px" onClick={() => deleteWithdraw(row.id)}>
                            <Text> x </Text>
                        </Button>
                        <Button onClick={() => {
                            setSelectedRow(row)
                            setModalShow(true)
                        }}>
                            <Text>Edit</Text>
                        </Button>
                        <EditModalAdminWithdrawal walletAddress={selectedRow.wallet_address}
                                       withdrawAmount={selectedRow.withdraw_amount}
                                       status={selectedRow.status}
                                       id={selectedRow.id}
                                       show={modalShow} onHide={() => setModalShow(false)}/>
                    </Flex>
                ),
            })),

        ],
    };

    return <MDBDataTableV5 bgColor="white" hover entriesOptions={[5, 20, 25]} entries={5} pagesAmount={4} data={badgesData} sortRows={['badge']} />;
}