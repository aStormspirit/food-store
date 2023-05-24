import React from 'react'
import { render, fireEvent, cleanup } from '@testing-library/react'
import Contacts from '../../pages/contacts'

afterEach(cleanup)

test('contacts test', () => {
  const { container, getByText, getByPlaceholderText } = render(<Contacts />)

  expect(getByPlaceholderText('Как вас зовут?')).toBeTruthy()
  expect(getByPlaceholderText('Ваш телефон')).toBeTruthy()
  expect(getByPlaceholderText('Ваш email')).toBeTruthy()
  expect(getByPlaceholderText('Тема сообщения')).toBeTruthy()
  expect(getByPlaceholderText('Текст вашего сообщения')).toBeTruthy()
  expect(getByText('Согласие на обработку персональных данных')).toBeTruthy()
  expect(getByText('Отправить сообщение')).toBeTruthy()
  expect(container.querySelector('input[type="checkbox"]')).toBeTruthy()
})
