import { shallowMount } from '@vue/test-utils';
import Login from '@/views/Login.vue';

describe('Login.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Login, {
      propsData: {
        
      }
    });
  })

  it('renderiza a página Login', () => {
    expect(wrapper.find('main#login-page').exists()).toBeTruthy();
  });

  it('renderiza o form de Login', () => {
    expect(wrapper.find('form').exists()).toBeTruthy();
  });

  it('renderiza dois inputs: Email e Senha', () => {
    expect(wrapper.findAll('input').length).toBe(2);

    expect(wrapper.find('.email-input').exists()).toBeTruthy();
    expect(wrapper.find('.password-input').exists()).toBeTruthy();
  });
})