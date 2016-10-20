// Código do formulário de contato que pegamos pronto

$(document).ready(function() {
    $('#contact_form').bootstrapValidator({
        
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            name: {
                validators: {
                        stringLength: {
                        min: 4,
                    },
                        notEmpty: {
                        message: 'Por favor, preencha o seu nome.'
                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'Por favor, preencha o seu e-mail.'
                    },
                    emailAddress: {
                        message: 'Por favor, preencha com um e-mail válido.'
                    }
                }
            },
            phone: {
                validators: {
                    notEmpty: {
                        message: 'Por favor, preencha o seu telefone.'
                    },
                }
            },
            comment: {
                validators: {
                      stringLength: {
                        min: 10,
                        max: 1000,
                        message:'O número máximo de caracteres é 1000.'
                    },
                    notEmpty: {
                        message: 'Por favor, preencha a sua mensagem.
                    }
                    }
                }
            }
        })
        .on('success.form.bv', function(e) {
            $('#success_message').slideDown({ opacity: "show" }, "slow") // Do something ...
                $('#contact_form').data('bootstrapValidator').resetForm();

            // Prevent form submission
            e.preventDefault();

            // Get the form instance
            var $form = $(e.target);

            // Get the BootstrapValidator instance
            var bv = $form.data('bootstrapValidator');

            // Use Ajax to submit form data
            $.post($form.attr('action'), $form.serialize(), function(result) {
                console.log(result);
            }, 'json');
        });
});

