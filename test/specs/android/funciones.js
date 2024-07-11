class AddNoteScreen{
    get BtnNuevoUser(){
        return $('//android.widget.TextView[@resource-id="com.sourcey.materialloginexample:id/link_signup"]');
    }

    get inputName(){
        return $('//android.widget.EditText[@resource-id="com.sourcey.materialloginexample:id/input_name"]');
    }
    get inputAddress(){
        return $('//android.widget.EditText[@resource-id="com.sourcey.materialloginexample:id/input_address"]');
    }
    get inputEmail(){
        return $('//android.widget.EditText[@resource-id="com.sourcey.materialloginexample:id/input_email"]');
    }
    get inputMobile(){
        return $('//android.widget.EditText[@resource-id="com.sourcey.materialloginexample:id/input_mobile"]');
    }
    get inputPassword(){
        return $('//android.widget.EditText[@resource-id="com.sourcey.materialloginexample:id/input_password"]');
    }

    get inputPassword2(){
        return $('//android.widget.EditText[@resource-id="com.sourcey.materialloginexample:id/input_reEnterPassword"]');
    }

    get moreOption(){
        return $('//android.widget.ImageView[@content-desc="More options"]');
    }
}
export default AddNoteScreen;