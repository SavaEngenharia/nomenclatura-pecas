import { useState } from 'react'

function App() {
  const [form, setForm] = useState({
    grupo: '',
    subgrupo: '',
    familia: '',
    linha: '',
    dimensoes: '',
    codigoSeq: ''
  })

  const handleChange = (field) => (e) => {
    setForm({ ...form, [field]: e.target.value.toUpperCase() })
  }

  const gerarNome = () => {
    const { grupo, subgrupo, familia, linha, dimensoes, codigoSeq } = form
    if (!grupo || !subgrupo || !familia || !linha || !dimensoes || !codigoSeq) return ''
    return `${grupo}-${subgrupo}-${familia}-${linha}-${dimensoes}-${codigoSeq}`
  }

  return (
    <div style={{ maxWidth: 600, margin: '2rem auto', padding: '1rem', fontFamily: 'sans-serif' }}>
      <h2>Nomenclatura de Peças</h2>
      <div style={{ display: 'grid', gap: '1rem' }}>
        <div>
          <label>Grupo</label><br />
          <select onChange={handleChange('grupo')}>
            <option value="">Selecione</option>
            <option value="MEC">MEC - Mecânico</option>
            <option value="ELT">ELT - Elétrico</option>
            <option value="PNM">PNM - Pneumático</option>
          </select>
        </div>
        <div>
          <label>Subgrupo</label><br />
          <select onChange={handleChange('subgrupo')}>
            <option value="">Selecione</option>
            <option value="EIXO">EIXO</option>
            <option value="SUP">SUPORTE</option>
            <option value="CONEC">CONECTOR</option>
          </select>
        </div>
        <div>
          <label>Família</label><br />
          <select onChange={handleChange('familia')}>
            <option value="">Selecione</option>
            <option value="TRANSP">TRANSPORTE</option>
            <option value="GUIA">GUIA</option>
            <option value="ESTR">ESTRUTURA</option>
          </select>
        </div>
        <div>
          <label>Linha de Equipamento</label><br />
          <input onChange={handleChange('linha')} />
        </div>
        <div>
          <label>Dimensões</label><br />
          <input onChange={handleChange('dimensoes')} />
        </div>
        <div>
          <label>Código Sequencial</label><br />
          <input onChange={handleChange('codigoSeq')} />
        </div>

        <div style={{ marginTop: '1rem', background: '#eee', padding: '1rem', fontFamily: 'monospace' }}>

          {gerarNome() || 'Preencha todos os campos...'}
        </div>
      </div>
    </div>
  )
}

export default App