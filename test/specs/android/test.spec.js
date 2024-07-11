describe('Examen Automatizacion',() => {
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
        await $('//android.widget.TextView[@resource-id="com.sourcey.materialloginexample:id/link_signup"]').click();

        const name = await $('//android.widget.EditText[@resource-id="com.sourcey.materialloginexample:id/input_name"]');
        name.setValue(nameString);

        const Addres = await $('//android.widget.EditText[@resource-id="com.sourcey.materialloginexample:id/input_address"]');
        Addres.setValue(direccionString);

        const email = await $('//android.widget.EditText[@resource-id="com.sourcey.materialloginexample:id/input_email"]');
        email.setValue(correoString);

        const mobileNumber = await $('//android.widget.EditText[@resource-id="com.sourcey.materialloginexample:id/input_mobile"]');
        mobileNumber.setValue(celString);

        const password = await $('//android.widget.EditText[@resource-id="com.sourcey.materialloginexample:id/input_password"]');
        password.setValue(passwString);

        const passwordTwo = await $('//android.widget.EditText[@resource-id="com.sourcey.materialloginexample:id/input_reEnterPassword"]');
        passwordTwo.setValue(passwString);
        
        //pulsamos boton
        await driver.pause(3000);//pausa de 5 segundos
        await $('//android.widget.Button[@resource-id="com.sourcey.materialloginexample:id/btn_signup"]').click();
        //assertion
        await expect($('//android.widget.ImageView[@content-desc="More options"]')).toBeDisplayed();
		// await expect($('//android.widget.TextView[@text="Hello world!"]')).toBeDisplayed();
		await expect($('//android.widget.TextView[@text="Hello world!"]')).toHaveText("Hello world!");
        // await driver.back();
	})

    it('iniciar sesion con usuario creado' ,async () => {
        // await driver.closeApp();
        // await driver.launchApp();
        const emailLogin = await $('//android.widget.EditText[@resource-id="com.sourcey.materialloginexample:id/input_email"]');
        emailLogin.setValue(correoString);

        const passLogin = await $('//android.widget.EditText[@resource-id="com.sourcey.materialloginexample:id/input_password"]');
        passLogin.setValue(passwString);

        //pulsamos boton
        await driver.pause(1000);//pausa de 1 segundos
        await $('//android.widget.Button[@resource-id="com.sourcey.materialloginexample:id/btn_login"]').click();

        //assertion
        await expect($('//android.widget.ImageView[@content-desc="More options"]')).toBeDisplayed();
		// await expect($('//android.widget.TextView[@text="Hello world!"]')).toBeDisplayed();
		await expect($('//android.widget.TextView[@text="Hello world!"]')).toHaveText("Hello world!");

	})
})