
(function ($) {
    "use strict";

    /*==================================================================
    [ Focus Contact2 ]*/
    $('.input100').each(function(){
        $(this).on('blur', function(){
            if($(this).val().trim() != "") {
                $(this).addClass('has-val');
            }
            else {
                $(this).removeClass('has-val');
            }
        })    
    })


    /*==================================================================
    [ Validate after type ]*/
    $('.validate-input .input100').each(function(){
        $(this).on('blur', function(){
            if(validate(this) == false){
                showValidate(this);
            }
            else {
                $(this).parent().addClass('true-validate');
            }
        })    
    })

    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit',function(){
        var check = true;

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }

        return check;
    });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
           $(this).parent().removeClass('true-validate');
        });
    });

    function validate (input) {
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    


})(jQuery);



// function login page show 


$("#loginBtn").click(function(){
    $("#mainDiv").html(`<div class="row my-5 ">
    <div class="col-lg-6">
        <form action="">


            <div class="wrap-input100    validate-input" data-validate="User Name is required">
                <span class="label-input100 pl-4 ">User Name</span>
                <input class="input100 input-style pl-4" type="text" name="User Name"
                    placeholder="User Name...">
                <span class="focus-input100"></span>
            </div>

            <div class="wrap-input100    validate-input" data-validate="Password is required">
                <span class="label-input100 pl-4 ">Password</span>
                <input class="input100 input-style pl-4" type="Password" name="Password"
                    placeholder="Password...">
                <span class="focus-input100"></span>
            </div>

            <button class="btn btn-lg px-5 btn-primary w-100 input-style my-1 "> Login </button>
            <a href=""><button class="btn btn-lg px-5 btn-info w-100 input-style my-1 "> Sign Up </button></a>
            <a class="my-1 ml-3" href=""> Forget My Password </a>

        </form>

    </div>

    <div class="col-lg-6">
        <img class="img-fluid mt-2" src="https://i.ibb.co/hysw7CJ/logo-Plan-B.png" alt="logo-Plan-B" >
    </div>
</div>`)
   
});