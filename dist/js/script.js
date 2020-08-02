$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});


$('[data-modal=callback]').on('click', function() {
      $('.overlay, #callback').fadeIn('slow');
  });
  $('.modal__close').on('click', function() {
      $('.overlay, #callback, #thanks').fadeOut('slow');
  });


  function validateForms(form){
      $(form).validate({
          rules: {
              name: {
                  required: true,
                  minlength: 2
              },
              tel: "required",
              email: {
                  required: true,
                  email: true
              }
          },
          messages: {
              name: {
                  required: "Пожалуйста, введите свое имя",
                  minlength: jQuery.validator.format("Введите {0} символа!")
                },
              tel: "Пожалуйста, введите свой номер телефона",
              email: {
                required: "Пожалуйста, введите свою почту",
                email: "Неправильно введен адрес почты"
              }
          }
      });
  };

  validateForms('#callback-form');
  validateForms('#callback form');
  validateForms('#order form');

  $('input[name=tel]').mask("+7 (999) 999-99-99");
 