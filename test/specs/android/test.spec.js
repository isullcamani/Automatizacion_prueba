
import AddNoteScreen from "./funciones.js";
describe('Examen Automatizacion',() => {
    const addNoteScreen = new AddNoteScreen();
    const nameString="Ismael Sullcamani";
    const direccionString="Zona San pedro";
    const passwString="Bsol123**";
    const celString="61164919"
    const correoString ="sullcamani@gmail.com"
    
    beforeEach(async () => {
        await driver.terminateApp('com.sourcey.materialloginexample');
        await driver.activateApp('com.sourcey.materialloginexample');
    });
	it('Crear usuario nuevo' ,async () => {
        await addNoteScreen.BtnNuevoUser.click();

        const name = addNoteScreen.inputName;
        name.setValue(nameString);

        const Addres = addNoteScreen.inputAddress;
        Addres.setValue(direccionString);

        const email = addNoteScreen.inputEmail;
        email.setValue(correoString);

        const mobileNumber = addNoteScreen.inputMobile;
        mobileNumber.setValue(celString);

        const password = addNoteScreen.inputPassword;
        password.setValue(passwString);

        const passwordTwo =  addNoteScreen.inputPassword2;
        passwordTwo.setValue(passwString);
        
        //pulsamos boton
        await driver.pause(3000);//pausa de 5 segundos
        await $('//android.widget.Button[@resource-id="com.sourcey.materialloginexample:id/btn_signup"]').click();
    
        //assertion
        await expect(addNoteScreen.moreOption).toBeDisplayed();
		// await expect($('//android.widget.TextView[@text="Hello world!"]')).toBeDisplayed();
		await expect($('//android.widget.TextView[@text="Hello world!"]')).toHaveText("Hello world!");
        // await driver.back();
	})

    it('iniciar sesion con usuario creado' ,async () => {
        const emailLogin = await $('//android.widget.EditText[@resource-id="com.sourcey.materialloginexample:id/input_email"]');
        emailLogin.setValue(correoString);

        const passLogin = await $('//android.widget.EditText[@resource-id="com.sourcey.materialloginexample:id/input_password"]');
        passLogin.setValue(passwString);

        //pulsamos boton
        await driver.pause(1000);//pausa de 1 segundos
        await $('//android.widget.Button[@resource-id="com.sourcey.materialloginexample:id/btn_login"]').click();

        //assertion
        await expect(addNoteScreen.moreOption).toBeDisplayed();
		// await expect($('//android.widget.TextView[@text="Hello world!"]')).toBeDisplayed();
		await expect($('//android.widget.TextView[@text="Hello world!"]')).toHaveText("Hello world!");

	})
})