import { shallowMount } from '@vue/test-utils';
import Register from '@/views/Register.vue';
import RegisterForm from '@/components/Register/RegisterForm.vue';

describe('Página Login.vue', () => {
  let wrapper;
  let registerForm;

  beforeEach(() => {
    wrapper = shallowMount(Register);
    registerForm = shallowMount(RegisterForm);
  })

  it('renderiza a página Register', () => {
    expect(wrapper.find('main#register-page').exists()).toBeTruthy();
  });
  it('renderiza o formulário', () => {
    expect(registerForm.find('form').exists()).toBeTruthy();
  });
  it('renderiza quatro inputs', () => {
    expect(registerForm.findAll('input').length).toBe(4);

    expect(registerForm.find('#full-name').exists()).toBeTruthy();
    expect(registerForm.find('#email').exists()).toBeTruthy();
    expect(registerForm.find('#password').exists()).toBeTruthy();
    expect(registerForm.find('#password-confirm').exists()).toBeTruthy();
  });
  it('renderiza o botão de Cadastro', () => {
    expect(registerForm.find('button').exists()).toBeTruthy();
    expect(registerForm.find('#btn-register').exists()).toBeTruthy();
  });
})