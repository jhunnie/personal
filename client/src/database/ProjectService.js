import axios from 'axios';

class ProjectService {
    sendData(data) {
        axios.post('/post', {
            name: data.name,
            description: data.description,
            language: data.language
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log('Error: ' + error);
            });
    }

    updateData(data, id) {
        axios.post('/update/' + id, {
            name: data.name,
            description: data.description,
            language: data.language
        })
            .then(response => {
                    console.log(response);
                }
            )
            .catch(
                err => console.log(err)
            )
    }

    deleteData(id) {
        axios.get('/delete/' + id)
            .then(
                console.log('Deleted')
            )
            .catch(
                err => console.log(err)
            )
    }
}

export default ProjectService;