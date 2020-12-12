async function selectVersion() {
    const { value: version } = await Swal.fire({
        title: 'Select Version',
        input: 'select',
        inputOptions: {
            'Available Versions': {
                0: 'Latest (Major version 0)'
            }
        },
        confirmButtonText: 'Launch!',
        footer: 'Powered by SweetAlert2'
    });

    location.href = version
}