import axios from 'axios';
import { config } from 'dotenv';

config();

const users = [
  { id: 'admin', password: process.env.PASSWORD_1 },
  { id: 'root', password: process.env.PASSWORD_2 },
];

async function checkZipCode(cep: string) {
  try {
    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    const data = response.data;

    if (data.erro) {
      return {
        message: 'CEP não encontrado',
      };
    } else {
      return data;
    }
  } catch (error) {
    return {
      message: `Erro ao consultar CEP:, ${error}`,
    };
  }
}

function checkCredentials(id: string, password: string) {
  const user = users.find(
    (user) => user.id === id && user.password === password,
  );
  return !!user;
}

export { checkZipCode, checkCredentials };
