import { Validator } from '../validator';


test('Regexp test', () => {
    let a = new Validator('vasya240R');
    a.validateUserName();
    expect(Validator.name).toBeTruthy()
})