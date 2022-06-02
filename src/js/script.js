$(document).ready(function () {
// Валидация формы
    $("#registration-form").validate({
       errorElement: 'span',
       errorPlacement: function (error, element) {
          if (element.attr("type") == "checkbox") {
             return element.next('label').append(error);
          }
          error.insertAfter($(element));
       },
       rules: {
          email: {
             required: true,
             email: true,
          },
          phone: {
             telephone: true,
          },
          name: {
             required: true,
             lettersonly: true,
          },
          secondname: {
             required: true,
             lettersonly: true,
          },
          password: {
             required: true,
          },
          inn: {
            required:true, 
            number: true,
            inn: true
          },


       },
       messages: {
        email: {
            required: "Введите свой email",
            email: "Введите корректное email",
         },
        name: {
           required: "Введите своё имя",
           lettersonly: "Введите корректное имя",
        },
        secondname: {
           required: "Введите свою фамилию",
           lettersonly: "Введите корректную фамилию",
        },
        password: {
           required: "Введите пароль",
        },
        inn: {
            required:"Введите свой ИНН", 
            number: 'Введите корректную ИНН',
            inn: `<div class='inn-occupied'>
            Ваша компания уже зарегистрирована, пожалуйста обратитесь к менеджеру вашего аккаунта или <a href="#">напишите нам</a>
            </div>`,
          },

     },
    });
    jQuery.validator.addMethod(
        "lettersonly",
        function (value, element) {
          return this.optional(element) || /^[a-zA-ZА-Яа-я\s,ё]+$/i.test(value);
        },
        "Incorrect format"
      );
      
    jQuery.validator.addMethod(
        "telephone",
        function (value, element) {
          return (
            this.optional(element) ||
            /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){6,14}(\s*)?$/i.test(value)
          );
        },
        "Incorrect format"
      );
      jQuery.validator.addMethod(
        "inn",
        function (value, element) {
          if(/548782746/.test(value))  {
            return false;
          } else {
              return true
          }
        },
        "Incorrect format"
      );
// Маска для номера телефона
      var element = document.getElementById('phone');
      var maskOptions = {
         placeholder: '+{7}(000)000-00-00',
         mask: '+{7}(000)000-00-00'
      };
      var mask = IMask(element, maskOptions);
 });


// Скрываем/показываем пароль

let passEye = document.querySelector('.ui-field-password-eye'),
    unputEye = document.querySelector('.input-eye');
    // passSee = document.querySelector('.password-eye-see')
    if(passEye) {
        passEye.onclick = () => {
            if(unputEye.getAttribute('type') === 'password' ){
                passEye.classList.add('password-eye-see')
                unputEye.setAttribute('type', 'text')
            } else {
                passEye.classList.remove('password-eye-see')
                unputEye.setAttribute('type', 'password')
            }
        }
    }
