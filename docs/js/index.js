async function selectVersion() {
    const { value: version } = await Swal.fire({
        title: 'Select Version',
        input: 'select',
        inputOptions: {
            'Stable': {
                '0.0.1': 'Latest (0.0.1)'
            }
        },
        confirmButtonText: 'Launch!',
        footer: 'Powered by SweetAlert2'
    });

    location.href = version
}