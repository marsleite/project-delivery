import { shallowMount } from '@vue/test-utils';
import Login from '@/views/Login.vue';
import LoginForm from '@/components/Login/LoginForm.vue';

describe('Página Login.vue', () => {
  let wrapper;
  let loginForm;

  beforeEach(() => {
    wrapper = shallowMount(Login, {
      propsData: {

      }
    }),
    loginForm = shallowMount(LoginForm);
  })

  it('renderiza a página Login', () => {
    expect(wrapper.find('main#login-page').exists()).toBeTruthy();
    // expect(wrapper.find('form').exists()).toBeTruthy();
  });
  it('renderiza o formulário', () => {
    expect(loginForm.find('form').exists()).toBeTruthy();
  });
  it('renderiza dois inputs Email e Senha', () => {
    expect(loginForm.findAll('input').length).toBe(2);
    expect(loginForm.find('#email').exists()).toBeTruthy();
    expect(loginForm.find('#password').exists()).toBeTruthy();
  });

  it('renderiza o botão de Login', () => {
    expect(loginForm.find('button').exists()).toBeTruthy();
    expect(loginForm.find('#btn-login').exists()).toBeTruthy();
  });
})