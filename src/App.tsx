import React, { useState, ChangeEvent, FormEvent } from 'react';
import TextInput from './components/TextInput.tsx';
import NumberInput from './components/NumberInput.tsx';
import SelectInput from './components/SelectInput.tsx';
import './App.css';
import './components/regForm.css';

interface FormState {
  name: string;
  password: string;
  fullName: string;
  age: number;
  gender: string;
}

const App = () => {
  const [form, setForm] = useState<FormState>({
    name: '',
    password: '',
    fullName: '',
    age: 0,
    gender: ''
  });

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(form);
  };

  const update = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  return (
    <div className="wrapper">
        <form onSubmit={submit} className="regForm">
          <label>
            Имя:
            <TextInput
              value={form.name}
              name="name"
              onChange={update}
            />
          </label>
          
          <label>
            Пароль:
            <TextInput
              value={form.password}
              name="password"
              onChange={update}
              required
              inputType="password"
            />
          </label>

          <label>
            ФИО:
            <TextInput
              value={form.fullName}
              name="fullName"
              onChange={update}
            />
          </label>

          <label>
            Возраст:
            <NumberInput
              value={form.age}
              name="age"
              onChange={update}
            />
          </label>

          <label>
            Пол:
            <SelectInput
              value={form.gender}
              name="gender"
              onChange={update}
            />
          </label>

          <button type="submit">Отправить</button>
        </form>
      </div>
  );
}

export default App;
