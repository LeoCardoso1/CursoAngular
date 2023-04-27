import './MyForm.css'

import { useState } from 'react'

const MyForm = ({user}) => {
  // 3- Gerenciamento de dados

  const [name, setName] = useState(user ? user.name: "");
  const [email, setEmail] = useState(user ? user.email: "");
  const [bio, setBio] = useState("");
  const [role, setRole] = useState("");

  // console.log(name)
  // console.log(email)

  const handleName = (e) => {
    setName(e.target.value)
    console.log(name, email, bio);
  }

  const handleSubmit = (e) => {
    e.preventDefalut();
    console.log("Enviando Formulário")

    // 7 - Limpar Form

    setName("");
    setEmail("");
  }



  return (
    <div>
      {/* 1 Criação de form */}
      <form onSubmit={handleSubmit}>
        <div>
        <label htmlFor='name'>Nome:</label>
        <input type="text" 
        name="name" 
        placeholder="Digite o seu nome" 
        onChange={handleName}
        value={name} />
        </div>
      {/* 2 Label envolvendo input */}
        <label>
          <span>Email</span>
          <input type="email"
           name="email"
           placeholder="Digite o seu email" onChange={(e) => setEmail(e.target.value)}
           value={email} />
        </label>
        {/* 8- TextArea */}
          <label>
          <span>Bio:</span>
          <textarea name="bio"
          placeholder="Descrição do usuário"
          onChange={(e) => setBio(e.target.value)}
          value={bio}
          >
          </textarea>
          <label>
            <span> Função no sistema</span>
            <select name="role" onChange={(e) => setRole(e.target.value)}>
              <option value="user"> Usuário </option>
              <option value="user"> Editor </option>
              <option value="user"> Adm </option>
            </select>
          </label>
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  )
}

export default MyForm