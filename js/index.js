$(document).ready(() => {
    $("#file").change(function (element) {

        let reader = new FileReader();
        reader.readAsDataURL(element.target.files[0]);

        reader.onload = function () {
            $("#imagen").attr("src", reader.result);
        }
    })
})