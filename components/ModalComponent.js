import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'

const ModalComponent = ({ label, header, content, footer, navigation }) => {

    const [open, setOpen] = React.useState(false)

    const logOutAndClose = () => {

        setOpen(false)
        navigation.navigate('LoginScreen')
    }

    return (
        <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={label}
        >
            <Modal.Header>{header}</Modal.Header>
            <Modal.Content image>
                <Modal.Description>
                    {content}
                </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
                <Button color='black' onClick={() => setOpen(false)}>
                    Nope
                </Button>
                <Button
                    content="Logout"
                    labelPosition='right'
                    icon='checkmark'
                    onClick={() => logOutAndClose()}
                    positive
                />
            </Modal.Actions>
        </Modal>
    )
}

export default ModalComponent;