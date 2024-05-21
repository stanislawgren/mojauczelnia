import Swal from "sweetalert2";

// https://sweetalert2.github.io

export const LoginError = () => {
    return (
        Swal.fire({
            title: 'Błąd!',
            text: 'Logowanie nie powiodło się. Spróbuj ponownie.',
            icon: 'error',
            confirmButtonText: 'OK'
        })
    )
}

export const RegisterError = () => {
    return (
        Swal.fire({
            title: 'Błąd!',
            text: 'Rejestracja nie powiodła się. Spróbuj ponownie.',
            icon: 'error',
            confirmButtonText: 'OK'
        })
    )
}

export const RegisterSuccess = () => {
    return (
        Swal.fire({
            title: 'Sukces!',
            text: 'Rejestracja powiodła się. Możesz się zalogować.',
            icon: 'success',
            confirmButtonText: 'OK'
        })
    )
}

export const Reaction = async () => {
    const result = await Swal.fire({
        title: "<strong>Reakcja</strong>",
        icon: "info",
        html: ` Daj reakcje na to ogłoszenie!`,
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText: `
    <i class="fa fa-thumbs-up"></i> Great! :D`,
        confirmButtonAriaLabel: "Thumbs up, great!",
        cancelButtonText: `
    <i class="fa fa-thumbs-down"></i> Nope :(`,
        cancelButtonAriaLabel: "Thumbs down"
    })

    return result.isConfirmed;
}

export const Question = async () => {
    const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes",
        cancelButtonText: "No"
    });

    return result.isConfirmed;

    // await new Promise(resolve => setTimeout(resolve, 1000));
    //
    // if (result.isConfirmed) {
    //     return Swal.fire({
    //         title: "Confirmed",
    //         text: "You have successfully confirmed.",
    //         icon: "success"
    //     }).then(() => true);
    // } else {
    //     return Swal.fire({
    //         title: "Cancelled",
    //         text: "You have cancelled the action.",
    //         icon: "success"
    //     }).then(() => false);
    // }
}

export const Success = () => {
    return (
        Swal.fire({
            title: 'Succes!',
            text: 'Operation completed successfully.',
            icon: 'success',
            confirmButtonText: 'OK'
        })
    )
}

export const Error = () => {
    return (
        Swal.fire({
            title: 'Error!',
            text: 'Operation completed with an error.',
            icon: 'error',
            confirmButtonText: 'OK'
        })
    )
}

export const Warning = () => {
    return (
        Swal.fire({
            title: 'Warning!',
            text: 'Operation completed with a warning.',
            icon: 'warning',
            confirmButtonText: 'I understand'
        })
    )
}

export const Info = (text: string) => {
    return (
        Swal.fire({
            title: 'Info!',
            text: text,
            icon: 'info',
            confirmButtonText: 'Ok'
        })
    )
}

export const LogoutAlert = async () => {
    const result = await Swal.fire({
        title: "Are you sure?",
        text: "You will be logged out.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes",
        cancelButtonText: "No"
    });

    return result.isConfirmed;
}