import { shallowMount } from '@vue/test-utils';
import Login from '@/views/Login.vue';
import LoginForm from '@/components/Login/LoginForm.vue';

describe('Página Login.vue', () => {
  let wrapper;
  let loginForm;

  beforeEach(() => {
    wrapper = shallowMount(Login),
    loginForm = shallowMount(LoginForm);
  })

  it('Renderiza a página Login', () => {
    expect(wrapper.find('main#login-page').exists()).toBeTruthy();
  });
  it('Renderiza o título da página', () => {
    expect(loginForm.find('h1').exists()).toBeTruthy();
    expect(loginForm.find('h1').text()).toMatch('Seja bem-vindo.');
  });
  it('Renderiza o formulário', () => {
    expect(loginForm.find('form').exists()).toBeTruthy();
  });
  it('Renderiza dois inputs Email e Senha', () => {
    expect(loginForm.findAll('input').length).toBe(2);

    expect(loginForm.find('#email').exists()).toBeTruthy();
    expect(loginForm.find('#password').exists()).toBeTruthy();
  });

  it('Renderiza o botão de Login', () => {
    expect(loginForm.find('button').exists()).toBeTruthy();
    expect(loginForm.find('#btn-login').exists()).toBeTruthy();
  });
})