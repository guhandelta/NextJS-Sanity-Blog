import { Alert } from 'react-bootstrap';

const PreviewAlert = () => {
    return (
        <Alert variant="secondary">
            You are currently in a preview model&ensp;&ensp;
            <Alert.Link href="#">Leave Preview Mode</Alert.Link>
        </Alert>
    )
}

export default PreviewAlert
