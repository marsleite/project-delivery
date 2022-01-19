import { shallowMount } from '@vue/test-utils';
import Login from '@/views/Login.vue';

describe('Página Login.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Login, {
      propsData: {

      }
    });
  })

  it('renderiza a página Login com um formulário', () => {
    expect(wrapper.find('main#login-page').exists()).toBeTruthy();
    expect(wrapper.find('form').exists()).toBeTruthy();
  });

  it('renderiza dois inputs Email e Senha', () => {
    expect(wrapper.findAll('input').length).toBe(2);
    expect(wrapper.find('#email').exists()).toBeTruthy();
    expect(wrapper.find('#password').exists()).toBeTruthy();
  });

  it('renderiza o botão de Login', () => {
    expect(wrapper.find('button').exists()).toBeTruthy();
    expect(wrapper.find('#btn-login').exists()).toBeTruthy();
  });
})